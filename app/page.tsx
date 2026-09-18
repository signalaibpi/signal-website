import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { OurApproach } from "@/components/home/OurApproach";
import { Benefits } from "@/components/home/Benefits";
import { Diagnostic } from "@/components/home/Diagnostic";
import { OtherServices } from "@/components/home/OtherServices";
import { WhoIsThisFor } from "@/components/home/WhoIsThisFor";
import { Founder } from "@/components/home/Founder";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <OurApproach />
      <Benefits />
      <Diagnostic />
      <OtherServices />
      <WhoIsThisFor />
      <Founder />
      <HowItWorks />
      <FinalCta />
    </>
  );
}
