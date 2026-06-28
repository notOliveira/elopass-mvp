import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { agent } from "@/lib/data";

export function AboutTeaser() {
  return (
    <section className="py-24 lg:py-32 bg-accent-soft/15">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted/10 order-2 md:order-1">
            <Image
              src={agent.photo}
              alt={agent.photoAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.18em] text-accent font-medium">
              Quem está por trás
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
              {agent.name}, em uma frase: cada cliente é único.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {agent.bio[0]}
            </p>
            <div className="mt-10">
              <ButtonLink href="/sobre" variant="secondary" size="md">
                Conheça minha história
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}