# Mosaico Viagens — Contexto do MVP

> **Propósito deste arquivo:** ser o "cérebro externo" do projeto. Toda vez que você (ou uma AI) abrir este repo numa sessão nova, leia este arquivo primeiro. Ele contém todas as decisões travadas, o plano de execução, os placeholders pendentes e o roadmap v2.
>
> **Como manter atualizado:** sempre que uma decisão mudar, atualize este arquivo e commite. Trate como documentação canônica do MVP.

---

## 1. Objetivo

Construir um **MVP de portfólio** para uma colega de trabalho que está começando uma agência de viagens. Ela organiza viagens sob medida para clientes.

**Por que existe este projeto:**
- Demonstrar pra ela o que dá pra entregar com uma stack moderna.
- Servir como peça de **portfólio pessoal** do desenvolvedor (Gustavo).
- Se ela aprovar e quiser continuar, evoluir pra um produto real.

**Prazo-alvo:** entregar algo apresentável em ~5 dias úteis (semana atual).

**Não-objetivos do MVP:**
- Não é site final com clientes reais.
- Não tem backend, banco de dados, autenticação, pagamento.
- Não tem blog, catálogo completo de pacotes, multi-idioma.
- Conteúdo é placeholder bonito, não real.

---

## 2. Decisões travadas

Tabela de decisões da sessão de planejamento. Não mudar sem atualizar este arquivo.

| # | Decisão | Escolha | Por quê |
|---|---------|---------|---------|
| D1 | Escopo do MVP | **Home + Sobre + Cotação** (3 páginas) | Lean, focado em causar boa impressão e capturar lead |
| D2 | Conteúdo | **Tudo placeholder** (Lorem + Unsplash) | Velocidade; troca num único arquivo depois |
| D3 | Idioma | **Apenas PT-BR** | Sem complexidade de i18n no MVP |
| D4 | Estética | **Clean / Minimalista / Editorial** | Funciona pra qualquer público; fácil com Tailwind + Unsplash |
| D5 | Formulário | **WhatsApp** (`wa.me/...?text=...`) | Sem config de email; prático pra agência que fala por WhatsApp |
| D6 | Deploy | **Vercel free tier** | URL pública pra mostrar pra ela |
| D7 | Persistência de contexto | **Arquivo no projeto + git** | AI lê sozinha em qualquer ferramenta |
| D8 | Nomes fictícios placeholder | **Mosaico Viagens** / **Marina Souto** | Soa profissional; fácil de trocar |

---

## 3. Stack

### Já no projeto (não remover sem motivo)

| Dependência | Versão | Uso |
|-------------|--------|-----|
| `next` | 16.2.9 | Framework |
| `react` | 19.2.4 | UI |
| `react-dom` | 19.2.4 | UI |
| `typescript` | ^5 | Tipagem |
| `tailwindcss` | ^4 | Estilização (CSS-first via `@theme`) |
| `@tailwindcss/postcss` | ^4 | Plugin PostCSS do Tailwind v4 |
| `eslint` | ^9 | Lint |
| `eslint-config-next` | 16.2.9 | Regras Next |
| `@types/node`, `@types/react`, `@types/react-dom` | — | Tipos |

### Adicionar (mínimo)

| Dependência | Uso |
|-------------|-----|
| `lucide-react` | Ícones (tree-shakeable, leve) |
| `zod` | Validação do schema do formulário |

### Deliberadamente NÃO usar (YAGNI no MVP)

- ~~Framer Motion~~ — animações via Tailwind transition basta
- ~~react-hook-form~~ — `useState` é suficiente pra um form
- ~~MDX, CMS, Sanity, Payload~~ — conteúdo é estático por enquanto
- ~~Banco de dados~~ — sem persistência no MVP
- ~~Autenticação~~ — não há área logada
- ~~Biblioteca de UI (shadcn, MUI, etc.)~~ — componentes próprios pequenos
- ~~next/font local~~ — usa Google via `next/font/google`
- ~~Analytics, Sentry, etc.~~ — só depois que virar produto

---

## 4. Breaking changes do Next.js 16 (mapeados)

Do `AGENTS.md` deste projeto + leitura dos docs em `node_modules/next/dist/docs/`:

1. **`params` / `searchParams` viraram `Promise`** — precisa `await` em páginas/layouts dinâmicos. **No MVP não impacta** (só páginas estáticas).
2. **Tailwind v4 é CSS-first** — sem `tailwind.config.js`. Configurar tema via `@theme` em `app/globals.css`.
3. **`next/image` com URLs externas** — exige `images.remotePatterns` em `next.config.ts`. Vamos usar isso pro Unsplash.
4. **`next.config.ts` é first-class** — já está em TS no projeto.

