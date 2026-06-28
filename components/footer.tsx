import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { InstagramIcon } from "./icons";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link
              href="/"
              className="font-serif text-xl font-semibold tracking-tight text-foreground"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm text-muted max-w-xs leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-foreground">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-foreground">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground inline-flex items-center gap-2.5"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted transition-colors hover:text-foreground inline-flex items-center gap-2.5"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="text-sm text-muted inline-flex items-center gap-2.5">
                  <InstagramIcon className="size-4" />
                  {siteConfig.instagram}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-muted">
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