import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="py-16 lg:py-24 border-y border-border bg-accent-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center md:text-left ${
                i > 0 ? "md:border-l md:border-border md:pl-8" : ""
              }`}
            >
              <p className="font-serif text-6xl md:text-7xl font-semibold tracking-tight text-foreground text-balance">
                {stat.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.15em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}