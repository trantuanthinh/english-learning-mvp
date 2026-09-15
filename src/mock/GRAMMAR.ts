import type {Lesson} from "../types";

export const GRAMMAR_DATA: Lesson[] = [
    {
        id: "grammar-be",
        title: "The Verb To Be",
        track: "grammar",
        level: "beginner",
        durationMinutes: 10,
        description: "Learn how to use the verb 'to be' (am, is, are) for identities, descriptions, and basic states.",
        content: {
            theory: `
Use the verb "to be" to talk about identities, professions, ages, feelings, and locations.

Structure:
- Positive: Subject + am/is/are + complement
- Negative: Subject + am/is/are + not + complement
- Question: Am/Is/Are + subject + complement?

Forms:
- I am (I'm)
- He / She / It is (He's, She's, It's)
- We / You / They are (We're, You're, They're)
      `,
            examples: [
                "I am a software developer.",
                "She is not from London.",
                "Are they ready for the meeting?",
                "It is cold outside today."
            ]
        },
        questionIds: [
            "grammar-q-be-001",
            "grammar-q-be-002",
            "grammar-q-be-003",
            "grammar-q-be-004"
        ]
    },
    {
        id: "grammar-subject-pronouns",
        title: "Subject Pronouns",
        track: "grammar",
        level: "beginner",
        durationMinutes: 10,
        description: "Master subject pronouns (I, you, he, she, it, we, they) to replace noun subjects in sentences.",
        content: {
            theory: `
Subject pronouns act as the doer of the action in a sentence and replace noun phrases to avoid repetition.

Rules:
- I: First-person singular
- You: Second-person singular/plural
- He/She/It: Third-person singular (He for males, She for females, It for things/animals)
- We: First-person plural
- They: Third-person plural
      `,
            examples: [
                "John is studying. He likes grammar.",
                "Maria and I are friends. We work together.",
                "The dog is barking. It is very loud.",
                "You speak English very well."
            ]
        },
        questionIds: [
            "grammar-q-subject-pronouns-001",
            "grammar-q-subject-pronouns-002",
            "grammar-q-subject-pronouns-003",
            "grammar-q-subject-pronouns-004"
        ]
    },
    {
        id: "grammar-object-pronouns",
        title: "Object Pronouns",
        track: "grammar",
        level: "beginner",
        durationMinutes: 10,
        description: "Understand object pronouns (me, you, him, her, it, us, them) as receivers of actions.",
        content: {
            theory: `
Object pronouns receive the action of the verb or follow prepositions.

Structure:
- Subject + Verb + Object Pronoun
- Preposition + Object Pronoun

Mappings:
- I -> me
- He -> him
- She -> her
- It -> it
- We -> us
- They -> them
      `,
            examples: [
                "Please call me later.",
                "I gave the book to her.",
                "Can you help us with this task?",
                "She invited them to the party."
            ]
        },
        questionIds: [
            "grammar-q-object-pronouns-001",
            "grammar-q-object-pronouns-002",
            "grammar-q-object-pronouns-003",
            "grammar-q-object-pronouns-004"
        ]
    },
    {
        id: "grammar-possessive-adjectives-pronouns",
        title: "Possessive Adjectives and Pronouns",
        track: "grammar",
        level: "beginner",
        durationMinutes: 12,
        description: "Learn how to express ownership using possessive adjectives (my, your...) and pronouns (mine, yours...).",
        content: {
            theory: `
Possessive adjectives modify nouns to show ownership, while possessive pronouns replace nouns entirely.

Structure:
- Possessive Adjective + Noun (my car, his idea)
- Standalone Possessive Pronoun (mine, yours, hers, ours, theirs)

Rules:
- Do not use a noun after a possessive pronoun.
      `,
            examples: [
                "This is my laptop.",
                "That laptop is mine.",
                "Is this your coffee?",
                "Their house is larger than ours."
            ]
        },
        questionIds: [
            "grammar-q-possessives-001",
            "grammar-q-possessives-002",
            "grammar-q-possessives-003",
            "grammar-q-possessives-004"
        ]
    },
    {
        id: "grammar-nouns-singular-plural",
        title: "Singular and Plural Nouns",
        track: "grammar",
        level: "beginner",
        durationMinutes: 10,
        description: "Learn standard and irregular rules for converting singular nouns into plurals.",
        content: {
            theory: `
Nouns change form to indicate quantity (singular vs plural).

Rules:
- Regular plurals: Add -s (cat -> cats) or -es after s, sh, ch, x, z (box -> boxes).
- Consonant + y: Change y to i and add -es (city -> cities).
- Irregular plurals: Do not follow standard rules (child -> children, man -> men, foot -> feet).
      `,
            examples: [
                "I have one cat and two dogs.",
                "She bought three boxes of shoes.",
                "Many children are playing outside.",
                "The city has many beautiful parks."
            ]
        },
        questionIds: [
            "grammar-q-nouns-plurals-001",
            "grammar-q-nouns-plurals-002",
            "grammar-q-nouns-plurals-003",
            "grammar-q-nouns-plurals-004"
        ]
    },
    {
        id: "grammar-countable-uncountable-nouns",
        title: "Countable and Uncountable Nouns",
        track: "grammar",
        level: "beginner",
        durationMinutes: 12,
        description: "Distinguish between nouns you can count and nouns that are treated as masses or units.",
        content: {
            theory: `
Countable nouns can be counted individually and have plural forms. Uncountable nouns cannot be counted individually and take singular verbs.

Rules:
- Countable: an apple, three books.
- Uncountable: water, information, advice, furniture (no plural -s).
- Use quantifiers like 'some', 'any', 'much', 'many' accordingly.
      `,
            examples: [
                "I need some water, please.",
                "She gave me valuable advice.",
                "How many books do you read monthly?",
                "There is too much traffic today."
            ]
        },
        questionIds: [
            "grammar-q-count-uncount-001",
            "grammar-q-count-uncount-002",
            "grammar-q-count-uncount-003",
            "grammar-q-count-uncount-004"
        ]
    },
    {
        id: "grammar-articles",
        title: "Articles: A, An, and The",
        track: "grammar",
        level: "beginner",
        durationMinutes: 15,
        description: "Master definite and indefinite articles for specific and non-specific nouns.",
        content: {
            theory: `
Articles specify whether a noun is general or specific.

Rules:
- Indefinite (a/an): Used with singular countable nouns mentioned for the first time or general items. Use 'an' before vowel sounds.
- Definite (the): Used when both speaker and listener know the specific noun, or for unique things (the sun).
- Zero article: Used with plural/uncountable nouns spoken about in general.
      `,
            examples: [
                "I saw a cat in the garden.",
                "An apple a day keeps the doctor away.",
                "The sun rises in the east.",
                "Computers are essential for modern work."
            ]
        },
        questionIds: [
            "grammar-q-articles-001",
            "grammar-q-articles-002",
            "grammar-q-articles-003",
            "grammar-q-articles-004",
            "grammar-q-articles-005"
        ]
    },
    {
        id: "grammar-demonstratives",
        title: "Demonstratives",
        track: "grammar",
        level: "beginner",
        durationMinutes: 10,
        description: "Use this, that, these, and those to point out specific objects based on distance and quantity.",
        content: {
            theory: `
Demonstratives indicate the physical or psychological distance of objects from the speaker.

Rules:
- Singular, near: This
- Singular, far: That
- Plural, near: These
- Plural, far: Those
      `,
            examples: [
                "This is my favorite book.",
                "That building across the street is tall.",
                "These shoes are very comfortable.",
                "Those stars shine brightly tonight."
            ]
        },
        questionIds: [
            "grammar-q-demonstratives-001",
            "grammar-q-demonstratives-002",
            "grammar-q-demonstratives-003",
            "grammar-q-demonstratives-004"
        ]
    },
    {
        id: "grammar-there-is-there-are",
        title: "There Is and There Are",
        track: "grammar",
        level: "beginner",
        durationMinutes: 10,
        description: "Express the existence or presence of things using 'there is' and 'there are'.",
        content: {
            theory: `
Use 'there is' for singular/uncountable nouns and 'there are' for plural nouns to indicate existence.

Structure:
- Positive: There is / There are + noun
- Negative: There isn't / There aren't + noun
- Question: Is there / Are there + noun?
      `,
            examples: [
                "There is a coffee shop on the corner.",
                "There are many options available.",
                "Is there any milk left in the fridge?",
                "There aren't any tickets left for the show."
            ]
        },
        questionIds: [
            "grammar-q-thereis-001",
            "grammar-q-thereis-002",
            "grammar-q-thereis-003",
            "grammar-q-thereis-004"
        ]
    },
    {
        id: "grammar-present-simple",
        title: "Present Simple",
        track: "grammar",
        level: "beginner",
        durationMinutes: 15,
        description: "Use the Present Simple tense to talk about habits, routines, facts, and permanent situations.",
        content: {
            theory: `
Use the Present Simple to talk about habits, routines, facts, and repeated actions.

Structure:
- Positive: Subject + base verb (add -s/-es for He/She/It)
- Negative: Subject + do/does not + base verb
- Question: Do/Does + subject + base verb?

Use "does" with he, she, and it. Essential for describing daily routines in IELTS Speaking Part 1.
      `,
            examples: [
                "I work from home every day.",
                "She works at a bank.",
                "They don't like coffee.",
                "Does he play football?"
            ]
        },
        questionIds: [
            "grammar-q-present-simple-001",
            "grammar-q-present-simple-002",
            "grammar-q-present-simple-003",
            "grammar-q-present-simple-004"
        ]
    },
    {
        id: "grammar-present-continuous",
        title: "Present Continuous",
        track: "grammar",
        level: "beginner",
        durationMinutes: 15,
        description: "Express actions happening right now or temporary arrangements using the Present Continuous tense.",
        content: {
            theory: `
Use the Present Continuous for actions happening at the moment of speaking or temporary plans.

Structure:
- Positive: Subject + am/is/are + verb-ing
- Negative: Subject + am/is/are + not + verb-ing
- Question: Am/Is/Are + subject + verb-ing?
      `,
            examples: [
                "I am learning English right now.",
                "They are building a new bridge downtown.",
                "She isn't working this afternoon.",
                "Are you listening to me?"
            ]
        },
        questionIds: [
            "grammar-q-present-continuous-001",
            "grammar-q-present-continuous-002",
            "grammar-q-present-continuous-003",
            "grammar-q-present-continuous-004"
        ]
    },
    {
        id: "grammar-present-simple-vs-continuous",
        title: "Present Simple vs. Present Continuous",
        track: "grammar",
        level: "beginner",
        durationMinutes: 15,
        description: "Compare permanent routines (Present Simple) with temporary actions (Present Continuous).",
        content: {
            theory: `
Contrast permanent habits with temporary ongoing situations.

Rules:
- Present Simple: Permanent truths, habits, regular routines (e.g., "I live in Paris").
- Present Continuous: Temporary actions happening now or around now (e.g., "I am staying in a hotel for this week").
      `,
            examples: [
                "I live in London, but I am staying in Edinburgh this week.",
                "She usually drinks tea, but today she is drinking coffee.",
                "Water boils at 100 degrees Celsius.",
                "Look! The train is arriving now."
            ]
        },
        questionIds: [
            "grammar-q-ps-pc-001",
            "grammar-q-ps-pc-002",
            "grammar-q-ps-pc-003",
            "grammar-q-ps-pc-004"
        ]
    },
    {
        id: "grammar-past-simple",
        title: "Past Simple",
        track: "grammar",
        level: "beginner",
        durationMinutes: 15,
        description: "Talk about completed actions and events that happened at a specific time in the past.",
        content: {
            theory: `
Use the Past Simple for actions completed at a specific time in the past.

Structure:
- Positive: Subject + past verb (-ed for regular, irregular forms vary)
- Negative: Subject + did not (didn't) + base verb
- Question: Did + subject + base verb?
      `,
            examples: [
                "I visited my grandparents last weekend.",
                "She didn't attend the meeting yesterday.",
                "Where did you buy that jacket?",
                "They arrived home late last night."
            ]
        },
        questionIds: [
            "grammar-q-past-simple-001",
            "grammar-q-past-simple-002",
            "grammar-q-past-simple-003",
            "grammar-q-past-simple-004"
        ]
    },
    {
        id: "grammar-past-continuous",
        title: "Past Continuous",
        track: "grammar",
        level: "beginner",
        durationMinutes: 12,
        description: "Describe ongoing actions interrupted by past events or background actions in a narrative.",
        content: {
            theory: `
Use the Past Continuous for actions that were ongoing at a specific moment in the past, often interrupted by a short action in the Past Simple.

Structure:
- Positive: Subject + was/were + verb-ing
- Negative: Subject + was/were + not + verb-ing
- Question: Was/Were + subject + verb-ing?
      `,
            examples: [
                "I was studying when you called me.",
                "They were having dinner at 8 PM last night.",
                "She wasn't paying attention during the lecture.",
                "What were you doing when the fire alarm rang?"
            ]
        },
        questionIds: [
            "grammar-q-past-continuous-001",
            "grammar-q-past-continuous-002",
            "grammar-q-past-continuous-003",
            "grammar-q-past-continuous-004"
        ]
    },
    {
        id: "grammar-future-will-be-going-to",
        title: "Future with Will and Be Going To",
        track: "grammar",
        level: "beginner",
        durationMinutes: 15,
        description: "Express future plans, intentions, predictions, and spontaneous decisions using will and going to.",
        content: {
            theory: `
Choose between 'will' and 'be going to' based on intent and certainty.

Rules:
- Be going to: Planned intentions, predictions based on current visual evidence.
- Will: Spontaneous decisions, promises, offers, general predictions without immediate evidence.
      `,
            examples: [
                "I am going to visit Japan next summer.",
                "Look at those dark clouds; it is going to rain.",
                "The phone is ringing. I will answer it.",
                "I think technology will change education in the future."
            ]
        },
        questionIds: [
            "grammar-q-future-001",
            "grammar-q-future-002",
            "grammar-q-future-003",
            "grammar-q-future-004"
        ]
    },
    {
        id: "grammar-basic-questions-negatives",
        title: "Basic Questions and Negative Sentences",
        track: "grammar",
        level: "beginner",
        durationMinutes: 12,
        description: "Form questions and negative statements accurately using auxiliary verbs.",
        content: {
            theory: `
Forming negative sentences and questions requires correct auxiliary usage (do, be, have).

Rules:
- Negatives place 'not' after the auxiliary verb.
- Questions invert the subject and auxiliary verb.
- Wh- questions start with question words (What, Where, When, Who, Why, How).
      `,
            examples: [
                "She doesn't like spicy food.",
                "Why are you late for class?",
                "Do they know the answer?",
                "They weren't satisfied with the service."
            ]
        },
        questionIds: [
            "grammar-q-questions-neg-001",
            "grammar-q-questions-neg-002",
            "grammar-q-questions-neg-003",
            "grammar-q-questions-neg-004"
        ]
    },
    {
        id: "grammar-adverbs-frequency",
        title: "Adverbs of Frequency",
        track: "grammar",
        level: "beginner",
        durationMinutes: 10,
        description: "Describe how often actions occur using adverbs like always, usually, often, sometimes, and never.",
        content: {
            theory: `
Adverbs of frequency describe how regularly an action happens.

Position Rules:
- Place before main verbs (e.g., "I always wake up early").
- Place after the verb "to be" (e.g., "She is often late").
      `,
            examples: [
                "I always check my code before committing.",
                "He is rarely absent from work.",
                "We sometimes work on weekends.",
                "Do you usually drink coffee in the morning?"
            ]
        },
        questionIds: [
            "grammar-q-adv-freq-001",
            "grammar-q-adv-freq-002",
            "grammar-q-adv-freq-003",
            "grammar-q-adv-freq-004"
        ]
    },
    {
        id: "grammar-prepositions-time-place",
        title: "Prepositions of Time and Place",
        track: "grammar",
        level: "beginner",
        durationMinutes: 15,
        description: "Master time and place prepositions (at, in, on) for accurate spatial and chronological contexts.",
        content: {
            theory: `
Use 'at', 'in', and 'on' for precise time and location references.

Rules for Time:
- At: Specific times (at 5 PM, at midnight)
- On: Days and dates (on Monday, on July 4th)
- In: Months, years, centuries, periods (in 2026, in summer)

Rules for Place:
- At: Specific points (at the door)
- On: Surfaces (on the table)
- In: Enclosed spaces (in the room)
      `,
            examples: [
                "The meeting is at 3 PM on Tuesday.",
                "She was born in July 2002.",
                "My keys are on the kitchen table.",
                "He works in a modern office building."
            ]
        },
        questionIds: [
            "grammar-q-prep-time-place-001",
            "grammar-q-prep-time-place-002",
            "grammar-q-prep-time-place-003",
            "grammar-q-prep-time-place-004"
        ]
    },
    {
        id: "grammar-modals-ability-permission",
        title: "Can, Can't, and Could",
        track: "grammar",
        level: "beginner",
        durationMinutes: 12,
        description: "Express ability, permission, and polite requests using can, can't, and could.",
        content: {
            theory: `
Modal verbs express ability or permission and do not change form with subjects (no -s).

Rules:
- Can / Can't: Present ability or permission.
- Could: Past ability or polite requests.
      `,
            examples: [
                "I can speak three languages.",
                "Could you help me with this project?",
                "You can't park your car here.",
                "When I was young, I could run very fast."
            ]
        },
        questionIds: [
            "grammar-q-modals-ability-001",
            "grammar-q-modals-ability-002",
            "grammar-q-modals-ability-003",
            "grammar-q-modals-ability-004"
        ]
    },
    {
        id: "grammar-modals-obligation-advice",
        title: "Should, Must, and Have To",
        track: "grammar",
        level: "beginner",
        durationMinutes: 12,
        description: "Express obligations, rules, and advice using should, must, and have to.",
        content: {
            theory: `
Modals of obligation convey rules, duties, and recommendations.

Rules:
- Should: Mild advice or recommendations.
- Must: Strong personal obligation or rule enforced by the speaker.
- Have to: External obligation or rule imposed by external forces.
      `,
            examples: [
                "You should study harder for the exam.",
                "Employees must wear badges at all times.",
                "I have to submit this report by noon.",
                "She shouldn't eat too much junk food."
            ]
        },
        questionIds: [
            "grammar-q-modals-obl-001",
            "grammar-q-modals-obl-002",
            "grammar-q-modals-obl-003",
            "grammar-q-modals-obl-004"
        ]
    },
    {
        id: "grammar-comparatives-superlatives",
        title: "Comparatives and Superlatives",
        track: "grammar",
        level: "beginner",
        durationMinutes: 15,
        description: "Compare two or more things using comparative and superlative adjective forms.",
        content: {
            theory: `
Compare attributes across entities using adjective modifications.

Rules:
- Short adjectives: add -er than for comparatives, the -est for superlatives (tall -> taller -> tallest).
- Long adjectives: use more / the most (expensive -> more expensive -> the most expensive).
- Irregular: good -> better -> best; bad -> worse -> worst. Useful for IELTS Writing Task 1 data comparison.
      `,
            examples: [
                "This laptop is faster than my old one.",
                "Mount Everest is the highest mountain in the world.",
                "JSONB is more flexible for nested metadata.",
                "That was the worst movie I have ever watched."
            ]
        },
        questionIds: [
            "grammar-q-comp-sup-001",
            "grammar-q-comp-sup-002",
            "grammar-q-comp-sup-003",
            "grammar-q-comp-sup-004",
            "grammar-q-comp-sup-005"
        ]
    },
    {
        id: "grammar-basic-quantifiers-conjunctions",
        title: "Basic Quantifiers and Conjunctions",
        track: "grammar",
        level: "beginner",
        durationMinutes: 12,
        description: "Link ideas and express amounts using basic quantifiers and coordinating conjunctions.",
        content: {
            theory: `
Connect clauses and quantify nouns effectively.

Rules:
- Coordinating conjunctions (FANBOYS): for, and, nor, but, or, yet, so.
- Quantifiers: some, any, a lot of, much, many.
      `,
            examples: [
                "I like coffee, but my friend prefers tea.",
                "We have a lot of work to finish today.",
                "She was tired, so she went to bed early.",
                "Are there any questions about the task?"
            ]
        },
        questionIds: [
            "grammar-q-quant-conj-001",
            "grammar-q-quant-conj-002",
            "grammar-q-quant-conj-003",
            "grammar-q-quant-conj-004"
        ]
    },
    {
        id: "grammar-present-perfect",
        title: "Present Perfect",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Connect past actions with present relevance using the Present Perfect tense.",
        content: {
            theory: `
Use the Present Perfect to express past actions that have a connection to the present, life experiences, or uncompleted time frames.

Structure:
- Positive: Subject + have/has + past participle
- Negative: Subject + have/has + not + past participle
- Question: Have/Has + subject + past participle?

Crucial for IELTS Speaking Part 2 and general experience recounts.
      `,
            examples: [
                "I have visited Japan three times.",
                "She has worked as a developer for two years.",
                "Have you finished your assignment yet?",
                "We haven't received the package."
            ]
        },
        questionIds: [
            "grammar-q-present-perfect-001",
            "grammar-q-present-perfect-002",
            "grammar-q-present-perfect-003",
            "grammar-q-present-perfect-004"
        ]
    },
    {
        id: "grammar-present-perfect-continuous",
        title: "Present Perfect Continuous",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Emphasize the duration of an ongoing action starting in the past and continuing now.",
        content: {
            theory: `
Use the Present Perfect Continuous to highlight the duration of an activity that started in the past and is still continuing.

Structure:
- Positive: Subject + have/has + been + verb-ing
- Negative: Subject + have/has + not + been + verb-ing
- Question: Have/Has + subject + been + verb-ing?
      `,
            examples: [
                "I have been learning English for five years.",
                "They have been working on this project all morning.",
                "How long have you been waiting here?",
                "She hasn't been feeling well lately."
            ]
        },
        questionIds: [
            "grammar-q-ppc-001",
            "grammar-q-ppc-002",
            "grammar-q-ppc-003",
            "grammar-q-ppc-004"
        ]
    },
    {
        id: "grammar-present-perfect-vs-past-simple",
        title: "Present Perfect vs. Past Simple",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Master the distinction between finished past events and actions connected to the present.",
        content: {
            theory: `
Distinguish between specific past time frames and ongoing current relevance.

Rules:
- Past Simple: Used with finished time markers (yesterday, last year, in 2010) where the time is specified.
- Present Perfect: Used when the exact time is unstated, irrelevant, or when the time period is still open (today, this year).
      `,
            examples: [
                "I went to Paris in 2024. (Past Simple)",
                "I have been to Paris twice. (Present Perfect)",
                "She lost her keys yesterday.",
                "She has lost her keys; she can't open the door."
            ]
        },
        questionIds: [
            "grammar-q-pp-vs-ps-001",
            "grammar-q-pp-vs-ps-002",
            "grammar-q-pp-vs-ps-003",
            "grammar-q-pp-vs-ps-004"
        ]
    },
    {
        id: "grammar-past-perfect",
        title: "Past Perfect",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Sequence past events by showing which action happened before another past action.",
        content: {
            theory: `
Use the Past Perfect to indicate an action that occurred before another action in the past.

Structure:
- Positive: Subject + had + past participle
- Negative: Subject + had + not + past participle
- Question: Had + subject + past participle?
      `,
            examples: [
                "When I arrived at the station, the train had already left.",
                "She had studied French before she moved to Paris.",
                "They hadn't locked the door before they went out.",
                "Had you ever visited that museum before last year?"
            ]
        },
        questionIds: [
            "grammar-q-past-perfect-001",
            "grammar-q-past-perfect-002",
            "grammar-q-past-perfect-003",
            "grammar-q-past-perfect-004"
        ]
    },
    {
        id: "grammar-past-perfect-continuous",
        title: "Past Perfect Continuous",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 12,
        description: "Describe ongoing past actions that continued up to a specific point in the past.",
        content: {
            theory: `
Use the Past Perfect Continuous to show that an action was ongoing for a period of time before another past event occurred.

Structure:
- Positive: Subject + had + been + verb-ing
      `,
            examples: [
                "She had been working at the company for five years before she got promoted.",
                "It had been raining for hours, so the streets were flooded.",
                "They had been playing football before it started to pour.",
                "Had you been waiting long before the taxi arrived?"
            ]
        },
        questionIds: [
            "grammar-q-ppc-int-001",
            "grammar-q-ppc-int-002",
            "grammar-q-ppc-int-003",
            "grammar-q-ppc-int-004"
        ]
    },
    {
        id: "grammar-future-continuous-perfect",
        title: "Future Continuous and Future Perfect",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Discuss ongoing or completed actions at a specific future point in time.",
        content: {
            theory: `
Express actions in progress or completed by a certain future time.

Rules:
- Future Continuous (will be + verb-ing): Actions in progress at a specific future time.
- Future Perfect (will have + past participle): Actions completed before a specific future deadline.
      `,
            examples: [
                "This time tomorrow, I will be flying to London.",
                "By next year, I will have graduated from university.",
                "Will you be using your laptop this evening?",
                "She will have finished the report by Friday."
            ]
        },
        questionIds: [
            "grammar-q-future-cont-perf-001",
            "grammar-q-future-cont-perf-002",
            "grammar-q-future-cont-perf-003",
            "grammar-q-future-cont-perf-004"
        ]
    },
    {
        id: "grammar-tense-review",
        title: "Comprehensive Tense Review",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Review and contrast multiple verb tenses across past, present, and future timelines.",
        content: {
            theory: `
Synthesize all major tense structures to maintain narrative consistency and accuracy across complex texts.

Key checklist:
- Present simple vs continuous vs perfect
- Past simple vs continuous vs perfect
- Future implications
      `,
            examples: [
                "Every morning, she drinks coffee while checking emails.",
                "Right now, she is preparing a presentation for the client.",
                "Last year, she launched a successful mobile application.",
                "By next month, she will have completed three software projects."
            ]
        },
        questionIds: [
            "grammar-q-tense-review-001",
            "grammar-q-tense-review-002",
            "grammar-q-tense-review-003",
            "grammar-q-tense-review-004"
        ]
    },
    {
        id: "grammar-modal-verbs",
        title: "Modal Verbs Overview and Nuances",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Master modal verbs (can, could, may, might, must, should, would) for nuance and degree of certainty.",
        content: {
            theory: `
Modal verbs express degrees of certainty, possibility, obligation, and permission.

Rules:
- Possibility: might, may, could (e.g., "It might rain later").
- Deduction: must (logical certainty), can't (impossibility).
- High value for IELTS Writing Task 2 for hedging arguments.
      `,
            examples: [
                "The economic situation might improve next quarter.",
                "This must be the correct office address.",
                "She can't be serious about quitting her job.",
                "Could you provide more evidence for your claim?"
            ]
        },
        questionIds: [
            "grammar-q-modal-verbs-001",
            "grammar-q-modal-verbs-002",
            "grammar-q-modal-verbs-003",
            "grammar-q-modal-verbs-004"
        ]
    },
    {
        id: "grammar-modal-perfects",
        title: "Modal Perfects",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Express past possibilities, speculations, and regrets using modal verbs followed by 'have + past participle'.",
        content: {
            theory: `
Modal perfects look back at past situations with speculation, obligation, or regret.

Structure:
- Modal + have + past participle (should have, must have, might have, could have, needn't have).
      `,
            examples: [
                "You should have studied harder for the exam.",
                "She left her keys here; she must have forgotten them.",
                "I might have made a mistake in the calculation.",
                "You needn't have bought so much food."
            ]
        },
        questionIds: [
            "grammar-q-modal-perf-001",
            "grammar-q-modal-perf-002",
            "grammar-q-modal-perf-003",
            "grammar-q-modal-perf-004"
        ]
    },
    {
        id: "grammar-gerunds-infinitives",
        title: "Gerunds and Infinitives",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 18,
        description: "Learn when to use verb-ing (gerunds) versus to + verb (infinitives) as objects and subjects.",
        content: {
            theory: `
Gerunds (-ing) and infinitives (to + verb) often function as nouns after specific verbs, adjectives, or prepositions.

Rules:
- Verbs followed by gerunds: enjoy, mind, avoid, finish, suggest.
- Verbs followed by infinitives: want, decide, hope, manage, refuse.
- Certain verbs change meaning depending on whether they take a gerund or infinitive (e.g., stop, remember).
      `,
            examples: [
                "I enjoy writing clean code in TypeScript.",
                "She decided to pursue a career in software architecture.",
                "Avoid using global variables when possible.",
                "He remembered locking the office door."
            ]
        },
        questionIds: [
            "grammar-q-ger-inf-001",
            "grammar-q-ger-inf-002",
            "grammar-q-ger-inf-003",
            "grammar-q-ger-inf-004",
            "grammar-q-ger-inf-005"
        ]
    },
    {
        id: "grammar-passive-voice",
        title: "Passive Voice Fundamentals",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Shift focus from the doer of an action to the receiver using the passive voice.",
        content: {
            theory: `
Use the passive voice when the action receiver is more important than the agent, or when the agent is unknown.

Structure:
- Object + appropriate form of 'to be' + past participle (+ by agent)

Essential for formal IELTS essays and scientific reports.
      `,
            examples: [
                "The software update was installed successfully.",
                "English is spoken all over the world.",
                "A new bridge is being built across the river.",
                "The project report must be submitted by Friday."
            ]
        },
        questionIds: [
            "grammar-q-passive-001",
            "grammar-q-passive-002",
            "grammar-q-passive-003",
            "grammar-q-passive-004"
        ]
    },
    {
        id: "grammar-relative-clauses",
        title: "Relative Clauses",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Combine sentences and provide extra details using relative pronouns (who, which, that, whose, where).",
        content: {
            theory: `
Relative clauses add information about a noun using relative pronouns.

Pronoun Rules:
- Who / That: for people
- Which / That: for things/animals
- Whose: for possession
- Where: for places
      `,
            examples: [
                "The developer who built this app is talented.",
                "Here is the book that I recommended.",
                "She is the designer whose work won awards.",
                "This is the studio where we record podcasts."
            ]
        },
        questionIds: [
            "grammar-q-rel-clause-001",
            "grammar-q-rel-clause-002",
            "grammar-q-rel-clause-003",
            "grammar-q-rel-clause-004"
        ]
    },
    {
        id: "grammar-defining-non-defining-relative-clauses",
        title: "Defining vs. Non-Defining Relative Clauses",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Distinguish between essential relative clauses (defining) and extra-information clauses (non-defining).",
        content: {
            theory: `
Punctuation and necessity define clause types.

Rules:
- Defining: Essential to identify the noun; no commas used (e.g., "The man who lives next door is a doctor").
- Non-defining: Extra information; enclosed in commas; 'that' cannot be used (e.g., "Paris, which is the capital of France, is beautiful").
      `,
            examples: [
                "Students who submit assignments late will lose points.",
                "My laptop, which I bought last year, works perfectly.",
                "The restaurant where we had dinner was amazing.",
                "Dr. Smith, who teaches physics, is retiring soon."
            ]
        },
        questionIds: [
            "grammar-q-def-nondef-001",
            "grammar-q-def-nondef-002",
            "grammar-q-def-nondef-003",
            "grammar-q-def-nondef-004"
        ]
    },
    {
        id: "grammar-first-second-conditionals",
        title: "First and Second Conditionals",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Express likely future scenarios (first) and hypothetical present/future situations (second).",
        content: {
            theory: `
Conditionals express the result of a particular condition.

Rules:
- First Conditional: If + present simple, will + base verb (real future possibilities).
- Second Conditional: If + past simple, would + base verb (hypothetical or unlikely present/future situations).
      `,
            examples: [
                "If it rains tomorrow, we will cancel the picnic.",
                "If I won the lottery, I would travel around the world.",
                "What will you do if you miss the flight?",
                "If I had more free time, I would learn a new language."
            ]
        },
        questionIds: [
            "grammar-q-cond-1-2-001",
            "grammar-q-cond-1-2-002",
            "grammar-q-cond-1-2-003",
            "grammar-q-cond-1-2-004"
        ]
    },
    {
        id: "grammar-third-mixed-conditionals",
        title: "Third and Mixed Conditionals",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 18,
        description: "Talk about hypothetical past events (third) and present consequences of past actions (mixed).",
        content: {
            theory: `
Express past counterfactuals and mixed timeline conditionals.

Rules:
- Third Conditional: If + past perfect, would have + past participle (hypothetical past).
- Mixed Conditional: If + past perfect, would + base verb (past action affecting the present).
      `,
            examples: [
                "If I had studied harder, I would have passed the exam.",
                "If I had accepted that job offer, I would live in New York now.",
                "She wouldn't have been tired if she had gone to bed early.",
                "If we had planned better, the project wouldn't have failed."
            ]
        },
        questionIds: [
            "grammar-q-cond-3-mixed-001",
            "grammar-q-cond-3-mixed-002",
            "grammar-q-cond-3-mixed-003",
            "grammar-q-cond-3-mixed-004"
        ]
    },
    {
        id: "grammar-reported-speech",
        title: "Reported Speech and Questions",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 18,
        description: "Relate what someone else said or asked by shifting tenses and pronouns appropriately.",
        content: {
            theory: `
Reported speech transfers direct quotes into indirect accounts with backshifting of tenses.

Rules:
- Present simple -> Past simple (e.g., "I am busy" -> He said he was busy).
- Present continuous -> Past continuous.
- Pronouns and time/place markers shift accordingly (today -> that day).
      `,
            examples: [
                "She said that she loved reading books.",
                "He told me that he would finish the report by noon.",
                "They asked me where I lived.",
                "The teacher asked if everyone understood the lesson."
            ]
        },
        questionIds: [
            "grammar-q-rep-speech-001",
            "grammar-q-rep-speech-002",
            "grammar-q-rep-speech-003",
            "grammar-q-rep-speech-004"
        ]
    },
    {
        id: "grammar-question-tags",
        title: "Question Tags",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 10,
        description: "Confirm information or invite agreement by appending short questions to statements.",
        content: {
            theory: `
Question tags turn statements into questions to verify information.

Rules:
- Positive statement -> Negative tag (e.g., "You are a developer, aren't you?").
- Negative statement -> Positive tag (e.g., "She doesn't eat meat, does she?").
      `,
            examples: [
                "It's a beautiful day, isn't it?",
                "You haven't seen my keys, have you?",
                "They will attend the conference, won't they?",
                "She speaks fluent English, doesn't she?"
            ]
        },
        questionIds: [
            "grammar-q-q-tags-001",
            "grammar-q-q-tags-002",
            "grammar-q-q-tags-003",
            "grammar-q-q-tags-004"
        ]
    },
    {
        id: "grammar-causative",
        title: "The Causative (Have / Get Something Done)",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Express arranging for someone else to perform a service or action for you.",
        content: {
            theory: `
Use causative structures when you don't perform an action yourself, but arrange for someone else to do it.

Structure:
- Subject + have / get + object + past participle
      `,
            examples: [
                "I need to have my laptop repaired this week.",
                "She got her hair cut and styled yesterday.",
                "We are having our office painted next weekend.",
                "Did you get your passport renewed on time?"
            ]
        },
        questionIds: [
            "grammar-q-causative-001",
            "grammar-q-causative-002",
            "grammar-q-causative-003",
            "grammar-q-causative-004"
        ]
    },
    {
        id: "grammar-phrasal-verbs",
        title: "Common Phrasal Verbs",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Master multi-word verbs (verb + preposition/adverb) essential for natural conversational fluency.",
        content: {
            theory: `
Phrasal verbs combine a base verb with one or two particles to create unique idiomatic meanings.

Rules:
- Separable vs inseparable transitive phrasal verbs.
- Essential for IELTS Speaking lexical resource scores.
      `,
            examples: [
                "Please look after my dog while I am away.",
                "We need to figure out this software bug.",
                "She turned down the job offer because of the commute.",
                "The meeting was put off until next Tuesday."
            ]
        },
        questionIds: [
            "grammar-q-phrasal-001",
            "grammar-q-phrasal-002",
            "grammar-q-phrasal-003",
            "grammar-q-phrasal-004"
        ]
    },
    {
        id: "grammar-adjective-order-adverb-position",
        title: "Adjective Order and Adverb Position",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Arrange multiple adjectives and adverbs correctly according to standard English rules.",
        content: {
            theory: `
Adjectives follow a strict descriptive order before nouns: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose.

Adverb positions:
- Manner, Place, Time (M-P-T rule).
      `,
            examples: [
                "She bought a beautiful new Italian leather bag.",
                "He played the guitar brilliantly at the concert last night.",
                "They live in a large old stone house.",
                "She walked quietly into the room."
            ]
        },
        questionIds: [
            "grammar-q-adj-adv-pos-001",
            "grammar-q-adj-adv-pos-002",
            "grammar-q-adj-adv-pos-003",
            "grammar-q-adj-adv-pos-004"
        ]
    },
    {
        id: "grammar-noun-adverbial-clauses",
        title: "Noun and Adverbial Clauses",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Construct complex sentences using noun clauses and adverbial clauses of time, cause, and concession.",
        content: {
            theory: `
Expand sentence complexity by integrating clauses functioning as nouns or adverbial modifiers.

Rules:
- Noun clauses often begin with 'that', 'what', or 'whether'.
- Adverbial clauses use subordinating conjunctions (although, because, whereas).
      `,
            examples: [
                "I know what you did last summer.",
                "Although it was raining, they went for a hike.",
                "She accepted the job because the salary was competitive.",
                "What he said during the meeting surprised everyone."
            ]
        },
        questionIds: [
            "grammar-q-noun-adv-clauses-001",
            "grammar-q-noun-adv-clauses-002",
            "grammar-q-noun-adv-clauses-003",
            "grammar-q-noun-adv-clauses-004"
        ]
    },
    {
        id: "grammar-linking-words-subject-verb-agreement",
        title: "Linking Words and Subject-Verb Agreement",
        track: "grammar",
        level: "intermediate",
        durationMinutes: 15,
        description: "Ensure grammatical harmony between subjects and verbs while connecting coherent arguments.",
        content: {
            theory: `
Maintain grammatical cohesion and agreement.

Rules:
- Singular subjects take singular verbs; plural subjects take plural verbs.
- Collective nouns can take singular or plural verbs depending on context.
- Use advanced linking devices (furthermore, consequently, meanwhile) for essays.
      `,
            examples: [
                "Neither the manager nor the employees were present.",
                "A list of recommended books has been published.",
                "Furthermore, renewable energy reduces carbon emissions.",
                "The team is celebrating its victory today."
            ]
        },
        questionIds: [
            "grammar-q-link-sva-001",
            "grammar-q-link-sva-002",
            "grammar-q-link-sva-003",
            "grammar-q-link-sva-004"
        ]
    },
    {
        id: "grammar-advanced-passive-voice",
        title: "Advanced Passive Voice",
        track: "grammar",
        level: "advanced",
        durationMinutes: 15,
        description: "Construct sophisticated passive structures with modal verbs, infinitives, and reporting verbs.",
        content: {
            theory: `
Elevate your writing with advanced passive constructions used in academic and formal contexts.

Structures:
- Modal passives: must be done, should have been finished.
- Impersonal passives: It is believed that..., He is thought to have...
      `,
            examples: [
                "The results are believed to indicate a positive market trend.",
                "It is argued that technology enhances global connectivity.",
                "The experiment should have been conducted under sterile conditions.",
                "New policies are expected to be implemented next quarter."
            ]
        },
        questionIds: [
            "grammar-q-adv-pass-001",
            "grammar-q-adv-pass-002",
            "grammar-q-adv-pass-003",
            "grammar-q-adv-pass-004"
        ]
    },
    {
        id: "grammar-advanced-modal-verbs-perfects",
        title: "Advanced Modal Verbs and Perfect Modals",
        track: "grammar",
        level: "advanced",
        durationMinutes: 15,
        description: "Analyze nuanced deductions, unrealized obligations, and past possibilities using advanced modals.",
        content: {
            theory: `
Express subtle shades of necessity, criticism, and deduction in professional writing and speech.

Advanced forms:
- Might as well, should have, could have, would have rather.
- High value for scoring Band 8+ in IELTS Grammatical Range.
      `,
            examples: [
                "We might as well finish the deployment tonight.",
                "She could have avoided the error if she had checked the logs.",
                "He should not have ignored the security warning.",
                "Had we known the risks, we would have acted differently."
            ]
        },
        questionIds: [
            "grammar-q-adv-modals-001",
            "grammar-q-adv-modals-002",
            "grammar-q-adv-modals-003",
            "grammar-q-adv-modals-004"
        ]
    },
    {
        id: "grammar-reduced-relative-clauses",
        title: "Reduced Relative Clauses",
        track: "grammar",
        level: "advanced",
        durationMinutes: 18,
        description: "Condense sentences by removing relative pronouns and auxiliary verbs to create participial modifiers.",
        content: {
            theory: `
Reduce relative clauses into participial phrases to improve sentence conciseness.

Rules:
- Active meaning: reduce to present participle (-ing).
- Passive meaning: reduce to past participle (-ed/-en).
- Highly valued in academic writing for conciseness.
      `,
            examples: [
                "The man living next door is an architect. (from: who lives)",
                "Books written by classic authors remain popular. (from: that were written)",
                "Students wishing to apply must submit forms today. (from: who wish)",
                "The report submitted yesterday contained critical errors. (from: which was submitted)"
            ]
        },
        questionIds: [
            "grammar-q-red-rel-001",
            "grammar-q-red-rel-002",
            "grammar-q-red-rel-003",
            "grammar-q-red-rel-004"
        ]
    },
    {
        id: "grammar-participial-clauses",
        title: "Participial Clauses",
        track: "grammar",
        level: "advanced",
        durationMinutes: 18,
        description: "Express cause, time, and simultaneous actions using introductory participial clauses.",
        content: {
            theory: `
Participial clauses provide background information or explain causes concisely using present or past participles.

Rules:
- The subject of the participial clause must match the main clause subject to avoid dangling modifiers.
      `,
            examples: [
                "Realizing the complexity of the task, she asked for assistance.",
                "Having finished his work, he went home early.",
                "Left unattended, the system may crash.",
                "Not knowing the password, I could not access the server."
            ]
        },
        questionIds: [
            "grammar-q-part-clauses-001",
            "grammar-q-part-clauses-002",
            "grammar-q-part-clauses-003",
            "grammar-q-part-clauses-004"
        ]
    },
    {
        id: "grammar-advanced-conditionals-inversion",
        title: "Advanced Conditionals and Conditional Inversion",
        track: "grammar",
        level: "advanced",
        durationMinutes: 18,
        description: "Master formal conditional structures using inversion ('Had I known', 'Were she here') instead of 'if'.",
        content: {
            theory: `
Elevate formal or literary writing by replacing 'if' with inverted auxiliary verb structures.

Rules:
- Type 1 (formal): Should you require assistance, contact support.
- Type 2: Were I in your position, I would accept.
- Type 3: Had we known the outcome, we would have prepared.
      `,
            examples: [
                "Had I known about the bug, I would have patched it earlier.",
                "Were the team to finish early, we could launch today.",
                "Should you have any questions, please let me know.",
                "Had she applied earlier, she would have secured the position."
            ]
        },
        questionIds: [
            "grammar-q-adv-cond-inv-001",
            "grammar-q-adv-cond-inv-002",
            "grammar-q-adv-cond-inv-003",
            "grammar-q-adv-cond-inv-004"
        ]
    },
    {
        id: "grammar-inversion",
        title: "Subject-Verb Inversion for Emphasis",
        track: "grammar",
        level: "advanced",
        durationMinutes: 15,
        description: "Create rhetorical emphasis and stylistic flair by inverting subjects and auxiliary verbs after negative adverbs.",
        content: {
            theory: `
Invert subject and auxiliary verbs after restrictive or negative introductory adverbs (Never, Seldom, Rarely, Hardly).

Structure:
- Negative Adverb + Auxiliary + Subject + Verb
      `,
            examples: [
                "Never have I encountered such a complex bug.",
                "Rarely do we see such high performance from legacy hardware.",
                "Hardly had I opened the editor when the power went out.",
                "Not only is the app fast, but it is also highly secure."
            ]
        },
        questionIds: [
            "grammar-q-inversion-001",
            "grammar-q-inversion-002",
            "grammar-q-inversion-003",
            "grammar-q-inversion-004"
        ]
    },
    {
        id: "grammar-cleft-sentences",
        title: "Cleft Sentences for Emphasis",
        track: "grammar",
        level: "advanced",
        durationMinutes: 15,
        description: "Highlight specific information in a sentence using 'It is/was... that' or 'What...' cleft structures.",
        content: {
            theory: `
Cleft sentences split a single clause into two to emphasize a specific element.

Structures:
- It is / was + [focus] + that/who...
- What + [clause] + is / was + [focus]
      `,
            examples: [
                "It was John who fixed the production server.",
                "What we need is a scalable database architecture.",
                "It is clean code that ensures long-term maintainability.",
                "What surprised me most was her dedication to the project."
            ]
        },
        questionIds: [
            "grammar-q-cleft-001",
            "grammar-q-cleft-002",
            "grammar-q-cleft-003",
            "grammar-q-cleft-004"
        ]
    },
    {
        id: "grammar-ellipsis-substitution",
        title: "Ellipsis and Substitution",
        track: "grammar",
        level: "advanced",
        durationMinutes: 15,
        description: "Avoid redundancy by omitting repeated words (ellipsis) or replacing them with pro-forms (substitution).",
        content: {
            theory: `
Refine discourse flow by omitting redundant words or substituting phrases with 'so', 'one', or 'do'.

Rules:
- Ellipsis: Omitting words clear from context.
- Substitution: Using 'one/ones' or 'do so' to avoid repeating nouns or verb phrases.
      `,
            examples: [
                "She wanted to finish the report tonight, but couldn't.",
                "I need a new laptop. Do you have a spare one?",
                "If you want to join the workshop, you may do so.",
                "Some managers preferred the old system; others preferred the new."
            ]
        },
        questionIds: [
            "grammar-q-ellipsis-sub-001",
            "grammar-q-ellipsis-sub-002",
            "grammar-q-ellipsis-sub-003",
            "grammar-q-ellipsis-sub-004"
        ]
    },
    {
        id: "grammar-subjunctive",
        title: "The Subjunctive Mood",
        track: "grammar",
        level: "advanced",
        durationMinutes: 15,
        description: "Express demands, recommendations, wishes, and hypothetical scenarios using the subjunctive mood.",
        content: {
            theory: `
The subjunctive mood expresses urgency, importance, or hypothetical desires.

Rules:
- Present Subjunctive: Uses base verb forms after verbs/adjectives of demand/recommendation (insist, suggest, crucial that).
- Past Subjunctive: Uses 'were' for all persons in counterfactual wishes (I wish I were).
      `,
            examples: [
                "The manager insisted that the code be reviewed thoroughly.",
                "It is essential that every developer follow security guidelines.",
                "I wish I were better at managing my time.",
                "She recommended that he apply for the senior position."
            ]
        },
        questionIds: [
            "grammar-q-subjunctive-001",
            "grammar-q-subjunctive-002",
            "grammar-q-subjunctive-003",
            "grammar-q-subjunctive-004"
        ]
    },
    {
        id: "grammar-nominalisation",
        title: "Nominalisation",
        track: "grammar",
        level: "advanced",
        durationMinutes: 15,
        description: "Convert verbs and adjectives into nouns to achieve a formal, objective, and academic tone.",
        content: {
            theory: `
Nominalisation turns verbs and adjectives into nouns (e.g., 'decide' -> 'decision', 'analyze' -> 'analysis').

Benefits:
- Creates an objective, formal academic tone expected in IELTS Writing Task 2 and research papers.
      `,
            examples: [
                "The committee decided to postpone the event. -> The decision was made to postpone the event.",
                "Population growth impacts resources. -> The growth of population impacts resources.",
                "Technology developed rapidly. -> The rapid development of technology transformed society.",
                "They evaluated the data carefully. -> Careful evaluation of the data revealed key insights."
            ]
        },
        questionIds: [
            "grammar-q-nominalisation-001",
            "grammar-q-nominalisation-002",
            "grammar-q-nominalisation-003",
            "grammar-q-nominalisation-004"
        ]
    },
    {
        id: "grammar-extraposition-complex-noun-phrases",
        title: "Extraposition and Complex Noun Phrases",
        track: "grammar",
        level: "advanced",
        durationMinutes: 18,
        description: "Manage heavy sentence subjects and construct complex noun phrases for academic sophistication.",
        content: {
            theory: `
Extraposition shifts heavy subject clauses to the end of a sentence using a dummy 'it'.

Complex noun phrases:
- Modifying head nouns with pre-modifiers and post-modifiers to pack information densely.
      `,
            examples: [
                "That technology evolves quickly is obvious. -> It is obvious that technology evolves quickly.",
                "The rapid and unprecedented growth of artificial intelligence in education.",
                "It remains uncertain whether the policy will succeed.",
                "A comprehensive review of existing literature regarding software architecture."
            ]
        },
        questionIds: [
            "grammar-q-extraposition-001",
            "grammar-q-extraposition-002",
            "grammar-q-extraposition-003",
            "grammar-q-extraposition-004"
        ]
    },
    {
        id: "grammar-hedging",
        title: "Hedging and Academic Discretion",
        track: "grammar",
        level: "advanced",
        durationMinutes: 15,
        description: "Soften assertions and express cautious claims using modal verbs, adverbs, and distancing expressions.",
        content: {
            theory: `
Hedging allows writers to express claims with appropriate caution rather than absolute certainty.

Techniques:
- Modal verbs (may, might, could)
- Adverbs (arguably, seemingly, relatively)
- Introductory phrases (It appears that, tend to)
      `,
            examples: [
                "This approach tends to yield better performance.",
                "The results appear to suggest a correlation between variables.",
                "Artificial intelligence is arguably the most transformative technology of our era.",
                "Such measures might potentially reduce error rates."
            ]
        },
        questionIds: [
            "grammar-q-hedging-001",
            "grammar-q-hedging-002",
            "grammar-q-hedging-003",
            "grammar-q-hedging-004"
        ]
    },
    {
        id: "grammar-formal-academic-grammar-discourse",
        title: "Formal / Academic Grammar and Advanced Discourse",
        track: "grammar",
        level: "advanced",
        durationMinutes: 20,
        description: "Master high-level discourse markers, cohesion devices, and formal registers for professional writing.",
        content: {
            theory: `
Master macro-level cohesion, logical transitions, and advanced syntactic structures for C1/C2 proficiency.

Checklist:
- Cohesive devices (consequently, notwithstanding, whereas, hitherto)
- Register consistency
- Rhetorical balance
      `,
            examples: [
                "Notwithstanding previous setbacks, the project was completed on schedule.",
                "Concurrently, researchers developed alternative algorithms to optimize performance.",
                "In light of these findings, further investigation is warranted.",
                "Whereas legacy systems relied on monolithic structures, modern applications favor microservices."
            ]
        },
        questionIds: [
            "grammar-q-academic-discourse-001",
            "grammar-q-academic-discourse-002",
            "grammar-q-academic-discourse-003",
            "grammar-q-academic-discourse-004",
            "grammar-q-academic-discourse-005"
        ]
    }
];