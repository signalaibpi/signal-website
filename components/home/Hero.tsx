import { ArrowRightIcon } from "@/lib/icons";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const SAMPLE_DIMENSIONS = [
  { name: "01. AI Strategy", weight: 4, score: "68%", priority: false },
  {
    name: "03. Workforce AI Willingness",
    weight: 4,
    score: "34%",
    priority: true,
  },
  { name: "06. Data Quality", weight: 4, score: "82%", priority: false },
  {
    name: "10. Human Accountability",
    weight: 4,
    score: "41%",
    priority: true,
  },
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
          <div className="lg:col-span-6 relative">
            <ImagePlaceholder
              label="analyst reviewing diagnostic documents at a desk"
              aspect="aspect-[4/3]"
            />
            <div className="relative lg:-mt-24 lg:-ml-6 bg-surface-container-lowest rounded-xl p-6 sm:p-7 shadow-lg border border-outline-variant/40 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-body text-xs uppercase text-on-surface font-semibold tracking-wider">
                    Business AI Diagnostic
                  </span>
                </div>
                <span className="font-body text-xs px-2 py-0.5 rounded bg-surface-container text-secondary uppercase font-semibold">
                  Illustrative sample
                </span>
              </div>
              <div className="flex flex-col gap-3 pt-3">
                {SAMPLE_DIMENSIONS.map((dim) => (
                  <div
                    key={dim.name}
                    className={`p-3 rounded-lg flex flex-col gap-1.5 ${
                      dim.priority
                        ? "bg-primary-tint border border-primary/20"
                        : "bg-surface-container-low"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm font-semibold text-on-surface">
                        {dim.name}
                      </span>
                      <span
                        className={`font-body text-sm font-semibold ${
                          dim.priority ? "text-primary" : "text-on-surface"
                        }`}
                      >
                        {dim.score}
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-body text-xs">
                      <span className="text-secondary">
                        Weight: {dim.weight}
                      </span>
                      {dim.priority && (
                        <span className="px-2 py-0.5 rounded bg-primary text-white uppercase font-bold text-[10px] tracking-wide">
                          Priority
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 flex justify-end">
                <a
                  className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-primary hover:text-primary-hover transition-colors"
                  href="#"
                >
                  <span>View a sample diagnostic</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
