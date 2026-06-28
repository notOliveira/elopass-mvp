import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center lg:px-8">
      <p className="font-serif text-[8rem] md:text-[10rem] leading-none font-semibold tracking-tight text-accent">
        404
      </p>
      <h1 className="mt-2 font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
        Essa rota não existe.
      </h1>
      <p className="mt-4 text-lg text-muted max-w-md leading-relaxed">
        Mas a viagem dos seus sonhos ainda está a um clique de distância.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <ButtonLink href="/" variant="secondary" size="md">
          Voltar ao início
        </ButtonLink>
        <ButtonLink href="/cotacao" variant="primary" size="md">
          Planejar viagem
        </ButtonLink>
      </div>
    </div>
  );
}