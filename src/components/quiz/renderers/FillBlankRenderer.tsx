// src/components/quiz/renderers/FillBlankRenderer.tsx
import React from "react";
import type {FillBlankQuestion} from "../../../types";

interface Props {
    question: FillBlankQuestion;
    value?: string;
    onChange: (val: string) => void;
    disabled?: boolean;
    showFeedback?: boolean;
}

const normalize = (text: string, caseSensitive: boolean) => {
    const trimmed = text.trim();
    return caseSensitive ? trimmed : trimmed.toLowerCase();
};

export const FillBlankRenderer: React.FC<Props> = ({
    question,
    value = "",
    onChange,
    disabled = false,
    showFeedback = false,
}) => {
    const isLocked = disabled || showFeedback;

    const accepted = (question as any).acceptedAnswers as string[] | undefined;
    const caseSensitive = (question as any).caseSensitive === true;

    const isCorrect =
        showFeedback &&
        accepted !== undefined &&
        accepted.some((ans) => normalize(ans, caseSensitive) === normalize(value, caseSensitive));

    let inputStyle = "border-zinc-300 bg-white text-zinc-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30";

    if (showFeedback) {
        inputStyle = isCorrect
            ? "border-green-500 bg-green-50 text-green-900 ring-2 ring-green-500/40"
            : "border-red-500 bg-red-50 text-red-900 ring-2 ring-red-500/40";
    }

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900">{question.question}</h3>

            <input
                type="text"
                disabled={isLocked}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Type your answer here..."
                className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors placeholder:text-zinc-400 disabled:bg-zinc-100 disabled:text-zinc-500 disabled:cursor-not-allowed ${inputStyle}`}
            />

            {showFeedback && (
                <div className="space-y-1 text-sm">
                    {isCorrect ? (
                        <p className="font-semibold text-green-700">✓ Chính xác</p>
                    ) : (
                        <>
                            <p className="font-semibold text-red-700">✗ Chưa đúng</p>
                            {accepted && accepted.length > 0 && (
                                <p className="text-zinc-600">
                                    Đáp án đúng: <span className="font-semibold text-zinc-900">{accepted.join(" / ")}</span>
                                </p>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
