import type {
    GrammarCheatsheetItem,
    PronunciationCheatsheetItem,
    VocabularyCheatsheetGroup,
} from '../types';

export const GRAMMAR_CHEATSHEET: GrammarCheatsheetItem[] = [
    {
        id: "cs-gram-basic-tenses-01",
        topicId: "topic-basic-tenses",
        title: "Present Simple & Past Simple",
        rule: "Use Present Simple for habits, facts, and routines. Use Past Simple for completed actions at a specific time in the past.",
        structure: "Subject + V1 (s/es) | Subject + V2/ed",
        usage: [
            "Expressing permanent situations and general truths",
            "Describing completed actions with past time markers"
        ],
        signalWords: ["always", "usually", "every day", "yesterday", "last week", "ago"],
        commonMistakes: [
            "Forgetting the -s for third-person singular in present simple (e.g., 'He play tennis')",
            "Using base verb instead of past form in affirmative past sentences (e.g., 'I go yesterday')"
        ],
        examples: [
            "She works as a software developer.",
            "They visited the museum last weekend."
        ]
    },
    {
        id: "cs-gram-perfect-tenses-01",
        topicId: "topic-perfect-tenses",
        title: "Present Perfect Simple",
        rule: "Connects past actions to the present moment, focusing on experience, change, or ongoing results.",
        structure: "Subject + have/has + V3/ed",
        usage: [
            "Describing life experiences without specifying the exact time",
            "Actions starting in the past and continuing up to now"
        ],
        signalWords: ["ever", "never", "already", "yet", "since", "for"],
        commonMistakes: [
            "Using Present Perfect with a specific past time marker like 'yesterday' or 'in 2010'"
        ],
        examples: [
            "I have lived in this city for five years.",
            "Have you ever tried traditional Vietnamese pho?"
        ]
    },
    {
        id: "cs-gram-continuous-tenses-01",
        topicId: "topic-continuous-tenses",
        title: "Present & Past Continuous",
        rule: "Emphasizes actions in progress at a specific moment in time.",
        structure: "Subject + am/is/are/was/were + V-ing",
        usage: [
            "Actions happening right now or around the current period",
            "An interrupted action in the past"
        ],
        signalWords: ["now", "at the moment", "currently", "while", "when"],
        commonMistakes: [
            "Using continuous tenses with stative verbs like 'want', 'know', or 'belong'"
        ],
        examples: [
            "We are learning English grammar rules right now.",
            "She was reading a book when the phone rang."
        ]
    },
    {
        id: "cs-gram-future-forms-01",
        topicId: "topic-future-forms",
        title: "Future Forms (Will, Be Going To, Present Continuous)",
        rule: "Choose future forms based on intention, arrangement, spontaneous decision, or prediction.",
        structure: "will + V1 | am/is/are going to + V1 | Present Continuous",
        usage: [
            "Use 'will' for spontaneous decisions, offers, and predictions",
            "Use 'going to' for prior plans and intentions",
            "Use Present Continuous for fixed personal arrangements"
        ],
        signalWords: ["tomorrow", "next week", "soon", "in the future"],
        commonMistakes: [
            "Using 'will' for pre-planned personal arrangements instead of 'going to' or present continuous"
        ],
        examples: [
            "I will help you with your code debugging.",
            "They are flying to Tokyo next Monday for a conference."
        ]
    },
    {
        id: "cs-gram-modal-verbs-01",
        topicId: "topic-modal-verbs",
        title: "Modal Verbs of Obligation and Ability",
        rule: "Modals express necessity, advice, permission, or ability without changing form for person.",
        structure: "Subject + modal verb (can, must, should, have to) + bare infinitive",
        usage: [
            "Expressing strong obligation (must/have to)",
            "Giving advice or recommendations (should)"
        ],
        signalWords: ["must", "should", "can", "have to"],
        commonMistakes: [
            "Adding an '-s' to modal verbs in the third-person singular (e.g., 'He cans swim')"
        ],
        examples: [
            "You must submit the assignment before midnight.",
            "We should review the documentation carefully."
        ]
    },
    {
        id: "cs-gram-conditionals-01",
        topicId: "topic-conditionals",
        title: "First, Second, and Third Conditionals",
        rule: "Conditionals link a condition (if-clause) with a result (main clause) across real and hypothetical scenarios.",
        structure: "If + present, future | If + past, would + V1 | If + past perfect, would have + V3",
        usage: [
            "First conditional for realistic future possibilities",
            "Second conditional for hypothetical present/future situations",
            "Third conditional for past regrets or counterfactuals"
        ],
        signalWords: ["if", "unless", "provided that"],
        commonMistakes: [
            "Using 'will' directly inside the if-clause (e.g., 'If it will rain' instead of 'If it rains')"
        ],
        examples: [
            "If you study hard, you will pass the exam.",
            "If I had more time, I would build a new mobile app."
        ]
    },
    {
        id: "cs-gram-passive-voice-01",
        topicId: "topic-passive-voice",
        title: "Passive Voice",
        rule: "Focuses attention on the recipient or result of an action rather than the doer.",
        structure: "Subject + be + past participle (V3/ed) + (by agent)",
        usage: [
            "When the agent is unknown, unimportant, or obvious",
            "In formal reports or scientific writing"
        ],
        signalWords: ["by"],
        commonMistakes: [
            "Omitting the auxiliary 'be' verb or using the wrong tense of 'be'"
        ],
        examples: [
            "The web application was deployed on a virtual private server.",
            "New features are released every single month."
        ]
    },
    {
        id: "cs-gram-reported-speech-01",
        topicId: "topic-reported-speech",
        title: "Reported (Indirect) Speech",
        rule: "Conveys what someone else said, typically involving a backshift of verb tenses and pronoun changes.",
        structure: "Reporting verb (said, told) + that + backshifted clause",
        usage: [
            "Summarizing conversations or statements made in the past"
        ],
        signalWords: ["said that", "told me that"],
        commonMistakes: [
            "Failing to shift tenses backward (e.g., present simple to past simple)"
        ],
        examples: [
            "Direct: 'I love coding.' -> Reported: She said that she loved coding.",
            "Direct: 'Where do you live?' -> Reported: He asked me where I lived."
        ]
    },
    {
        id: "cs-gram-articles-01",
        topicId: "topic-articles",
        title: "Articles (A, An, The, Zero Article)",
        rule: "Use indefinite articles for general singular countable nouns, definite article for specific nouns, and zero article for general plurals/uncountables.",
        structure: "a/an + singular countable noun | the + specific noun",
        usage: [
            "Introducing something for the first time with 'a/an'",
            "Referring to something unique or previously mentioned with 'the'"
        ],
        commonMistakes: [
            "Using 'a' with plural or uncountable nouns"
        ],
        examples: [
            "She bought a new laptop yesterday.",
            "The sun rises in the east."
        ]
    },
    {
        id: "cs-gram-relative-clauses-01",
        topicId: "topic-relative-clauses",
        title: "Relative Clauses",
        rule: "Provides extra information about a noun using relative pronouns like who, which, that, whose, and where.",
        structure: "Noun + relative pronoun + clause",
        usage: [
            "Defining or identifying specific people, things, or places",
            "Adding non-essential extra information separated by commas"
        ],
        signalWords: ["who", "which", "that", "where", "whose"],
        commonMistakes: [
            "Using 'what' instead of 'which' or 'that' in relative clauses"
        ],
        examples: [
            "This is the software engineer who mentored me.",
            "I visited the city where I was born."
        ]
    },
    {
        id: "cs-gram-gerunds-infinitives-01",
        topicId: "topic-gerunds-infinitives",
        title: "Gerunds vs. Infinitives",
        rule: "Verbs are followed either by the gerund (-ing) or the infinitive (to + V1) depending on the main verb.",
        structure: "Verb + V-ing | Verb + to + V1",
        usage: [
            "Use gerunds after verbs of enjoyment/preference (enjoy, mind) and prepositions",
            "Use infinitives after verbs of intent or decision (want, decide, hope)"
        ],
        signalWords: ["enjoy doing", "want to do", "stop to do vs. stop doing"],
        commonMistakes: [
            "Using an infinitive directly after a preposition (e.g., 'interested in to learn')"
        ],
        examples: [
            "I enjoy writing clean backend code.",
            "She decided to learn a new programming language."
        ]
    },
    {
        id: "cs-gram-comparatives-01",
        topicId: "topic-comparatives",
        title: "Comparatives and Superlatives",
        rule: "Compares differences between two or more objects, places, or people.",
        structure: "adjective-er + than | the + adjective-est | more/most + adjective",
        usage: [
            "Comparing two items using comparative forms",
            "Highlighting the extreme quality among three or more items using superlatives"
        ],
        signalWords: ["than", "the most", "by far"],
        commonMistakes: [
            "Mixing 'more' with -er endings (e.g., 'more faster' instead of 'faster')"
        ],
        examples: [
            "TypeScript is more structured than JavaScript.",
            "This is the most efficient algorithm in the project."
        ]
    },
    {
        id: "cs-gram-inversion-01",
        topicId: "topic-inversion",
        title: "Advanced Inversion",
        rule: "Inverts the subject and auxiliary verb for emphasis or dramatic effect after negative or restrictive introductory adverbs.",
        structure: "Negative adverb + auxiliary + subject + main verb",
        usage: [
            "Formal writing and speeches starting with words like 'Never', 'Rarely', or 'Hardly'"
        ],
        signalWords: ["Never have I", "Rarely do we", "Hardly had I"],
        commonMistakes: [
            "Failing to invert the subject and auxiliary verb in affirmative sentence structures after the negative word"
        ],
        examples: [
            "Never have I experienced such a complex software bug.",
            "Seldom does the team compromise on code quality."
        ]
    }
];

