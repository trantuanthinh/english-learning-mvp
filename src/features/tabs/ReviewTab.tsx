import {useEffect, useMemo, useState} from "react";
import {formatPreviousAnswer, TRACK_BADGES} from "../../App";
import {QuestionRenderer} from "../../components/quiz/QuestionRenderer";
import {QUESTION_BANK} from "../../data";
import {getQuestionsByIds} from "../../services/questionBank";
import {evaluateAnswer} from "../../services/scoring";
import {getProgress, recordQuestionAttempt} from "../../storage";
import type {Question, Track} from "../../types";

interface WrongEntry {
    question: Question;
    previousAnswer: unknown;
    lastWrongAt: number;
}

export default function ReviewTab({
    onProgressChange,
    onGoPractice,
}: {
    onProgressChange: () => void;
    onGoPractice: () => void;
}) {
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
                                                <li key={e.question.id} className="text-xs text-slate-500 truncate">
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

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-sm text-amber-900 space-y-1">
                <p className="font-semibold">
                    Lần trước bạn trả lời (sai):
                </p>
                <p className="font-mono text-xs sm:text-sm wrap-break-word">
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