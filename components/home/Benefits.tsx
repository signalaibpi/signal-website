import { SectionEyebrow } from "./SectionEyebrow";

const BENEFITS = [
  {
    title: "Prioritise the AI use cases most ready to deliver value",
    body: "Compare potential use cases and identify where the data, systems and teams are ready before committing significant time and investment.",
  },
  {
    title: "Find what is holding progress back",
    body: "When an AI pilot or application is underperforming, identify the underlying issues across people, processes, data and technology, and agree what to fix first.",
  },
  {
    title: "Scale AI where it is already working",
    body: "When AI is delivering results, identify the capabilities needed to strengthen performance, support wider adoption and make progress sustainable.",
  },
];

export function Benefits() {
  return (
    <section className="w-full bg-surface py-20 sm:py-24 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col gap-14">
        <div className="max-w-3xl flex flex-col gap-4">
          <SectionEyebrow>Benefits</SectionEyebrow>
          <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
            Getting more value from AI requires different answers at
            different stages
          </h2>
          <p className="font-body text-xl leading-relaxed text-on-surface-variant">
            Signal gives leaders an evidence-based view of their AI
            capabilities, so they can make better decisions about where to
            invest and what to improve.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col gap-3 p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40"
            >
              <h3 className="font-display text-lg leading-snug text-on-surface font-bold">
                {benefit.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                {benefit.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
