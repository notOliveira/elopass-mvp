import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { ButtonLink } from "./ui/button-link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="/cotacao" variant="primary" size="sm">
            Planejar viagem
          </ButtonLink>
        </div>
        <details className="md:hidden group">
          <summary
            className="list-none flex h-10 w-10 items-center justify-center rounded-full cursor-pointer [&::-webkit-details-marker]:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="size-5 group-open:hidden" aria-hidden="true" />
            <X className="size-5 hidden group-open:block" aria-hidden="true" />
          </summary>
          <nav className="absolute left-0 right-0 top-16 border-b border-border bg-background px-6 py-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-base font-medium text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <ButtonLink href="/cotacao" variant="primary" size="md" className="w-full">
                  Planejar viagem
                </ButtonLink>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}