Demais APIs que vamos usar seguem idênticas ao Next 13/14:
- `<Link>` de `next/link`
- `Image` de `next/image`
- `next/font/google` (Inter, Fraunces, Geist)
- Diretiva `'use client'` no topo do arquivo
- `export const metadata: Metadata` em `layout.tsx`
- `Linking and navigating` com prefetch automático

---

## 5. Design system — tokens

Definidos em `app/globals.css` dentro do bloco `@theme inline`:

```css
@theme inline {
  /* Cores (Clean / Minimalista / Editorial com toque quente) */
  --color-background: #faf8f5;   /* off-white quente */
  --color-foreground: #1c1917;   /* stone-900 */
  --color-muted: #78716c;        /* stone-500 */
  --color-accent: #c2410c;       /* terracota — CTAs, links */
  --color-accent-soft: #fed7aa;  /* terracota claro — hovers, bg sutil */
  --color-border: #e7e5e4;       /* stone-200 */

  /* Fontes */
  --font-sans: var(--font-geist-sans);    /* corpo — já no projeto */
  --font-serif: var(--font-fraunces);     /* headlines — adicionar via next/font/google */
  --font-mono: var(--font-geist-mono);    /* código, se necessário */
}
```

### Tipografia

- **Headlines (h1, h2, h3):** Fraunces (serif variável, vibe editorial/revista)
- **Corpo (parágrafos, UI):** Geist Sans (já carregada)
- **Hierarquia:** dada por tipografia + whitespace, **não por sombras ou cores vibrantes**

### Princípios visuais

- **Espaçamento generoso** — seções respiram.
- **Fotos grandes** — hero full-bleed, cards com proporção consistente.
- **Quase sem sombras** — preferir bordas sutis (`border-border`) e elevação por escala/opacidade.
- **Um único accent** — terracota. Não usar múltiplas cores vibrantes.
- **Mobile-first** — testar em todas larguras.

---

## 6. Estrutura de pastas

```
agencia-viagens-mvp/
├── app/
│   ├── layout.tsx              ← metadata PT-BR, fontes, Nav, Footer
│   ├── page.tsx                ← Home
│   ├── globals.css             ← @theme tokens
│   ├── sobre/
│   │   └── page.tsx            ← Sobre a agente
│   ├── cotacao/
│   │   └── page.tsx            ← Formulário WhatsApp (Server Component que renderiza Client)
│   ├── not-found.tsx           ← 404 elegante
│   └── components/
│       ├── nav.tsx
│       ├── footer.tsx
│       ├── home/
│       │   ├── hero.tsx
│       │   ├── services.tsx
│       │   ├── destinations.tsx
│       │   ├── testimonials.tsx
│       │   ├── about-teaser.tsx
│       │   └── cta-banner.tsx
│       ├── sobre/
│       │   ├── agent-hero.tsx
│       │   ├── agent-bio.tsx
│       │   ├── stats.tsx
│       │   └── differentials.tsx
│       ├── cotacao/
│       │   ├── cotacao-form.tsx     ← 'use client'
│       │   └── form-summary.tsx     ← formata mensagem do WhatsApp
│       └── ui/
│           ├── button.tsx
│           ├── input.tsx
│           ├── textarea.tsx
│           └── select.tsx
├── lib/
│   ├── data.ts                 ← TODO o conteúdo placeholder centralizado
│   ├── whatsapp.ts             ← buildWaLink(message, phone)
│   └── schema.ts               ← Zod schema do form
├── docs/
│   └── MVP-CONTEXT.md          ← este arquivo
├── public/
│   └── ... (assets estáticos)
├── next.config.ts              ← remotePatterns do Unsplash
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
├── AGENTS.md                   ← referência a este arquivo
└── README.md
```

---

## 7. Conteúdo placeholder — onde trocar quando vier o real

**TUDO** está centralizado em `lib/data.ts`. Quando a agente fornecer conteúdo real, editar só esse arquivo. Estrutura prevista:

