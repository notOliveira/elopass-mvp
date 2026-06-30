import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { destinations } from "@/lib/data";

export function Destinations() {
  return (
    <section className="py-24 lg:py-32 bg-accent-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="font-display text-xs font-light uppercase tracking-[0.18em] text-accent">
              Em destaque
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Destinos pra inspirar.
            </h2>
          </div>
          <p className="md:max-w-sm text-muted leading-relaxed">
            Uma amostra dos roteiros que montamos. Cada um é adaptado ao perfil
            do viajante.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <article
              key={dest.slug}
              className="group flex flex-col overflow-hidden rounded-md bg-background border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {dest.location}
                </div>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground">
                  {dest.name}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                  {dest.description}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-xs text-muted pt-4 border-t border-border">
                  <Clock className="size-3.5" aria-hidden="true" />
                  {dest.duration}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}