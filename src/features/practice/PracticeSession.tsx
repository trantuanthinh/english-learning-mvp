import React, {useState} from 'react';
import {QuestionRenderer} from '../../components/quiz/QuestionRenderer';
import {evaluateAnswer} from '../../services/scoring';
import {recordQuestionAttempt} from '../../storage';
import type {Question} from '../../types';

interface PracticeProps {
    questions: Question[];
    onFinish: () => void;
}

function hasValidAnswer(question: Question, answer: unknown): boolean {
    if (answer === undefined || answer === null) return false;
    switch (question.type) {
        case 'multiple-choice':
        case 'listening':
            return typeof answer === 'number';
        case 'fill-blank':
            return String(answer).trim().length > 0;
        case 'error-correction':
            return Boolean((answer as {segmentId?: string; correction?: string})?.segmentId) &&
                String((answer as {correction?: string})?.correction || '').trim().length > 0;
        case 'speaking':
            return Boolean((answer as {completed?: boolean})?.completed);
        default:
            return false;
    }
}

export const PracticeSession: React.FC<PracticeProps> = ({questions, onFinish}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState<unknown>(null);
    const [isChecked, setIsChecked] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const currentQuestion = questions[currentIndex];
    const evalResult = isChecked ? evaluateAnswer(currentQuestion, userAnswer) : null;

    const handleCheck = () => {
        const result = evaluateAnswer(currentQuestion, userAnswer);
        recordQuestionAttempt(currentQuestion.id, result.isCorrect);
        if (result.isCorrect) setCorrectCount((c) => c + 1);
        setIsChecked(true);
    };

    const handleNext = () => {
        setIsChecked(false);
        setUserAnswer(null);
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setIsComplete(true);
        }
    };

    if (isComplete) {
        const pct = Math.round((correctCount / questions.length) * 100);
        return (
            <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl font-black">
                    {pct}%
                </div>
                <h3 className="text-lg font-bold text-slate-900">Hoàn thành luyện tập!</h3>
                <p className="text-sm text-slate-500">
                    Bạn trả lời đúng <strong>{correctCount}</strong> / {questions.length} câu.
                </p>
                <button
                    type="button"
                    onClick={onFinish}
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all"
                >
                    Luyện tập tiếp
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-between text-sm text-slate-500 font-medium">
                <span>Câu {currentIndex + 1} / {questions.length}</span>
                <span className="text-blue-600 font-semibold">Chế độ Luyện tập</span>
            </div>

            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-300"
                    style={{width: `${((currentIndex + (isChecked ? 1 : 0)) / questions.length) * 100}%`}}
                />
            </div>

            <QuestionRenderer
                question={currentQuestion}
                userAnswer={userAnswer}
                onAnswerChange={setUserAnswer}
                showFeedback={isChecked}
                disabled={isChecked}
            />

            {isChecked && evalResult && (
                <div
                    role="status"
                    className={`p-4 rounded-xl font-medium border ${
                        evalResult.isCorrect
                            ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                            : 'bg-rose-50 text-rose-900 border-rose-200'
                    }`}
                >
                    {evalResult.isCorrect
                        ? '✓ Chính xác!'
                        : evalResult.feedback || '✗ Chưa đúng. Xem giải thích phía trên.'}
                </div>
            )}

            <div className="flex justify-end gap-3">
                {!isChecked ? (
                    <button
                        type="button"
                        disabled={!hasValidAnswer(currentQuestion, userAnswer)}
                        onClick={handleCheck}
                        className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Kiểm tra
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleNext}
                        className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold transition-all"
                    >
                        {currentIndex < questions.length - 1 ? 'Câu tiếp theo →' : 'Hoàn thành'}
                    </button>
                )}
            </div>
        </div>
    );
};
