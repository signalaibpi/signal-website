"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Business AI Diagnostic", href: "/business-ai-diagnostic" },
  { label: "Who we help", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="h-20 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between gap-4">
        <Link className="flex items-center gap-1.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" href="/" aria-label="Signal homepage" onClick={() => setMenuOpen(false)}>
          <span className="font-display text-[22px] font-bold tracking-tight text-on-surface">
            Signal
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        </Link>
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
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
          className="hidden lg:inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-hover px-4 py-2.5 font-display text-sm font-semibold text-white transition-colors shadow-sm"
          href="#"
        >
          Book a free AI Snapshot
        </a>
        <button
          ref={menuButtonRef}
          type="button"
          className="lg:hidden inline-flex items-center justify-center size-11 rounded-lg border border-outline-variant/40 text-on-surface hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="lg:hidden absolute inset-x-0 top-full border-b border-outline-variant/30 bg-surface-container-lowest shadow-lg"
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-3 flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              className="block rounded-lg px-3 py-3 font-body text-base text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface focus-visible:outline-2 focus-visible:outline-primary"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
