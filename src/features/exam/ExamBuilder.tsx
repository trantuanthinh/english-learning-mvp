import React, {useMemo, useState} from "react";
import {QUESTION_BANK, TOPICS} from "../../data";
import type {ExamConfig} from "../../services/examGenerator";
import {filterQuestions} from "../../services/questionBank";
import type {Difficulty, QuestionType, Track} from "../../types";

interface ExamBuilderProps {
    onGenerate: (config: ExamConfig, meta: {totalAvailable: number; isTruncated: boolean;}) => void;
}

const TRACKS: {id: Track; label: string;}[] = [
    {id: "grammar", label: "Ngữ pháp"},
    {id: "vocabulary", label: "Từ vựng"},
    {id: "pronunciation", label: "Phát âm"},
];

const QUESTION_TYPE_OPTIONS: {id: QuestionType; label: string;}[] = [
    {id: "multiple-choice", label: "Trắc nghiệm"},
    {id: "fill-blank", label: "Điền vào chỗ trống"},
    {id: "error-correction", label: "Sửa lỗi"},
    {id: "listening", label: "Nghe & chọn"},
    {id: "speaking", label: "Đọc to / Phát âm"},
];

const DIFFICULTY_OPTIONS: {id: Difficulty | "mixed"; label: string;}[] = [
    {id: "mixed", label: "Hỗn hợp"},
    {id: "beginner", label: "Cơ bản"},
    {id: "intermediate", label: "Trung cấp"},
    {id: "advanced", label: "Nâng cao"},
];

const COUNT_OPTIONS = [5, 10, 15, 20];

