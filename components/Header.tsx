const NAV_LINKS = [
  { label: "Homepage", href: "#" },
  { label: "Business AI Diagnostic", href: "/business-ai-diagnostic" },
  { label: "Who we help", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
];

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="h-20 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between gap-4">
        <a className="flex items-center gap-1.5 focus:outline-none" href="#">
          <span className="font-display text-[22px] font-bold tracking-tight text-on-surface">
            Signal
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              className="font-body text-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-hover px-4 py-2.5 font-display text-sm font-semibold text-white transition-colors shadow-sm"
          href="#"
        >
          Book a free AI Snapshot
        </a>
      </div>
    </header>
  );
}
