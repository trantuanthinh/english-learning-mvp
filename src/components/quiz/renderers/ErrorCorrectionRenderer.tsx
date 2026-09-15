// src/components/quiz/renderers/ErrorCorrectionRenderer.tsx
import React from 'react';
import type {ErrorCorrectionQuestion} from '../../../types';

interface Props {
    question: ErrorCorrectionQuestion;
    value?: {segmentId: string; correction: string;};
    onChange: (val: {segmentId: string; correction: string;}) => void;
    disabled?: boolean;
}

export const ErrorCorrectionRenderer: React.FC<Props> = ({
    question,
    value = {segmentId: '', correction: ''},
    onChange,
    disabled,
}) => {
    const handleSelectSegment = (segmentId: string) => {
        if (disabled) return;
        onChange({...value, segmentId});
    };

    const handleCorrectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange({...value, correction: e.target.value});
    };

    return (
        <div className="space-y-6">
            <p className="text-zinc-900 dark:text-zinc-100 font-medium">
                {question.prompt}
            </p>

            {/* Segment Selector */}
            <div className="flex flex-wrap items-center gap-2 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700">
                {question.segments.map((seg) => {
                    const isSelected = value.segmentId === seg.id;
                    return (
                        <button
                            key={seg.id}
                            type="button"
                            disabled={disabled}
                            onClick={() => handleSelectSegment(seg.id)}
                            className={`inline-flex flex-col items-center px-3 py-2 rounded-md transition-all ${isSelected
                                ? 'bg-blue-600 text-white font-semibold ring-2 ring-blue-500 ring-offset-2'
                                : 'bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700'
                                }`}
                        >
                            <span>{seg.text}</span>
                            {seg.label && (
                                <span
                                    className={`text-[10px] mt-0.5 font-bold ${isSelected ? 'text-blue-100' : 'text-zinc-400'
                                        }`}
                                >
                                    ({seg.label})
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Correction Input */}
            {value.segmentId && (
                <div className="space-y-2">
                    <label
                        htmlFor="correction-input"
                        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                    >
                        Provide the correct replacement for the selected part:
                    </label>
                    <input
                        id="correction-input"
                        type="text"
                        disabled={disabled}
                        value={value.correction}
                        onChange={handleCorrectionChange}
                        placeholder="Type correct spelling or phrase..."
                        className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>
            )}
        </div>
    );
};