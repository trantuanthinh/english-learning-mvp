import type {Lesson} from '../types';

export const GRAMMAR_DATA: Lesson[] = [
  {
    id: 'grammar-present-simple',
    title: 'Present Simple',
    track: 'grammar',
    level: 'beginner',
    durationMinutes: 15,
    description:
      'Use the Present Simple tense to talk about habits, routines, facts, and permanent situations.',
    content: {
      theory: `
Use the Present Simple to talk about habits, routines, facts, and repeated actions.

Structure:
- Positive: Subject + base verb (add -s/-es for He/She/It)
- Negative: Subject + do/does not + base verb
- Question: Do/Does + subject + base verb?
`,
      examples: [
        'I work from home every day.',
        'She works at a bank.',
        "They don't like coffee.",
        'Does he play football?',
      ],
    },
    questionIds: [
      'grammar-q-present-simple-001',
      'grammar-q-present-simple-002',
    ],
  },
  {
    id: 'grammar-passive-voice',
    title: 'Passive Voice Fundamentals',
    track: 'grammar',
    level: 'intermediate',
    durationMinutes: 15,
    description:
      'Shift focus from the doer of an action to the receiver using the passive voice.',
    content: {
      theory: `
Use the passive voice when the action receiver is more important than the agent.

Structure:
- Object + appropriate form of 'to be' + past participle (+ by agent)
`,
      examples: [
        'The software update was installed successfully.',
        'English is spoken all over the world.',
        'A new bridge is being built across the river.',
      ],
    },
    questionIds: [
      'grammar-q-passive-001',
      'grammar-q-passive-002',
    ],
  },
];

export const VOCABULARY_DATA: Lesson[] = [
  {
    id: 'vocab-family-relationships',
    title: 'Family & Relationships',
    track: 'vocabulary',
    level: 'beginner',
    durationMinutes: 10,
    description:
      'Learn essential vocabulary to talk about family members, relatives, and close relationships.',
    content: {
      theory:
        'This lesson covers foundational words for describing family structures and interpersonal connections.',
      vocabularyList: [
        { word: 'relative', meaning: 'họ hàng', phonetic: '/ˈrelətɪv/' },
        { word: 'sibling', meaning: 'anh chị em ruột', phonetic: '/ˈsɪblɪŋ/' },
        { word: 'spouse', meaning: 'vợ/chồng', phonetic: '/spaʊs/' },
      ],
      examples: [
        'I have two siblings, an older brother and a younger sister.',
        'Many of my relatives live in the countryside.',
        'She is the legal guardian of her young nephew.',
      ],
    },
    questionIds: ['vocab-q-family-001', 'vocab-q-family-002'],
  },
  {
    id: 'vocab-travel-tourism',
    title: 'Travel & Tourism',
    track: 'vocabulary',
    level: 'intermediate',
    durationMinutes: 15,
    description:
      'Master vocabulary for destinations, sightseeing, tourism impacts, and travel planning.',
    content: {
      theory:
        'Travel and tourism is a classic IELTS topic. Use these words to discuss tourist attractions and eco-tourism.',
      vocabularyList: [
        {
          word: 'destination',
          meaning: 'điểm đến',
          phonetic: '/ˌdestɪˈneɪʃən/',
        },
        {
          word: 'itinerary',
          meaning: 'lịch trình chuyến đi',
          phonetic: '/aɪˈtɪnəreri/',
        },
        {
          word: 'accommodation',
          meaning: 'chỗ ở',
          phonetic: '/əˌkɑːməˈdeɪʃən/',
        },
      ],
      examples: [
        'Vietnam has become a popular tourist destination.',
        'We planned our travel itinerary carefully before departure.',
        'The hotel is renowned for its exceptional hospitality.',
      ],
    },
    questionIds: ['vocab-q-travel-001', 'vocab-q-travel-002'],
  },
];

export const PRONUNCIATION_DATA: Lesson[] = [
  {
    id: 'pronunciation-schwa',
    title: 'The Schwa Sound /ə/',
    track: 'pronunciation',
    level: 'beginner',
    durationMinutes: 15,
    description:
      'Master the most common vowel sound in English: the weak schwa /ə/ in unstressed syllables.',
    content: {
      theory: `
The schwa /ə/ is a neutral, relaxed central vowel sound.
It appears almost exclusively in unstressed syllables and is key to natural English rhythm.

Tips:
- Never stress the schwa syllable.
- Relax your jaw and tongue completely.
`,
      examples: [
        'banana /bəˈnɑːnə/',
        'teacher /ˈtiːtʃə/',
        'support /səˈpɔːt/',
        'computer /kəmˈpjuːtə/',
      ],
    },
    questionIds: ['pronunciation-q-schwa-001', 'pronunciation-q-schwa-002'],
  },
  {
    id: 'pronunciation-th-sounds',
    title: 'Consonant Contrast: /θ/ vs /ð/',
    track: 'pronunciation',
    level: 'beginner',
    durationMinutes: 15,
    description:
      'Learn how to correctly articulate voiceless /θ/ and voiced /ð/ dental fricatives.',
    content: {
      theory: `
The 'th' sounds require placing the tip of your tongue lightly between your upper and lower teeth.

Rules:
- /θ/ (voiceless): think, bath
- /ð/ (voiced): this, mother
`,
      examples: [
        'think /θɪŋk/ vs this /ðɪs/',
        'breath /breθ/ vs breathe /briːð/',
        'bath /bɑːθ/ vs bathe /beɪð/',
        'three /θriː/',
      ],
    },
    questionIds: ['pronunciation-q-th-001', 'pronunciation-q-th-002'],
  },
];