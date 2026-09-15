import type {Difficulty, Question, QuestionType, Track} from '../types';

export interface QuestionFilter {
    trackIds?: Track[];
    topicIds?: string[];
    lessonIds?: string[];
    questionTypes?: QuestionType[];
    difficulty?: Difficulty | 'mixed';
    tags?: string[];
}

export function getQuestionById(bank: Question[], id: string): Question | undefined {
    return bank.find((q) => q.id === id);
}

export function getQuestionsByIds(bank: Question[], ids: string[]): Question[] {
    return ids
        .map((id) => getQuestionById(bank, id))
        .filter((q): q is Question => q !== undefined);
}

export function getQuestionsByLesson(bank: Question[], lessonId: string): Question[] {
    return bank.filter((q) => q.lessonIds?.includes(lessonId));
}

export function filterQuestions(bank: Question[], filter: QuestionFilter): Question[] {
    return bank.filter((q) => {
        if (filter.trackIds?.length && !filter.trackIds.includes(q.track)) return false;
        if (filter.topicIds?.length && !q.topicIds.some((t) => filter.topicIds!.includes(t))) return false;
        if (filter.lessonIds?.length && !q.lessonIds?.some((l) => filter.lessonIds!.includes(l))) return false;
        if (filter.questionTypes?.length && !filter.questionTypes.includes(q.type)) return false;
        if (filter.difficulty && filter.difficulty !== 'mixed' && q.difficulty !== filter.difficulty) return false;
        if (filter.tags?.length && !filter.tags.some((tag) => q.tags?.includes(tag))) return false;
        return true;
    });
}

export function getTopicsForTrack(bank: Question[], track: Track): string[] {
    const topicSet = new Set<string>();
    bank.filter((q) => q.track === track).forEach((q) => q.topicIds.forEach((t) => topicSet.add(t)));
    return [...topicSet];
}
