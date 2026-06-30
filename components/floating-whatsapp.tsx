"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./icons";
import { siteConfig } from "@/lib/data";

const MESSAGE =
  "Olá! Vim pelo site da Elopass e gostaria de saber mais sobre as experiências.";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale comigo pelo WhatsApp"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      className="group fixed bottom-6 right-6 z-50"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-whatsapp opacity-30 animate-ping [animation-duration:9s]"
      />
      <span className="relative flex items-center justify-center size-14 rounded-full bg-whatsapp shadow-lg transition-transform group-hover:scale-110">
        <WhatsAppIcon className="size-7 text-white" />
      </span>
      <span
        role="tooltip"
        className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-deep text-background text-xs font-medium px-3 py-1.5 shadow-md transition-opacity pointer-events-none ${
          showTooltip ? "opacity-100" : "opacity-0"
        }`}
      >
        Fale comigo agora
      </span>
    </a>
  );
}