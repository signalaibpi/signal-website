import Image from "next/image";
import { SectionEyebrow } from "./SectionEyebrow";
import { ArrowRightIcon } from "@/lib/icons";

export function OurApproach() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 sm:py-24 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <SectionEyebrow>Our approach</SectionEyebrow>
            <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
              AI requires capability across the business
            </h2>
            <div className="flex flex-col gap-5 text-on-surface-variant font-body text-lg leading-relaxed">
              <p>
                Implementing AI requires developing the skills, incentives,
                ways of working and accountability to help frontline teams
                turn AI into better business results. 
              </p>
              <p>
                Signal helps frontline teams take
                ownership of AI results. We call this{" "}
                <strong className="font-semibold text-on-surface">
                  frontline-centred AI transformation
                </strong>
                .
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary hover:text-primary-hover transition-colors w-fit"
              href="#"
            >
              <span>Read more about frontline-centred AI transformation</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-outline-variant/40">
              <Image
                src="/home-our-approach.png"
                alt="Frontline operational and data teams reviewing workflows"
                fill
                sizes="(min-width: 1024px) 544px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
