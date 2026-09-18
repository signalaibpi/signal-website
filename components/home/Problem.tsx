import { SectionEyebrow } from "./SectionEyebrow";

/**
 * Draft copy — Signal Website Copy.md has no approved text for this section
 * yet (only the design guidelines call for a "Problem" section here). Body
 * text is adapted from the Business Plan's problem statement
 * (Signal Business Plan.md → "Problem we are solving") pending Erik writing
 * approved homepage copy for it.
 */
export function Problem() {
  return (
    <section className="w-full bg-surface py-20 sm:py-24 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="max-w-3xl flex flex-col gap-6">
          <SectionEyebrow>The problem</SectionEyebrow>
          <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
            AI progress is stalling. There is no shared view why.
          </h2>
          <div className="flex flex-col gap-5 text-on-surface-variant font-body text-lg leading-relaxed">
            <p>
              AI pilots showed promise, but few have progressed into
              reliable, business-as-usual operations. Different teams give
              different explanations: technology blames the data, business
              teams blame the tools, and leadership cannot determine which
              constraints actually matter.
            </p>
            <p>
              Without a shared, evidence-based view of what is holding
              progress back, it is difficult to agree what to fix first or
              know whether things are improving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
