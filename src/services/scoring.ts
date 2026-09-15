import type {Question} from "../types";

export interface EvaluationResult {
    isCorrect: boolean;
    scoreFraction: number; // 0.0 to 1.0
    feedback?: string;
}

export function normalizeText(input: string): string {
    return input.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function evaluateAnswer(
    question: Question,
    userAnswer: any
): EvaluationResult {
    if (userAnswer === undefined || userAnswer === null) {
        return {isCorrect: false, scoreFraction: 0};
    }

    switch (question.type) {
        case 'multiple-choice':
        case 'listening': {
            const isCorrect = userAnswer === question.correctIndex;
            return {isCorrect, scoreFraction: isCorrect ? 1 : 0};
        }

        case 'fill-blank': {
            const userText = normalizeText(String(userAnswer));
            const isCorrect = question.acceptedAnswers.some(
                (ans) => normalizeText(ans) === userText
            );
            return {isCorrect, scoreFraction: isCorrect ? 1 : 0};
        }

        case 'error-correction': {
            // Expecting userAnswer = { segmentId: string; correction: string }
            const {segmentId, correction} = userAnswer || {};
            const isSegmentCorrect = segmentId === question.correctSegmentId;

            const userCorrection = normalizeText(correction || '');
            const isCorrectionCorrect = question.acceptedCorrections.some(
                (ans) => normalizeText(ans) === userCorrection
            );

            const isCorrect = isSegmentCorrect && isCorrectionCorrect;
            let scoreFraction = 0;
            if (isSegmentCorrect && isCorrectionCorrect) scoreFraction = 1;
            else if (isSegmentCorrect) scoreFraction = 0.5;

            return {
                isCorrect,
                scoreFraction,
                feedback: !isSegmentCorrect
                    ? 'Incorrect error location selected.'
                    : !isCorrectionCorrect
                        ? 'Error location identified, but correction was incorrect.'
                        : 'Perfect!',
            };
        }

        case 'speaking': {
            // Practice mode: completes upon audio playback / user confirmation
            const isCompleted = Boolean(userAnswer?.completed);
            return {isCorrect: isCompleted, scoreFraction: isCompleted ? 1 : 0};
        }

        default:
            return {isCorrect: false, scoreFraction: 0};
    }
}