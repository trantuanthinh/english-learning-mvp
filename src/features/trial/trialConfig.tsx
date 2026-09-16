import type {TrialAction} from '../../types';

export const TRIAL_LIMITS: Record<TrialAction, number> = {
    lesson: 2,
    quiz: 2,
    exam: 2,
    practice: 2,
    flashcard: 2,
    review: 2,
};

export const TRIAL_ACTION_LABELS: Record<TrialAction, string> = {
    lesson: 'bài học',
    quiz: 'bài kiểm tra bài học',
    exam: 'bài thi thử',
    practice: 'phiên luyện tập',
    flashcard: 'phiên thẻ từ vựng',
    review: 'phiên ôn lỗi sai',
};

export const CONTACT = {
    name: 'Trần Tuấn Thịnh',
    role: 'Full-stack Developer',
    email: 'tran.tuan.thinh.0125@gmail.com',
    phone: '039 527 9915',
    portfolio: 'https://trantuanthinh.github.io/portfolio',
    linkedin: 'https://linkedin.com/in/thịnh-tuấn-trần-27893827a/',
    github: 'https://github.com/trantuanthinh',
};

export function totalRemaining(usage: Record<TrialAction, number>): number {
    return (Object.keys(TRIAL_LIMITS) as TrialAction[]).reduce(
        (sum, a) => sum + Math.max(0, TRIAL_LIMITS[a] - (usage[a] ?? 0)),
        0,
    );
}