import {useEffect, useState} from 'react';
import {LESSONS_DATA} from './data';
import {getProgress, updateLessonComplete} from './storage';
import type {Lesson, UserProgress} from './types';

export default function App() {
    const [progress, setProgress] = useState<UserProgress>({completedLessonIds: [], quizScores: {}});
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState<'all' | 'vocabulary' | 'grammar' | 'pronunciation'>('all');

    // Quiz state inside the drawer
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [currentScore, setCurrentScore] = useState<number | null>(null);

    useEffect(() => {
        setProgress(getProgress());
    }, []);

    const handleOpenLesson = (lesson: Lesson) => {
        setSelectedLesson(lesson);
        setSelectedAnswers({});
        setQuizSubmitted(false);
        setCurrentScore(progress.quizScores[lesson.id] ?? null);
        setIsDrawerOpen(true);
    };

    const handleAnswerSelect = (quizId: string, optionIndex: number) => {
        if (quizSubmitted) return;
        setSelectedAnswers(prev => ({...prev, [quizId]: optionIndex}));
    };

    const handleSubmitQuiz = () => {
        if (!selectedLesson) return;
        let correctCount = 0;
        selectedLesson.quiz.forEach(q => {
            if (selectedAnswers[q.id] === q.correctIndex) {
                correctCount++;
            }
        });
        const score = Math.round((correctCount / selectedLesson.quiz.length) * 100);
        const updated = updateLessonComplete(selectedLesson.id, score);
        setProgress(updated);
        setCurrentScore(score);
        setQuizSubmitted(true);
    };

    const completedCount = progress.completedLessonIds.filter(id => LESSONS_DATA.some(l => l.id === id)).length;
    const totalLessons = LESSONS_DATA.length;
    const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

    const filteredLessons = selectedTrack === 'all'
        ? LESSONS_DATA
        : LESSONS_DATA.filter(l => l.track === selectedTrack);

    return (
        <div className="min-h-screen p-6 font-sans bg-slate-900 text-slate-100">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Header & Stats Dashboard */}
                <header className="flex flex-col items-start justify-between gap-4 p-6 border shadow-lg md:flex-row md:items-center bg-slate-800 rounded-2xl border-slate-700">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-white">English Learning Hub</h1>
                        <p className="mt-1 text-sm text-slate-400">Master Vocabulary, Grammar, and Pronunciation.</p>
                    </div>
                    <div className="flex items-center justify-between w-full gap-6 px-5 py-3 border bg-slate-900/60 rounded-xl border-slate-700/50 md:w-auto">
                        <div>
                            <div className="text-xs font-semibold tracking-wider uppercase text-slate-400">Completed</div>
                            <div className="text-xl font-bold text-emerald-400">{completedCount} / {totalLessons}</div>
                        </div>
                        <div className="w-px h-8 bg-slate-700" />
                        <div>
                            <div className="text-xs font-semibold tracking-wider uppercase text-slate-400">Progress</div>
                            <div className="text-xl font-bold text-indigo-400">{progressPercent}%</div>
                        </div>
                    </div>
                </header>

                {/* Track Filter Tabs */}
                <div className="flex flex-wrap gap-2">
                    {(['all', 'vocabulary', 'grammar', 'pronunciation'] as const).map(track => (
                        <button
                            key={track}
                            onClick={() => setSelectedTrack(track)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all border ${selectedTrack === track
                                ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/20'
                                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white hover:bg-slate-700'
                                }`}
                        >
                            {track}
                        </button>
                    ))}
                </div>

                {/* Lesson List Grid */}
                <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {filteredLessons.map(lesson => {
                        const isCompleted = progress.completedLessonIds.includes(lesson.id);
                        const score = progress.quizScores[lesson.id];

                        return (
                            <div
                                key={lesson.id}
                                onClick={() => handleOpenLesson(lesson)}
                                className="flex flex-col justify-between p-5 transition-all border shadow-sm cursor-pointer bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 hover:border-indigo-500/50 rounded-2xl group"
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 capitalize">
                                                {lesson.track}
                                            </span>
                                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50">
                                                {lesson.level}
                                            </span>
                                        </div>
                                        {isCompleted ? (
                                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                Completed {score !== undefined ? `(${score}%)` : ''}
                                            </span>
                                        ) : (
                                            <span className="text-xs font-medium text-slate-500">Not started</span>
                                        )}
                                    </div>
                                    <h3 className="text-lg font-semibold transition-colors text-slate-200 group-hover:text-indigo-300">
                                        {lesson.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                                        {lesson.description}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pt-3 mt-4 text-xs border-t border-slate-700/50 text-slate-400">
                                    <span>⏱ {lesson.durationMinutes} mins</span>
                                    <span className="font-medium text-indigo-400 transition-transform group-hover:translate-x-1">Start Lesson →</span>
                                </div>
                            </div>
                        );
                    })}
                </section>

            </div>

            {/* Slide-over Drawer UI */}
            {isDrawerOpen && selectedLesson && (
                <div className="fixed inset-0 z-50 flex justify-end transition-opacity bg-black/60 backdrop-blur-sm">
                    <div className="flex flex-col justify-between w-full h-full max-w-2xl p-6 overflow-y-auto duration-300 border-l shadow-2xl bg-slate-900 border-slate-800 md:p-8 animate-in slide-in-from-right">

                        {/* Drawer Header */}
                        <div>
                            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">{selectedLesson.track}</span>
                                        <span className="text-slate-600">•</span>
                                        <span className="text-xs font-semibold text-slate-400">{selectedLesson.level}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-white">{selectedLesson.title}</h2>
                                </div>
                                <button
                                    onClick={() => setIsDrawerOpen(false)}
                                    className="p-2 transition-colors rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Theory Section */}
                            <div className="space-y-6">
                                <div className="p-4 border bg-slate-800/50 border-slate-800 rounded-xl">
                                    <h4 className="mb-1 text-sm font-semibold text-indigo-300">Theory Overview</h4>
                                    <p className="text-sm text-slate-300">{selectedLesson.content.theory}</p>
                                </div>

                                {/* Vocabulary List (if available) */}
                                {selectedLesson.content.vocabularyList && selectedLesson.content.vocabularyList.length > 0 && (
                                    <div>
                                        <h4 className="mb-3 text-sm font-semibold text-slate-300">Vocabulary Items</h4>
                                        <div className="space-y-3">
                                            {selectedLesson.content.vocabularyList.map(item => (
                                                <div key={item.id} className="p-4 border bg-slate-800/80 border-slate-700/50 rounded-xl">
                                                    <div className="flex items-baseline justify-between">
                                                        <span className="text-base font-bold text-white">{item.word}</span>
                                                        <span className="font-mono text-xs text-indigo-400">{item.phonetic}</span>
                                                    </div>
                                                    <p className="mt-1 text-sm text-slate-300">{item.meaning}</p>
                                                    <p className="p-2 mt-2 text-xs italic border rounded text-slate-400 bg-slate-900/50 border-slate-800">
                                                        "{item.example}"
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Examples / Rules or general lesson content display */}
                                {selectedLesson.content.examples && selectedLesson.content.examples.length > 0 && (
                                    <div className="p-4 border bg-slate-800/50 border-slate-800 rounded-xl">
                                        <h4 className="mb-2 text-sm font-semibold text-indigo-300">Key Examples</h4>
                                        <ul className="space-y-1 text-sm list-disc list-inside text-slate-300">
                                            {selectedLesson.content.examples.map((ex, idx) => (
                                                <li key={idx}>{ex}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Quiz Section */}
                                <div className="pt-4 border-t border-slate-800">
                                    <h4 className="mb-4 text-sm font-semibold text-slate-300">Practice Quiz</h4>
                                    {currentScore !== null && (
                                        <div className="p-3 mb-4 text-sm font-medium border bg-emerald-500/10 border-emerald-500/20 rounded-xl text-emerald-400">
                                            Latest Quiz Score: {currentScore}%
                                        </div>
                                    )}

                                    <div className="space-y-6">
                                        {selectedLesson.quiz.map((q, idx) => {
                                            // const isAnswered = selectedAnswers[q.id] !== undefined;
                                            // const isCorrect = selectedAnswers[q.id] === q.correctIndex;

                                            return (
                                                <div key={q.id} className="p-4 space-y-3 border bg-slate-800/50 border-slate-800 rounded-xl">
                                                    <p className="text-sm font-medium text-slate-200">{idx + 1}. {q.question}</p>
                                                    <div className="space-y-2">
                                                        {q.options.map((opt, optIdx) => {
                                                            const isSelected = selectedAnswers[q.id] === optIdx;
                                                            let btnStyle = "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700";

                                                            if (quizSubmitted) {
                                                                if (optIdx === q.correctIndex) {
                                                                    btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-medium";
                                                                } else if (isSelected) {
                                                                    btnStyle = "bg-rose-500/20 border-rose-500 text-rose-300 font-medium";
                                                                }
                                                            } else if (isSelected) {
                                                                btnStyle = "bg-indigo-600/30 border-indigo-500 text-indigo-200 font-medium";
                                                            }

                                                            return (
                                                                <button
                                                                    key={optIdx}
                                                                    disabled={quizSubmitted}
                                                                    onClick={() => handleAnswerSelect(q.id, optIdx)}
                                                                    className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-all ${btnStyle}`}
                                                                >
                                                                    {opt}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                    {quizSubmitted && (
                                                        <p className="text-xs text-slate-400 mt-2 bg-slate-900/60 p-2.5 rounded border border-slate-800">
                                                            💡 <span className="font-semibold text-slate-300">Explanation:</span> {q.explanation}
                                                        </p>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Drawer Footer Actions */}
                        <div className="sticky bottom-0 flex justify-end gap-3 pt-6 pb-2 mt-6 border-t border-slate-800 bg-slate-900/90 backdrop-blur">
                            <button
                                onClick={() => setIsDrawerOpen(false)}
                                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
                            >
                                Close
                            </button>
                            {!quizSubmitted ? (
                                <button
                                    onClick={handleSubmitQuiz}
                                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors shadow-lg shadow-indigo-600/20"
                                >
                                    Submit & Complete
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsDrawerOpen(false)}
                                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors shadow-lg shadow-emerald-600/20"
                                >
                                    Done
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}