```ts
export const siteConfig = {
  name: 'Mosaico Viagens',           // TROCAR
  tagline: 'Viagens sob medida, do seu jeito',
  description: '...',
  whatsappNumber: '5511999999999',   // TROCAR — formato wa.me (55 + DDD + número, sem espaços)
  email: 'contato@mosaicoviagens.com.br', // TROCAR
  instagram: '@mosaicoviagens',      // TROCAR
  // ... metadados do site
} as const;

export const agent = {
  name: 'Marina Souto',              // TROCAR
  role: 'Agente de viagens',
  bio: ['...', '...', '...'],
  photo: 'https://images.unsplash.com/photo-XXX', // TROCAR
  // ...
} as const;

export const services = [
  { id: 'honeymoon', title: 'Lua de mel', description: '...', icon: 'Heart', image: '...' },
  // ... 6 itens
] as const;

export const destinations = [
  { slug: 'fernando-de-noronha', name: 'Fernando de Noronha', image: '...', priceFrom: 8900, description: '...' },
  // ... 3 itens
] as const;

export const testimonials = [
  { name: 'Ana Paula M.', location: 'São Paulo, SP', rating: 5, text: '...' },
  // ... 3 itens
] as const;

export const differentials = [
  { title: 'Atendimento personalizado', description: '...', icon: 'Sparkles' },
  // ... 4 itens
] as const;

export const stats = [
  { value: '12', label: 'Anos de experiência' },  // TROCAR
  { value: '40+', label: 'Destinos' },
  { value: '500+', label: 'Clientes atendidos' },
] as const;
```

**Regra de ouro:** se o nome/texto/número aparece em mais de um lugar, está em `lib/data.ts`. Nunca hardcode.

---

## 8. Páginas — detalhamento

### `/` — Home

| Seção | Conteúdo |
|-------|----------|
| **Hero** | Foto full-bleed (Unsplash, paisagem épica tipo Grécia/Maldivas), headline serifa grande, subheadline sans, CTA "Planejar minha viagem" → `/cotacao` |
| **Services** | 6 cards: Lua de mel · Em família · Aventura · Corporativo · Em grupo · Resort & Praia. Ícone lucide + título + 1 linha |
| **Destinations** | 3 cards: Fernando de Noronha, Gramado, Toscana (exemplos). Imagem, nome, descrição curta, "a partir de R$ X.XXX" |
| **Testimonials** | 3 depoimentos com nome, cidade, aspas, 5 estrelas |
| **About teaser** | Foto da agente + 2 linhas + botão "Conheça a [Nome]" → `/sobre` |
| **CTA banner** | "Pronta para a próxima viagem?" + botão |

### `/sobre` — Sobre a agente

| Seção | Conteúdo |
|-------|----------|
| **Hero** | Foto retrato grande + nome em serifa + tagline |
| **Bio** | 2-3 parágrafos sobre filosofia de trabalho |
| **Stats** | 3 números: Anos · Destinos · Clientes |
| **Differentials** | 4 pilares com ícone: Atendimento personalizado · Curadoria · Suporte · Parcerias |
| **CTA** | "Vamos conversar?" → `/cotacao` |

### `/cotacao` — Formulário WhatsApp

**Server Component** renderiza um **Client Component** com o form.

**Campos:**

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Nome | text | ✓ |
| Email | email | ✓ |
| WhatsApp | tel | ✓ |
| Tipo de viagem | select | ✓ |
| Destino(s) desejado(s) | text | ✓ |
| Data aproximada | month | opcional |
| Nº de pessoas | number | ✓ |
| Orçamento estimado | select | opcional |
| Observações | textarea | opcional |

**Validação:** Zod schema em `lib/schema.ts`, erros inline nos campos.

**Comportamento ao submeter:**
1. Valida com Zod.
2. Formata mensagem multilinha com emojis.
3. Constrói URL `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`.
4. `window.open(url, '_blank')`.

**Mensagem exemplo (gerada):**

```
Olá, Marina! 👋

Meu nome é [Nome] e gostaria de uma cotação.

📍 Destino: [destino]
📅 Data: [data]
👥 Pessoas: [nº]
💼 Tipo: [tipo]
💰 Orçamento: [faixa]

📞 [telefone]
📧 [email]

[observações]
```

---

## 9. Imagens — estratégia

- **Origem:** Unsplash via URLs públicas + `next/image` com `remotePatterns` configurado em `next.config.ts`.
- **Por quê:** zero peso no repo, fotos certas do tamanho certo, grátis, licença permissiva.
- **Risco:** se Unsplash cair (improvável), imagens quebram. Aceitável pro MVP.
- **Pra v2:** baixar e hospedar localmente + otimizar para WebP/AVIF.

---

## 10. Plano de execução — 5 dias úteis + buffer

| Dia | Entrega |
|-----|---------|
| **Dom (hoje)** | Setup base: deps, `next.config.ts` (Unsplash), `globals.css` (tokens), `layout.tsx` (fontes + metadata), `nav`, `footer`, `lib/data.ts` |
| **Seg** | Home completa (6 seções) + responsivo mobile |
| **Ter** | Sobre + Cotação (form WhatsApp funcional end-to-end) |
| **Qua** | Polish: 404, acessibilidade básica, animações sutis, QA mobile, smoke test |
| **Qui** | GitHub + Vercel deploy + URL pública + checklist final |
| **Sex** | Buffer / mostrar pra ela / tomar nota de feedback |
| **Sáb** | Buffer / ajustes rápidos |

