import { ArrowRightIcon } from "@/lib/icons";
import { ArticleImagePlaceholder } from "@/components/resources/ArticleImagePlaceholder";
import { SERVICE_SECTIONS } from "./services-data";

export function Hero() {
  return (
    <section className="w-full bg-surface-container-lowest border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 pt-14 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 pt-2">
            <h1 className="font-display text-[36px] leading-[44px] sm:text-[56px] sm:leading-[64px] tracking-[-0.03em] text-on-surface font-bold">
              How we make AI work for your teams
            </h1>
            <p className="font-body text-lg sm:text-xl leading-relaxed text-on-surface-variant max-w-2xl">
              Signal helps teams where AI is not yet delivering the expected
              benefits to adopt, use and improve it, with three separate
              services:
            </p>
            <ul className="flex flex-col border-t border-outline-variant/40 max-w-2xl">
              {SERVICE_SECTIONS.map((service, i) => (
                <li key={service.id} className="border-b border-outline-variant/40">
                  <a
                    href={`#${service.id}`}
                    className="group flex items-start justify-between gap-4 py-3.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <span className="flex items-baseline gap-4">
                      {/* Numbers match the sections' "Step 01–03" labels and
                          show that the services run in sequence. */}
                      <span className="font-body text-sm font-semibold tabular-nums text-secondary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body text-base leading-relaxed text-on-surface-variant">
                        <span className="font-display font-bold text-on-surface group-hover:text-primary transition-colors">
                          {service.name}
                        </span>
                        : {service.summary}
                      </span>
                    </span>
                    <ArrowRightIcon className="w-4 h-4 mt-1.5 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-body text-lg sm:text-xl leading-relaxed text-on-surface-variant max-w-2xl">
              The services build on each other: each later phase starts from
              the agreed outputs of the previous phase. You can stop after any
              phase.
            </p>
          </div>
          <div className="lg:col-span-5">
            <ArticleImagePlaceholder
              label="Image placeholder for Signal's services"
              className="aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
