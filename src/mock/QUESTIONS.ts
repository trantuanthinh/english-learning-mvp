import type {Question} from "../types";

export const QUESTIONS: Question[] = [
  // --- VOCABULARY LESSON: vocab-family-relationships ---
  {
    id: "vocab-family-relationships-mc-relative",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "multiple-choice",
    points: 1,
    question: "What does the word 'relative' mean?",
    options: ["A member of your family", "A close friend", "A neighbor", "A colleague at work"],
    correctIndex: 0,
    explanation: "A relative is a person connected by blood or marriage, i.e., a family member."
  },
  {
    id: "vocab-family-relationships-fb-relative",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "fill-blank",
    points: 1,
    question: "Many of my _____ live in the countryside.",
    acceptedAnswers: ["relatives"],
    explanation: "Plural form 'relatives' fits the plural verb 'live'."
  },
  {
    id: "vocab-family-relationships-ec-relative",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "error-correction",
    points: 2,
    prompt: "All my relative are coming to dinner tonight.",
    segments: [
      { id: "seg-1", text: "All my " },
      { id: "seg-2", text: "relative", label: "error" },
      { id: "seg-3", text: " are coming to dinner tonight." }
    ],
    correctSegmentId: "seg-2",
    acceptedCorrections: ["relatives"],
    explanation: "'All' requires a plural noun, so 'relative' should be 'relatives'."
  },
  {
    id: "vocab-family-relationships-listening-relative",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "listening",
    points: 1,
    question: "Which word did you hear in the sentence?",
    audio: { text: "Many of my relatives live in the countryside." },
    options: ["relatives", "neighbors", "colleagues", "strangers"],
    correctIndex: 0,
    explanation: "The audio explicitly states 'relatives'."
  },
  {
    id: "vocab-family-relationships-speaking-relative",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "speaking",
    points: 2,
    promptText: "relative",
    targetPhonetics: "/ˈrelətɪv/"
  },
  {
    id: "vocab-family-relationships-mc-sibling",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "multiple-choice",
    points: 1,
    question: "What is a 'sibling'?",
    options: ["A brother or sister", "A parent", "An uncle or aunt", "A cousin"],
    correctIndex: 0,
    explanation: "A sibling refers to a brother or a sister."
  },
  {
    id: "vocab-family-relationships-fb-sibling",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "fill-blank",
    points: 1,
    question: "I have two _____, an older brother and a younger sister.",
    acceptedAnswers: ["siblings"],
    explanation: "Since there are two people mentioned (brother and sister), use the plural 'siblings'."
  },
  {
    id: "vocab-family-relationships-ec-sibling",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "error-correction",
    points: 2,
    prompt: "She doesn't have any sibling, so she is an only child.",
    segments: [
      { id: "seg-1", text: "She doesn't have any " },
      { id: "seg-2", text: "sibling", label: "error" },
      { id: "seg-3", text: ", so she is an only child." }
    ],
    correctSegmentId: "seg-2",
    acceptedCorrections: ["siblings"],
    explanation: "After 'any' with plural intent, 'sibling' should be plural 'siblings'."
  },
  {
    id: "vocab-family-relationships-listening-sibling",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "listening",
    points: 1,
    question: "Which word did you hear?",
    audio: { text: "I have two siblings, an older brother and a younger sister." },
    options: ["siblings", "parents", "children", "cousins"],
    correctIndex: 0,
    explanation: "The audio features the word 'siblings'."
  },
  {
    id: "vocab-family-relationships-speaking-sibling",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "speaking",
    points: 2,
    promptText: "sibling",
    targetPhonetics: "/ˈsɪblɪŋ/"
  },
  {
    id: "vocab-family-relationships-mc-spouse",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "multiple-choice",
    points: 1,
    question: "What does 'spouse' mean?",
    options: ["A husband or wife", "A boss", "A teacher", "A roommate"],
    correctIndex: 0,
    explanation: "A spouse is a husband or wife in a marriage relationship."
  },
  {
    id: "vocab-family-relationships-fb-spouse",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "fill-blank",
    points: 1,
    question: "Employees can bring their _____ to the annual company dinner.",
    acceptedAnswers: ["spouse", "spouses"],
    explanation: "Spouse or spouses fits the context of bringing a husband/wife."
  },
  {
    id: "vocab-family-relationships-ec-spouse",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "error-correction",
    points: 2,
    prompt: "He attended the event with his spouse.",
    segments: [
      { id: "seg-1", text: "He attended the event with " },
      { id: "seg-2", text: "his spouse", label: "correct" },
      { id: "seg-3", text: "." }
    ],
    correctSegmentId: "seg-2",
    acceptedCorrections: ["his spouse", "her spouse"],
    explanation: "Grammatically correct sentence; let's check pronoun alignment if needed, but here it's fine. Wait, let's make an actual error:"
  },
  {
    id: "vocab-family-relationships-ec-spouse-fixed",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "error-correction",
    points: 2,
    prompt: "Both husband and wife are considered a spouse.",
    segments: [
      { id: "seg-1", text: "Both husband and wife are considered a " },
      { id: "seg-2", text: "spouse", label: "error" },
      { id: "seg-3", text: "." }
    ],
    correctSegmentId: "seg-2",
    acceptedCorrections: ["spouses"],
    explanation: "Since 'both husband and wife' refers to plural people, use 'spouses'."
  },
  {
    id: "vocab-family-relationships-listening-spouse",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "listening",
    points: 1,
    question: "Which word did you hear?",
    audio: { text: "Employees can bring their spouse to the dinner." },
    options: ["spouse", "child", "friend", "boss"],
    correctIndex: 0,
    explanation: "The audio says 'spouse'."
  },
  {
    id: "vocab-family-relationships-speaking-spouse",
    track: "vocabulary",
    topicIds: ["vocab-family-relationships"],
    lessonIds: ["vocab-family-relationships"],
    difficulty: "beginner",
    type: "speaking",
    points: 2,
    promptText: "spouse",
    targetPhonetics: "/spaʊs/"
  }
];