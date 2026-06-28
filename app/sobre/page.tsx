import type { Metadata } from "next";
import { AgentBio } from "@/components/sobre/agent-bio";
import { AgentHero } from "@/components/sobre/agent-hero";
import { Differentials } from "@/components/sobre/differentials";
import { Stats } from "@/components/sobre/stats";
import { CtaBanner } from "@/components/home/cta-banner";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça ${siteConfig.name} — ${siteConfig.description}`,
};

export default function SobrePage() {
  return (
    <>
      <AgentHero />
      <AgentBio />
      <Stats />
      <Differentials />
      <CtaBanner />
    </>
  );
}