// src/components/quiz/renderers/MultipleChoiceRenderer.tsx
import React from "react";
import type {MultipleChoiceQuestion} from "../../../types";

interface Props {
    question: MultipleChoiceQuestion;
    value?: number;
    onChange: (index: number) => void;
    disabled?: boolean;
}

export const MultipleChoiceRenderer: React.FC<Props> = ({question, value, onChange, disabled}) => {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{question.question}</h3>
            <div className="space-y-2.5">
                {question.options.map((option, idx) => {
                    const isSelected = value === idx;
                    return (
                        <button
                            key={idx}
                            type="button"
                            disabled={disabled}
                            onClick={() => onChange(idx)}
                            className={`w-full p-4 text-left rounded-lg border transition-all ${isSelected
                                ? "border-blue-600 bg-blue-50 dark:bg-blue-950/30 text-blue-950 dark:text-blue-100 font-semibold ring-2 ring-blue-500"
                                : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                                }`}>
                            <span className="font-bold mr-3">{String.fromCharCode(65 + idx)}.</span>
                            {option}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
