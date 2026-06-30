import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/lib/data";

const heroImage =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=80";

export function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 lg:px-8 lg:pb-24">
        <p className="font-display text-xs font-light uppercase tracking-[0.22em] text-white/80">
          {siteConfig.name}
        </p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white text-balance max-w-5xl">
          Viagens sob medida, do jeito que você imaginou.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
          Curadoria personalizada, atendimento humano e cada detalhe pensado pra
          você.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink
            href="/cotacao"
            variant="primary"
            size="lg"
            className="bg-white text-foreground hover:bg-white/90"
          >
            Planejar minha viagem
            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href="/sobre"
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/10"
          >
            Conheça a agente
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}