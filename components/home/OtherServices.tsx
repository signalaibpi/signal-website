import { SectionEyebrow } from "./SectionEyebrow";
import { ArrowRightIcon } from "@/lib/icons";

const MODULES = [
  {
    label: "Service 01",
    title: "AI Progress Review",
    body: "Helps organisations measure AI progress, identify what is holding it back and identify priorities for improvement.",
  },
  {
    label: "Service 02",
    title: "AI Strategy Planning",
    body: "Helps organisations translate their AI strategy and progress review results into targets, owners, plans and funding.",
  },
  {
    label: "Service 03",
    title: "Embedded AI Delivery",
    body: "Helps frontline AI leaders deliver improvements while building the team’s ability to continue independently.",
  },
];

export function OtherServices() {
  return (
    <section className="w-full bg-surface py-16 sm:py-20 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col gap-14">
        <div className="max-w-3xl flex flex-col gap-4">
          <SectionEyebrow>Services</SectionEyebrow>
          <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
            From progress review to delivery
          </h2>
          <p className="font-body text-xl leading-relaxed text-on-surface-variant">
            Signal helps senior leadership and frontline teams identify gaps, prioritise what
            matters, plan improvements and deliver them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MODULES.map((mod) => (
            <div
              key={mod.title}
              className="bg-surface-container-low rounded-xl p-8 sm:p-10 border border-outline-variant/40 flex flex-col gap-4"
            >
              <span className="font-body text-xs uppercase tracking-wider text-secondary font-bold">
                {mod.label}
              </span>
              <h3 className="font-display text-2xl text-on-surface font-bold">
                {mod.title}
              </h3>
              <p className="font-body text-base leading-relaxed text-on-surface-variant">
                {mod.body}
              </p>
            </div>
          ))}
        </div>
        <a
          className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary hover:text-primary-hover transition-colors w-fit"
          href="#"
        >
          <span>Explore Signal’s services</span>
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
