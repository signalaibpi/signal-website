import { CheckIcon } from "@/lib/icons";
import { DotLabel, LinkName, NumberedLinkList } from "./NumberedLinks";
import type { FocusArea } from "./services-data";

type AnchoredArea = FocusArea & { anchor: string };

// Gives each focus-area card an anchor for the section overview to link to.
// A duplicate (e.g. two titles differing only in punctuation) fails the build
// rather than leaving an overview link pointing at the wrong card.
function withAnchors(sectionId: string, areas: FocusArea[]): AnchoredArea[] {
  const anchored = areas.map((area) => ({
    ...area,
    anchor: `${sectionId}-${area.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
  }));
  const anchors = anchored.map((area) => area.anchor);
  const duplicate = anchors.find((anchor, i) => anchors.indexOf(anchor) !== i);
  if (duplicate) {
    throw new Error(`Duplicate focus-area anchor: ${duplicate}`);
  }
  return anchored;
}

// The right column holds either a numbered overview of the section's focus
// areas (areas, whose cards follow the intro) or a section-specific visual
// (aside). An aside gets equal columns and top alignment, since it may change
// height (e.g. an expandable table).
export function ServiceSection({
  id,
  step,
  name,
  intro,
  introDetail,
  aside,
  band,
  areas,
  children,
}: {
  id: string;
  step: string;
  name: string;
  intro: React.ReactNode;
  introDetail?: React.ReactNode;
  aside?: React.ReactNode;
  band: string;
  areas?: FocusArea[];
  children?: React.ReactNode;
}) {
  const anchoredAreas = areas && withAnchors(id, areas);
  const leftSpan = aside ? "lg:col-span-6" : anchoredAreas ? "lg:col-span-7" : "lg:col-span-9";

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
          {!aside && anchoredAreas && (
            <div className="lg:col-span-5">
              <FocusAreaOverview name={name} areas={anchoredAreas} />
            </div>
          )}
        </div>
        {anchoredAreas && <FocusAreas areas={anchoredAreas} />}
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

function Bullets({ items }: { items: readonly React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 font-body text-base leading-relaxed text-on-surface-variant">
          <span aria-hidden="true" className="mt-[0.6em] w-1.5 h-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// A neutral card ending in a "What Signal brings to this service" list. The
// list's label is an h4 under a titled card, or an h3 when the card has no
// title of its own and the list applies to the whole service.
export function FocusCard({
  id,
  children,
  brings,
  bringsHeadingLevel = "h4",
}: {
  id?: string;
  children: React.ReactNode;
  brings?: readonly React.ReactNode[];
  bringsHeadingLevel?: "h3" | "h4";
}) {
  return (
    <div
      id={id}
      className="bg-surface-container-low rounded-xl p-6 sm:p-8 border border-outline-variant/40 flex flex-col gap-4 scroll-mt-28"
    >
      {children}
      {brings && (
        <div className="flex flex-col gap-3 pt-4 mt-auto border-t border-outline-variant/40">
          <Label as={bringsHeadingLevel}>What Signal brings to this service</Label>
          <Bullets items={brings} />
        </div>
      )}
    </div>
  );
}

// Shows up front how many focus areas the section has, since the cards
// themselves start below the fold. Styled like the hero's numbered service
// rows; each row jumps to its card. The nav is named after the service so
// screen readers can tell the sections' overviews apart.
function FocusAreaOverview({ name, areas }: { name: string; areas: AnchoredArea[] }) {
  return (
    <nav aria-label={`What’s included in ${name}`} className="flex flex-col gap-3">
      <DotLabel>What&rsquo;s included</DotLabel>
      <NumberedLinkList
        items={areas.map((area) => ({
          href: `#${area.anchor}`,
          content: <LinkName>{area.title}</LinkName>,
        }))}
      />
    </nav>
  );
}

function FocusAreas({ areas }: { areas: AnchoredArea[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {areas.map((area) => (
        <FocusCard key={area.title} id={area.anchor} brings={area.brings}>
          <h3 className="font-display text-xl text-on-surface font-bold">{area.title}</h3>
          {area.body.map((paragraph) => (
            <p key={paragraph} className="font-body text-base leading-relaxed text-on-surface-variant">
              {paragraph}
            </p>
          ))}
        </FocusCard>
      ))}
    </div>
  );
}

// Deliverables use the light blue primary tint so each service ends on a
// clear "what you get" panel; see TECHNICAL.md decision log (2026-10-18).
export function Deliverables({ heading, items }: { heading: string; items: readonly string[] }) {
  return (
    <div className="bg-primary-tint rounded-xl p-6 sm:p-8 border border-primary/15 flex flex-col gap-5">
      <h3 className="font-display text-xl text-on-surface font-bold">{heading}</h3>
      {/* Column-first grid so the ordered list reads down the left column,
          then the right; the left column takes the extra item when odd. */}
      <ul
        className="grid grid-cols-1 gap-y-3 md:grid-cols-2 md:grid-flow-col md:[grid-template-rows:repeat(var(--rows),auto)] md:gap-x-10"
        style={{ "--rows": Math.ceil(items.length / 2) } as React.CSSProperties}
      >
        {items.map((item) => (
          <li key={item} className="flex gap-3 font-body text-base leading-relaxed text-on-surface-variant">
            <CheckIcon className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
