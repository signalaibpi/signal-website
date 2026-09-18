import { SectionEyebrow } from "./SectionEyebrow";
import { ArrowRightIcon, ChecklistIcon, FlagIcon, SearchIcon } from "@/lib/icons";

const CARDS = [
  {
    icon: SearchIcon,
    title: "Find what is really holding AI back",
    body: "For existing AI applications, identify the underlying issues behind disappointing results, across data, skills, incentives and controls.",
    dimensions: "Diagnostic dimensions 01–04",
  },
  {
    icon: ChecklistIcon,
    title: "Prioritise with a realistic view of readiness",
    body: "For new AI applications, check whether the data, systems and teams are ready before committing investment.",
    dimensions: "Diagnostic dimensions 05–08",
  },
  {
    icon: FlagIcon,
    title: "Give teams clear improvement targets",
    body: "Turn the most important gaps into specific, measurable targets teams can work towards.",
    dimensions: "Diagnostic dimensions 09–12",
  },
];

export function Diagnostic() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 sm:py-24 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col gap-14">
        <div className="max-w-3xl flex flex-col gap-4">
          <SectionEyebrow>Business AI Diagnostic</SectionEyebrow>
          <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
            Know where AI progress stands. Decide what to fix next.
          </h2>
          <p className="font-body text-xl leading-relaxed text-on-surface-variant">
            The Business AI Diagnostic assesses your organisation across 12
            dimensions, from data quality and workforce capability to
            accountability and controls. It gives your leadership team a
            shared view of strengths, gaps and priorities for improvement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/40 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-4">
                <span className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                  <card.icon className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg text-on-surface font-bold">
                  {card.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                  {card.body}
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20">
                <span className="font-body text-xs uppercase text-secondary font-semibold">
                  {card.dimensions}
                </span>
              </div>
            </div>
          ))}
        </div>
        <a
          className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary hover:text-primary-hover transition-colors w-fit"
          href="#"
        >
          <span>View a sample diagnostic</span>
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
