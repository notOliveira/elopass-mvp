# Próximos passos — checklist pessoal

> **Pra retomar:** abre este arquivo primeiro. Se precisar de contexto completo (decisões, stack, design system), lê `MVP-CONTEXT.md` depois.
>
> **Status atual (28/06/2026):** código do MVP completo e buildando. Pendente: **Bloco 1** (trocar placeholders) + **Bloco 2** (deploy Vercel) + **Bloco 3** (mostrar pra colega).

---

## Bloco 1 — Trocar conteúdo placeholder (~30 min)

Tudo centralizado em pouquíssimos arquivos. Mexe só neles e o site inteiro se atualiza.

### 1.1 Dados da empresa e da agente

**Arquivo único:** `lib/data.ts`

```ts
export const siteConfig = {
  name: "Mosaico Viagens",            // ← nome real da empresa
  tagline: "Viagens sob medida...",   // ← frase curta, máx 1 linha
  whatsappNumber: "5511999999999",    // ← wa.me: 55 + DDD + número (sem espaços, sem +)
  whatsappDisplay: "+55 (11) 99999-9999", // ← versão formatada pra mostrar
  email: "contato@...",               // ← email real
  instagram: "@...",                  // ← Instagram real
  url: "https://...",                 // ← atualizar DEPOIS do deploy Vercel
};

export const agent = {
  name: "Marina Souto",               // ← nome real
  role: "Agente de viagens",          // ← cargo se for o caso
  photo: "https://images.unsplash...", // ← URL HTTPS da foto real dela
  photoAlt: "...",                    // ← descrição acessível da foto
  bio: ["...", "...", "..."],         // ← 3 parágrafos
};
```

**Componentes que vão se atualizar sozinhos** (não mexer):
- Home → `about-teaser.tsx` + `cta-banner.tsx`
- Sobre → `agent-hero.tsx` + `agent-bio.tsx`

### 1.2 Paleta de cores

**Arquivo único:** `app/globals.css` — bloco `@theme inline`

```css
@theme inline {
  --color-background: #faf8f5;
  --color-foreground: #1c1917;
  --color-muted: #78716c;
  --color-accent: #c2410c;        /* cor principal (CTAs, links, detalhes) */
  --color-accent-soft: #fed7aa;   /* versão clara (hovers, fundos sutis) */
  --color-border: #e7e5e4;
}
```

Muda os 6 valores, salva. Todas as classes (`bg-accent`, `text-muted`, `border-border`, etc.) seguem.

**Paleta atual:** off-white + terracota (vibe quente/editorial).
**Alternativas comuns:**
- Luxo: `#0c1b33` (navy) + `#c9a961` (dourado)
- Aventura: `#1e3a2e` (verde floresta) + `#d4a574` (areia)
- Clean rosa: `#f5e9e0` (bg) + `#a04858` (rosa antigo)

### 1.3 Logo

3 caminhos — escolhe o que se aplica:

| Situação | O que fazer |
|---|---|
| Sem logo ainda, texto estilizado tá ok | Só trocar `siteConfig.name` em `lib/data.ts`. Nav e Footer continuam usando `font-serif`. |
| Logo em SVG | Salvar em `public/logo.svg` + editar `components/nav.tsx` (linha com `{siteConfig.name}`) e `components/footer.tsx` (mesmo lugar) pra usar `<Image src="/logo.svg" width={120} height={32} alt={siteConfig.name} />`. |
| Logo em PNG/JPG | Salvar em `public/logo.png` + mesma edição acima. |

**Tamanho sugerido no nav:** ~120×32px (proporcional).

### 1.4 Foto profissional da agente

- **Proporção:** retrato vertical (4:5 ou 3:4)
- **Hospedagem:** se não tiver onde hospedar, fazer upload no Unsplash (conta grátis) só pra ter URL HTTPS. Pra v2, hospedar localmente.
- **Onde trocar:** campo `agent.photo` em `lib/data.ts`.

### 1.5 Conferir

```bash
npm run dev
```

Abrir http://localhost:3000 e ver: home, sobre, cotação.

---

## Bloco 2 — Deploy na Vercel (~10 min)

### Pré-condições

- [ ] Repo comitado
- [ ] Repo num GitHub remoto
- [ ] Conta em vercel.com (pode logar com GitHub)

### Passo a passo

1. **Subir pro GitHub** (se ainda não tem remoto):
   ```bash
   git remote add origin https://github.com/<seu-user>/agencia-viagens-mvp.git
   git push -u origin master
   ```

2. **Importar na Vercel:**
   - Acessar https://vercel.com/new
   - "Import Project" → selecionar o repo
   - Framework: Next.js (auto-detectado)
   - **Nenhuma env var necessária** nesse MVP
   - Clicar **Deploy**

3. **Build leva ~1 min.** URL gerada vai ser tipo:
   `https://agencia-viagens-mvp-<hash>.vercel.app`

4. **Renomear projeto** (opcional, pra URL mais limpa):
   - Settings → Project Name → `mosaico-viagens`
   - URL vira: `https://mosaico-viagens.vercel.app`

5. **Atualizar `lib/data.ts` → `siteConfig.url`** com a URL final, commitar, dar push. Vercel redeploya sozinho.

### Se der erro no build

- Ver logs no painel da Vercel
- 99% das vezes é falta de dependência (`npm install` local resolve) ou config errada
- Se for a fonte Fraunces que não carrega (raro), checar conexão com Google Fonts

---

## Bloco 3 — Mostrar pra colega

Caminho crítico pra ela avaliar (3 min de demo):

1. Abre a URL pública
2. Scroll pela **Home** — comenta paleta, vibe, clareza
3. Clica "Planejar minha viagem" → preenche o form → submete → **WhatsApp abre**
4. Pergunta: "o que te incomodou? o que te surpreendeu?"

### Anotar feedback em duas categorias:

- **Pra mudar agora (urgente):** coisas que ela não gostou
- **Pra v2 (depois):** blog, pacotes reais, CMS, domínio próprio, etc.

Roadmap v2 completo: `docs/MVP-CONTEXT.md#16-roadmap-v2-se-ela-aprovar`.

---

## Histórico

- **2026-06-28** — Criado após fechar código do MVP. Pendente Bloco 1 + Bloco 2.