import {useEffect, useMemo, useState} from "react";
import {QuestionRenderer} from "./components/quiz/QuestionRenderer";
import {LESSONS_DATA, QUESTION_BANK, TOPIC_MAP} from "./data";
import {CheatsheetView} from "./features/cheatsheat/CheatsheetView";
import {ExamBuilder} from "./features/exam/ExamBuilder";
import {ExamResultView} from "./features/exam/ExamResultView";
import {PracticeConfig} from "./features/practice/PracticeConfig";
import {PracticeSession} from "./features/practice/PracticeSession";
import {TRIAL_LIMITS} from "./features/trial/trialConfig";
import {TrialLimitModal} from "./features/trial/TrialLimitModal";
import {type ExamConfig, generateExam} from "./services/examGenerator";
import {getQuestionsByIds} from "./services/questionBank";
import {evaluateAnswer} from "./services/scoring";
import {
    getProgress,
    getTrialUsage,
    recordExamResult,
    recordQuestionAttempt,
    recordTrialUse,
    saveProgress,
    updateLessonComplete
} from "./storage";
import type {ExamResult, Lesson, Question, Track, TrialAction, UserProgress} from "./types";

export type NavigationTab = "dashboard" | "lessons" | "cheatsheet" | "practice" | "review" | "flashcards" | "exam";
export type FlashcardState = "new" | "learning" | "known" | "hard";

interface VocabularyCard {
    id: string;
    word: string;
    meaning: string;
    phonetic?: string;
    example?: string;
    lessonId: string;
}

interface WrongEntry {
    question: Question;
    previousAnswer: unknown;
    lastWrongAt: number;
}

interface TabTrialProps {
    onTryConsume: (action: TrialAction) => boolean;
}

export const TRACK_BADGES: Record<string, {label: string; style: string;}> = {
    grammar: {label: "Ngữ pháp", style: "bg-indigo-50 text-indigo-700 border-indigo-200"},
    vocabulary: {label: "Từ vựng", style: "bg-emerald-50 text-emerald-700 border-emerald-200"},
    pronunciation: {label: "Phát âm", style: "bg-purple-50 text-purple-700 border-purple-200"},
};

const NAV_ITEMS: {id: NavigationTab; label: string; icon: string;}[] = [
    {id: "dashboard", label: "Dashboard", icon: "📊"},
    {id: "lessons", label: "Bài học", icon: "📚"},
    {id: "cheatsheet", label: "Tra cứu", icon: "💡"},
    {id: "practice", label: "Luyện tập", icon: "🎯"},
    {id: "review", label: "Ôn lỗi sai", icon: "🔁"},
    {id: "flashcards", label: "Thẻ từ vựng", icon: "🃏"},
    {id: "exam", label: "Thi thử", icon: "📝"},
];

function buildVocabularyCards(): VocabularyCard[] {
    const cards: VocabularyCard[] = [];
    const seen = new Set<string>();
    LESSONS_DATA.forEach((lesson) => {
        lesson.content.vocabularyList?.forEach((v) => {
            const key = v.word.toLowerCase().trim();
            if (seen.has(key)) return;
            seen.add(key);
            cards.push({
                id: `vocab-${key}`,
                word: v.word,
                meaning: v.meaning,
                phonetic: v.phonetic,
                example: lesson.content.examples?.[0],
                lessonId: lesson.id,
            });
        });
    });
    return cards;
}

export function formatPreviousAnswer(question: Question, answer: unknown): string {
    if (answer === undefined || answer === null) return "(chưa trả lời)";
    switch (question.type) {
        case "multiple-choice":
        case "listening": {
            const idx = typeof answer === "number" ? answer : Number(answer);
            const opt = question.options?.[idx];
            return opt ? `${String.fromCharCode(65 + idx)}. ${opt}` : String(answer);
        }
        case "fill-blank":
            return String(answer);
        case "error-correction": {
            const a = answer as {segmentId?: string; correction?: string;};
            return `segment "${a?.segmentId ?? "?"}" → "${a?.correction ?? ""}"`;
        }
        case "speaking": {
            const a = answer as {completed?: boolean;};
            return a?.completed ? "Đã nói (hoàn thành)" : "(chưa nói)";
        }
        default:
            return String(answer);
    }
}

