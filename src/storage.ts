import type {ExamResult, UserProgress} from './types';

const STORAGE_KEY = 'ENGLISH_LEARNING_PROGRESS_V1';

const DEFAULT_PROGRESS: UserProgress = {
    version: 1,
    completedLessonIds: [],
    quizScores: {},
    questionStats: {},
    examHistory: [],
};

function migrateProgress(raw: unknown): UserProgress {
    const data = raw as Partial<UserProgress> & {completedLessonIds?: string[]; quizScores?: Record<string, number>};

    return {
        version: 1,
        completedLessonIds: data.completedLessonIds ?? [],
        quizScores: data.quizScores ?? {},
        questionStats: data.questionStats ?? {},
        examHistory: data.examHistory ?? [],
    };
}

export function getProgress(): UserProgress {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            const migrated = migrateProgress(parsed);

            // Re-save if new fields were missing (backwards-compatible migration)
            if (!parsed.questionStats || !parsed.examHistory) {
                saveProgress(migrated);
            }

            return migrated;
        }
    } catch (error) {
        console.error('Failed to parse progress from localStorage:', error);
    }

    return DEFAULT_PROGRESS;
}

export function saveProgress(progress: UserProgress): void {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
        console.error('Failed to save progress:', error);
    }
}

export function updateLessonComplete(lessonId: string, score?: number): UserProgress {
    const progress = getProgress();
    if (!progress.completedLessonIds.includes(lessonId)) {
        progress.completedLessonIds.push(lessonId);
    }
    if (score !== undefined) {
        progress.quizScores[lessonId] = score;
    }
    saveProgress(progress);
    return progress;
}

export function recordQuestionAttempt(
    questionId: string,
    isCorrect: boolean
): UserProgress {
    const progress = getProgress();
    const current = progress.questionStats[questionId] || {
        attempts: 0,
        correctCount: 0,
        lastAttemptTimestamp: 0,
    };

    progress.questionStats[questionId] = {
        attempts: current.attempts + 1,
        correctCount: current.correctCount + (isCorrect ? 1 : 0),
        lastAttemptTimestamp: Date.now(),
    };

    saveProgress(progress);
    return progress;
}

export function recordExamResult(result: ExamResult): UserProgress {
    const progress = getProgress();
    progress.examHistory.unshift(result);
    saveProgress(progress);
    return progress;
}
