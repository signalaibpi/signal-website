export function ArticleImagePlaceholder({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label="Image placeholder for this article"
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,var(--color-primary-tint),transparent_65%)]"
      />
      <span className="relative rounded-full border border-outline-variant/60 bg-surface-container-lowest/80 px-4 py-2 font-body text-sm text-secondary">
        Image coming soon
      </span>
    </div>
  );
}
