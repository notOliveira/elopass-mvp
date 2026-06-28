import { AboutTeaser } from "@/components/home/about-teaser";
import { CtaBanner } from "@/components/home/cta-banner";
import { Destinations } from "@/components/home/destinations";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <Testimonials />
      <AboutTeaser />
      <CtaBanner />
    </>
  );
}