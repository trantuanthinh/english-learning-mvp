import {useEffect, useMemo, useState} from "react";
import {QUESTION_BANK, TOPIC_MAP} from "./data";
import {CheatsheetView} from "./features/cheatsheat/CheatsheetView";
import DashboardTab from "./features/tabs/DashboardTab";
import ExamTab from "./features/tabs/ExamTab";
import FlashcardTab from "./features/tabs/FlashcardTab";
import LessonsTab from "./features/tabs/LessonsTab";
import PracticeTab from "./features/tabs/PracticeTab";
import ReviewTab from "./features/tabs/ReviewTab";
import {getProgress} from "./storage";
import type {Question, UserProgress} from "./types";

export type NavigationTab = "dashboard" | "lessons" | "cheatsheet" | "practice" | "review" | "flashcards" | "exam";

export const TRACK_BADGES: Record<string, {label: string; style: string;}> = {
    grammar: {label: "Ngữ pháp", style: "bg-indigo-50 text-indigo-700 border-indigo-200"},
    vocabulary: {label: "Từ vựng", style: "bg-emerald-50 text-emerald-700 border-emerald-200"},
    pronunciation: {label: "Phát âm", style: "bg-purple-50 text-purple-700 border-purple-200"},
};

export const NAV_ITEMS: {id: NavigationTab; label: string; icon: string;}[] = [
    {id: "dashboard", label: "Dashboard", icon: "📊"},
    {id: "lessons", label: "Bài học", icon: "📚"},
    {id: "cheatsheet", label: "Tra cứu", icon: "💡"},
    {id: "practice", label: "Luyện tập", icon: "🎯"},
    {id: "review", label: "Ôn lỗi sai", icon: "🔁"},
    {id: "flashcards", label: "Thẻ từ vựng", icon: "🃏"},
    {id: "exam", label: "Thi thử", icon: "📝"},
];

export function formatPreviousAnswer(question: Question, answer: unknown): string {
    if (answer === undefined || answer === null) return "(chưa trả lời)";

    switch (question.type) {
        case "multiple-choice":
        case "listening": {
            const idx = typeof answer === "number" ? answer : Number(answer);
            const opt = question.options?.[idx];
            return opt ? `${String.fromCharCode(65 + idx)}. ${opt}` : String(answer);
        }
        case "fill-blank":
            return String(answer);
        case "error-correction": {
            const a = answer as {segmentId?: string; correction?: string;};
            return `segment "${a?.segmentId ?? "?"}" → "${a?.correction ?? ""}"`;
        }
        case "speaking": {
            const a = answer as {completed?: boolean;};
            return a?.completed ? "Đã nói (hoàn thành)" : "(chưa nói)";
        }
        default:
            return String(answer);
    }
}

export function App() {
    const [activeTab, setActiveTab] = useState<NavigationTab>("dashboard");
    const [progress, setProgress] = useState<UserProgress>(getProgress());

    useEffect(() => {
        setProgress(getProgress());
    }, []);

    const weakTopics = useMemo(() => {
        const stats = progress.questionStats || {};
        const topicAgg: Record<string, {attempts: number; correct: number;}> = {};

        QUESTION_BANK.forEach((q) => {
            const stat = stats[q.id];
            if (!stat || stat.attempts === 0) return;
            q.topicIds.forEach((tid) => {
                if (!topicAgg[tid]) topicAgg[tid] = {attempts: 0, correct: 0};
                topicAgg[tid].attempts += stat.attempts;
                topicAgg[tid].correct += stat.correctCount;
            });
        });

        return Object.entries(topicAgg)
            .map(([id, {attempts, correct}]) => ({
                id,
                name: TOPIC_MAP[id]?.name || id,
                pct: Math.round((correct / attempts) * 100),
                attempts,
            }))
            .filter((t) => t.attempts >= 2 && t.pct < 70)
            .sort((a, b) => a.pct - b.pct)
            .slice(0, 5);
    }, [progress]);

    const refreshProgress = () => setProgress(getProgress());

    const switchTab = (tab: NavigationTab) => {
        setActiveTab(tab);
        setProgress(getProgress());
    };

    return (
        <div className="min-h-screen pb-12 font-sans antialiased bg-slate-50 text-slate-800">
            <header className="sticky top-0 z-30 border-b shadow-sm bg-white/90 backdrop-blur-md border-slate-200/80">
                <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <button
                        type="button"
                        onClick={() => switchTab("dashboard")}
                        className="flex items-center p-0 space-x-3 bg-transparent border-0 cursor-pointer">
                        <div className="flex items-center justify-center text-lg font-black text-white shadow-md w-9 h-9 rounded-xl bg-linear-to-tr from-blue-600 to-indigo-600">
                            E
                        </div>
                        <span className="text-lg font-bold tracking-tight text-slate-900">EnglishHub</span>
                    </button>

                    <nav className="flex items-center space-x-1 overflow-x-auto sm:space-x-2" aria-label="Main navigation">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => switchTab(item.id)}
                                aria-current={activeTab === item.id ? "page" : undefined}
                                className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${activeTab === item.id
                                    ? "bg-blue-50 text-blue-600 border border-blue-100 shadow-xs"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                    }`}>
                                <span aria-hidden="true">{item.icon}</span>
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="px-4 pt-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {activeTab === "dashboard" && (
                    <DashboardTab progress={progress} weakTopics={weakTopics} onSwitchTab={switchTab} />
                )}

                {activeTab === "lessons" && <LessonsTab progress={progress} onProgressChange={refreshProgress} />}

                {activeTab === "cheatsheet" && <CheatsheetView />}

                {activeTab === "practice" && <PracticeTab />}

                {activeTab === "review" && (
                    <ReviewTab onProgressChange={refreshProgress} onGoPractice={() => switchTab("practice")} />
                )}

                {activeTab === "flashcards" && <FlashcardTab onProgressChange={refreshProgress} />}

                {activeTab === "exam" && (
                    <ExamTab onProgressChange={refreshProgress} onBackToDashboard={() => switchTab("dashboard")} />
                )}
            </main>
        </div>
    );
}
