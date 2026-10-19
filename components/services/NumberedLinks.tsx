import { ArrowRightIcon } from "@/lib/icons";

// Small uppercase label with a blue dot, as used above the dimensions table
// and the focus-area overviews (and on the homepage graphic).
export function DotLabel({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span aria-hidden="true" className="w-2 h-2 rounded-full bg-primary" />
      <span id={id} className="font-body text-xs uppercase text-on-surface font-semibold tracking-wider">
        {children}
      </span>
    </div>
  );
}

// Numbered in-page links (01, 02, …) with an arrow, used by the hero's service
// list and each section's focus-area overview. `content` should put its bold
// name in a `group-hover:text-primary` span so the row highlights on hover.
export function NumberedLinkList({
  items,
  className = "",
}: {
  items: { href: string; content: React.ReactNode }[];
  className?: string;
}) {
  return (
    <ol className={`flex flex-col border-t border-outline-variant/40 ${className}`}>
      {items.map((item, i) => (
        <li key={item.href} className="border-b border-outline-variant/40">
          <a
            href={item.href}
            className="group flex items-start justify-between gap-4 py-3.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span className="flex items-baseline gap-4">
              <span className="font-body text-sm font-semibold tabular-nums text-secondary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-body text-base leading-relaxed text-on-surface-variant">
                {item.content}
              </span>
            </span>
            <ArrowRightIcon className="w-4 h-4 mt-1.5 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </a>
        </li>
      ))}
    </ol>
  );
}

export function LinkName({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-display font-bold text-on-surface group-hover:text-primary transition-colors">
      {children}
    </span>
  );
}
