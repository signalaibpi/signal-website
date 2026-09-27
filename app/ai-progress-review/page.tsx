import type { Metadata } from "next";
import { Hero } from "@/components/ai-progress-review/Hero";
import { WhyItApplies } from "@/components/ai-progress-review/WhyItApplies";
import { DimensionsGrid } from "@/components/ai-progress-review/DimensionsGrid";

export const metadata: Metadata = {
  title: "Business AI Diagnostic — Signal",
  description:
    "The Business AI Diagnostic builds an evidence-based assessment of your organisation's AI progress, identifies what is holding it back most and sets clear priorities for improvement.",
};

export default function BusinessAiDiagnosticPage() {
  return (
    <>
      <Hero />
      <WhyItApplies />
      <DimensionsGrid />
    </>
  );
}
