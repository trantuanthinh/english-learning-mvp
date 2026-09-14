import type {Lesson} from "../types";

export const VOCABULARY_DATA: Lesson[] = [
    // 1. PERSONAL & EVERYDAY LIFE
    {
        id: 'vocab-1',
        title: 'Identity, Appearance & Personality (Thông tin, Ngoại hình & Tính cách)',
        track: 'vocabulary',
        level: 'Beginner',
        durationMinutes: 7,
        description: 'Tổng hợp từ vựng miêu tả chi tiết đặc điểm ngoại hình, tính cách và thông tin cá nhân.',
        content: {
            theory: 'Các từ vựng cốt lõi giúp bạn tự tin giới thiệu bản thân và miêu tả người khác trong giao tiếp hàng ngày.',
            vocabularyList: [
                {id: 'v-1-1', word: 'Outgoing', phonetic: '/ˈaʊtˌɡoʊ.ɪŋ/', meaning: 'Hướng ngoại, cởi mở, thân thiện', example: 'She is an outgoing person who loves meeting new people.'},
                {id: 'v-1-2', word: 'Reliable', phonetic: '/rɪˈlaɪ.ə.bəl/', meaning: 'Đáng tin cậy, có thể dựa dẫm vào', example: 'He is a reliable teammate who never misses a deadline.'},
                {id: 'v-1-3', word: 'Straightforward', phonetic: '/ˌstreɪtˈfɔːr.wɚd/', meaning: 'Thẳng thắn, bộc trực, minh bạch', example: 'Her straightforward communication style is appreciated by everyone.'},
                {id: 'v-1-4', word: 'Well-built', phonetic: '/ˌwɛl ˈbɪlt/', meaning: 'Vạm vỡ, thể hình cân đối', example: 'He goes to the gym daily and looks quite well-built.'},
                {id: 'v-1-5', word: 'Meticulous', phonetic: '/məˈtɪk.jə.ləs/', meaning: 'Tỉ mỉ, kỹ tính, chu đáo', example: 'She is meticulous about every detail of the project.'},
                {id: 'v-1-6', word: 'Easy-going', phonetic: '/ˌiː.ziˈɡoʊ.ɪŋ/', meaning: 'Dễ tính, thoải mái, ôn hòa', example: 'Our boss is very easy-going and approachable.'},
                {id: 'v-1-7', word: 'Compassionate', phonetic: '/kəmˈpæʃ.ən.ət/', meaning: 'Đầy lòng trắc ẩn, thấu cảm', example: 'She is a compassionate nurse who cares deeply for her patients.'}
            ],
            examples: ['My brother has short curly hair, brown eyes, and an easy-going personality.'],
            tips: ['Kết hợp các tính từ chỉ tính cách với trạng từ mức độ như "extremely", "fairly", "slightly" để câu nói tự nhiên hơn.']
        },
        quiz: [
            {
                id: 'q-vocab-1-1',
                question: 'Từ nào dùng để chỉ người "tỉ mỉ, kỹ tính trong công việc"?',
                options: ['Outgoing', 'Meticulous', 'Stubborn', 'Anxious'],
                correctIndex: 1,
                explanation: '"Meticulous" có nghĩa là rất cẩn thận, tỉ mỉ đến từng chi tiết nhỏ.'
            }
        ]
    },
    {
        id: 'vocab-2',
        title: 'Family, Relationships & Daily Routines (Gia đình, Mối quan hệ & Thói quen)',
        track: 'vocabulary',
        level: 'Beginner',
        durationMinutes: 6,
        description: 'Từ vựng về các mối quan hệ thân tộc, bạn bè và nhịp sống sinh hoạt hàng ngày.',
        content: {
            theory: 'Hệ thống từ vựng miêu tả các cấp bậc quan hệ xã hội và nề nếp sinh hoạt cá nhân.',
            vocabularyList: [
                {id: 'v-2-1', word: 'Immediate family', phonetic: '/ɪˈmiː.di.ət ˈfæm.əl.i/', meaning: 'Gia đình ruột thịt (bố mẹ, con cái, anh chị em)', example: 'My immediate family always gathers for dinner on weekends.'},
                {id: 'v-2-2', word: 'Acquaintance', phonetic: '/əˈkweɪn.təns/', meaning: 'Người quen sơ (chưa phải bạn thân)', example: 'He is just an office acquaintance, not a close friend.'},
                {id: 'v-2-3', word: 'Establish a routine', phonetic: '/ɪˈstæb.lɪʃ ə ruːˈtiːn/', meaning: 'Thiết lập nề nếp, thói quen sinh hoạt', example: 'It is vital to establish a healthy daily routine for productivity.'},
                {id: 'v-2-4', word: 'Extended family', phonetic: '/ɪkˈstɛn.dɪd ˈfæm.əl.i/', meaning: 'Gia đình lớn (ông bà, cô chú, họ hàng)', example: 'We host a grand reunion for our extended family every Tet.'},
                {id: 'v-2-5', word: 'Bond', phonetic: '/bɑːnd/', meaning: 'Mối dây liên kết, tình cảm gắn bó', example: 'Sharing hardships built a strong bond between them.'},
                {id: 'v-2-6', word: 'Hit the sack', phonetic: '/hɪt ðə sæk/', meaning: 'Đi ngủ (thành ngữ thông dụng)', example: 'I am exhausted; it is time to hit the sack.'}
            ],
            examples: ['She maintains a strict morning routine to balance work and family life.'],
            tips: ['Sử dụng cụm "close-knit family" để miêu tả một gia đình gắn bó khăng khít.']
        },
        quiz: [
            {
                id: 'q-vocab-2-1',
                question: 'Cụm từ nào chỉ "gia đình ruột thịt" trong tiếng Anh?',
                options: ['Extended family', 'Immediate family', 'Royal family', 'Foster family'],
                correctIndex: 1,
                explanation: '"Immediate family" dùng để chỉ các thành viên ruột thịt trực hệ trong nhà.'
            }
        ]
    },

    // 2. LEISURE & ENTERTAINMENT
    {
        id: 'vocab-3',
        title: 'Hobbies, Gaming & Digital Entertainment (Giải trí, Sở thích & Trò chơi số)',
        track: 'vocabulary',
        level: 'Intermediate',
        durationMinutes: 7,
        description: 'Từ vựng phong phú về sở thích cá nhân, thể thao, gaming và các hình thức giải trí số.',
        content: {
            theory: 'Các thuật ngữ hiện đại khi thảo luận về thời gian rảnh rỗi, nghệ thuật và thế giới trò chơi điện tử.',
            vocabularyList: [
                {id: 'v-3-1', word: 'Immersive', phonetic: '/ɪˈmɝː.sɪv/', meaning: 'Đắm chìm, trải nghiệm chân thực (game/VR)', example: 'Modern open-world games offer highly immersive storytelling.'},
                {id: 'v-3-2', word: 'Passionate about', phonetic: '/ˈpæʃ.ən.ət əˈbaʊt/', meaning: 'Có niềm đam mê lớn với cái gì', example: 'She is deeply passionate about digital illustration.'},
                {id: 'v-3-3', word: 'Unwind', phonetic: '/ʌnˈwaɪnd/', meaning: 'Thư giãn, xả stress sau giờ làm việc', example: 'Listening to Lo-Fi music helps me unwind after a hectic day.'},
                {id: 'v-3-4', word: 'Avid reader', phonetic: '/ˈæv.ɪd ˈriː.dɚ/', meaning: 'Người đọc sách cuồng nhiệt, ham đọc', example: 'As an avid reader, he finishes three books a week.'},
                {id: 'v-3-5', word: 'Adrenaline rush', phonetic: '/əˈdrɛn.ə.lɪn rʌʃ/', meaning: 'Cảm giác phấn khích, hồi hộp tột độ', example: 'Extreme sports give participants a huge adrenaline rush.'},
                {id: 'v-3-6', word: 'Pastime', phonetic: '/ˈpæs.taɪm/', meaning: 'Trò tiêu khiển, sở thích giải trí', example: 'Gardening is her favorite pastime during weekends.'}
            ],
            examples: ['Gaming and streaming have evolved into mainstream digital entertainment.'],
            tips: ['Thay thế "I like..." bằng "I am keen on..." hoặc "I am into..." để bài viết/nói tự nhiên và ghi điểm cao hơn.']
        },
        quiz: [
            {
                id: 'q-vocab-3-1',
                question: 'Từ nào miêu tả trải nghiệm trò chơi điện tử hoặc thực tế ảo khiến người chơi có cảm giác như đang hòa mình vào thế giới đó?',
                options: ['Tedious', 'Immersive', 'Monotonous', 'Superficial'],
                correctIndex: 1,
                explanation: '"Immersive" có nghĩa là nhập vai, mang lại cảm giác đắm chìm tuyệt đối.'
            }
        ]
    },

    // 3. TRAVEL & TRANSPORTATION
    {
        id: 'vocab-4',
        title: 'Travel, Commuting & Airport Procedures (Du lịch, Di chuyển & Thủ tục sân bay)',
        track: 'vocabulary',
        level: 'Intermediate',
        durationMinutes: 8,
        description: 'Từ vựng chuyên ngành về phương tiện công cộng, giao thông đô thị và thủ tục xuất nhập cảnh.',
        content: {
            theory: 'Hệ thống từ vựng thiết yếu phục vụ cho các chuyến du lịch quốc tế và di chuyển hàng ngày.',
            vocabularyList: [
                {id: 'v-4-1', word: 'Rush hour', phonetic: '/ˈrʌʃ ˌaʊr/', meaning: 'Giờ cao điểm giao thông', example: 'I always try to leave early to avoid the morning rush hour.'},
                {id: 'v-4-2', word: 'Boarding pass', phonetic: '/ˈbɔːr.dɪŋ pæs/', meaning: 'Thẻ lên máy bay', example: 'Please keep your passport and boarding pass ready at the gate.'},
                {id: 'v-4-3', word: 'Itinerary', phonetic: '/aɪˈtɪn.ə.rer.i/', meaning: 'Lịch trình chi tiết chuyến đi', example: 'We should review our travel itinerary before heading to the airport.'},
                {id: 'v-4-4', word: 'Jet lag', phonetic: '/ˈdʒɛt ˌlæɡ/', meaning: 'Triệu chứng mệt mỏi do lệch múi giờ', example: 'It took me two days to recover from jet lag after flying to the US.'},
                {id: 'v-4-5', word: 'Luggage allowance', phonetic: '/ˈlʌɡ.ɪdʒ əˈlaʊ.əns/', meaning: 'Hạn mức hành lý được mang theo', example: 'Make sure your suitcase is within the airline luggage allowance.'},
                {id: 'v-4-6', word: 'Customs declaration', phonetic: '/ˈkʌs.təmz dɛk.ləˈreɪ.ʃən/', meaning: 'Tờ khai hải quan', example: 'Passengers must fill out a customs declaration form upon arrival.'}
            ],
            examples: ['Commuting via public transit significantly reduces urban traffic congestion.'],
            tips: ['Nhớ phân biệt "luggage" (UK) và "baggage" (US); cả hai đều là danh từ không đếm được.']
        },
        quiz: [
            {
                id: 'q-vocab-4-1',
                question: 'Thuật ngữ nào chỉ tình trạng mệt mỏi do thay đổi múi giờ khi đi máy bay đường dài?',
                options: ['Culture shock', 'Jet lag', 'Homesickness', 'Insomnia'],
                correctIndex: 1,
                explanation: '"Jet lag" là hiện tượng mệt mỏi, rối loạn sinh học do lệch múi giờ.'
            }
        ]
    },

    // 4. EDUCATION & WORK
    {
        id: 'vocab-5',
        title: 'Jobs, Careers & Office Environment (Nghề nghiệp, Sự nghiệp & Công sở)',
        track: 'vocabulary',
        level: 'Intermediate',
        durationMinutes: 8,
        description: 'Từ vựng nâng cao về môi trường văn phòng, quản lý doanh nghiệp, tuyển dụng và thăng tiến.',
        content: {
            theory: 'Các từ vựng chuyên nghiệp được sử dụng phổ biến trong môi trường công sở và kinh doanh.',
            vocabularyList: [
                {id: 'v-5-1', word: 'Deadline', phonetic: '/ˈded.laɪn/', meaning: 'Hạn chót hoàn thành nhiệm vụ', example: 'Our team worked overtime to meet the project deadline.'},
                {id: 'v-5-2', word: 'Colleague', phonetic: '/ˈkɑː.liːɡ/', meaning: 'Đồng nghiệp cùng cơ quan', example: 'My colleagues are supportive and collaborative.'},
                {id: 'v-5-3', word: 'Promotion', phonetic: '/prəˈmoʊ.ʃən/', meaning: 'Sự thăng chức, đề bạt', example: 'Her outstanding leadership earned her a well-deserved promotion.'},
                {id: 'v-5-4', word: 'Entrepreneur', phonetic: '/ˌɑːn.trə.prəˈnɝː/', meaning: 'Doanh nhân, nhà khởi nghiệp', example: 'Successful entrepreneurs embrace risks and innovate constantly.'},
                {id: 'v-5-5', word: 'Work-life balance', phonetic: '/ˌwɝːk ˈlaɪf ˈbæl.əns/', meaning: 'Sự cân bằng giữa công việc và cuộc sống', example: 'Tech companies strive to offer good work-life balance for staff.'},
                {id: 'v-5-6', word: 'Constructive feedback', phonetic: '/kənˈstrʌk.tɪv ˈfiːd.bæk/', meaning: 'Ý kiến đóng góp mang tính xây dựng', example: 'Managers should give constructive feedback during performance reviews.'}
            ],
            examples: ['Thriving in a dynamic corporate environment requires constant skill upgrading.'],
            tips: ['Sử dụng cụm "climb the career ladder" để nói về quá trình thăng tiến trong sự nghiệp.']
        },
        quiz: [
            {
                id: 'q-vocab-5-1',
                question: 'Cụm từ nào chỉ sự cân bằng giữa thời gian làm việc và đời sống cá nhân?',
                options: ['Workaholic lifestyle', 'Work-life balance', 'Job burnout', 'Career path'],
                correctIndex: 1,
                explanation: '"Work-life balance" chỉ trạng thái cân bằng giữa công việc và đời sống riêng.'
            }
        ]
    },

    // 5. HEALTH & SCIENCE
    {
        id: 'vocab-6',
        title: 'Health, Wellness & Technology (Sức khỏe, Y tế & Công nghệ số)',
        track: 'vocabulary',
        level: 'Intermediate',
        durationMinutes: 8,
        description: 'Từ vựng về sức khỏe thể chất/tinh thần, y khoa, trí tuệ nhân tạo và công nghệ thông tin.',
        content: {
            theory: 'Hệ thống từ vựng chuyên môn về y tế dự phòng và những đột phá công nghệ hiện đại.',
            vocabularyList: [
                {id: 'v-6-1', word: 'Well-being', phonetic: '/ˈwelˌbiː.ɪŋ/', meaning: 'Sự khỏe mạnh toàn diện (thể chất & tinh thần)', example: 'Regular exercise and a balanced diet promote overall well-being.'},
                {id: 'v-6-2', word: 'Symptom', phonetic: '/ˈsɪmp.təm/', meaning: 'Triệu chứng bệnh lý', example: 'Persistent coughing and fever are primary symptoms of the flu.'},
                {id: 'v-6-3', word: 'Innovation', phonetic: '/ˌɪn.əˈveɪ.ʃən/', meaning: 'Sự đổi mới, sáng kiến công nghệ', example: 'Technological innovations have transformed global communication.'},
                {id: 'v-6-4', word: 'Artificial Intelligence', phonetic: '/ˌɑːr.təˈfɪʃ.əl ɪnˈtel.ə.dʒəns/', meaning: 'Trí tuệ nhân tạo (AI)', example: 'AI tools are rapidly changing software engineering practices.'},
                {id: 'v-6-5', word: 'Sedentary lifestyle', phonetic: '/ˈsɛd.ən.ter.i ˈlaɪf.staɪl/', meaning: ' lối sống ít vận động', example: 'A sedentary lifestyle can lead to various chronic health issues.'},
                {id: 'v-6-6', word: 'Cutting-edge', phonetic: '/ˌkʌt.ɪŋ ˈɛdʒ/', meaning: 'Hiện đại nhất, tối tân nhất (công nghệ)', example: 'Our engineering team develops cutting-edge cloud architecture.'}
            ],
            examples: ['Integrating tech wellness apps helps monitor physical health metrics daily.'],
            tips: ['"Cutting-edge technology" là cụm từ ghi điểm mạnh khi viết luận về công nghệ.']
        },
        quiz: [
            {
                id: 'q-vocab-6-1',
                question: 'Thuật ngữ nào chỉ một lối sống ngồi nhiều, ít hoạt động thể chất?',
                options: ['Active lifestyle', 'Sedentary lifestyle', 'Nomadic lifestyle', 'Hectic lifestyle'],
                correctIndex: 1,
                explanation: '"Sedentary lifestyle" là lối sống tĩnh tại, ít vận động.'
            }
        ]
    },

    // 6. ENVIRONMENT & NATURE
    {
        id: 'vocab-7',
        title: 'Environment, Climate & Natural Disasters (Môi trường, Khí hậu & Thiên tai)',
        track: 'vocabulary',
        level: 'Intermediate',
        durationMinutes: 7,
        description: 'Từ vựng học thuật về sinh thái học, biến đổi khí hậu, năng lượng sạch và bảo vệ thiên nhiên.',
        content: {
            theory: 'Các từ khóa quan trọng thường xuyên xuất hiện trong các bài thi IELTS/TOEFL về chủ đề môi trường.',
            vocabularyList: [
                {id: 'v-7-1', word: 'Sustainable', phonetic: '/səˈsteɪ.nə.bəl/', meaning: 'Bền vững, thân thiện với môi trường', example: 'Cities must adopt sustainable urban planning strategies.'},
                {id: 'v-7-2', word: 'Deforestation', phonetic: '/ˌdiːˌfɔːr.əˈsteɪ.ʃən/', meaning: 'Nạn tàn phá rừng', example: 'Deforestation severely threatens endangered wildlife habitats.'},
                {id: 'v-7-3', word: 'Carbon footprint', phonetic: '/ˈkɑːr.bən ˌfʊt.prɪnt/', meaning: 'Dấu chân carbon (lượng khí thải CO2)', example: 'Switching to electric vehicles helps reduce personal carbon footprints.'},
                {id: 'v-7-4', word: 'Renewable energy', phonetic: '/rɪˈnuː.ə.bəl ˈɛn.ɚ.dʒi/', meaning: 'Năng lượng tái tạo (gió, mặt trời)', example: 'Governments are investing heavily in renewable energy sources.'},
                {id: 'v-7-5', word: 'Biodiversity', phonetic: '/ˌbaɪ.oʊ.dɪˈvɝː.sə.t̬i/', meaning: 'Đa dạng sinh học', example: 'Protecting tropical rainforests is crucial for preserving biodiversity.'},
                {id: 'v-7-6', word: 'Global warming', phonetic: '/ˌɡloʊ.bəl ˈwɔːr.mɪŋ/', meaning: 'Sự nóng lên toàn cầu', example: 'Melting polar ice caps are a direct consequence of global warming.'}
            ],
            examples: ['Eco-friendly practices play an indispensable role in combating climate change.'],
            tips: ['Sử dụng từ "mitigate" (giảm thiểu) đi kèm với "climate change" hoặc "pollution" để tăng tính trang trọng.']
        },
        quiz: [
            {
                id: 'q-vocab-7-1',
                question: 'Thuật ngữ nào chỉ hiện tượng giảm sút hoặc mất đi các loài động thực vật khác nhau trong tự nhiên?',
                options: ['Biodiversity loss', 'Urbanization', 'Deforestation', 'Consumerism'],
                correctIndex: 0,
                explanation: '"Biodiversity loss" (Sự suy giảm đa dạng sinh học).'
            }
        ]
    },

    // 7. SOCIETY, CULTURE & ABSTRACT TOPICS
    {
        id: 'vocab-8',
        title: 'Society, Finance & Consumerism (Xã hội, Tài chính & Chủ nghĩa tiêu dùng)',
        track: 'vocabulary',
        level: 'Advanced',
        durationMinutes: 8,
        description: 'Từ vựng cấp độ cao về các vấn đề kinh tế xã hội, quản lý tài chính cá nhân và đô thị hóa.',
        content: {
            theory: 'Hệ thống từ vựng chuyên sâu phục vụ cho việc bàn luận các vấn đề vĩ mô và phân tích xã hội.',
            vocabularyList: [
                {id: 'v-8-1', word: 'Consumerism', phonetic: '/kənˈsuː.mər.ɪ.zəm/', meaning: 'Chủ nghĩa tiêu dùng vật chất', example: 'Modern consumerism often promotes impulse buying and waste.'},
                {id: 'v-8-2', word: 'Budgeting', phonetic: '/ˈbʌdʒ.ə.tɪŋ/', meaning: 'Kỹ năng lập kế hoạch tài chính, ngân sách', example: 'Smart budgeting is the key to achieving long-term financial freedom.'},
                {id: 'v-8-3', word: 'Urbanization', phonetic: '/ˌɜːr.bən.əˈzeɪ.ʃən/', meaning: 'Quá trình đô thị hóa', example: 'Rapid urbanization brings economic opportunities alongside traffic strain.'},
                {id: 'v-8-4', word: 'Socioeconomic status', phonetic: '/ˌsoʊ.si.oʊˌek.əˈnɑː.mɪk ˈstæt̬.əs/', meaning: 'Địa vị kinh tế xã hội', example: 'Education plays a vital role in bridging socioeconomic gaps.'},
                {id: 'v-8-5', word: 'Cultural heritage', phonetic: '/ˈkʌl.tʃər.əl ˈhɛr.ɪ.tɪdʒ/', meaning: 'Di sản văn hóa truyền thống', example: 'Preserving our cultural heritage is a shared responsibility.'},
                {id: 'v-8-6', word: 'Financial literacy', phonetic: '/faɪˈnæn.ʃəl ˈlɪt̬.ɚ.ə.si/', meaning: 'Kiến thức và năng lực tài chính', example: 'Schools should teach basic financial literacy to teenagers.'}
            ],
            examples: ['Analyzing sociological trends helps policymakers address urban poverty effectively.'],
            tips: ['Các từ như "socioeconomic", "urbanization", hay "consumerism" rất đắt giá khi viết bài luận học thuật.']
        },
        quiz: [
            {
                id: 'q-vocab-8-1',
                question: 'Thuật ngữ nào chỉ sự hiểu biết và kỹ năng quản lý tiền bạc, tài chính cá nhân?',
                options: ['Financial literacy', 'Consumerism', 'Urbanization', 'Economic recession'],
                correctIndex: 0,
                explanation: '"Financial literacy" là năng lực hiểu biết và quản lý tài chính cá nhân hiệu quả.'
            }
        ]
    }
];