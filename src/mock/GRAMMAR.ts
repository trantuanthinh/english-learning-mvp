import type {Lesson} from "../types";

export const GRAMMAR_DATA: Lesson[] = [
  {
    id: 'les-gram-01',
    title: 'Thì Hiện Tại Đơn (Present Simple)',
    track: 'grammar',
    level: 'beginner',
    durationMinutes: 15,
    description: 'Nắm vững cấu trúc S + V(s/es), cách chia động từ và dấu hiệu nhận biết thì hiện tại đơn.',
    content: {
      theory: 'Thì Hiện Tại Đơn dùng để diễn tả thói quen hàng ngày, sự thật hiển nhiên hoặc lịch trình cố định.',
      examples: [
        'She goes to school every day.',
        'The sun rises in the East.',
        'Do you like coffee?'
      ]
    },
    questionIds: ['q-gram-01', 'q-gram-02', 'q-gram-03']
  },
  {
    id: 'les-gram-02',
    title: 'Thì Quá Khứ Đơn (Past Simple)',
    track: 'grammar',
    level: 'beginner',
    durationMinutes: 15,
    description: 'Cách sử dụng động từ có quy tắc (-ed) và bất quy tắc để nói về các sự việc đã kết thúc trong quá quá.',
    content: {
      theory: 'Dùng diễn tả hành động đã xảy ra và kết thúc hoàn toàn trong quá quá tại một thời điểm xác định.',
      examples: [
        'I visited London last summer.',
        'They didn\'t watch the movie yesterday.',
        'What time did you wake up this morning?'
      ]
    },
    questionIds: ['q-gram-04', 'q-gram-05']
  },
  {
    id: 'les-gram-03',
    title: 'Thì Hiện Tại Hoàn Thành (Present Perfect)',
    track: 'grammar',
    level: 'intermediate',
    durationMinutes: 20,
    description: 'Công thức S + have/has + V3/ed và cách phân biệt với thì Quá khứ đơn.',
    content: {
      theory: 'Diễn tả hành động bắt đầu trong quá quá, kéo dài đến hiện tại và có thể tiếp tục ở tương lai, hoặc trải nghiệm đã từng làm.',
      examples: [
        'I have lived in Hanoi for 5 years.',
        'She has already finished her homework.',
        'Have you ever visited Japan?'
      ]
    },
    questionIds: ['q-gram-06', 'q-gram-07']
  }
];