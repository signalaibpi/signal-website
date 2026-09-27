import { DimensionsRadial } from "./DimensionsRadial";

export function Hero() {
  return (
    <section className="w-full bg-surface-container-lowest border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 pt-14 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6 pt-2">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-body text-xs text-secondary uppercase tracking-wider font-semibold">
                Business AI Diagnostic
              </span>
            </div>
            <h1 className="font-display text-[36px] leading-[44px] sm:text-[56px] sm:leading-[64px] tracking-[-0.03em] text-on-surface font-bold">
              Make your AI transformation measurable
            </h1>
            <p className="font-body text-lg sm:text-xl leading-relaxed text-on-surface-variant max-w-xl">
              The Business AI Diagnostic builds an evidence-based assessment
              of your organisation&rsquo;s AI progress, identifies what is
              holding it back most and sets clear priorities for improvement.
            </p>
            <div className="pt-2">
              <a
                className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-hover px-6 py-3.5 font-display text-sm text-white font-semibold transition-colors shadow-sm"
                href="#"
              >
                View a sample diagnostic
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <DimensionsRadial />
          </div>
        </div>
      </div>
    </section>
  );
}
