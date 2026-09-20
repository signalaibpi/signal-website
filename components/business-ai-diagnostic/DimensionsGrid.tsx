import { SectionEyebrow } from "@/components/home/SectionEyebrow";
import { DIMENSIONS } from "./dimensions-data";
import { DimensionCard } from "./DimensionCard";

export function DimensionsGrid() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 sm:py-24 border-t border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col gap-14">
        <div className="max-w-3xl flex flex-col gap-4">
          <SectionEyebrow>The 12 diagnostic dimensions</SectionEyebrow>
          <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
            The Business AI Diagnostic scores organisations on 12 dimensions.
          </h2>
          <p className="font-body text-lg leading-relaxed text-on-surface-variant">
            These 12 cover the most important success factors and failure
            modes of AI transformations. They were chosen based on our
            founder&rsquo;s deep experience and extensive research.
          </p>
          <p className="font-body text-base leading-relaxed text-secondary">
            The dimensions measure symptoms observed by frontline teams and
            senior management. Root causes, including technical ones, will
            surface in the root cause analysis.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {DIMENSIONS.map((dimension) => (
            <DimensionCard key={dimension.number} dimension={dimension} />
          ))}
        </div>
      </div>
    </section>
  );
}
