"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SERVICE_LINKS } from "@/lib/services";

const NAV_LINKS = [
  { label: "Who we help", href: "/who-we-help" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About", href: "#" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!servicesOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    }

    // Closes on a click or tap anywhere outside the drop-down, and when
    // keyboard focus moves out of it.
    function closeOnOutside(event: Event) {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("focusin", closeOnOutside);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("focusin", closeOnOutside);
    };
  }, [servicesOpen]);

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
          <div ref={servicesRef} className="relative">
            <button
              ref={servicesButtonRef}
              type="button"
              className="inline-flex items-center gap-1 rounded-sm font-body text-sm text-on-surface-variant hover:text-on-surface transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              id="services-menu"
              hidden={!servicesOpen}
              className="absolute left-0 top-full mt-3 min-w-[240px] rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-2 shadow-lg"
            >
              {SERVICE_LINKS.map((link) => (
                <a
                  key={link.label}
                  className="block rounded-lg px-3 py-2.5 font-body text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface focus-visible:outline-2 focus-visible:outline-primary"
                  href={link.href}
                  onClick={() => setServicesOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
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
          <span className="px-3 pt-3 pb-1 font-body text-xs uppercase tracking-wider text-secondary font-semibold">
            Services
          </span>
          {SERVICE_LINKS.map((link) => (
            <a
              key={link.label}
              className="block rounded-lg pl-6 pr-3 py-3 font-body text-base text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface focus-visible:outline-2 focus-visible:outline-primary"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
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
