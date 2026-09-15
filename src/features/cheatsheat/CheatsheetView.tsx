import React, {useMemo, useState} from 'react';
import {
    GRAMMAR_CHEATSHEET,
    PRONUNCIATION_CHEATSHEET,
    VOCABULARY_CHEATSHEET,
} from '../../data';
import type {Track} from '../../types';

export const CheatsheetView: React.FC = () => {
    const [activeTrack, setActiveTrack] = useState<Track>('grammar');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

    const query = searchQuery.toLowerCase().trim();

    const filteredGrammar = useMemo(() => {
        if (!query) return GRAMMAR_CHEATSHEET;
        return GRAMMAR_CHEATSHEET.filter((item) =>
            [item.title, item.rule, ...item.usage, ...(item.signalWords || []), ...(item.commonMistakes || []), ...item.examples]
                .join(' ')
                .toLowerCase()
                .includes(query)
        );
    }, [query]);

    const filteredVocabulary = useMemo(() => {
        if (!query) return VOCABULARY_CHEATSHEET;
        return VOCABULARY_CHEATSHEET.filter((group) =>
            [group.category, ...group.items.map((i) => `${i.word} ${i.meaning} ${i.example || ''} ${i.notes || ''}`)]
                .join(' ')
                .toLowerCase()
                .includes(query)
        );
    }, [query]);

    const filteredPronunciation = useMemo(() => {
        if (!query) return PRONUNCIATION_CHEATSHEET;
        return PRONUNCIATION_CHEATSHEET.filter((item) =>
            [item.soundOrTopic, item.description, ...(item.examples || []), ...(item.commonMistakes || [])]
                .join(' ')
                .toLowerCase()
                .includes(query)
        );
    }, [query]);

    const toggleExpand = (id: string) => {
        setExpandedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const trackLabels: Record<Track, string> = {
        grammar: 'Ngữ pháp',
        vocabulary: 'Từ vựng',
        pronunciation: 'Phát âm',
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Tra cứu nhanh (Cheatsheet)</h1>
                <p className="text-slate-500 text-sm mt-1">Quên gì? Tra ngay công thức, từ vựng và mẹo phát âm.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-auto" role="tablist">
                    {(['grammar', 'vocabulary', 'pronunciation'] as Track[]).map((t) => (
                        <button
                            key={t}
                            role="tab"
                            aria-selected={activeTrack === t}
                            onClick={() => setActiveTrack(t)}
                            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                                activeTrack === t
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-900'
                            }`}
                        >
                            {trackLabels[t]}
                        </button>
                    ))}
                </div>

                <input
                    type="search"
                    placeholder="Tìm kiếm quy tắc, từ khóa, âm..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search cheatsheet"
                    className="w-full sm:w-72 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>

            <div className="space-y-3">
                {activeTrack === 'grammar' && filteredGrammar.map((item) => {
                    const isOpen = expandedIds.has(item.id) || !!query;
                    return (
                        <article
                            key={item.id}
                            className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden"
                        >
                            <button
                                type="button"
                                onClick={() => toggleExpand(item.id)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                                aria-expanded={isOpen}
                            >
                                <div>
                                    <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                                    <p className="text-xs text-slate-500 mt-0.5">{item.rule}</p>
                                </div>
                                <span className="text-slate-400 text-lg ml-4 shrink-0">{isOpen ? '−' : '+'}</span>
                            </button>

                            {isOpen && (
                                <div className="px-5 pb-5 space-y-3 text-sm text-slate-700 border-t border-slate-100 pt-4">
                                    {item.structure && (
                                        <p><strong className="text-slate-900">Cấu trúc:</strong> {item.structure}</p>
                                    )}
                                    <div>
                                        <strong className="text-slate-900">Cách dùng:</strong>
                                        <ul className="mt-1 list-disc list-inside space-y-0.5">
                                            {item.usage.map((u, i) => <li key={i}>{u}</li>)}
                                        </ul>
                                    </div>
                                    {item.signalWords && (
                                        <p><strong className="text-slate-900">Dấu hiệu:</strong> {item.signalWords.join(', ')}</p>
                                    )}
                                    {item.commonMistakes && (
                                        <div className="p-3 bg-amber-50 rounded-xl text-amber-900 text-xs border border-amber-200/60">
                                            <strong>Lỗi thường gặp:</strong>
                                            <ul className="mt-1 list-disc list-inside">
                                                {item.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                    <div>
                                        <strong className="text-slate-900">Ví dụ:</strong>
                                        <ul className="mt-1 space-y-1">
                                            {item.examples.map((ex, i) => (
                                                <li key={i} className="px-3 py-1.5 bg-slate-50 rounded-lg text-xs font-mono">{ex}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </article>
                    );
                })}

                {activeTrack === 'vocabulary' && filteredVocabulary.map((group) => (
                    <article key={group.id} className="rounded-2xl border border-slate-200/80 bg-white p-5 space-y-3">
                        <h3 className="text-base font-bold text-slate-900">{group.category}</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-left text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100">
                                        <th className="pb-2 pr-4">Từ</th>
                                        <th className="pb-2 pr-4">Nghĩa</th>
                                        <th className="pb-2 pr-4 hidden sm:table-cell">Loại từ</th>
                                        <th className="pb-2 hidden md:table-cell">Ví dụ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {group.items.map((item) => (
                                        <tr key={item.word} className="border-b border-slate-50 last:border-0">
                                            <td className="py-2 pr-4 font-semibold text-slate-900">{item.word}</td>
                                            <td className="py-2 pr-4 text-slate-600">{item.meaning}</td>
                                            <td className="py-2 pr-4 text-slate-400 text-xs hidden sm:table-cell">{item.partOfSpeech}</td>
                                            <td className="py-2 text-slate-500 text-xs hidden md:table-cell italic">{item.example}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </article>
                ))}

                {activeTrack === 'pronunciation' && filteredPronunciation.map((item) => {
                    const isOpen = expandedIds.has(item.id) || !!query;
                    return (
                        <article key={item.id} className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden">
                            <button
                                type="button"
                                onClick={() => toggleExpand(item.id)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                                aria-expanded={isOpen}
                            >
                                <div>
                                    <h3 className="text-base font-bold text-slate-900">{item.soundOrTopic}</h3>
                                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{item.description}</p>
                                </div>
                                <span className="text-slate-400 text-lg ml-4 shrink-0">{isOpen ? '−' : '+'}</span>
                            </button>

                            {isOpen && (
                                <div className="px-5 pb-5 space-y-3 text-sm text-slate-700 border-t border-slate-100 pt-4">
                                    {item.mouthPosition && (
                                        <p><strong className="text-slate-900">Khẩu hình:</strong> {item.mouthPosition}</p>
                                    )}
                                    {item.minimalPairs && (
                                        <div>
                                            <strong className="text-slate-900">Cặp từ đối lập:</strong>
                                            <div className="mt-1 flex flex-wrap gap-2">
                                                {item.minimalPairs.map(([a, b], i) => (
                                                    <span key={i} className="px-2 py-1 bg-purple-50 text-purple-800 rounded-lg text-xs font-mono">
                                                        {a} ↔ {b}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <div>
                                        <strong className="text-slate-900">Ví dụ:</strong>
                                        <ul className="mt-1 list-disc list-inside">
                                            {item.examples.map((ex, i) => <li key={i}>{ex}</li>)}
                                        </ul>
                                    </div>
                                    {item.commonMistakes && (
                                        <div className="p-3 bg-rose-50 rounded-xl text-rose-900 text-xs border border-rose-200/60">
                                            <strong>Lỗi thường gặp:</strong>
                                            <ul className="mt-1 list-disc list-inside">
                                                {item.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </article>
                    );
                })}

                {activeTrack === 'grammar' && filteredGrammar.length === 0 && (
                    <p className="text-center text-slate-500 text-sm py-8">Không tìm thấy kết quả cho &ldquo;{searchQuery}&rdquo;</p>
                )}
                {activeTrack === 'vocabulary' && filteredVocabulary.length === 0 && (
                    <p className="text-center text-slate-500 text-sm py-8">Không tìm thấy kết quả cho &ldquo;{searchQuery}&rdquo;</p>
                )}
                {activeTrack === 'pronunciation' && filteredPronunciation.length === 0 && (
                    <p className="text-center text-slate-500 text-sm py-8">Không tìm thấy kết quả cho &ldquo;{searchQuery}&rdquo;</p>
                )}
            </div>
        </div>
    );
};
