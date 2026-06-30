import { agent } from "@/lib/data";

export function AgentBio() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="font-display text-xs font-light uppercase tracking-[0.18em] text-accent">
          Minha história
        </p>
        <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Uma agente que viaja com cada cliente.
        </h2>
        <div className="mt-10 space-y-6 text-lg text-foreground/85 leading-relaxed">
          {agent.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}