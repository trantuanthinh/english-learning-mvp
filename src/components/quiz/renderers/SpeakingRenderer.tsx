// src/components/quiz/renderers/SpeakingRenderer.tsx
import React, {useRef, useState} from 'react';
import type {SpeakingQuestion} from '../../../types';

interface Props {
    question: SpeakingQuestion;
    value?: {completed: boolean; recordingUrl?: string;};
    onChange: (val: {completed: boolean; recordingUrl?: string;}) => void;
    disabled?: boolean;
}

export const SpeakingRenderer: React.FC<Props> = ({
    question,
    value,
    onChange,
    disabled,
}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | undefined>(value?.recordingUrl);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({audio: true});
            mediaRecorderRef.current = new MediaRecorder(stream);
            chunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunksRef.current, {type: 'audio/webm'});
                const url = URL.createObjectURL(blob);
                setAudioUrl(url);
                onChange({completed: true, recordingUrl: url});
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (err) {
            console.warn('Microphone access denied or unsupported:', err);
            // Fallback completion without audio recording
            onChange({completed: true});
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
            setIsRecording(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-900/40 text-center">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-700 dark:text-amber-400 block mb-2">
                    Read Aloud Prompt
                </span>
                <blockquote className="text-xl font-bold text-zinc-900 dark:text-zinc-100 italic">
                    "{question.promptText}"
                </blockquote>
                {question.targetPhonetics && (
                    <p className="text-sm text-zinc-500 font-mono mt-2">
                        /{question.targetPhonetics}/
                    </p>
                )}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 py-4">
                {!isRecording ? (
                    <button
                        type="button"
                        disabled={disabled}
                        onClick={startRecording}
                        className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center gap-2"
                    >
                        <span>🎤</span>
                        {audioUrl ? 'Record Again' : 'Start Recording'}
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={stopRecording}
                        className="px-6 py-3 rounded-full bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900 font-semibold transition-all flex items-center gap-2 animate-pulse"
                    >
                        <span>⏹</span>
                        Stop Recording
                    </button>
                )}

                {audioUrl && (
                    <div className="w-full max-w-md mt-2 flex flex-col items-center gap-2">
                        <span className="text-xs text-zinc-500 font-medium">Your Recording Playback:</span>
                        <audio controls src={audioUrl} className="w-full" />
                    </div>
                )}
            </div>
        </div>
    );
};