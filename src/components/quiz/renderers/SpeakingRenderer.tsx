import React, {useCallback, useEffect, useRef, useState} from 'react';

import type {SpeakingQuestion} from '../../../types';

interface SpeakingValue {
    completed: boolean;
    recordingUrl?: string;
    transcript?: string;
    score?: number;
}

interface Props {
    question: SpeakingQuestion;
    value?: SpeakingValue;
    onChange: (value: SpeakingValue) => void;
    disabled?: boolean;
}

/**
 * Minimal typings for Web Speech API.
 * Some browsers expose this as SpeechRecognition,
 * others as webkitSpeechRecognition.
 */
interface SpeechRecognitionResultLike {
    isFinal: boolean;
    [index: number]: {
        transcript: string;
        confidence?: number;
    };
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

    onresult:
    | ((event: SpeechRecognitionEventLike) => void)
    | null;

    onerror:
    | ((event: SpeechRecognitionErrorEventLike) => void)
    | null;

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

/**
 * Normalize text before comparing.
 *
 * Example:
 * "Hello, WORLD!"
 * -> ["hello", "world"]
 */
const normalizeWords = (text: string): string[] => {
    return text
        .normalize('NFKC')
        .toLowerCase()
        .replace(/[^\p{L}\p{N}']+/gu, ' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean);
};

/**
 * Word-level Levenshtein distance.
 *
 * This evaluates:
 * - correct words
 * - missing words
 * - extra words
 * - wrong word order
 *
 * Much more appropriate than targetWords.includes().
 */
const calculateSimilarity = (
    spoken: string,
    target: string,
): number => {
    const spokenWords = normalizeWords(spoken);
    const targetWords = normalizeWords(target);

    if (targetWords.length === 0) {
        return 0;
    }

    if (spokenWords.length === 0) {
        return 0;
    }

    const rows = targetWords.length + 1;
    const cols = spokenWords.length + 1;

    const matrix: number[][] = Array.from(
        {length: rows},
        (_, row) =>
            Array.from(
                {length: cols},
                (_, col) => {
                    if (row === 0) return col;
                    if (col === 0) return row;
                    return 0;
                },
            ),
    );

    for (let row = 1; row < rows; row++) {
        for (let col = 1; col < cols; col++) {
            const targetWord = targetWords[row - 1];
            const spokenWord = spokenWords[col - 1];

            const substitutionCost =
                targetWord === spokenWord ? 0 : 1;

            matrix[row][col] = Math.min(
                matrix[row - 1][col] + 1, // deletion
                matrix[row][col - 1] + 1, // insertion
                matrix[row - 1][col - 1] + substitutionCost,
            );
        }
    }

    const distance = matrix[rows - 1][cols - 1];
    const maxLength = Math.max(
        targetWords.length,
        spokenWords.length,
    );

    const score =
        1 - distance / maxLength;

    return Math.max(
        0,
        Math.min(100, Math.round(score * 100)),
    );
};

export const SpeakingRenderer: React.FC<Props> = ({
    question,
    value,
    onChange,
    disabled = false,
}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    const [audioUrl, setAudioUrl] = useState<string | undefined>(
        value?.recordingUrl,
    );

    const [transcript, setTranscript] = useState(
        value?.transcript ?? '',
    );

    const [accuracyScore, setAccuracyScore] =
        useState<number | null>(
            value?.score ?? null,
        );

    const [errorMessage, setErrorMessage] =
        useState<string | null>(null);

    const [isSpeechRecognitionSupported, setIsSpeechRecognitionSupported] =
        useState(true);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);

    const mediaStreamRef = useRef<MediaStream | null>(null);

    const recognitionRef =
        useRef<SpeechRecognitionLike | null>(null);

    const chunksRef = useRef<Blob[]>([]);

    const transcriptRef = useRef('');

    const pendingAudioUrlRef =
        useRef<string | undefined>(undefined);

    const recorderStoppedRef = useRef(false);

    const recognitionEndedRef = useRef(true);

    const finalizedRef = useRef(false);

    const timerRef =
        useRef<ReturnType<typeof setInterval> | null>(null);

    const oldAudioUrlRef =
        useRef<string | undefined>(undefined);

    /**
     * Keep local state in sync when parent value changes.
     */
    useEffect(() => {
        setAudioUrl(value?.recordingUrl);
        setTranscript(value?.transcript ?? '');
        setAccuracyScore(value?.score ?? null);

        transcriptRef.current =
            value?.transcript ?? '';
    }, [
        value?.recordingUrl,
        value?.transcript,
        value?.score,
    ]);

    /**
     * Detect SpeechRecognition support.
     */
    useEffect(() => {
        if (typeof window === 'undefined') {
            setIsSpeechRecognitionSupported(false);
            return;
        }

        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        setIsSpeechRecognitionSupported(
            Boolean(SpeechRecognition),
        );
    }, []);

    /**
     * Cleanup when component unmounts.
     */
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }

            if (recognitionRef.current) {
                try {
                    recognitionRef.current.abort();
                } catch {
                    // Ignore cleanup errors.
                }
            }

            if (mediaRecorderRef.current?.state === 'recording') {
                try {
                    mediaRecorderRef.current.stop();
                } catch {
                    // Ignore cleanup errors.
                }
            }

            mediaStreamRef.current
                ?.getTracks()
                .forEach((track) => track.stop());

            if (
                audioUrl?.startsWith('blob:')
            ) {
                URL.revokeObjectURL(audioUrl);
            }
        };
    }, [audioUrl]);

    const clearTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };

    const releaseMediaStream = () => {
        mediaStreamRef.current
            ?.getTracks()
            .forEach((track) => track.stop());

        mediaStreamRef.current = null;
    };

    /**
     * Finalize only when BOTH:
     *
     * 1. MediaRecorder stopped
     * 2. SpeechRecognition ended
     *
     * This fixes the main race-condition in the original code.
     */
    const finalizeRecording = useCallback(() => {
        if (finalizedRef.current) {
            return;
        }

        if (!recorderStoppedRef.current) {
            return;
        }

        if (!recognitionEndedRef.current) {
            return;
        }

        finalizedRef.current = true;

        const finalAudioUrl =
            pendingAudioUrlRef.current;

        const finalTranscript =
            transcriptRef.current.trim();

        const finalScore =
            finalTranscript.length > 0
                ? calculateSimilarity(
                    finalTranscript,
                    question.promptText,
                )
                : undefined;

        setAudioUrl(finalAudioUrl);
        setTranscript(finalTranscript);
        setAccuracyScore(
            finalScore ?? null,
        );

        onChange({
            completed: true,
            recordingUrl: finalAudioUrl,
            transcript:
                finalTranscript || undefined,
            score: finalScore,
        });
    }, [
        onChange,
        question.promptText,
    ]);

    const startRecording = async () => {
        if (disabled || isRecording) {
            return;
        }

        setErrorMessage(null);
        setElapsedSeconds(0);
        setTranscript('');
        setAccuracyScore(null);

        transcriptRef.current = '';
        chunksRef.current = [];

        recorderStoppedRef.current = false;
        recognitionEndedRef.current = true;
        finalizedRef.current = false;

        pendingAudioUrlRef.current = undefined;

        /**
         * Revoke previous blob URL before replacing it.
         */
        if (
            oldAudioUrlRef.current?.startsWith('blob:')
        ) {
            URL.revokeObjectURL(
                oldAudioUrlRef.current,
            );
        }

        oldAudioUrlRef.current = undefined;

        setAudioUrl(undefined);

        try {
            if (
                typeof navigator === 'undefined' ||
                !navigator.mediaDevices?.getUserMedia
            ) {
                throw new Error(
                    'Microphone API is not supported.',
                );
            }

            if (
                typeof MediaRecorder === 'undefined'
            ) {
                throw new Error(
                    'MediaRecorder is not supported.',
                );
            }

            const stream =
                await navigator.mediaDevices.getUserMedia({
                    audio: {
                        echoCancellation: true,
                        noiseSuppression: true,
                        autoGainControl: true,
                    },
                });

            mediaStreamRef.current = stream;

            /**
             * Pick the best supported MIME type.
             */
            const supportedMimeTypes = [
                'audio/webm;codecs=opus',
                'audio/webm',
                'audio/mp4',
            ];

            const mimeType =
                supportedMimeTypes.find((type) =>
                    MediaRecorder.isTypeSupported(type),
                );

            const recorder = mimeType
                ? new MediaRecorder(stream, {
                    mimeType,
                })
                : new MediaRecorder(stream);

            mediaRecorderRef.current = recorder;

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunksRef.current.push(
                        event.data,
                    );
                }
            };

            recorder.onstop = () => {
                const blob = new Blob(
                    chunksRef.current,
                    {
                        type:
                            recorder.mimeType ||
                            'audio/webm',
                    },
                );

                const newAudioUrl =
                    URL.createObjectURL(blob);

                pendingAudioUrlRef.current =
                    newAudioUrl;

                oldAudioUrlRef.current =
                    newAudioUrl;

                recorderStoppedRef.current =
                    true;

                releaseMediaStream();

                finalizeRecording();
            };

            recorder.onerror = () => {
                setErrorMessage(
                    'Có lỗi xảy ra trong quá trình ghi âm.',
                );
            };

            recorder.start(250);

            setIsRecording(true);

            /**
             * Recording timer.
             */
            timerRef.current = setInterval(() => {
                setElapsedSeconds((previous) => {
                    const next = previous + 1;

                    if (
                        next >=
                        MAX_RECORDING_SECONDS
                    ) {
                        /**
                         * Automatically stop when
                         * maximum duration is reached.
                         */
                        if (
                            mediaRecorderRef.current
                                ?.state === 'recording'
                        ) {
                            mediaRecorderRef.current.stop();
                        }

                        if (
                            recognitionRef.current
                        ) {
                            try {
                                recognitionRef.current.stop();
                            } catch {
                                // Ignore.
                            }
                        }

                        setIsRecording(false);
                        clearTimer();
                    }

                    return next;
                });
            }, 1000);

            /**
             * Setup SpeechRecognition.
             */
            const SpeechRecognition =
                typeof window !== 'undefined'
                    ? window.SpeechRecognition ||
                    window.webkitSpeechRecognition
                    : undefined;

            if (!SpeechRecognition) {
                setIsSpeechRecognitionSupported(false);

                /**
                 * We can still record audio.
                 * Just don't pretend that we have
                 * a transcript / score.
                 */
                recognitionEndedRef.current =
                    true;

                return;
            }

            const recognition =
                new SpeechRecognition();

            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.continuous = true;
            recognition.maxAlternatives = 1;

            recognition.onresult = (event) => {
                const finalResults: string[] = [];

                for (
                    let i = 0;
                    i < event.results.length;
                    i++
                ) {
                    const result =
                        event.results[i];

                    if (result?.isFinal) {
                        const text =
                            result[0]?.transcript?.trim();

                        if (text) {
                            finalResults.push(text);
                        }
                    }
                }

                if (
                    finalResults.length === 0
                ) {
                    return;
                }

                const nextTranscript =
                    finalResults.join(' ').trim();

                transcriptRef.current =
                    nextTranscript;

                setTranscript(
                    nextTranscript,
                );

                const score =
                    calculateSimilarity(
                        nextTranscript,
                        question.promptText,
                    );

                setAccuracyScore(score);
            };

            recognition.onerror = (
                event,
            ) => {
                /**
                 * "aborted" / "no-speech"
                 * are not fatal for the recorder.
                 */
                if (
                    event.error !== 'aborted' &&
                    event.error !== 'no-speech'
                ) {
                    setErrorMessage(
                        `Speech Recognition lỗi: ${event.error}`,
                    );
                }
            };

            recognition.onend = () => {
                recognitionEndedRef.current =
                    true;

                finalizeRecording();
            };

            recognitionRef.current =
                recognition;

            recognitionEndedRef.current =
                false;

            try {
                recognition.start();
            } catch (recognitionError) {
                console.warn(
                    'SpeechRecognition start failed:',
                    recognitionError,
                );

                recognitionEndedRef.current =
                    true;
            }
        } catch (error) {
            console.error(
                'Failed to start recording:',
                error,
            );

            releaseMediaStream();

            clearTimer();

            setIsRecording(false);

            setErrorMessage(
                'Không thể truy cập Microphone. Hãy kiểm tra quyền microphone của trình duyệt.',
            );

            /**
             * IMPORTANT:
             * Do NOT mark completed=true here.
             */
            onChange({
                completed: false,
            });
        }
    };

    const stopRecording = () => {
        if (!isRecording) {
            return;
        }

        setIsRecording(false);
        clearTimer();

        /**
         * Stop speech recognition first.
         * onend will eventually call finalizeRecording().
         */
        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch {
                recognitionEndedRef.current =
                    true;
            }
        } else {
            recognitionEndedRef.current =
                true;
        }

        /**
         * Then stop MediaRecorder.
         */
        if (
            mediaRecorderRef.current &&
            mediaRecorderRef.current.state !==
            'inactive'
        ) {
            mediaRecorderRef.current.stop();
        }
    };

    const formatTime = (
        totalSeconds: number,
    ) => {
        const minutes = Math.floor(
            totalSeconds / 60,
        );

        const seconds =
            totalSeconds % 60;

        return `${minutes}:${seconds
            .toString()
            .padStart(2, '0')}`;
    };

    const getScoreLabel = (
        score: number,
    ) => {
        if (score >= 90) {
            return 'Rất tốt';
        }

        if (score >= 80) {
            return 'Tốt';
        }

        if (score >= 60) {
            return 'Khá';
        }

        if (score >= 40) {
            return 'Cần luyện thêm';
        }

        return 'Cần luyện tập nhiều hơn';
    };

    return (
        <div className="space-y-6">
            {/* Prompt */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center dark:border-amber-900/40 dark:bg-amber-950/20">
                <div className="space-y-3">
                    <span className="block text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                        Read Aloud Prompt
                    </span>

                    <blockquote className="text-xl font-bold italic text-zinc-900 dark:text-zinc-100">
                        "{question.promptText}"
                    </blockquote>

                    {question.targetPhonetics && (
                        <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
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
                                src={
                                    question.sampleAudioUrl
                                }
                                className="h-9 w-full max-w-xs"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Error */}
            {errorMessage && (
                <div
                    role="alert"
                    className="rounded-lg border border-red-300 bg-red-100 p-3 text-center text-sm text-red-700"
                >
                    {errorMessage}
                </div>
            )}

            {/* Browser capability warning */}
            {!isSpeechRecognitionSupported && (
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-center text-sm text-amber-800 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-300">
                    Trình duyệt không hỗ trợ nhận diện
                    giọng nói. Bạn vẫn có thể ghi âm,
                    nhưng hệ thống sẽ không tạo transcript
                    và điểm tự động.
                </div>
            )}

            {/* Controls */}
            <div className="flex flex-col items-center justify-center gap-4 py-2">
                {isRecording ? (
                    <>
                        <button
                            type="button"
                            onClick={stopRecording}
                            className="flex cursor-pointer items-center gap-2 rounded-full bg-zinc-800 px-6 py-3 font-semibold text-white transition-all hover:bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-white"
                        >
                            <span>⏹</span>

                            <span>
                                Stop Recording
                            </span>
                        </button>

                        <div
                            className="text-sm font-medium text-zinc-500"
                            aria-live="polite"
                        >
                            Đang ghi âm •{' '}
                            {formatTime(
                                elapsedSeconds,
                            )}{' '}
                            /{' '}
                            {formatTime(
                                MAX_RECORDING_SECONDS,
                            )}
                        </div>
                    </>
                ) : (
                    <button
                        type="button"
                        disabled={disabled}
                        onClick={startRecording}
                        className="flex cursor-pointer items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-red-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <span>🎤</span>

                        {audioUrl
                            ? 'Record Again'
                            : 'Start Recording'}
                    </button>
                )}

                {/* Recording */}
                {audioUrl && !isRecording && (
                    <div className="mt-2 flex w-full max-w-md flex-col items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
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

                {/* Evaluation */}
                {(transcript ||
                    accuracyScore !== null) && (
                        <div className="mt-2 w-full max-w-md space-y-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                                    Kết quả
                                </span>

                                {accuracyScore !==
                                    null && (
                                        <span
                                            className={`rounded-full px-2.5 py-1 text-xs font-bold ${accuracyScore >=
                                                80
                                                ? 'bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400'
                                                : accuracyScore >=
                                                    50
                                                    ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400'
                                                    : 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400'
                                                }`}
                                        >
                                            {accuracyScore}%
                                        </span>
                                    )}
                            </div>

                            {accuracyScore !==
                                null && (
                                    <div>
                                        <div className="mb-1 flex items-center justify-between text-xs">
                                            <span className="text-zinc-500">
                                                Độ khớp nội dung
                                            </span>

                                            <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                                                {getScoreLabel(
                                                    accuracyScore,
                                                )}
                                            </span>
                                        </div>

                                        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${accuracyScore >= 80
                                                    ? 'bg-green-500'
                                                    : accuracyScore >= 50
                                                        ? 'bg-amber-500'
                                                        : 'bg-red-500'
                                                    }`}
                                                style={{
                                                    width: `${Math.max(0, Math.min(100, accuracyScore))}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}

                            <div>
                                <div className="mb-1 text-xs font-medium text-zinc-500">
                                    Bạn đã nói:
                                </div>

                                <p className="rounded-lg border border-zinc-100 bg-white p-3 text-sm italic text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                                    "
                                    {transcript ||
                                        'Không nhận diện được giọng nói.'}
                                    "
                                </p>
                            </div>

                            <div>
                                <div className="mb-1 text-xs font-medium text-zinc-500">
                                    Câu chuẩn:
                                </div>

                                <p className="rounded-lg border border-zinc-100 bg-white p-3 text-sm text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                                    "{question.promptText}"
                                </p>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};