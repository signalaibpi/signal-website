import type { Metadata } from "next";
import { Hero } from "@/components/who-we-help/Hero";
import { PrioritySectors } from "@/components/who-we-help/PrioritySectors";
import { SecondarySectors } from "@/components/who-we-help/SecondarySectors";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Who we help — Signal",
  description:
    "Signal’s primary focus is helping fintechs, business software companies and business process outsourcers turn AI investment into measurable operational results.",
};

export default function WhoWeHelpPage() {
  return (
    <>
      <Hero />
      <PrioritySectors />
      <SecondarySectors />
      <FinalCta />
    </>
  );
}
