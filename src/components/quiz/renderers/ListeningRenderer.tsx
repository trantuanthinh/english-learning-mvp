// src/components/quiz/renderers/ListeningRenderer.tsx
import React, {useState} from "react";
import type {ListeningQuestion} from "../../../types";

interface Props {
    question: ListeningQuestion;
    value?: number;
    onChange: (index: number) => void;
    disabled?: boolean;
    showFeedback?: boolean;
}

export const ListeningRenderer: React.FC<Props> = ({
    question,
    value,
    onChange,
    disabled = false,
    showFeedback = false,
}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayAudio = () => {
        if (isPlaying) return;

        if (question.audio.url) {
            const audio = new Audio(question.audio.url);
            setIsPlaying(true);
            audio.play();
            audio.onended = () => setIsPlaying(false);
        } else if (question.audio.text && "speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(question.audio.text);
            utterance.lang = "en-US";
            utterance.rate = 0.9;
            utterance.onstart = () => setIsPlaying(true);
            utterance.onend = () => setIsPlaying(false);
            utterance.onerror = () => setIsPlaying(false);
            window.speechSynthesis.speak(utterance);
        }
    };

    const isLocked = disabled || showFeedback;

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-indigo-50 border border-indigo-200">
                <button
                    type="button"
                    onClick={handlePlayAudio}
                    disabled={isPlaying}
                    aria-label="Play audio snippet"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all disabled:opacity-50">
                    {isPlaying ? "🔊" : "▶"}
                </button>
                <div>
                    <h4 className="font-semibold text-indigo-950">Audio Snippet</h4>
                    <p className="text-xs text-indigo-700">Click play to hear the sentence before choosing your answer.</p>
                </div>
            </div>

            <p className="text-zinc-900 font-medium">{question.question}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {question.options.map((opt, idx) => {
                    const isSelected = value === idx;
                    return (
                        <button
                            key={idx}
                            type="button"
                            disabled={isLocked}
                            onClick={() => onChange(idx)}
                            className={`p-4 text-left rounded-lg border transition-all ${isSelected
                                ? "border-blue-600 bg-blue-50 text-blue-950 font-semibold ring-2 ring-blue-500"
                                : "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800"
                                } ${isLocked ? "cursor-not-allowed" : ""}`}>
                            <span className="font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                            {opt}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
