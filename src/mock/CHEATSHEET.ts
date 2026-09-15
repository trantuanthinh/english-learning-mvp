import type {
    GrammarCheatsheetItem,
    PronunciationCheatsheetItem,
    VocabularyCheatsheetGroup,
} from '../types';

export const GRAMMAR_CHEATSHEET: GrammarCheatsheetItem[] = [
    {
        id: 'cs-gram-01',
        topicId: 'topic-present-simple',
        title: 'Present Simple',
        rule: 'Used for habits, routines, general truths, and fixed schedules.',
        structure: 'Subject + Verb(s/es) + Object  |  Negative: don\'t/doesn\'t + V  |  Question: Do/Does + S + V?',
        usage: [
            'Daily habits and routines',
            'General truths and facts',
            'Fixed schedules (timetables)',
            'States and feelings (know, believe, love)',
        ],
        signalWords: ['always', 'usually', 'often', 'sometimes', 'never', 'every day/week', 'on Mondays'],
        commonMistakes: [
            'Forgetting -s/-es on 3rd person singular: "She go" ❌ → "She goes" ✓',
            'Using Present Continuous for habits: "I am going to work every day" ❌',
        ],
        examples: [
            'She goes to school every day.',
            'The sun rises in the East.',
            'Do you like coffee?',
        ],
    },
    {
        id: 'cs-gram-02',
        topicId: 'topic-past-simple',
        title: 'Past Simple',
        rule: 'Used for actions that started and finished completely in the past at a specific time.',
        structure: 'Subject + V2/ed + Object  |  Negative: didn\'t + V  |  Question: Did + S + V?',
        usage: [
            'Completed actions at a specific past time',
            'A series of past events',
            'Past habits (no longer true)',
        ],
        signalWords: ['yesterday', 'last week/month/year', 'ago', 'in 2010', 'when I was young'],
        commonMistakes: [
            'Mixing Past Simple with Present Perfect: "I have visited Paris last year" ❌',
            'Using wrong irregular forms: "goed" ❌ → "went" ✓',
        ],
        examples: [
            'I visited London last summer.',
            'They didn\'t watch the movie yesterday.',
            'What time did you wake up?',
        ],
    },
    {
        id: 'cs-gram-03',
        topicId: 'topic-present-perfect',
        title: 'Present Perfect',
        rule: 'Connects the past to the present — for experiences, unfinished time periods, or recent actions with present relevance.',
        structure: 'Subject + have/has + V3 (past participle)',
        usage: [
            'Life experiences (Have you ever…?)',
            'Actions continuing from past to now (for/since)',
            'Recent actions with present result (just, already, yet)',
        ],
        signalWords: ['ever', 'never', 'just', 'already', 'yet', 'for', 'since', 'recently'],
        commonMistakes: [
            'Using with finished past time: "I have seen him yesterday" ❌',
            'Wrong past participle: "has went" ❌ → "has gone" ✓',
        ],
        examples: [
            'I have lived in Hanoi for 5 years.',
            'She has already finished her homework.',
            'Have you ever visited Japan?',
        ],
    },
    {
        id: 'cs-gram-04',
        topicId: 'topic-articles',
        title: 'Articles (a / an / the)',
        rule: 'A/an for non-specific singular countable nouns. The for specific or previously mentioned nouns.',
        structure: 'a + consonant sound  |  an + vowel sound  |  the + specific noun',
        usage: [
            'a/an: first mention, one of many, jobs, general categories',
            'the: specific things, unique objects, superlatives, musical instruments',
            'No article: plural/general concepts, meals, sports, languages',
        ],
        commonMistakes: [
            'Using "a" before vowel sounds: "a apple" ❌ → "an apple" ✓',
            'Omitting "the" with superlatives: "She is best student" ❌',
        ],
        examples: [
            'I saw a dog in the park.',
            'She is the best student in the class.',
            'I play tennis on Saturdays.',
        ],
    },
];

