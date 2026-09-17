// src/components/quiz/renderers/MultipleChoiceRenderer.tsx
import React from "react";
import type {MultipleChoiceQuestion} from "../../../types";

interface Props {
    question: MultipleChoiceQuestion;
    value?: number;
    onChange: (index: number) => void;
    disabled?: boolean;
    showFeedback?: boolean;
}

export const MultipleChoiceRenderer: React.FC<Props> = ({
    question,
    value,
    onChange,
    disabled = false,
    showFeedback = false,
}) => {
    const isLocked = disabled || showFeedback;
    const correctIndex = (question as any).correctIndex as number | undefined;

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900">{question.question}</h3>
            <div className="space-y-2.5">
                {question.options.map((option, idx) => {
                    const isSelected = value === idx;
                    const isCorrect = showFeedback && correctIndex === idx;
                    const isWrongSelected = showFeedback && isSelected && correctIndex !== undefined && correctIndex !== idx;

                    let style = "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800";

                    if (isCorrect) {
                        style = "border-green-600 bg-green-50 text-green-900 font-semibold ring-2 ring-green-500";
                    } else if (isWrongSelected) {
                        style = "border-red-600 bg-red-50 text-red-900 font-semibold ring-2 ring-red-500";
                    } else if (isSelected) {
                        style = "border-blue-600 bg-blue-50 text-blue-950 font-semibold ring-2 ring-blue-500";
                    }

                    return (
                        <button
                            key={idx}
                            type="button"
                            disabled={isLocked}
                            onClick={() => onChange(idx)}
                            className={`w-full p-4 text-left rounded-lg border transition-all ${style} ${isLocked ? "cursor-not-allowed" : ""
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
