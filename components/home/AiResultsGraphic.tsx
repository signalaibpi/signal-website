type Area = "Implementation" | "Operation" | "Governance";

// Homepage palette reuses the original blue for Operation and grey for Implementation.
const AREA_STYLES: Record<Area, { tint: string; text: string }> = {
  Implementation: {
    tint: "bg-area-operation-tint",
    text: "text-area-operation",
  },
  Operation: { tint: "bg-area-strategy-tint", text: "text-area-strategy" },
  Governance: {
    tint: "bg-area-governance-tint",
    text: "text-area-governance",
  },
};

const DIMENSIONS: { number: string; name: string; area: Area }[] = [
  { number: "01", name: "Workforce AI Willingness", area: "Operation" },
  { number: "02", name: "Workforce AI Capability", area: "Operation" },
  { number: "03", name: "AI Success Tracking", area: "Operation" },
  { number: "04", name: "Work Redesign", area: "Operation" },
  { number: "05", name: "Data Quality", area: "Implementation" },
  { number: "06", name: "Requirements & Acceptance", area: "Implementation" },
  { number: "07", name: "Iteration Velocity", area: "Implementation" },
  { number: "08", name: "Data & Process Integration", area: "Implementation" },
  { number: "09", name: "Quality at the Right Cost", area: "Implementation" },
  { number: "10", name: "Human Accountability", area: "Governance" },
  { number: "11", name: "Policy & Risk Management", area: "Governance" },
  { number: "12", name: "Output Quality Control", area: "Governance" },
];

export function AiResultsGraphic() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-7 shadow-lg border border-outline-variant/40 max-w-lg mx-auto lg:mx-0">
      <div className="flex items-center gap-2 pb-4 border-b border-outline-variant/20">
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span className="font-body text-xs uppercase text-on-surface font-semibold tracking-wider">
          What drives AI results
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4">
        {DIMENSIONS.map((dim) => {
          const style = AREA_STYLES[dim.area];
          return (
            <div
              key={dim.number}
              className={`relative p-3 rounded-lg flex flex-col gap-1 ${style.tint}`}
            >
              <span className="font-body text-[10px] leading-none uppercase tracking-wide text-secondary">
                {dim.area}
              </span>
              <span
                className={`font-display text-lg font-bold ${style.text}`}
              >
                {dim.number}
              </span>
              <span className="font-body text-xs leading-tight uppercase tracking-wide text-on-surface-variant">
                {dim.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
