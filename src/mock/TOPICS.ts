import type {Topic} from '../types';

export const TOPICS: Topic[] = [
  {
    id: 'topic-basic-tenses',
    name: 'Basic Tenses',
    track: 'grammar',
    description: 'Present, past and future basic tenses',
  },
  {
    id: 'topic-passive-voice',
    name: 'Passive Voice',
    track: 'grammar',
    description: 'Passive structures across different tenses',
  },
  {
    id: 'topic-family-relationships',
    name: 'Family & Relationships',
    track: 'vocabulary',
    description: 'Vocabulary about family and relationships',
  },
  {
    id: 'topic-travel',
    name: 'Travel',
    track: 'vocabulary',
    description: 'Vocabulary about travel and tourism',
  },
  {
    id: 'topic-schwa',
    name: 'Schwa /ə/',
    track: 'pronunciation',
    description: 'The most common vowel sound in English',
  },
  {
    id: 'topic-th-voiced-unvoiced',
    name: '/θ/ vs /ð/',
    track: 'pronunciation',
    description: 'Voiceless and voiced TH sounds',
  },
];

export const TOPIC_MAP = Object.fromEntries(
  TOPICS.map((t) => [t.id, t]),
) as Record<string, Topic>;