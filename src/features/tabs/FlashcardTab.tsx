import {useEffect, useMemo, useState} from "react";
import {LESSONS_DATA} from "../../data";
import {getProgress, updateFlashcardProgress} from "../../storage";
import type {UserProgress} from "../../types";

type FlashcardState = "new" | "learning" | "known" | "hard";

interface VocabularyCard {
    id: string;
    word: string;
    meaning: string;
    phonetic?: string;
    example?: string;
    lessonId: string;
}

export function buildVocabularyCards(): VocabularyCard[] {
    const cards: VocabularyCard[] = [];
    const seen = new Set<string>();

    LESSONS_DATA.forEach((lesson) => {
        lesson.content.vocabularyList?.forEach((v) => {
            const key = v.word.toLowerCase().trim();
            if (seen.has(key)) return;
            seen.add(key);

            cards.push({
                id: `vocab-${key}`,
                word: v.word,
                meaning: v.meaning,
                phonetic: v.phonetic,
                example: lesson.content.examples?.[0],
                lessonId: lesson.id,
            });
        });
    });

    return cards;
}

export default function FlashcardTab({
    onProgressChange,
}: {
    onProgressChange: () => void;
}) {
    const [cards] = useState<VocabularyCard[]>(() => buildVocabularyCards());
    const [index, setIndex] = useState(0);
    const [revealed, setRevealed] = useState(false);
    const [progress, setProgress] = useState<UserProgress>(getProgress());

    useEffect(() => {
        setProgress(getProgress());
    }, []);

    const currentCard = cards[index] ?? null;

    const knownCount = useMemo(() => {
        const map = progress.flashcardProgress ?? {};
        return cards.filter((c) => map[c.id]?.state === "known").length;
    }, [cards, progress]);

    const handleRate = (state: FlashcardState) => {
        if (!currentCard) return;
        updateFlashcardProgress(currentCard.id, state);
        setProgress(getProgress());
        onProgressChange();
        setRevealed(false);
        setIndex((i) => (i + 1) % cards.length);
    };

    if (cards.length === 0) {
        return (
            <div className="max-w-2xl p-8 mx-auto text-center bg-white border shadow-sm rounded-2xl border-slate-200/80">
                <p className="text-4xl">🃏</p>
                <p className="mt-3 text-sm font-semibold text-slate-700">
                    Chưa có thẻ từ vựng nào. Hãy thêm từ vựng vào bài học trước.
                </p>
            </div>
        );
    }

    if (!currentCard) return null;

    const currentState = progress.flashcardProgress?.[currentCard.id]?.state;

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="p-6 bg-white border shadow-sm rounded-2xl border-slate-200/80">
                <h2 className="text-xl font-bold text-slate-900">🃏 Thẻ từ vựng</h2>
                <p className="mt-1 text-sm text-slate-500">
                    Nhấn vào thẻ để xem nghĩa. Sau đó tự đánh giá mức độ nhớ của bạn.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs font-semibold">
                    <span className="text-slate-500">
                        Thẻ {index + 1} / {cards.length}
                    </span>
                    <span className="text-emerald-600">
                        ✓ Đã nhớ: {knownCount}
                    </span>
                </div>
                <div className="h-1.5 mt-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full transition-all bg-emerald-500 rounded-full"
                        style={{width: `${(knownCount / cards.length) * 100}%`}}
                    />
                </div>
            </div>

            <button
                type="button"
                onClick={() => setRevealed((r) => !r)}
                className="w-full min-h-70 flex flex-col items-center justify-center p-8 text-center bg-white border-2 shadow-md rounded-3xl border-slate-200 hover:border-blue-400 transition-all">
                {!revealed ? (
                    <>
                        <p className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            {currentCard.word}
                        </p>
                        {currentCard.phonetic && (
                            <p className="mt-3 text-base text-slate-400">{currentCard.phonetic}</p>
                        )}
                        <p className="mt-8 text-xs font-semibold tracking-widest uppercase text-blue-600">
                            Nhấn để xem nghĩa
                        </p>
                    </>
                ) : (
                    <>
                        <p className="text-2xl font-bold text-slate-900 sm:text-3xl">
                            {currentCard.word}
                        </p>
                        {currentCard.phonetic && (
                            <p className="mt-2 text-sm text-slate-400">{currentCard.phonetic}</p>
                        )}
                        <p className="mt-6 text-lg font-semibold text-blue-600 sm:text-xl">
                            = {currentCard.meaning}
                        </p>
                        {currentCard.example && (
                            <p className="mt-6 text-sm italic text-slate-500 sm:text-base">
                                “{currentCard.example}”
                            </p>
                        )}
                        {currentState && (
                            <p className="mt-6 text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                                Trạng thái hiện tại: {currentState}
                            </p>
                        )}
                    </>
                )}
            </button>

            {revealed ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <button
                        type="button"
                        onClick={() => handleRate("learning")}
                        className="py-3 text-xs font-bold text-white transition-all shadow-sm rounded-xl bg-rose-500 hover:bg-rose-600 sm:text-sm">
                        Lại
                    </button>
                    <button
                        type="button"
                        onClick={() => handleRate("hard")}
                        className="py-3 text-xs font-bold text-white transition-all shadow-sm rounded-xl bg-amber-500 hover:bg-amber-600 sm:text-sm">
                        Khó
                    </button>
                    <button
                        type="button"
                        onClick={() => handleRate("known")}
                        className="py-3 text-xs font-bold text-white transition-all shadow-sm rounded-xl bg-blue-500 hover:bg-blue-600 sm:text-sm">
                        Được
                    </button>
                    <button
                        type="button"
                        onClick={() => handleRate("known")}
                        className="py-3 text-xs font-bold text-white transition-all shadow-sm rounded-xl bg-emerald-500 hover:bg-emerald-600 sm:text-sm">
                        Dễ
                    </button>
                </div>
            ) : (
                <p className="text-center text-xs text-slate-400">
                    Nhấn vào thẻ để lật và đánh giá mức độ nhớ.
                </p>
            )}
        </div>
    );
}