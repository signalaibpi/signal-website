export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-body text-xs uppercase tracking-widest text-primary font-semibold">
        {children}
      </span>
      <div className="h-px w-12 bg-outline-variant" />
    </div>
  );
}
