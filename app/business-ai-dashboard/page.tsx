import type { Metadata } from "next";
import { Hero } from "@/components/ai-progress-review/Hero";
import { WhyItApplies } from "@/components/ai-progress-review/WhyItApplies";
import { DimensionsGrid } from "@/components/ai-progress-review/DimensionsGrid";

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