export const VOCABULARY_CHEATSHEET: VocabularyCheatsheetGroup[] = [
    {
        id: 'cs-vocab-travel',
        topicId: 'topic-travel',
        category: 'Travel & Transportation',
        items: [
            {word: 'Boarding pass', meaning: 'Thẻ lên máy bay', partOfSpeech: 'noun', example: 'Show your boarding pass at gate 4.'},
            {word: 'Luggage', meaning: 'Hành lý', partOfSpeech: 'noun', example: 'My luggage was lost at the airport.'},
            {word: 'Accommodation', meaning: 'Chỗ ở / Khách sạn', partOfSpeech: 'noun', example: 'We booked accommodation near the beach.'},
            {word: 'Destination', meaning: 'Điểm đến', partOfSpeech: 'noun', example: 'Paris is our final destination.'},
            {word: 'Departure', meaning: 'Khởi hành', partOfSpeech: 'noun', example: 'The departure time is 8:00 AM.'},
        ],
    },
    {
        id: 'cs-vocab-food',
        topicId: 'topic-food',
        category: 'Food & Dining',
        items: [
            {word: 'Appetizer', meaning: 'Món khai vị', partOfSpeech: 'noun', example: 'Would you like to order an appetizer?'},
            {word: 'Delicious', meaning: 'Ngon miệng', partOfSpeech: 'adjective', example: 'The soup was absolutely delicious.'},
            {word: 'Receipt', meaning: 'Hóa đơn thanh toán', partOfSpeech: 'noun', example: 'Could we have the receipt, please?'},
            {word: 'Vegetarian', meaning: 'Ăn chay', partOfSpeech: 'noun/adj', example: 'Do you have any vegetarian options?'},
            {word: 'Reservation', meaning: 'Đặt bàn / Đặt phòng', partOfSpeech: 'noun', example: 'I made a reservation for two at 7 PM.'},
        ],
    },
    {
        id: 'cs-vocab-business',
        topicId: 'topic-business',
        category: 'Business & Office',
        items: [
            {word: 'Deadline', meaning: 'Hạn chót', partOfSpeech: 'noun', example: 'We must submit the report before the deadline.'},
            {word: 'Colleague', meaning: 'Đồng nghiệp', partOfSpeech: 'noun', example: 'My colleague helped me with the presentation.'},
            {word: 'Negotiate', meaning: 'Đàm phán', partOfSpeech: 'verb', example: 'They are negotiating a new contract.'},
            {word: 'Proposal', meaning: 'Đề xuất', partOfSpeech: 'noun', example: 'The client approved our proposal.'},
            {word: 'Agenda', meaning: 'Chương trình nghị sự', partOfSpeech: 'noun', example: 'Let\'s review the meeting agenda.'},
        ],
    },
];

export const PRONUNCIATION_CHEATSHEET: PronunciationCheatsheetItem[] = [
    {
        id: 'cs-pron-01',
        topicId: 'topic-s-vs-sh',
        soundOrTopic: '/s/ vs /ʃ/',
        description: '/s/ is a voiceless alveolar fricative (smile, teeth close). /ʃ/ is a voiceless postalveolar fricative (lips rounded, air pushed forward).',
        mouthPosition: '/s/: teeth nearly together, tongue behind teeth. /ʃ/: lips slightly rounded, tongue further back.',
        minimalPairs: [
            ['sea /siː/', 'she /ʃiː/'],
            ['sip /sɪp/', 'ship /ʃɪp/'],
            ['sell /sel/', 'shell /ʃel/'],
        ],
        examples: ['sun, see, bus', 'she, ship, wash'],
        commonMistakes: ['Replacing /ʃ/ with /s/: "sheep" pronounced as "seep"'],
    },
    {
        id: 'cs-pron-02',
        topicId: 'topic-r-vs-l',
        soundOrTopic: '/r/ vs /l/',
        description: '/l/ requires the tongue tip to touch the alveolar ridge. /r/ is an approximant — tongue curled back without touching anything.',
        mouthPosition: '/l/: tongue tip up behind upper teeth. /r/: lips slightly rounded, tongue pulled back.',
        minimalPairs: [
            ['light /laɪt/', 'right /raɪt/'],
            ['lock /lɒk/', 'rock /rɒk/'],
            ['fly /flaɪ/', 'fry /fraɪ/'],
        ],
        examples: ['light, love, hello', 'right, red, around'],
        commonMistakes: ['Using /l/ instead of /r/: "rice" sounds like "lice"'],
    },
    {
        id: 'cs-pron-03',
        topicId: 'topic-word-stress',
        soundOrTopic: 'Word Stress',
        description: 'In two-syllable words, nouns and adjectives usually stress the first syllable; verbs stress the second.',
        mouthPosition: 'Stress the syllable by making it louder, longer, and higher in pitch.',
        examples: [
            'Noun: PRE-sent /ˈprez.ənt/, COF-fee /ˈkɒf.i/',
            'Verb: pre-SENT /prɪˈzent/, de-CIDE /dɪˈsaɪd/',
            'Adjective: HAP-py /ˈhæp.i/, CLE-ver /ˈklev.ər/',
        ],
        commonMistakes: [
            'Stressing the wrong syllable changes meaning: "RE-cord" (noun) vs "re-CORD" (verb)',
        ],
    },
];
