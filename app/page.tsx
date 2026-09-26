import { Hero } from "@/components/home/Hero";
import { OurApproach } from "@/components/home/OurApproach";
import { Diagnostic } from "@/components/home/Diagnostic";
import { Benefits } from "@/components/home/Benefits";
import { OtherServices } from "@/components/home/OtherServices";
import { WhoIsThisFor } from "@/components/home/WhoIsThisFor";
import { Founder } from "@/components/home/Founder";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <OurApproach />
      <Diagnostic />
      <Benefits />
      <OtherServices />
      <WhoIsThisFor />
      <Founder />
      <FinalCta />
    </>
  );
}
