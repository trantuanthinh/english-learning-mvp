import type {Lesson} from '../types';

export const PRONUNCIATION_DATA: Lesson[] = [
    {
        id: 'pron-plosives',
        title: 'Plosives: /p, b, t, d, k, ɡ/',
        track: 'pronunciation',
        level: 'beginner',
        durationMinutes: 15,
        description: 'Master stop consonants and aspiration.',
        content: {
            theory: `Plosives block airflow then release with a burst. Voiceless /p t k/ aspirate at start of stressed syllables.`,
            examples: ['pin /pɪn/ vs bin /bɪn/', 'ten /ten/ vs den /den/', 'cat /kæt/ vs gap /ɡæp/'],
        },
        questionIds: [
            'q-pmc-plosives-001',
        ],
    },
    {
        id: 'pron-fricatives',
        title: 'Fricatives: /f, v, θ, ð, s, z, ʃ, ʒ, h/',
        track: 'pronunciation',
        level: 'beginner',
        durationMinutes: 18,
        description: 'Continuous friction sounds.',
        content: {
            theory: `Air pushes through a narrow opening. Voiced pairs: /v ð z ʒ/. Voiceless: /f θ s ʃ h/.`,
            examples: ['fan /fæn/ vs van /væn/', 'think /θɪŋk/ vs this /ðɪs/', 'sip /sɪp/ vs zip /zɪp/'],
        },
        questionIds: [
            'q-pmc-fricatives-001',
            'q-pli-fricatives-001',
            'q-psp-fricatives-001',
            'q-psp-fricatives-002',
        ],
    },
    {
        id: 'pron-affricates',
        title: 'Affricates: /tʃ, dʒ/',
        track: 'pronunciation',
        level: 'intermediate',
        durationMinutes: 12,
        description: 'Stop + friction.',
        content: {
            theory: `Start with stop, release into friction. /tʃ/ voiceless, /dʒ/ voiced.`,
            examples: ['chair /tʃeə/ vs judge /dʒʌdʒ/'],
        },
        questionIds: [
            'q-pmc-affricates-001',
            'q-pli-affricates-001',
        ],
    },
    {
        id: 'pron-nasals',
        title: 'Nasals: /m, n, ŋ/',
        track: 'pronunciation',
        level: 'intermediate',
        durationMinutes: 12,
        description: 'Air escapes through the nose.',
        content: {
            theory: `/m/ bilabial, /n/ alveolar, /ŋ/ velar.`,
            examples: ['man /mæn/', 'sun /sʌn/', 'sing /sɪŋ/'],
        },
        questionIds: [
            'q-pmc-nasals-001',
        ],
    },
    {
        id: 'pron-approximants',
        title: 'Approximants: /l, r, j, w/',
        track: 'pronunciation',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'Gliding consonants.',
        content: {
            theory: `/l/ lateral, /r/ retroflex, /j/ and /w/ glides.`,
            examples: ['light /laɪt/ vs right /raɪt/', 'yes /jes/', 'wet /wet/'],
        },
        questionIds: [
            'q-pmc-approximants-001',
            'q-psp-approximants-001',
            'q-psp-approximants-002',
        ],
    },
    {
        id: 'pron-short-vowels',
        title: 'Short Vowels: /ɪ, e, æ, ʌ, ɒ, ʊ, ə/',
        track: 'pronunciation',
        level: 'beginner',
        durationMinutes: 18,
        description: 'Lax short vowel sounds.',
        content: {
            theory: `Sit /sɪt/, set /set/, sat /sæt/, cut /kʌt/, cot /kɒt/, put /pʊt/, about /əˈbaʊt/.`,
            examples: ['ship /ʃɪp/', 'bed /bed/', 'cat /kæt/'],
        },
        questionIds: [
            'q-pmc-short-vowels-001',
            'q-psp-short-vowels-001',
        ],
    },
    {
        id: 'pron-long-vowels',
        title: 'Long Vowels: /iː, ɑː, ɔː, uː, ɜː/',
        track: 'pronunciation',
        level: 'beginner',
        durationMinutes: 18,
        description: 'Tense long vowels.',
        content: {
            theory: `sheep /ʃiːp/, car /kɑː/, thought /θɔːt/, food /fuːd/, bird /bɜːd/.`,
            examples: ['see /siː/', 'far /fɑː/', 'door /dɔː/'],
        },
        questionIds: [
            'q-pmc-long-vowels-001',
            'q-psp-long-vowels-001',
        ],
    },
    {
        id: 'pron-diphthongs',
        title: 'Diphthongs: /eɪ, aɪ, ɔɪ, aʊ, əʊ, ɪə, eə, ʊə/',
        track: 'pronunciation',
        level: 'intermediate',
        durationMinutes: 20,
        description: 'Gliding vowels.',
        content: {
            theory: `Smooth transition from one vowel target to another.`,
            examples: ['face /feɪs/', 'time /taɪm/', 'boy /bɔɪ/', 'house /haʊs/', 'home /həʊm/'],
        },
        questionIds: [
            'q-pmc-diphthongs-001',
            'q-pfb-diphthongs-001',
            'q-psp-diphthongs-001',
        ],
    },
    {
        id: 'pron-schwa',
        title: 'The Schwa /ə/',
        track: 'pronunciation',
        level: 'beginner',
        durationMinutes: 15,
        description: 'Most common vowel in English.',
        content: {
            theory: `Neutral, relaxed central vowel in unstressed syllables.`,
            examples: ['banana /bəˈnɑːnə/', 'computer /kəmˈpjuːtə/'],
        },
        questionIds: [
            'q-pmc-schwa-001',
            'q-pfb-schwa-001',
            'q-psp-schwa-001',
        ],
    },
    {
        id: 'pron-word-stress',
        title: 'Word Stress',
        track: 'pronunciation',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'Primary and secondary stress.',
        content: {
            theory: `Stress = louder, longer, higher pitch. Two-syllable nouns stress 1st, verbs stress 2nd.`,
            examples: ['RE-cord (n) vs re-CORD (v)', 'PHO-to', 'com-PU-ter'],
        },
        questionIds: [
            'q-pmc-word-stress-001',
            'q-pec-word-stress-001',
            'q-psp-word-stress-001',
        ],
    },
    {
        id: 'pron-sentence-stress',
        title: 'Sentence Stress',
        track: 'pronunciation',
        level: 'advanced',
        durationMinutes: 18,
        description: 'Content words stressed, function words reduced.',
        content: {
            theory: `Nouns, verbs, adjectives, adverbs carry stress. Articles, prepositions reduced to schwa.`,
            examples: ['**SHE** is **WORKING** on a **NEW** project.'],
        },
        questionIds: [
            'q-pmc-sentence-stress-001',
        ],
    },
    {
        id: 'pron-linking',
        title: 'Linking Sounds',
        track: 'pronunciation',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'Consonant-to-vowel and vowel-to-vowel linking.',
        content: {
            theory: `turn on → tur-non. go out → go(w)out. see it → se(y)it.`,
            examples: ['stand up → stan-dup', 'an apple → a-napple'],
        },
        questionIds: [
            'q-pmc-linking-001',
        ],
    },
    {
        id: 'pron-elision',
        title: 'Elision',
        track: 'pronunciation',
        level: 'advanced',
        durationMinutes: 15,
        description: 'Dropping sounds in fast speech.',
        content: {
            theory: `next door → nex door. camera → cam-ra.`,
            examples: ['friendship → frienship'],
        },
        questionIds: [
            'q-pmc-elision-001',
        ],
    },
    {
        id: 'pron-assimilation',
        title: 'Assimilation',
        track: 'pronunciation',
        level: 'advanced',
        durationMinutes: 15,
        description: 'Sounds blend into neighbors.',
        content: {
            theory: `ten pounds → tempounds. handbag → hambag.`,
            examples: ['last night → las night'],
        },
        questionIds: [
            'q-pmc-assimilation-001',
        ],
    },
    {
        id: 'pron-intonation',
        title: 'Intonation',
        track: 'pronunciation',
        level: 'advanced',
        durationMinutes: 15,
        description: 'Rising and falling pitch patterns.',
        content: {
            theory: `Falling (↘): statements, WH-questions. Rising (↗): yes/no questions, lists.`,
            examples: ['It\'s a nice day. (↘)', 'Are you ready? (↗)'],
        },
        questionIds: [
            'q-pmc-intonation-001',
            'q-psp-intonation-001',
        ],
    },
    {
        id: 'pron-rhythm',
        title: 'Rhythm & Chunking',
        track: 'pronunciation',
        level: 'advanced',
        durationMinutes: 18,
        description: 'Thought groups and pausing.',
        content: {
            theory: `Divide sentences into meaningful chunks with micro-pauses.`,
            examples: ['If you need help, // let me know.'],
        },
        questionIds: [
            'q-pmc-rhythm-001',
            'q-psp-rhythm-001',
        ],
    },
    {
        id: 'pron-minimal-pairs',
        title: 'Common Minimal Pairs',
        track: 'pronunciation',
        level: 'intermediate',
        durationMinutes: 18,
        description: 'High-frequency contrasts for Vietnamese learners.',
        content: {
            theory: `Final consonant release, /s/ vs /z/, /l/ vs /r/, /θ/ vs /t/.`,
            examples: ['ship /ʃɪp/ vs sheep /ʃiːp/', 'rice /raɪs/ vs rise /raɪz/', 'light /laɪt/ vs right /raɪt/'],
        },
        questionIds: [
            'q-pmc-minimal-pairs-001',
            'q-pfb-minimal-pairs-001',
            'q-pli-minimal-pairs-001',
        ],
    },
];