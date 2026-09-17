import React, {useCallback, useEffect, useRef, useState} from 'react';

import type {SpeakingQuestion} from '../../../types';

interface SpeakingValue {
    completed: boolean;
    passed?: boolean;
    recordingUrl?: string;
    transcript?: string;
    score?: number;
}

interface Props {
    question: SpeakingQuestion;
    value?: SpeakingValue;
    onChange: (value: SpeakingValue) => void;
    disabled?: boolean;
    showFeedback?: boolean;
}

interface SpeechRecognitionResultLike {
    isFinal: boolean;
    [index: number]: {transcript: string; confidence?: number;};
    length: number;
}

interface SpeechRecognitionEventLike {
    resultIndex: number;
    results: {
        [index: number]: SpeechRecognitionResultLike;
        length: number;
    };
}

interface SpeechRecognitionErrorEventLike {
    error: string;
    message?: string;
}

interface SpeechRecognitionLike {
    lang: string;
    interimResults: boolean;
    continuous: boolean;
    maxAlternatives: number;
    onresult: ((event: SpeechRecognitionEventLike) => void) | null;
    onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null;
    onend: (() => void) | null;
    start: () => void;
    stop: () => void;
    abort: () => void;
}

interface SpeechRecognitionConstructorLike {
    new(): SpeechRecognitionLike;
}

declare global {
    interface Window {
        SpeechRecognition?: SpeechRecognitionConstructorLike;
        webkitSpeechRecognition?: SpeechRecognitionConstructorLike;
    }
}

const MAX_RECORDING_SECONDS = 60;
const MIN_PASS_SCORE = 70;
const MIN_SPOKEN_WORDS = 1;

const normalizeWords = (text: string): string[] =>
    text
        .normalize('NFKC')
        .toLowerCase()
        .replace(/[^\p{L}\p{N}']+/gu, ' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean);

const calculateSimilarity = (spoken: string, target: string): number => {
    const spokenWords = normalizeWords(spoken);
    const targetWords = normalizeWords(target);

    if (targetWords.length === 0 || spokenWords.length === 0) {
        return 0;
    }

    const rows = targetWords.length + 1;
    const cols = spokenWords.length + 1;

    const matrix: number[][] = Array.from({length: rows}, (_, row) =>
        Array.from({length: cols}, (_, col) => {
            if (row === 0) return col;
            if (col === 0) return row;
            return 0;
        }),
    );

    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            const substitutionCost =
                targetWords[row - 1] === spokenWords[col - 1] ? 0 : 1;

            matrix[row][col] = Math.min(
                matrix[row - 1][col] + 1,
                matrix[row][col - 1] + 1,
                matrix[row - 1][col - 1] + substitutionCost,
            );
        }
    }

    const distance = matrix[rows - 1][cols - 1];
    const maxLength = Math.max(targetWords.length, spokenWords.length);
    const score = 1 - distance / maxLength;

    return Math.max(0, Math.min(100, Math.round(score * 100)));
};

interface WordFeedback {
    word: string;
    matched: boolean;
}

const getWordFeedback = (spoken: string, target: string): WordFeedback[] => {
    const spokenWords = normalizeWords(spoken);
    const targetWords = normalizeWords(target);
    const used = new Array(spokenWords.length).fill(false);

    return targetWords.map((targetWord) => {
        const matchIndex = spokenWords.findIndex(
            (spokenWord, i) => !used[i] && spokenWord === targetWord,
        );

        if (matchIndex >= 0) {
            used[matchIndex] = true;
            return {word: targetWord, matched: true};
        }

        return {word: targetWord, matched: false};
    });
};

