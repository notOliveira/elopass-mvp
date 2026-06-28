import { z } from "zod";

export const cotacaoSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  email: z.string().email("Email inválido"),
  whatsapp: z
    .string()
    .min(10, "Informe seu WhatsApp com DDD")
    .regex(/^[\d\s()+-]+$/, "Use apenas números, espaços e () + -"),
  tripType: z.string().min(1, "Selecione o tipo de viagem"),
  destination: z.string().min(2, "Conte pra gente onde você quer ir"),
  date: z.string().optional(),
  travelers: z.string().min(1, "Quantas pessoas vão viajar?"),
  budget: z.string().optional(),
  notes: z.string().optional(),
});

export type CotacaoInput = z.infer<typeof cotacaoSchema>;