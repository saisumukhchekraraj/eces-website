
export type Topic = {
    id: string;
    title: string;
    summary: string;
};

export type Resource = {
    id: string;
    title: string;
    provider: string;
    url: string;
    format: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "All levels";
    prerequisites: string[];
    outcomes: string[];
    access: string;
    why: string;
    topicIds: string[];
};

export type Career = {
    id: string;
    title: string;
    summary: string;
    responsibilities: string[];
    foundations: string[];
    skills: string[];
    tools: string[];
    resourceIds: string[];
};

export type EditorPick = {
    title: string;
    date: string;
    summary: string;
    engineering: string;
    whyItMatters: string;
    sourceName: string;
    url: string;
};

export type Domain = {
    slug: string;
    title: string;
    tagline: string;
    intro: string;
    problems: string[];
    topics: Topic[];
    careers: Career[];
    resources: Resource[];
    editorPick: EditorPick | null;
    lastReviewed: string;
};

