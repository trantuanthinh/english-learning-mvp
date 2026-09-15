import type {Difficulty, Question, QuestionType, Track} from "../types";

export interface ExamConfig {
    trackIds?: Track[];
    topicIds?: string[];
    questionTypes?: QuestionType[];
    difficulty?: Difficulty | "mixed";
    questionCount: number;
}

export interface ExamGenerationResult {
    questions: Question[];
    totalAvailable: number;
    isTruncated: boolean;
}

export function shuffle<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

export function generateExam(bank: Question[], config: ExamConfig): ExamGenerationResult {
    // 1. Filter bank by requirements
    let pool = bank.filter((q) => {
        if (config.trackIds?.length && !config.trackIds.includes(q.track)) {
            return false;
        }
        if (config.topicIds?.length && !q.topicIds.some((t) => config.topicIds!.includes(t))) {
            return false;
        }
        if (config.questionTypes?.length && !config.questionTypes.includes(q.type)) {
            return false;
        }
        if (config.difficulty && config.difficulty !== "mixed" && q.difficulty !== config.difficulty) {
            return false;
        }
        return true;
    });

    const totalAvailable = pool.length;

    if (pool.length <= config.questionCount) {
        return {
            questions: shuffle(pool),
            totalAvailable,
            isTruncated: totalAvailable < config.questionCount,
        };
    }

    // 2. Balanced distribution across question types
    const groupedByType: Record<string, Question[]> = {};
    pool.forEach((q) => {
        if (!groupedByType[q.type]) groupedByType[q.type] = [];
        groupedByType[q.type].push(q);
    });

    const typesPresent = Object.keys(groupedByType);
    const selected: Question[] = [];
    const perTypeQuota = Math.floor(config.questionCount / typesPresent.length);

    // Take quota from each type
    typesPresent.forEach((type) => {
        const shuffledTypeGroup = shuffle(groupedByType[type]);
        const countToTake = Math.min(shuffledTypeGroup.length, perTypeQuota);
        selected.push(...shuffledTypeGroup.slice(0, countToTake));
    });

    // 3. Fill remaining quota if unevenly divisible or if some types were undersupplied
    const selectedIds = new Set(selected.map((q) => q.id));
    const remainingPool = shuffle(pool.filter((q) => !selectedIds.has(q.id)));

    while (selected.length < config.questionCount && remainingPool.length > 0) {
        selected.push(remainingPool.pop()!);
    }

    return {
        questions: shuffle(selected),
        totalAvailable,
        isTruncated: false,
    };
}