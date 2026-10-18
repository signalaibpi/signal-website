import { SectionEyebrow } from "@/components/home/SectionEyebrow";
import { DIMENSIONS } from "./dimensions-data";
import { DimensionCard } from "./DimensionCard";

export function DimensionsGrid() {
  return (
    <section className="w-full bg-surface-container-lowest py-16 sm:py-20 border-t border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col gap-14">
        <div className="max-w-3xl flex flex-col gap-4">
          <SectionEyebrow>The 12 diagnostic dimensions</SectionEyebrow>
          <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
            Three areas. Twelve dimensions. One evidence-based view.
          </h2>
          <p className="font-body text-lg leading-relaxed text-on-surface-variant">
            The Diagnostic assesses the organisational skills to implement
            AI, get the most from it in day-to-day work, and keep it under
            effective control. It applies to generative AI, whether built
            in-house, commissioned or bought from a vendor.
          </p>
          <p className="font-body text-base leading-relaxed text-secondary">
            Scores reflect evidence of maturity and results. Where an AI
            application is not live, readiness is assessed instead. Each
            dimension also includes a quality indicator to show when design,
            coverage or judgement is stronger or weaker than its process
            score suggests.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIMENSIONS.map((dimension) => (
            <DimensionCard key={dimension.number} dimension={dimension} />
          ))}
        </div>
      </div>
    </section>
  );
}
