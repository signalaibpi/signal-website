import { SectionEyebrow } from "./SectionEyebrow";
import { AiResultsGraphic } from "./AiResultsGraphic";

export function OurMethodology() {
  return (
    <section className="w-full bg-surface-container-lowest py-16 sm:py-20 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <SectionEyebrow>Our methodology</SectionEyebrow>
            <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
              Identify root causes and set clear priorities.
            </h2>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant">
              Signal uses its Business AI Diagnostic methodology to examine key success factors for AI adoption and business results. The findings help identify root causes of disappointing outcomes and provide the basis for agreeing priorities and improvement targets.
            </p>
          </div>
          <AiResultsGraphic />
        </div>
      </div>
    </section>
  );
}
