import {useState} from "react";
import {QuestionRenderer} from "../../components/quiz/QuestionRenderer";
import {QUESTION_BANK} from "../../data";
import {type ExamConfig, generateExam} from "../../services/examGenerator";
import {evaluateAnswer} from "../../services/scoring";
import {recordExamResult, recordQuestionAttempt} from "../../storage";
import type {ExamResult, Question, Track} from "../../types";
import {ExamBuilder} from "../exam/ExamBuilder";
import {ExamResultView} from "../exam/ExamResultView";

export default function ExamTab({
    onProgressChange,
    onBackToDashboard,
}: {
    onProgressChange: () => void;
    onBackToDashboard: () => void;
}) {
    const [activeExamQuestions, setActiveExamQuestions] = useState<Question[] | null>(null);
    const [examSessionAnswers, setExamSessionAnswers] = useState<Record<string, unknown>>({});
    const [examResult, setExamResult] = useState<ExamResult | null>(null);
    const [examCurrentIndex, setExamCurrentIndex] = useState(0);

    const handleGenerateExam = (config: ExamConfig, _meta?: {totalAvailable: number; isTruncated: boolean;}) => {
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