export const SpeakingRenderer: React.FC<Props> = ({
    question,
    value,
    onChange,
    disabled = false,
    showFeedback = false,
}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [audioUrl, setAudioUrl] = useState<string | undefined>(
        value?.recordingUrl,
    );
    const [transcript, setTranscript] = useState(value?.transcript ?? '');
    const [accuracyScore, setAccuracyScore] = useState<number | null>(
        value?.score ?? null,
    );
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSpeechRecognitionSupported, setIsSpeechRecognitionSupported] =
        useState(true);
    const [noSpeechDetected, setNoSpeechDetected] = useState(false);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const mediaStreamRef = useRef<MediaStream | null>(null);
    const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const transcriptRef = useRef('');
    const pendingAudioUrlRef = useRef<string | undefined>(undefined);
    const recorderStoppedRef = useRef(false);
    const recognitionEndedRef = useRef(true);
    const finalizedRef = useRef(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const oldAudioUrlRef = useRef<string | undefined>(undefined);

    useEffect(() => {
        setAudioUrl(value?.recordingUrl);
        setTranscript(value?.transcript ?? '');
        setAccuracyScore(value?.score ?? null);

        transcriptRef.current = value?.transcript ?? '';
    }, [value?.recordingUrl, value?.transcript, value?.score]);

    useEffect(() => {
        if (typeof window === 'undefined') {
            setIsSpeechRecognitionSupported(false);
            return;
        }

        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        setIsSpeechRecognitionSupported(Boolean(SpeechRecognition));
    }, []);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);

            if (recognitionRef.current) {
                try {
                    recognitionRef.current.abort();
                } catch {
                    /* ignore */
                }
            }

            if (mediaRecorderRef.current?.state === 'recording') {
                try {
                    mediaRecorderRef.current.stop();
                } catch {
                    /* ignore */
                }
            }

            mediaStreamRef.current?.getTracks().forEach((track) => track.stop());

            if (oldAudioUrlRef.current?.startsWith('blob:')) {
                URL.revokeObjectURL(oldAudioUrlRef.current);
            }
        };
    }, []);

    const clearTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    const releaseMediaStream = () => {
        mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
        mediaStreamRef.current = null;
    };

    const finalizeRecording = useCallback(() => {
        if (finalizedRef.current) return;
        if (!recorderStoppedRef.current) return;
        if (!recognitionEndedRef.current) return;

        finalizedRef.current = true;

        const finalAudioUrl = pendingAudioUrlRef.current;
        const finalTranscript = transcriptRef.current.trim();
        const spokenWords = normalizeWords(finalTranscript);

        const isEmpty = spokenWords.length < MIN_SPOKEN_WORDS;

        const finalScore = isEmpty
            ? 0
            : calculateSimilarity(finalTranscript, question.promptText);

        const passed = !isEmpty && finalScore >= MIN_PASS_SCORE;

        setAudioUrl(finalAudioUrl);
        setTranscript(finalTranscript);
        setAccuracyScore(finalScore);
        setNoSpeechDetected(isEmpty);

        onChange({
            completed: true,
            passed,
            recordingUrl: finalAudioUrl,
            transcript: finalTranscript || undefined,
            score: finalScore,
        });
    }, [onChange, question.promptText]);

    const startRecording = async () => {
        if (disabled || isRecording) return;

        setErrorMessage(null);
        setElapsedSeconds(0);
        setTranscript('');
        setAccuracyScore(null);
        setNoSpeechDetected(false);

        transcriptRef.current = '';
        chunksRef.current = [];

        recorderStoppedRef.current = false;
        recognitionEndedRef.current = true;
        finalizedRef.current = false;
        pendingAudioUrlRef.current = undefined;

        if (oldAudioUrlRef.current?.startsWith('blob:')) {
            URL.revokeObjectURL(oldAudioUrlRef.current);
        }
        oldAudioUrlRef.current = undefined;

        setAudioUrl(undefined);

        try {
            if (
                typeof navigator === 'undefined' ||
                !navigator.mediaDevices?.getUserMedia
            ) {
                throw new Error('Microphone API is not supported.');
            }

            if (typeof MediaRecorder === 'undefined') {
                throw new Error('MediaRecorder is not supported.');
            }

            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true,
                },
            });

            mediaStreamRef.current = stream;

            const supportedMimeTypes = [
                'audio/webm;codecs=opus',
                'audio/webm',
                'audio/mp4',
            ];

            const mimeType = supportedMimeTypes.find((type) =>
                MediaRecorder.isTypeSupported(type),
            );

            const recorder = mimeType
                ? new MediaRecorder(stream, {mimeType})
                : new MediaRecorder(stream);

            mediaRecorderRef.current = recorder;

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) chunksRef.current.push(event.data);
            };

            recorder.onstop = () => {
                const blob = new Blob(chunksRef.current, {
                    type: recorder.mimeType || 'audio/webm',
                });

                const newAudioUrl = URL.createObjectURL(blob);
                pendingAudioUrlRef.current = newAudioUrl;
                oldAudioUrlRef.current = newAudioUrl;

                recorderStoppedRef.current = true;
                releaseMediaStream();
                finalizeRecording();
            };

            recorder.onerror = () => {
                setErrorMessage('Có lỗi xảy ra trong quá trình ghi âm.');
            };

            recorder.start(250);
            setIsRecording(true);

            timerRef.current = setInterval(() => {
                setElapsedSeconds((previous) => {
                    const next = previous + 1;

                    if (next >= MAX_RECORDING_SECONDS) {
                        if (
                            mediaRecorderRef.current?.state === 'recording'
                        ) {
                            mediaRecorderRef.current.stop();
                        }
                        if (recognitionRef.current) {
                            try {
                                recognitionRef.current.stop();
                            } catch {
                                /* ignore */
                            }
                        }
                        setIsRecording(false);
                        clearTimer();
                    }

                    return next;
                });
            }, 1000);

            const SpeechRecognition =
                typeof window !== 'undefined'
                    ? window.SpeechRecognition ||
                    window.webkitSpeechRecognition
                    : undefined;

            if (!SpeechRecognition) {
                setIsSpeechRecognitionSupported(false);
                recognitionEndedRef.current = true;
                return;
            }

            const recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.continuous = true;
            recognition.maxAlternatives = 1;

            recognition.onresult = (event) => {
                const finalResults: string[] = [];

                for (let i = 0; i < event.results.length; i++) {
                    const result = event.results[i];
                    if (result?.isFinal) {
                        const text = result[0]?.transcript?.trim();
                        if (text) finalResults.push(text);
                    }
                }

                if (finalResults.length === 0) return;

                const nextTranscript = finalResults.join(' ').trim();
                transcriptRef.current = nextTranscript;
                setTranscript(nextTranscript);

                const score = calculateSimilarity(
                    nextTranscript,
                    question.promptText,
                );
                setAccuracyScore(score);
            };

            recognition.onerror = (event) => {
                if (event.error !== 'aborted' && event.error !== 'no-speech') {
                    setErrorMessage(
                        `Speech Recognition lỗi: ${event.error}`,
                    );
                }
            };

            recognition.onend = () => {
                recognitionEndedRef.current = true;
                finalizeRecording();
            };

            recognitionRef.current = recognition;
            recognitionEndedRef.current = false;

            try {
                recognition.start();
            } catch (recognitionError) {
                console.warn('SpeechRecognition start failed:', recognitionError);
                recognitionEndedRef.current = true;
            }
        } catch (error) {
            console.error('Failed to start recording:', error);

            releaseMediaStream();
            clearTimer();
            setIsRecording(false);
            setErrorMessage(
                'Không thể truy cập Microphone. Hãy kiểm tra quyền microphone của trình duyệt.',
            );

            onChange({completed: false});
        }
    };

    const stopRecording = () => {
        if (!isRecording) return;

        setIsRecording(false);
        clearTimer();

        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch {
                recognitionEndedRef.current = true;
            }
        } else {
            recognitionEndedRef.current = true;
        }

        if (
            mediaRecorderRef.current &&
            mediaRecorderRef.current.state !== 'inactive'
        ) {
            mediaRecorderRef.current.stop();
        }
    };

    const clearRecording = () => {
        if (oldAudioUrlRef.current?.startsWith('blob:')) {
            URL.revokeObjectURL(oldAudioUrlRef.current);
        }
        oldAudioUrlRef.current = undefined;

        setAudioUrl(undefined);
        setTranscript('');
        setAccuracyScore(null);
        setNoSpeechDetected(false);
        setElapsedSeconds(0);

        transcriptRef.current = '';

        onChange({completed: false});
    };

    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const getScoreLabel = (score: number) => {
        if (score >= 90) return 'Rất tốt';
        if (score >= 80) return 'Tốt';
        if (score >= 70) return 'Đạt';
        if (score >= 50) return 'Cần luyện thêm';
        return 'Cần luyện tập nhiều hơn';
    };

    const passed =
        !noSpeechDetected &&
        accuracyScore !== null &&
        accuracyScore >= MIN_PASS_SCORE;

    const hasResult = accuracyScore !== null || noSpeechDetected;

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center">
                <div className="space-y-3">
                    <span className="block text-xs font-bold uppercase tracking-wider text-amber-700">
                        Read Aloud Prompt
                    </span>

                    <blockquote className="text-xl font-bold italic text-zinc-900">
                        "{question.promptText}"
                    </blockquote>

                    {question.targetPhonetics && (
                        <p className="font-mono text-sm text-zinc-500">
                            /{question.targetPhonetics}/
                        </p>
                    )}

                    {question.sampleAudioUrl && (
                        <div className="flex flex-col items-center gap-1.5 pt-2">
                            <span className="text-xs font-medium text-zinc-500">
                                Nghe phát âm mẫu:
                            </span>
                            <audio
                                controls
                                preload="metadata"
                                src={question.sampleAudioUrl}
                                className="h-9 w-full max-w-xs"
                            />
                        </div>
                    )}
                </div>
            </div>

            {errorMessage && (
                <div
                    role="alert"
                    className="rounded-lg border border-red-300 bg-red-100 p-3 text-center text-sm text-red-700"
                >
                    {errorMessage}
                </div>
            )}

            {!isSpeechRecognitionSupported && (
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-center text-sm text-amber-800">
                    Trình duyệt không hỗ trợ nhận diện giọng nói. Bạn vẫn có
                    thể ghi âm, nhưng hệ thống sẽ không tạo transcript và điểm
                    tự động.
                </div>
            )}

            <div className="flex flex-col items-center justify-center gap-4 py-2">
                {isRecording ? (
                    <>
                        <button
                            type="button"
                            onClick={stopRecording}
                            className="flex cursor-pointer items-center gap-2 rounded-full bg-zinc-800 px-6 py-3 font-semibold text-white transition-all hover:bg-zinc-700"
                        >
                            <span>⏹</span>
                            <span>Stop Recording</span>
                        </button>

                        <div
                            className="text-sm font-medium text-zinc-500"
                            aria-live="polite"
                        >
                            Đang ghi âm • {formatTime(elapsedSeconds)} /{' '}
                            {formatTime(MAX_RECORDING_SECONDS)}
                        </div>
                    </>
                ) : (
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            disabled={disabled}
                            onClick={startRecording}
                            className="flex cursor-pointer items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-red-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <span>🎤</span>
                            {audioUrl ? 'Record Again' : 'Start Recording'}
                        </button>

                        {(audioUrl || transcript) && !disabled && (
                            <button
                                type="button"
                                onClick={clearRecording}
                                className="cursor-pointer rounded-full border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-700 transition-all hover:bg-zinc-50"
                            >
                                Xoá
                            </button>
                        )}
                    </div>
                )}

                {audioUrl && !isRecording && (
                    <div className="mt-2 flex w-full max-w-md flex-col items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                        <span className="text-xs font-medium text-zinc-500">
                            Bản ghi âm của bạn:
                        </span>
                        <audio
                            controls
                            preload="metadata"
                            src={audioUrl}
                            className="w-full"
                        />
                    </div>
                )}

                {showFeedback && !hasResult && (
                    <div className="w-full max-w-md rounded-xl border border-amber-200 bg-amber-50 p-4 text-center text-sm text-amber-800">
                        Bạn chưa ghi âm câu trả lời. Hãy bấm "Start
                        Recording" và đọc to câu trên.
                    </div>
                )}

                {showFeedback && hasResult && (
                    <div className="mt-2 w-full max-w-md space-y-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                        <div className="flex items-center justify-between gap-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                                Kết quả
                            </span>

                            {noSpeechDetected ? (
                                <span className="rounded-full bg-zinc-200 px-2.5 py-1 text-xs font-bold text-zinc-700">
                                    KHÔNG CÓ TIẾNG
                                </span>
                            ) : (
                                accuracyScore !== null && (
                                    <span
                                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${passed
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-700'
                                            }`}
                                    >
                                        {passed ? 'PASS' : 'FAIL'} •{' '}
                                        {accuracyScore}%
                                    </span>
                                )
                            )}
                        </div>

                        {noSpeechDetected && (
                            <p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
                                Không nhận diện được giọng nói. Hãy thử ghi
                                âm lại và đọc to, rõ ràng hơn.
                            </p>
                        )}

                        {!noSpeechDetected && accuracyScore !== null && (
                            <div>
                                <div className="mb-1 flex items-center justify-between text-xs">
                                    <span className="text-zinc-500">
                                        Độ khớp nội dung
                                    </span>
                                    <span className="font-semibold text-zinc-700">
                                        {getScoreLabel(accuracyScore)}
                                    </span>
                                </div>

                                <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                                    <div
                                        className={`h-full rounded-full transition-all duration-500 ${accuracyScore >= MIN_PASS_SCORE
                                            ? 'bg-green-500'
                                            : accuracyScore >= 50
                                                ? 'bg-amber-500'
                                                : 'bg-red-500'
                                            }`}
                                        style={{
                                            width: `${Math.max(
                                                0,
                                                Math.min(100, accuracyScore),
                                            )}%`,
                                        }}
                                    />
                                </div>

                                <p className="mt-1 text-[11px] text-zinc-400">
                                    Cần đạt tối thiểu {MIN_PASS_SCORE}% để pass.
                                </p>
                            </div>
                        )}

                        <div>
                            <div className="mb-1 text-xs font-medium text-zinc-500">
                                Bạn đã nói:
                            </div>
                            <p className="rounded-lg border border-zinc-100 bg-white p-3 text-sm italic text-zinc-800">
                                "
                                {transcript ||
                                    'Không nhận diện được giọng nói.'}
                                "
                            </p>
                        </div>

                        {!noSpeechDetected && transcript && (
                            <div>
                                <div className="mb-1 text-xs font-medium text-zinc-500">
                                    Đối chiếu từng từ:
                                </div>
                                <div className="flex flex-wrap gap-1.5 rounded-lg border border-zinc-100 bg-white p-3">
                                    {getWordFeedback(
                                        transcript,
                                        question.promptText,
                                    ).map((feedback, index) => (
                                        <span
                                            key={index}
                                            className={`rounded px-2 py-0.5 text-sm font-medium ${feedback.matched
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700 line-through'
                                                }`}
                                        >
                                            {feedback.word}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-1 text-[11px] text-zinc-400">
                                    <span className="text-green-700">
                                        Xanh
                                    </span>{' '}
                                    = đã đọc đúng,{' '}
                                    <span className="text-red-700">Đỏ</span> =
                                    còn thiếu / đọc sai.
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};