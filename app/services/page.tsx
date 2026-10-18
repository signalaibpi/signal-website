import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/services/Hero";
import { DimensionsTable } from "@/components/services/DimensionsTable";
import { Deliverables, FocusAreas, FocusCard, ServiceSection } from "@/components/services/ServiceSection";
import {
  DELIVERY_AREAS,
  DELIVERY_OUTCOMES,
  PLANNING_AREAS,
  PLANNING_DELIVERABLES,
  PROGRESS_REVIEW_DELIVERABLES,
  PROGRESS_REVIEW_STEPS,
} from "@/components/services/services-data";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Our Services — Signal",
  description:
    "Signal helps teams adopt, use and improve AI through three services: AI Progress Review, AI Planning and AI Delivery.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero />

      <ServiceSection
        id="ai-progress-review"
        step="Step 01"
        name="AI Progress Review"
        band="bg-surface"
        intro="Helps organisations identify what is holding back AI adoption and business results, then agree priorities for improvement."
        introDetail={
          <div className="flex flex-col gap-3">
            <FocusCard
              bringsHeadingLevel="h3"
              brings={[
                <>
                  Signal&rsquo;s{" "}
                  <Link
                    href="/business-ai-dashboard"
                    className="text-primary hover:text-primary-hover underline underline-offset-4 decoration-primary/40 transition-colors"
                  >
                    Business AI Diagnostic methodology and platform
                  </Link>{" "}
                  efficiently collect the required evidence for a wide range of
                  potential root causes
                </>,
                "The Signal founder has a combination of AI expertise, strategic perspective and operating experience to identify root causes and help set priorities",
              ]}
            >
              <div className="flex flex-col gap-6">
                {PROGRESS_REVIEW_STEPS.map((step) => (
                  <div key={step.title} className="flex flex-col gap-2">
                    <h3 className="font-display text-lg text-on-surface font-bold">{step.title}</h3>
                    <p className="font-body text-base leading-relaxed text-on-surface-variant">
                      {step.body}
                      {"footnote" in step && (
                        <a
                          href="#planning-cycle-note"
                          aria-label="See note on the planning cycle"
                          className="text-primary hover:text-primary-hover"
                        >
                          *
                        </a>
                      )}
                      .
                    </p>
                  </div>
                ))}
              </div>
            </FocusCard>
            <p id="planning-cycle-note" className="font-body text-sm text-secondary scroll-mt-28">
              *The planning cycle is typically 3 months.
            </p>
          </div>
        }
        aside={<DimensionsTable />}
      >
        <Deliverables heading="AI Progress Review deliverables" items={PROGRESS_REVIEW_DELIVERABLES} />
      </ServiceSection>

      <ServiceSection
        id="ai-planning"
        step="Step 02"
        name="AI Planning"
        band="bg-surface-container-lowest"
        withImage
        intro="Helps teams translate agreed priorities into practical plans with clear targets, ownership and resources."
      >
        <FocusAreas areas={PLANNING_AREAS} />
        <Deliverables heading="AI Planning deliverables" items={PLANNING_DELIVERABLES} />
      </ServiceSection>

      <ServiceSection
        id="ai-delivery"
        step="Step 03"
        name="AI Delivery"
        band="bg-surface"
        withImage
        intro="Over a three-month engagement, Signal’s Embedded AI Product Managers help teams deliver the plan while building their ability to continue independently."
      >
        <FocusAreas areas={DELIVERY_AREAS} />
        <Deliverables heading="AI Delivery outcomes" items={DELIVERY_OUTCOMES} />
      </ServiceSection>

      <FinalCta />
    </>
  );
}
