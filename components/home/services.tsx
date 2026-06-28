import Image from "next/image";
import {
  Briefcase,
  Compass,
  Heart,
  TreePalm,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Users,
  Compass,
  Briefcase,
  UsersRound,
  TreePalm,
};

export function Services() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-accent font-medium">
            O que faço
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Cada viagem, do seu jeito.
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            De lua de mel a viagem em família, de expedição a evento corporativo
            — cada roteiro é único.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-foreground/20 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted/10">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center size-10 rounded-full bg-accent-soft/50 text-accent">
                      {Icon ? <Icon className="size-5" aria-hidden="true" /> : null}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}