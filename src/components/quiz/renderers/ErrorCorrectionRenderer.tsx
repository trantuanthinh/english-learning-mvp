import React from 'react';
import type {ErrorCorrectionQuestion} from '../../../types';

interface Props {
    question: ErrorCorrectionQuestion;
    userAnswer: unknown;
    onAnswerChange: (answer: {segmentId: string; correction: string;}) => void;
    showFeedback?: boolean;
    disabled?: boolean;
}

export const ErrorCorrectionRenderer: React.FC<Props> = ({
    question,
    userAnswer,
    onAnswerChange,
    showFeedback = false,
    disabled = false,
}) => {
    const answer =
        userAnswer && typeof userAnswer === 'object'
            ? (userAnswer as {segmentId?: string; correction?: string;})
            : undefined;

    const selectedSegmentId = answer?.segmentId ?? '';
    const correction = answer?.correction ?? '';

    const isCorrectSegment = selectedSegmentId === question.correctSegmentId;
    const isCorrectCorrection =
        isCorrectSegment &&
        question.acceptedCorrections.some(
            (a) => a.trim().toLowerCase() === correction.trim().toLowerCase(),
        );

    const handleSelectSegment = (segmentId: string) => {
        if (disabled) return;
        onAnswerChange({segmentId, correction});
    };

    const handleCorrectionChange = (value: string) => {
        if (disabled) return;
        onAnswerChange({segmentId: selectedSegmentId, correction: value});
    };

    return (
        <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-700">
                {question.prompt}
            </p>

            <div className="flex flex-wrap items-center gap-1 p-4 text-base border rounded-2xl bg-slate-50 border-slate-200">
                {question.segments.map((seg) => {
                    const isSelected = selectedSegmentId === seg.id;
                    const isTheError = showFeedback && seg.id === question.correctSegmentId;

                    return (
                        <button
                            key={seg.id}
                            type="button"
                            disabled={disabled}
                            onClick={() => handleSelectSegment(seg.id)}
                            className={`px-1.5 py-0.5 rounded-md transition-all ${isSelected
                                ? 'bg-blue-100 text-blue-800 ring-2 ring-blue-400'
                                : 'hover:bg-slate-200'
                                } ${isTheError
                                    ? 'bg-rose-100 text-rose-800 ring-2 ring-rose-400'
                                    : ''
                                } disabled:cursor-not-allowed`}>
                            {seg.text}
                        </button>
                    );
                })}
            </div>

            <div className="space-y-1">
                <label className="text-xs font-semibold uppercase text-slate-500">
                    Nhập từ/cụm từ đúng:
                </label>
                <input
                    type="text"
                    value={correction}
                    disabled={disabled}
                    onChange={(e) => handleCorrectionChange(e.target.value)}
                    placeholder="e.g. goes"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none disabled:bg-slate-50"
                />
            </div>

            {showFeedback && (
                <div
                    className={`p-3 rounded-xl border text-sm ${isCorrectSegment && isCorrectCorrection
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                        : 'bg-rose-50 border-rose-200 text-rose-800'
                        }`}>
                    {isCorrectSegment && isCorrectCorrection
                        ? '✓ Chính xác!'
                        : '✗ Chưa đúng. Xem gợi ý bên dưới.'}
                    {question.explanation && (
                        <p className="mt-1 text-xs opacity-80">{question.explanation}</p>
                    )}
                </div>
            )}
        </div>
    );
};