import {useEffect, useMemo, useState} from 'react';
import {QuestionRenderer} from './components/quiz/QuestionRenderer';
import {LESSONS_DATA, QUESTION_BANK, TOPIC_MAP} from './data';
import {CheatsheetView} from './features/cheatsheat/CheatsheetView';
import {ExamBuilder} from './features/exam/ExamBuilder';
import {ExamResultView} from './features/exam/ExamResultView';
import {PracticeConfig} from './features/practice/PracticeConfig';
import {PracticeSession} from './features/practice/PracticeSession';
import {getQuestionsByIds} from './services/questionBank';
import {type ExamConfig, generateExam} from './services/examGenerator';
import {evaluateAnswer} from './services/scoring';
import {getProgress, recordExamResult, recordQuestionAttempt, saveProgress, updateLessonComplete} from './storage';
import type {ExamResult, Lesson, Question, Track, UserProgress} from './types';

type NavigationTab = 'dashboard' | 'lessons' | 'cheatsheet' | 'practice' | 'exam';

const TRACK_BADGES: Record<string, { label: string; style: string }> = {
  grammar: { label: 'Ngữ pháp', style: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  vocabulary: { label: 'Từ vựng', style: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  pronunciation: { label: 'Phát âm', style: 'bg-purple-50 text-purple-700 border-purple-200' },
};

export function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');
  const [progress, setProgress] = useState<UserProgress>(getProgress());

  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [lessonTrackFilter, setLessonTrackFilter] = useState<Track | 'all'>('all');
  const [lessonQuizActive, setLessonQuizActive] = useState(false);
  const [lessonQuizAnswers, setLessonQuizAnswers] = useState<Record<string, unknown>>({});
  const [lessonQuizSubmitted, setLessonQuizSubmitted] = useState(false);

  const [activePracticeQuestions, setActivePracticeQuestions] = useState<Question[] | null>(null);
  const [activeExamQuestions, setActiveExamQuestions] = useState<Question[] | null>(null);
  const [examSessionAnswers, setExamSessionAnswers] = useState<Record<string, unknown>>({});
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [examCurrentIndex, setExamCurrentIndex] = useState(0);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const lessonQuestions = useMemo(() => {
    if (!selectedLesson) return [];
    return getQuestionsByIds(QUESTION_BANK, selectedLesson.questionIds);
  }, [selectedLesson]);

  const weakTopics = useMemo(() => {
    const stats = progress.questionStats || {};
    const topicAgg: Record<string, { attempts: number; correct: number }> = {};

    QUESTION_BANK.forEach((q) => {
      const stat = stats[q.id];
      if (!stat || stat.attempts === 0) return;
      q.topicIds.forEach((tid) => {
        if (!topicAgg[tid]) topicAgg[tid] = { attempts: 0, correct: 0 };
        topicAgg[tid].attempts += stat.attempts;
        topicAgg[tid].correct += stat.correctCount;
      });
    });

    return Object.entries(topicAgg)
      .map(([id, { attempts, correct }]) => ({
        id,
        name: TOPIC_MAP[id]?.name || id,
        pct: Math.round((correct / attempts) * 100),
        attempts,
      }))
      .filter((t) => t.attempts >= 2 && t.pct < 70)
      .sort((a, b) => a.pct - b.pct)
      .slice(0, 5);
  }, [progress]);

  const handleCompleteLesson = (lessonId: string) => {
    const updated = updateLessonComplete(lessonId);
    setProgress(updated);
  };

  const handleGenerateExam = (config: ExamConfig, _meta?: { totalAvailable: number; isTruncated: boolean }) => {
    const result = generateExam(QUESTION_BANK, config);
    if (result.questions.length === 0) {
      alert('Không tìm thấy câu hỏi phù hợp với bộ lọc!');
      return;
    }
    setActiveExamQuestions(result.questions);
    setExamSessionAnswers({});
    setExamResult(null);
    setExamCurrentIndex(0);
  };

  const handleSubmitExam = () => {
    if (!activeExamQuestions) return;

    let correctCount = 0;
    const userAnswersMap: Record<string, { answer: unknown; isCorrect: boolean }> = {};
    const trackScores: Record<Track, number> = { grammar: 0, vocabulary: 0, pronunciation: 0 };
    const trackTotals: Record<Track, number> = { grammar: 0, vocabulary: 0, pronunciation: 0 };
    const topicScores: Record<string, { total: number; correct: number }> = {};

    activeExamQuestions.forEach((q) => {
      const ans = examSessionAnswers[q.id];
      const evalResult = evaluateAnswer(q, ans);
      const isCorrect = evalResult.isCorrect;

      if (isCorrect) correctCount++;
      userAnswersMap[q.id] = { answer: ans, isCorrect };
      recordQuestionAttempt(q.id, isCorrect);

      trackTotals[q.track]++;
      if (isCorrect) trackScores[q.track]++;

      q.topicIds.forEach((tid) => {
        if (!topicScores[tid]) topicScores[tid] = { total: 0, correct: 0 };
        topicScores[tid].total++;
        if (isCorrect) topicScores[tid].correct++;
      });
    });

    const scorePct = Math.round((correctCount / activeExamQuestions.length) * 100);

    const normalizedTrackScores: Record<Track, number> = {
      grammar: trackTotals.grammar > 0 ? Math.round((trackScores.grammar / trackTotals.grammar) * 100) : 0,
      vocabulary: trackTotals.vocabulary > 0 ? Math.round((trackScores.vocabulary / trackTotals.vocabulary) * 100) : 0,
      pronunciation: trackTotals.pronunciation > 0 ? Math.round((trackScores.pronunciation / trackTotals.pronunciation) * 100) : 0,
    };

    const result: ExamResult = {
      id: 'exam_' + Date.now(),
      timestamp: Date.now(),
      scorePercentage: scorePct,
      totalQuestions: activeExamQuestions.length,
      correctAnswersCount: correctCount,
      trackScores: normalizedTrackScores,
      topicScores,
      userAnswers: userAnswersMap,
    };

    const updatedProg = recordExamResult(result);
    setProgress(updatedProg);
    setExamResult(result);
  };

  const handleSubmitLessonQuiz = () => {
    if (!selectedLesson) return;
    let correct = 0;
    lessonQuestions.forEach((q) => {
      const result = evaluateAnswer(q, lessonQuizAnswers[q.id]);
      if (result.isCorrect) correct++;
      recordQuestionAttempt(q.id, result.isCorrect);
    });
    const score = Math.round((correct / lessonQuestions.length) * 100);
    const updated = updateLessonComplete(selectedLesson.id, score);
    setProgress(updated);
    setLessonQuizSubmitted(true);
  };

  const resetLessonQuiz = () => {
    setLessonQuizAnswers({});
    setLessonQuizSubmitted(false);
  };

  const switchTab = (tab: NavigationTab) => {
    setActiveTab(tab);
    setSelectedLesson(null);
    setActivePracticeQuestions(null);
    setActiveExamQuestions(null);
    setExamResult(null);
    setLessonQuizActive(false);
    resetLessonQuiz();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-12">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => switchTab('dashboard')}
            className="flex items-center space-x-3 cursor-pointer bg-transparent border-0 p-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md font-black text-lg">
              E
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">EnglishHub</span>
          </button>

          <nav className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto" aria-label="Main navigation">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: '📊' },
              { id: 'lessons', label: 'Bài học', icon: '📚' },
              { id: 'cheatsheet', label: 'Tra cứu', icon: '💡' },
              { id: 'practice', label: 'Luyện tập', icon: '🎯' },
              { id: 'exam', label: 'Thi thử', icon: '📝' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => switchTab(item.id as NavigationTab)}
                aria-current={activeTab === item.id ? 'page' : undefined}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600 border border-blue-100 shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold">Chào mừng trở lại! 👋</h2>
              <p className="mt-2 text-blue-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                Tiếp tục hành trình chinh phục tiếng Anh với hệ thống bài học và ngân hàng câu hỏi thông minh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold">📚</div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Bài học hoàn thành</p>
                  <p className="text-2xl font-black text-slate-900 mt-0.5">
                    {progress.completedLessonIds.length} <span className="text-sm font-medium text-slate-400">/ {LESSONS_DATA.length}</span>
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold">🎯</div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Câu hỏi đã làm</p>
                  <p className="text-2xl font-black text-slate-900 mt-0.5">{Object.keys(progress.questionStats || {}).length}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl font-bold">📝</div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Bài thi đã làm</p>
                  <p className="text-2xl font-black text-slate-900 mt-0.5">{(progress.examHistory || []).length}</p>
                </div>
              </div>
            </div>

            {weakTopics.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-slate-900">📉 Chủ đề cần cải thiện</h3>
                <ul className="space-y-2">
                  {weakTopics.map((t) => (
                    <li key={t.id} className="flex items-center justify-between text-sm">
                      <span className="text-slate-700">{t.name}</span>
                      <span className="font-bold text-rose-600">{t.pct}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(progress.examHistory || []).length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                <h3 className="text-lg font-bold text-slate-900">📝 Bài thi gần đây</h3>
                <ul className="space-y-2">
                  {(progress.examHistory || []).slice(0, 3).map((exam) => (
                    <li key={exam.id} className="flex items-center justify-between text-sm border-b border-slate-50 pb-2 last:border-0">
                      <span className="text-slate-500">{new Date(exam.timestamp).toLocaleDateString('vi-VN')}</span>
                      <span className="font-bold text-slate-900">{exam.scorePercentage}% ({exam.correctAnswersCount}/{exam.totalQuestions})</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">💡 Tra cứu nhanh Cheatsheet</h3>
                  <p className="text-sm text-slate-500 mt-1">Xem lại công thức Ngữ pháp, từ vựng trọng tâm và quy tắc phát âm.</p>
                </div>
                <button type="button" onClick={() => switchTab('cheatsheet')} className="self-start px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all">
                  Mở Cheatsheet →
                </button>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">🎯 Tạo bài thi thử</h3>
                  <p className="text-sm text-slate-500 mt-1">Tùy chỉnh bài thi theo chủ đề, độ khó và dạng câu hỏi bạn mong muốn.</p>
                </div>
                <button type="button" onClick={() => switchTab('exam')} className="self-start px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all">
                  Tạo bài test ngay →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* LESSONS */}
        {activeTab === 'lessons' && (
          <div>
            {!selectedLesson ? (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Danh sách bài học</h2>
                    <p className="text-xs text-slate-500">Lựa chọn bài học theo lộ trình lý thuyết & câu hỏi đi kèm.</p>
                  </div>
                  <div className="flex items-center space-x-1 overflow-x-auto pb-1 sm:pb-0">
                    {(['all', 'grammar', 'vocabulary', 'pronunciation'] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setLessonTrackFilter(t)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all whitespace-nowrap ${
                          lessonTrackFilter === t ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {t === 'all' ? 'Tất cả' : TRACK_BADGES[t]?.label || t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {LESSONS_DATA.filter((l) => lessonTrackFilter === 'all' || l.track === lessonTrackFilter).map((les) => {
                    const isCompleted = progress.completedLessonIds.includes(les.id);
                    const trackInfo = TRACK_BADGES[les.track] || { label: les.track, style: 'bg-slate-100 text-slate-700' };
                    return (
                      <button
                        key={les.id}
                        type="button"
                        onClick={() => { setSelectedLesson(les); setLessonQuizActive(false); resetLessonQuiz(); }}
                        className={`group relative bg-white p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 hover:shadow-lg hover:-translate-y-0.5 text-left w-full ${
                          isCompleted ? 'border-emerald-200 bg-emerald-50/10' : 'border-slate-200/80 hover:border-blue-400'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border ${trackInfo.style}`}>{trackInfo.label}</span>
                            {isCompleted && <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓ Đã xong</span>}
                          </div>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{les.title}</h3>
                          <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">{les.description}</p>
                        </div>
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                          <span>⏱ {les.durationMinutes} phút · {les.questionIds.length} câu hỏi</span>
                          <span className="text-blue-600 font-semibold">Học ngay →</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                <button type="button" onClick={() => { setSelectedLesson(null); setLessonQuizActive(false); resetLessonQuiz(); }} className="text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                  ← Quay lại danh sách bài học
                </button>

                <div>
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border uppercase tracking-wider ${TRACK_BADGES[selectedLesson.track]?.style}`}>
                    {TRACK_BADGES[selectedLesson.track]?.label}
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 mt-2">{selectedLesson.title}</h2>
                  <p className="text-sm text-slate-500 mt-1">{selectedLesson.description}</p>
                </div>

                <hr className="border-slate-100" />

                {!lessonQuizActive ? (
                  <>
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider">1. Lý thuyết</h3>
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-sm text-slate-700 leading-relaxed">
                        {selectedLesson.content.theory}
                      </div>
                    </div>

                    {selectedLesson.content.vocabularyList && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-wider">2. Từ vựng</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {selectedLesson.content.vocabularyList.map((v) => (
                            <div key={v.word} className="p-3 bg-emerald-50/50 border border-emerald-200/60 rounded-xl text-sm">
                              <span className="font-bold text-slate-900">{v.word}</span>
                              {v.phonetic && <span className="text-slate-400 ml-2 text-xs">{v.phonetic}</span>}
                              <p className="text-slate-600 mt-0.5">{v.meaning}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedLesson.content.examples && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-bold text-amber-600 uppercase tracking-wider">
                          {selectedLesson.content.vocabularyList ? '3. Ví dụ' : '2. Ví dụ minh họa'}
                        </h3>
                        <div className="space-y-2">
                          {selectedLesson.content.examples.map((ex, i) => (
                            <div key={i} className="p-3 bg-amber-50/50 border border-amber-200/60 rounded-xl text-sm text-slate-800">• {ex}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-4 flex flex-wrap gap-3 justify-end">
                      {lessonQuestions.length > 0 && (
                        <button
                          type="button"
                          onClick={() => { setLessonQuizActive(true); resetLessonQuiz(); }}
                          className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-sm"
                        >
                          Làm bài kiểm tra ({lessonQuestions.length} câu) →
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => handleCompleteLesson(selectedLesson.id)}
                        className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                          progress.completedLessonIds.includes(selectedLesson.id)
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        }`}
                      >
                        {progress.completedLessonIds.includes(selectedLesson.id) ? '✓ Đã hoàn thành' : 'Đánh dấu đã học xong ✓'}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider">Bài kiểm tra bài học</h3>

                    {!lessonQuizSubmitted ? (
                      <>
                        {lessonQuestions.map((q, idx) => (
                          <div key={q.id} className="space-y-2">
                            <span className="text-xs font-bold text-slate-500">Câu {idx + 1}</span>
                            <QuestionRenderer
                              question={q}
                              userAnswer={lessonQuizAnswers[q.id]}
                              onAnswerChange={(val) => setLessonQuizAnswers((prev) => ({ ...prev, [q.id]: val }))}
                            />
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={handleSubmitLessonQuiz}
                          className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
                        >
                          Nộp bài
                        </button>
                      </>
                    ) : (
                      <div className="text-center space-y-4">
                        {(() => {
                          let correct = 0;
                          lessonQuestions.forEach((q) => {
                            if (evaluateAnswer(q, lessonQuizAnswers[q.id]).isCorrect) correct++;
                          });
                          const pct = Math.round((correct / lessonQuestions.length) * 100);
                          return (
                            <>
                              <div className="w-20 h-20 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-2xl font-black">{pct}%</div>
                              <p className="text-sm text-slate-600">Đúng {correct}/{lessonQuestions.length} câu</p>
                            </>
                          );
                        })()}
                        <div className="space-y-3">
                          {lessonQuestions.map((q, idx) => {
                            const result = evaluateAnswer(q, lessonQuizAnswers[q.id]);
                            return (
                              <QuestionRenderer
                                key={q.id}
                                question={q}
                                userAnswer={lessonQuizAnswers[q.id]}
                                onAnswerChange={() => {}}
                                showFeedback
                                disabled
                              />
                            );
                          })}
                        </div>
                        <button type="button" onClick={() => { setLessonQuizActive(false); resetLessonQuiz(); }} className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm">
                          Quay lại bài học
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === 'cheatsheet' && <CheatsheetView />}

        {activeTab === 'practice' && (
          <div>
            {!activePracticeQuestions ? (
              <PracticeConfig onStart={setActivePracticeQuestions} />
            ) : (
              <PracticeSession
                questions={activePracticeQuestions}
                onFinish={() => setActivePracticeQuestions(null)}
              />
            )}
          </div>
        )}

        {activeTab === 'exam' && (
          <div>
            {!activeExamQuestions ? (
              <ExamBuilder onGenerate={handleGenerateExam} />
            ) : examResult ? (
              <ExamResultView
                result={examResult}
                questions={activeExamQuestions}
                onNewTest={() => { setActiveExamQuestions(null); setExamResult(null); }}
                onBackToDashboard={() => switchTab('dashboard')}
              />
            ) : (
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Đang làm bài thi</h3>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    Câu {examCurrentIndex + 1} / {activeExamQuestions.length}
                  </span>
                </div>

                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full transition-all"
                    style={{ width: `${((examCurrentIndex + 1) / activeExamQuestions.length) * 100}%` }}
                  />
                </div>

                <QuestionRenderer
                  question={activeExamQuestions[examCurrentIndex]}
                  userAnswer={examSessionAnswers[activeExamQuestions[examCurrentIndex].id]}
                  onAnswerChange={(val) =>
                    setExamSessionAnswers((prev) => ({ ...prev, [activeExamQuestions[examCurrentIndex].id]: val }))
                  }
                />

                <div className="flex justify-between gap-3">
                  <button
                    type="button"
                    disabled={examCurrentIndex === 0}
                    onClick={() => setExamCurrentIndex((i) => i - 1)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm disabled:opacity-40"
                  >
                    ← Trước
                  </button>

                  {examCurrentIndex < activeExamQuestions.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setExamCurrentIndex((i) => i + 1)}
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm"
                    >
                      Tiếp →
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmitExam}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
                    >
                      Nộp bài thi 🎯
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
