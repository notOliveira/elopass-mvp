import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { agent } from "@/lib/data";

export function CtaBanner() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-md bg-foreground text-background px-8 py-16 md:px-16 md:py-24">
          <div className="relative z-10 max-w-3xl">
            <p className="font-display text-xs font-light uppercase tracking-[0.22em] text-accent">
              Vamos?
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl font-semibold tracking-tight text-balance">
              Pronta pra próxima viagem?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-background/80 leading-relaxed max-w-2xl">
              Me conta o que você imagina. Eu monto a viagem dos seus sonhos.
            </p>
            <div className="mt-10">
              <ButtonLink
                href="/cotacao"
                variant="primary"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Planejar com a {agent.name.split(" ")[0]}
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}