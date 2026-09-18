import { SectionEyebrow } from "./SectionEyebrow";
import { ArrowRightIcon } from "@/lib/icons";

const MODULES = [
  {
    label: "Service 01",
    title: "AI Strategy Planning",
    body: "Helps organisations translate their AI strategy and diagnostic results into clear business priorities, owners, plans and measurable targets.",
    cta: "Explore AI Strategy Planning",
  },
  {
    label: "Service 02",
    title: "Embedded AI Delivery",
    body: "Helps frontline AI leaders improve AI performance, help their teams adopt AI effectively and take accountability for AI results.",
    cta: "Explore Embedded AI Delivery",
  },
];

export function OtherServices() {
  return (
    <section className="w-full bg-surface py-20 sm:py-24 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col gap-14">
        <div className="max-w-3xl flex flex-col gap-4">
          <SectionEyebrow>Other services</SectionEyebrow>
          <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
            Turn the Business AI Diagnostic findings into progress
          </h2>
          <p className="font-body text-xl leading-relaxed text-on-surface-variant">
            Once you know what needs attention, Signal helps you set
            priorities, assign ownership and build the capability to
            deliver.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MODULES.map((mod) => (
            <div
              key={mod.title}
              className="bg-surface-container-low rounded-xl p-8 sm:p-10 border border-outline-variant/40 flex flex-col justify-between gap-8"
            >
              <div className="flex flex-col gap-4">
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
              <a
                className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary hover:text-primary-hover transition-colors w-fit"
                href="#"
              >
                <span>{mod.cta}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        <a
          className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary hover:text-primary-hover transition-colors w-fit"
          href="#"
        >
          <span>Explore Signal services</span>
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
