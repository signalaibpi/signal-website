import Image from "next/image";
import { SectionEyebrow } from "./SectionEyebrow";

const BENEFITS = [
  {
    title: "Strategic prioritisation",
    body: "In the planning phase, the Business AI Diagnostic compares potential AI use cases and identifies whether data, systems and teams are ready to implement AI.",
  },
  {
    title: "From pilot to production",
    body: "When an early AI implementation is underperforming, the Business AI Diagnostic identifies the underlying issues across people, processes, data and technology.",
  },
  {
    title: "Scaling AI",
    body: "When AI is already delivering results, the Business AI Diagnostic identifies the capabilities needed to make continued progress sustainable.",
  },
];

export function Benefits() {
  return (
    <section className="w-full bg-surface py-16 sm:py-20 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col gap-14">
        <div className="max-w-3xl flex flex-col gap-4">
          <SectionEyebrow>When the Business AI Diagnostic applies</SectionEyebrow>
          <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
            One diagnostic. Every stage of AI adoption.
          </h2>
          <p className="font-body text-xl leading-relaxed text-on-surface-variant">
            The Business AI Diagnostic informs AI strategy planning, pilots and roll-outs.
          </p>
        </div>
        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden border border-outline-variant/40">
          <Image
            src="/home-benefits.png"
            alt="Colleagues discussing AI initiatives around a table in a ground-floor office"
            fill
            sizes="(min-width: 1280px) 1152px, (min-width: 768px) calc(100vw - 80px), calc(100vw - 40px)"
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col gap-3 p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40"
            >
              <h3 className="font-display text-lg leading-snug text-on-surface font-bold">
                {benefit.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                {benefit.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
