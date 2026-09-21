import Image from "next/image";
import { SectionEyebrow } from "./SectionEyebrow";

export function Founder() {
  return (
    <section className="w-full bg-surface py-16 sm:py-20 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="bg-surface-container-low rounded-2xl p-8 sm:p-14 lg:p-16 border border-outline-variant/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Image
                src="/erik-de-kroon.jpg"
                alt="Erik de Kroon, Founder of Signal"
                width={400}
                height={400}
                className="w-full max-w-[220px] h-auto rounded-2xl border border-outline-variant/40"
              />
              <div className="flex items-center gap-4 text-on-surface font-display text-sm font-semibold">
                <span>Erik de Kroon</span>
                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
                <span className="text-secondary font-normal">Founder</span>
              </div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-4">
              <SectionEyebrow>Founder</SectionEyebrow>
              <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
                AI expertise. CEO experience.
              </h2>
              <div className="flex flex-col gap-6 text-on-surface-variant font-body text-xl leading-relaxed pt-2">
                <p>
                  Signal was founded by Erik de Kroon, who has worked across
                  AI, strategy, product and company leadership.
                </p>
                <p>
                  He started his career as an AI researcher. He then spent
                  years as a strategy consultant, led product teams, and
                  founded and led a fintech company.
                </p>
                <p>
                  That combination of AI expertise, strategic perspective and
                  operating experience is what Signal brings to every
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
