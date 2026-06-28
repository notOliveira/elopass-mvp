import Image from "next/image";
import { agent } from "@/lib/data";

export function AgentHero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
              Sobre
            </p>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance">
              {agent.name}
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted leading-relaxed font-serif italic text-balance">
              {agent.role}. Viagem sob medida, do seu jeito.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted/10">
              <Image
                src={agent.photo}
                alt={agent.photoAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}