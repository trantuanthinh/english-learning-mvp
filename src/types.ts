// types.ts

export type TrackType = 'pronunciation' | 'grammar' | 'vocabulary';

export interface VocabularyItem {
    id: string;
    word: string;
    phonetic: string;
    meaning: string;
    example: string;
}

export interface GrammarItem {
    rule: string;
    explanation: string;
    structure: string;
    examples: string[];
}

export interface Lesson {
    id: string;
    title: string;
    track: TrackType;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    durationMinutes: number;
    description: string;
    content: {
        theory?: string; // Dành cho Grammar/Pronunciation
        vocabularyList?: VocabularyItem[]; // Dành cho Vocabulary
        grammarRule?: GrammarItem; // Dành cho Grammar
        examples?: string[];
        tips?: string[];
    };
    quiz: QuizQuestion[];
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface UserProgress {
    completedLessonIds: string[];
    quizScores: Record<string, number>; // lessonId -> score (0-100)
    lastStudiedLessonId?: string;
}

export type ViewState =
    | {name: 'dashboard';}
    | {name: 'lesson'; lessonId: string;}
    | {name: 'quiz'; lessonId: string;}
    | {name: 'result'; lessonId: string; score: number; total: number;};