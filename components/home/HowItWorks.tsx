import { SectionEyebrow } from "./SectionEyebrow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const STEPS = [
  {
    number: "01",
    product: "AI Snapshot",
    title: "Start with an AI Snapshot",
    body: "We speak with your team to identify your most likely strengths, gaps and next step.",
  },
  {
    number: "02",
    product: "Business AI Diagnostic",
    title: "Establish the evidence",
    body: "The Business AI Diagnostic assesses progress across strategy, implementation, operation and governance.",
  },
  {
    number: "03",
    product: "AI Strategy Planning",
    title: "Agree what matters most",
    body: "We translate the findings into clear priorities, owners and measurable targets.",
  },
  {
    number: "04",
    product: "Embedded AI Delivery",
    title: "Build the capability to deliver",
    body: "Where needed, we help frontline AI leaders improve performance, adoption and control.",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 sm:py-24 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col gap-14">
        <div className="max-w-3xl flex flex-col gap-4">
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
            From diagnosis to measurable progress
          </h2>
        </div>
        <ImagePlaceholder
          label="Collaborate"
          aspect="aspect-[21/9]"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 pt-6 relative bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/40"
            >
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded font-display text-xs font-bold bg-surface-container text-secondary border border-outline-variant/40">
                {step.number}
              </div>
              <div className="flex justify-end">
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-semibold text-right">
                  {step.product}
                </span>
              </div>
              <h3 className="font-display text-lg text-on-surface font-bold">
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
