import type { Metadata } from "next";
import { Hero } from "@/components/business-ai-diagnostic/Hero";
import { WhyItApplies } from "@/components/business-ai-diagnostic/WhyItApplies";
import { DimensionsGrid } from "@/components/business-ai-diagnostic/DimensionsGrid";

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