---

## 11. Pendências antes de mostrar pra cliente final (não pro MVP!)

Estes itens precisam ser trocados antes do site ir ao ar de verdade:

- [ ] **Nome real da agência** (substituir "Mosaico Viagens" em `lib/data.ts`)
- [ ] **Nome real da agente** (substituir "Marina Souto" em `lib/data.ts`)
- [ ] **Número de WhatsApp real** (substituir `5511999999999` em `lib/data.ts`)
- [ ] **Email de contato real**
- [ ] **Instagram / redes sociais reais**
- [ ] **Foto profissional da agente** (substituir placeholder Unsplash)
- [ ] **Textos reais** (bio, descrições de serviços, depoimentos)
- [ ] **Pacotes/destinos reais** (se for ter)
- [ ] **Política de privacidade** (obrigatório se capturar email, LGPD)
- [ ] **Domínio próprio** (atualmente vai ser `*.vercel.app`)
- [ ] **Banner "Versão demonstrativa"** deve ser removido do footer

---

## 12. Comando rápidos

```bash
npm install              # instalar deps
npm run dev              # dev server em http://localhost:3000
npm run build            # build de produção
npm run start            # rodar build de produção
npm run lint             # ESLint
```

---

## 13. Roadmap v2 (se ela aprovar)

### Curto prazo (2-4 semanas após aprovação)

- [ ] Substituir todos os placeholders pelo conteúdo real dela
- [ ] Domínio próprio (registro + DNS + SSL via Vercel)
- [ ] Google Search Console + sitemap.xml
- [ ] Remover banner "Versão demonstrativa" do footer
- [ ] Email transacional via Resend (em paralelo ao WhatsApp)
- [ ] Google Analytics 4 ou Plausible Analytics
- [ ] Favicon e Open Graph image customizados

### Médio prazo (1-3 meses)

- [ ] CMS headless pra ela editar conteúdo sozinha
  - Opções: Sanity, Payload, ou MDX local
- [ ] Página `/pacotes` completa com filtros (destino, orçamento, tipo, datas)
- [ ] Página de detalhe do pacote (galeria, roteiro, o que inclui)
- [ ] Blog `/dicas` com CMS de posts (SEO long-tail)
- [ ] Galeria de fotos reais dos clientes (com consentimento)
- [ ] Newsletter (captura email com lead magnet tipo "Guia de destinos")
- [ ] Schema.org / JSON-LD pra SEO local (Organization, TravelAgency)

### Longo prazo (3-6 meses)

- [ ] Área logada do cliente (`/minha-conta`):
  - Minhas viagens (status, documentos, pagamentos)
  - Documentos digitalizados (passaporte, visto)
- [ ] Gateway de pagamento (sinal + parcelas):
  - Stripe, Mercado Pago, ou Asaas
- [ ] Integração com sistemas de reserva (Sabre, Amadeus, Booking, Decolar)
- [ ] Painel admin pra agente gerenciar leads e clientes
- [ ] Sentry (monitoramento de erros)
- [ ] Política de privacidade / Termos de uso / LGPD compliance completo
- [ ] Auditoria de acessibilidade AA (WCAG 2.1)
- [ ] Performance Lighthouse 95+ (mobile e desktop)
- [ ] i18n PT/EN se for atender público gringo
- [ ] PWA (instalável no celular)

### "Infraestrutura decente" se virar produto (após 6 meses)

- [ ] Banco de dados gerenciado (Supabase Postgres ou Neon)
- [ ] Autenticação (Clerk ou Auth.js)
- [ ] CI/CD com GitHub Actions:
  - Lint + typecheck + build em todo PR
  - Preview deploy automático por branch
- [ ] Testes automatizados:
  - Vitest pra unit
  - Playwright pra E2E
- [ ] Conventional Commits + release-please (semver automático)
- [ ] Storybook pra documentar componentes
- [ ] Husky + lint-staged (pre-commit)
- [ ] Renovate ou Dependabot (deps atualizadas)
- [ ] Monitoramento: Sentry + uptime (Better Uptime)
- [ ] Logs estruturados
- [ ] Backups automatizados
- [ ] Documentação técnica (decisões arquiteturais via ADRs)

---

## 14. Histórico de sessões

> Cada nova sessão que avançar o projeto, adicionar uma entrada curta aqui.

### Sessão 1 — 2026-06-28 (inicial)
- Definição de escopo, stack, design system, estrutura.
- Decisões travadas (D1-D8).
- Criação deste arquivo + setup do projeto.
- Próximo: executar Passo 1 do plano.