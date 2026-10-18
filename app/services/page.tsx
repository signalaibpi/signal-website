import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Signal",
  description:
    "Signal helps organisations review AI progress, plan improvements and deliver better business results with AI.",
};

const SERVICES = [
  {
    id: "ai-progress-review",
    title: "AI Progress Review",
    description:
      "Helps organisations identify what is holding back AI adoption and business results, and agree priorities for improvement.",
  },
  {
    id: "ai-planning",
    title: "AI Planning",
    description:
      "Helps teams translate agreed priorities into practical plans with clear targets, ownership and resources.",
  },
  {
    id: "ai-delivery",
    title: "AI Delivery",
    description:
      "Helps teams deliver improvements while building their ability to continue independently.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="w-full bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="max-w-5xl flex flex-col gap-6">
            <span className="font-body text-xs uppercase tracking-wider text-secondary font-semibold">
              Our services
            </span>
            <h1 className="font-display text-[36px] leading-[44px] sm:text-[56px] sm:leading-[64px] tracking-[-0.03em] text-on-surface font-bold">
              From progress review to delivery
            </h1>
            <p className="font-body text-xl leading-relaxed text-on-surface-variant">
              Signal helps teams identify gaps, prioritise what matters, plan
              improvements and deliver.
            </p>
          </div>
        </div>
      </section>
      <section aria-label="Signal services" className="w-full bg-surface py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <article
              id={service.id}
              key={service.id}
              className="scroll-mt-24 bg-surface-container-low rounded-xl p-6 sm:p-8 border border-outline-variant/40 flex flex-col gap-4"
            >
              <span className="font-body text-xs uppercase tracking-wider text-secondary font-bold">
                Step {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl text-on-surface font-bold">
                {service.title}
              </h2>
              <p className="font-body text-base leading-relaxed text-on-surface-variant">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
