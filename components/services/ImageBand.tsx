import { ArticleImagePlaceholder } from "@/components/resources/ArticleImagePlaceholder";

// Full-bleed photo between AI Planning and AI Delivery. It breaks up the
// page's longest run of cards and marks the move from planning to working
// alongside teams. Fixed heights rather than an aspect ratio, so it stays a
// short band on very wide screens; a real photo should use object-cover.
export function ImageBand({ label }: { label: string }) {
  return (
    <div className="w-full border-b border-outline-variant/20">
      <ArticleImagePlaceholder
        label={label}
        className="h-[280px] sm:h-[360px] lg:h-[440px] rounded-none border-0"
      />
    </div>
  );
}
