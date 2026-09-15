import type {Lesson} from "../types";

export const VOCABULARY_DATA: Lesson[] = [
    {
        id: "vocab-family-relationships",
        title: "Family & Relationships",
        track: "vocabulary",
        level: "beginner",
        durationMinutes: 10,
        description: "Learn essential vocabulary to talk about your family members, relatives, and close personal relationships.",
        content: {
            theory: `
This lesson covers foundational words for describing family structures and interpersonal connections. These terms are frequently used in everyday introductions, personal essays, and basic conversational prompts.
      `,
            vocabularyList: [
                {word: "relative", meaning: "họ hàng", phonetic: "/ˈrelətɪv/"},
                {word: "sibling", meaning: "anh chị em ruột", phonetic: "/ˈsɪblɪŋ/"},
                {word: "spouse", meaning: "vợ/chồng", phonetic: "/spaʊs/"},
                {word: "generation", meaning: "thế hệ", phonetic: "/ˌdʒenəˈreɪʃən/"},
                {word: "niece", meaning: "cháu gái (con của anh/chị/em)", phonetic: "/niːs/"},
                {word: "nephew", meaning: "cháu trai (con của anh/chị/em)", phonetic: "/ˈnefjuː/"},
                {word: "ancestor", meaning: "tổ tiên", phonetic: "/ˈænsestər/"},
                {word: "offspring", meaning: "con cái, hậu duệ", phonetic: "/ˈɔːfsprɪŋ/"},
                {word: "guardian", meaning: "người giám hộ", phonetic: "/ˈɡɑːrdiən/"},
                {word: "household", meaning: "hộ gia đình", phonetic: "/ˈhaʊshəʊld/"},
                {word: "upbringing", meaning: "sự giáo dục, nuôi nấng", phonetic: "/ˈʌpbrɪŋɪŋ/"}
            ],
            examples: [
                "I have two siblings, an older brother and a younger sister.",
                "Family gatherings usually bring together three generations under one roof.",
                "Good parents provide a loving upbringing for their children.",
                "Many of my relatives live in the countryside.",
                "She is the legal guardian of her young nephew.",
                "The average household size has decreased over the past decade."
            ]
        },
        questionIds: [
            "vocab-q-family-001",
            "vocab-q-family-002",
            "vocab-q-family-003",
            "vocab-q-family-004"
        ]
    },
    {
        id: "vocab-daily-routines",
        title: "Daily Routines",
        track: "vocabulary",
        level: "beginner",
        durationMinutes: 10,
        description: "Master everyday verbs and nouns used to describe daily habits, schedules, and morning or evening workflows.",
        content: {
            theory: `
Describing daily routines is essential for basic communication. Use these verbs and expressions to talk about how you organize your day, from waking up to going to bed.
      `,
            vocabularyList: [
                {word: "schedule", meaning: "lịch trình", phonetic: "/ˈskedʒuːl/"},
                {word: "commute", meaning: "đi lại (đi làm/đi học)", phonetic: "/kəˈmjuːt/"},
                {word: "habit", meaning: "thói quen", phonetic: "/ˈhæbɪt/"},
                {word: "chore", meaning: "việc vặt trong nhà", phonetic: "/tʃɔːr/"},
                {word: "routine", meaning: "thói quen hàng ngày", phonetic: "/ruːˈtiːn/"},
                {word: "prioritize", meaning: "ưu tiên", phonetic: "/praɪˈɔːrɪtaɪz/"},
                {word: "distraction", meaning: "sự xao nhãng", phonetic: "/dɪˈstrækʃən/"},
                {word: "productivity", meaning: "năng suất", phonetic: "/ˌprɑːdʌkˈtɪvəti/"},
                {word: "relax", meaning: "thư giãn", phonetic: "/rɪˈlæks/"},
                {word: "unwind", meaning: "xả stress, thư giãn", phonetic: "/ˌʌnˈwaɪnd/"},
                {word: "punctual", meaning: "đúng giờ", phonetic: "/ˈpʌŋktʃuəl/"}
            ],
            examples: [
                "My daily routine starts at 6 AM every morning.",
                "It takes me forty minutes to commute to work by bus.",
                "Listening to music helps me unwind after a long day.",
                "I try to minimize distractions when studying.",
                "She keeps a strict schedule to manage her time efficiently.",
                "Doing household chores is a shared responsibility."
            ]
        },
        questionIds: [
            "vocab-q-routine-001",
            "vocab-q-routine-002",
            "vocab-q-routine-003",
            "vocab-q-routine-004"
        ]
    },
    {
        id: "vocab-home-furniture",
        title: "Home & Furniture",
        track: "vocabulary",
        level: "beginner",
        durationMinutes: 10,
        description: "Learn terms for rooms, interior design elements, and common pieces of furniture.",
        content: {
            theory: `
This lesson introduces vocabulary related to living spaces, interior items, and home organization. Useful when describing your accommodation or interior styles.
      `,
            vocabularyList: [
                {word: "apartment", meaning: "căn hộ", phonetic: "/əˈpɑːrtmənt/"},
                {word: "furniture", meaning: "đồ nội thất", phonetic: "/ˈfɜːrnɪtʃər/"},
                {word: "appliances", meaning: "thiết bị gia dụng", phonetic: "/əˈplaɪənsɪz/"},
                {word: "renovation", meaning: "sự cải tạo, sửa sang", phonetic: "/ˌrenəˈveɪʃən/"},
                {word: "spacious", meaning: "rộng rãi", phonetic: "/ˈspeɪʃəs/"},
                {word: "cosy", meaning: "ấm cúng", phonetic: "/ˈkəʊzi/"},
                {word: "balcony", meaning: "ban công", phonetic: "/ˈbælkəni/"},
                {word: "corridor", meaning: " hành lang", phonetic: "/ˈkɔːrɪdɔːr/"},
                {word: "interior", meaning: "nội thất, bên trong", phonetic: "/ɪnˈtɪəriər/"},
                {word: "tenant", meaning: "người thuê nhà", phonetic: "/ˈtenənt/"},
                {word: "landlord", meaning: "chủ nhà cho thuê", phonetic: "/ˈlændlɔːrd/"}
            ],
            examples: [
                "We are planning a major home renovation this summer.",
                "Their new apartment is small but very cosy.",
                "Modern kitchen appliances save a lot of cooking time.",
                "The living room has a spacious balcony overlooking the park.",
                "The landlord agreed to lower the monthly rent for the tenant.",
                "They bought second-hand furniture to save money."
            ]
        },
        questionIds: [
            "vocab-q-home-001",
            "vocab-q-home-002",
            "vocab-q-home-003",
            "vocab-q-home-004"
        ]
    },
    {
        id: "vocab-food-cooking",
        title: "Food & Cooking",
        track: "vocabulary",
        level: "beginner",
        durationMinutes: 12,
        description: "Expand your culinary vocabulary with terms for ingredients, cooking methods, and dietary preferences.",
        content: {
            theory: `
Food and dining are popular topics in conversation and IELTS Speaking Part 1. Learn precise terms for ingredients, flavors, and cooking processes.
      `,
            vocabularyList: [
                {word: "ingredient", meaning: "nguyên liệu", phonetic: "/ɪnˈɡriːdiənt/"},
                {word: "recipe", meaning: "công thức nấu ăn", phonetic: "/ˈresəpi/"},
                {word: "nutrition", meaning: "dinh dưỡng", phonetic: "/nuˈtrɪʃən/"},
                {word: "organic", meaning: "hữu cơ", phonetic: "/ɔːrˈɡænɪk/"},
                {word: "balanced", meaning: "cân bằng", phonetic: "/ˈbælənst/"},
                {word: "vegetarian", meaning: "người ăn chay", phonetic: "/ˌvedʒəˈteriən/"},
                {word: "prepare", meaning: "chuẩn bị", phonetic: "/prɪˈper/"},
                {word: "delicious", meaning: "ngon miệng", phonetic: "/dɪˈlɪʃəs/"},
                {word: "appetite", meaning: "sự thèm ăn", phonetic: "/ˈæpɪtaɪt/"},
                {word: "beverage", meaning: "đồ uống", phonetic: "/ˈbevərɪdʒ/"},
                {word: "homemade", meaning: "làm tại nhà", phonetic: "/ˌhəʊmˈmeɪd/"}
            ],
            examples: [
                "Fresh organic vegetables are essential for a healthy diet.",
                "She followed a traditional recipe to bake the cake.",
                "A balanced diet provides all necessary vitamins and minerals.",
                "He has a great appetite after working out in the gym.",
                "Nothing beats the taste of warm homemade soup.",
                "The restaurant offers a wide selection of beverages."
            ]
        },
        questionIds: [
            "vocab-q-food-001",
            "vocab-q-food-002",
            "vocab-q-food-003",
            "vocab-q-food-004"
        ]
    },
    {
        id: "vocab-shopping",
        title: "Shopping & Consumerism",
        track: "vocabulary",
        level: "beginner",
        durationMinutes: 12,
        description: "Learn useful expressions for buying goods, browsing stores, discounts, and consumer behavior.",
        content: {
            theory: `
Shopping vocabulary helps you navigate retail stores, online marketplaces, and discuss consumer spending habits in essays.
      `,
            vocabularyList: [
                {word: "discount", meaning: "giảm giá", phonetic: "/ˈdɪskaʊnt/"},
                {word: "affordable", meaning: "phải chăng, hợp túi tiền", phonetic: "/əˈfɔːrdəbl/"},
                {word: "purchase", meaning: "mua hàng", phonetic: "/ˈpɜːrtʃəs/"},
                {word: "receipt", meaning: "hóa đơn", phonetic: "/rɪˈsiːt/"},
                {word: "refund", meaning: "hoàn tiền", phonetic: "/ˈriːfʌnd/"},
                {word: "consumer", meaning: "người tiêu dùng", phonetic: "/kənˈsuːmər/"},
                {word: "retailer", meaning: "nhà bán lẻ", phonetic: "/ˈriːteɪlər/"},
                {word: "browse", meaning: "xem qua, lướt xem", phonetic: "/braʊz/"},
                {word: "bargain", meaning: "món hời, mặc cả", phonetic: "/ˈbɑːrɡɪn/"},
                {word: "warranty", meaning: "bảo hành", phonetic: "/ˈwɔːrənti/"},
                {word: "checkout", meaning: "quầy thanh toán", phonetic: "/ˈtʃekaʊt/"}
            ],
            examples: [
                "Online retailers offer affordable prices and home delivery.",
                "Keep your receipt in case you need to request a refund.",
                "Many consumers prefer shopping during seasonal discount events.",
                "I found a real bargain at the weekend market.",
                "All electronic devices come with a two-year warranty.",
                "She likes to browse clothing stores without buying anything."
            ]
        },
        questionIds: [
            "vocab-q-shop-001",
            "vocab-q-shop-002",
            "vocab-q-shop-003",
            "vocab-q-shop-004"
        ]
    },
    {
        id: "vocab-travel-tourism",
        title: "Travel & Tourism",
        track: "vocabulary",
        level: "intermediate",
        durationMinutes: 15,
        description: "Master vocabulary for destinations, sightseeing, tourism impacts, and travel planning.",
        content: {
            theory: `
Travel and tourism is a classic IELTS topic. Use these intermediate words to discuss tourist attractions, cultural immersion, and eco-tourism.
      `,
            vocabularyList: [
                {word: "destination", meaning: "điểm đến", phonetic: "/ˌdestɪˈneɪʃən/"},
                {word: "itinerary", meaning: "lịch trình chuyến đi", phonetic: "/aɪˈtɪnəreri/"},
                {word: "accommodation", meaning: "chỗ ở", phonetic: "/əˌkɑːməˈdeɪʃən/"},
                {word: "sightseeing", meaning: "ngắm cảnh", phonetic: "/ˈsaɪtsiːɪŋ/"},
                {word: "souvenir", meaning: "lưu niệm", phonetic: "/ˌsuːvəˈnɪər/"},
                {word: "expedition", meaning: "cuộc thám hiểm", phonetic: "/ˌekspəˈdɪʃən/"},
                {word: "explorer", meaning: "nhà thám hiểm", phonetic: "/ɪkˈsplɔːrər/"},
                {word: "wanderlust", meaning: "niềm đam mê xê dịch", phonetic: "/ˈwɑːndərlʌst/"},
                {word: "backpacker", meaning: "khách du lịch ba lô", phonetic: "/ˈbækpækər/"},
                {word: "hospitality", meaning: "sự mến khách", phonetic: "/ˌhɑːspɪˈtæləti/"},
                {word: "eco-tourism", meaning: "du lịch sinh thái", phonetic: "/ˈiːkoʊˌtʊrɪzəm/"},
                {word: "itinerary", meaning: "lịch trình", phonetic: "/aɪˈtɪnəreri/"}
            ],
            examples: [
                "Vietnam has become a popular tourist destination for international travelers.",
                "We planned our travel itinerary carefully before departure.",
                "Eco-tourism helps protect local wildlife and support indigenous communities.",
                "The hotel is renowned for its exceptional hospitality.",
                "She bought several handmade souvenirs from local artisans.",
                "Backpackers often seek off-the-beaten-track adventures."
            ]
        },
        questionIds: [
            "vocab-q-travel-001",
            "vocab-q-travel-002",
            "vocab-q-travel-003",
            "vocab-q-travel-004"
        ]
    },
    {
        id: "vocab-education-study",
        title: "Education & Learning",
        track: "vocabulary",
        level: "intermediate",
        durationMinutes: 15,
        description: "Learn academic terms related to school systems, university studies, examinations, and self-improvement.",
        content: {
            theory: `
Education is a core topic in academic writing. These terms will help you discuss teaching methods, curriculum design, and student achievement.
      `,
            vocabularyList: [
                {word: "curriculum", meaning: "chương trình giảng dạy", phonetic: "/kəˈrɪkjələm/"},
                {word: "scholarship", meaning: "học bổng", phonetic: "/ˈskɑːlərʃɪp/"},
                {word: "tuition", meaning: "học phí", phonetic: "/tuˈɪʃən/"},
                {word: "assessment", meaning: "sự đánh giá", phonetic: "/əˈsesmənt/"},
                {word: "enroll", meaning: "ghi danh, nhập học", phonetic: "/ɪnˈrəʊl/"},
                {word: "graduate", meaning: "tốt nghiệp", phonetic: "/ˈɡrædʒuət/"},
                {word: "academic", meaning: "thuộc học thuật", phonetic: "/ˌækəˈdemɪk/"},
                {word: "discipline", meaning: "kỷ luật, môn học", phonetic: "/ˈdɪsəplɪn/"},
                {word: "literacy", meaning: "khả năng đọc viết", phonetic: "/ˈlɪtərəsi/"},
                {word: "pedagogy", meaning: "phương pháp sư phạm", phonetic: "/ˈpedəɡɑːdʒi/"},
                {word: "undergraduate", meaning: "sinh viên đại học chưa tốt nghiệp", phonetic: "/ˌʌndərˈɡrædʒuət/"}
            ],
            examples: [
                "Universities should update their curriculum to match industry needs.",
                "She received a full scholarship for her master's degree.",
                "Rising tuition fees make higher education harder to access.",
                "Continuous assessment is often fairer than a single final exam.",
                "He decided to enroll in an advanced programming course.",
                "Improving digital literacy is vital in modern schools."
            ]
        },
        questionIds: [
            "vocab-q-edu-001",
            "vocab-q-edu-002",
            "vocab-q-edu-003",
            "vocab-q-edu-004"
        ]
    },
    {
        id: "vocab-workplace-careers",
        title: "Jobs & Careers",
        track: "vocabulary",
        level: "intermediate",
        durationMinutes: 15,
        description: "Master professional vocabulary for employment, office roles, career progression, and workplace skills.",
        content: {
            theory: `
Professional communication requires precise career vocabulary. Use these terms to discuss employment contracts, promotions, and work ethics.
      `,
            vocabularyList: [
                {word: "colleague", meaning: "đồng nghiệp", phonetic: "/ˈkɑːliːɡ/"},
                {word: "promotion", meaning: "sự thăng tiến", phonetic: "/prəˈməʊʃən/"},
                {word: "resignation", meaning: "sự từ chức", phonetic: "/ˌrezɪɡˈneɪʃən/"},
                {word: "colleague", meaning: "đồng nghiệp", phonetic: "/ˈkɑːliːɡ/"},
                {word: "compensation", meaning: "sự đền bù, đãi ngộ", phonetic: "/ˌkɑːmpenˈseɪʃən/"},
                {word: "freelancer", meaning: "người làm tự do", phonetic: "/ˈfriːlænsər/"},
                {word: "colleague", meaning: "đồng nghiệp", phonetic: "/ˈkɑːliːɡ/"},
                {word: "workplace", meaning: "nơi làm việc", phonetic: "/ˈwɜːrkpleɪs/"},
                {word: "cv", meaning: "lý lịch sơ yếu", phonetic: "/ˌsiːˈviː/"},
                {word: "interview", meaning: "phỏng vấn", phonetic: "/ˈɪntərvjuː/"},
                {word: "qualification", meaning: "trình độ chuyên môn", phonetic: "/ˌkwɑːlɪfɪˈkeɪʃən/"},
                {word: "productivity", meaning: "năng suất làm việc", phonetic: "/ˌprɑːdʌkˈtɪvəti/"},
                {word: "entrepreneur", meaning: "nhà khởi nghiệp", phonetic: "/ˌɑːntrəprəˈnɜːr/"},
                {word: "colleague", meaning: "đồng nghiệp", phonetic: "/ˈkɑːliːɡ/"}
            ],
            examples: [
                "She hopes to get a promotion by the end of the year.",
                "Good compensation packages attract top talent in the tech industry.",
                "Many young professionals choose to work as freelancers for flexibility.",
                "Candidates must submit their CV and cover letter online.",
                "Entrepreneurs take calculated risks to build successful businesses.",
                "Maintaining a positive workplace culture boosts employee morale."
            ]
        },
        questionIds: [
            "vocab-q-work-001",
            "vocab-q-work-002",
            "vocab-q-work-003",
            "vocab-q-work-004"
        ]
    },
    {
        id: "vocab-health-fitness",
        title: "Health & Fitness",
        track: "vocabulary",
        level: "intermediate",
        durationMinutes: 15,
        description: "Learn vocabulary related to physical well-being, medical care, exercise routines, and mental health.",
        content: {
            theory: `
Health and fitness are frequent topics in everyday conversation and IELTS discussions. Learn terms for physical vitality, medical symptoms, and healthy lifestyles.
      `,
            vocabularyList: [
                {word: "wellbeing", meaning: "sự khỏe mạnh, hạnh phúc", phonetic: "/ˈwelbiːɪŋ/"},
                {word: "symptom", meaning: "triệu chứng", phonetic: "/ˈsɪmptəm/"},
                {word: "diagnosis", meaning: "chẩn đoán", phonetic: "/ˌdaɪəɡˈnəʊsɪs/"},
                {word: "treatment", meaning: "sự điều trị", phonetic: "/ˈtriːtmənt/"},
                {word: "immunity", meaning: "hệ miễn dịch", phonetic: "/ɪˈmjuːnəti/"},
                {word: "metabolism", meaning: "trao đổi chất", phonetic: "/məˈtæbəlɪzəm/"},
                {word: "sedentary", meaning: "ít vận động", phonetic: "/ˈsednteri/"},
                {word: "preventative", meaning: "phòng ngừa", phonetic: "/prɪˈventətɪv/"},
                {word: "recovery", meaning: "sự hồi phục", phonetic: "/rɪˈkʌvəri/"},
                {word: "pharmacy", meaning: "tiệm thuốc", phonetic: "/ˈfɑːrməsi/"},
                {word: "prescription", meaning: "đơn thuốc", phonetic: "/prɪˈskrɪpʃən/"}
            ],
            examples: [
                "Regular exercise and a balanced diet promote overall wellbeing.",
                "A sedentary lifestyle can lead to various health problems.",
                "Early diagnosis of illness increases the chance of successful treatment.",
                "Eating citrus fruits helps boost your immune system.",
                "The doctor wrote a prescription for the patient's cough.",
                "Adequate sleep is vital for speedy muscle recovery."
            ]
        },
        questionIds: [
            "vocab-q-health-001",
            "vocab-q-health-002",
            "vocab-q-health-003",
            "vocab-q-health-004"
        ]
    },
    {
        id: "vocab-environment-pollution",
        title: "Environment & Pollution",
        track: "vocabulary",
        level: "advanced",
        durationMinutes: 18,
        description: "Master high-level environmental vocabulary for discussing pollution, climate change, and sustainability.",
        content: {
            theory: `
Environmental issues are heavily featured in IELTS Writing Task 2. Use advanced terminology to discuss carbon footprints, emissions, and ecological conservation.
      `,
            vocabularyList: [
                {word: "emission", meaning: "khí thải", phonetic: "/ɪˈmɪʃən/"},
                {word: "sustainability", meaning: "sự phát triển bền vững", phonetic: "/səˌsteɪnəˈbɪləti/"},
                {word: "biodiversity", meaning: "đa dạng sinh học", phonetic: "/ˌbaɪoʊdaɪˈvɜːrsəti/"},
                {word: "conservation", meaning: "sự bảo tồn", phonetic: "/ˌkɑːnsərˈveɪʃən/"},
                {word: "deforestation", meaning: "sự phá rừng", phonetic: "/ˌdiːˌfɔːrɪˈsteɪʃən/"},
                {word: "ecosystem", meaning: "hệ sinh thái", phonetic: "/ˈiːkoʊsɪstəm/"},
                {word: "renewable", meaning: "có thể tái tạo", phonetic: "/rɪˈnuːəbl/"},
                {word: "hazard", meaning: "mối nguy hiểm", phonetic: "/ˈhæzərd/"},
                {word: "footprint", meaning: "dấu chân (carbon)", phonetic: "/ˈfʊtprɪnt/"},
                {word: "catastrophe", meaning: "thảm họa", phonetic: "/kəˈtæstrəfi/"},
                {word: "atmosphere", meaning: "bầu khí quyển", phonetic: "/ˈætməsfɪr/"}
            ],
            examples: [
                "Governments must take urgent action to reduce carbon emissions.",
                "Deforestation threatens countless species and damages delicate ecosystems.",
                "Investing in renewable energy sources is key to long-term sustainability.",
                "Plastic waste poses a severe hazard to marine wildlife.",
                "Global warming could lead to ecological catastrophe if ignored.",
                "Wildlife conservation projects protect endangered animals from extinction."
            ]
        },
        questionIds: [
            "vocab-q-env-001",
            "vocab-q-env-002",
            "vocab-q-env-003",
            "vocab-q-env-004"
        ]
    },
    {
        id: "vocab-technology-ai",
        title: "Technology & Artificial Intelligence",
        track: "vocabulary",
        level: "advanced",
        durationMinutes: 18,
        description: "Explore cutting-edge tech vocabulary covering AI, automation, digital security, and modern innovation.",
        content: {
            theory: `
Technology and AI topics appear frequently in modern English exams. Equip yourself with precise terms for algorithms, automation, and data privacy.
      `,
            vocabularyList: [
                {word: "automation", meaning: "sự tự động hóa", phonetic: "/ˌɔːtəˈmeɪʃən/"},
                {word: "algorithm", meaning: "thuật toán", phonetic: "/ˈælɡərɪðəm/"},
                {word: "innovation", meaning: "sự đổi mới, cải tiến", phonetic: "/ˌɪnəˈveɪʃən/"},
                {word: "cybersecurity", meaning: "an ninh mạng", phonetic: "/ˌsaɪbərsɪˈkjʊrəti/"},
                {word: "virtual", meaning: "ảo (thực tế ảo)", phonetic: "/ˈvɜːrtʃuəl/"},
                {word: "integration", meaning: "sự tích hợp", phonetic: "/ˌɪntɪˈɡreɪʃən/"},
                {word: "hardware", meaning: "phần cứng máy tính", phonetic: "/ˈhɑːrdwer/"},
                {word: "software", meaning: "phần mềm", phonetic: "/ˈsɔːftwer/"},
                {word: "gadget", meaning: "thiết bị điện tử nhỏ", phonetic: "/ˈɡædʒɪt/"},
                {word: "infographic", meaning: "đồ họa thông tin", phonetic: "/ˈɪnfəɡræfɪk/"},
                {word: "intellectual", meaning: "thuộc trí tuệ", phonetic: "/ˌɪntəˈlektʃuəl/"}
            ],
            examples: [
                "Artificial intelligence and automation are transforming the modern workforce.",
                "Complex algorithms power recommendation systems on social media.",
                "Robust cybersecurity protects sensitive user data from hackers.",
                "Technological innovation drives economic growth in developing countries.",
                "The seamless integration of software and hardware improves user experience.",
                "Smartphones have become indispensable daily gadgets for millions."
            ]
        },
        questionIds: [
            "vocab-q-tech-001",
            "vocab-q-tech-002",
            "vocab-q-tech-003",
            "vocab-q-tech-004"
        ]
    },
    {
        id: "vocab-society-crime",
        title: "Society & Crime",
        track: "vocabulary",
        level: "advanced",
        durationMinutes: 18,
        description: "Learn formal vocabulary for discussing social issues, legal systems, crime prevention, and justice.",
        content: {
            theory: `
Social and legal vocabulary is essential for essays addressing crime rates, rehabilitation, and government policies.
      `,
            vocabularyList: [
                {word: "legislation", meaning: "luật pháp, sự làm luật", phonetic: "/ˌledʒɪˈsleɪʃən/"},
                {word: "rehabilitation", meaning: "sự cải tạo, phục hồi chức năng", phonetic: "/ˌriːhəˌbɪlɪˈteɪʃən/"},
                {word: "deterrent", meaning: "sự ngăn chặn, răn đe", phonetic: "/dɪˈterənt/"},
                {word: "poverty", meaning: "sự nghèo đói", phonetic: "/ˈpɑːvərti/"},
                {word: "inequality", meaning: "sự bất bình đẳng", phonetic: "/ˌɪnɪˈkwɑːləti/"},
                {word: "offender", meaning: "kẻ phạm tội", phonetic: "/əˈfendər/"},
                {word: "prosecution", meaning: "sự truy tố", phonetic: "/ˌprɑːsɪˈkjuːʃən/"},
                {word: "juvenile", meaning: "vị thành niên", phonetic: "/ˈdʒuːvənl/"},
                {word: "community", meaning: "cộng đồng", phonetic: "/kəˈmjuːnəti/"},
                {word: "prejudice", meaning: "định kiến", phonetic: "/ˈpredʒədɪs/"},
                {word: "penalize", meaning: "xử phạt", phonetic: "/ˈpiːnəlaɪz/"}
            ],
            examples: [
                "Strict legislation helps reduce corporate fraud and corruption.",
                "Prison systems should focus on rehabilitation rather than strict punishment.",
                "Long prison sentences act as a strong deterrent for potential offenders.",
                "Poverty and lack of education often contribute to rising crime rates.",
                "Juvenile delinquency requires specialized counseling and community support.",
                "Governments must implement policies to bridge social inequality."
            ]
        },
        questionIds: [
            "vocab-q-society-001",
            "vocab-q-society-002",
            "vocab-q-society-003",
            "vocab-q-society-004"
        ]
    },
    {
        id: "vocab-academic-cause-effect",
        title: "Academic: Cause & Effect",
        track: "vocabulary",
        level: "advanced",
        durationMinutes: 15,
        description: "Master academic verbs, nouns, and conjunctions used to express causality and logical consequences.",
        content: {
            theory: `
Cause and effect structures are critical for IELTS Writing Task 2 essays and academic reports. Use these precise verbs and nouns to link arguments logically.
      `,
            vocabularyList: [
                {word: "consequence", meaning: "hậu quả", phonetic: "/ˈkɑːnsɪkwens/"},
                {word: "catalyst", meaning: "chất xúc tác, nguyên nhân thúc đẩy", phonetic: "/ˈkætəlɪst/"},
                {word: "trigger", meaning: "gây ra, kích hoạt", phonetic: "/ˈtrɪɡər/"},
                {word: "contribute", meaning: "đóng góp, góp phần", phonetic: "/kənˈtrɪbjuːt/"},
                {word: "originate", meaning: "bắt nguồn", phonetic: "/əˈrɪdʒɪneɪt/"},
                {word: "outcome", meaning: "kết quả", phonetic: "/ˈaʊtkʌm/"},
                {word: "stem from", meaning: "bắt nguồn từ", phonetic: "/stem frʌm/"},
                {word: "provoke", meaning: "khiêu khích, gây ra", phonetic: "/prəˈvəʊk/"},
                {word: "correlation", meaning: "sự tương quan", phonetic: "/ˌkɔːrəˈleɪʃən/"},
                {word: "implication", meaning: "hệ lụy, ý nghĩa ẩn chứa", phonetic: "/ˌɪmplɪˈkeɪʃən/"},
                {word: "catalyze", meaning: "xúc tác, thúc đẩy", phonetic: "/ˈkætəlaɪz/"}
            ],
            examples: [
                "Industrial emissions have severe consequences for global climate stability.",
                "Economic hardship can trigger social unrest in urban areas.",
                "Many health problems stem from poor dietary habits and lack of exercise.",
                "Technological advancements contribute significantly to workplace productivity.",
                "Researchers analyzed the direct correlation between stress and illness.",
                "The new policy had an unexpected outcome on small businesses."
            ]
        },
        questionIds: [
            "vocab-q-cause-001",
            "vocab-q-cause-002",
            "vocab-q-cause-003",
            "vocab-q-cause-004"
        ]
    },
    {
        id: "vocab-academic-collocations",
        title: "Essential Academic Collocations",
        track: "vocabulary",
        level: "advanced",
        durationMinutes: 18,
        description: "Learn high-scoring adjective-noun and verb-noun collocations frequently found in academic English.",
        content: {
            theory: `
Collocations are words that naturally go together. Using advanced collocations in IELTS Writing demonstrates natural fluency and lexical resource.
      `,
            vocabularyList: [
                {word: "make a decision", meaning: "đưa ra quyết định", phonetic: "/meɪk ə dɪˈsɪʒən/"},
                {word: "take responsibility", meaning: "chịu trách nhiệm", phonetic: "/teɪk rɪˌspɑːnsəˈbɪləti/"},
                {word: "heavy traffic", meaning: "giao thông ùn tắc", phonetic: "/ˈhevi ˈtræfɪk/"},
                {word: "strong argument", meaning: "lập luận sắc bén", phonetic: "/strɔːŋ ˈɑːrɡjumənt/"},
                {word: "economic growth", meaning: "tăng trưởng kinh tế", phonetic: "/ˌiːkəˈnɑːmɪk ɡrəʊθ/"},
                {word: "environmental damage", meaning: "tổn hại môi trường", phonetic: "/ɪnˌvaɪrənˈmentəl ˈdæmɪdʒ/"},
                {word: "highly competitive", meaning: "cạnh tranh khốc liệt", phonetic: "/ˈhaɪli kəmˈpetətɪv/"},
                {word: "deeply concerned", meaning: "vô cùng lo lắng", phonetic: "/ˈdiːpli kənˈsɜːrnd/"},
                {word: "raise awareness", meaning: "nâng cao nhận thức", phonetic: "/reɪz əˈwernəs/"},
                {word: "play a role", meaning: "đóng vai trò", phonetic: "/pleɪ ə rəʊl/"},
                {word: "wide range", meaning: "nhiều, đa dạng", phonetic: "/waɪd reɪndʒ/"}
            ],
            examples: [
                "Governments must take responsibility for reducing environmental damage.",
                "The speaker presented a strong argument during the debate.",
                "Job seekers face a highly competitive employment market.",
                "Educational campaigns help raise awareness about mental health.",
                "Technology plays a crucial role in modern communication.",
                "The museum exhibits a wide range of historical artifacts."
            ]
        },
        questionIds: [
            "vocab-q-colloc-001",
            "vocab-q-colloc-002",
            "vocab-q-colloc-003",
            "vocab-q-colloc-004"
        ]
    },
    {
        id: "vocab-phrasal-verbs-common",
        title: "Common Phrasal Verbs",
        track: "vocabulary",
        level: "intermediate",
        durationMinutes: 15,
        description: "Master everyday phrasal verbs used in casual conversation and listening tests.",
        content: {
            theory: `
Phrasal verbs combine a verb with a preposition or adverb to create a new meaning. They are vital for sounding natural in IELTS Speaking.
      `,
            vocabularyList: [
                {word: "give up", meaning: "từ bỏ", phonetic: "/ɡɪv ʌp/"},
                {word: "look forward to", meaning: "trông mong, chờ đợi", phonetic: "/lʊk ˈfɔːrwərd tuː/"},
                {word: "turn down", meaning: "từ chối, vặn nhỏ", phonetic: "/tɜːrn daʊn/"},
                {word: "carry out", meaning: "thực hiện, tiến hành", phonetic: "/ˈkæri aʊt/"},
                {word: "bring about", meaning: "mang lại, gây ra", phonetic: "/brɪŋ əˈbaʊt/"},
                {word: "depend on", meaning: "phụ thuộc vào", phonetic: "/dɪˈpend ɑːn/"},
                {word: "figure out", meaning: "tìm ra, hiểu ra", phonetic: "/ˈfɪɡər aʊt/"},
                {word: "set up", meaning: "thiết lập, thành lập", phonetic: "/set ʌp/"},
                {word: "take care of", meaning: "chăm sóc", phonetic: "/teɪk ker əv/"},
                {word: "put off", meaning: "trì hoãn", phonetic: "/pʊt ɔːf/"},
                {word: "run out of", meaning: "cạn kiệt", phonetic: "/rʌn aʊt əv/"}
            ],
            examples: [
                "Never give up on your dreams, even when challenges arise.",
                "I look forward to hearing from you soon.",
                "Scientists carried out extensive research on renewable energy.",
                "We need to figure out how to solve this technical problem.",
                "She decided to set up her own consulting business.",
                "Don't put off until tomorrow what you can do today."
            ]
        },
        questionIds: [
            "vocab-q-pv-001",
            "vocab-q-pv-002",
            "vocab-q-pv-003",
            "vocab-q-pv-004"
        ]
    },
    {
        id: "vocab-word-families",
        title: "Word Families & Derivations",
        track: "vocabulary",
        level: "advanced",
        durationMinutes: 15,
        description: "Learn how to transform root words into nouns, verbs, adjectives, and adverbs to expand your vocabulary range.",
        content: {
            theory: `
Understanding word families allows you to adapt vocabulary for different grammatical structures in writing and speaking.
      `,
            vocabularyList: [
                {word: "develop", meaning: "phát triển (động từ)", phonetic: "/dɪˈveləp/"},
                {word: "development", meaning: "sự phát triển (danh từ)", phonetic: "/dɪˈveləpmənt/"},
                {word: "developed", meaning: "đã phát triển (tính từ)", phonetic: "/dɪˈveləpt/"},
                {word: "developing", meaning: "đang phát triển (tính từ)", phonetic: "/dɪˈveləpɪŋ/"},
                {word: "economy", meaning: "nền kinh tế (danh từ)", phonetic: "/ɪˈkɑːnəmi/"},
                {word: "economic", meaning: "thuộc kinh tế (tính từ)", phonetic: "/ˌiːkəˈnɑːmɪk/"},
                {word: "economical", meaning: "tiết kiệm (tính từ)", phonetic: "/ˌiːkəˈnɑːmɪkl/"},
                {word: "economically", meaning: "về mặt kinh tế (trạng từ)", phonetic: "/ˌiːkəˈnɑːmɪkli/"},
                {word: "success", meaning: "sự thành công (danh từ)", phonetic: "/səkˈses/"},
                {word: "succeed", meaning: "thành công (động từ)", phonetic: "/səkˈsiːd/"},
                {word: "successful", meaning: "thành công (tính từ)", phonetic: "/səkˈsesfl/"}
            ],
            examples: [
                "Rapid economic development requires careful urban planning.",
                "Developing nations face unique challenges in infrastructure.",
                "Driving an electric car is much more economical in the long run.",
                "Hard work and dedication are essential to succeed in life.",
                "The project was a huge commercial success.",
                "Economically, the region has grown significantly over the past decade."
            ]
        },
        questionIds: [
            "vocab-q-wf-001",
            "vocab-q-wf-002",
            "vocab-q-wf-003",
            "vocab-q-wf-004"
        ]
    }
];