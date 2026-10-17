import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { OurMethodology } from "@/components/home/OurMethodology";
import { OurApproach } from "@/components/home/OurApproach";
import { WhoIsThisFor } from "@/components/home/WhoIsThisFor";
import { Founder } from "@/components/home/Founder";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <OurApproach />
      <OurMethodology />
      <WhoIsThisFor />
      <Founder />
      <FinalCta />
    </>
  );
}
