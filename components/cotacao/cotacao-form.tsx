"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  budgetOptions,
  travelersOptions,
  tripTypeOptions,
} from "@/lib/data";
import { cotacaoSchema, type CotacaoInput } from "@/lib/schema";
import { buildWhatsAppLink, formatCotacaoMessage } from "@/lib/whatsapp";

type Errors = Partial<Record<keyof CotacaoInput, string>>;

const initialValues: CotacaoInput = {
  name: "",
  email: "",
  whatsapp: "",
  tripType: "",
  destination: "",
  date: "",
  travelers: "",
  budget: "",
  notes: "",
};

export function CotacaoForm() {
  const [values, setValues] = useState<CotacaoInput>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (key: keyof CotacaoInput, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = cotacaoSchema.safeParse(values);
    if (!result.success) {
      const newErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof CotacaoInput;
        if (!newErrors[key]) newErrors[key] = issue.message;
      }
      setErrors(newErrors);
      const firstErrorKey = Object.keys(newErrors)[0];
      if (firstErrorKey) {
        const el = document.getElementById(firstErrorKey);
        el?.focus();
      }
      return;
    }

    const message = formatCotacaoMessage(result.data);
    const url = buildWhatsAppLink(message);
    setSubmitting(true);
    window.open(url, "_blank", "noopener,noreferrer");
    setSuccess(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-12">
      <fieldset className="space-y-6">
        <legend className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
          Seus dados
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            id="name"
            name="name"
            label="Nome completo"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            error={errors.name}
            required
            autoComplete="name"
          />
          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            error={errors.email}
            required
            autoComplete="email"
          />
          <div className="md:col-span-2">
            <Input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              label="WhatsApp"
              placeholder="(11) 99999-9999"
              value={values.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              error={errors.whatsapp}
              required
              autoComplete="tel"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
          Sobre a viagem
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Select
            id="tripType"
            name="tripType"
            label="Tipo de viagem"
            placeholder="Selecione"
            options={tripTypeOptions}
            value={values.tripType}
            onChange={(e) => set("tripType", e.target.value)}
            error={errors.tripType}
            required
          />
          <Input
            id="destination"
            name="destination"
            label="Destino(s) desejado(s)"
            placeholder="Ex: Grécia, Portugal..."
            value={values.destination}
            onChange={(e) => set("destination", e.target.value)}
            error={errors.destination}
            required
          />
          <Input
            id="date"
            name="date"
            type="month"
            label="Data aproximada"
            hint="Mês e ano em que pretende viajar"
            value={values.date ?? ""}
            onChange={(e) => set("date", e.target.value)}
            error={errors.date}
          />
          <Select
            id="travelers"
            name="travelers"
            label="Número de pessoas"
            placeholder="Selecione"
            options={travelersOptions}
            value={values.travelers}
            onChange={(e) => set("travelers", e.target.value)}
            error={errors.travelers}
            required
          />
          <div className="md:col-span-2">
            <Select
              id="budget"
              name="budget"
              label="Orçamento estimado por pessoa (opcional)"
              placeholder="Prefiro não informar"
              options={budgetOptions}
              value={values.budget ?? ""}
              onChange={(e) => set("budget", e.target.value)}
              error={errors.budget}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
          Observações
        </legend>
        <Textarea
          id="notes"
          name="notes"
          label="Conte um pouco mais (opcional)"
          placeholder="Comemora algo especial? Tem alguma preferência ou restrição que a gente já deva saber?"
          value={values.notes ?? ""}
          onChange={(e) => set("notes", e.target.value)}
          rows={5}
        />
      </fieldset>

      <div className="pt-6 border-t border-border flex flex-col gap-5">
        {success && (
          <div
            role="status"
            className="flex items-start gap-3 rounded-lg bg-accent-soft/30 border border-accent/30 px-4 py-3"
          >
            <CheckCircle2
              className="size-5 text-accent shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div className="text-sm">
              <p className="font-medium text-foreground">
                Mensagem pronta! Verifique a nova aba do WhatsApp.
              </p>
              <p className="text-muted mt-0.5">
                Se não abriu, permita popups pro site ou clique no botão
                novamente.
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={submitting}
          >
            <MessageCircle className="mr-2 size-5" aria-hidden="true" />
            {submitting ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
          </Button>
          <p className="text-sm text-muted">
            Você será redirecionado para o WhatsApp com a mensagem pronta.
          </p>
        </div>
      </div>
    </form>
  );
}