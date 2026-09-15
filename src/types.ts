export type Track = "vocabulary" | "grammar" | "pronunciation";
export type Difficulty = "beginner" | "intermediate" | "advanced";
export type QuestionType = "multiple-choice" | "fill-blank" | "error-correction" | "listening" | "speaking";

export interface Topic {
    id: string;
    name: string;
    track: Track;
    description?: string;
}

export interface BaseQuestion {
    id: string;
    track: Track;
    topicIds: string[];
    lessonIds?: string[];
    difficulty: Difficulty;
    points?: number;
    explanation?: string;
    tags?: string[];
}

export interface MultipleChoiceQuestion extends BaseQuestion {
    type: "multiple-choice";
    question: string;
    options: string[];
    correctIndex: number;
}

export interface FillBlankQuestion extends BaseQuestion {
    type: "fill-blank";
    question: string;
    acceptedAnswers: string[];
    caseSensitive?: boolean;
}

export interface Segment {
    id: string;
    text: string;
    label?: string;
}

export interface ErrorCorrectionQuestion extends BaseQuestion {
    type: "error-correction";
    prompt: string;
    segments: Segment[];
    correctSegmentId: string;
    acceptedCorrections: string[];
}

export interface ListeningQuestion extends BaseQuestion {
    type: "listening";
    question: string;
    audio: {text?: string; url?: string;};
    options: string[];
    correctIndex: number;
}

export interface SpeakingQuestion extends BaseQuestion {
    id: string;
    type: "speaking";
    promptText: string;
    targetPhonetics?: string;
    sampleAudioUrl?: string;
}

export type Question =
    | MultipleChoiceQuestion
    | FillBlankQuestion
    | ErrorCorrectionQuestion
    | ListeningQuestion
    | SpeakingQuestion;

export interface VocabularyItem {
    word: string;
    meaning: string;
    phonetic?: string;
}

export interface Lesson {
    id: string;
    title: string;
    track: Track;
    level: Difficulty;
    durationMinutes: number;
    description: string;
    content: {
        theory: string;
        vocabularyList?: VocabularyItem[];
        examples?: string[];
    };
    questionIds: string[];
}

export interface GrammarCheatsheetItem {
    id: string;
    topicId: string;
    title: string;
    rule: string;
    structure?: string;
    usage: string[];
    signalWords?: string[];
    commonMistakes?: string[];
    examples: string[];
}

export interface VocabularyCheatsheetGroup {
    id: string;
    topicId: string;
    category: string;
    items: Array<{
        word: string;
        meaning: string;
        partOfSpeech: string;
        example?: string;
        notes?: string;
    }>;
}

export interface PronunciationCheatsheetItem {
    id: string;
    topicId: string;
    soundOrTopic: string;
    description: string;
    mouthPosition?: string;
    minimalPairs?: Array<[string, string]>;
    examples: string[];
    commonMistakes?: string[];
}

export interface ExamResult {
    id: string;
    timestamp: number;
    scorePercentage: number;
    totalQuestions: number;
    correctAnswersCount: number;
    trackScores: Record<Track, number>;
    topicScores: Record<string, {total: number; correct: number;}>;
    userAnswers: Record<string, {answer: unknown; isCorrect: boolean;}>;
}

export interface QuestionAttempt {
    questionId: string;
    answer: unknown;
    isCorrect: boolean;
    timestamp: number;
}

export interface FlashcardProgress {
    cardId: string;
    state: "new" | "learning" | "known" | "hard";
    lastReviewedAt: number;
}

export interface UserProgress {
    version: 1;
    completedLessonIds: string[];
    quizScores: Record<string, number>;
    questionStats: Record<
        string,
        {
            attempts: number;
            correctCount: number;
            lastAttemptTimestamp: number;
        }
    >;
    examHistory: ExamResult[];
    questionAttempts?: QuestionAttempt[];
    flashcardProgress?: Record<string, FlashcardProgress>;
}
