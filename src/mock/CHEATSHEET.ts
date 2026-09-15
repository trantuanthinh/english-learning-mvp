import type {
    GrammarCheatsheetItem,
    PronunciationCheatsheetItem,
    VocabularyCheatsheetGroup,
} from '../types';

export const GRAMMAR_CHEATSHEET: GrammarCheatsheetItem[] = [
  {
    id: 'cs-gram-basic-tenses-01',
    topicId: 'topic-basic-tenses',
    title: 'Present Simple',
    rule: 'Use Present Simple for habits, facts, and routines.',
    structure: 'Subject + V1 (s/es)',
    usage: [
      'Expressing permanent situations and general truths',
      'Describing daily habits and routines',
    ],
    signalWords: ['always', 'usually', 'every day'],
    commonMistakes: [
      "Forgetting -s for third-person singular: 'He play tennis'",
    ],
    examples: [
      'She works as a software developer.',
      'They visit the museum every weekend.',
    ],
  },
  {
    id: 'cs-gram-passive-voice-01',
    topicId: 'topic-passive-voice',
    title: 'Passive Voice',
    rule: 'Focuses attention on the recipient or result of an action.',
    structure: 'Subject + be + past participle + (by agent)',
    usage: [
      'When the agent is unknown, unimportant, or obvious',
      'In formal reports or scientific writing',
    ],
    signalWords: ['by'],
    commonMistakes: [
      "Omitting the auxiliary 'be' verb or using the wrong tense of 'be'",
    ],
    examples: [
      'The web application was deployed on a server.',
      'New features are released every month.',
    ],
  },
];

export const VOCABULARY_CHEATSHEET: VocabularyCheatsheetGroup[] = [
  {
    id: 'cs-vocab-family-relationships',
    topicId: 'topic-family-relationships',
    category: 'Daily Life: Family & Relationships',
    items: [
      {
        word: 'relative',
        meaning: 'họ hàng, người thân',
        partOfSpeech: 'noun',
        example: 'Many of my relatives live in Hanoi.',
        notes: 'Collocation: close relative',
      },
      {
        word: 'sibling',
        meaning: 'anh chị em ruột',
        partOfSpeech: 'noun',
        example: 'I have two siblings.',
      },
      {
        word: 'spouse',
        meaning: 'vợ hoặc chồng',
        partOfSpeech: 'noun',
        example: 'Employees can bring their spouse to the gala.',
      },
    ],
  },
  {
    id: 'cs-vocab-travel',
    topicId: 'topic-travel',
    category: 'Travel: Tourism & Travel',
    items: [
      {
        word: 'itinerary',
        meaning: 'lịch trình chuyến đi',
        partOfSpeech: 'noun',
        example: 'Our itinerary includes three museums.',
        notes: 'Collocation: detailed itinerary',
      },
      {
        word: 'destination',
        meaning: 'điểm đến',
        partOfSpeech: 'noun',
        example: 'Da Nang is a popular tourist destination.',
      },
      {
        word: 'accommodation',
        meaning: 'chỗ ở',
        partOfSpeech: 'noun',
        example: 'We booked accommodation near the center.',
      },
    ],
  },
];

export const PRONUNCIATION_CHEATSHEET: PronunciationCheatsheetItem[] = [
  {
    id: 'cs-pron-schwa',
    topicId: 'topic-schwa',
    soundOrTopic: 'The Schwa Sound (/ə/)',
    description:
      'The most common vowel sound in English, occurring in unstressed syllables.',
    mouthPosition:
      'Jaw and lips are relaxed, tongue rests neutral in the center.',
    minimalPairs: [['photograph', 'photographer /fəˈtɒɡrəfər/']],
    examples: ['about /əˈbaʊt/', 'banana /bəˈnænə/', 'computer /kəmˈpjuːtər/'],
    commonMistakes: [
      'Pronouncing unstressed vowels with full, clear sounds instead of schwa.',
    ],
  },
  {
    id: 'cs-pron-th-voiced-unvoiced',
    topicId: 'topic-th-voiced-unvoiced',
    soundOrTopic: 'TH Sounds (/θ/ and /ð/)',
    description:
      'Fricative sounds produced by placing the tongue tip between the teeth.',
    mouthPosition:
      'Tongue tip lightly touches or protrudes slightly past the teeth.',
    minimalPairs: [
      ['think /θɪŋk/', 'sink /sɪŋk/'],
      ['then /ðen/', 'den /den/'],
    ],
    examples: ['thought', 'weather', 'healthy', 'smooth'],
    commonMistakes: [
      'Substituting /θ/ with /s/ or /t/, and /ð/ with /d/ or /z/.',
    ],
  },
];