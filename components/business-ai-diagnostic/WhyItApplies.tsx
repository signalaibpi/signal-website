const PANELS = [
  {
    title: "Prioritise with a realistic view of readiness",
    body: "Many dimensions can be assessed before an AI application is built. Checking data, integration and workforce readiness helps leaders judge which initiatives are ready to proceed and which need groundwork first.",
  },
  {
    title: "Find what is holding AI back",
    body: "The diagnostic combines scores across 12 dimensions with root cause analysis to investigate why progress is stalling and identify what needs attention.",
  },
  {
    title: "Give teams clear improvement targets",
    body: "Findings become targets for specific capabilities, with an agreed timeframe—for example, improving data quality to a defined level within three months.",
  },
];

export function WhyItApplies() {
  return (
    <section className="w-full bg-surface py-20 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PANELS.map((panel) => (
            <div
              key={panel.title}
              className="flex flex-col gap-3 p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40"
            >
              <h3 className="font-display text-lg leading-snug text-on-surface font-bold">
                {panel.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                {panel.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
