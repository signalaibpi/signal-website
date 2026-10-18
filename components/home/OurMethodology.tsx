import { SectionEyebrow } from "./SectionEyebrow";
import { AiResultsGraphic } from "./AiResultsGraphic";
import { ArrowRightIcon } from "@/lib/icons";

export function OurMethodology() {
  return (
    <section className="w-full bg-surface-container-lowest py-16 sm:py-20 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <SectionEyebrow>Our methodology</SectionEyebrow>
            <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
              When AI falls short, there’s rarely just one reason.
            </h2>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant">
              Signal&rsquo;s Business AI Diagnostic is a comprehensive, evidence-led methodology for identifying all root
              causes of disappointing AI adoption and business results. The findings provide the basis for agreeing
              priorities and setting improvement targets.
            </p>
            <a
              className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary hover:text-primary-hover transition-colors w-fit"
              href="#"
            >
              <span>Explore the Business AI Diagnostic</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
          <AiResultsGraphic />
        </div>
      </div>
    </section>
  );
}
