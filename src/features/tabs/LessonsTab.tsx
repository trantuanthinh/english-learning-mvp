import {useMemo, useState} from "react";
import {TRACK_BADGES} from "../../App";
import {QuestionRenderer} from "../../components/quiz/QuestionRenderer";
import {LESSONS_DATA, QUESTION_BANK} from "../../data";
import {getQuestionsByIds} from "../../services/questionBank";
import {evaluateAnswer} from "../../services/scoring";
import {getProgress, recordQuestionAttempt, saveProgress, updateLessonComplete} from "../../storage";
import type {Lesson, Track, UserProgress} from "../../types";

export default function LessonsTab({
    progress,
    onProgressChange,
}: {
    progress: UserProgress;
    onProgressChange: () => void;
}) {
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    const [lessonTrackFilter, setLessonTrackFilter] = useState<Track | "all">("all");
    const [lessonQuizActive, setLessonQuizActive] = useState(false);
    const [lessonQuizAnswers, setLessonQuizAnswers] = useState<Record<string, unknown>>({});
    const [lessonQuizSubmitted, setLessonQuizSubmitted] = useState(false);

    const lessonQuestions = useMemo(() => {
        if (!selectedLesson) return [];
        return getQuestionsByIds(QUESTION_BANK, selectedLesson.questionIds);
    }, [selectedLesson]);

    const resetLessonQuiz = () => {
        setLessonQuizAnswers({});
        setLessonQuizSubmitted(false);
    };

    const handleCompleteLesson = (lessonId: string) => {
        updateLessonComplete(lessonId);
        onProgressChange();
    };

    const handleSubmitLessonQuiz = () => {
        if (!selectedLesson) return;
        let correct = 0;
        lessonQuestions.forEach((q) => {
            const result = evaluateAnswer(q, lessonQuizAnswers[q.id]);
            if (result.isCorrect) correct++;
            recordQuestionAttempt(q.id, lessonQuizAnswers[q.id], result.isCorrect);
        });
        const score = Math.round((correct / lessonQuestions.length) * 100);
        updateLessonComplete(selectedLesson.id);
        const updatedProgress = getProgress();
        updatedProgress.quizScores[selectedLesson.id] = score;
        saveProgress(updatedProgress);
        onProgressChange();
        setLessonQuizSubmitted(true);
    };

    if (!selectedLesson) {
        return (
            <div className="space-y-6">
                <div className="flex flex-col justify-between gap-4 p-4 bg-white border shadow-sm sm:flex-row sm:items-center rounded-2xl border-slate-200/80">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">Danh sách bài học</h2>
                        <p className="text-xs text-slate-500">
                            Lựa chọn bài học theo lộ trình lý thuyết & câu hỏi đi kèm.
                        </p>
                    </div>
                    <div className="flex items-center pb-1 space-x-1 overflow-x-auto sm:pb-0">
                        {(["all", "grammar", "vocabulary", "pronunciation"] as const).map((t) => (
                            <button
                                key={t}
                                type="button"
                                onClick={() => setLessonTrackFilter(t)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all whitespace-nowrap ${lessonTrackFilter === t
                                    ? "bg-slate-900 text-white shadow-sm"
                                    : "text-slate-600 hover:bg-slate-100"
                                    }`}>
                                {t === "all" ? "Tất cả" : TRACK_BADGES[t]?.label || t}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {LESSONS_DATA.filter(
                        (l) => lessonTrackFilter === "all" || l.track === lessonTrackFilter,
                    ).map((les) => {
                        const isCompleted = progress.completedLessonIds.includes(les.id);
                        const trackInfo = TRACK_BADGES[les.track] || {
                            label: les.track,
                            style: "bg-slate-100 text-slate-700",
                        };
                        return (
                            <button
                                key={les.id}
                                type="button"
                                onClick={() => {
                                    setSelectedLesson(les);
                                    setLessonQuizActive(false);
                                    resetLessonQuiz();
                                }}
                                className={`group relative bg-white p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 hover:shadow-lg hover:-translate-y-0.5 text-left w-full ${isCompleted
                                    ? "border-emerald-200 bg-emerald-50/10"
                                    : "border-slate-200/80 hover:border-blue-400"
                                    }`}>
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span
                                            className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border ${trackInfo.style}`}>
                                            {trackInfo.label}
                                        </span>
                                        {isCompleted && (
                                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                                                ✓ Đã xong
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-base font-bold transition-colors text-slate-900 group-hover:text-blue-600">
                                        {les.title}
                                    </h3>
                                    <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
                                        {les.description}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pt-3 text-xs font-medium border-t border-slate-100 text-slate-400">
                                    <span>
                                        ⏱ {les.durationMinutes} phút · {les.questionIds.length} câu hỏi
                                    </span>
                                    <span className="font-semibold text-blue-600">Học ngay →</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl p-6 mx-auto space-y-6 bg-white border shadow-sm sm:p-8 rounded-3xl border-slate-200/80">
            <button
                type="button"
                onClick={() => {
                    setSelectedLesson(null);
                    setLessonQuizActive(false);
                    resetLessonQuiz();
                }}
                className="text-xs font-semibold transition-colors sm:text-sm text-slate-500 hover:text-slate-900">
                ← Quay lại danh sách bài học
            </button>

            <div>
                <span
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border uppercase tracking-wider ${TRACK_BADGES[selectedLesson.track]?.style}`}>
                    {TRACK_BADGES[selectedLesson.track]?.label}
                </span>
                <h2 className="mt-2 text-2xl font-black text-slate-900">{selectedLesson.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{selectedLesson.description}</p>
            </div>

            <hr className="border-slate-100" />

            {!lessonQuizActive ? (
                <>
                    <div className="space-y-2">
                        <h3 className="text-sm font-bold tracking-wider text-blue-600 uppercase">
                            1. Lý thuyết
                        </h3>
                        <div className="p-4 text-sm leading-relaxed border bg-slate-50 rounded-2xl border-slate-200/80 text-slate-700">
                            {selectedLesson.content.theory}
                        </div>
                    </div>

                    {selectedLesson.content.vocabularyList && (
                        <div className="space-y-2">
                            <h3 className="text-sm font-bold tracking-wider uppercase text-emerald-600">
                                2. Từ vựng
                            </h3>
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                {selectedLesson.content.vocabularyList.map((v) => (
                                    <div
                                        key={v.word}
                                        className="p-3 text-sm border bg-emerald-50/50 border-emerald-200/60 rounded-xl">
                                        <span className="font-bold text-slate-900">{v.word}</span>
                                        {v.phonetic && (
                                            <span className="ml-2 text-xs text-slate-400">
                                                {v.phonetic}
                                            </span>
                                        )}
                                        <p className="text-slate-600 mt-0.5">{v.meaning}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedLesson.content.examples && (
                        <div className="space-y-2">
                            <h3 className="text-sm font-bold tracking-wider uppercase text-amber-600">
                                {selectedLesson.content.vocabularyList
                                    ? "3. Ví dụ"
                                    : "2. Ví dụ minh họa"}
                            </h3>
                            <div className="space-y-2">
                                {selectedLesson.content.examples.map((ex, i) => (
                                    <div
                                        key={i}
                                        className="p-3 text-sm border bg-amber-50/50 border-amber-200/60 rounded-xl text-slate-800">
                                        • {ex}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-wrap justify-end gap-3 pt-4">
                        {lessonQuestions.length > 0 && (
                            <button
                                type="button"
                                onClick={() => {
                                    setLessonQuizActive(true);
                                    resetLessonQuiz();
                                }}
                                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-sm">
                                Làm bài kiểm tra ({lessonQuestions.length} câu) →
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={() => handleCompleteLesson(selectedLesson.id)}
                            className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm ${progress.completedLessonIds.includes(selectedLesson.id)
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                : "bg-emerald-600 hover:bg-emerald-700 text-white"
                                }`}>
                            {progress.completedLessonIds.includes(selectedLesson.id)
                                ? "✓ Đã hoàn thành"
                                : "Đánh dấu đã học xong ✓"}
                        </button>
                    </div>
                </>
            ) : (
                <div className="space-y-6">
                    <h3 className="text-sm font-bold tracking-wider text-blue-600 uppercase">
                        Bài kiểm tra bài học
                    </h3>

                    {!lessonQuizSubmitted ? (
                        <>
                            {lessonQuestions.map((q, idx) => (
                                <div key={q.id} className="space-y-2">
                                    <span className="text-xs font-bold text-slate-500">
                                        Câu {idx + 1}
                                    </span>
                                    <QuestionRenderer
                                        question={q}
                                        userAnswer={lessonQuizAnswers[q.id]}
                                        onAnswerChange={(val) =>
                                            setLessonQuizAnswers((prev) => ({...prev, [q.id]: val}))
                                        }
                                    />
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleSubmitLessonQuiz}
                                className="w-full py-3 text-sm font-bold text-white shadow-md rounded-xl bg-emerald-600 hover:bg-emerald-700">
                                Nộp bài
                            </button>
                        </>
                    ) : (
                        <div className="space-y-4 text-center">
                            {(() => {
                                let correct = 0;
                                lessonQuestions.forEach((q) => {
                                    if (evaluateAnswer(q, lessonQuizAnswers[q.id]).isCorrect) correct++;
                                });
                                const pct = Math.round((correct / lessonQuestions.length) * 100);
                                return (
                                    <>
                                        <div className="flex items-center justify-center w-20 h-20 mx-auto text-2xl font-black rounded-full bg-emerald-50 text-emerald-600">
                                            {pct}%
                                        </div>
                                        <p className="text-sm text-slate-600">
                                            Đúng {correct}/{lessonQuestions.length} câu
                                        </p>
                                    </>
                                );
                            })()}
                            <div className="space-y-3">
                                {lessonQuestions.map((q) => (
                                    <QuestionRenderer
                                        key={q.id}
                                        question={q}
                                        userAnswer={lessonQuizAnswers[q.id]}
                                        onAnswerChange={() => {}}
                                        showFeedback
                                        disabled
                                    />
                                ))}
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    setLessonQuizActive(false);
                                    resetLessonQuiz();
                                }}
                                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm">
                                Quay lại bài học
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}