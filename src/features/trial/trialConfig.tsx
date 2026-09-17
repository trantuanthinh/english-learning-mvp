import type {TrialAction} from "../../types";

export const TRIAL_LIMITS: Record<TrialAction, number> = {
    lesson: 3,
    quiz: 3,
    exam: 1,
    practice: 5,
    flashcard: 5,
    review: 5,
};

export const CONTACT = {
    name: "Trần Tuấn Thịnh",
    role: "Full-stack Developer",
    email: "tran.tuan.thinh.0125@gmail.com",
    phone: "039 527 9915",
    portfolio: "https://trantuanthinh.github.io/portfolio",
    linkedin: "https://linkedin.com/in/thịnh-tuấn-trần-27893827a/",
    github: "https://github.com/trantuanthinh",
};

export function totalRemaining(usage: Record<TrialAction, number>): number {
    return (Object.keys(TRIAL_LIMITS) as TrialAction[]).reduce(
        (sum, a) => sum + Math.max(0, TRIAL_LIMITS[a] - (usage[a] ?? 0)),
        0,
    );
}

// 8:00 sáng thứ 4, 23/09/2026 theo giờ VN (UTC+7)
// Dùng ISO + offset để user ở nước ngoài vẫn bị block đúng giờ VN
export const TRIAL_DEADLINE = Date.parse("2026-09-23T08:00:00+07:00");

export const isTrialExpired = (): boolean => Date.now() >= TRIAL_DEADLINE;
