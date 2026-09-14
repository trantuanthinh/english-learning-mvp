import type {Lesson} from "../types";

export const PRONUNCIATION_DATA: Lesson[] = [
    {
        id: 'pronun-1',
        title: 'Âm /s/ và /ʃ/ (sh)',
        track: 'pronunciation',
        level: 'Beginner',
        durationMinutes: 5,
        description: 'Phân biệt âm /s/ và /ʃ/, hai âm rất dễ nhầm khi nói tiếng Anh.',
        content: {
            theory: 'Âm /s/ tạo bằng luồng hơi hẹp giữa lưỡi và vùng chân răng; /ʃ/ lùi lưỡi hơn và môi hơi tròn. /ʃ/ gần với âm "sh" trong tiếng Anh.',
            examples: ['see /siː/ - she /ʃiː/', 'sip /sɪp/ - ship /ʃɪp/', 'so /səʊ/ - show /ʃəʊ/'],
            tips: [
                'Với /s/, môi thường không tròn.',
                'Với /ʃ/, môi hơi chu ra và lưỡi lùi về sau.',
                'Không đọc /ʃ/ thành /s/.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-1-1',
                question: 'Từ nào bắt đầu bằng âm /ʃ/?',
                options: ['See', 'Sea', 'Ship', 'Sign'],
                correctIndex: 2,
                explanation: 'Ship phát âm /ʃɪp/ và bắt đầu bằng /ʃ/.'
            },
            {
                id: 'q-pronun-1-2',
                question: 'Từ nào bắt đầu bằng âm /s/?',
                options: ['She', 'Shop', 'Sun', 'Shine'],
                correctIndex: 2,
                explanation: 'Sun bắt đầu bằng /s/.'
            }
        ]
    },

    {
        id: 'pronun-2',
        title: 'Âm /z/ và /ʒ/',
        track: 'pronunciation',
        level: 'Beginner',
        durationMinutes: 6,
        description: 'Luyện hai âm xát hữu thanh thường xuất hiện trong từ vựng giao tiếp.',
        content: {
            theory: '/z/ là phiên bản hữu thanh của /s/. /ʒ/ là âm giống phần giữa của từ "vision", với lưỡi lùi hơn /z/. Khi phát âm, dây thanh rung.',
            examples: ['zoo /zuː/', 'zero /ˈzɪərəʊ/', 'vision /ˈvɪʒən/', 'measure /ˈmeʒə/'],
            tips: [
                'Đặt tay lên cổ để cảm nhận rung khi phát âm /z/ và /ʒ/.',
                'Không biến /z/ thành /s/ ở cuối từ.',
                'Âm /ʒ/ thường gặp ở giữa từ hơn là đầu từ.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-2-1',
                question: 'Từ nào chứa âm /ʒ/?',
                options: ['Vision', 'Sun', 'Zoo', 'Ship'],
                correctIndex: 0,
                explanation: 'Vision có âm /ʒ/ ở giữa: /ˈvɪʒən/.'
            },
            {
                id: 'q-pronun-2-2',
                question: 'Âm nào là âm hữu thanh?',
                options: ['/s/', '/ʃ/', '/z/', '/t/'],
                correctIndex: 2,
                explanation: '/z/ là âm hữu thanh, dây thanh rung khi phát âm.'
            }
        ]
    },

    {
        id: 'pronun-3',
        title: 'Âm /θ/ và /ð/',
        track: 'pronunciation',
        level: 'Beginner',
        durationMinutes: 7,
        description: 'Luyện âm "th" trong think, three, this, that.',
        content: {
            theory: '/θ/ là âm vô thanh: đầu lưỡi đặt nhẹ giữa hoặc sát hai hàm răng và đẩy hơi. /ð/ có vị trí tương tự nhưng dây thanh rung.',
            examples: ['think /θɪŋk/', 'three /θriː/', 'this /ðɪs/', 'that /ðæt/'],
            tips: [
                'Đầu lưỡi cần chạm hoặc nhô nhẹ qua răng.',
                'Không thay /θ/ bằng /t/ hoặc /s/.',
                'Không thay /ð/ bằng /d/ hoặc /z/.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-3-1',
                question: 'Từ "think" bắt đầu bằng âm nào?',
                options: ['/t/', '/θ/', '/ð/', '/s/'],
                correctIndex: 1,
                explanation: 'Think bắt đầu bằng âm vô thanh /θ/.'
            },
            {
                id: 'q-pronun-3-2',
                question: 'Từ "this" chứa âm nào ở đầu?',
                options: ['/θ/', '/ð/', '/d/', '/z/'],
                correctIndex: 1,
                explanation: 'This bắt đầu bằng âm hữu thanh /ð/.'
            }
        ]
    },

    {
        id: 'pronun-4',
        title: 'Âm /r/ và /l/',
        track: 'pronunciation',
        level: 'Beginner',
        durationMinutes: 7,
        description: 'Phân biệt /r/ và /l/, đặc biệt quan trọng với người học tiếng Anh có nền tảng tiếng Việt.',
        content: {
            theory: '/l/ dùng đầu lưỡi chạm vùng ngay sau răng trên. /r/ tiếng Anh Mỹ thường không chạm vòm miệng; lưỡi cong hoặc kéo nhẹ về sau.',
            examples: ['light /laɪt/ - right /raɪt/', 'long /lɔːŋ/ - wrong /rɔːŋ/', 'glass /ɡlæs/ - grass /ɡræs/'],
            tips: [
                'Với /l/, có điểm tiếp xúc rõ của đầu lưỡi.',
                'Với /r/, tránh rung lưỡi như một số cách đọc r trong tiếng Việt.',
                'Luyện từng cặp tối thiểu trước khi luyện câu.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-4-1',
                question: 'Âm nào yêu cầu đầu lưỡi chạm vùng sau răng trên?',
                options: ['/r/', '/l/', '/w/', '/v/'],
                correctIndex: 1,
                explanation: '/l/ có điểm tiếp xúc của đầu lưỡi với vùng lợi phía sau răng trên.'
            },
            {
                id: 'q-pronun-4-2',
                question: 'Cặp nào là minimal pair về /r/ và /l/?',
                options: ['light - right', 'cat - dog', 'ship - sheep', 'fan - van'],
                correctIndex: 0,
                explanation: 'Light và right khác nhau chủ yếu ở phụ âm đầu /l/ và /r/.'
            }
        ]
    },

    {
        id: 'pronun-5',
        title: 'Âm /v/ và /w/',
        track: 'pronunciation',
        level: 'Beginner',
        durationMinutes: 6,
        description: 'Phân biệt phụ âm /v/ và /w/ trong very, van, water, work.',
        content: {
            theory: '/v/ dùng môi dưới chạm nhẹ răng trên và tạo ma sát. /w/ bắt đầu bằng hai môi tròn, sau đó nhanh chóng chuyển sang nguyên âm tiếp theo.',
            examples: ['vine /vaɪn/ - wine /waɪn/', 'vest /vest/ - west /west/', 'very /ˈveri/ - well /wel/'],
            tips: [
                'Đừng phát âm /w/ bằng cách chạm răng vào môi.',
                'Với /v/, phải có ma sát và rung dây thanh.',
                'Giữ chuyển động /w/ ngắn và liền với nguyên âm sau.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-5-1',
                question: 'Từ nào bắt đầu bằng /w/?',
                options: ['Very', 'Van', 'Work', 'Vote'],
                correctIndex: 2,
                explanation: 'Work bắt đầu bằng /w/.'
            },
            {
                id: 'q-pronun-5-2',
                question: 'Âm /v/ được tạo chủ yếu bằng cách nào?',
                options: [
                    'Hai môi chạm nhau',
                    'Môi dưới chạm nhẹ răng trên',
                    'Đầu lưỡi chạm răng',
                    'Lưỡi chạm vòm mềm'
                ],
                correctIndex: 1,
                explanation: '/v/ là âm môi-răng hữu thanh.'
            }
        ]
    },

    {
        id: 'pronun-6',
        title: 'Âm /tʃ/ và /dʒ/',
        track: 'pronunciation',
        level: 'Beginner',
        durationMinutes: 6,
        description: 'Luyện âm ch và j trong các từ như chair, teacher, job, bridge.',
        content: {
            theory: '/tʃ/ là âm tắc-xát vô thanh; /dʒ/ là phiên bản hữu thanh. Hai âm có cấu tạo gần nhau nhưng khác về độ rung của dây thanh.',
            examples: ['chair /tʃeə/', 'teacher /ˈtiːtʃə/', 'job /dʒɒb/', 'bridge /brɪdʒ/'],
            tips: [
                'Bắt đầu bằng phần tắc ngắn rồi chuyển sang ma sát.',
                'Kiểm tra rung cổ khi đổi từ /tʃ/ sang /dʒ/.',
                'Chú ý /dʒ/ ở cuối từ.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-6-1',
                question: 'Từ nào chứa /dʒ/?',
                options: ['Chair', 'Job', 'Teacher', 'Watch'],
                correctIndex: 1,
                explanation: 'Job bắt đầu bằng /dʒ/.'
            },
            {
                id: 'q-pronun-6-2',
                question: 'Âm nào là vô thanh?',
                options: ['/dʒ/', '/z/', '/tʃ/', '/ð/'],
                correctIndex: 2,
                explanation: '/tʃ/ là âm vô thanh.'
            }
        ]
    },

    {
        id: 'pronun-7',
        title: 'Nguyên âm /ɪ/ và /iː/',
        track: 'pronunciation',
        level: 'Beginner',
        durationMinutes: 7,
        description: 'Phân biệt nguyên âm ngắn trong ship và nguyên âm dài trong sheep.',
        content: {
            theory: '/ɪ/ ngắn và lỏng hơn; /iː/ dài hơn, căng hơn và thường có vị trí lưỡi cao hơn.',
            examples: ['ship /ʃɪp/ - sheep /ʃiːp/', 'live /lɪv/ - leave /liːv/', 'sit /sɪt/ - seat /siːt/'],
            tips: [
                'Không chỉ dựa vào độ dài; vị trí lưỡi cũng khác.',
                'Luyện bằng minimal pairs.',
                'Nghe trước rồi bắt chước thay vì chỉ nhìn chính tả.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-7-1',
                question: 'Cặp nào thể hiện /ɪ/ và /iː/?',
                options: ['ship - sheep', 'cat - cut', 'bed - bad', 'full - fool'],
                correctIndex: 0,
                explanation: 'Ship có /ɪ/, sheep có /iː/.'
            },
            {
                id: 'q-pronun-7-2',
                question: 'Âm nào thường dài và căng hơn?',
                options: ['/ɪ/', '/iː/', '/ə/', '/ʌ/'],
                correctIndex: 1,
                explanation: '/iː/ là nguyên âm dài trong hệ IPA thông dụng.'
            }
        ]
    },

    {
        id: 'pronun-8',
        title: 'Nguyên âm /æ/, /e/ và /ʌ/',
        track: 'pronunciation',
        level: 'Beginner',
        durationMinutes: 8,
        description: 'Phân biệt các nguyên âm dễ bị đọc gần giống nhau bởi người Việt.',
        content: {
            theory: '/æ/ như trong cat có miệng mở rộng; /e/ như trong bed ngắn hơn; /ʌ/ như trong cup có vị trí trung tâm và thường ngắn.',
            examples: ['cat /kæt/ - cut /kʌt/', 'bad /bæd/ - bed /bed/', 'hat /hæt/ - hut /hʌt/'],
            tips: [
                '/æ/ cần mở hàm rõ.',
                '/e/ ngắn và tương đối ổn định.',
                '/ʌ/ không nên đọc thành "a" tiếng Việt một cách máy móc.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-8-1',
                question: 'Từ "cat" chứa nguyên âm nào?',
                options: ['/æ/', '/e/', '/ʌ/', '/ɪ/'],
                correctIndex: 0,
                explanation: 'Cat có nguyên âm /æ/.'
            },
            {
                id: 'q-pronun-8-2',
                question: 'Từ "bed" chứa nguyên âm nào?',
                options: ['/æ/', '/e/', '/iː/', '/ʌ/'],
                correctIndex: 1,
                explanation: 'Bed phát âm /bed/.'
            }
        ]
    },

    {
        id: 'pronun-9',
        title: 'Âm /ʊ/ và /uː/',
        track: 'pronunciation',
        level: 'Beginner',
        durationMinutes: 6,
        description: 'Phân biệt full và fool, pull và pool.',
        content: {
            theory: '/ʊ/ là nguyên âm ngắn, lỏng hơn; /uː/ dài và căng hơn. Cả hai đều có môi tròn nhưng vị trí lưỡi và độ dài khác nhau.',
            examples: ['full /fʊl/ - fool /fuːl/', 'pull /pʊl/ - pool /puːl/', 'look /lʊk/ - Luke /luːk/'],
            tips: [
                'Không kéo dài /ʊ/ thành /uː/.',
                'Giữ môi tròn vừa phải.',
                'Luyện theo cặp từ gần giống nhau.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-9-1',
                question: 'Từ "pool" chứa âm nào?',
                options: ['/ʊ/', '/uː/', '/ɒ/', '/ə/'],
                correctIndex: 1,
                explanation: 'Pool phát âm /puːl/.'
            },
            {
                id: 'q-pronun-9-2',
                question: 'Từ "look" chứa âm nào?',
                options: ['/uː/', '/ʊ/', '/iː/', '/ʌ/'],
                correctIndex: 1,
                explanation: 'Look phát âm /lʊk/.'
            }
        ]
    },

    {
        id: 'pronun-10',
        title: 'Âm schwa /ə/ và nguyên âm yếu',
        track: 'pronunciation',
        level: 'Intermediate',
        durationMinutes: 7,
        description: 'Hiểu schwa, âm cực kỳ phổ biến trong tiếng Anh tự nhiên.',
        content: {
            theory: '/ə/ (schwa) thường xuất hiện ở âm tiết không nhấn. Đây là âm ngắn, trung tính và rất quan trọng để nói tự nhiên.',
            examples: ['about /əˈbaʊt/', 'support /səˈpɔːt/', 'banana /bəˈnɑːnə/', 'teacher /ˈtiːtʃə/'],
            tips: [
                'Không cố đọc mọi nguyên âm theo cách mạnh như trong từ điển.',
                'Âm tiết không nhấn thường được rút gọn.',
                'Schwa giúp câu nói có nhịp điệu tự nhiên.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-10-1',
                question: 'Schwa thường xuất hiện ở đâu?',
                options: ['Âm tiết luôn được nhấn', 'Âm tiết không nhấn', 'Chỉ ở cuối câu', 'Chỉ trong động từ'],
                correctIndex: 1,
                explanation: 'Schwa /ə/ rất thường gặp ở âm tiết không nhấn.'
            },
            {
                id: 'q-pronun-10-2',
                question: 'Từ nào có schwa ở đầu?',
                options: ['About', 'Ship', 'Tree', 'Book'],
                correctIndex: 0,
                explanation: 'About bắt đầu bằng âm yếu /ə/.'
            }
        ]
    },

    {
        id: 'pronun-11',
        title: 'Trọng âm từ (Word Stress)',
        track: 'pronunciation',
        level: 'Intermediate',
        durationMinutes: 8,
        description: 'Xác định và luyện trọng âm trong từ đơn và từ nhiều âm tiết.',
        content: {
            theory: 'Trọng âm là âm tiết được nổi bật hơn về độ dài, độ rõ, cao độ và cường độ. Trọng âm sai có thể khiến người nghe khó nhận ra từ.',
            examples: ['PREsent (noun) - preSENT (verb)', 'REcord (noun) - reCORD (verb)', 'PHOtograph - phoTOGraphy'],
            tips: [
                'Không chỉ tăng âm lượng; hãy thay đổi cả độ dài, cao độ và độ rõ.',
                'Âm tiết không nhấn thường có thể dùng schwa.',
                'Học từ mới kèm trọng âm.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-11-1',
                question: 'Trong danh từ "record", trọng âm thường rơi vào đâu?',
                options: ['Âm tiết 1', 'Âm tiết 2', 'Cả hai như nhau', 'Không có trọng âm'],
                correctIndex: 0,
                explanation: 'Danh từ record thường nhấn âm tiết đầu.'
            },
            {
                id: 'q-pronun-11-2',
                question: 'Yếu tố nào KHÔNG phải đặc điểm điển hình của âm tiết được nhấn?',
                options: ['Rõ hơn', 'Dài hơn', 'Có thể cao hơn', 'Luôn nhỏ hơn'],
                correctIndex: 3,
                explanation: 'Âm tiết nhấn thường nổi bật hơn chứ không luôn nhỏ hơn.'
            }
        ]
    },

    {
        id: 'pronun-12',
        title: 'Trọng âm câu và từ quan trọng',
        track: 'pronunciation',
        level: 'Intermediate',
        durationMinutes: 8,
        description: 'Luyện sentence stress để câu nói có nhịp điệu tự nhiên.',
        content: {
            theory: 'Trong tiếng Anh, các từ mang thông tin thường được nhấn mạnh như noun, main verb, adjective, adverb và từ phủ định. Các từ chức năng thường yếu hơn.',
            examples: [
                'I NEED to FINISH the PROJECT today.',
                'She DOESN’T LIKE the NEW VERSION.',
                'Can you SEND me the FILE?'
            ],
            tips: [
                'Tập trung vào từ mang thông tin mới hoặc quan trọng.',
                'Từ chức năng như a, the, to, and, can thường yếu trong câu tự nhiên.',
                'Nhấn sai từ có thể làm thay đổi trọng tâm ý nghĩa.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-12-1',
                question: 'Trong câu "I need to finish the project today", nhóm từ nào thường được nhấn?',
                options: ['I - to - the', 'need - finish - project - today', 'to - the', 'chỉ I'],
                correctIndex: 1,
                explanation: 'Các từ mang nội dung chính thường nhận trọng âm.'
            }
        ]
    },

    {
        id: 'pronun-13',
        title: 'Nối âm (Linking)',
        track: 'pronunciation',
        level: 'Intermediate',
        durationMinutes: 8,
        description: 'Luyện cách nối phụ âm cuối với nguyên âm đầu của từ kế tiếp.',
        content: {
            theory: 'Trong tiếng Anh nói tự nhiên, từ không được phát âm như những khối tách biệt. Phụ âm cuối có thể nối với nguyên âm đầu của từ sau.',
            examples: ['pick_it_up', 'turn_it_off', 'work_on_it', 'an_apple'],
            tips: [
                'Đừng ngắt hơi giữa mọi từ.',
                'Nối âm phải phục vụ sự trôi chảy, không làm mất phụ âm.',
                'Luyện chậm trước rồi tăng tốc.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-13-1',
                question: 'Mục đích chính của linking là gì?',
                options: ['Nói từng từ tách biệt', 'Tạo dòng nói tự nhiên và liên tục', 'Tăng âm lượng', 'Bỏ hết phụ âm cuối'],
                correctIndex: 1,
                explanation: 'Linking giúp lời nói liên tục và tự nhiên hơn.'
            }
        ]
    },

    {
        id: 'pronun-14',
        title: 'Âm yếu và Connected Speech',
        track: 'pronunciation',
        level: 'Intermediate',
        durationMinutes: 9,
        description: 'Luyện weak forms, reduction, linking và các hiện tượng nói nhanh.',
        content: {
            theory: 'Connected speech gồm nhiều hiện tượng như weak forms, reduction, linking và assimilation. Người bản ngữ thường không phát âm mọi từ với mức độ rõ như khi đọc từng từ riêng lẻ.',
            examples: [
                'I can do it. (can thường yếu)',
                'Want to -> dạng nói nhanh có thể gần với wanna trong giao tiếp không trang trọng',
                'going to -> dạng nói nhanh có thể gần với gonna trong giao tiếp không trang trọng'
            ],
            tips: [
                'Ưu tiên hiểu dạng chuẩn trước khi học dạng rút gọn.',
                'Không dùng dạng slang trong văn viết trang trọng.',
                'Nghe cả cụm từ thay vì tách từng từ.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-14-1',
                question: 'Weak form thường dùng để làm gì?',
                options: ['Nhấn mạnh mọi từ', 'Giảm độ nổi bật của từ chức năng', 'Đổi nghĩa từ', 'Bỏ chủ ngữ'],
                correctIndex: 1,
                explanation: 'Weak forms giúp duy trì nhịp điệu và trọng tâm thông tin của câu.'
            }
        ]
    },

    {
        id: 'pronun-15',
        title: 'Ngữ điệu: Statement, Yes/No Question và WH-Question',
        track: 'pronunciation',
        level: 'Intermediate',
        durationMinutes: 8,
        description: 'Hiểu các mẫu ngữ điệu cơ bản khi nói câu khẳng định và câu hỏi.',
        content: {
            theory: 'Ngữ điệu là sự thay đổi cao độ trong câu. Câu hỏi Yes/No thường có xu hướng lên giọng trong nhiều ngữ cảnh, còn WH-question thường có xu hướng xuống giọng.',
            examples: [
                'You are ready. ↓',
                'Are you ready? ↑',
                'Where are you going? ↓'
            ],
            tips: [
                'Ng ngữ điệu phụ thuộc ngữ cảnh và thái độ, không phải quy tắc tuyệt đối.',
                'Nghe cả câu để bắt nhịp thay vì chỉ bắt từng từ.',
                'Luyện shadowing với câu ngắn.'
            ]
        },
        quiz: [
            {
                id: 'q-pronun-15-1',
                question: 'Mẫu ngữ điệu thường gặp của WH-question là gì?',
                options: ['Xuống giọng', 'Luôn lên giọng', 'Không có ngữ điệu', 'Nói thì thầm'],
                correctIndex: 0,
                explanation: 'WH-question thường có falling intonation.'
            }
        ]
    }
];