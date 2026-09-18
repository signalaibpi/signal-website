import { SectionEyebrow } from "./SectionEyebrow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const SECTORS = ["Fintech", "Software", "Outsourcing", "Professional Services"];

export function WhoIsThisFor() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 sm:py-24 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <SectionEyebrow>Who is this for</SectionEyebrow>
            <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
              For organisations looking to regain control of AI
              transformation
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pt-10">
            <div className="flex flex-col gap-4 font-body text-xl leading-relaxed text-on-surface-variant">
              <p>
                We focus on sectors where AI can reshape repeatable workflows
                across the organisation, including fintech, software, outsourcing and 
                professional services.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {SECTORS.map((sector) => (
                <span
                  key={sector}
                  className="px-4 py-2.5 rounded-lg bg-surface-container-lowest font-body text-sm font-semibold text-on-surface shadow-sm border border-outline-variant/40"
                >
                  {sector}
                </span>
              ))}
            </div>
            <ImagePlaceholder
              label="executive and operational leaders reviewing a diagnostic report"
              aspect="aspect-[16/9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
