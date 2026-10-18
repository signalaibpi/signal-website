import type { Metadata } from "next";
import Link from "next/link";
import { ArticleImagePlaceholder } from "@/components/resources/ArticleImagePlaceholder";

export const metadata: Metadata = {
  title: "Resources — Signal",
  description: "Articles and perspectives from Signal.",
};

const ARTICLES = [
  {
    title: "Why teams can struggle to get results from AI",
    description:
      "Individual success with AI does not always translate into better business performance.",
    href: "/resources/why-teams-can-struggle-to-get-results-from-ai",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="w-full bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 pt-20 pb-14 sm:pt-28 sm:pb-16">
          <div className="max-w-4xl flex flex-col gap-5">
            <span className="font-body text-xs uppercase tracking-wider text-secondary font-semibold">
              Signal
            </span>
            <h1 className="font-display text-[36px] leading-[44px] sm:text-[56px] sm:leading-[64px] tracking-[-0.03em] text-on-surface font-bold">
              Resources
            </h1>
            <p className="font-body text-lg sm:text-xl leading-relaxed text-on-surface-variant">
              Articles and perspectives from Signal.
            </p>
          </div>
        </div>
      </section>
      <section aria-label="Articles" className="w-full bg-surface py-12 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {ARTICLES.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <article className="h-full overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-container-lowest transition-colors group-hover:border-outline-variant">
                  <ArticleImagePlaceholder className="aspect-[16/9] rounded-none border-0 border-b" />
                  <div className="flex flex-col gap-3 p-6 sm:p-8">
                    <h2 className="font-display text-2xl leading-snug font-bold text-on-surface group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="font-body text-base leading-relaxed text-on-surface-variant">
                      {article.description}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-2 font-display text-sm font-bold text-primary">
                      Read article <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
