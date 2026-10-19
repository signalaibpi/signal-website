import { ArticleImagePlaceholder } from "@/components/resources/ArticleImagePlaceholder";
import { LinkName, NumberedLinkList } from "./NumberedLinks";
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
            {/* Numbers match the sections' "Step 01–03" labels and show that
                the services run in sequence. */}
            <NumberedLinkList
              className="max-w-2xl"
              items={SERVICE_SECTIONS.map((service) => ({
                href: `#${service.id}`,
                content: (
                  <>
                    <LinkName>{service.name}</LinkName>: {service.summary}
                  </>
                ),
              }))}
            />
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
