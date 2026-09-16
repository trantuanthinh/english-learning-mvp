import type {
    ExamResult,
    FlashcardProgress,
    QuestionAttempt,
    TrialAction,
    TrialUsage,
    UserProgress,
} from "./types";

const STORAGE_KEY = "ENGLISH_LEARNING_PROGRESS_V1";
const MAX_ATTEMPTS = 200;

function defaultTrialUsage(): TrialUsage {
    return {lesson: 0, quiz: 0, exam: 0, practice: 0, flashcard: 0, review: 0};
}

function createDefaultProgress(): UserProgress {
    return {
        version: 1,
        completedLessonIds: [],
        quizScores: {},
        questionStats: {},
        examHistory: [],
        questionAttempts: [],
        flashcardProgress: {},
        trialUsage: defaultTrialUsage(),
    };
}

export function getProgress(): UserProgress {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return createDefaultProgress();

        const parsed = JSON.parse(raw) as Partial<UserProgress>;

        return {
            version: 1,
            completedLessonIds: parsed.completedLessonIds ?? [],
            quizScores: parsed.quizScores ?? {},
            questionStats: parsed.questionStats ?? {},
            examHistory: parsed.examHistory ?? [],
            questionAttempts: parsed.questionAttempts ?? [],
            flashcardProgress: parsed.flashcardProgress ?? {},
            trialUsage: parsed.trialUsage ?? defaultTrialUsage(),
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

export function updateLessonComplete(lessonId: string, score?: number): UserProgress {
    const progress = getProgress();

    if (!progress.completedLessonIds.includes(lessonId)) {
        progress.completedLessonIds.push(lessonId);
    }

    if (typeof score === "number") {
        progress.quizScores[lessonId] = score;
    }

    saveProgress(progress);
    return progress;
}

export function recordQuestionAttempt(
    questionId: string,
    answer: unknown,
    isCorrect: boolean
): UserProgress {
    const progress = getProgress();

    const stat = progress.questionStats[questionId] ?? {
        attempts: 0,
        correctCount: 0,
        lastAttemptTimestamp: 0,
    };

    stat.attempts += 1;
    if (isCorrect) stat.correctCount += 1;
    stat.lastAttemptTimestamp = Date.now();

    progress.questionStats[questionId] = stat;

    const attempts = progress.questionAttempts ?? [];
    const newAttempt: QuestionAttempt = {
        questionId,
        answer,
        isCorrect,
        timestamp: Date.now(),
    };
    attempts.push(newAttempt);
    progress.questionAttempts = attempts.slice(-MAX_ATTEMPTS);

    saveProgress(progress);
    return progress;
}

export function recordExamResult(result: ExamResult): UserProgress {
    const progress = getProgress();
    progress.examHistory.push(result);
    saveProgress(progress);
    return progress;
}

export function updateFlashcardProgress(
    cardId: string,
    state: FlashcardProgress["state"]
): UserProgress {
    const progress = getProgress();
    const flashcardProgress = progress.flashcardProgress ?? {};
    flashcardProgress[cardId] = {
        cardId,
        state,
        lastReviewedAt: Date.now(),
    };
    progress.flashcardProgress = flashcardProgress;
    saveProgress(progress);
    return progress;
}

export function getTrialUsage(): TrialUsage {
    const p = getProgress();
    return p.trialUsage ?? defaultTrialUsage();
}

export function recordTrialUse(action: TrialAction): UserProgress {
    const progress = getProgress();
    const usage = progress.trialUsage ?? defaultTrialUsage();
    usage[action] = (usage[action] ?? 0) + 1;
    progress.trialUsage = usage;
    saveProgress(progress);
    return progress;
}

export function resetTrialUsage(): UserProgress {
    const progress = getProgress();
    progress.trialUsage = defaultTrialUsage();
    saveProgress(progress);
    return progress;
}

export function resetProgress(): void {
    localStorage.removeItem(STORAGE_KEY);
}