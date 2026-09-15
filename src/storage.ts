// src/storage.ts

import type {
    ExamResult,
    FlashcardProgress,
    QuestionAttempt,
    UserProgress,
} from "./types";

const STORAGE_KEY = "ENGLISH_LEARNING_PROGRESS_V1";
const MAX_ATTEMPTS = 200;

/* ------------------------------------------------------------------ */
/* Default progress                                                    */
/* ------------------------------------------------------------------ */

function createDefaultProgress(): UserProgress {
    return {
        version: 1,
        completedLessonIds: [],
        quizScores: {},
        questionStats: {},
        examHistory: [],
        questionAttempts: [],
        flashcardProgress: {},
    };
}

/* ------------------------------------------------------------------ */
/* Read / write                                                        */
/* ------------------------------------------------------------------ */

export function getProgress(): UserProgress {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return createDefaultProgress();

        const parsed = JSON.parse(raw) as Partial<UserProgress>;

        // Ensure backward compatibility and defaults for new optional fields
        return {
            version: 1,
            completedLessonIds: parsed.completedLessonIds ?? [],
            quizScores: parsed.quizScores ?? {},
            questionStats: parsed.questionStats ?? {},
            examHistory: parsed.examHistory ?? [],
            questionAttempts: parsed.questionAttempts ?? [],
            flashcardProgress: parsed.flashcardProgress ?? {},
        };
    } catch (error) {
        console.error("Failed to read progress from localStorage", error);
        return createDefaultProgress();
    }
}

export function saveProgress(progress: UserProgress): void {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
        console.error("Failed to save progress to localStorage", error);
    }
}

/* ------------------------------------------------------------------ */
/* Lesson completion                                                   */
/* ------------------------------------------------------------------ */

export function updateLessonComplete(lessonId: string): void {
    const progress = getProgress();

    if (!progress.completedLessonIds.includes(lessonId)) {
        progress.completedLessonIds.push(lessonId);
    }

    saveProgress(progress);
}

/* ------------------------------------------------------------------ */
/* Question attempt tracking                                           */
/* ------------------------------------------------------------------ */

export function recordQuestionAttempt(
    questionId: string,
    answer: unknown,
    isCorrect: boolean
): void {
    const progress = getProgress();

    // 1. Update aggregate stats (existing behaviour)
    const stat = progress.questionStats[questionId] ?? {
        attempts: 0,
        correctCount: 0,
        lastAttemptTimestamp: 0,
    };

    stat.attempts += 1;
    if (isCorrect) stat.correctCount += 1;
    stat.lastAttemptTimestamp = Date.now();

    progress.questionStats[questionId] = stat;

    // 2. Store recent attempt history (new)
    const attempts = progress.questionAttempts ?? [];

    const newAttempt: QuestionAttempt = {
        questionId,
        answer,
        isCorrect,
        timestamp: Date.now(),
    };

    attempts.push(newAttempt);

    // Keep only the most recent MAX_ATTEMPTS
    progress.questionAttempts = attempts.slice(-MAX_ATTEMPTS);

    saveProgress(progress);
}

/* ------------------------------------------------------------------ */
/* Exam results                                                        */
/* ------------------------------------------------------------------ */

export function recordExamResult(result: ExamResult): void {
    const progress = getProgress();

    progress.examHistory.push(result);

    // Optional: limit exam history length if desired
    // if (progress.examHistory.length > 50) {
    //   progress.examHistory = progress.examHistory.slice(-50);
    // }

    saveProgress(progress);
}

/* ------------------------------------------------------------------ */
/* Flashcard progress                                                  */
/* ------------------------------------------------------------------ */

export function updateFlashcardProgress(
    cardId: string,
    state: FlashcardProgress["state"]
): void {
    const progress = getProgress();

    const flashcardProgress = progress.flashcardProgress ?? {};

    flashcardProgress[cardId] = {
        cardId,
        state,
        lastReviewedAt: Date.now(),
    };

    progress.flashcardProgress = flashcardProgress;

    saveProgress(progress);
}

/* ------------------------------------------------------------------ */
/* Utility (optional)                                                  */
/* ------------------------------------------------------------------ */

export function resetProgress(): void {
    localStorage.removeItem(STORAGE_KEY);
}