// src/components/quiz/renderers/FillBlankRenderer.tsx
import React from 'react';
import type {FillBlankQuestion} from '../../../types';

interface Props {
    question: FillBlankQuestion;
    value?: string;
    onChange: (val: string) => void;
    disabled?: boolean;
}

export const FillBlankRenderer: React.FC<Props> = ({
    question,
    value = '',
    onChange,
    disabled,
}) => {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {question.question}
            </h3>
            <input
                type="text"
                disabled={disabled}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 outline-none text-base"
            />
        </div>
    );
};