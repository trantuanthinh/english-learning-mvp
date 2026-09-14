import type {Lesson} from "../types";

export const GRAMMAR_DATA: Lesson[] = [
    // 1. ENGLISH TENSES
    {
        id: 'grammar-1',
        title: 'Present Simple (Hiện tại đơn)',
        track: 'grammar',
        level: 'Beginner',
        durationMinutes: 5,
        description: 'Diễn tả thói quen, sự thật hiển nhiên hoặc chân lý.',
        content: {
            theory: 'Thì hiện tại đơn dùng để nói về hành động lặp đi lặp lại, sở thích, hoặc sự thật chân lý.',
            grammarRule: {
                rule: 'Present Simple Tense',
                explanation: 'Động từ thêm s/es với ngôi thứ 3 số ít (he, she, it).',
                structure: '(+) S + V(s/es) | (-) S + do/does + not + V | (?) Do/Does + S + V?',
                examples: ['She works in a bank.', 'The sun rises in the east.', 'Do you speak English?']
            },
            examples: ['I live in Hanoi.', 'He plays football every Sunday.'],
            tips: ['Nhận biết qua các trạng từ: always, usually, often, sometimes, never, every day.']
        },
        quiz: [
            {
                id: 'q-gram-1-1',
                question: 'Chọn dạng đúng của động từ: She usually _____ to work by bus.',
                options: ['go', 'goes', 'going', 'gone'],
                correctIndex: 1,
                explanation: 'Chủ ngữ "She" số ít ở thì hiện tại đơn nên động từ phải thêm "es" -> goes.'
            }
        ]
    },
    {
        id: 'grammar-2',
        title: 'Present Continuous (Hiện tại tiếp diễn)',
        track: 'grammar',
        level: 'Beginner',
        durationMinutes: 5,
        description: 'Diễn tả hành động đang xảy ra tại thời điểm nói hoặc xung quanh thời điểm nói.',
        content: {
            theory: 'Dùng cấu trúc to be + V-ing để diễn tả sự việc đang diễn ra ngay lúc nói.',
            grammarRule: {
                rule: 'Present Continuous Tense',
                explanation: 'Sử dụng trợ động từ am/is/are đi kèm với động từ thêm đuôi -ing.',
                structure: '(+) S + am/is/are + V-ing | (-) S + am/is/are + not + V-ing | (?) Am/Is/Are + S + V-ing?',
                examples: ['Look! The baby is crying.', 'We are learning English now.']
            },
            examples: ['I am reading a book at the moment.', 'They are playing tennis.'],
            tips: ['Dấu hiệu: now, at the moment, right now, Look!, Listen!']
        },
        quiz: [
            {
                id: 'q-gram-2-1',
                question: 'What _____ you _____ right now?',
                options: ['do / do', 'are / doing', 'did / do', 'will / do'],
                correctIndex: 1,
                explanation: 'Từ khóa "right now" chỉ thì hiện tại tiếp diễn -> are doing.'
            }
        ]
    },
    {
        id: 'grammar-3',
        title: 'Present Perfect (Hiện tại hoàn thành)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 6,
        description: 'Diễn tả hành động xảy ra trong quá khứ nhưng kéo dài tới hiện tại hoặc có kết quả ảnh hưởng tới hiện tại.',
        content: {
            theory: 'Nhấn mạnh kết quả của hành động tính đến thời điểm hiện tại.',
            grammarRule: {
                rule: 'Present Perfect Tense',
                explanation: 'Dùng have/has cộng với quá khứ phân từ (V3/ed).',
                structure: '(+) S + have/has + V3/ed | (-) S + have/has + not + V3/ed | (?) Have/Has + S + V3/ed?',
                examples: ['I have visited Paris twice.', 'She has already finished her homework.']
            },
            examples: ['I have lived here for 5 years.', 'Have you ever eaten sushi?'],
            tips: ['Thường dùng với: already, yet, just, ever, never, since, for, so far.']
        },
        quiz: [
            {
                id: 'q-gram-3-1',
                question: 'She _____ never _____ to Japan before.',
                options: ['has / been', 'have / been', 'is / being', 'did / go'],
                correctIndex: 0,
                explanation: 'Chủ ngữ "She" đi với "has" và phân từ "been".'
            }
        ]
    },
    {
        id: 'grammar-4',
        title: 'Present Perfect Continuous (Hiện tại hoàn thành tiếp diễn)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 6,
        description: 'Nhấn mạnh tính liên tục của một hành động bắt đầu trong quá khứ và vẫn đang tiếp diễn ở hiện tại.',
        content: {
            theory: 'Nhấn mạnh khoảng thời gian diễn ra hành động.',
            grammarRule: {
                rule: 'Present Perfect Continuous Tense',
                explanation: 'Kết hợp giữa thì hiện tại hoàn thành và tiếp diễn.',
                structure: '(+) S + have/has + been + V-ing | (-) S + haven\'t/hasn\'t + been + V-ing | (?) Have/Has + S + been + V-ing?',
                examples: ['I have been waiting for you for two hours.', 'It has been raining all morning.']
            },
            examples: ['They have been studying English since 2020.'],
            tips: ['Không dùng thì này với các động từ chỉ trạng thái (statue verbs) như know, like, want.']
        },
        quiz: [
            {
                id: 'q-gram-4-1',
                question: 'He _____ computer games for 3 hours straight.',
                options: ['plays', 'is playing', 'has been playing', 'played'],
                correctIndex: 2,
                explanation: 'Nhấn mạnh hành động kéo dài liên tục trong khoảng thời gian -> Present Perfect Continuous.'
            }
        ]
    },
    {
        id: 'grammar-5',
        title: 'Past Simple (Quá khứ đơn)',
        track: 'grammar',
        level: 'Beginner',
        durationMinutes: 5,
        description: 'Diễn tả hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.',
        content: {
            theory: 'Dùng cho các sự kiện có thời gian xác định trong quá khứ.',
            grammarRule: {
                rule: 'Past Simple Tense',
                explanation: 'Dùng động từ thêm -ed với động từ có quy tắc hoặc cột 2 với bất quy tắc.',
                structure: '(+) S + V2/ed | (-) S + did not (didn\'t) + V_bare | (?) Did + S + V_bare?',
                examples: ['I visited my grandparents yesterday.', 'She went to school by bus last week.']
            },
            examples: ['They bought a new car last month.'],
            tips: ['Dấu hiệu: yesterday, last night/week, in 2010, ago.']
        },
        quiz: [
            {
                id: 'q-gram-5-1',
                question: 'We _____ a great movie last night.',
                options: ['see', 'saw', 'seen', 'seeing'],
                correctIndex: 1,
                explanation: '"last night" chỉ quá khứ đơn, động từ "see" dạng bất quy tắc là "saw".'
            }
        ]
    },
    {
        id: 'grammar-6',
        title: 'Past Continuous (Quá khứ tiếp diễn)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 6,
        description: 'Diễn tả hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ.',
        content: {
            theory: 'Thường dùng kết hợp với quá khứ đơn (hành động đang xảy ra thì hành động khác cắt ngang).',
            grammarRule: {
                rule: 'Past Continuous Tense',
                explanation: 'Sử dụng was/were cộng với V-ing.',
                structure: '(+) S + was/were + V-ing | (-) S + wasn\'t/weren\'t + V-ing | (?) Was/Were + S + V-ing?',
                examples: ['I was sleeping when you called me.', 'They were playing football at 4 PM yesterday.']
            },
            examples: ['She was cooking dinner while he was cleaning the house.'],
            tips: ['Dùng "when" trước quá khứ đơn và "while" trước quá khứ tiếp diễn.']
        },
        quiz: [
            {
                id: 'q-gram-6-1',
                question: 'While I _____ TV, the phone rang.',
                options: ['watch', 'watched', 'was watching', 'am watching'],
                correctIndex: 2,
                explanation: 'Hành động đang xảy ra dùng quá khứ tiếp diễn -> was watching.'
            }
        ]
    },
    {
        id: 'grammar-7',
        title: 'Past Perfect (Quá khứ hoàn thành)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 6,
        description: 'Diễn tả hành động xảy ra và hoàn thành trước một hành động khác trong quá khứ.',
        content: {
            theory: 'Nhấn mạnh hành động xảy ra trước trong quá khứ.',
            grammarRule: {
                rule: 'Past Perfect Tense',
                explanation: 'Dùng had cộng với phân từ hoàn thành (V3/ed).',
                structure: '(+) S + had + V3/ed | (-) S + hadn\'t + V3/ed | (?) Had + S + V3/ed?',
                examples: ['By the time she arrived, the train had left.', 'He had done his homework before he went out.']
            },
            examples: ['She had lived in London before she moved to Paris.'],
            tips: ['Thường đi kèm với các từ nối: by the time, before, after, already, just.']
        },
        quiz: [
            {
                id: 'q-gram-7-1',
                question: 'When I got to the station, the train _____ already _____ .',
                options: ['has / left', 'had / left', 'did / leave', 'was / leaving'],
                correctIndex: 1,
                explanation: 'Hành động tàu rời đi xảy ra trước hành động tôi đến ga -> Quá khứ hoàn thành (had left).'
            }
        ]
    },
    {
        id: 'grammar-8',
        title: 'Past Perfect Continuous (Quá khứ hoàn thành tiếp diễn)',
        track: 'grammar',
        level: 'Advanced',
        durationMinutes: 7,
        description: 'Nhấn mạnh tính liên tục của một hành động đã diễn ra trước một mốc thời gian hoặc hành động khác trong quá khứ.',
        content: {
            theory: 'Diễn tả quá trình diễn ra liên tục trước một thời điểm quá khứ.',
            grammarRule: {
                rule: 'Past Perfect Continuous Tense',
                explanation: 'Sử dụng had been cộng với V-ing.',
                structure: '(+) S + had been + V-ing | (-) S + hadn\'t been + V-ing | (?) Had + S + been + V-ing?',
                examples: ['They had been playing football for two hours before it started to rain.']
            },
            examples: ['She had been working there for 5 years when the company closed.'],
            tips: ['Nhấn mạnh khoảng thời gian kéo dài trước quá khứ.']
        },
        quiz: [
            {
                id: 'q-gram-8-1',
                question: 'He was tired because he _____ all day.',
                options: ['worked', 'was working', 'had been working', 'has worked'],
                correctIndex: 2,
                explanation: 'Hành động làm việc kéo dài liên tục trước thời điểm anh ấy mệt trong quá khứ.'
            }
        ]
    },
    {
        id: 'grammar-9',
        title: 'Future Simple (Tương lai đơn)',
        track: 'grammar',
        level: 'Beginner',
        durationMinutes: 5,
        description: 'Diễn tả quyết định tức thời tại thời điểm nói hoặc dự đoán không có căn cứ.',
        content: {
            theory: 'Dùng will để diễn tả ý định bộc phát, lời hứa, hoặc dự đoán tương lai.',
            grammarRule: {
                rule: 'Future Simple Tense',
                explanation: 'Sử dụng will đi với động từ nguyên mẫu không "to".',
                structure: '(+) S + will + V_bare | (-) S + will not (won\'t) + V_bare | (?) Will + S + V_bare?',
                examples: ['I will help you with your bag.', 'It will rain tomorrow.']
            },
            examples: ['I think he will win the match.'],
            tips: ['Thường đi với: I think, I hope, perhaps, tomorrow, next week.']
        },
        quiz: [
            {
                id: 'q-gram-9-1',
                question: 'Hold on! I _____ open the door for you.',
                options: ['am', 'will', 'going to', 'shall be'],
                correctIndex: 1,
                explanation: 'Quyết định tức thời khi có người gọi cửa -> dùng "will".'
            }
        ]
    },
    {
        id: 'grammar-10',
        title: 'Future Continuous (Tương lai tiếp diễn)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 6,
        description: 'Diễn tả hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai.',
        content: {
            theory: 'Nhấn mạnh sự việc đang diễn ra ở tương lai.',
            grammarRule: {
                rule: 'Future Continuous Tense',
                explanation: 'Sử dụng will be cộng với V-ing.',
                structure: '(+) S + will be + V-ing | (-) S + won\'t be + V-ing | (?) Will + S + be + V-ing?',
                examples: ['At this time tomorrow, I will be flying to Tokyo.', 'Don\'t call me at 8 PM; I will be studying.']
            },
            examples: ['We will be having a meeting at 10 AM tomorrow.'],
            tips: ['Dấu hiệu: At this time/moment tomorrow...']
        },
        quiz: [
            {
                id: 'q-gram-10-1',
                question: 'This time next week, we _____ on the beach.',
                options: ['will relax', 'will be relaxing', 'relaxed', 'are relaxing'],
                correctIndex: 1,
                explanation: 'Thời điểm cụ thể trong tương lai (This time next week) dùng future continuous.'
            }
        ]
    },
    {
        id: 'grammar-11',
        title: 'Future Perfect (Tương lai hoàn thành)',
        track: 'grammar',
        level: 'Advanced',
        durationMinutes: 7,
        description: 'Diễn tả hành động sẽ hoàn thành trước một thời điểm hoặc hành động khác trong tương lai.',
        content: {
            theory: 'Nhấn mạnh kết quả hoàn thành tính đến mốc tương lai.',
            grammarRule: {
                rule: 'Future Perfect Tense',
                explanation: 'Sử dụng will have cộng với phân từ hoàn thành (V3/ed).',
                structure: '(+) S + will have + V3/ed | (-) S + won\'t have + V3/ed | (?) Will + S + have + V3/ed?',
                examples: ['By next month, I will have finished this project.', 'She will have graduated by 2027.']
            },
            examples: ['They will have built the bridge by the end of this year.'],
            tips: ['Thường đi với cụm "by + mốc thời gian tương lai".']
        },
        quiz: [
            {
                id: 'q-gram-11-1',
                question: 'By the time you arrive, I _____ cooking dinner.',
                options: ['will finish', 'will have finished', 'finished', 'have finished'],
                correctIndex: 1,
                explanation: 'Hành động hoàn thành trước một mốc trong tương lai -> Future Perfect.'
            }
        ]
    },
    {
        id: 'grammar-12',
        title: 'Future Perfect Continuous (Tương lai hoàn thành tiếp diễn)',
        track: 'grammar',
        level: 'Advanced',
        durationMinutes: 7,
        description: 'Nhấn mạnh tính liên tục của hành động kéo dài đến một mốc thời gian trong tương lai.',
        content: {
            theory: 'Kết hợp tương lai hoàn thành và tiếp diễn.',
            grammarRule: {
                rule: 'Future Perfect Continuous Tense',
                explanation: 'Sử dụng will have been cộng với V-ing.',
                structure: '(+) S + will have been + V-ing | (-) S + won\'t have been + V-ing | (?) Will + S + have been + V-ing?',
                examples: ['By next year, I will have been living here for 10 years.']
            },
            examples: ['She will have been teaching for 20 years by next June.'],
            tips: ['Ít phổ biến nhưng hay xuất hiện trong văn cảnh học thuật nâng cao.']
        },
        quiz: [
            {
                id: 'q-gram-12-1',
                question: 'By December, they _____ in this house for 5 years.',
                options: ['will live', 'will have lived', 'will have been living', 'live'],
                correctIndex: 2,
                explanation: 'Nhấn mạnh thời gian kéo dài liên tục đến tương lai.'
            }
        ]
    },
    {
        id: 'grammar-13',
        title: 'Near Future (Tương lai gần - Be going to)',
        track: 'grammar',
        level: 'Beginner',
        durationMinutes: 5,
        description: 'Diễn tả kế hoạch đã định sẵn hoặc dự đoán có căn cứ rõ ràng ở hiện tại.',
        content: {
            theory: 'Dùng "be going to" khi có ý định từ trước hoặc dấu hiệu rõ ràng trước mắt.',
            grammarRule: {
                rule: 'Near Future Tense',
                explanation: 'Sử dụng am/is/are going to cộng với động từ nguyên mẫu.',
                structure: '(+) S + am/is/are + going to + V_bare | (-) S + am/is/are + not + going to + V_bare | (?) Am/Is/Are + S + going to + V_bare?',
                examples: ['Look at those dark clouds! It is going to rain.', 'I am going to visit my grandparents this weekend.']
            },
            examples: ['We are going to buy a new house.'],
            tips: ['Khác với "will" (quyết định ngay lúc nói), "be going to" đã có sự chuẩn bị từ trước.']
        },
        quiz: [
            {
                id: 'q-gram-13-1',
                question: 'Look at the sky! It _____ going to rain.',
                options: ['is', 'will', 'is being', 'has been'],
                correctIndex: 0,
                explanation: 'Dự đoán có căn cứ hiện tại (mây đen) dùng "is going to".'
            }
        ]
    },

    // 2. PARTS OF SPEECH
    {
        id: 'grammar-14',
        title: 'Nouns (Danh từ)',
        track: 'grammar',
        level: 'Beginner',
        durationMinutes: 6,
        description: 'Phân loại danh từ: Đếm được, không đếm được, số ít và số nhiều.',
        content: {
            theory: 'Danh từ dùng để chỉ người, vật, địa điểm hoặc ý niệm.',
            grammarRule: {
                rule: 'Nouns Categories',
                explanation: 'Danh từ đếm được (countable) có dạng số ít/số nhiều; danh từ không đếm được (uncountable) không có số nhiều.',
                structure: 'Countable: car/cars | Uncountable: water, information, money',
                examples: ['She bought two books and some milk.']
            },
            examples: ['apple - apples', 'child - children', 'advice, luggage (uncountable)'],
            tips: ['Danh từ không đếm được không bao giờ dùng với mạo từ "a/an" hoặc số đếm trực tiếp.']
        },
        quiz: [
            {
                id: 'q-gram-14-1',
                question: 'Từ nào sau đây là danh từ KHÔNG đếm được?',
                options: ['Book', 'Information', 'Chair', 'Student'],
                correctIndex: 1,
                explanation: '"Information" là danh từ không đếm được trong tiếng Anh.'
            }
        ]
    },
    {
        id: 'grammar-15',
        title: 'Pronouns (Đại từ)',
        track: 'grammar',
        level: 'Beginner',
        durationMinutes: 6,
        description: 'Các loại đại từ: Nhân xưng, sở hữu, phản thân, chỉ định và bất định.',
        content: {
            theory: 'Đại từ dùng để thay thế cho danh từ nhằm tránh lặp từ.',
            grammarRule: {
                rule: 'Pronoun Types',
                explanation: 'Personal (I, me), Possessive (mine, yours), Reflexive (myself, himself), Demonstrative (this, that), Indefinite (someone, anything).',
                structure: 'She cut herself while cooking. (Reflexive)',
                examples: ['This is my pen, yours is on the desk.']
            },
            examples: ['Everybody loves music.', 'He gave me the book.'],
            tips: ['Chú ý đại từ phản thân khi chủ ngữ và tân ngữ là cùng một người.']
        },
        quiz: [
            {
                id: 'q-gram-15-1',
                question: 'He built this house by _____ .',
                options: ['him', 'himself', 'his', 'he'],
                correctIndex: 1,
                explanation: 'Cấu trúc "by + reflexive pronoun" -> by himself.'
            }
        ]
    },
    {
        id: 'grammar-16',
        title: 'Verbs (Động từ)',
        track: 'grammar',
        level: 'Beginner',
        durationMinutes: 6,
        description: 'Phân loại động từ: Hành động, trạng thái và trợ động từ.',
        content: {
            theory: 'Động từ diễn tả hành động, trạng thái hoặc quá trình.',
            grammarRule: {
                rule: 'Verb Types',
                explanation: 'Action verbs (run, eat), Stative verbs (want, know, love), Auxiliary verbs (do, have, be).',
                structure: 'S + Verb + Object/Complement',
                examples: ['I know the answer. (Stative)', 'She is running. (Action)']
            },
            examples: ['They play football.', 'Do you like coffee?'],
            tips: ['Stative verbs không được chia ở các thì tiếp diễn.']
        },
        quiz: [
            {
                id: 'q-gram-16-1',
                question: 'Động từ nào là "stative verb" (động từ trạng thái)?',
                options: ['Run', 'Eat', 'Understand', 'Write'],
                correctIndex: 2,
                explanation: '"Understand" chỉ trạng thái nhận thức, không phải hành động thể chất.'
            }
        ]
    },
    {
        id: 'grammar-17',
        title: 'Adjectives (Tính từ & OSASCOMP)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 7,
        description: 'Vị trí tính từ và trật tự sắp xếp nhiều tính từ theo chuẩn OSASCOMP.',
        content: {
            theory: 'Tính từ bổ nghĩa cho danh từ. Khi có nhiều tính từ, ta sắp xếp theo quy tắc OSASCOMP.',
            grammarRule: {
                rule: 'Adjective Order (OSASCOMP)',
                explanation: 'Opinion - Size - Age - Shape - Color - Origin - Material - Purpose',
                structure: 'Opinion > Size > Age > Shape > Color > Origin > Material > Purpose > Noun',
                examples: ['a beautiful old wooden table', 'a big red Italian car']
            },
            examples: ['She is wearing a lovely long pink dress.'],
            tips: ['Nhớ công cụ nhớ nhanh: Ông Sáu Ăn Súp Cua Ơi Miệt Phườn (OSASCOMP).']
        },
        quiz: [
            {
                id: 'q-gram-17-1',
                question: 'Chọn trật tự tính từ đúng:',
                options: [
                    'a blue small car',
                    'a small blue car',
                    'a car small blue',
                    'blue a small car'
                ],
                correctIndex: 1,
                explanation: 'Size (small) đứng trước Color (blue) -> a small blue car.'
            }
        ]
    },
    {
        id: 'grammar-18',
        title: 'Adverbs (Trạng từ)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 6,
        description: 'Các loại trạng từ: Cách thức, nơi chốn, thời gian, tần suất và mức độ.',
        content: {
            theory: 'Trạng từ bổ nghĩa cho động từ, tính từ hoặc trạng từ khác.',
            grammarRule: {
                rule: 'Adverb Categories',
                explanation: 'Manner (slowly), Place (here), Time (yesterday), Frequency (often), Degree (very).',
                structure: 'S + Verb + Adverb of manner (He runs quickly)',
                examples: ['She speaks English fluently.']
            },
            examples: ['They often play tennis.', 'The weather is extremely hot.'],
            tips: ['Phần lớn trạng từ cách thức được thành lập bằng cách thêm "-ly" vào sau tính từ (quick -> quickly).']
        },
        quiz: [
            {
                id: 'q-gram-18-1',
                question: 'He sings very _____ .',
                options: ['good', 'well', 'bad', 'badly'],
                correctIndex: 1,
                explanation: 'Bổ nghĩa cho động từ "sings" phải dùng trạng từ "well" (dạng bất quy tắc của good).'
            }
        ]
    },
    {
        id: 'grammar-19',
        title: 'Prepositions (Giới từ)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 6,
        description: 'Giới từ chỉ thời gian, vị trí và phương hướng (in, on, at, by, to...).',
        content: {
            theory: 'Giới từ biểu thị mối quan hệ không gian, thời gian giữa các từ trong câu.',
            grammarRule: {
                rule: 'Prepositions of Time and Place',
                explanation: 'At (giờ, địa điểm cụ thể), On (ngày, thứ, bề mặt), In (tháng, năm, không gian lớn).',
                structure: 'in 2026, on Monday, at 5 PM',
                examples: ['I live in Hanoi.', 'The meeting is on Friday.']
            },
            examples: ['The cat is under the table.', 'She arrived at the airport.'],
            tips: ['Học thuộc các cặp giới từ đi liền với động từ/tính từ (depend on, interested in).']
        },
        quiz: [
            {
                id: 'q-gram-19-1',
                question: 'My birthday is _____ October.',
                options: ['at', 'on', 'in', 'by'],
                correctIndex: 2,
                explanation: 'Đi với tháng dùng giới từ "in".'
            }
        ]
    },
    {
        id: 'grammar-20',
        title: 'Conjunctions (Liên từ)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 6,
        description: 'Liên từ kết hợp FANBOYS, liên từ phụ thuộc và liên từ tương hợp.',
        content: {
            theory: 'Liên từ dùng để nối các từ, cụm từ hoặc mệnh đề với nhau.',
            grammarRule: {
                rule: 'Conjunction Types',
                explanation: 'Coordinating (FANBOYS: For, And, Nor, But, Or, Yet, So), Subordinating (because, although, if).',
                structure: 'Clause 1 + [FANBOYS] + Clause 2',
                examples: ['I was tired, so I went to bed early.', 'Although it rained, we went out.']
            },
            examples: ['She likes both coffee and tea.'],
            tips: ['Nhớ quy tắc FANBOYS cho liên từ kết hợp ngang hàng.']
        },
        quiz: [
            {
                id: 'q-gram-20-1',
                question: 'She was tired, _____ she kept working.',
                options: ['so', 'but', 'because', 'or'],
                correctIndex: 1,
                explanation: 'Ý nghĩa đối lập giữa mệt nhưng vẫn tiếp tục -> dùng "but".'
            }
        ]
    },
    {
        id: 'grammar-21',
        title: 'Interjections (Thán từ)',
        track: 'grammar',
        level: 'Beginner',
        durationMinutes: 4,
        description: 'Các từ biểu lộ cảm xúc bất chợt (Wow, Ouch, Oh, Hurrah...).',
        content: {
            theory: 'Thán từ là từ bộc lộ cảm xúc mạnh mẽ, đứng độc lập trong câu.',
            grammarRule: {
                rule: 'Interjections Usage',
                explanation: 'Thường đi kèm với dấu chấm than (!) để thể hiện ngạc nhiên, đau đớn, vui sướng.',
                structure: 'Interjection + !, Clause',
                examples: ['Ouch! That hurts!', 'Wow, what a nice car!']
            },
            examples: ['Oh, I didn\'t see you there!'],
            tips: ['Ít khi dùng trong văn viết trang trọng, chủ yếu dùng trong văn nói.']
        },
        quiz: [
            {
                id: 'q-gram-21-1',
                question: 'Từ nào là thán từ thể hiện sự đau đớn?',
                options: ['Wow', 'Ouch', 'Hello', 'Please'],
                correctIndex: 1,
                explanation: '"Ouch!" dùng khi bị đau.'
            }
        ]
    },
    {
        id: 'grammar-22',
        title: 'Articles (Mạo từ)',
        track: 'grammar',
        level: 'Beginner',
        durationMinutes: 5,
        description: 'Cách sử dụng mạo từ xác định (The), bất định (A/An) và mạo từ rỗng (Zero article).',
        content: {
            theory: 'Mạo từ đứng trước danh từ để chỉ định tính xác định của danh từ đó.',
            grammarRule: {
                rule: 'Articles (A, An, The, Ø)',
                explanation: 'A/An cho danh từ đếm được số ít chưa xác định; The cho danh từ đã xác định/độc nhất; Zero article cho danh từ số nhiều/không đếm được chung chung.',
                structure: 'a cat, an apple, the sun, Ø water',
                examples: ['I saw a dog. The dog was barking.']
            },
            examples: ['She plays the piano.', 'He goes to school by bus.'],
            tips: ['Dùng "an" trước danh từ bắt đầu bằng nguyên âm phát âm (an hour, an apple).']
        },
        quiz: [
            {
                id: 'q-gram-22-1',
                question: 'She wants to be _____ engineer.',
                options: ['a', 'an', 'the', 'Ø'],
                correctIndex: 1,
                explanation: '"engineer" bắt đầu bằng nguyên âm /e/ -> dùng "an".'
            }
        ]
    },

    // 3. SENTENCE STRUCTURES & CLAUSES
    {
        id: 'grammar-23',
        title: 'Subject-Verb Agreement (Sự hòa hợp giữa S và V)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 7,
        description: 'Quy tắc chia động từ phù hợp với số ít/số nhiều của chủ ngữ.',
        content: {
            theory: 'Chủ ngữ số ít đi với động từ số ít, chủ ngữ số nhiều đi với động từ số nhiều.',
            grammarRule: {
                rule: 'Subject-Verb Agreement Rules',
                explanation: 'Each/Every/Everyone + V(số ít). N1 of N2 chia theo N1. Neither A nor B chia theo B.',
                structure: 'Everyone is here. / Neither he nor his friends are coming.',
                examples: ['The list of new items is on the desk.']
            },
            examples: ['Mathematics is an interesting subject.'],
            tips: ['Các danh từ tận cùng bằng -s nhưng chỉ môn học/bệnh lý vẫn dùng động từ số ít (physics, news).']
        },
        quiz: [
            {
                id: 'q-gram-23-1',
                question: 'Each student in the classroom _____ a laptop.',
                options: ['have', 'has', 'having', 'are having'],
                correctIndex: 1,
                explanation: '"Each + N số ít" đi với động từ số ít -> has.'
            }
        ]
    },
    {
        id: 'grammar-24',
        title: 'Passive Voice (Câu bị động)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 7,
        description: 'Chuyển đổi câu chủ động sang bị động trong các thì khác nhau.',
        content: {
            theory: 'Dùng khi muốn nhấn mạnh vào đối tượng chịu tác động của hành động.',
            grammarRule: {
                rule: 'Passive Voice Structure',
                explanation: 'S + be + V3/ed + (by agent). Động từ "be" chia theo đúng thì của câu chủ động.',
                structure: 'Active: S + V + O -> Passive: S(object) + be + V3/ed + by O(subject)',
                examples: ['English is spoken all over the world.', 'The car was repaired yesterday.']
            },
            examples: ['A new bridge will be built next year.'],
            tips: ['Các nội động từ (arrive, happen, die) không có dạng bị động.']
        },
        quiz: [
            {
                id: 'q-gram-24-1',
                question: 'This house _____ in 1990.',
                options: ['built', 'was built', 'is built', 'builds'],
                correctIndex: 1,
                explanation: 'Sự việc trong quá khứ mang nghĩa bị động -> was built.'
            }
        ]
    },
    {
        id: 'grammar-25',
        title: 'Conditional Sentences (Câu điều kiện)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 8,
        description: 'Chi tiết câu điều kiện Loại 0, 1, 2, 3 và câu điều kiện hỗn hợp.',
        content: {
            theory: 'Diễn tả giả thiết về một sự việc xảy ra khi điều kiện tương ứng thỏa mãn.',
            grammarRule: {
                rule: 'Conditional Types (0, 1, 2, 3)',
                explanation: 'Type 1: If + HTĐ, Tương lai đơn. Type 2: If + QKĐ, S + would + V. Type 3: If + QKHT, S + would have + V3.',
                structure: 'If it rains, we will stay at home. (Type 1)',
                examples: ['If I were you, I would accept the job. (Type 2)']
            },
            examples: ['If she had studied hard, she would have passed the exam. (Type 3)'],
            tips: ['Trong câu điều kiện loại 2, dùng "were" cho tất cả các ngôi chủ ngữ (If I were...).']
        },
        quiz: [
            {
                id: 'q-gram-25-1',
                question: 'If I _____ rich, I would travel around the world.',
                options: ['am', 'were', 'had been', 'will be'],
                correctIndex: 1,
                explanation: 'Câu điều kiện loại 2 giả định trái ngược hiện tại -> were.'
            }
        ]
    },
    {
        id: 'grammar-26',
        title: 'Reported Speech (Câu gián tiếp)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 8,
        description: 'Quy tắc lùi thì, đổi đại từ và trạng từ chỉ thời gian/nơi chốn khi tường thuật.',
        content: {
            theory: 'Thuật lại lời nói của người khác mà không dùng trích dẫn trực tiếp.',
            grammarRule: {
                rule: 'Reported Speech Rules',
                explanation: 'Lùi thì (Present -> Past), đổi đại từ, và đổi trạng từ (now -> then, here -> there).',
                structure: 'He said (that) he was tired.',
                examples: ['She said, "I like apples" -> She said that she liked apples.']
            },
            examples: ['He asked me where I lived.'],
            tips: ['Không lùi thì nếu đó là chân lý hoặc sự thật hiển nhiên hoặc mệnh đề ở thì hiện tại đơn khi sự việc vẫn đúng.']
        },
        quiz: [
            {
                id: 'q-gram-26-1',
                question: '"I am working now," she said. -> She said that she _____ working _____ .',
                options: [
                    'is / now',
                    'was / then',
                    'has been / here',
                    'were / today'
                ],
                correctIndex: 1,
                explanation: 'Lùi thì am -> was và đổi now -> then.'
            }
        ]
    },
    {
        id: 'grammar-27',
        title: 'Relative Clauses (Mệnh đề quan hệ)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 8,
        description: 'Mệnh đề quan hệ xác định, không xác định và các cách rút gọn mệnh đề.',
        content: {
            theory: 'Dùng để bổ nghĩa cho danh từ đứng trước bằng các đại từ quan hệ (who, whom, which, that, whose).',
            grammarRule: {
                rule: 'Relative Pronouns & Reduction',
                explanation: 'Who (người/chủ ngữ), Whom (người/tân ngữ), Which (vật), Whose (sở hữu), That. Rút gọn dùng V-ing (chủ động) hoặc V3/ed (bị động).',
                structure: 'The man who is standing there is my teacher. -> The man standing there is my teacher.',
                examples: ['This is the book which I bought yesterday.']
            },
            examples: ['My father, who is a doctor, loves helping people.'],
            tips: ['Không dùng "that" trong mệnh đề quan hệ không xác định (có dấu phẩy).']
        },
        quiz: [
            {
                id: 'q-gram-27-1',
                question: 'The woman _____ car was stolen called the police.',
                options: ['who', 'whom', 'whose', 'which'],
                correctIndex: 2,
                explanation: 'Chỉ quan hệ sở hữu giữa người phụ nữ và chiếc xe -> whose.'
            }
        ]
    },
    {
        id: 'grammar-28',
        title: 'Comparison (Cấu trúc so sánh)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 7,
        description: 'So sánh bằng, hơn, nhất và cấu trúc so sánh kép.',
        content: {
            theory: 'Dùng để so sánh tính chất hoặc mức độ giữa các đối tượng.',
            grammarRule: {
                rule: 'Comparison Structures',
                explanation: 'Equal: as + adj/adv + as. Comparative: adj-er/more + adj + than. Superlative: the + adj-est/most + adj.',
                structure: 'The more you practice, the better you get. (So sánh kép)',
                examples: ['She is taller than her brother.', 'This is the most expensive car.']
            },
            examples: ['He runs as fast as his friend.'],
            tips: ['Tính từ ngắn có 1 âm tiết (hoặc 2 âm tiết tận cùng -y) thêm -er/-est; tính từ dài dùng more/most.']
        },
        quiz: [
            {
                id: 'q-gram-28-1',
                question: 'Mount Everest is _____ mountain in the world.',
                options: ['higher', 'the highest', 'high', 'more high'],
                correctIndex: 1,
                explanation: 'So sánh nhất của tính từ ngắn "high" -> the highest.'
            }
        ]
    },
    {
        id: 'grammar-29',
        title: 'Subjunctive Mood (Câu giả định)',
        track: 'grammar',
        level: 'Advanced',
        durationMinutes: 7,
        description: 'Câu giả định với các động từ cầu khiến (demand, suggest, insist...) và cấu trúc It is important that...',
        content: {
            theory: 'Dùng nguyên mẫu không "to" (V_bare) sau các động từ cầu khiến.',
            grammarRule: {
                rule: 'Subjunctive Structure',
                explanation: 'S1 + suggest/demand/insist + (that) + S2 + V_bare (đối với mọi ngôi).',
                structure: 'It is essential that he be present at the meeting.',
                examples: ['She suggested that he take a break.']
            },
            examples: ['The doctor recommended that she stay in bed.'],
            tips: ['Không chia động từ theo ngôi thứ 3 số ít trong mệnh đề giả định (giữ nguyên dạng V_bare).']
        },
        quiz: [
            {
                id: 'q-gram-29-1',
                question: 'I insist that he _____ immediately.',
                options: ['leaves', 'leave', 'left', 'leaving'],
                correctIndex: 1,
                explanation: 'Sau động từ cầu khiến "insist that", động từ ở mệnh đề sau để dạng V_bare -> leave.'
            }
        ]
    },
    {
        id: 'grammar-30',
        title: 'Wish Sentences (Câu ước)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 6,
        description: 'Câu ước ở hiện tại, quá khứ và tương lai.',
        content: {
            theory: 'Diễn tả mong ước trái ngược với thực tế.',
            grammarRule: {
                rule: 'Wish Structures',
                explanation: 'Hiện tại: S + wish(es) + S + V2/ed (were). Quá khứ: S + wish + S + had + V3. Tương lai: S + wish + S + could/would + V_bare.',
                structure: 'I wish I knew the answer now.',
                examples: ['I wish I had studied harder yesterday.']
            },
            examples: ['I wish it would stop raining.'],
            tips: ['Trong câu ước ở hiện tại, động từ "be" luôn chia là "were" cho tất cả các ngôi.']
        },
        quiz: [
            {
                id: 'q-gram-30-1',
                question: 'I wish I _____ a sports car now.',
                options: ['have', 'had', 'will have', 'had had'],
                correctIndex: 1,
                explanation: 'Câu ước trái ngược với hiện tại dùng quá khứ đơn -> had.'
            }
        ]
    },
    {
        id: 'grammar-31',
        title: 'Inversion (Đảo ngữ)',
        track: 'grammar',
        level: 'Advanced',
        durationMinutes: 8,
        description: 'Đảo ngữ với các trạng từ phủ định (Never, Rarely, Seldom, Hardly...).',
        content: {
            theory: 'Đưa trợ động từ lên trước chủ ngữ để nhấn mạnh.',
            grammarRule: {
                rule: 'Negative Inversion',
                explanation: 'Never/Rarely/Seldom + Auxiliary Verb + S + Main Verb',
                structure: 'Never have I heard such a ridiculous story.',
                examples: ['Hardly had I arrived home when it started to rain.']
            },
            examples: ['Not only is she smart, but she is also kind.'],
            tips: ['Chỉ áp dụng đảo ngữ khi các từ phủ định đứng ở đầu câu.']
        },
        quiz: [
            {
                id: 'q-gram-31-1',
                question: 'Seldom _____ such a beautiful sunset.',
                options: ['I have seen', 'have I seen', 'did I saw', 'I saw'],
                correctIndex: 1,
                explanation: 'Đảo ngữ với "Seldom" ở đầu câu -> have I seen.'
            }
        ]
    },
    {
        id: 'grammar-32',
        title: 'Cleft Sentences (Câu chẻ)',
        track: 'grammar',
        level: 'Advanced',
        durationMinutes: 7,
        description: 'Nhấn mạnh một thành phần trong câu với cấu trúc It is/was... that/who...',
        content: {
            theory: 'Dùng để tập trung sự chú ý của người nghe vào một phần cụ thể của câu.',
            grammarRule: {
                rule: 'Cleft Sentence Structure',
                explanation: 'It + is/was + [Focused Element] + that/who + [Rest of sentence]',
                structure: 'It was John who broke the window.',
                examples: ['It is English that I love learning most.']
            },
            examples: ['It was yesterday that we met him.'],
            tips: ['Phần được nhấn mạnh nằm ngay sau "It is/was".']
        },
        quiz: [
            {
                id: 'q-gram-32-1',
                question: 'It was Mary _____ helped me with my homework.',
                options: ['whom', 'which', 'who', 'whose'],
                correctIndex: 2,
                explanation: 'Nhấn mạnh chủ ngữ chỉ người (Mary) trong câu chẻ -> dùng who.'
            }
        ]
    },
    {
        id: 'grammar-33',
        title: 'Tag Questions (Câu hỏi đuôi)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 6,
        description: 'Cách thành lập câu hỏi đuôi và các trường hợp ngoại lệ.',
        content: {
            theory: 'Thêm câu hỏi ngắn ở cuối câu để xác nhận thông tin (Vế chính khẳng định -> đuôi phủ định và ngược lại).',
            grammarRule: {
                rule: 'Tag Questions Rules',
                explanation: 'S + V ..., auxiliary + not + pronoun? Trường hợp đặc biệt: I am -> aren\'t I? Let\'s -> shall we?',
                structure: 'You are a student, aren\'t you?',
                examples: ['He has finished his work, hasn\'t he?', 'Let\'s go out, shall we?']
            },
            examples: ['She likes music, doesn\'t she?'],
            tips: ['Luôn dùng đại từ nhân xưng (he, she, it, they...) ở phần đuôi, không dùng danh từ riêng.']
        },
        quiz: [
            {
                id: 'q-gram-33-1',
                question: 'Open the door, _____ ?',
                options: ['will you', 'do you', 'don\'t you', 'are you'],
                correctIndex: 0,
                explanation: 'Câu mệnh lệnh (imperative) luôn dùng phần đuôi là "will you".'
            }
        ]
    },
    {
        id: 'grammar-34',
        title: 'Subject Complement & Object Complement (Bổ ngữ)',
        track: 'grammar',
        level: 'Advanced',
        durationMinutes: 7,
        description: 'Phân biệt bổ ngữ cho chủ ngữ (Subject Complement) và bổ ngữ cho tân ngữ (Object Complement).',
        content: {
            theory: 'Bổ ngữ cung cấp thêm thông tin để làm rõ nghĩa cho chủ ngữ hoặc tân ngữ.',
            grammarRule: {
                rule: 'Complements',
                explanation: 'Subject Complement đi sau linking verbs (be, seem, look). Object Complement đi sau tân ngữ để bổ nghĩa cho tân ngữ đó.',
                structure: 'She looks happy. (Subject Comp) / They elected him president. (Object Comp)',
                examples: ['The paint made the wall bright.']
            },
            examples: ['He considers her a genius.'],
            tips: ['Object Complement thường là danh từ hoặc tính từ đứng ngay sau tân ngữ trực tiếp.']
        },
        quiz: [
            {
                id: 'q-gram-34-1',
                question: 'Trong câu "They named their baby boy David", từ "David" đóng vai trò gì?',
                options: [
                    'Subject',
                    'Direct Object',
                    'Object Complement',
                    'Subject Complement'
                ],
                correctIndex: 2,
                explanation: '"David" bổ nghĩa cho tân ngữ "their baby boy" -> Object Complement.'
            }
        ]
    },

    // 4. VERB FORMS & ADVANCED STRUCTURES
    {
        id: 'grammar-35',
        title: 'Gerunds and Infinitives (Danh động từ và To-V)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 8,
        description: 'Cách dùng V-ing, To-V và V-bare trong các cấu trúc câu tiếng Anh.',
        content: {
            theory: 'Quy tắc chọn dạng của động từ khi đứng sau động từ khác hoặc giới từ.',
            grammarRule: {
                rule: 'Gerunds vs Infinitives',
                explanation: 'Sau giới từ/tính từ dùng V-ing. Sau một số động từ (want, hope, decide) dùng To-V. Sau động từ khuyết thiếu dùng V_bare.',
                structure: 'I enjoy reading books. / She wants to buy a car.',
                examples: ['Stop talking, please. / Remember to lock the door.']
            },
            examples: ['He avoided answering my question.'],
            tips: ['Một số từ thay đổi nghĩa khi đi với V-ing và To-V như remember, stop, try.']
        },
        quiz: [
            {
                id: 'q-gram-35-1',
                question: 'Would you mind _____ the window?',
                options: ['to open', 'opening', 'open', 'opened'],
                correctIndex: 1,
                explanation: 'Sau cụm "Would you mind" luôn dùng động từ thêm V-ing.'
            }
        ]
    },
    {
        id: 'grammar-36',
        title: 'Modal Verbs (Động từ khuyết thiếu)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 7,
        description: 'Cách dùng Can, Could, May, Might, Must, Should, Have to...',
        content: {
            theory: 'Động từ khuyết thiếu bổ nghĩa cho động từ chính, diễn tả khả năng, sự cho phép, nghĩa vụ.',
            grammarRule: {
                rule: 'Modal Verbs Usage',
                explanation: 'Luôn đi kèm với động từ nguyên mẫu không "to" (V_bare), không chia theo ngôi thứ 3 số ít.',
                structure: 'S + Modal Verb + V_bare',
                examples: ['You must wear a helmet when riding a bike.', 'She can speak three languages.']
            },
            examples: ['You should see a doctor.'],
            tips: ['"Must" mang nghĩa bắt buộc từ người nói, "have to" mang nghĩa bắt buộc từ ngoại cảnh.']
        },
        quiz: [
            {
                id: 'q-gram-36-1',
                question: 'You _____ smoke in the hospital. It is prohibited.',
                options: ['mustn\'t', 'needn\'t', 'don\'t have to', 'shouldn\'t'],
                correctIndex: 0,
                explanation: 'Chỉ sự cấm đoán tuyệt đối -> mustn\'t.'
            }
        ]
    },
    {
        id: 'grammar-37',
        title: 'Perfect Modals (Động từ khuyết thiếu hoàn thành)',
        track: 'grammar',
        level: 'Advanced',
        durationMinutes: 8,
        description: 'Cấu trúc Modal verb + have + V3/ed (Must have, Should have, Could have...).',
        content: {
            theory: 'Diễn tả phỏng đoán hoặc tiếc nuối về một sự việc đã xảy ra trong quá khứ.',
            grammarRule: {
                rule: 'Perfect Modals Structure',
                explanation: 'Should have V3 (lẽ ra nên làm), Must have V3 (chắc hẳn đã), Can\'t have V3 (lẽ nào lại không).',
                structure: 'S + Modal Verb + have + V3/ed',
                examples: ['She is not here. She must have missed the bus.']
            },
            examples: ['You should have told me the truth yesterday.'],
            tips: ['Dùng để phỏng đoán có căn cứ hoặc bày tỏ sự hối tiếc trong quá khứ.']
        },
        quiz: [
            {
                id: 'q-gram-37-1',
                question: 'He failed the exam. He _____ harder.',
                options: [
                    'must study',
                    'should have studied',
                    'can study',
                    'would study'
                ],
                correctIndex: 1,
                explanation: 'Diễn tả sự tiếc nuối về hành động lẽ ra nên làm trong quá khứ -> should have studied.'
            }
        ]
    },
    {
        id: 'grammar-38',
        title: 'Participle Clauses (Mệnh đề phân từ)',
        track: 'grammar',
        level: 'Advanced',
        durationMinutes: 8,
        description: 'Rút gọn mệnh đề dùng Hiện tại phân từ (V-ing) và Quá khứ phân từ (P2).',
        content: {
            theory: 'Rút gọn câu khi hai mệnh đề có chung chủ ngữ để câu văn gọn gàng hơn.',
            grammarRule: {
                rule: 'Participle Clauses',
                explanation: 'Dùng V-ing cho nghĩa chủ động và V3/ed cho nghĩa bị động khi cùng chủ ngữ.',
                structure: 'Having finished his homework, he went out. / Built in 1900, the house is still strong.',
                examples: ['Feeling tired, she went to bed early.']
            },
            examples: ['Left alone in the house, the boy began to cry.'],
            tips: ['Hai mệnh đề bắt buộc phải có chung một chủ ngữ thì mới được dùng mệnh đề phân từ rút gọn.']
        },
        quiz: [
            {
                id: 'q-gram-38-1',
                question: '_____ by the beauty of the landscape, she decided to stay longer.',
                options: ['Captivating', 'Captivated', 'To captivate', 'Captivate'],
                correctIndex: 1,
                explanation: 'Mang nghĩa bị động (bị cuốn hút bởi phong cảnh) -> dùng quá khứ phân từ "Captivated".'
            }
        ]
    },
    {
        id: 'grammar-39',
        title: 'Independent & Dependent Clauses (Mệnh đề độc lập & phụ thuộc)',
        track: 'grammar',
        level: 'Intermediate',
        durationMinutes: 6,
        description: 'Phân biệt mệnh đề độc lập (có thể đứng một mình như câu đơn) và mệnh đề phụ thuộc.',
        content: {
            theory: 'Cấu trúc tạo nên các câu phức và câu ghép trong tiếng Anh.',
            grammarRule: {
                rule: 'Clauses Comparison',
                explanation: 'Independent clause có chứa S+V và diễn tả ý trọn vẹn. Dependent clause bắt đầu bằng từ nối phụ thuộc (because, although, if) và không đủ ý nếu đứng một mình.',
                structure: '[Independent Clause] + [Dependent Clause]',
                examples: ['I will go out [independent] if it stops raining [dependent].']
            },
            examples: ['Although she was tired, she finished her project.'],
            tips: ['Mệnh đề phụ thuộc không thể đứng độc lập như một câu hoàn chỉnh.']
        },
        quiz: [
            {
                id: 'q-gram-39-1',
                question: 'Trong câu "Because he was late, he missed the bus", mệnh đề "Because he was late" là:',
                options: [
                    'Independent Clause',
                    'Dependent Clause',
                    'Compound Sentence',
                    'Main Clause'
                ],
                correctIndex: 1,
                explanation: 'Bắt đầu bằng liên từ phụ thuộc "Because" nên đây là mệnh đề phụ thuộc (Dependent clause).'
            }
        ]
    },
    {
        id: 'grammar-40',
        title: 'Adverbial Clauses (Mệnh đề trạng ngữ)',
        track: 'grammar',
        level: 'Advanced',
        durationMinutes: 7,
        description: 'Mệnh đề trạng ngữ chỉ nguyên nhân, kết quả, nhượng bộ và mục đích.',
        content: {
            theory: 'Đóng vai trò như một trạng từ trong câu, bổ nghĩa cho mệnh đề chính.',
            grammarRule: {
                rule: 'Adverbial Clause Types',
                explanation: 'Reason (because, since), Concession (although, even though), Purpose (so that, in order that), Result (so... that, such... that).',
                structure: 'She studied hard so that she could pass the exam.',
                examples: ['It was such a cold day that we stayed indoors.']
            },
            examples: ['Even though it was raining, they played football.'],
            tips: ['Chú ý phân biệt cấu trúc "so... that" (đi với tính từ/trạng từ) và "such... that" (đi với danh từ).']
        },
        quiz: [
            {
                id: 'q-gram-40-1',
                question: 'He spoke quietly _____ he wouldn\'t wake the baby.',
                options: ['so that', 'because', 'although', 'in spite of'],
                correctIndex: 0,
                explanation: 'Chỉ mục đích (để mà) -> dùng "so that".'
            }
        ]
    }
];