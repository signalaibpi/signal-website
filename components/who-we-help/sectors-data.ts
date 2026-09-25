import { DIMENSIONS, type Dimension } from "@/components/business-ai-diagnostic/dimensions-data";

export type SectorImage = { src: string; alt: string };

export type SectorBarrier = { dimension: Dimension; body: string };

export type SectorService = { name: string; body: string };

export type PrioritySector = {
  id: string;
  name: string;
  opportunity: string;
  whereAiCanHelp: string[];
  barriers: SectorBarrier[];
  services: SectorService[];
  // Undefined until the photograph is supplied; the page renders a neutral
  // placeholder in the same square frame meanwhile.
  image?: SectorImage;
};

export type SecondarySector = {
  id: string;
  name: string;
  opportunity: string;
  whereAiCanHelp: string[];
  image?: SectorImage;
};

// Barrier names must be real diagnostic dimensions — resolving them here
// (rather than hard-coding number/area) means a renamed or missing dimension
// fails the build instead of silently showing a wrong label.
function barrier(name: string, body: string): SectorBarrier {
  const dimension = DIMENSIONS.find((d) => d.name === name);
  if (!dimension) {
    throw new Error(`Unknown diagnostic dimension: ${name}`);
  }
  return { dimension, body };
}

// Content verbatim from Signal Website Copy.md -> "Who we help".
export const PRIORITY_SECTORS: PrioritySector[] = [
  {
    id: "fintechs",
    name: "Fintechs",
    opportunity:
      "Give customers clearer, faster and more consistent experiences.",
    whereAiCanHelp: [
      "Customer success and support",
      "Customer onboarding",
      "Chargebacks and fraud operations",
      "Compliance operations",
    ],
    barriers: [
      barrier(
        "Human Accountability",
        "Allowing responsibility for AI-assisted customer or operational decisions to sit between product, operations, risk and technology, without a named owner able to control performance.",
      ),
      barrier(
        "Policy and Control Assurance",
        "Establishing rules for sensitive data and higher-risk uses without reliable evidence that live AI workflows follow those rules and required controls work.",
      ),
      barrier(
        "Output Quality Assurance",
        "Releasing AI-assisted communications or reviews without defined quality standards and testing that reflects real customers, exceptions and financial contexts.",
      ),
    ],
    services: [
      {
        name: "Business AI Diagnostic",
        body: "help executive teams identify the operational and governance gaps limiting value from AI, and set measurable priorities for improvement.",
      },
      {
        name: "AI Strategy Planning",
        body: "help business leaders select customer and operational applications where AI can support growth, service and control, with agreed budgets, owners and targets.",
      },
      {
        name: "Embedded AI Delivery",
        body: "work alongside frontline teams to establish accountability, test output quality and develop leaders who can manage AI within existing risk and compliance requirements.",
      },
    ],
  },
  {
    id: "business-software-companies",
    name: "Business Software Companies",
    opportunity:
      "Strengthen retention and grow customer accounts more efficiently.",
    whereAiCanHelp: [
      "Customer onboarding",
      "Customer support",
      "Product adoption",
      "Customer success",
      "Renewal management",
    ],
    barriers: [
      barrier(
        "AI Strategy",
        "Funding disconnected support and customer-success initiatives without prioritising the applications most likely to improve adoption, retention or expansion.",
      ),
      barrier(
        "Data & Process Integration",
        "Leaving product usage, support history and account context spread across systems, so AI cannot support a continuous customer workflow without manual handoffs.",
      ),
      barrier(
        "Iteration Velocity",
        "Taking months to improve AI-assisted onboarding or support after customer-success teams identify weak answers, missing context or new customer needs.",
      ),
    ],
    services: [
      {
        name: "Business AI Diagnostic",
        body: "help CEOs, COOs and CROs identify what is preventing AI from improving customer experience, team capacity or net revenue retention.",
      },
      {
        name: "AI Strategy Planning",
        body: "help customer leaders prioritise onboarding, adoption, support and renewal applications, with agreed budgets, owners and targets.",
      },
      {
        name: "Embedded AI Delivery",
        body: "work alongside customer-success and support teams to redesign workflows, establish improvement cycles and develop leaders who can manage AI-enabled customer operations.",
      },
    ],
  },
  {
    id: "business-process-outsourcers",
    name: "Business Process Outsourcers",
    opportunity: "Improve service quality, capacity and contract margins.",
    whereAiCanHelp: [
      "Customer service",
      "Document processing",
      "Back-office operations",
      "Quality assurance",
      "Client reporting",
    ],
    barriers: [
      barrier(
        "AI Strategy",
        "Investing in visible automation without establishing which customer-service, document-processing or back-office workflows offer the greatest commercial value.",
      ),
      barrier(
        "Workforce AI Willingness",
        "Asking delivery teams to document knowledge and improve automation when they believe higher productivity will only increase targets or reduce roles.",
      ),
      barrier(
        "Data & Process Integration",
        "Running effective AI pilots that cannot scale because work still moves manually between customer systems, operational queues and AI tools.",
      ),
    ],
    services: [
      {
        name: "Business AI Diagnostic",
        body: "help executives identify what is preventing AI from improving contract margins, service performance or capacity, and prioritise next steps.",
      },
      {
        name: "AI Strategy Planning",
        body: "help operational leaders select customer processes where AI can support growth or margin improvement, with agreed budgets, owners and targets.",
      },
      {
        name: "Embedded AI Delivery",
        body: "work alongside delivery teams to redesign workflows, address workforce incentives and develop operational leaders who can manage and improve AI-enabled services.",
      },
    ],
  },
];

export const SECONDARY_SECTORS: SecondarySector[] = [
  {
    id: "insurance-brokers-and-administrators",
    name: "Insurance Brokers & Administrators",
    opportunity: "Improve customer service, operational capacity and margins.",
    whereAiCanHelp: [
      "Customer onboarding",
      "Policy servicing",
      "Renewals",
      "Claims administration",
    ],
  },
  {
    id: "freight-forwarders-and-trade-services-providers",
    name: "Freight Forwarders & Trade Services Providers",
    opportunity:
      "Improve responsiveness, capacity and margins across customer operations.",
    whereAiCanHelp: [
      "Quotation and booking management",
      "Customs documentation",
      "Shipment coordination",
      "Exception management",
      "Customer service",
    ],
  },
  {
    id: "accountancies",
    name: "Accountancies",
    opportunity: "Serve more clients and grow recurring advisory income.",
    whereAiCanHelp: [
      "Accounts preparation",
      "Management reporting",
      "Client advisory",
      "Recurring finance work",
    ],
  },
  {
    id: "law-firms",
    name: "Law Firms",
    opportunity: "Deepen client relationships and improve matter economics.",
    whereAiCanHelp: [
      "Legal research",
      "Due diligence",
      "Contract review",
      "Drafting",
      "Matter management",
    ],
  },
];
