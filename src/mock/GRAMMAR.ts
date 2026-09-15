import type {Lesson} from '../types';

export const GRAMMAR_DATA: Lesson[] = [
    {
        id: 'grammar-present-simple',
        title: 'Present Simple',
        track: 'grammar',
        level: 'beginner',
        durationMinutes: 15,
        description: 'Habits, routines, facts, and permanent situations.',
        content: {
            theory: `Use Present Simple for habits, routines, facts, and repeated actions.

Structure:
- Positive: Subject + V1 (add -s/-es for He/She/It)
- Negative: Subject + do/does not + V1
- Question: Do/Does + subject + V1?`,
            examples: [
                'I work from home every day.',
                'She works at a bank.',
                "They don't like coffee.",
                'Does he play football?',
            ],
        },
        questionIds: [
            'q-gmc-present-simple-001',
            'q-gfb-present-simple-001',
            'q-gec-present-simple-001',
        ],
    },
    {
        id: 'grammar-present-continuous',
        title: 'Present Continuous',
        track: 'grammar',
        level: 'beginner',
        durationMinutes: 15,
        description: 'Actions happening now or around now.',
        content: {
            theory: `Present Continuous describes actions in progress.

Structure: Subject + am/is/are + V-ing`,
            examples: ['She is studying right now.', 'They are watching a movie.'],
        },
        questionIds: [
            'q-gmc-present-continuous-001',
            'q-gfb-present-continuous-001',
        ],
    },
    {
        id: 'grammar-present-perfect',
        title: 'Present Perfect',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 18,
        description: 'Experiences, unfinished time, recent events.',
        content: {
            theory: `Have/Has + V3.

Used for:
- experience
- unfinished time
- recent events`,
            examples: ['I have visited Japan.', 'She has just finished her homework.'],
        },
        questionIds: [
            'q-gmc-present-perfect-001',
            'q-gfb-present-perfect-001',
            'q-gli-present-perfect-001',
        ],
    },
    {
        id: 'grammar-present-perfect-continuous',
        title: 'Present Perfect Continuous',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 18,
        description: 'Actions that started in the past and continue to now.',
        content: {
            theory: `Have/Has been + V-ing.`,
            examples: ['They have been waiting for two hours.'],
        },
        questionIds: [
            'q-gmc-present-perfect-continuous-001',
            'q-gfb-present-perfect-continuous-001',
        ],
    },
    {
        id: 'grammar-past-simple',
        title: 'Past Simple',
        track: 'grammar',
        level: 'beginner',
        durationMinutes: 15,
        description: 'Completed actions at a definite time in the past.',
        content: {
            theory: `Regular: V-ed. Irregular: V2.`,
            examples: ['I visited my grandma yesterday.', 'She went to school by bus.'],
        },
        questionIds: [
            'q-gmc-past-simple-001',
            'q-gfb-past-simple-001',
            'q-gec-past-simple-001',
        ],
    },
    {
        id: 'grammar-past-continuous',
        title: 'Past Continuous',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'Ongoing action interrupted by another event.',
        content: {
            theory: `Was/Were + V-ing.`,
            examples: ['I was cooking when she called.'],
        },
        questionIds: [
            'q-gmc-past-continuous-001',
            'q-gfb-past-continuous-001',
        ],
    },
    {
        id: 'grammar-past-perfect',
        title: 'Past Perfect',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 18,
        description: 'Action before another past action.',
        content: {
            theory: `Had + V3.`,
            examples: ['She had left before I arrived.'],
        },
        questionIds: [
            'q-gmc-past-perfect-001',
            'q-gfb-past-perfect-001',
        ],
    },
    {
        id: 'grammar-past-perfect-continuous',
        title: 'Past Perfect Continuous',
        track: 'grammar',
        level: 'advanced',
        durationMinutes: 18,
        description: 'Duration before a past event.',
        content: {
            theory: `Had been + V-ing.`,
            examples: ['They had been waiting for an hour before the bus came.'],
        },
        questionIds: [
            'q-gmc-past-perfect-continuous-001',
        ],
    },
    {
        id: 'grammar-future-simple',
        title: 'Future Simple',
        track: 'grammar',
        level: 'beginner',
        durationMinutes: 15,
        description: 'Predictions, spontaneous decisions, promises.',
        content: {
            theory: `Will + V1.`,
            examples: ['I will call you tomorrow.'],
        },
        questionIds: [
            'q-gmc-future-simple-001',
            'q-gli-future-simple-001',
        ],
    },
    {
        id: 'grammar-future-continuous',
        title: 'Future Continuous',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'Action in progress at a future time.',
        content: {
            theory: `Will be + V-ing.`,
            examples: ['At 8 PM, I will be studying.'],
        },
        questionIds: [
            'q-gmc-future-continuous-001',
            'q-gfb-future-continuous-001',
        ],
    },
    {
        id: 'grammar-future-perfect',
        title: 'Future Perfect',
        track: 'grammar',
        level: 'advanced',
        durationMinutes: 18,
        description: 'Action completed before a future time.',
        content: {
            theory: `Will have + V3.`,
            examples: ['By 2030, I will have graduated.'],
        },
        questionIds: [
            'q-gmc-future-perfect-001',
            'q-gfb-future-perfect-001',
        ],
    },
    {
        id: 'grammar-future-perfect-continuous',
        title: 'Future Perfect Continuous',
        track: 'grammar',
        level: 'advanced',
        durationMinutes: 18,
        description: 'Duration up to a future point.',
        content: {
            theory: `Will have been + V-ing.`,
            examples: ['By June, she will have been working here for 5 years.'],
        },
        questionIds: [
            'q-gmc-future-perfect-continuous-001',
        ],
    },
    {
        id: 'grammar-be-going-to',
        title: 'Be Going To',
        track: 'grammar',
        level: 'beginner',
        durationMinutes: 12,
        description: 'Plans and predictions based on evidence.',
        content: {
            theory: `am/is/are + going to + V1.`,
            examples: ['I am going to visit my parents this weekend.'],
        },
        questionIds: [
            'q-gmc-be-going-to-001',
        ],
    },
    {
        id: 'grammar-nouns',
        title: 'Nouns & Plurals',
        track: 'grammar',
        level: 'beginner',
        durationMinutes: 12,
        description: 'Singular, plural, countable, uncountable.',
        content: {
            theory: `Regular plurals: -s, -es. Irregular: child → children.`,
            examples: ['one box → two boxes', 'one child → two children'],
        },
        questionIds: [
            'q-gfb-nouns-001',
        ],
    },
    {
        id: 'grammar-articles',
        title: 'Articles',
        track: 'grammar',
        level: 'beginner',
        durationMinutes: 15,
        description: 'a, an, the, zero article.',
        content: {
            theory: `a/an for indefinite, the for specific, zero for general.`,
            examples: ['I saw a dog. The dog was friendly.'],
        },
        questionIds: [
            'q-gmc-articles-001',
            'q-gec-articles-001',
        ],
    },
    {
        id: 'grammar-pronouns',
        title: 'Pronouns & Possessives',
        track: 'grammar',
        level: 'beginner',
        durationMinutes: 12,
        description: 'Subject, object, possessive pronouns.',
        content: {
            theory: `I/me/my/mine, you/you/your/yours, he/him/his/his...`,
            examples: ['This book is mine.'],
        },
        questionIds: [
            'q-gmc-pronouns-001',
        ],
    },
    {
        id: 'grammar-determiners',
        title: 'Determiners & Quantifiers',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'some, any, much, many, few, little.',
        content: {
            theory: `Countable: many, few. Uncountable: much, little.`,
            examples: ['I have many friends.', 'She has little time.'],
        },
        questionIds: [
            'q-gmc-determiners-001',
        ],
    },
    {
        id: 'grammar-adjectives-adverbs',
        title: 'Adjectives & Adverbs',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'Modifiers, comparatives, superlatives.',
        content: {
            theory: `Adj: big/bigger/biggest. Adv: quickly/more quickly/most quickly.`,
            examples: ['She runs faster than me.'],
        },
        questionIds: [
            'q-gmc-adjectives-adverbs-001',
        ],
    },
    {
        id: 'grammar-prepositions',
        title: 'Prepositions',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'Time, place, movement.',
        content: {
            theory: `in/on/at for time and place. to/into/onto for movement.`,
            examples: ['at 3 PM', 'in the morning', 'on Monday'],
        },
        questionIds: [
            'q-gfb-prepositions-001',
        ],
    },
    {
        id: 'grammar-conjunctions',
        title: 'Conjunctions & Linking Words',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'Cohesion: and, but, because, although, however.',
        content: {
            theory: `Coordinate: and/but/or. Subordinate: because/although/if.`,
            examples: ['I stayed home because it was raining.'],
        },
        questionIds: [
            'q-gmc-conjunctions-001',
        ],
    },
    {
        id: 'grammar-modal-verbs',
        title: 'Modal Verbs',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 18,
        description: 'can, could, may, might, must, should, would.',
        content: {
            theory: `Modal + V1. No -s for 3rd person.`,
            examples: ['You should study harder.', 'She can swim.'],
        },
        questionIds: [
            'q-gmc-modal-verbs-001',
            'q-gec-modal-verbs-001',
        ],
    },
    {
        id: 'grammar-gerunds-infinitives',
        title: 'Gerunds & Infinitives',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 18,
        description: 'Verb + V-ing vs verb + to V.',
        content: {
            theory: `enjoy + V-ing. want + to V.`,
            examples: ['I enjoy reading.', 'She wants to travel.'],
        },
        questionIds: [
            'q-gmc-gerunds-infinitives-001',
        ],
    },
    {
        id: 'grammar-phrasal-verbs',
        title: 'Phrasal Verbs',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'Verb + particle meaning shifts.',
        content: {
            theory: `give up, look after, put off...`,
            examples: ['Never give up on your dreams.'],
        },
        questionIds: [
            'q-gmc-phrasal-verbs-001',
        ],
    },
    {
        id: 'grammar-used-to',
        title: 'Used to / Be used to / Get used to',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'Past habits and adaptation.',
        content: {
            theory: `used to + V1 (past habit). be used to + V-ing (familiar). get used to + V-ing (becoming familiar).`,
            examples: ['I used to smoke.', 'I am used to waking up early.'],
        },
        questionIds: [
            'q-gmc-used-to-001',
        ],
    },
    {
        id: 'grammar-conditionals',
        title: 'Conditionals',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 20,
        description: 'Zero, first, second, third, mixed.',
        content: {
            theory: `0: If + present, present. 1: If + present, will + V. 2: If + past, would + V. 3: If + had V3, would have V3.`,
            examples: ['If it rains, I will stay home.', 'If I were you, I would apologize.'],
        },
        questionIds: [
            'q-gmc-conditionals-001',
            'q-gec-conditionals-001',
            'q-gsp-conditionals-001',
        ],
    },
    {
        id: 'grammar-relative-clauses',
        title: 'Relative Clauses',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 18,
        description: 'Defining, non-defining, reduced.',
        content: {
            theory: `who/which/that/whose/where.`,
            examples: ['The man who called you is my uncle.'],
        },
        questionIds: [
            'q-gmc-relative-clauses-001',
        ],
    },
    {
        id: 'grammar-noun-clauses',
        title: 'Noun Clauses',
        track: 'grammar',
        level: 'advanced',
        durationMinutes: 18,
        description: 'that, whether, if, wh-.',
        content: {
            theory: `I know that he is coming. I wonder whether she will come.`,
            examples: ['What she said surprised me.'],
        },
        questionIds: [],
    },
    {
        id: 'grammar-adverbial-clauses',
        title: 'Adverbial Clauses',
        track: 'grammar',
        level: 'advanced',
        durationMinutes: 18,
        description: 'Time, reason, purpose, result, contrast.',
        content: {
            theory: `when, because, so that, so...that, although.`,
            examples: ['Although he was tired, he finished the work.'],
        },
        questionIds: [],
    },
    {
        id: 'grammar-passive-voice',
        title: 'Passive Voice',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 18,
        description: 'Shift focus to receiver of action.',
        content: {
            theory: `be + V3. Tense of 'be' changes with time.`,
            examples: ['English is spoken all over the world.'],
        },
        questionIds: [
            'q-gmc-passive-voice-001',
            'q-gec-passive-voice-001',
            'q-gsp-passive-voice-001',
        ],
    },
    {
        id: 'grammar-causative',
        title: 'Causative Structures',
        track: 'grammar',
        level: 'advanced',
        durationMinutes: 15,
        description: 'have/get something done.',
        content: {
            theory: `have/get + object + V3.`,
            examples: ['I had my car repaired.'],
        },
        questionIds: [
            'q-gmc-causative-001',
        ],
    },
    {
        id: 'grammar-reported-speech',
        title: 'Reported Speech',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 18,
        description: 'Statements, questions, commands.',
        content: {
            theory: `Backshift: "I am tired" → He said he was tired.`,
            examples: ['She said she would come.'],
        },
        questionIds: [
            'q-gmc-reported-speech-001',
            'q-gec-reported-speech-001',
        ],
    },
    {
        id: 'grammar-question-tags',
        title: 'Question Tags & Embedded Questions',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'Tag questions and indirect questions.',
        content: {
            theory: `Positive → negative tag. Could you tell me where...?`,
            examples: ['You are coming, aren\'t you?'],
        },
        questionIds: [
            'q-gmc-question-tags-001',
        ],
    },
    {
        id: 'grammar-comparisons',
        title: 'Comparatives & Superlatives',
        track: 'grammar',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'Equality, comparative, superlative.',
        content: {
            theory: `as...as, -er/more, -est/most.`,
            examples: ['She is as tall as me.', 'He is the smartest.'],
        },
        questionIds: [
            'q-gmc-comparisons-001',
        ],
    },
    {
        id: 'grammar-inversion',
        title: 'Emphasis & Inversion',
        track: 'grammar',
        level: 'advanced',
        durationMinutes: 18,
        description: 'Cleft sentences, inversion, ellipsis.',
        content: {
            theory: `It is X that... Never have I seen...`,
            examples: ['Never have I seen such beauty.'],
        },
        questionIds: [
            'q-gmc-inversion-001',
            'q-gsp-inversion-001',
        ],
    },
    {
        id: 'grammar-nominalisation',
        title: 'Nominalisation & Hedging',
        track: 'grammar',
        level: 'advanced',
        durationMinutes: 15,
        description: 'Academic writing patterns.',
        content: {
            theory: `Nouns derived from verbs/adjectives. Hedging: may, might, tend to.`,
            examples: ['The implementation of the policy resulted in growth.'],
        },
        questionIds: [
            'q-gmc-nominalisation-001',
        ],
    },
];