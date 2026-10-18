const PANELS = [
  {
    title: "Assess readiness before launch",
    body: "For applications that are not live, the Diagnostic assesses whether the organisation is ready to launch and what level it is likely to reach. This helps leaders identify where groundwork is needed first.",
  },
  {
    title: "See the outcomes that matter",
    body: "The Diagnostic looks at results visible to frontline teams and senior management, including AI performance, costs, adoption and control. Technical choices may explain the results, but are not scored directly.",
  },
  {
    title: "Build a rounded view of AI",
    body: "Implementation, Operation and Governance are assessed across 12 dimensions. Process scores are evidence-based and paired with a quality indicator that adds expert judgement about coverage, design and fit.",
  },
];

export function WhyItApplies() {
  return (
    <section className="w-full bg-surface py-16 sm:py-20">
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
