// src/data.ts
import {GRAMMAR_DATA} from "./mock/GRAMMAR";
import {PRONUNCIATION_DATA} from "./mock/PRONUNCIATION";
import {VOCABULARY_DATA} from "./mock/VOCABULARY";
import type {Lesson} from "./types";

export const LESSONS_DATA: Lesson[] = [...PRONUNCIATION_DATA, ...GRAMMAR_DATA, ...VOCABULARY_DATA];
