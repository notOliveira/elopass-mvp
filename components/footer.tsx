import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { InstagramIcon } from "./icons";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-deep text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link
              href="/"
              className="font-serif text-xl font-semibold tracking-tight text-background"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm text-background/70 max-w-xs leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>
          <div>
            <h3 className="font-display text-xs font-light uppercase tracking-[0.22em] text-background">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xs font-light uppercase tracking-[0.22em] text-background">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/70 transition-colors hover:text-accent inline-flex items-center gap-2.5"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-background/70 transition-colors hover:text-accent inline-flex items-center gap-2.5"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="text-sm text-accent inline-flex items-center gap-2.5">
                  <InstagramIcon className="size-4" />
                  {siteConfig.instagram}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-background/15 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-background/60">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-accent italic">
            Versão demonstrativa — conteúdo ilustrativo
          </p>
        </div>
      </div>
    </footer>
  );
}