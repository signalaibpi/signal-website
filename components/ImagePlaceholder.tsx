type ImagePlaceholderProps = {
  label: string;
  aspect: string;
  className?: string;
};

/**
 * Stands in for licensed photography that hasn't been sourced yet — see
 * Signal Website Design Guidelines.md → Photography. Swap for a real <Image>
 * once assets are selected; never hotlink an unlicensed placeholder as if
 * it were real.
 */
export function ImagePlaceholder({ label, aspect, className }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full ${aspect} rounded-xl overflow-hidden border border-outline-variant/40 bg-[linear-gradient(135deg,var(--color-surface-container)_25%,var(--color-surface-container-high)_25%,var(--color-surface-container-high)_50%,var(--color-surface-container)_50%,var(--color-surface-container)_75%,var(--color-surface-container-high)_75%,var(--color-surface-container-high)_100%)] bg-[length:24px_24px] flex items-center justify-center ${className ?? ""}`}
    >
      <span className="px-4 py-1.5 rounded-md bg-surface-container-lowest/90 border border-outline-variant/40 font-body text-xs text-secondary text-center max-w-xs">
        Image placeholder — {label}
      </span>
    </div>
  );
}
