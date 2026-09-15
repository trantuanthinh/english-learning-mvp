import {QUESTION_BANK} from "../data";
import {getProgress} from "../storage";
import type {Question} from "../types";
import {getQuestionById} from "./questionBank";

export function getWrongQuestions(): Question[] {
    const progress = getProgress();
    const attempts = progress.questionAttempts ?? [];

    const latestByQuestion = new Map<string, (typeof attempts)[number]>();
    attempts.forEach((a) => {
        const prev = latestByQuestion.get(a.questionId);
        if (!prev || a.timestamp > prev.timestamp) {
            latestByQuestion.set(a.questionId, a);
        }
    });

    const wrongs = Array.from(latestByQuestion.values())
        .filter((a) => !a.isCorrect)
        .sort((a, b) => b.timestamp - a.timestamp);

    return wrongs.map((a) => getQuestionById(QUESTION_BANK, a.questionId)).filter((q): q is Question => Boolean(q));
}
