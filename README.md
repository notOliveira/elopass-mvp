# Mosaico Viagens — MVP

Site institucional de portfólio de uma agência de viagens boutique.

Stack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4.

## Rodando local

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # build de produção
npm run start    # rodar build
npm run lint     # ESLint
```

## Estrutura

```
app/
├── layout.tsx              # metadata, fontes (Geist + Fraunces), Nav, Footer
├── page.tsx                # Home
├── globals.css             # design tokens (@theme inline)
├── sobre/page.tsx          # Sobre a agente
├── cotacao/page.tsx        # Formulário WhatsApp
├── not-found.tsx           # 404
├── sitemap.ts              # /sitemap.xml
├── robots.ts               # /robots.txt
└── components/             # ver estrutura completa em docs/MVP-CONTEXT.md
lib/
├── data.ts                 # TODO o conteúdo placeholder
├── whatsapp.ts             # buildWhatsAppLink + formatCotacaoMessage
└── schema.ts               # Zod schema do form
docs/
└── MVP-CONTEXT.md          # contexto canônico do projeto
```

## Conteúdo placeholder

Todo o conteúdo (nome da agência, nome da agente, WhatsApp, fotos, textos, depoimentos) está em **`lib/data.ts`**. Quando o conteúdo real chegar, edite só esse arquivo.

## Customizando o design

Tokens em `app/globals.css` dentro de `@theme inline`:

- Cores: `background`, `foreground`, `muted`, `accent`, `accent-soft`, `border`
- Fontes: `font-sans` (Geist), `font-serif` (Fraunces), `font-mono` (Geist Mono)

## Formulário de cotação

Aciona `window.open('https://wa.me/<numero>?text=<mensagem>')`. Sem backend, sem email service, sem armazenamento.

## Documentação completa

Ler `docs/MVP-CONTEXT.md` para entender decisões, próximos passos e roadmap v2.