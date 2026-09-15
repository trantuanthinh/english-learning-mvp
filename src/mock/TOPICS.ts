import type {Topic} from '../types';

export const TOPICS: Topic[] = [
    // Grammar
    {id: 'topic-present-simple', name: 'Present Simple', track: 'grammar', description: 'Habitual actions and general truths'},
    {id: 'topic-past-simple', name: 'Past Simple', track: 'grammar', description: 'Completed actions in the past'},
    {id: 'topic-present-perfect', name: 'Present Perfect', track: 'grammar', description: 'Past actions connected to the present'},
    {id: 'topic-articles', name: 'Articles (a/an/the)', track: 'grammar', description: 'Definite and indefinite articles'},

    // Vocabulary
    {id: 'topic-travel', name: 'Travel & Transportation', track: 'vocabulary'},
    {id: 'topic-food', name: 'Food & Dining', track: 'vocabulary'},
    {id: 'topic-business', name: 'Business & Office', track: 'vocabulary'},

    // Pronunciation
    {id: 'topic-s-vs-sh', name: '/s/ vs /ʃ/', track: 'pronunciation'},
    {id: 'topic-r-vs-l', name: '/r/ vs /l/', track: 'pronunciation'},
    {id: 'topic-word-stress', name: 'Word Stress', track: 'pronunciation'},
];

export const TOPIC_MAP = Object.fromEntries(TOPICS.map((t) => [t.id, t])) as Record<string, Topic>;
