import { siteConfig } from "./data";

export function buildWhatsAppLink(message: string, phone: string = siteConfig.whatsappNumber): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function formatCotacaoMessage(data: {
  name: string;
  email: string;
  whatsapp: string;
  tripType: string;
  destination: string;
  date?: string;
  travelers: string;
  budget?: string;
  notes?: string;
}): string {
  const lines: string[] = [
    `Olá, ${siteConfig.name.split(" ")[0]}!`,
    "",
    `Meu nome é ${data.name} e gostaria de uma cotação.`,
    "",
    `📍 Destino: ${data.destination}`,
  ];
  if (data.date) lines.push(`📅 Data: ${data.date}`);
  lines.push(`👥 Pessoas: ${data.travelers}`);
  lines.push(`💼 Tipo: ${data.tripType}`);
  if (data.budget) lines.push(`💰 Orçamento: ${data.budget}`);
  lines.push("", `📞 ${data.whatsapp}`, `📧 ${data.email}`);
  if (data.notes && data.notes.trim()) {
    lines.push("", `Observações: ${data.notes}`);
  }
  return lines.join("\n");
}