export const ExamBuilder: React.FC<ExamBuilderProps> = ({onGenerate}) => {
    const [allTopics, setAllTopics] = useState(true);
    const [selectedTracks, setSelectedTracks] = useState<Track[]>([]);
    const [selectedTopicIds, setSelectedTopicIds] = useState<string[]>([]);
    const [allTypes, setAllTypes] = useState(true);
    const [selectedTypes, setSelectedTypes] = useState<QuestionType[]>([]);
    const [difficulty, setDifficulty] = useState<Difficulty | "mixed">("mixed");
    const [questionCount, setQuestionCount] = useState(10);

    const topicsByTrack = useMemo(() => {
        const grouped: Record<Track, typeof TOPICS> = {grammar: [], vocabulary: [], pronunciation: []};
        TOPICS.forEach((t) => grouped[t.track].push(t));
        return grouped;
    }, []);

    const previewPool = useMemo(() => {
        const config: ExamConfig = {
            trackIds: allTopics ? undefined : selectedTracks.length ? selectedTracks : undefined,
            topicIds: allTopics ? undefined : selectedTopicIds.length ? selectedTopicIds : undefined,
            questionTypes: allTypes ? undefined : selectedTypes.length ? selectedTypes : undefined,
            difficulty,
            questionCount,
        };
        return filterQuestions(QUESTION_BANK, config);
    }, [allTopics, selectedTracks, selectedTopicIds, allTypes, selectedTypes, difficulty, questionCount]);

    const toggleTrack = (track: Track) => {
        setSelectedTracks((prev) => (prev.includes(track) ? prev.filter((t) => t !== track) : [...prev, track]));
    };

    const toggleTopic = (topicId: string) => {
        setSelectedTopicIds((prev) => (prev.includes(topicId) ? prev.filter((t) => t !== topicId) : [...prev, topicId]));
    };

    const toggleType = (type: QuestionType) => {
        setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));
    };

    const handleGenerate = () => {
        const config: ExamConfig = {
            trackIds: allTopics ? undefined : selectedTracks.length ? selectedTracks : undefined,
            topicIds: allTopics ? undefined : selectedTopicIds.length ? selectedTopicIds : undefined,
            questionTypes: allTypes ? undefined : selectedTypes.length ? selectedTypes : undefined,
            difficulty,
            questionCount,
        };
        onGenerate(config, {
            totalAvailable: previewPool.length,
            isTruncated: previewPool.length < questionCount,
        });
    };

    return (
        <div className="max-w-2xl p-6 mx-auto space-y-6 bg-white border shadow-sm sm:p-8 rounded-3xl border-slate-200/80">
            <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-indigo-600 bg-indigo-50 rounded-2xl">
                    📝
                </div>
                <h2 className="text-xl font-bold text-slate-900">Tạo bài thi tùy chỉnh</h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">Cấu hình chủ đề, độ khó và dạng câu hỏi.</p>
            </div>

            {/* Topics */}
            <section className="space-y-3">
                <h3 className="text-sm font-bold tracking-wider uppercase text-slate-900">Chủ đề</h3>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                        type="checkbox"
                        checked={allTopics}
                        onChange={(e) => setAllTopics(e.target.checked)}
                        className="text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                    />
                    <span className="font-medium">Tất cả chủ đề</span>
                </label>

                {!allTopics && (
                    <div className="pl-2 space-y-4 border-l-2 border-slate-100">
                        {TRACKS.map(({id: track, label}) => (
                            <div key={track} className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedTracks.includes(track)}
                                        onChange={() => toggleTrack(track)}
                                        className="text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                                    />
                                    {label}
                                </label>
                                <div className="flex flex-wrap gap-2 ml-6">
                                    {topicsByTrack[track].map((topic) => (
                                        <label
                                            key={topic.id}
                                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200 text-xs cursor-pointer hover:bg-slate-50">
                                            <input
                                                type="checkbox"
                                                checked={selectedTopicIds.includes(topic.id)}
                                                onChange={() => toggleTopic(topic.id)}
                                                className="text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                                            />
                                            {topic.name}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <hr className="border-slate-100" />

            {/* Question Types */}
            <section className="space-y-3">
                <h3 className="text-sm font-bold tracking-wider uppercase text-slate-900">Dạng câu hỏi</h3>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                        type="checkbox"
                        checked={allTypes}
                        onChange={(e) => setAllTypes(e.target.checked)}
                        className="text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                    />
                    <span className="font-medium">Tất cả dạng</span>
                </label>

                {!allTypes && (
                    <div className="flex flex-wrap gap-2 pl-2">
                        {QUESTION_TYPE_OPTIONS.map(({id, label}) => (
                            <label
                                key={id}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200 text-xs cursor-pointer hover:bg-slate-50">
                                <input
                                    type="checkbox"
                                    checked={selectedTypes.includes(id)}
                                    onChange={() => toggleType(id)}
                                    className="text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                                />
                                {label}
                            </label>
                        ))}
                    </div>
                )}
            </section>

            <hr className="border-slate-100" />

            {/* Difficulty */}
            <section className="space-y-3">
                <h3 className="text-sm font-bold tracking-wider uppercase text-slate-900">Độ khó</h3>
                <div className="flex flex-wrap gap-2">
                    {DIFFICULTY_OPTIONS.map(({id, label}) => (
                        <label
                            key={id}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer border transition-all ${difficulty === id
                                ? "bg-blue-50 border-blue-200 text-blue-700"
                                : "border-slate-200 text-slate-600 hover:bg-slate-50"
                                }`}>
                            <input
                                type="radio"
                                name="difficulty"
                                checked={difficulty === id}
                                onChange={() => setDifficulty(id)}
                                className="sr-only"
                            />
                            {label}
                        </label>
                    ))}
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* Question Count */}
            <section className="space-y-3">
                <h3 className="text-sm font-bold tracking-wider uppercase text-slate-900">Số câu hỏi</h3>
                <div className="flex flex-wrap gap-2">
                    {COUNT_OPTIONS.map((n) => (
                        <button
                            key={n}
                            type="button"
                            onClick={() => setQuestionCount(n)}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${questionCount === n
                                ? "bg-slate-900 text-white border-slate-900"
                                : "border-slate-200 text-slate-600 hover:bg-slate-50"
                                }`}>
                            {n}
                        </button>
                    ))}
                </div>
            </section>

            {/* Preview / Warning */}
            <div className="p-3 text-xs border rounded-xl bg-slate-50 border-slate-200 text-slate-600">
                {previewPool.length === 0 ? (
                    <span className="font-medium text-rose-600">Không có câu hỏi phù hợp với bộ lọc hiện tại.</span>
                ) : previewPool.length < questionCount ? (
                    <span>
                        Bạn yêu cầu <strong>{questionCount}</strong> câu, nhưng chỉ có <strong>{previewPool.length}</strong>{" "}
                        câu phù hợp. Bài thi sẽ gồm {previewPool.length} câu.
                    </span>
                ) : (
                    <span>
                        Có <strong>{previewPool.length}</strong> câu hỏi phù hợp. Bài thi sẽ chọn ngẫu nhiên{" "}
                        <strong>{questionCount}</strong> câu.
                    </span>
                )}
            </div>

            <button
                type="button"
                disabled={previewPool.length === 0}
                onClick={handleGenerate}
                className="w-full py-3.5 font-bold text-white transition-all shadow-md rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                Tạo bài thi ({Math.min(questionCount, previewPool.length)} câu) 🚀
            </button>
        </div>
    );
};
