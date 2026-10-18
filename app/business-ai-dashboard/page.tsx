import type { Metadata } from "next";
import { Hero } from "@/components/business-ai-diagnostic/Hero";
import { WhyItApplies } from "@/components/business-ai-diagnostic/WhyItApplies";
import { DimensionsGrid } from "@/components/business-ai-diagnostic/DimensionsGrid";

export const metadata: Metadata = {
  title: "Business AI Diagnostic — Signal",
  description:
    "An evidence-based assessment of how your organisation implements, operates and governs generative AI, with clear priorities for improvement.",
};

export default function BusinessAiDashboardPage() {
  return (
    <>
      <Hero />
      <WhyItApplies />
      <DimensionsGrid />
    </>
  );
}
