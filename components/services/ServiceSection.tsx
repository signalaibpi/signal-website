import { ArticleImagePlaceholder } from "@/components/resources/ArticleImagePlaceholder";
import type { FocusArea } from "./services-data";

// The right column holds either an image placeholder (withImage) or a
// section-specific visual (aside). An aside gets equal columns and top
// alignment, since it may change height (e.g. an expandable table).
export function ServiceSection({
  id,
  step,
  name,
  intro,
  introDetail,
  aside,
  band,
  withImage = false,
  children,
}: {
  id: string;
  step: string;
  name: string;
  intro: React.ReactNode;
  introDetail?: React.ReactNode;
  aside?: React.ReactNode;
  band: string;
  withImage?: boolean;
  children?: React.ReactNode;
}) {
  const leftSpan = aside ? "lg:col-span-6" : withImage ? "lg:col-span-7" : "lg:col-span-9";

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`w-full ${band} py-16 sm:py-20 border-b border-outline-variant/20 scroll-mt-20`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col gap-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 ${aside ? "items-start" : "items-center"}`}
        >
          <div className={`flex flex-col gap-10 ${leftSpan}`}>
            <div className="flex flex-col gap-4">
              <span className="font-body text-xs uppercase tracking-wider text-secondary font-bold">
                {step}
              </span>
              <h2
                id={`${id}-title`}
                className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold"
              >
                {name}
              </h2>
              <p className="font-body text-xl leading-relaxed text-on-surface-variant">
                {intro}
              </p>
            </div>
            {introDetail}
          </div>
          {aside && <div className="lg:col-span-6">{aside}</div>}
          {!aside && withImage && (
            <div className="lg:col-span-5">
              <ArticleImagePlaceholder
                label={`Image placeholder for ${name}`}
                className="aspect-[4/3]"
              />
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function Label({ as: Tag, children }: { as: "h3" | "h4"; children: React.ReactNode }) {
  return (
    <Tag className="font-body text-xs uppercase tracking-wider text-secondary font-semibold">
      {children}
    </Tag>
  );
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 font-body text-base leading-relaxed text-on-surface-variant">
          <span aria-hidden="true" className="mt-[0.6em] w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FocusAreas({ areas }: { areas: FocusArea[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {areas.map((area) => (
        <div
          key={area.title}
          className="bg-surface-container-low rounded-xl p-6 sm:p-8 border border-outline-variant/40 flex flex-col gap-4"
        >
          <h3 className="font-display text-xl text-on-surface font-bold">{area.title}</h3>
          {area.body.map((paragraph) => (
            <p key={paragraph} className="font-body text-base leading-relaxed text-on-surface-variant">
              {paragraph}
            </p>
          ))}
          {area.brings && (
            <div className="flex flex-col gap-3 pt-4 mt-auto border-t border-outline-variant/40">
              <Label as="h4">What Signal brings to this service</Label>
              <Bullets items={area.brings} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function Deliverables({ heading, items }: { heading: string; items: readonly string[] }) {
  return (
    <div className="flex flex-col gap-5 pt-8 border-t border-outline-variant/40">
      <Label as="h3">{heading}</Label>
      <Bullets items={items} />
    </div>
  );
}
