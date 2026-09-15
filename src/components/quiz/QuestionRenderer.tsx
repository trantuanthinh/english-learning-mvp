import type {Question} from "../../types";
import {ErrorCorrectionRenderer} from "./renderers/ErrorCorrectionRenderer";
import {FillBlankRenderer} from "./renderers/FillBlankRenderer";
import {ListeningRenderer} from "./renderers/ListeningRenderer";
import {MultipleChoiceRenderer} from "./renderers/MultipleChoiceRenderer";
import {SpeakingRenderer} from "./renderers/SpeakingRenderer";


interface QuestionRendererProps {
    question: Question;
    userAnswer: any;
    onAnswerChange: (answer: any) => void;
    showFeedback?: boolean;
    disabled?: boolean;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
    question,
    userAnswer,
    onAnswerChange,
    showFeedback = false,
    disabled = false,
}) => {
    return (
        <div className="w-full bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {question.track} • {question.type.replace('-', ' ')}
                </span>
                <span className="text-xs font-medium text-zinc-500 capitalize">
                    {question.difficulty}
                </span>
            </div>

            {question.type === 'multiple-choice' && (
                <MultipleChoiceRenderer
                    question={question}
                    value={userAnswer}
                    onChange={onAnswerChange}
                    disabled={disabled}
                />
            )}

            {question.type === 'fill-blank' && (
                <FillBlankRenderer
                    question={question}
                    value={userAnswer}
                    onChange={onAnswerChange}
                    disabled={disabled}
                />
            )}

            {question.type === 'error-correction' && (
                <ErrorCorrectionRenderer
                    question={question}
                    value={userAnswer}
                    onChange={onAnswerChange}
                    disabled={disabled}
                />
            )}

            {question.type === 'listening' && (
                <ListeningRenderer
                    question={question}
                    value={userAnswer}
                    onChange={onAnswerChange}
                    disabled={disabled}
                />
            )}

            {question.type === 'speaking' && (
                <SpeakingRenderer
                    question={question}
                    value={userAnswer}
                    onChange={onAnswerChange}
                    disabled={disabled}
                />
            )}

            {showFeedback && question.explanation && (
                <div className="mt-5 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-sm text-blue-900 dark:text-blue-200">
                    <strong className="font-semibold block mb-1">Explanation:</strong>
                    {question.explanation}
                </div>
            )}
        </div>
    );
};