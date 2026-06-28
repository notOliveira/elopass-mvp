import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-accent font-medium">
            Depoimentos
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Histórias de quem já viajou comigo.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl bg-background border border-border p-8"
            >
              <div
                className="flex gap-0.5 text-accent"
                aria-label={`Avaliação ${t.rating} de 5`}
              >
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="size-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-lg leading-relaxed text-foreground flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                <div className="relative size-12 overflow-hidden rounded-full bg-muted/20">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}