export const VOCABULARY_CHEATSHEET: VocabularyCheatsheetGroup[] = [
    {
        id: "cs-vocab-family-relationships",
        topicId: "topic-family-relationships",
        category: "Daily Life: Family & Relationships",
        items: [
            {word: "relative", meaning: "họ hàng, người thân", partOfSpeech: "noun", example: "Many of my relatives live in Hanoi.", notes: "Collocation: close relative"},
            {word: "sibling", meaning: "anh chị em ruột", partOfSpeech: "noun", example: "I have two siblings, an older brother and a younger sister."},
            {word: "spouse", meaning: "vợ hoặc chồng", partOfSpeech: "noun", example: "Employees can bring their spouse to the annual gala."},
            {word: "extended family", meaning: "gia đình lớn (gồm cả ông bà, cô chú)", partOfSpeech: "noun phrase", example: "We gathered for a large family reunion."},
            {word: "generation gap", meaning: "khoảng cách thế hệ", partOfSpeech: "noun phrase", example: "Communication helps bridge the generation gap."},
            {word: "upbringing", meaning: "sự giáo dục, nuôi nấng", partOfSpeech: "noun", example: "She had a strict upbringing in the countryside."},
            {word: "foster family", meaning: "gia đình nuôi dưỡng tạm thời", partOfSpeech: "noun phrase"},
            {word: "orphan", meaning: "trẻ mồ côi", partOfSpeech: "noun"},
            {word: "guardian", meaning: "người giám hộ", partOfSpeech: "noun"},
            {word: "descendant", meaning: "con cháu, hậu duệ", partOfSpeech: "noun"},
            {word: "ancestor", meaning: "tổ tiên", partOfSpeech: "noun"},
            {word: "household", meaning: "hộ gia đình", partOfSpeech: "noun"}
        ]
    },
    {
        id: "cs-vocab-travel",
        topicId: "topic-travel",
        category: "Travel: Tourism & Travel",
        items: [
            {word: "itinerary", meaning: "lịch trình chuyến đi", partOfSpeech: "noun", example: "Our travel itinerary includes visits to three historical museums.", notes: "Collocation: detailed itinerary"},
            {word: "destination", meaning: "điểm đến", partOfSpeech: "noun", example: "Da Nang is a popular tourist destination in Vietnam."},
            {word: "accommodation", meaning: "chỗ ở", partOfSpeech: "noun", example: "We booked our accommodation near the city center."},
            {word: "reservation", meaning: "sự đặt chỗ trước", partOfSpeech: "noun", example: "Always confirm your hotel reservation before arriving."},
            {word: "sightseeing", meaning: "sự tham quan ngắm cảnh", partOfSpeech: "noun", example: "We spent the afternoon sightseeing around the old quarter."},
            {word: "backpacking", meaning: "du lịch ba lô bụi", partOfSpeech: "noun"},
            {word: "excursion", meaning: "chuyến tham quan ngắn", partOfSpeech: "noun"},
            {word: "souvenir", meaning: "đồ lưu niệm", partOfSpeech: "noun"},
            {word: "jet lag", meaning: "hiện tượng mệt mỏi do lệch múi giờ", partOfSpeech: "noun"},
            {word: "customs", meaning: "hải quan", partOfSpeech: "noun"},
            {word: "luggage", meaning: "hành lý", partOfSpeech: "noun"},
            {word: "wanderlust", meaning: "niềm đam mê xê dịch", partOfSpeech: "noun"}
        ]
    },
    {
        id: "cs-vocab-school-university",
        topicId: "topic-school-university",
        category: "Education: School & University",
        items: [
            {word: "curriculum", meaning: "chương trình giảng dạy", partOfSpeech: "noun", example: "The university updated its computer science curriculum.", notes: "Collocation: core curriculum"},
            {word: "scholarship", meaning: "học bổng", partOfSpeech: "noun", example: "She earned a full scholarship for her master's degree."},
            {word: "tuition fee", meaning: "học phí", partOfSpeech: "noun", example: "University tuition fees have risen over recent years."},
            {word: "thesis", meaning: "luận văn, luận án", partOfSpeech: "noun", example: "He is currently writing his graduation thesis on cloud architecture."},
            {word: "undergraduate", meaning: "sinh viên chưa tốt nghiệp đại học", partOfSpeech: "noun"},
            {word: "postgraduate", meaning: "học viên sau đại học", partOfSpeech: "noun"},
            {word: "lecture", meaning: "bài giảng", partOfSpeech: "noun"},
            {word: "seminar", meaning: "buổi hội thảo chuyên đề", partOfSpeech: "noun"},
            {word: "academic", meaning: "thuộc học thuật", partOfSpeech: "adjective"},
            {word: "assignment", meaning: "bài tập giao về", partOfSpeech: "noun"},
            {word: "transcript", meaning: "bảng điểm", partOfSpeech: "noun"},
            {word: "faculty", meaning: "khoa (trường ĐH) hoặc giảng viên", partOfSpeech: "noun"}
        ]
    },
    {
        id: "cs-vocab-jobs-careers",
        topicId: "topic-jobs-careers",
        category: "Work & Economy: Jobs & Careers",
        items: [
            {word: "resume", meaning: "sơ yếu lý lịch, CV", partOfSpeech: "noun", example: "Make sure to tailor your resume for every job application.", notes: "American English; CV in British English"},
            {word: "colleague", meaning: "đồng nghiệp", partOfSpeech: "noun", example: "I collaborate closely with my backend colleagues."},
            {word: "remuneration", meaning: "tiền thù lao, đãi ngộ", partOfSpeech: "noun", example: "The position offers competitive remuneration and benefits."},
            {word: "promotion", meaning: "sự thăng tiến", partOfSpeech: "noun", example: "Hard work earned her a promotion to senior engineer."},
            {word: "freelancer", meaning: "người làm việc tự do", partOfSpeech: "noun", example: "He works as a freelance full-stack developer."},
            {word: "resignation", meaning: "đơn xin thôi việc", partOfSpeech: "noun"},
            {word: "probation", meaning: "thời gian thử việc", partOfSpeech: "noun"},
            {word: "workplace", meaning: "nơi làm việc", partOfSpeech: "noun"},
            {word: "entrepreneur", meaning: "doanh nhân khởi nghiệp", partOfSpeech: "noun"},
            {word: "workaholism", meaning: "tình trạng nghiện làm việc", partOfSpeech: "noun"},
            {word: "outsource", meaning: "thuê ngoài dịch vụ", partOfSpeech: "verb"},
            {word: "vacancy", meaning: "chỗ trống việc làm", partOfSpeech: "noun"}
        ]
    },
    {
        id: "cs-vocab-health-fitness",
        topicId: "topic-health-fitness",
        category: "Health: Health & Fitness",
        items: [
            {word: "wellbeing", meaning: "sự khỏe mạnh hạnh phúc chung", partOfSpeech: "noun", example: "Mental wellbeing is just as important as physical fitness.", notes: "Collocation: overall wellbeing"},
            {word: "nutrition", meaning: "dinh dưỡng", partOfSpeech: "noun", example: "Proper nutrition supports a strong immune system."},
            {word: "sedentary", meaning: "ít vận động, ngồi nhiều", partOfSpeech: "adjective", example: "Office workers often lead a sedentary lifestyle."},
            {word: "immunity", meaning: "khả năng miễn dịch", partOfSpeech: "noun", example: "Eating citrus fruits helps boost your immunity."},
            {word: "metabolism", meaning: "quá trình trao đổi chất", partOfSpeech: "noun"},
            {word: "cardiovascular", meaning: "thuộc tim mạch", partOfSpeech: "adjective"},
            {word: "therapy", meaning: "phương pháp trị liệu", partOfSpeech: "noun"},
            {word: "epidemic", meaning: "dịch bệnh", partOfSpeech: "noun"},
            {word: "diagnosis", meaning: "sự chẩn đoán bệnh", partOfSpeech: "noun"},
            {word: "prescription", meaning: "đơn thuốc", partOfSpeech: "noun"},
            {word: "rehabilitation", meaning: "sự phục hồi chức năng", partOfSpeech: "noun"},
            {word: "vitality", meaning: "sức sống, sinh lực", partOfSpeech: "noun"}
        ]
    },
    {
        id: "cs-vocab-environment",
        topicId: "topic-environment",
        category: "Environment: Environment & Sustainability",
        items: [
            {word: "sustainability", meaning: "sự phát triển bền vững", partOfSpeech: "noun", example: "Companies focus on environmental sustainability.", notes: "Collocation: long-term sustainability"},
            {word: "biodiversity", meaning: "đa dạng sinh học", partOfSpeech: "noun", example: "Deforestation threatens tropical rainforest biodiversity."},
            {word: "emission", meaning: "khí thải phát ra", partOfSpeech: "noun", example: "Governments aim to reduce carbon emissions."},
            {word: "renewable", meaning: "có thể tái tạo", partOfSpeech: "adjective", example: "Solar and wind power are renewable energy sources."},
            {word: "conservation", meaning: "sự bảo tồn thiên nhiên", partOfSpeech: "noun", example: "Wildlife conservation protects endangered species."},
            {word: "deforestation", meaning: "nạn phá rừng", partOfSpeech: "noun"},
            {word: "pollutant", meaning: "chất gây ô nhiễm", partOfSpeech: "noun"},
            {word: "ecosystem", meaning: "hệ sinh thái", partOfSpeech: "noun"},
            {word: "recycling", meaning: "sự tái chế rác", partOfSpeech: "noun"},
            {word: "habitat", meaning: "môi trường sống tự nhiên", partOfSpeech: "noun"},
            {word: "global warming", meaning: "hiện tượng nóng lên toàn cầu", partOfSpeech: "noun phrase"},
            {word: "compost", meaning: "phân hữu cơ từ rác mục", partOfSpeech: "noun"}
        ]
    },
    {
        id: "cs-vocab-computers-internet",
        topicId: "topic-computers-internet",
        category: "Technology: Computers & Internet",
        items: [
            {word: "algorithm", meaning: "thuật toán", partOfSpeech: "noun", example: "Search engines use complex ranking algorithms.", notes: "Collocation: search algorithm"},
            {word: "database", meaning: "cơ sở dữ liệu", partOfSpeech: "noun", example: "We store user metadata in a PostgreSQL database."},
            {word: "encryption", meaning: "sự mã hóa dữ liệu", partOfSpeech: "noun", example: "End-to-end encryption secures private messages."},
            {word: "infrastructure", meaning: "hạ tầng công nghệ", partOfSpeech: "noun", example: "Docker containers simplify our server infrastructure deployment."},
            {word: "bandwidth", meaning: "băng thông mạng", partOfSpeech: "noun"},
            {word: "firewall", meaning: "tường lửa bảo mật", partOfSpeech: "noun"},
            {word: "debugging", meaning: "gỡ lỗi chương trình", partOfSpeech: "noun"},
            {word: "repository", meaning: "kho chứa mã nguồn code", partOfSpeech: "noun"},
            {word: "automation", meaning: "sự tự động hóa", partOfSpeech: "noun"},
            {word: "interface", meaning: "giao diện người dùng", partOfSpeech: "noun"},
            {word: "malware", meaning: "phần mềm độc hại", partOfSpeech: "noun"},
            {word: "scalability", meaning: "khả năng mở rộng hệ thống", partOfSpeech: "noun"}
        ]
    }
];

