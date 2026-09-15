import type {NavigationTab} from "../../App";
import {LESSONS_DATA} from "../../data";
import type {UserProgress} from "../../types";

export default function DashboardTab({
    progress,
    weakTopics,
    onSwitchTab,
}: {
    progress: UserProgress;
    weakTopics: {id: string; name: string; pct: number; attempts: number;}[];
    onSwitchTab: (tab: NavigationTab) => void;
}) {
    return (
        <div className="space-y-8">
            <div className="p-6 text-white shadow-xl bg-linear-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl sm:p-8">
                <h2 className="text-2xl font-extrabold sm:text-3xl">Chào mừng trở lại! 👋</h2>
                <p className="max-w-2xl mt-2 text-sm leading-relaxed text-blue-200 sm:text-base">
                    Tiếp tục hành trình chinh phục tiếng Anh với hệ thống bài học và ngân hàng câu hỏi thông minh.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex items-center p-6 space-x-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-blue-600 rounded-xl bg-blue-50">
                        📚
                    </div>
                    <div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                            Bài học hoàn thành
                        </p>
                        <p className="text-2xl font-black text-slate-900 mt-0.5">
                            {progress.completedLessonIds.length}{" "}
                            <span className="text-sm font-medium text-slate-400">/ {LESSONS_DATA.length}</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-6 space-x-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <div className="flex items-center justify-center w-12 h-12 text-xl font-bold rounded-xl bg-emerald-50 text-emerald-600">
                        🎯
                    </div>
                    <div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                            Câu hỏi đã làm
                        </p>
                        <p className="text-2xl font-black text-slate-900 mt-0.5">
                            {Object.keys(progress.questionStats || {}).length}
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-6 space-x-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-purple-600 rounded-xl bg-purple-50">
                        📝
                    </div>
                    <div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                            Bài thi đã làm
                        </p>
                        <p className="text-2xl font-black text-slate-900 mt-0.5">
                            {(progress.examHistory || []).length}
                        </p>
                    </div>
                </div>
            </div>

            {weakTopics.length > 0 && (
                <div className="p-6 space-y-3 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <h3 className="text-lg font-bold text-slate-900">📉 Chủ đề cần cải thiện</h3>
                    <ul className="space-y-2">
                        {weakTopics.map((t) => (
                            <li key={t.id} className="flex items-center justify-between text-sm">
                                <span className="text-slate-700">{t.name}</span>
                                <span className="font-bold text-rose-600">{t.pct}%</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {(progress.examHistory || []).length > 0 && (
                <div className="p-6 space-y-3 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <h3 className="text-lg font-bold text-slate-900">📝 Bài thi gần đây</h3>
                    <ul className="space-y-2">
                        {(progress.examHistory || []).slice(0, 3).map((exam) => (
                            <li
                                key={exam.id}
                                className="flex items-center justify-between pb-2 text-sm border-b border-slate-50 last:border-0">
                                <span className="text-slate-500">
                                    {new Date(exam.timestamp).toLocaleDateString("vi-VN")}
                                </span>
                                <span className="font-bold text-slate-900">
                                    {exam.scorePercentage}% ({exam.correctAnswersCount}/{exam.totalQuestions})
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="flex flex-col justify-between p-6 space-y-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">💡 Tra cứu nhanh Cheatsheet</h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Xem lại công thức Ngữ pháp, từ vựng trọng tâm và quy tắc phát âm.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => onSwitchTab("cheatsheet")}
                        className="self-start px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all">
                        Mở Cheatsheet →
                    </button>
                </div>
                <div className="flex flex-col justify-between p-6 space-y-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">🔁 Ôn lại câu sai</h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Xem lại những câu bạn từng làm sai và thử sức lại một lần nữa.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => onSwitchTab("review")}
                        className="self-start px-4 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold text-xs sm:text-sm transition-all">
                        Ôn ngay →
                    </button>
                </div>
                <div className="flex flex-col justify-between p-6 space-y-4 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">🎯 Tạo bài thi thử</h3>
                        <p className="mt-1 text-sm text-slate-500">
                            Tùy chỉnh bài thi theo chủ đề, độ khó và dạng câu hỏi bạn mong muốn.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => onSwitchTab("exam")}
                        className="self-start px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all">
                        Tạo bài test ngay →
                    </button>
                </div>
            </div>
        </div>
    );
}
