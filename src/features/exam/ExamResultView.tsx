import React, {useMemo, useState} from 'react';
import {QuestionRenderer} from '../../components/quiz/QuestionRenderer';
import {TOPIC_MAP} from '../../data';
import type {ExamResult, Question, Track} from '../../types';

interface ExamResultViewProps {
    result: ExamResult;
    questions: Question[];
    onNewTest: () => void;
    onBackToDashboard: () => void;
}

const TRACK_LABELS: Record<Track, string> = {
    grammar: 'Ngữ pháp',
    vocabulary: 'Từ vựng',
    pronunciation: 'Phát âm',
};

export const ExamResultView: React.FC<ExamResultViewProps> = ({
    result,
    questions,
    onNewTest,
    onBackToDashboard,
}) => {
    const [showReview, setShowReview] = useState(false);

    const trackPercentages = useMemo(() => {
        const scores: Record<Track, {correct: number; total: number}> = {
            grammar: {correct: 0, total: 0},
            vocabulary: {correct: 0, total: 0},
            pronunciation: {correct: 0, total: 0},
        };
        questions.forEach((q) => {
            scores[q.track].total++;
            if (result.userAnswers[q.id]?.isCorrect) scores[q.track].correct++;
        });
        return Object.fromEntries(
            (Object.keys(scores) as Track[]).map((t) => [
                t,
                scores[t].total > 0 ? Math.round((scores[t].correct / scores[t].total) * 100) : null,
            ])
        ) as Record<Track, number | null>;
    }, [questions, result]);

    const weakTopics = useMemo(() => {
        const topicStats: Record<string, {correct: number; total: number}> = {};
        questions.forEach((q) => {
            q.topicIds.forEach((tid) => {
                if (!topicStats[tid]) topicStats[tid] = {correct: 0, total: 0};
                topicStats[tid].total++;
                if (result.userAnswers[q.id]?.isCorrect) topicStats[tid].correct++;
            });
        });
        return Object.entries(topicStats)
            .map(([id, {correct, total}]) => ({
                id,
                name: TOPIC_MAP[id]?.name || id,
                pct: Math.round((correct / total) * 100),
            }))
            .filter((t) => t.pct < 70)
            .sort((a, b) => a.pct - b.pct);
    }, [questions, result]);

    if (showReview) {
        return (
            <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900">Xem lại đáp án</h3>
                    <button
                        type="button"
                        onClick={() => setShowReview(false)}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                    >
                        ← Quay lại kết quả
                    </button>
                </div>

                {questions.map((q, idx) => {
                    const answer = result.userAnswers[q.id];
                    return (
                        <div
                            key={q.id}
                            className={`p-1 rounded-2xl ${answer?.isCorrect ? 'bg-emerald-100' : 'bg-rose-100'}`}
                        >
                            <div className="bg-white p-5 rounded-xl space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-500">Câu {idx + 1}</span>
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                        answer?.isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                                    }`}>
                                        {answer?.isCorrect ? '✓ Đúng' : '✗ Sai'}
                                    </span>
                                </div>
                                <QuestionRenderer
                                    question={q}
                                    userAnswer={answer?.answer}
                                    onAnswerChange={() => {}}
                                    showFeedback
                                    disabled
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="max-w-lg mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
            <div className="text-center">
                <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-black border-4 ${
                    result.scorePercentage >= 70
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                        : 'bg-amber-50 text-amber-600 border-amber-100'
                }`}>
                    {result.scorePercentage}%
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-4">Hoàn thành bài thi!</h3>
                <p className="text-sm text-slate-500 mt-1">
                    Bạn trả lời đúng <strong>{result.correctAnswersCount}</strong> / {result.totalQuestions} câu.
                </p>
            </div>

            <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Theo lộ trình</h4>
                {(Object.keys(trackPercentages) as Track[]).map((track) => {
                    const pct = trackPercentages[track];
                    if (pct === null) return null;
                    return (
                        <div key={track} className="flex items-center justify-between text-sm">
                            <span className="text-slate-700">{TRACK_LABELS[track]}</span>
                            <span className="font-bold text-slate-900">{pct}%</span>
                        </div>
                    );
                })}
            </div>

            {weakTopics.length > 0 && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200/60 space-y-2">
                    <h4 className="text-xs font-bold text-rose-700 uppercase tracking-wider">Cần luyện thêm</h4>
                    <ul className="space-y-1">
                        {weakTopics.map((t) => (
                            <li key={t.id} className="text-sm text-rose-800 flex justify-between">
                                <span>{t.name}</span>
                                <span className="font-semibold">{t.pct}%</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="flex flex-col gap-2">
                <button
                    type="button"
                    onClick={() => setShowReview(true)}
                    className="w-full py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-sm transition-all border border-blue-200"
                >
                    Xem lại đáp án
                </button>
                <button
                    type="button"
                    onClick={onNewTest}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all"
                >
                    Tạo đề thi mới
                </button>
                <button
                    type="button"
                    onClick={onBackToDashboard}
                    className="w-full py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold text-sm transition-all"
                >
                    Về Dashboard
                </button>
            </div>
        </div>
    );
};