export const PRONUNCIATION_CHEATSHEET: PronunciationCheatsheetItem[] = [
    {
        id: "cs-pron-ipa-phonetics",
        topicId: "topic-ipa-phonetics",
        soundOrTopic: "International Phonetic Alphabet (IPA)",
        description: "The IPA is a standardized system of phonetic notation using unique symbols to represent every distinct speech sound in English.",
        mouthPosition: "Refers to individual articulators (tongue, lips, teeth, alveolar ridge, and soft palate) for precise sound production.",
        examples: ["/p/ as in pen", "/b/ as in bat", "/ʃ/ as in shoe"],
        commonMistakes: [
            "Pronouncing English words strictly based on their spelling rather than their IPA transcription."
        ]
    },
    {
        id: "cs-pron-schwa",
        topicId: "topic-schwa",
        soundOrTopic: "The Schwa Sound (/ə/)",
        description: "The most common vowel sound in English, occurring exclusively in unstressed syllables with a relaxed mouth posture.",
        mouthPosition: "Jaw and lips are completely relaxed, tongue rests neutral in the center of the mouth.",
        minimalPairs: [
            ["photograph", "photographer (/fəˈtɒɡrəfər/)"]
        ],
        examples: ["about (/əˈbaʊt/)", "banana (/bəˈnænə/)", "computer (/kəmˈpjuːtər/)"],
        commonMistakes: [
            "Pronouncing unstressed vowels with full, clear sounds instead of reducing them to the schwa."
        ]
    },
    {
        id: "cs-pron-th-voiced-unvoiced",
        topicId: "topic-th-voiced-unvoiced",
        soundOrTopic: "TH Sounds (/θ/ and /ð/)",
        description: "Fricative sounds produced by placing the tip of the tongue gently between the upper and lower front teeth.",
        mouthPosition: "Tongue tip lightly touches or protrudes slightly past the teeth; air blows through the gap.",
        minimalPairs: [
            ["think (/θɪŋk/)", "sink (/sɪŋk/)"],
            ["then (/ðen/)", "den (/den/)"]
        ],
        examples: ["thought", "weather", "healthy", "smooth"],
        commonMistakes: [
            "Substituting /θ/ with /s/ or /t/, and /ð/ with /d/ or /z/ (common in Vietnamese learners)."
        ]
    },
    {
        id: "cs-pron-ed-endings",
        topicId: "topic-ed-endings",
        soundOrTopic: "-ed Past Tense Endings",
        description: "Regular past tense verb endings are pronounced in three distinct ways depending on the final consonant sound of the base verb: /t/ after voiceless consonants, /d/ after voiced consonants/vowels, and /ɪd/ after /t/ and /d/.",
        examples: ["worked (/wɜːkt/)", "loved (/lʌvd/)", "decided (/dɪˈsaɪdɪd/)"],
        commonMistakes: [
            "Always pronouncing '-ed' as a separate syllable /ɪd/ for every regular past verb."
        ]
    },
    {
        id: "cs-pron-linking",
        topicId: "topic-linking",
        soundOrTopic: "Connected Speech: Consonants to Vowels Linking",
        description: "In natural fluent English, the final consonant sound of a word links directly into the initial vowel sound of the following word.",
        examples: ["'turn off' sounds like 'tur-noff'", "'check it out' sounds like 'che-ki-tout'"],
        commonMistakes: [
            "Speaking with robotic, isolated word pauses instead of blending sounds smoothly across word boundaries."
        ]
    },
    {
        id: "cs-pron-word-stress",
        topicId: "topic-word-stress",
        soundOrTopic: "Word Stress and Syllables",
        description: "Multisyllabic words in English have one prominent syllable pronounced louder, longer, and with higher pitch than the others.",
        examples: ["DEVELOPMENT (/dɪˈveləpmənt/)", "COMPUTER (/kəmˈpjuːtər/)"],
        commonMistakes: [
            "Placing equal emphasis on every single syllable in a long English word."
        ]
    },
    {
        id: "cs-pron-ielts-speaking-pronunciation",
        topicId: "topic-ielts-speaking-pronunciation",
        soundOrTopic: "IELTS Speaking Intelligibility and Rhythm",
        description: "Focuses on clear articulation, natural sentence stress, chunking ideas into thought groups, and maintaining a steady conversational rhythm.",
        examples: ["Emphasizing content words (nouns, verbs, adjectives) while reducing function words (prepositions, pronouns)."],
        commonMistakes: [
            "Over-focusing on isolated individual phonemes while ignoring overall speech rhythm, intonation, and linking."
        ]
    }
];