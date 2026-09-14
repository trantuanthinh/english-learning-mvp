// src/storage.ts
import type {UserProgress} from './types';

const STORAGE_KEY = 'ENGLISH_LEARNING_PROGRESS_V1';

const DEFAULT_PROGRESS: UserProgress = {
  completedLessonIds: [],
  quizScores: {},
};

export const getProgress = (): UserProgress => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : DEFAULT_PROGRESS;
  } catch (e) {
    console.error('Failed to load progress', e);
    return DEFAULT_PROGRESS;
  }
};

export const saveProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
};

export const updateLessonComplete = (lessonId: string, score: number): UserProgress => {
  const current = getProgress();
  const completedLessonIds = Array.from(new Set([...current.completedLessonIds, lessonId]));
  const quizScores = { ...current.quizScores, [lessonId]: score };
  
  const updated: UserProgress = {
    ...current,
    completedLessonIds,
    quizScores,
    lastStudiedLessonId: lessonId
  };
  
  saveProgress(updated);
  return updated;
};