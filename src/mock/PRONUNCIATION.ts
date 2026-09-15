import type {Lesson} from "../types";

export const PRONUNCIATION_DATA: Lesson[] = [
    {
        id: 'les-pron-01',
        title: 'Phân biệt âm /s/ và /ʃ/',
        track: 'pronunciation',
        level: 'beginner',
        durationMinutes: 10,
        description: 'Hướng dẫn khẩu hình miệng và mẹo phát âm chuẩn hai phụ âm dễ nhầm lẫn /s/ (sea) và /ʃ/ (she).',
        content: {
            theory: 'Âm /s/ là âm xát vô thanh với khẩu hình miệng cười mỉm, luồng khí đi qua kẽ răng. Âm /ʃ/ yêu cầu tròn môi, đẩy hơi mạnh hơn.',
            examples: [
                'sea /siː/ vs she /ʃiː/',
                'sip /sɪp/ vs ship /ʃɪp/',
                'sell /sel/ vs shell /ʃel/'
            ]
        },
        questionIds: ['q-pron-01', 'q-pron-02']
    },
    {
        id: 'les-pron-02',
        title: 'Phân biệt âm /r/ và /l/',
        track: 'pronunciation',
        level: 'intermediate',
        durationMinutes: 12,
        description: 'Khắc phục lỗi phát âm cuộn lưỡi với âm /r/ và uốn cong đầu lưỡi chạm vòm miệng với âm /l/.',
        content: {
            theory: 'Khi phát âm /l/, đầu lưỡi chạm vào lợi phía sau răng cửa trên. Khi phát âm /r/, lưỡi hơi cong về phía sau nhưng KHÔNG chạm vào bất kỳ phần nào trong miệng.',
            examples: [
                'light /laɪt/ vs right /raɪt/',
                'lock /lɒk/ vs rock /rɒk/',
                'fly /flaɪ/ vs fry /fraɪ/'
            ]
        },
        questionIds: ['q-pron-03', 'q-pron-04']
    },
    {
        id: 'les-pron-03',
        title: 'Trọng âm từ (Word Stress)',
        track: 'pronunciation',
        level: 'intermediate',
        durationMinutes: 15,
        description: 'Quy tắc nhấn trọng âm đối với danh từ, động từ và tính từ hai âm tiết.',
        content: {
            theory: 'Thông thường, danh từ và tính từ 2 âm tiết có trọng âm rơi vào âm tiết thứ nhất. Động từ 2 âm tiết thường có trọng âm rơi vào âm tiết thứ hai.',
            examples: [
                'Danh từ: PRE-sent /ˈprez.ənt/, COF-fee /ˈkɒf.i/',
                'Động từ: pre-SENT /prɪˈzent/, de-CIDE /dɪˈsaɪd/',
                'Tính từ: hap-PY /ˈhæp.i/, CLE-ver /ˈklev.ər/'
            ]
        },
        questionIds: ['q-pron-05']
    }
];