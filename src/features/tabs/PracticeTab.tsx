import {useState} from "react";
import type {Question} from "../../types";
import {PracticeConfig} from "../practice/PracticeConfig";
import {PracticeSession} from "../practice/PracticeSession";

export default function PracticeTab() {
    const [activePracticeQuestions, setActivePracticeQuestions] = useState<Question[] | null>(null);

    if (!activePracticeQuestions) {
        return <PracticeConfig onStart={setActivePracticeQuestions} />;
    }

    return (
        <PracticeSession
            questions={activePracticeQuestions}
            onFinish={() => setActivePracticeQuestions(null)}
        />
    );
}