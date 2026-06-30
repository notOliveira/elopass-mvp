import {
  Award,
  Compass,
  Headphones,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { differentials } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Compass,
  Headphones,
  Award,
};

export function Differentials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
<p className="font-display text-xs font-light uppercase tracking-[0.18em] text-accent">
              Meus pilares
            </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Por que viajar comigo.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {differentials.map((d, i) => {
            const Icon = iconMap[d.icon];
            return (
              <div key={i} className="flex gap-5">
                <span className="inline-flex shrink-0 items-center justify-center size-12 rounded-full bg-accent-soft/50 text-accent">
                  {Icon ? <Icon className="size-6" aria-hidden="true" /> : null}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}