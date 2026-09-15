import type {Lesson} from "../types";

export const PRONUNCIATION_DATA: Lesson[] = [
    {
        id: "pronunciation-ipa-basics",
        title: "Introduction to IPA",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 10,
        description: "Learn what the International Phonetic Alphabet (IPA) is and why it is essential for mastering English pronunciation.",
        content: {
            theory: `
The International Phonetic Alphabet (IPA) is a system of phonetic notation where each symbol represents one specific sound. English spelling does not always match pronunciation; IPA provides a reliable guide to pronouncing words correctly.

Key points:
- Every symbol represents a single, unique sound.
- Slashes / / indicate phonemic transcription.
- Mastering IPA helps you self-correct without relying entirely on audio recordings.
      `,
            examples: [
                "cat /kæt/",
                "dog /dɒɡ/",
                "ship /ʃɪp/",
                "sheep /ʃiːp/"
            ]
        },
        questionIds: [
            "pronunciation-q-ipa-basics-001",
            "pronunciation-q-ipa-basics-002",
            "pronunciation-q-ipa-basics-003",
            "pronunciation-q-ipa-basics-004"
        ]
    },
    {
        id: "pronunciation-vowels-intro",
        title: "English Vowel Sounds & Monophthongs",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 12,
        description: "Explore English monophthongs (single vowel sounds) and how mouth positioning changes vowel quality.",
        content: {
            theory: `
Monophthongs are single, pure vowel sounds where your tongue and lips do not move while producing the sound.

Mouth position:
- Tongue height (high, mid, low) and tongue position (front, central, back) determine vowel sound quality.
- Lip rounding also plays a crucial role.
      `,
            examples: [
                "sit /sɪt/",
                "set /set/",
                "sat /sæt/",
                "oot (boot) /buːt/"
            ]
        },
        questionIds: [
            "pronunciation-q-vowels-intro-001",
            "pronunciation-q-vowels-intro-002",
            "pronunciation-q-vowels-intro-003",
            "pronunciation-q-vowels-intro-004"
        ]
    },
    {
        id: "pronunciation-consonants-intro",
        title: "English Consonant Sounds",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 12,
        description: "Understand the core classification of consonant sounds by voicing, place, and manner of articulation.",
        content: {
            theory: `
Consonants are sounds produced by obstructing airflow in the vocal tract.

Key classifications:
- Voiceless consonants: Produced without vocal cord vibration (e.g., /p/, /t/, /s/).
- Voiced consonants: Produced with vocal cord vibration (e.g., /b/, /d/, /z/).
      `,
            examples: [
                "pin /pɪn/ vs bin /bɪn/",
                "tea /tiː/ vs dee /diː/",
                "sip /sɪp/ vs zip /zɪp/"
            ]
        },
        questionIds: [
            "pronunciation-q-cons-intro-001",
            "pronunciation-q-cons-intro-002",
            "pronunciation-q-cons-intro-003",
            "pronunciation-q-cons-intro-004"
        ]
    },
    {
        id: "pronunciation-diphthongs",
        title: "English Diphthongs",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 15,
        description: "Learn gliding vowel sounds (diphthongs) where the mouth transitions smoothly from one vowel target to another.",
        content: {
            theory: `
A diphthong is a combination of two vowel sounds within the same syllable, creating a smooth glide from the first vowel to the second.

Common mistakes:
- Stopping the glide midway or pronouncing only the starting sound.
- Ensure your jaw and lips move dynamically during the sound.
      `,
            examples: [
                "face /feɪs/",
                "time /taɪm/",
                "boy /bɔɪ/",
                "home /həʊm/",
                "house /haʊs/"
            ]
        },
        questionIds: [
            "pronunciation-q-diphthongs-001",
            "pronunciation-q-diphthongs-002",
            "pronunciation-q-diphthongs-003",
            "pronunciation-q-diphthongs-004"
        ]
    },
    {
        id: "pronunciation-ipa-reading",
        title: "How to Read Basic IPA Symbols",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 10,
        description: "Gain practical skills in decoding dictionary transcriptions using basic IPA guidelines.",
        content: {
            theory: `
Reading IPA transcriptions allows you to look up any unfamiliar English word in a dictionary and pronounce it accurately.

Tips:
- Pay attention to stress marks (ˈ for primary stress, ˌ for secondary stress).
- Break long words down syllable by syllable.
      `,
            examples: [
                "computer /kəmˈpjuːtə/",
                "dictionary /ˈdɪkʃənəri/",
                "pronunciation /prəˌnʌnsiˈeɪʃən/"
            ]
        },
        questionIds: [
            "pronunciation-q-ipa-reading-001",
            "pronunciation-q-ipa-reading-002",
            "pronunciation-q-ipa-reading-003",
            "pronunciation-q-ipa-reading-004"
        ]
    },
    {
        id: "pronunciation-vowel-i-long-short",
        title: "Vowel Contrast: /iː/ vs /ɪ/",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 12,
        description: "Master the difference between the tense long /iː/ and lax short /ɪ/ vowel sounds.",
        content: {
            theory: `
Distinguishing /iː/ and /ɪ/ prevents embarrassing misunderstandings in vocabulary.

Mouth position:
- /iː/: Lips spread wide in a smile, tongue high and tense near the roof of the mouth.
- /ɪ/: Tongue slightly lower and more relaxed, mouth slightly more open.
      `,
            examples: [
                "ship /ʃɪp/ vs sheep /ʃiːp/",
                "sit /sɪt/ vs seat /siːt/",
                "hit /hɪt/ vs heat /hiːt/",
                "live /lɪv/ vs leave /liːv/"
            ]
        },
        questionIds: [
            "pronunciation-q-vowel-i-001",
            "pronunciation-q-vowel-i-002",
            "pronunciation-q-vowel-i-003",
            "pronunciation-q-vowel-i-004"
        ]
    },
    {
        id: "pronunciation-vowel-u-long-short",
        title: "Vowel Contrast: /uː/ vs /ʊ/",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 12,
        description: "Master the difference between the long back /uː/ and short lax /ʊ/ sounds.",
        content: {
            theory: `
Differentiating /uː/ and /ʊ/ improves clarity in common words like 'pool' and 'pull'.

Mouth position:
- /uː/: Lips tightly rounded, tongue pushed back and high.
- /ʊ/: Lips loosely rounded, tongue slightly relaxed and lower.
      `,
            examples: [
                "pull /pʊl/ vs pool /puːl/",
                "full /fʊl/ vs fool /fuːl/",
                "look /lʊk/",
                "food /fuːd/"
            ]
        },
        questionIds: [
            "pronunciation-q-vowel-u-001",
            "pronunciation-q-vowel-u-002",
            "pronunciation-q-vowel-u-003",
            "pronunciation-q-vowel-u-004"
        ]
    },
    {
        id: "pronunciation-vowel-ae-e",
        title: "Vowel Contrast: /æ/ vs /e/",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 12,
        description: "Learn to separate the open front /æ/ sound from the mid-front /e/ sound.",
        content: {
            theory: `
The trap vowel /æ/ requires dropping your jaw wide open, whereas /e/ (as in bed) is produced with a mid-height jaw position.

Common mistake:
- Pronouncing /æ/ as /e/ or /ɑː/.
      `,
            examples: [
                "bad /bæd/ vs bed /bed/",
                "sat /sæt/ vs set /set/",
                "man /mæn/ vs men /men/",
                "cat /kæt/ vs kettle /ˈketl/"
            ]
        },
        questionIds: [
            "pronunciation-q-vowel-ae-001",
            "pronunciation-q-vowel-ae-002",
            "pronunciation-q-vowel-ae-003",
            "pronunciation-q-vowel-ae-004"
        ]
    },
    {
        id: "pronunciation-vowel-ʌ-ɑː",
        title: "Vowel Contrast: /ʌ/ vs /ɑː/",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 12,
        description: "Distinguish between the short central /ʌ/ and long open back /ɑː/ vowel sounds.",
        content: {
            theory: `
The /ʌ/ sound (cup) is short and central, while /ɑː/ (father) is long and produced with an open jaw further back in the mouth.
      `,
            examples: [
                "cup /kʌp/ vs carp /kɑːp/",
                "hut /hʌt/ vs heart /hɑːt/",
                "luck /lʌk/ vs lark /lɑːk/",
                "come /kʌm/"
            ]
        },
        questionIds: [
            "pronunciation-q-vowel-u-a-001",
            "pronunciation-q-vowel-u-a-002",
            "pronunciation-q-vowel-u-a-003",
            "pronunciation-q-vowel-u-a-004"
        ]
    },
    {
        id: "pronunciation-vowel-ɒ-ɔː",
        title: "Vowel Contrast: /ɒ/ vs /ɔː/",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 12,
        description: "Compare the short rounded /ɒ/ sound with the long rounded /ɔː/ sound.",
        content: {
            theory: `
In British English, /ɒ/ is short and open (hot), while /ɔː/ is long and sustained (caught).
      `,
            examples: [
                "cot /kɒt/ vs caught /kɔːt/",
                "pot /pɒt/ vs port /pɔːt/",
                "shot /ʃɒt/ vs short /ʃɔːt/"
            ]
        },
        questionIds: [
            "pronunciation-q-vowel-o-001",
            "pronunciation-q-vowel-o-002",
            "pronunciation-q-vowel-o-003",
            "pronunciation-q-vowel-o-004"
        ]
    },
    {
        id: "pronunciation-schwa",
        title: "The Schwa Sound /ə/",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 15,
        description: "Master the most common vowel sound in English: the weak schwa /ə/ in unstressed syllables.",
        content: {
            theory: `
The schwa /ə/ is a neutral, relaxed central vowel sound. It appears almost exclusively in unstressed syllables and is key to natural English rhythm.

Tips:
- Never stress the schwa syllable.
- Relax your jaw and tongue completely.
      `,
            examples: [
                "banana /bəˈnɑːnə/",
                "teacher /ˈtiːtʃə/",
                "support /səˈpɔːt/",
                "computer /kəmˈpjuːtə/"
            ]
        },
        questionIds: [
            "pronunciation-q-schwa-001",
            "pronunciation-q-schwa-002",
            "pronunciation-q-schwa-003",
            "pronunciation-q-schwa-004"
        ]
    },
    {
        id: "pronunciation-th-sounds",
        title: "Consonant Contrast: /θ/ vs /ð/",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 15,
        description: "Learn how to correctly articulate voiceless /θ/ and voiced /ð/ dental fricatives.",
        content: {
            theory: `
The 'th' sounds require placing the tip of your tongue lightly between your upper and lower teeth, then blowing air through.

Rules:
- /θ/ (voiceless): think, bath (no vocal cord vibration).
- /ð/ (voiced): this, mother (vocal cords vibrate).
      `,
            examples: [
                "think /θɪŋk/ vs this /ðɪs/",
                "breath /breθ/ vs breathe /briːð/",
                "bath /bɑːθ/ vs bathe /beɪð/",
                "three /θriː/"
            ]
        },
        questionIds: [
            "pronunciation-q-th-001",
            "pronunciation-q-th-002",
            "pronunciation-q-th-003",
            "pronunciation-q-th-004"
        ]
    },
    {
        id: "pronunciation-s-vs-sh",
        title: "Consonant Contrast: /s/ vs /ʃ/",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 12,
        description: "Distinguish between the alveolar /s/ and postalveolar /ʃ/ fricatives.",
        content: {
            theory: `
- /s/: Tongue tip points behind upper teeth; air hisses flatly over the tongue.
- /ʃ/: Tongue body raises toward the palate, lips round slightly into a 'shh' shape.
      `,
            examples: [
                "sip /sɪp/ vs ship /ʃɪp/",
                "same /seɪm/ vs shame /ʃeɪm/",
                "Sue /suː/ vs shoe /ʃuː/",
                "sea /siː/ vs she /ʃiː/"
            ]
        },
        questionIds: [
            "pronunciation-q-s-sh-001",
            "pronunciation-q-s-sh-002",
            "pronunciation-q-s-sh-003",
            "pronunciation-q-s-sh-004"
        ]
    },
    {
        id: "pronunciation-plosives-p-b-t-d-k-g",
        title: "Basic Plosives: /p, b, t, d, k, g/",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 15,
        description: "Master stop consonants by building air pressure and releasing it cleanly.",
        content: {
            theory: `
Plosives involve fully blocking airflow and then releasing it with a burst of air.

Aspirations:
- Voiceless plosives (/p/, /t/, /k/) at the start of stressed syllables have an audible puff of air (aspiration).
      `,
            examples: [
                "pin /pɪn/ vs bin /bɪn/",
                "ten /ten/ vs den /den/",
                "cat /kæt/ vs gat (gap)",
                "pig /pɪɡ/"
            ]
        },
        questionIds: [
            "pronunciation-q-plosives-001",
            "pronunciation-q-plosives-002",
            "pronunciation-q-plosives-003",
            "pronunciation-q-plosives-004"
        ]
    },
    {
        id: "pronunciation-f-vs-v",
        title: "Consonant Contrast: /f/ vs /v/",
        track: "pronunciation",
        level: "beginner",
        durationMinutes: 12,
        description: "Learn to produce the labiodental fricatives /f/ (voiceless) and /v/ (voiced).",
        content: {
            theory: `
Place your top teeth lightly on your bottom lip and push air through continuously.

Rules:
- /f/: No voice (fan).
- /v/: Vocal cords vibrate (van).
      `,
            examples: [
                "fan /fæn/ vs van /væn/",
                "fast /fɑːst/ vs vast /vɑːst/",
                "safe /seɪf/ vs save /seɪv/",
                "few /fjuː/"
            ]
        },
        questionIds: [
            "pronunciation-q-fv-001",
            "pronunciation-q-fv-002",
            "pronunciation-q-fv-003",
            "pronunciation-q-fv-004"
        ]
    },
    {
        id: "pronunciation-tʃ-vs-ʃ",
        title: "Consonant Contrast: /tʃ/ vs /ʃ/",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 12,
        description: "Differentiate between the affricate /tʃ/ and the fricative /ʃ/.",
        content: {
            theory: `
- /tʃ/ (ch): Starts with a complete stop /t/ before releasing into /ʃ/.
- /ʃ/ (sh): Continuous friction sound with no initial stop.
      `,
            examples: [
                "chair /tʃeə/ vs share /ʃeə/",
                "chip /tʃɪp/ vs ship /ʃɪp/",
                "catch /kætʃ/ vs cash /kæʃ/",
                "choose /tʃuːz/ vs shoes /ʃuːz/"
            ]
        },
        questionIds: [
            "pronunciation-q-tch-sh-001",
            "pronunciation-q-tch-sh-002",
            "pronunciation-q-tch-sh-003",
            "pronunciation-q-tch-sh-004"
        ]
    },
    {
        id: "pronunciation-dʒ-vs-ʒ",
        title: "Consonant Contrast: /dʒ/ vs /ʒ/",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 12,
        description: "Explore voiced affricates and fricatives such as /dʒ/ (judge) and /ʒ/ (measure).",
        content: {
            theory: `
- /dʒ/: Voiced affricate (j, dg).
- /ʒ/: Voiced fricative found in the middle of words like 'television' or 'pleasure'.
      `,
            examples: [
                "gin /dʒɪn/ vs vision /ˈvɪʒən/",
                "edge /edʒ/ vs beige /beɪʒ/",
                "major /ˈmeɪdʒə/ vs measure /ˈmeʒə/",
                "joke /dʒəʊk/"
            ]
        },
        questionIds: [
            "pronunciation-q-dzh-zh-001",
            "pronunciation-q-dzh-zh-002",
            "pronunciation-q-dzh-zh-003",
            "pronunciation-q-dzh-zh-004"
        ]
    },
    {
        id: "pronunciation-r-vs-l",
        title: "Consonant Contrast: /r/ vs /l/",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 15,
        description: "Master the distinct articulation of approximants /r/ and lateral /l/.",
        content: {
            theory: `
- /l/: Tongue tip touches the ridge behind upper teeth while air flows over the sides of the tongue.
- /r/: Tongue tip curls back slightly without touching the roof of the mouth; lips round slightly.
      `,
            examples: [
                "right /raɪt/ vs light /laɪt/",
                "red /red/ vs led /led/",
                "play /pleɪ/ vs pray /preɪ/",
                "long /lɒŋ/ vs wrong /rɒŋ/"
            ]
        },
        questionIds: [
            "pronunciation-q-rl-001",
            "pronunciation-q-rl-002",
            "pronunciation-q-rl-003",
            "pronunciation-q-rl-004"
        ]
    },
    {
        id: "pronunciation-s-vs-z",
        title: "Consonant Contrast: /s/ vs /z/",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 12,
        description: "Ensure precise voicing differentiation between plural and verb endings /s/ and /z/.",
        content: {
            theory: `
Many learners mispronounce final 's' sounds as voiceless /s/ when they should be voiced /z/.

Rules:
- /s/: voiceless hiss (cats, cups).
- /z/: voiced buzz (dogs, keys, runs).
      `,
            examples: [
                "sip /sɪp/ vs zip /zɪp/",
                "ice /aɪs/ vs eyes /aɪz/",
                "cats /kæts/ vs dogs /dɒɡz/",
                "prase (place) /pleɪs/ vs plays /pleɪz/"
            ]
        },
        questionIds: [
            "pronunciation-q-sz-001",
            "pronunciation-q-sz-002",
            "pronunciation-q-sz-003",
            "pronunciation-q-sz-004"
        ]
    },
    {
        id: "pronunciation-ng-sound",
        title: "The Velar Nasal /ŋ/",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 12,
        description: "Master the /ŋ/ sound (singing) and avoid common mistakes like adding a hard /g/ at the end.",
        content: {
            theory: `
The /ŋ/ sound is a nasal consonant produced by blocking airflow at the back of the mouth with the back of the tongue against the soft palate.

Common mistake:
- Pronouncing 'sing' as 'sing-g'.
      `,
            examples: [
                "sing /sɪŋ/",
                "morning /ˈmɔːnɪŋ/",
                "working /ˈwɜːkɪŋ/",
                "language /ˈlæŋɡwɪdʒ/"
            ]
        },
        questionIds: [
            "pronunciation-q-ng-001",
            "pronunciation-q-ng-002",
            "pronunciation-q-ng-003",
            "pronunciation-q-ng-004"
        ]
    },
    {
        id: "pronunciation-syllables-stress",
        title: "Syllables and Word Stress Basics",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 15,
        description: "Understand syllables and the concept of prominent word stress in English vocabulary.",
        content: {
            theory: `
Every English word with two or more syllables has one main stressed syllable that is louder, longer, and higher in pitch than the others.

Tips:
- Never swallow unstressed syllables; reduce them using schwa.
      `,
            examples: [
                "pho-to (2 syllables, stress on 1st)",
                "com-pu-ter (3 syllables, stress on 2nd)",
                "en-vi-ron-ment (4 syllables, stress on 2nd)",
                "ap-pli-ca-tion"
            ]
        },
        questionIds: [
            "pronunciation-q-syllables-001",
            "pronunciation-q-syllables-002",
            "pronunciation-q-syllables-003",
            "pronunciation-q-syllables-004"
        ]
    },
    {
        id: "pronunciation-two-syllable-stress",
        title: "Stress in Two-Syllable Words",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 15,
        description: "Learn patterns for noun/verb stress shifts in two-syllable English words.",
        content: {
            theory: `
Many two-syllable words change their stress and meaning depending on whether they function as nouns or verbs.

Rule:
- Nouns/Adjectives usually take stress on the first syllable.
- Verbs usually take stress on the second syllable.
      `,
            examples: [
                "RE-cord (noun) vs re-CORD (verb)",
                "PRE-sent (noun) vs pre-SENT (verb)",
                "OB-ject (noun) vs ob-JECT (verb)",
                "EX-port vs ex-PORT"
            ]
        },
        questionIds: [
            "pronunciation-q-two-syllable-001",
            "pronunciation-q-two-syllable-002",
            "pronunciation-q-two-syllable-003",
            "pronunciation-q-two-syllable-004"
        ]
    },
    {
        id: "pronunciation-longer-word-stress",
        title: "Stress in Longer Words (Suffixes)",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 15,
        description: "Predict word stress based on suffixes such as -ion, -ity, and -ic.",
        content: {
            theory: `
Certain suffixes determine where primary stress falls in multisyllabic words.

Rules:
- Suffixes like -ion and -ity stress the syllable immediately preceding the suffix.
- Suffixes like -ic stress the syllable right before it.
      `,
            examples: [
                "na-TIO-nal-i-ty (stress on -al-)",
                "pho-to-GRA-phic (stress on -gra-)",
                "de-ve-LOP-ment",
                "u-ni-VER-si-ty"
            ]
        },
        questionIds: [
            "pronunciation-q-longer-word-001",
            "pronunciation-q-longer-word-002",
            "pronunciation-q-longer-word-003",
            "pronunciation-q-longer-word-004"
        ]
    },
    {
        id: "pronunciation-ed-endings",
        title: "Pronunciation of -ed Endings",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 15,
        description: "Master the three distinct pronunciations of regular past tense -ed endings: /t/, /d/, and /ɪd/.",
        content: {
            theory: `
The pronunciation of regular past tense verbs ending in '-ed' depends on the final sound of the base verb:

Rules:
- /t/: After voiceless consonants (except t) -> worked, hopped.
- /d/: After voiced consonants and vowels (except d) -> played, loved.
- /ɪd/: After /t/ or /d/ -> wanted, needed.
      `,
            examples: [
                "worked /wɜːkt/",
                "played /pleɪd/",
                "wanted /ˈwɒntɪd/",
                "stopped /stɒpt/"
            ]
        },
        questionIds: [
            "pronunciation-q-ed-001",
            "pronunciation-q-ed-002",
            "pronunciation-q-ed-003",
            "pronunciation-q-ed-004"
        ]
    },
    {
        id: "pronunciation-s-es-endings",
        title: "Pronunciation of -s / -es Endings",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 15,
        description: "Pronounce plural nouns and third-person singular verb endings accurately as /s/, /z/, or /ɪz/.",
        content: {
            theory: `
Similar to past tense rules, noun plurals and verb 3rd-person endings depend on the final base sound:

Rules:
- /s/: After voiceless sounds (cats, books).
- /z/: After voiced sounds and vowels (dogs, plays).
- /ɪz/: After sibilants /s, z, ʃ, tʃ, dʒ, ʒ/ (boxes, watches, quizzes).
      `,
            examples: [
                "cats /kæts/",
                "dogs /dɒɡz/",
                "boxes /ˈbɒksɪz/",
                "wishes /ˈwɪʃɪz/"
            ]
        },
        questionIds: [
            "pronunciation-q-ses-001",
            "pronunciation-q-ses-002",
            "pronunciation-q-ses-003",
            "pronunciation-q-ses-004"
        ]
    },
    {
        id: "pronunciation-silent-letters",
        title: "Silent Letters in English",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 12,
        description: "Identify and pronounce words containing common silent consonants (k, b, w, l, h).",
        content: {
            theory: `
Many English words contain letters that are written but not pronounced due to historical shifts.

Common patterns:
- 'k' before 'n' (knee, know)
- 'b' after 'm' (comb, debt)
- 'w' before 'r' (write, wrong)
- 'l' before 'k' or 'm' (talk, calm)
      `,
            examples: [
                "knife /naɪf/",
                "comb /kəʊm/",
                "write /raɪt/",
                "half /hɑːf/"
            ]
        },
        questionIds: [
            "pronunciation-q-silent-001",
            "pronunciation-q-silent-002",
            "pronunciation-q-silent-003",
            "pronunciation-q-silent-004"
        ]
    },
    {
        id: "pronunciation-linking-consonant-vowel",
        title: "Connected Speech: Consonant to Vowel Linking",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 15,
        description: "Learn how final consonant sounds flow smoothly into initial vowel sounds in natural speech.",
        content: {
            theory: `
In fluent English, native speakers do not pause between words. When a word ends in a consonant and the next begins with a vowel, they link together.

Rule:
- The final consonant sounds like it belongs to the start of the next word.
      `,
            examples: [
                "turn on -> tur-non",
                "pick it up -> pi-cki-tup",
                "an apple -> a-napple",
                "stand up -> stan-dup"
            ]
        },
        questionIds: [
            "pronunciation-q-link-cv-001",
            "pronunciation-q-link-cv-002",
            "pronunciation-q-link-cv-003",
            "pronunciation-q-link-cv-004"
        ]
    },
    {
        id: "pronunciation-linking-vowel-vowel",
        title: "Connected Speech: Vowel to Vowel Linking",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 15,
        description: "Smoothly connect adjacent vowel sounds using intrusive /w/ and /j/ glides.",
        content: {
            theory: `
When one word ends in a vowel and the next starts with a vowel, speakers insert a smooth transition glide:
- /j/ (y-sound) after front vowels (see, he).
- /w/ (w-sound) after rounded back vowels (do, go, blue).
      `,
            examples: [
                "go out -> go(w)out",
                "see it -> se(y)it",
                "do it -> do(w)it",
                "he asked -> he(y)asked"
            ]
        },
        questionIds: [
            "pronunciation-q-link-vv-001",
            "pronunciation-q-link-vv-002",
            "pronunciation-q-link-vv-003",
            "pronunciation-q-link-vv-004"
        ]
    },
    {
        id: "pronunciation-weak-forms",
        title: "Weak Forms and Schwa in Function Words",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 15,
        description: "Recognize and use weak forms of common grammatical words (to, for, can, and) in rapid speech.",
        content: {
            theory: `
Function words (auxiliaries, prepositions, pronouns, conjunctions) usually have two pronunciations: strong forms (when isolated) and weak forms (reduced to schwa in normal speech).

Examples:
- 'for' /fɔː/ becomes /fə/
- 'can' /kæn/ becomes /kən/
      `,
            examples: [
                "I want to go -> I want t' go",
                "Fish and chips -> Fish 'n chips",
                "What can you do? -> What c'n you do?",
                "He is from London."
            ]
        },
        questionIds: [
            "pronunciation-q-weak-forms-001",
            "pronunciation-q-weak-forms-002",
            "pronunciation-q-weak-forms-003",
            "pronunciation-q-weak-forms-004"
        ]
    },
    {
        id: "pronunciation-contractions",
        title: "Contractions and Natural Spoken English",
        track: "pronunciation",
        level: "intermediate",
        durationMinutes: 12,
        description: "Master standard conversational contractions to sound natural and fluent.",
        content: {
            theory: `
Contractions blend pronouns and auxiliary verbs (I'm, you've, they'll, isn't). Using them is essential for natural rhythm in IELTS Speaking and everyday conversations.
      `,
            examples: [
                "I am -> I'm",
                "He has -> He's",
                "They will -> They'll",
                "Do not -> Don't"
            ]
        },
        questionIds: [
            "pronunciation-q-contractions-001",
            "pronunciation-q-contractions-002",
            "pronunciation-q-contractions-003",
            "pronunciation-q-contractions-004"
        ]
    },
    {
        id: "pronunciation-sentence-stress",
        title: "Sentence Stress: Content vs Function Words",
        track: "pronunciation",
        level: "advanced",
        durationMinutes: 18,
        description: "Master sentence stress by emphasizing content words while reducing function words.",
        content: {
            theory: `
English is a stress-timed language. Content words (nouns, verbs, adjectives, adverbs) carry the main meaning and are stressed. Function words are compressed.

Tips:
- Emphasize words that convey new information to maintain listener engagement.
      `,
            examples: [
                "**SHE** is **WORKING** on a **NEW** **PRO-ject**.",
                "**WHERE** did you **BUY** that **LAP-top**?",
                "**COMPUTERS** process **DATA** efficiently."
            ]
        },
        questionIds: [
            "pronunciation-q-sent-stress-001",
            "pronunciation-q-sent-stress-002",
            "pronunciation-q-sent-stress-003",
            "pronunciation-q-sent-stress-004"
        ]
    },
    {
        id: "pronunciation-english-rhythm-chunking",
        title: "English Rhythm and Thought Groups (Chunking)",
        track: "pronunciation",
        level: "advanced",
        durationMinutes: 18,
        description: "Organize speech into meaningful chunks and maintain regular rhythmic beats.",
        content: {
            theory: `
Thought groups (chunking) divide long sentences into digestible grammatical units separated by micro-pauses. This prevents monotone speech and enhances clarity.
      `,
            examples: [
                "If you need help, // let me know.",
                "To succeed in tech, // consistency is key.",
                "Although the bug was complex, // the team resolved it quickly."
            ]
        },
        questionIds: [
            "pronunciation-q-rhythm-001",
            "pronunciation-q-rhythm-002",
            "pronunciation-q-rhythm-003",
            "pronunciation-q-rhythm-004"
        ]
    },
    {
        id: "pronunciation-intonation-patterns",
        title: "Rising and Falling Intonation",
        track: "pronunciation",
        level: "advanced",
        durationMinutes: 15,
        description: "Express speaker attitude, completion, and grammatical intent using pitch contours (intonation).",
        content: {
            theory: `
Intonation refers to the rise and fall of pitch across a sentence.

Rules:
- Falling intonation (↘): Statements, WH- questions, commands, and finalized thoughts.
- Rising intonation (↗): Yes/No questions, uncertainty, or items in a list before the final item.
      `,
            examples: [
                "It's a beautiful day. (↘)",
                "Are you ready for the meeting? (↗)",
                "Where did you park your car? (↘)",
                "Do you want tea, coffee, (↗) or water? (↘)"
            ]
        },
        questionIds: [
            "pronunciation-q-intonation-001",
            "pronunciation-q-intonation-002",
            "pronunciation-q-intonation-003",
            "pronunciation-q-intonation-004"
        ]
    },
    {
        id: "pronunciation-emphasis-contrast",
        title: "Emphasis and Contrast in Advanced Discourse",
        track: "pronunciation",
        level: "advanced",
        durationMinutes: 15,
        description: "Shift sentence stress to highlight contrast, correct misinformation, or emphasize key arguments.",
        content: {
            theory: `
By shifting the primary sentence stress away from the normal default position, you can signal contrast or correct false assumptions emphatically.
      `,
            examples: [
                "I didn't say HE stole the code. (Someone else did)",
                "I said we need a NEW system, not a bigger one.",
                "She didn't write the backend; she designed the frontend."
            ]
        },
        questionIds: [
            "pronunciation-q-emphasis-001",
            "pronunciation-q-emphasis-002",
            "pronunciation-q-emphasis-003",
            "pronunciation-q-emphasis-004"
        ]
    },
    {
        id: "pronunciation-assimilation-elision",
        title: "Assimilation and Elision in Fast Speech",
        track: "pronunciation",
        level: "advanced",
        durationMinutes: 18,
        description: "Identify sound merging (assimilation) and sound dropping (elision) in rapid native speech.",
        content: {
            theory: `
Fast natural speech alters sounds to make articulation easier:
- Assimilation: Sounds change to match neighboring sounds (e.g., 'ten pounds' becomes 'tempounds').
- Elision: Sounds disappear entirely (e.g., 'next door' becomes 'nex door').
      `,
            examples: [
                "handbag -> hambag",
                "last night -> las night",
                "camera -> cam-ra",
                "police -> p'lice"
            ]
        },
        questionIds: [
            "pronunciation-q-assimilation-001",
            "pronunciation-q-assimilation-002",
            "pronunciation-q-assimilation-003",
            "pronunciation-q-assimilation-004"
        ]
    },
    {
        id: "pronunciation-ielts-speaking-mastery",
        title: "Pronunciation Mastery for IELTS Speaking",
        track: "pronunciation",
        level: "advanced",
        durationMinutes: 20,
        description: "Apply phonetic clarity, chunking, and varied intonation to achieve Band 8+ in IELTS Speaking Pronunciation.",
        content: {
            theory: `
Examiners assess pronunciation based on chunking, rhythmic stress, sustained phonemic accuracy, and natural intonation. Avoid monotone recitation by varying your pitch to express genuine interest.
      `,
            examples: [
                "I firmly believe that technology has revolutionized modern education.",
                "From my perspective, urban development brings both opportunities and challenges.",
                "It's quite remarkable how quickly software frameworks evolve."
            ]
        },
        questionIds: [
            "pronunciation-q-ielts-001",
            "pronunciation-q-ielts-002",
            "pronunciation-q-ielts-003",
            "pronunciation-q-ielts-004"
        ]
    },
    {
        id: "pronunciation-vietnamese-learners-mistakes",
        title: "Overcoming Common Pronunciation Challenges for Vietnamese Learners",
        track: "pronunciation",
        level: "advanced",
        durationMinutes: 20,
        description: "Target and eliminate common phonetic interference habits like dropping final consonants and mispronouncing consonant clusters.",
        content: {
            theory: `
Vietnamese speakers often omit final consonants (such as /t/, /d/, /s/, /k/) because Vietnamese syllables end with vowels or unreleased stops. Mastering final consonant release is crucial for intelligibility.
      `,
            examples: [
                "Make sure to pronounce the final /t/ in 'great' and /s/ in 'books'.",
                "Avoid dropping plural /z/ endings in words like 'friends'.",
                "Practice distinct separation between /v/ and /w/ or /b/ sounds."
            ]
        },
        questionIds: [
            "pronunciation-q-vn-mistakes-001",
            "pronunciation-q-vn-mistakes-002",
            "pronunciation-q-vn-mistakes-003",
            "pronunciation-q-vn-mistakes-004"
        ]
    },
    {
        id: "pronunciation-academic-discourse",
        title: "Clear Communication in Formal Presentations",
        track: "pronunciation",
        level: "advanced",
        durationMinutes: 20,
        description: "Structure formal academic or professional presentations with precise articulation, pausing, and emphasis.",
        content: {
            theory: `
In academic or professional presentations, articulation speed must be controlled. Use deliberate pauses before critical analytical points to emphasize conclusions and engage listeners effectively.
      `,
            examples: [
                "First and foremost, // let us examine the empirical data.",
                "Consequently, // the architectural model demonstrates exceptional scalability.",
                "Notwithstanding previous limitations, // this approach yields superior results."
            ]
        },
        questionIds: [
            "pronunciation-q-academic-001",
            "pronunciation-q-academic-002",
            "pronunciation-q-academic-003",
            "pronunciation-q-academic-004"
        ]
    }
];