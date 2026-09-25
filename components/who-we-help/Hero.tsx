import { ArrowRightIcon } from "@/lib/icons";
import { PRIORITY_SECTORS, SECONDARY_SECTORS } from "./sectors-data";
import { SectorPhoto } from "./SectorPhoto";

const TILE_FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export function Hero() {
  return (
    <section className="w-full bg-surface-container-lowest border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 pt-14 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6 pt-2">
            <h1 className="font-display text-[36px] leading-[44px] sm:text-[56px] sm:leading-[64px] tracking-[-0.03em] text-on-surface font-bold">
              Who we help
            </h1>
            <p className="font-body text-lg sm:text-xl leading-relaxed text-on-surface-variant max-w-xl">
              Signal&rsquo;s primary focus is helping fintechs, business
              software companies and business process outsourcers turn AI
              investment into measurable operational results.
            </p>
            <p className="font-body text-base leading-relaxed text-secondary max-w-xl">
              We also work with other sectors with similar repeatable workflows
              across the organisation including accountancies, law firms,
              insurance brokers &amp; administrators and freight forwarders
              &amp; trade services providers.
            </p>
          </div>
          <nav aria-label="Sectors" className="lg:col-span-6 flex flex-col gap-8">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
              {PRIORITY_SECTORS.map((sector) => (
                <li key={sector.id}>
                  <a
                    href={`#${sector.id}`}
                    className={`group flex sm:flex-col items-center sm:items-stretch gap-4 sm:gap-3 rounded-xl ${TILE_FOCUS}`}
                  >
                    <SectorPhoto
                      image={sector.image}
                      sizes="(min-width: 1280px) 180px, (min-width: 640px) 30vw, 64px"
                      className="w-16 shrink-0 sm:w-full transition-[transform,box-shadow,border-color] duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:border-outline-variant group-focus-visible:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
                    />
                    <span className="flex-1 flex items-start justify-between gap-2 font-display text-base leading-snug font-semibold text-on-surface group-hover:text-primary transition-colors">
                      {sector.name}
                      <ArrowRightIcon className="w-4 h-4 mt-1 shrink-0 text-primary sm:hidden" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <span className="font-body text-xs uppercase tracking-wider text-secondary font-semibold">
                Also
              </span>
              <ul className="flex flex-col border-t border-outline-variant/40">
                {SECONDARY_SECTORS.map((sector) => (
                  <li key={sector.id} className="border-b border-outline-variant/40">
                    <a
                      href={`#${sector.id}`}
                      className={`group flex items-center justify-between gap-4 py-3 font-body text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors rounded-sm ${TILE_FOCUS}`}
                    >
                      {sector.name}
                      <ArrowRightIcon className="w-4 h-4 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