function DashboardTab({
    progress,
    weakTopics,
    onSwitchTab,
}: {
    progress: UserProgress;
    weakTopics: {id: string; name: string; pct: number; attempts: number;}[];
    onSwitchTab: (tab: NavigationTab) => void;
}) {
    return (
        <div className="space-y-8">
            <div className="p-6 text-white shadow-xl bg-linear-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl sm:p-8">
                <h2 className="text-2xl font-extrabold sm:text-3xl">Chào mừng trở lại! 👋</h2>
                <p className="max-w-2xl mt-2 text-sm leading-relaxed text-blue-200 sm:text-base">
                    Tiếp tục hành trình chinh phục tiếng Anh với hệ thống bài học và ngân hàng câu hỏi thông minh.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex items-center p-6 space-x-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-blue-600 rounded-xl bg-blue-50">
                        📚
                    </div>
                    <div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                            Bài học hoàn thành
                        </p>
                        <p className="text-2xl font-black text-slate-900 mt-0.5">
                            {progress.completedLessonIds.length}{" "}
                            <span className="text-sm font-medium text-slate-400">/ {LESSONS_DATA.length}</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-6 space-x-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <div className="flex items-center justify-center w-12 h-12 text-xl font-bold rounded-xl bg-emerald-50 text-emerald-600">
                        🎯
                    </div>
                    <div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                            Câu hỏi đã làm
                        </p>
                        <p className="text-2xl font-black text-slate-900 mt-0.5">
                            {Object.keys(progress.questionStats || {}).length}
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-6 space-x-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-purple-600 rounded-xl bg-purple-50">
                        📝
                    </div>
                    <div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                            Bài thi đã làm
                        </p>
                        <p className="text-2xl font-black text-slate-900 mt-0.5">
                            {(progress.examHistory || []).length}
                        </p>
                    </div>
                </div>
            </div>

            {weakTopics.length > 0 && (
                <div className="p-6 space-y-3 bg-white border shadow-sm rounded-2xl border-slate-200/80">
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
                <div className="p-6 space-y-3 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <h3 className="text-lg font-bold text-slate-900">📝 Bài thi gần đây</h3>
                    <ul className="space-y-2">
                        {(progress.examHistory || []).slice(0, 3).map((exam) => (
                            <li
                                key={exam.id}
                                className="flex items-center justify-between pb-2 text-sm border-b border-slate-50 last:border-0">
                                <span className="text-slate-500">
                                    {new Date(exam.timestamp).toLocaleDateString("vi-VN")}
                                </span>
                                <span className="font-bold text-slate-900">
                                    {exam.scorePercentage}% ({exam.correctAnswersCount}/{exam.totalQuestions})
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex flex-col justify-between p-6 space-y-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">💡 Tra cứu nhanh Cheatsheet</h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Xem lại công thức Ngữ pháp, từ vựng trọng tâm và quy tắc phát âm.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => onSwitchTab("cheatsheet")}
                        className="self-start px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all">
                        Mở Cheatsheet →
                    </button>
                </div>
                <div className="flex flex-col justify-between p-6 space-y-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">🔁 Ôn lại câu sai</h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Xem lại những câu bạn từng làm sai và thử sức lại một lần nữa.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => onSwitchTab("review")}
                        className="self-start px-4 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold text-xs sm:text-sm transition-all">
                        Ôn ngay →
                    </button>
                </div>
                <div className="flex flex-col justify-between p-6 space-y-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">🎯 Tạo bài thi thử</h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Tùy chỉnh bài thi theo chủ đề, độ khó và dạng câu hỏi bạn mong muốn.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => onSwitchTab("exam")}
                        className="self-start px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all">
                        Tạo bài test ngay →
                    </button>
                </div>
            </div>
        </div>
    );
}

function LessonsTab({
    progress,
    onProgressChange,
    onTryConsume,
}: {
    progress: UserProgress;
    onProgressChange: () => void;
} & TabTrialProps) {
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
                                    if (!onTryConsume("lesson")) return;
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
                                    if (!onTryConsume("quiz")) return;
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

function ReviewTab({
    onProgressChange,
    onGoPractice,
    onTryConsume,
}: {
    onProgressChange: () => void;
    onGoPractice: () => void;
} & TabTrialProps) {
    const [entries, setEntries] = useState<WrongEntry[]>([]);
    const [sessionActive, setSessionActive] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, unknown>>({});
    const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

    const loadEntries = () => {
        const progress = getProgress();
        const attempts = progress.questionAttempts ?? [];

        const latestByQuestion = new Map<string, {attempt: typeof attempts[number];}>();
        attempts.forEach((a) => {
            const prev = latestByQuestion.get(a.questionId);
            if (!prev || a.timestamp > prev.attempt.timestamp) {
                latestByQuestion.set(a.questionId, {attempt: a});
            }
        });

        const wrongs = Array.from(latestByQuestion.values())
            .filter((e) => !e.attempt.isCorrect)
            .sort((a, b) => b.attempt.timestamp - a.attempt.timestamp);

        const result: WrongEntry[] = [];
        wrongs.forEach((e) => {
            const q = getQuestionsByIds(QUESTION_BANK, [e.attempt.questionId])[0];
            if (q) {
                result.push({
                    question: q,
                    previousAnswer: e.attempt.answer,
                    lastWrongAt: e.attempt.timestamp,
                });
            }
        });

        setEntries(result);
    };

    useEffect(() => {
        loadEntries();
    }, []);

    const grouped = useMemo(() => {
        const map: Record<Track, WrongEntry[]> = {grammar: [], vocabulary: [], pronunciation: []};
        entries.forEach((e) => {
            if (map[e.question.track]) map[e.question.track].push(e);
        });
        return map;
    }, [entries]);

    const startSession = () => {
        if (!onTryConsume("review")) return;
        const initialAnswers: Record<string, unknown> = {};
        entries.forEach((e) => {
            initialAnswers[e.question.id] = e.previousAnswer;
        });
        setAnswers(initialAnswers);
        setSubmitted({});
        setCurrentIndex(0);
        setSessionActive(true);
    };

    const exitSession = () => {
        setSessionActive(false);
        setCurrentIndex(0);
        setAnswers({});
        setSubmitted({});
        loadEntries();
        onProgressChange();
    };

    const currentEntry = entries[currentIndex];
    const currentQuestion = currentEntry?.question;

    const handleCheck = () => {
        if (!currentQuestion) return;
        const result = evaluateAnswer(currentQuestion, answers[currentQuestion.id]);
        recordQuestionAttempt(currentQuestion.id, answers[currentQuestion.id], result.isCorrect);
        setSubmitted((prev) => ({...prev, [currentQuestion.id]: true}));
        onProgressChange();
    };

    const handleNext = () => {
        if (currentIndex < entries.length - 1) {
            setCurrentIndex((i) => i + 1);
        } else {
            exitSession();
        }
    };

    const handleTryAgain = () => {
        if (!currentQuestion) return;
        setAnswers((prev) => ({...prev, [currentQuestion.id]: currentEntry.previousAnswer}));
        setSubmitted((prev) => ({...prev, [currentQuestion.id]: false}));
    };

    if (!sessionActive) {
        return (
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="p-6 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <h2 className="text-xl font-bold text-slate-900">🔁 Ôn lại câu sai</h2>
                    <p className="mt-1 text-sm text-slate-500">
                        Chỉ hiện những câu có lần trả lời gần nhất là sai. Khi bạn trả lời đúng, câu đó sẽ biến mất khỏi danh sách.
                    </p>
                </div>

                {entries.length === 0 ? (
                    <div className="p-8 text-center bg-white border shadow-sm rounded-2xl border-slate-200/80">
                        <p className="text-4xl">🎉</p>
                        <p className="mt-3 text-sm font-semibold text-slate-700">
                            Không còn câu sai nào cần ôn. Tuyệt vời!
                        </p>
                        <button
                            type="button"
                            onClick={onGoPractice}
                            className="mt-4 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm">
                            Đi luyện tập →
                        </button>
                    </div>
                ) : (
                    <div className="p-6 space-y-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-900">
                                {entries.length} câu cần ôn lại
                            </h3>
                            <button
                                type="button"
                                onClick={startSession}
                                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm shadow-sm">
                                Ôn tất cả →
                            </button>
                        </div>
                        <ul className="space-y-3">
                            {(Object.keys(grouped) as Track[]).map((track) => {
                                const list = grouped[track];
                                if (list.length === 0) return null;
                                return (
                                    <li key={track} className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold text-slate-700">
                                                {TRACK_BADGES[track]?.label || track}
                                            </span>
                                            <span className="text-xs font-bold text-rose-600">
                                                {list.length} câu
                                            </span>
                                        </div>
                                        <ul className="pl-4 space-y-1 border-l border-slate-100">
                                            {list.slice(0, 5).map((e) => (
                                                <li key={e.question.id} className="text-xs truncate text-slate-500">
                                                    • {e.question.id}
                                                </li>
                                            ))}
                                            {list.length > 5 && (
                                                <li className="text-xs italic text-slate-400">
                                                    ... và {list.length - 5} câu khác
                                                </li>
                                            )}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        );
    }

    if (!currentEntry || !currentQuestion) {
        exitSession();
        return null;
    }

    const isSubmitted = !!submitted[currentQuestion.id];
    const evalResult = evaluateAnswer(currentQuestion, answers[currentQuestion.id]);

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between p-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                <button
                    type="button"
                    onClick={exitSession}
                    className="text-xs font-semibold sm:text-sm text-slate-500 hover:text-slate-900">
                    ← Thoát
                </button>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700">
                    Câu {currentIndex + 1} / {entries.length}
                </span>
            </div>

            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                    className="h-full transition-all bg-amber-500 rounded-full"
                    style={{width: `${((currentIndex + 1) / entries.length) * 100}%`}}
                />
            </div>

            <div className="p-4 text-sm space-y-1 border rounded-2xl bg-amber-50 border-amber-200 text-amber-900">
                <p className="font-semibold">Lần trước bạn trả lời (sai):</p>
                <p className="font-mono text-xs wrap-break-word sm:text-sm">
                    {formatPreviousAnswer(currentQuestion, currentEntry.previousAnswer)}
                </p>
            </div>

            <QuestionRenderer
                question={currentQuestion}
                userAnswer={answers[currentQuestion.id]}
                onAnswerChange={(val) =>
                    setAnswers((prev) => ({...prev, [currentQuestion.id]: val}))
                }
                showFeedback={isSubmitted}
                disabled={isSubmitted}
            />

            {isSubmitted && (
                <div className={`p-4 rounded-2xl border text-sm space-y-2 ${evalResult.isCorrect
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : "bg-rose-50 border-rose-200 text-rose-800"
                    }`}>
                    <p className="font-bold">
                        {evalResult.isCorrect
                            ? "✓ Chính xác! Câu này sẽ được gỡ khỏi danh sách ôn."
                            : "✗ Chưa đúng"}
                    </p>
                    {currentQuestion.explanation && (
                        <p className="leading-relaxed">
                            <span className="font-semibold">Giải thích: </span>
                            {currentQuestion.explanation}
                        </p>
                    )}
                    {!currentQuestion.explanation && !evalResult.isCorrect && (
                        <p className="italic opacity-80">
                            Chưa có giải thích chi tiết cho câu hỏi này.
                        </p>
                    )}
                </div>
            )}

            <div className="flex justify-between gap-3">
                {isSubmitted && !evalResult.isCorrect ? (
                    <button
                        type="button"
                        onClick={handleTryAgain}
                        className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm">
                        Thử lại
                    </button>
                ) : (
                    <span />
                )}
                {!isSubmitted ? (
                    <button
                        type="button"
                        onClick={handleCheck}
                        disabled={answers[currentQuestion.id] === undefined}
                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm disabled:opacity-40">
                        Kiểm tra
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleNext}
                        className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm">
                        {currentIndex < entries.length - 1 ? "Câu tiếp →" : "Hoàn tất"}
                    </button>
                )}
            </div>
        </div>
    );
}

function shuffle<T>(arr: T[]): T[] {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function FlashcardTab({
    onTryConsume,
}: {
    onProgressChange: () => void;
} & TabTrialProps) {
    const [cards, setCards] = useState<VocabularyCard[]>(() => buildVocabularyCards());
    const [index, setIndex] = useState(0);
    const [revealed, setRevealed] = useState(false);

    const currentCard = cards[index] ?? null;

    const handlePrev = () => {
        if (cards.length === 0) return;
        if (!onTryConsume("flashcard")) return;
        setRevealed(false);
        setIndex((i) => (i - 1 + cards.length) % cards.length);
    };

    const handleNext = () => {
        if (cards.length === 0) return;
        if (!onTryConsume("flashcard")) return;
        setRevealed(false);
        setIndex((i) => (i + 1) % cards.length);
    };

    const handleShuffle = () => {
        if (cards.length === 0) return;
        if (!onTryConsume("flashcard")) return;
        setRevealed(false);
        setCards(shuffle(cards));
        setIndex(0);
    };

    if (cards.length === 0) {
        return (
            <div className="max-w-2xl p-8 mx-auto text-center bg-white border shadow-sm rounded-2xl border-slate-200/80">
                <p className="text-4xl">🃏</p>
                <p className="mt-3 text-sm font-semibold text-slate-700">
                    Chưa có thẻ từ vựng nào. Hãy thêm từ vựng vào bài học trước.
                </p>
            </div>
        );
    }

    if (!currentCard) return null;

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="p-6 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">🃏 Thẻ từ vựng</h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Nhấn vào thẻ để xem nghĩa. Đi tới/lùi hoặc xáo trộn đều tốn 1 lượt.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={handleShuffle}
                        className="px-3 py-2 text-xs font-bold rounded-xl bg-purple-100 text-purple-700 hover:bg-purple-200 shrink-0">
                        🔀 Xáo trộn
                    </button>
                </div>
                <div className="mt-4 text-xs font-semibold text-slate-500">
                    Thẻ {index + 1} / {cards.length}
                </div>
            </div>

            <button
                type="button"
                onClick={() => setRevealed((r) => !r)}
                className="w-full min-h-70 flex flex-col items-center justify-center p-8 text-center bg-white border-2 shadow-md rounded-3xl border-slate-200 hover:border-blue-400 transition-all">
                {!revealed ? (
                    <>
                        <p className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            {currentCard.word}
                        </p>
                        {currentCard.phonetic && (
                            <p className="mt-3 text-base text-slate-400">{currentCard.phonetic}</p>
                        )}
                        <p className="mt-8 text-xs font-semibold tracking-widest uppercase text-blue-600">
                            Nhấn để xem nghĩa
                        </p>
                    </>
                ) : (
                    <>
                        <p className="text-2xl font-bold text-slate-900 sm:text-3xl">
                            {currentCard.word}
                        </p>
                        {currentCard.phonetic && (
                            <p className="mt-2 text-sm text-slate-400">{currentCard.phonetic}</p>
                        )}
                        <p className="mt-6 text-lg font-semibold text-blue-600 sm:text-xl">
                            = {currentCard.meaning}
                        </p>
                        {currentCard.example && (
                            <p className="mt-6 text-sm italic text-slate-500 sm:text-base">
                                “{currentCard.example}”
                            </p>
                        )}
                    </>
                )}
            </button>

            <div className="flex gap-3">
                <button
                    type="button"
                    onClick={handlePrev}
                    className="flex-1 py-3 text-sm font-bold transition-all border rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200">
                    ← Thẻ trước
                </button>
                <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 py-3 text-sm font-bold text-white transition-all shadow-md rounded-xl bg-blue-600 hover:bg-blue-700">
                    Thẻ tiếp theo →
                </button>
            </div>
        </div>
    );
}
function PracticeTab({onTryConsume}: TabTrialProps) {
    const [activePracticeQuestions, setActivePracticeQuestions] = useState<Question[] | null>(null);

    if (!activePracticeQuestions) {
        return (
            <PracticeConfig
                onStart={(questions) => {
                    if (!onTryConsume("practice")) return;
                    setActivePracticeQuestions(questions);
                }}
            />
        );
    }

    return (
        <PracticeSession
            questions={activePracticeQuestions}
            onFinish={() => setActivePracticeQuestions(null)}
        />
    );
}

function ExamTab({
    onProgressChange,
    onBackToDashboard,
    onTryConsume,
}: {
    onProgressChange: () => void;
    onBackToDashboard: () => void;
} & TabTrialProps) {
    const [activeExamQuestions, setActiveExamQuestions] = useState<Question[] | null>(null);
    const [examSessionAnswers, setExamSessionAnswers] = useState<Record<string, unknown>>({});
    const [examResult, setExamResult] = useState<ExamResult | null>(null);
    const [examCurrentIndex, setExamCurrentIndex] = useState(0);

    const handleGenerateExam = (config: ExamConfig, _meta?: {totalAvailable: number; isTruncated: boolean;}) => {
        if (!onTryConsume("exam")) return;

        const result = generateExam(QUESTION_BANK, config);
        if (result.questions.length === 0) {
            alert("Không tìm thấy câu hỏi phù hợp với bộ lọc!");
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
        const userAnswersMap: Record<string, {answer: unknown; isCorrect: boolean;}> = {};
        const trackScores: Record<Track, number> = {grammar: 0, vocabulary: 0, pronunciation: 0};
        const trackTotals: Record<Track, number> = {grammar: 0, vocabulary: 0, pronunciation: 0};
        const topicScores: Record<string, {total: number; correct: number;}> = {};

        activeExamQuestions.forEach((q) => {
            const ans = examSessionAnswers[q.id];
            const evalResult = evaluateAnswer(q, ans);
            const isCorrect = evalResult.isCorrect;

            if (isCorrect) correctCount++;
            userAnswersMap[q.id] = {answer: ans, isCorrect};
            recordQuestionAttempt(q.id, ans, isCorrect);

            trackTotals[q.track]++;
            if (isCorrect) trackScores[q.track]++;

            q.topicIds.forEach((tid) => {
                if (!topicScores[tid]) topicScores[tid] = {total: 0, correct: 0};
                topicScores[tid].total++;
                if (isCorrect) topicScores[tid].correct++;
            });
        });

        const scorePct = Math.round((correctCount / activeExamQuestions.length) * 100);

        const normalizedTrackScores: Record<Track, number> = {
            grammar: trackTotals.grammar > 0 ? Math.round((trackScores.grammar / trackTotals.grammar) * 100) : 0,
            vocabulary: trackTotals.vocabulary > 0 ? Math.round((trackScores.vocabulary / trackTotals.vocabulary) * 100) : 0,
            pronunciation:
                trackTotals.pronunciation > 0
                    ? Math.round((trackScores.pronunciation / trackTotals.pronunciation) * 100)
                    : 0,
        };

        const result: ExamResult = {
            id: "exam_" + Date.now(),
            timestamp: Date.now(),
            scorePercentage: scorePct,
            totalQuestions: activeExamQuestions.length,
            correctAnswersCount: correctCount,
            trackScores: normalizedTrackScores,
            topicScores,
            userAnswers: userAnswersMap,
        };

        recordExamResult(result);
        onProgressChange();
        setExamResult(result);
    };

    if (!activeExamQuestions) {
        return <ExamBuilder onGenerate={handleGenerateExam} />;
    }

    if (examResult) {
        return (
            <ExamResultView
                result={examResult}
                questions={activeExamQuestions}
                onNewTest={() => {
                    setActiveExamQuestions(null);
                    setExamResult(null);
                }}
                onBackToDashboard={onBackToDashboard}
            />
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between p-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                <h3 className="text-sm font-bold text-slate-900 sm:text-base">Đang làm bài thi</h3>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700">
                    Câu {examCurrentIndex + 1} / {activeExamQuestions.length}
                </span>
            </div>

            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                    className="h-full transition-all bg-indigo-600 rounded-full"
                    style={{width: `${((examCurrentIndex + 1) / activeExamQuestions.length) * 100}%`}}
                />
            </div>

            <QuestionRenderer
                question={activeExamQuestions[examCurrentIndex]}
                userAnswer={examSessionAnswers[activeExamQuestions[examCurrentIndex].id]}
                onAnswerChange={(val) =>
                    setExamSessionAnswers((prev) => ({
                        ...prev,
                        [activeExamQuestions[examCurrentIndex].id]: val,
                    }))
                }
            />

            <div className="flex justify-between gap-3">
                <button
                    type="button"
                    disabled={examCurrentIndex === 0}
                    onClick={() => setExamCurrentIndex((i) => i - 1)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm disabled:opacity-40">
                    ← Trước
                </button>

                {examCurrentIndex < activeExamQuestions.length - 1 ? (
                    <button
                        type="button"
                        onClick={() => setExamCurrentIndex((i) => i + 1)}
                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm">
                        Tiếp →
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleSubmitExam}
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md">
                        Nộp bài thi 🎯
                    </button>
                )}
            </div>
        </div>
    );
}

export function App() {
    const [activeTab, setActiveTab] = useState<NavigationTab>("dashboard");
    const [progress, setProgress] = useState<UserProgress>(getProgress());
    const [blockedAction, setBlockedAction] = useState<TrialAction | null>(null);

    useEffect(() => {
        setProgress(getProgress());
    }, []);

    const weakTopics = useMemo(() => {
        const stats = progress.questionStats || {};
        const topicAgg: Record<string, {attempts: number; correct: number;}> = {};

        QUESTION_BANK.forEach((q) => {
            const stat = stats[q.id];
            if (!stat || stat.attempts === 0) return;
            q.topicIds.forEach((tid) => {
                if (!topicAgg[tid]) topicAgg[tid] = {attempts: 0, correct: 0};
                topicAgg[tid].attempts += stat.attempts;
                topicAgg[tid].correct += stat.correctCount;
            });
        });

        return Object.entries(topicAgg)
            .map(([id, {attempts, correct}]) => ({
                id,
                name: TOPIC_MAP[id]?.name || id,
                pct: Math.round((correct / attempts) * 100),
                attempts,
            }))
            .filter((t) => t.attempts >= 2 && t.pct < 70)
            .sort((a, b) => a.pct - b.pct)
            .slice(0, 5);
    }, [progress]);

    const refreshProgress = () => setProgress(getProgress());

    const tryConsume = (action: TrialAction): boolean => {
        const usage = getTrialUsage();
        if ((usage[action] ?? 0) >= TRIAL_LIMITS[action]) {
            setBlockedAction(action);
            return false;
        }
        recordTrialUse(action);
        setProgress(getProgress());
        return true;
    };

    const switchTab = (tab: NavigationTab) => {
        setActiveTab(tab);
        setProgress(getProgress());
    };

    return (
        <div className="min-h-screen pb-12 font-sans antialiased bg-slate-50 text-slate-800">
            <header className="sticky top-0 z-30 border-b shadow-sm bg-white/90 backdrop-blur-md border-slate-200/80">
                <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <button
                        type="button"
                        onClick={() => switchTab("dashboard")}
                        className="flex items-center p-0 space-x-3 bg-transparent border-0 cursor-pointer">
                        <div className="flex items-center justify-center text-lg font-black text-white shadow-md w-9 h-9 rounded-xl bg-linear-to-tr from-blue-600 to-indigo-600">
                            E
                        </div>
                        <span className="text-lg font-bold tracking-tight text-slate-900">EnglishHub</span>
                    </button>

                    <div className="flex items-center gap-2">
                        <nav className="flex items-center space-x-1 overflow-x-auto sm:space-x-2" aria-label="Main navigation">
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => switchTab(item.id)}
                                    aria-current={activeTab === item.id ? "page" : undefined}
                                    className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${activeTab === item.id
                                        ? "bg-blue-50 text-blue-600 border border-blue-100 shadow-xs"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                        }`}>
                                    <span aria-hidden="true">{item.icon}</span>
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            <main className="px-4 pt-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {activeTab === "dashboard" && (
                    <DashboardTab
                        progress={progress}
                        weakTopics={weakTopics}
                        onSwitchTab={switchTab}
                    />
                )}

                {activeTab === "lessons" && (
                    <LessonsTab
                        progress={progress}
                        onProgressChange={refreshProgress}
                        onTryConsume={tryConsume}
                    />
                )}

                {activeTab === "cheatsheet" && <CheatsheetView />}

                {activeTab === "practice" && <PracticeTab onTryConsume={tryConsume} />}

                {activeTab === "review" && (
                    <ReviewTab
                        onProgressChange={refreshProgress}
                        onGoPractice={() => switchTab("practice")}
                        onTryConsume={tryConsume}
                    />
                )}

                {activeTab === "flashcards" && (
                    <FlashcardTab
                        onProgressChange={refreshProgress}
                        onTryConsume={tryConsume}
                    />
                )}

                {activeTab === "exam" && (
                    <ExamTab
                        onProgressChange={refreshProgress}
                        onBackToDashboard={() => switchTab("dashboard")}
                        onTryConsume={tryConsume}
                    />
                )}
            </main>

            {blockedAction && (
                <TrialLimitModal
                    action={blockedAction}
                    onClose={() => setBlockedAction(null)}
                />
            )}
        </div>
    );
}