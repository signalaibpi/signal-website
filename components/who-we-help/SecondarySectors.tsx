import { SECONDARY_SECTORS } from "./sectors-data";
import { SectorPhoto, SectorTags, SubsectionLabel } from "./SectorPhoto";

export function SecondarySectors() {
  return (
    <section
      aria-labelledby="where-our-approach-also-fits"
      className="w-full bg-surface-container-lowest py-16 sm:py-20 border-b border-outline-variant/20"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col gap-12">
        <div className="max-w-3xl flex flex-col gap-4">
          <h2
            id="where-our-approach-also-fits"
            className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold"
          >
            Where our approach also fits
          </h2>
          <p className="font-body text-xl leading-relaxed text-on-surface-variant">
            We also apply our frontline-led approach in the following sectors
            when there is a strong operational opportunity and committed
            leadership.
          </p>
        </div>
        <div className="flex flex-col border-t border-outline-variant/40">
          {SECONDARY_SECTORS.map((sector) => (
            <article
              key={sector.id}
              id={sector.id}
              aria-labelledby={`${sector.id}-title`}
              className="grid grid-cols-[80px_1fr] md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-5 md:gap-10 lg:gap-16 items-start py-10 border-b border-outline-variant/40 scroll-mt-20"
            >
              <SectorPhoto
                image={sector.image}
                sizes="(min-width: 1024px) 240px, (min-width: 768px) 200px, 80px"
              />
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3
                    id={`${sector.id}-title`}
                    className="font-display text-xl sm:text-2xl leading-snug text-on-surface font-bold"
                  >
                    {sector.name}
                  </h3>
                  <p className="font-body text-lg leading-relaxed text-on-surface-variant">
                    {sector.opportunity}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <SubsectionLabel>Where AI can help</SubsectionLabel>
                  <SectorTags items={sector.whereAiCanHelp} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
