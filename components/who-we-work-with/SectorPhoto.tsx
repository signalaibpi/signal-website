import Image from "next/image";
import type { SectorImage } from "./sectors-data";

// Square photo frame shared by the hero navigator and the sector sections.
// Renders a neutral decorative placeholder until the photograph is supplied.
export function SectorPhoto({
  image,
  sizes,
  className = "",
}: {
  image?: SectorImage;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-square overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-container ${className}`}
    >
      {image ? (
        <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-surface-container-high to-surface-container"
        />
      )}
    </div>
  );
}

export function SectorTags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="px-3.5 py-2 rounded-lg bg-surface-container-lowest font-body text-sm font-semibold text-on-surface shadow-sm border border-outline-variant/40"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SubsectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-body text-xs uppercase tracking-wider text-secondary font-semibold">
      {children}
    </h4>
  );
}
