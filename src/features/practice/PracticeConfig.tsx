import React, {useMemo, useState} from "react";
import {QUESTION_BANK, TOPICS} from "../../data";
import {generateExam, type ExamConfig} from "../../services/examGenerator";
import {filterQuestions} from "../../services/questionBank";
import type {Difficulty, QuestionType, Track} from "../../types";

interface PracticeConfigProps {
    onStart: (questions: import("../../types").Question[]) => void;
}

const TRACKS: {id: Track | "all"; label: string;}[] = [
    {id: "all", label: "Tất cả"},
    {id: "grammar", label: "Ngữ pháp"},
    {id: "vocabulary", label: "Từ vựng"},
    {id: "pronunciation", label: "Phát âm"},
];

const TYPE_OPTIONS: {id: QuestionType | "all"; label: string;}[] = [
    {id: "all", label: "Tất cả"},
    {id: "multiple-choice", label: "Trắc nghiệm"},
    {id: "fill-blank", label: "Điền từ"},
    {id: "error-correction", label: "Sửa lỗi"},
    {id: "listening", label: "Nghe"},
    {id: "speaking", label: "Nói"},
];

const DIFFICULTY_OPTIONS: {id: Difficulty | "all"; label: string;}[] = [
    {id: "all", label: "Tất cả"},
    {id: "beginner", label: "Cơ bản"},
    {id: "intermediate", label: "Trung cấp"},
    {id: "advanced", label: "Nâng cao"},
];

const COUNT_OPTIONS = [5, 10, 20];

export const PracticeConfig: React.FC<PracticeConfigProps> = ({onStart}) => {
    const [track, setTrack] = useState<Track | "all">("all");
    const [topicId, setTopicId] = useState<string>("all");
    const [questionType, setQuestionType] = useState<QuestionType | "all">("all");
    const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
    const [questionCount, setQuestionCount] = useState(5);

    const availableTopics = useMemo(() => {
        if (track === "all") return TOPICS;
        return TOPICS.filter((t) => t.track === track);
    }, [track]);

    const previewCount = useMemo(() => {
        const config: ExamConfig = {
            trackIds: track === "all" ? undefined : [track],
            topicIds: topicId === "all" ? undefined : [topicId],
            questionTypes: questionType === "all" ? undefined : [questionType],
            difficulty: difficulty === "all" ? "mixed" : difficulty,
            questionCount,
        };
        return filterQuestions(QUESTION_BANK, config).length;
    }, [track, topicId, questionType, difficulty, questionCount]);

    const handleStart = () => {
        const config: ExamConfig = {
            trackIds: track === "all" ? undefined : [track],
            topicIds: topicId === "all" ? undefined : [topicId],
            questionTypes: questionType === "all" ? undefined : [questionType],
            difficulty: difficulty === "all" ? "mixed" : difficulty,
            questionCount,
        };
        const result = generateExam(QUESTION_BANK, config);
        if (result.questions.length === 0) {
            alert("Không tìm thấy câu hỏi phù hợp!");
            return;
        }
        onStart(result.questions);
    };

    return (
        <div className="max-w-xl p-6 mx-auto space-y-5 bg-white border shadow-sm sm:p-8 rounded-3xl border-slate-200/80">
            <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-blue-600 bg-blue-50 rounded-2xl">
                    🎯
                </div>
                <h2 className="text-xl font-bold text-slate-900">Luyện tập</h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                    Chọn bộ lọc và bắt đầu luyện tập với phản hồi tức thì.
                </p>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="text-xs font-bold tracking-wider uppercase text-slate-500">Lộ trình</label>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                        {TRACKS.map(({id, label}) => (
                            <button
                                key={id}
                                type="button"
                                onClick={() => {
                                    setTrack(id);
                                    setTopicId("all");
                                }}
                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${track === id
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                                    }`}>
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="practice-topic" className="text-xs font-bold tracking-wider uppercase text-slate-500">
                        Chủ đề
                    </label>
                    <select
                        id="practice-topic"
                        value={topicId}
                        onChange={(e) => setTopicId(e.target.value)}
                        className="mt-1.5 w-full px-3 py-2 text-sm rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500 outline-none">
                        <option value="all">Tất cả chủ đề</option>
                        {availableTopics.map((t) => (
                            <option key={t.id} value={t.id}>
                                {t.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="text-xs font-bold tracking-wider uppercase text-slate-500">Dạng câu hỏi</label>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                        {TYPE_OPTIONS.map(({id, label}) => (
                            <button
                                key={id}
                                type="button"
                                onClick={() => setQuestionType(id)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${questionType === id
                                    ? "bg-slate-900 text-white border-slate-900"
                                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                                    }`}>
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="text-xs font-bold tracking-wider uppercase text-slate-500">Độ khó</label>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                        {DIFFICULTY_OPTIONS.map(({id, label}) => (
                            <button
                                key={id}
                                type="button"
                                onClick={() => setDifficulty(id)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${difficulty === id
                                    ? "bg-indigo-600 text-white border-indigo-600"
                                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                                    }`}>
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="text-xs font-bold tracking-wider uppercase text-slate-500">Số câu hỏi</label>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                        {COUNT_OPTIONS.map((n) => (
                            <button
                                key={n}
                                type="button"
                                onClick={() => setQuestionCount(n)}
                                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${questionCount === n
                                    ? "bg-emerald-600 text-white border-emerald-600"
                                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                                    }`}>
                                {n}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-3 text-xs text-center border rounded-xl bg-slate-50 border-slate-200 text-slate-600">
                {previewCount === 0 ? (
                    <span className="font-medium text-rose-600">Không có câu hỏi phù hợp.</span>
                ) : previewCount < questionCount ? (
                    <span>Có {previewCount} câu phù hợp (ít hơn yêu cầu).</span>
                ) : (
                    <span>Sẵn sàng — {previewCount} câu hỏi khả dụng.</span>
                )}
            </div>

            <button
                type="button"
                disabled={previewCount === 0}
                onClick={handleStart}
                className="w-full py-3 text-sm font-bold text-white transition-all bg-blue-600 shadow-md rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                Bắt đầu Luyện Tập ({Math.min(questionCount, previewCount)} câu) 🚀
            </button>
        </div>
    );
};
