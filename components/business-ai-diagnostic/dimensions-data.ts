export type Area = "Implementation" | "Operation" | "Governance";

export const AREA_STYLES: Record<Area, { tint: string; text: string }> = {
  Implementation: {
    tint: "bg-area-operation-tint",
    text: "text-area-operation",
  },
  Operation: { tint: "bg-area-strategy-tint", text: "text-area-strategy" },
  Governance: {
    tint: "bg-area-governance-tint",
    text: "text-area-governance",
  },
};

export type Dimension = {
  number: string;
  name: string;
  area: Area;
  weight: number;
  summary: string;
  questions: string[];
};

// Dimension names, areas and weights follow the current diagnostic source.
// Original website copy is retained for dimensions that were already present;
// newly introduced or renamed dimensions use concise copy for their current scope.
export const DIMENSIONS: Dimension[] = [
  {
    number: "01",
    name: "Workforce AI Willingness",
    area: "Operation",
    weight: 4,
    summary: "Measures whether frontline employees are willing and incentivised to use and improve AI.",
    questions: [
      "Of the people meant to be using our AI, how many actually are?",
      "Are employees proactively improving AI, or just using what they're given?",
      "Do employees benefit from using AI? Or will it simply lead to increased targets?",
      "When staff raise concerns about AI, does anyone respond?",
    ],
  },
  {
    number: "02",
    name: "Workforce AI Capability",
    area: "Operation",
    weight: 4,
    summary: "Measures whether frontline teams are effective at using and improving AI.",
    questions: [
      "Can they effectively oversee AI and spot when AI output is wrong?",
      "Do staff know what data they can and can't put into the AI?",
      "Can frontline teams adjust their AI quickly, or are they held up in a central queue?",
      "If one key person left, would we still know how our AI was set up?",
    ],
  },
  {
    number: "03",
    name: "AI Success Tracking",
    area: "Operation",
    weight: 3,
    summary: "Measures whether teams define and track targets for AI progress.",
    questions: [
      "Do frontline teams agree with their operating targets?",
      "Do teams define execution targets they can influence?",
      "Are targets measured regularly and reviewed when they prove unattainable?",
    ],
  },
  {
    number: "04",
    name: "Work Redesign",
    area: "Operation",
    weight: 3,
    summary: "Measures whether the right tasks are being given to AI.",
    questions: [
      "Have we redesigned the work around AI, or just dropped AI into the old process?",
      "Is each task going to whoever does it best: AI, a person, or plain software?",
      "Do we recognise where AI is not the right tool for a task?",
      "As AI gets better, do we move more work to it, or leave the split as it was?",
    ],
  },
  {
    number: "05",
    name: "Data Quality",
    area: "Implementation",
    weight: 4,
    summary: "Measures whether your data is good enough for AI to produce results you can trust.",
    questions: [
      "Have we documented know-how and constraints sufficiently for AI to perform well?",
      "Is our AI working from current data, or acting on information that's out of date?",
      "When two systems disagree, does the AI notice, or just silently pick one?",
      "Are we fixing the data that matters most, or just the data that's easiest to fix?",
    ],
  },
  {
    number: "06",
    name: "Requirements & Acceptance",
    area: "Implementation",
    weight: 3,
    summary: "Measures whether teams agree what an AI application must do and accept its results against clear criteria.",
    questions: [
      "Are requirements clear before implementation begins?",
      "Do teams agree how success and acceptable quality will be judged?",
      "Are acceptance decisions based on evidence from relevant tasks?",
    ],
  },
  {
    number: "07",
    name: "Iteration Velocity",
    area: "Implementation",
    weight: 3,
    summary: "Measures if the organisation is improving its AI applications fast enough to maintain organisational momentum and keep up with external developments.",
    questions: [
      "How long does it take to get an approved AI change live: months, weeks, or days?",
      "Are we shipping improvements fast enough to meet employee and client needs?",
      "Are we keeping pace with better and cheaper models as they arrive?",
      "Is faster delivery real efficiency, or are we skipping checks to get there?",
    ],
  },
  {
    number: "08",
    name: "Data & Process Integration",
    area: "Implementation",
    weight: 3,
    summary: "Measures whether AI is integrated into workflows well enough to run at scale.",
    questions: [
      "Can the AI get data by itself, or does someone have to manually feed it every time?",
      "Does work reach the AI automatically, or is someone still forwarding and uploading it?",
      "Do the AI's results flow straight into our systems, or get keyed in again by hand?",
    ],
  },
  {
    number: "09",
    name: "Quality at the Right Cost",
    area: "Implementation",
    weight: 2,
    summary: "Measures whether we get the AI performance we need at the lowest possible cost",
    questions: [
      "Do we know what each of our AI use cases actually costs to run?",
      "Are we paying for more AI than the task really needs?",
      "When a cheaper option appears that's just as good, how quickly do we switch to it?",
      "Are we cutting costs without cutting the quality we need?",
    ],
  },
  {
    number: "10",
    name: "Human Accountability",
    area: "Governance",
    weight: 4,
    summary: "Measures whether accountability for AI outputs is clear and effective.",
    questions: [
      "Does every AI output have a single named owner responsible for its quality?",
      "Do those owners have real ways to review, override or stop the AI?",
      "Do owners accept accountability, or say mistakes were out of their control?",
      "Is oversight proportionate to the risk, or has it become an approval bottleneck?",
    ],
  },
  {
    number: "11",
    name: "Policy & Risk Management",
    area: "Governance",
    weight: 3,
    summary: "Measures whether the organisation identifies and manages its AI risks through policy and controls.",
    questions: [
      "Are AI risks identified, owned and kept current?",
      "Are policy and control requirements enforced in practice?",
      "Can the organisation tell when AI use breaches its requirements?",
    ],
  },
  {
    number: "12",
    name: "Output Quality Control",
    area: "Governance",
    weight: 3,
    summary: "Measures whether the quality of AI outputs is checked and issues are addressed.",
    questions: [
      "Are outputs checked against defined quality expectations?",
      "Are problems detected before they affect customers or business outcomes?",
      "Do teams improve controls when quality issues occur?",
    ],
  },
];
