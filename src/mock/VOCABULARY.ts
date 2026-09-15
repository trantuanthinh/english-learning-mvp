import type {Lesson} from "../types";

export const VOCABULARY_DATA: Lesson[] = [
    {
        id: 'les-vocab-01',
        title: 'Từ vựng chủ đề Du lịch (Travel & Transportation)',
        track: 'vocabulary',
        level: 'beginner',
        durationMinutes: 12,
        description: 'Học các từ vựng thiết yếu khi đi sân bay, đặt phòng khách sạn và di chuyển phương tiện công cộng.',
        content: {
            theory: 'Bộ từ vựng quan trọng giúp bạn tự tin giao tiếp khi đi du lịch nước ngoài.',
            vocabularyList: [
                {word: 'Boarding pass', meaning: 'Thẻ lên máy bay', phonetic: '/ˈbɔː.dɪŋ ˌpɑːs/'},
                {word: 'Luggage', meaning: 'Hành lý', phonetic: '/ˈlʌɡ.ɪdʒ/'},
                {word: 'Accommodation', meaning: 'Chỗ ở / Khách sạn', phonetic: '/əˌkɒm.əˈdeɪ.ʃən/'},
                {word: 'Destination', meaning: 'Điểm đến', phonetic: '/ˌdes.tɪˈneɪ.ʃən/'}
            ],
            examples: [
                'Please show your boarding pass at gate 4.',
                'We arrived at our destination after a 5-hour drive.'
            ]
        },
        questionIds: ['q-vocab-01', 'q-vocab-02']
    },
    {
        id: 'les-vocab-02',
        title: 'Từ vựng Chủ đề Ẩm thực (Food & Dining)',
        track: 'vocabulary',
        level: 'beginner',
        durationMinutes: 12,
        description: 'Các từ vựng về món ăn, hương vị và câu giao tiếp thông dụng tại nhà hàng.',
        content: {
            theory: 'Từ vựng gọi món, mô tả khẩu vị và thanh toán hóa đơn.',
            vocabularyList: [
                {word: 'Appetizer', meaning: 'Món khai vị', phonetic: '/ˈæp.ə.taɪ.zər/'},
                {word: 'Delicious', meaning: 'Ngon miệng', phonetic: '/dɪˈlɪʃ.əs/'},
                {word: 'Receipt', meaning: 'Hóa đơn thanh toán', phonetic: '/rɪˈsiːt/'},
                {word: 'Vegetarian', meaning: 'Ăn chay', phonetic: '/ˌvedʒ.ɪˈteə.ri.ən/'}
            ],
            examples: [
                'Would you like to order an appetizer first?',
                'Could we have the receipt, please?'
            ]
        },
        questionIds: ['q-vocab-03', 'q-vocab-04']
    },
    {
        id: 'les-vocab-03',
        title: 'Từ vựng Công sở & Kinh doanh (Business & Office)',
        track: 'vocabulary',
        level: 'intermediate',
        durationMinutes: 18,
        description: 'Từ vựng dùng trong cuộc họp, gửi email công việc và thảo luận hợp đồng.',
        content: {
            theory: 'Từ vựng tiếng Anh chuyên ngành thương mại dành cho môi trường làm việc chuyên nghiệp.',
            vocabularyList: [
                {word: 'Deadline', meaning: 'Hạn chót', phonetic: '/ˈded.laɪn/'},
                {word: 'Colleague', meaning: 'Đồng nghiệp', phonetic: '/ˈkɒl.iːɡ/'},
                {word: 'Negotiate', meaning: 'Đàm phán / Thương lượng', phonetic: '/nəˈɡəʊ.ʃi.eɪt/'},
                {word: 'Proposal', meaning: 'Đề xuất / Bản kiến nghị', phonetic: '/prəˈpəʊ.zəl/'}
            ],
            examples: [
                'We need to submit the proposal before the deadline.',
                'He is negotiating a new contract with the client.'
            ]
        },
        questionIds: ['q-vocab-05']
    }
];