import { SectionEyebrow } from "./SectionEyebrow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function OurApproach() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 sm:py-24 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <SectionEyebrow>Our approach</SectionEyebrow>
            <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
              Getting value from AI takes capability across the business
            </h2>
            <div className="flex flex-col gap-5 text-on-surface-variant font-body text-lg leading-relaxed">
              <p>
                Implementing AI requires developing the skills, incentives,
                ways of working and accountability to help frontline teams
                turn AI into better business results. BCG estimates 70% of AI
                transformation effort should go into people and processes.
              </p>
              <p>
                Signal helps frontline teams build that capability and take
                ownership of AI performance. We call this{" "}
                <strong className="font-semibold text-on-surface">
                  frontline-centred AI transformation
                </strong>
                .
              </p>
              <p>
                Our Business AI Diagnostic identifies what is holding
                progress back across people, processes, data and technology,
                giving you clear priorities for improvement.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <ImagePlaceholder
              label="frontline operational and data teams reviewing workflows"
              aspect="aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
