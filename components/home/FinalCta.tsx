export function FinalCta() {
  return (
    <section className="w-full bg-surface py-20 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="bg-surface-container-low rounded-2xl p-8 sm:p-16 lg:p-20 border border-outline-variant/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
              Start with a free AI Snapshot, then go as deep as you need.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto shrink-0">
            <a
              className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-hover px-6 py-3.5 font-display text-sm text-white font-semibold transition-colors shadow-sm text-center"
              href="#"
            >
              Book a free AI Snapshot
            </a>
            <a
              className="inline-flex items-center justify-center rounded-lg bg-surface-container-lowest border border-outline-variant/40 px-6 py-3.5 font-display text-sm text-on-surface font-semibold hover:bg-surface-container transition-colors text-center"
              href="#"
            >
              View a sample diagnostic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
