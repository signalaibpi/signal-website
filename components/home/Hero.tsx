import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-surface-container-lowest border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 pt-14 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span className="font-body text-xs text-secondary uppercase tracking-wider font-semibold">
                AI Business Process Improvement
              </span>
            </div>
            <h1 className="font-display text-[36px] leading-[44px] sm:text-[56px] sm:leading-[64px] tracking-[-0.03em] text-on-surface font-bold">
              Make AI work for your teams
            </h1>
            <div className="flex flex-col gap-3 max-w-xl">
              <p className="font-body text-lg sm:text-xl leading-relaxed text-on-surface-variant">
                Getting value from AI takes more than technology.
              </p>
              <p className="font-body text-lg sm:text-xl leading-relaxed text-on-surface-variant">
                Signal helps your teams adopt, use and improve AI successfully. We focus on teams where AI is not yet delivering the expected benefits.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-hover px-6 py-3.5 font-display text-sm text-white font-semibold transition-colors shadow-sm w-fit"
              href="#"
            >
              Book a call
            </a>
          </div>
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-outline-variant/40">
              <Image
                src="/home-hero.png"
                alt="A professional seen from behind looking towards a sunlit city horizon from a broad walkway"
                fill
                sizes="(min-width: 1280px) 544px, (min-width: 1024px) calc(50vw - 96px), (min-width: 768px) calc(100vw - 80px), calc(100vw - 40px)"
                className="object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
