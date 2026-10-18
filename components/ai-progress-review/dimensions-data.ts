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
// Summaries and prompts are concise public-facing explanations of its scope.
export const DIMENSIONS: Dimension[] = [
  {
    number: "01",
    name: "Workforce AI Willingness",
    area: "Operation",
    weight: 4,
    summary: "Measures whether employees use AI and contribute to improving it.",
    questions: [
      "Of the people intended to use AI, how many actually do?",
      "Do employees proactively suggest improvements?",
      "Do employees understand the AI strategy and feel their feedback is heard?",
    ],
  },
  {
    number: "02",
    name: "Workforce AI Capability",
    area: "Operation",
    weight: 4,
    summary: "Measures whether frontline teams can use, tune and implement AI applications.",
    questions: [
      "Can employees use AI applications competently?",
      "Do frontline teams have capacity to tune their AI applications?",
      "Can frontline teams implement applications they use?",
      "Is the knowledge behind applications documented beyond one person?",
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
    summary: "Measures whether work is divided appropriately between AI, people and software.",
    questions: [
      "Has work been redesigned around AI, or added to existing processes?",
      "Is each task assigned to AI, a person or software based on what works best?",
      "Is that division of work revisited as AI capabilities change?",
    ],
  },
  {
    number: "05",
    name: "Data Quality",
    area: "Implementation",
    weight: 4,
    summary: "Measures whether data and knowledge are reliable enough for AI to produce useful results.",
    questions: [
      "Is the information AI relies on current and sufficiently complete?",
      "Are important contradictions or gaps in data identified?",
      "Is the knowledge AI needs documented and maintained?",
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
    summary: "Measures whether AI applications can be improved quickly while maintaining quality.",
    questions: [
      "How quickly can an approved change be delivered?",
      "Are improvements keeping pace with employee and customer needs?",
      "Does faster delivery preserve appropriate checks?",
    ],
  },
  {
    number: "08",
    name: "Data & Process Integration",
    area: "Implementation",
    weight: 3,
    summary: "Measures whether data and work flow into and out of AI without unnecessary manual handoffs.",
    questions: [
      "Can AI access the data it needs without repeated manual input?",
      "Does work reach AI through the workflow without manual forwarding?",
      "Do AI results flow into the systems where work continues?",
    ],
  },
  {
    number: "09",
    name: "Quality at the Right Cost",
    area: "Implementation",
    weight: 2,
    summary: "Measures whether AI achieves the required performance at the lowest practical cost.",
    questions: [
      "Do we understand what AI use cases cost to run?",
      "Are we using more AI capability than a task requires?",
      "Can costs be reduced without compromising required quality?",
    ],
  },
  {
    number: "10",
    name: "Human Accountability",
    area: "Governance",
    weight: 4,
    summary: "Measures whether people have clear responsibility and authority for AI outcomes.",
    questions: [
      "Is responsibility for AI outputs clear?",
      "Can responsible people review, override or stop AI when needed?",
      "Is oversight proportionate to risk and effective in practice?",
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
