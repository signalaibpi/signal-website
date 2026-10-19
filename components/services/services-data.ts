import { DIMENSIONS, type Dimension } from "@/components/business-ai-diagnostic/dimensions-data";

// Section ids double as the anchors used by service links in lib/services.ts.
export const SERVICE_SECTIONS = [
  {
    id: "ai-progress-review",
    name: "AI Progress Review",
    summary: "identify issues, set priorities",
  },
  {
    id: "ai-planning",
    name: "AI Planning",
    summary: "translate priorities into a resourced implementation plan",
  },
  {
    id: "ai-delivery",
    name: "AI Delivery",
    summary: "help teams deliver the plan with the aim of making them self-sufficient",
  },
] as const;

export type FailureMode = { dimension: Dimension; failureMode: string; featured: boolean };

// Dimension names must be real diagnostic dimensions — resolving them here
// (rather than hard-coding number/area) means a renamed or missing dimension
// fails the build instead of showing a wrong label.
function failureMode(name: string, text: string, featured = false): FailureMode {
  const dimension = DIMENSIONS.find((d) => d.name === name);
  if (!dimension) {
    throw new Error(`Unknown diagnostic dimension: ${name}`);
  }
  return { dimension, failureMode: text, featured };
}

// Featured rows are shown before the table is expanded; expanded, all rows
// follow the homepage's numbered dimension order.
export const FAILURE_MODES: FailureMode[] = [
  failureMode("Workforce AI Willingness", "Employees resist using AI", true),
  failureMode("Workforce AI Capability", "Teams not able to use and improve AI"),
  failureMode("AI Success Tracking", "AI objectives not clear, not measured or not agreed"),
  failureMode("Work Redesign", "AI benefits cancelled out by legacy processes"),
  failureMode("Data Quality", "AI underperforms because it lacks context (data)", true),
  failureMode("Requirements & Acceptance", "AI solutions not aligned with team priorities"),
  failureMode("Iteration Velocity", "Slow improvements undermining results and momentum"),
  failureMode("Data & Process Integration", "Inability to scale AI due to manual inputs and handoffs"),
  failureMode("Quality at the Right Cost", "High AI costs offsetting its benefits"),
  failureMode("Human Accountability", "Unclear accountability for AI outputs and results", true),
  failureMode(
    "Policy & Risk Management",
    "Too little or too much governance leading to lack of control or slow progress",
  ),
  failureMode("Output Quality Control", "Insufficient testing and review of AI outputs"),
];

export const PROGRESS_REVIEW_STEPS = [
  {
    title: "Builds a comprehensive fact base",
    body: "Signal uses the Business AI Diagnostic methodology and platform to build an evidence-based snapshot of current AI results and capabilities across 12 dimensions",
  },
  {
    title: "Separates root causes from symptoms",
    body: "Signal identifies root causes for low AI adoption and disappointing business results across implementation, operation and governance",
  },
  {
    title: "Set priorities",
    body: "Working closely with your leadership team, Signal agrees measurable, realistic priorities for the next planning cycle",
    // Links to the planning-cycle footnote under this section.
    footnote: true,
  },
];

export const PROGRESS_REVIEW_DELIVERABLES = [
  "Business AI Diagnostic report including scores, commentary and all underlying evidence",
  "Agreed company-wide priorities",
  "Agreed team-level priorities for all in-scope teams",
];

export type FocusArea = { title: string; body: string[]; brings?: string[] };

export const PLANNING_AREAS: FocusArea[] = [
  {
    title: "Target setting",
    body: [
      "Signal works with teams to translate business goals into measurable operating targets and practical execution targets.",
      "Operating targets describe longer-term results the team is working toward; execution targets define the changes the team intends to deliver in the next three months.",
    ],
    brings: [
      "The Signal founder has 15+ years of operations experience",
      "Signal’s diagnostic-level metric scores can be used as execution targets, giving teams regular feedback on the effectiveness of their actions",
      "Signal uses methodologies such as OKRs and 4DX to help teams own, track and revise targets when required",
    ],
  },
  {
    title: "Priority use cases and product ownership",
    body: [
      "Signal works closely with teams to identify priority use cases. It also assists in identifying product development process bottlenecks and finding solutions to resolve them.",
    ],
    brings: [
      "The Signal founder has 20+ years of product management experience",
      "Signal’s diagnostic provides the baseline for current product capabilities",
      "Signal consultants have extensive AI product management experience",
    ],
  },
  {
    title: "Workflow redesign",
    body: [
      "Signal works with teams to identify workflow bottlenecks and suggest improvements that support progress toward operating targets.",
    ],
    brings: [
      "The Signal founder has 15+ years of operations experience",
      "Signal’s diagnostic provides the baseline for current workflow effectiveness",
    ],
  },
  {
    title: "Quality ownership",
    body: [
      "Signal works with teams to review AI governance and quality control processes and suggest improvements so teams can test, review and evidence AI outputs appropriately.",
    ],
    brings: [
      "The Signal founder has 15+ years of experience managing compliance-heavy financial services teams",
      "Signal’s diagnostic provides the baseline for current governance and quality control processes",
      "Signal consultants are trained in the leading AI governance frameworks",
    ],
  },
];

export const PLANNING_DELIVERABLES = [
  "Agreed 1-year operating targets",
  "Agreed 3-month execution targets",
  "Prioritised list of AI use cases to enhance or implement",
  "Agreed changes to product development processes, roles and responsibilities",
  "Agreed changes to operational workflows",
  "Agreed changes to AI policies and quality processes, roles and responsibilities",
  "Agreed implementation plan and funding requirements",
];

export const DELIVERY_AREAS: FocusArea[] = [
  {
    title: "Product delivery",
    body: [
      "Signal’s Embedded AI Product Managers help teams deliver the AI roadmap, including building prototypes, detailing requirements, representing the team in product prioritisation processes and performing user acceptance testing.",
    ],
  },
  {
    title: "Knowledge capture",
    body: [
      "Signal’s Embedded AI Product Managers help teams capture data and codify knowledge in the required format to support AI performance.",
    ],
  },
  {
    title: "Quality process implementation",
    body: [
      "Signal’s Embedded AI Product Managers help teams implement AI policy and agreed quality tools and processes.",
    ],
  },
  {
    title: "Capability building",
    body: [
      "Signal’s Embedded AI Product Managers can train teams on AI principles, tool usage and quality principles and processes.",
    ],
  },
];

export const DELIVERY_OUTCOMES = [
  "Successful delivery of team-level execution targets",
  "The team becomes self-sufficient in executing its product delivery, knowledge capture and quality process implementation tasks",
  "Team members can successfully use the AI tools they should be using",
  "Collect evidence and identify root causes for the next Business AI Diagnostic",
];
