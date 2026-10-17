import { SectionEyebrow } from "./SectionEyebrow";
import { ArrowRightIcon } from "@/lib/icons";

export function Problem() {
  return (
    <section className="w-full bg-surface-container-lowest py-16 sm:py-20 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex flex-col gap-6">
          <SectionEyebrow>The problem</SectionEyebrow>
          <h2 className="text-balance font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
            When AI investment isn’t producing business results.
          </h2>
          <div className="max-w-4xl flex flex-col gap-5 text-on-surface-variant font-body text-lg leading-relaxed">
            <p>
              Getting value from AI requires developing the skills, incentives,
              ways of working and accountability to help frontline teams
              turn AI into better business results.
            </p>
            <p>
              These capabilities don’t develop simply by giving employees AI tools or rolling out AI projects.
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary hover:text-primary-hover transition-colors w-fit"
            href="#"
          >
            <span>Why teams can struggle to get results from AI</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
