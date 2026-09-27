import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "./SectionEyebrow";
import { ArrowRightIcon } from "@/lib/icons";

const SECTORS = ["Fintech", "Software", "Outsourcing", "Other service providers"];

export function WhoIsThisFor() {
  return (
    <section className="w-full bg-surface-container-lowest py-16 sm:py-20 border-b border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <SectionEyebrow>Who is this for</SectionEyebrow>
            <h2 className="font-display text-[28px] leading-[36px] sm:text-[40px] sm:leading-[48px] tracking-[-0.02em] text-on-surface font-semibold">
              For organisations looking to reshape workflows
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pt-10">
            <div className="flex flex-col gap-4 font-body text-xl leading-relaxed text-on-surface-variant">
              <p>
                Signal focuses on sectors where AI can reshape repeatable workflows
                across the organisation, including fintech, software, outsourcing and 
                other service providers like insurance brokers, freight forwarders,
                accountancies and law firms.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {SECTORS.map((sector) => (
                <span
                  key={sector}
                  className="px-4 py-2.5 rounded-lg bg-surface-container-lowest font-body text-sm font-semibold text-on-surface shadow-sm border border-outline-variant/40"
                >
                  {sector}
                </span>
              ))}
            </div>
            <Link
              className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary hover:text-primary-hover transition-colors w-fit"
              href="/who-we-help"
            >
              <span>See who we help</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-outline-variant/40">
              <Image
                src="/home-who-this-is-for.png"
                alt="Professionals working at computers across a busy open-plan office"
                fill
                sizes="(min-width: 1024px) 608px, calc(100vw - 40px)"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
