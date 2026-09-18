import { SectionEyebrow } from "./SectionEyebrow";
import { ArrowRightIcon, ChecklistIcon, FlagIcon, SearchIcon } from "@/lib/icons";

const CARDS = [
  {
    icon: SearchIcon,
    title: "Finds what is holding AI back",
    body: "Collects evidence of AI performance for all AI use cases, all teams and all 12 dimensions.",
  },
  {
    icon: ChecklistIcon,
    title: "Suggests priority areas",
    body: "Scores along 12 dimensions to identify which ones are holding progress back most.",
  },
  {
    icon: FlagIcon,
    title: "Tracks progress",
    body: "Dimension evidence can be used as practical, measurable targets for the next assessment cycle.",
  },
];

export function Diagnostic() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 sm:py-24 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col gap-14">
        <div className="max-w-3xl flex flex-col gap-4">
          <SectionEyebrow>Business AI Diagnostic</SectionEyebrow>
          <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
            Know where AI stands. Decide what to fix next. Track progress.
          </h2>
          <p className="font-body text-xl leading-relaxed text-on-surface-variant">
            The Business AI Diagnostic continuously assesses your use of AI across 12
            dimensions and gives an evidence-based view of strengths,
            gaps and priorities for improvement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/40 flex flex-col gap-4"
            >
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
