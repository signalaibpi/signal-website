type Area = "Strategy" | "Implementation" | "Operation" | "Governance";

const AREA_STYLES: Record<Area, { tint: string; text: string }> = {
  Strategy: { tint: "bg-area-strategy-tint", text: "text-area-strategy" },
  Implementation: {
    tint: "bg-area-implementation-tint",
    text: "text-area-implementation",
  },
  Operation: { tint: "bg-area-operation-tint", text: "text-area-operation" },
  Governance: {
    tint: "bg-area-governance-tint",
    text: "text-area-governance",
  },
};

const DIMENSIONS: { number: string; name: string; area: Area }[] = [
  { number: "01", name: "AI Strategy", area: "Strategy" },
  { number: "02", name: "Workforce AI Capability", area: "Operation" },
  { number: "03", name: "Workforce AI Willingness", area: "Operation" },
  { number: "04", name: "Work Redesign", area: "Operation" },
  { number: "05", name: "Output Quality Assurance", area: "Operation" },
  { number: "06", name: "Data Quality", area: "Implementation" },
  { number: "07", name: "Data & Process Integration", area: "Implementation" },
  { number: "08", name: "Iteration Velocity", area: "Implementation" },
  { number: "09", name: "Quality at the Right Cost", area: "Implementation" },
  { number: "10", name: "Human Accountability", area: "Governance" },
  { number: "11", name: "Policy and Control Assurance", area: "Governance" },
  { number: "12", name: "Risk Management", area: "Governance" },
];

export function Hero() {
  return (
    <section className="w-full bg-surface-container-lowest border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 pt-14 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div className="lg:col-span-6 flex flex-col gap-6 pt-2">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-body text-xs text-secondary uppercase tracking-wider font-semibold">
                Powered by the Business AI Diagnostic
              </span>
            </div>
            <h1 className="font-display text-[36px] leading-[44px] sm:text-[56px] sm:leading-[64px] tracking-[-0.03em] text-on-surface font-bold">
              Take control of AI progress
            </h1>
            <p className="font-body text-lg sm:text-xl leading-relaxed text-on-surface-variant max-w-xl">
              Signal helps CEOs and COOs identify what is holding AI back,
              decide what to fix first and set measurable improvement
              targets.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-hover px-6 py-3.5 font-display text-sm text-white font-semibold transition-colors shadow-sm"
                href="#"
              >
                Book a free AI Snapshot
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg bg-surface-container-low border border-outline-variant/40 px-6 py-3.5 font-display text-sm text-on-surface font-semibold hover:bg-surface-container transition-colors"
                href="#"
              >
                View a sample diagnostic
              </a>
            </div>
          </div>

          {/* Right composition */}
          <div className="lg:col-span-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-7 shadow-lg border border-outline-variant/40 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 pb-4 border-b border-outline-variant/20">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-body text-xs uppercase text-on-surface font-semibold tracking-wider">
                  Business AI Diagnostic
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2.5 pt-4">
                {DIMENSIONS.map((dim) => {
                  const style = AREA_STYLES[dim.area];
                  return (
                    <div
                      key={dim.number}
                      className={`relative p-3 rounded-lg flex flex-col gap-1 ${style.tint}`}
                    >
                      <span className="absolute top-2 right-2.5 font-body text-[9px] leading-none uppercase tracking-wide text-secondary">
                        {dim.area}
                      </span>
                      <span
                        className={`font-display text-lg font-bold ${style.text}`}
                      >
                        {dim.number}
                      </span>
                      <span className="font-body text-[11px] leading-tight uppercase tracking-wide text-on-surface-variant pr-6">
                        {dim.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
