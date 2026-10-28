
import type { Domain } from "./types";

export const semiconductors: Domain = {
    slug: "semiconductors",
    title: "Semiconductors",
    tagline: "Chips, electronics design and fabrication",

    intro:
        "Semiconductor engineering focuses on designing, verifying, and manufacturing the integrated circuits that power modern electronic systems. It combines digital logic, transistor-level design, physical implementation, and fabrication processes.",

    problems: [
        "Designing complex integrated circuits within power, performance, and area constraints.",
        "Verifying that hardware behaves correctly before manufacturing.",
        "Manufacturing reliable semiconductor devices at increasingly smaller scales.",
    ],

    topics: [
        {
            id: "vlsi-design",
            title: "VLSI Design",
            summary:
                "Designing integrated circuits by combining large numbers of transistors and logic elements into a single chip.",
        },
        {
            id: "chip-architecture",
            title: "Chip Architecture",
            summary:
                "Organising processing units, memory, interconnects, and other components to meet system requirements.",
        },
        {
            id: "semiconductor-fabrication",
            title: "Semiconductor Fabrication",
            summary:
                "Understanding the manufacturing processes used to create semiconductor devices and integrated circuits.",
        },
        {
            id: "design-verification",
            title: "Design Verification",
            summary:
                "Checking that a hardware design satisfies its functional and timing requirements before implementation.",
        },
        {
            id: "physical-design",
            title: "Physical Design",
            summary:
                "Transforming a circuit design into a physical layout while meeting timing, power, and area constraints.",
        },
        {
            id: "testing",
            title: "Testing",
            summary:
                "Detecting manufacturing defects and evaluating whether fabricated chips operate correctly.",
        },
    ],

    careers: [],
    resources: [],
    editorPick: null,
    lastReviewed: "2026-10-29",
};
