import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { CotacaoForm } from "@/components/cotacao/cotacao-form";

export const metadata: Metadata = {
  title: "Cotação",
  description:
    "Peça uma cotação personalizada para sua próxima viagem. Atendimento humano, sem compromisso.",
};

export default function CotacaoPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
          Cotação
        </p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance">
          Conta pra gente o que você imagina.
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed">
          Preencha os campos abaixo. Ao enviar, abrimos o WhatsApp com a
          mensagem da sua solicitação já prontinha — é só confirmar o envio
          pra conversar comigo diretamente.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-accent-soft/15 p-5 md:p-6 flex gap-4 items-start">
        <span className="inline-flex shrink-0 items-center justify-center size-10 rounded-full bg-background border border-border">
          <MessageCircle
            className="size-5 text-accent"
            aria-hidden="true"
          />
        </span>
        <div className="text-sm">
          <p className="font-medium text-foreground">
            Tudo passa pelo WhatsApp.
          </p>
          <p className="text-muted mt-1 leading-relaxed">
            Nada de ligações não solicitadas ou emails perdidos. Você fala
            comigo direto, no canal que preferir, no seu tempo.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <CotacaoForm />
      </div>
    </div>
  );
}