import Link from "next/link";
import { SERVICES_HREF } from "@/lib/services";

const MENU_LINKS = [
  { label: "Our Services", href: SERVICES_HREF },
  { label: "Who we work with", href: "/who-we-help" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "#" },
];

const RESOURCE_LINKS = [
  { label: "Business AI Diagnostic", href: "/business-ai-dashboard" },
  { label: "Sample Business AI Diagnostic", href: "#" },
  {
    label: "Why teams can struggle to get results from AI",
    href: "/resources/why-teams-can-struggle-to-get-results-from-ai",
  },
];

const CONTACT_LINKS = [{ label: "Contact us", href: "#" }];

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-body text-xs uppercase tracking-wider text-secondary font-semibold">
        {heading}
      </span>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              className="font-body text-sm text-on-surface-variant hover:text-on-surface transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-outline-variant/20">
          <div className="lg:col-span-2 flex flex-col gap-3">
            <Link className="flex items-center gap-1.5 w-fit rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" href="/" aria-label="Signal homepage">
              <span className="font-display text-[22px] font-bold tracking-tight text-on-surface">
                Signal
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            </Link>
            <p className="font-body text-sm text-on-surface-variant max-w-sm">
              AI Business Process Improvement
            </p>
          </div>
          <FooterColumn heading="Menu" links={MENU_LINKS} />
          <FooterColumn heading="Resources" links={RESOURCE_LINKS} />
          <FooterColumn heading="Contact" links={CONTACT_LINKS} />
        </div>
        <div className="pt-6">
          <span className="font-body text-sm text-on-surface-variant">
            © 2026 Signal. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
