import Link from "next/link";
import { ArrowRightIcon } from "@/lib/icons";
import { AREA_STYLES } from "@/components/business-ai-diagnostic/dimensions-data";
import { PRIORITY_SECTORS, type PrioritySector } from "./sectors-data";
import { SectorPhoto, SectorTags, SubsectionLabel } from "./SectorPhoto";

// Alternating bands; the first shares its background with the group heading
// above it so the heading reads as part of the Fintechs section's band.
const BANDS = ["bg-surface", "bg-surface-container-lowest"];

function Sector({ sector, band }: { sector: PrioritySector; band: string }) {
  return (
    <article
      id={sector.id}
      aria-labelledby={`${sector.id}-title`}
      className={`w-full ${band} py-16 sm:py-20 border-b border-outline-variant/20 scroll-mt-20`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectorPhoto
              image={sector.image}
              sizes="(min-width: 1280px) 460px, (min-width: 1024px) 38vw, calc(100vw - 40px)"
              className="max-w-md lg:max-w-none"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h3
                id={`${sector.id}-title`}
                className="font-display text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] tracking-[-0.02em] text-on-surface font-semibold"
              >
                {sector.name}
              </h3>
              <div className="flex flex-col gap-2">
                <SubsectionLabel>The AI opportunity</SubsectionLabel>
                <p className="font-body text-xl leading-relaxed text-on-surface-variant">
                  {sector.opportunity}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-8 border-t border-outline-variant/40">
              <SubsectionLabel>Where AI can help</SubsectionLabel>
              <SectorTags items={sector.whereAiCanHelp} />
            </div>

            <div className="flex flex-col gap-6 pt-8 border-t border-outline-variant/40">
              <SubsectionLabel>What holds progress back</SubsectionLabel>
              <ul className="flex flex-col gap-6">
                {sector.barriers.map(({ dimension, body }) => (
                  <li key={dimension.number} className="flex flex-col gap-1.5">
                    <span
                      className={`font-body text-xs uppercase tracking-wider font-semibold ${AREA_STYLES[dimension.area].text}`}
                    >
                      {dimension.number} · {dimension.area}
                    </span>
                    <span className="font-display text-base text-on-surface font-bold">
                      {dimension.name}
                    </span>
                    <p className="font-body text-base leading-relaxed text-on-surface-variant">
                      {body}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary hover:text-primary-hover transition-colors w-fit"
                href="/business-ai-diagnostic"
              >
                <span>Explore the diagnostic dimensions</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-col gap-6 pt-8 border-t border-outline-variant/40">
              <SubsectionLabel>How Signal helps</SubsectionLabel>
              <ul className="flex flex-col gap-6">
                {sector.services.map((service) => (
                  <li key={service.name} className="flex flex-col gap-1.5">
                    <span className="font-display text-base text-on-surface font-bold">
                      {service.name}
                    </span>
                    <p className="font-body text-base leading-relaxed text-on-surface-variant">
                      {/* Copy fragments start lower-case after "Name:" in the
                          source; capitalise for a standalone sentence. */}
                      {service.body.charAt(0).toUpperCase() + service.body.slice(1)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function PrioritySectors() {
  return (
    <section aria-labelledby="who-we-specialise-in">
      <div className="w-full bg-surface pt-16 sm:pt-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          <h2
            id="who-we-specialise-in"
            className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold"
          >
            Who we specialise in
          </h2>
        </div>
      </div>
      {PRIORITY_SECTORS.map((sector, i) => (
        <Sector key={sector.id} sector={sector} band={BANDS[i % BANDS.length]} />
      ))}
    </section>
  );
}
