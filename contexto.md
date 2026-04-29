# Contexto — guibim.github.io

> Documento de controle do projeto. Última atualização: 2026-04-28.
> Use como referência para qualquer conversa futura com a IA ou para onboarding próprio após longos períodos sem mexer no projeto.

---

## 1. Identidade

| Campo | Valor |
|---|---|
| Nome completo | Guilherme Domingues Bim |
| Nome público | Guilherme Bim |
| Cargo principal | QA Engineer & Web Developer |
| Localização | São Paulo, SP, Brazil |
| Email | guilhermebim016@gmail.com |
| Telefone | +55 (19) 97412-2309 |
| GitHub | https://github.com/guibim |
| LinkedIn | https://www.linkedin.com/in/guilherme-bim |
| Portfolio | https://guibim.github.io |
| CV (atual) | `public/resume.pdf` → arquivo original: `CV_Guilherme_Bim_QA_EN 04-26.pdf` |

---

## 2. Visão Geral do Projeto

**Portfolio pessoal** hospedado no GitHub Pages como SPA (Single Page Application).

- Deploy automático via GitHub Actions (`.github/workflows/deploy.yml`)
- Build com Vite → dist → branch `gh-pages`
- URL pública: https://guibim.github.io
- Idiomas suportados: Inglês (padrão) e Português-BR (toggle em runtime)
- Temas: Dark (padrão) e Light (toggle em runtime, persiste em localStorage)

---

## 3. Stack Técnica

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | React | 18.3 |
| Linguagem | TypeScript | 5.8 |
| Build tool | Vite | 5.4 |
| Estilização | Tailwind CSS | 3.4 |
| Componentes base | shadcn/ui + Radix UI | — |
| Roteamento | React Router DOM | 6.30 |
| Markdown | react-markdown + remark-gfm | — |
| Fontes (display) | Bebas Neue | Google Fonts |
| Fontes (mono) | Space Mono | Google Fonts |
| Fontes (body) | system-ui | — |
| Package manager | npm (bun.lockb existe mas npm é o padrão no CI) | — |
| Testes unitários | Vitest + Testing Library | — |
| Deploy | GitHub Pages via Actions | — |

---

## 4. Design System

### 4.1 Paleta de Cores (CSS Variables)

As cores são definidas em `src/index.css` via CSS Custom Properties e alternadas pela classe `html.dark`.

| Variável | Dark | Light | Uso |
|---|---|---|---|
| `--bg-main` | `#0C0E12` | `#ffffff` | Seções principais (Hero, Experience, Certifications) |
| `--bg-card` | `#14181F` | `#f5f8fb` | Seções secundárias (About, Notes, Contact) |
| `--bg-alt` | `#1D212B` | `#edf2f7` | Seções alternadas (Projects) |
| `--ticker-bg` | `#1D212B` | `#1D212B` | Ticker (sempre escuro em ambos os temas) |
| `--text-primary` | `#F0F2F5` | `#0C0E12` | Texto principal |
| `--text-muted` | `#8A96A8` | `#64748b` | Texto secundário, labels, muted |
| `--accent` | `#22C3B6` | `#22C3B6` | Teal — acento (idêntico em ambos os temas) |
| `--accent-dark` | `#1aada1` | `#1aada1` | Teal hover |
| `--border` | `#272C35` | `rgba(0,0,0,0.09)` | Bordas e divisores |

**Cor de acento:** `#22C3B6` (teal) — usada em: logo, links, H2 colorido, barras hover, CTAs, badges primários, tags flutuantes, stats.

### 4.2 Tipografia

| Papel | Font | Tamanho típico | Classe Tailwind |
|---|---|---|---|
| H1 Hero | Bebas Neue | `clamp(72px, 11vw, 170px)` | `font-display` |
| H2 Seções | Bebas Neue | `clamp(44px–60px, 6–7vw, 90px–120px)` | `font-display` |
| Logo nav | Bebas Neue | `text-3xl` | `font-display` |
| Labels numerados `[01]` | Space Mono | `10px` + `tracking-[0.3em]` | `section-label` (classe CSS) |
| Nav links | Space Mono | `11px` + `tracking-[0.15em]` | `font-mono` |
| Badges / tags | Space Mono | `11px` + `tracking-[0.1em]` | `font-mono` |
| CTAs / botões | Space Mono | `10px` + `tracking-[0.2em]` | `font-mono` |
| Corpo / parágrafos | system-ui | `text-sm` / `text-base` | — |

### 4.3 Padrão visual por seção

- **Label numerado:** `[01] — NOME DA SEÇÃO` em Space Mono 10px uppercase acima do H2
- **H2:** Bebas Neue grande com uma palavra colorida em teal na segunda linha
- **Container:** `max-w-[1400px] mx-auto px-6 lg:px-[60px]`
- **Animação scroll:** classe `.reveal` vira `.visible` via IntersectionObserver (setup em `Index.tsx`)
- **Hover em cards/rows:** barra vertical teal `w-0.5` + radial glow `rgba(34,195,182,0.06)`

---

## 5. Arquitetura de Arquivos

```
guibim.github.io/
├── public/
│   ├── resume.pdf                  ← CV atual (copiado de CV_Guilherme_Bim_QA_EN 04-26.pdf)
│   ├── logos/                      ← logos dos 9 projetos (logo1-btcheck.png … logo9-r2j.png)
│   ├── portfolio/                  ← markdowns de detalhe de cada projeto (portfolio-1.md … 9.md)
│   ├── unnamed.jpg                 ← foto OG (OpenGraph)
│   └── robots.txt
│
├── src/
│   ├── App.tsx                     ← Root: ThemeProvider > LanguageProvider > Router
│   ├── main.tsx                    ← Entry point React
│   ├── index.css                   ← CSS variables (tema), .reveal, .section-label
│   ├── App.css                     ← Reset #root (width: 100%)
│   │
│   ├── contexts/
│   │   ├── ThemeContext.tsx         ← dark/light toggle + localStorage
│   │   └── LanguageContext.tsx      ← en/pt toggle + localStorage
│   │
│   ├── lib/
│   │   ├── content.ts              ← TODO CONTEÚDO BILÍNGUE do site (EN + PT)
│   │   └── utils.ts                ← cn() helper (shadcn)
│   │
│   ├── data/
│   │   └── projects.ts             ← Array de 9 projetos (id, slug, title, subtitle, summary, tags, logo)
│   │
│   ├── pages/
│   │   ├── Index.tsx               ← Monta todas as seções + IntersectionObserver para .reveal
│   │   ├── PortfolioDetail.tsx      ← Página de detalhe de projeto (lê .md de /public/portfolio/)
│   │   └── NotFound.tsx            ← 404
│   │
│   ├── components/
│   │   ├── Header.tsx              ← Nav fixo: logo GUIBIM, links, toggle Lang (PT/EN), toggle Theme (☀/🌙)
│   │   ├── Hero.tsx                ← Seção hero: tela cheia, H1 "GUILHERME BIM", tags flutuantes, grain canvas
│   │   ├── About.tsx               ← [01] — ABOUT: grid 2-col, bio, skill badges, 5 stats
│   │   ├── Ticker.tsx              ← Marquee animado (stack tech), fundo ticker-bg
│   │   ├── Experience.tsx          ← [02] — EXPERIENCE: 4 experiências em rows com hover teal
│   │   ├── Portfolio.tsx           ← [03] — PROJECTS: grid 3-col de 9 projetos, roteado para detalhe
│   │   ├── StudyNotes.tsx          ← [04] — STUDY NOTES: 6 categorias + link Google Drive
│   │   ├── Education.tsx           ← [05] — CERTIFICATIONS: certs, educação, idiomas + botão cursos
│   │   ├── Footer.tsx              ← [06] — CONTACT + footer bar: email, sociais, logo, copyright
│   │   │
│   │   ├── NavLink.tsx             ← ⚠ Legado não usado (pode deletar)
│   │   ├── Projects.tsx            ← ⚠ Legado não usado (pode deletar)
│   │   └── Skills.tsx              ← ⚠ Legado não usado (pode deletar)
│   │
│   └── components/ui/              ← shadcn/ui (Radix) — usados pelo Toaster/Sonner, não tocar
│
├── index.html                      ← HTML base: dark class, Google Fonts, meta SEO, JSON-LD Person
├── tailwind.config.ts              ← Cores (teal, etc.), fontes (display/mono), keyframes (marquee, float)
├── .gitignore                      ← node_modules + arquivos de referência desta conversa
├── contexto.md                     ← ESTE ARQUIVO
└── .github/workflows/deploy.yml   ← CI/CD: build + deploy no GitHub Pages
```

---

## 6. Sistema de Contextos (Estado Global)

### ThemeContext (`src/contexts/ThemeContext.tsx`)
- Estado: `dark: boolean` (padrão `true`)
- Persistência: `localStorage.getItem('theme')` — `'dark'` | `'light'`
- Efeito: toggle da classe `dark` no `document.documentElement`
- Consume: `useTheme()` → `{ dark, toggle }`
- Usado em: `Header.tsx` (botão ☀/🌙)

### LanguageContext (`src/contexts/LanguageContext.tsx`)
- Estado: `lang: 'en' | 'pt'` (padrão `'en'`)
- Persistência: `localStorage.getItem('lang')`
- Consume: `useLang()` → `{ lang, setLang }`
- Usado em: todos os componentes de conteúdo via `content[lang]`

### content.ts (`src/lib/content.ts`)
- Objeto central com **todo o texto do site** em EN e PT
- Estrutura: `content.en.{nav, hero, about, ticker, experience, projects, notes, certifications, contact, footer}`
- **Para editar qualquer texto do site → editar este arquivo**

---

## 7. Fluxo de Seções (Ordem na Página)

```
Header (fixo, z-50)
│
├── Hero           → bg-main   | [sem label] | H1: GUILHERME / BIM(teal)
├── About          → bg-card   | [01] ABOUT
├── Ticker         → ticker-bg | (marquee sem label)
├── Experience     → bg-main   | [02] EXPERIENCE
├── Portfolio      → bg-alt    | [03] PROJECTS     ← roteado p/ /portfolio/:slug
├── StudyNotes     → bg-card   | [04] STUDY NOTES
├── Education      → bg-main   | [05] CERTIFICATIONS
└── Footer
    ├── Contact    → bg-card   | [06] CONTACT
    └── Footer bar → bg-main   | logo + copyright + download CV
```

---

## 8. Conteúdo Biográfico (fonte-verdade)

### 8.1 Resumo profissional

QA Engineer & Web Developer com experiência em validação de requisitos, regras de negócio e consistência de dados em aplicações web, APIs e produtos digitais. Além do QA, atua no desenvolvimento full-stack: React/TypeScript frontends, Python/FastAPI backends, Chrome Extensions e pipelines CI/CD completos. Background em Administração de Empresas + Engenharia de Software em andamento.

### 8.2 Stats (seção About)

| Valor | Label |
|---|---|
| 27 | Years Old |
| 3+ | Years in QA |
| 10+ | Years in Technology |
| 10+ | Tech Projects |
| 2 | Certifications |

### 8.3 Skills & Badges

**Badge primário (teal filled):** `Python · React`

**Badges de skill (outlined):**
`Cypress` · `Robot Framework` · `Selenium` · `Postman` · `GitHub Actions` · `Docker` · `BDD/Gherkin` · `API Testing` · `SQL` · `Git` · `Jira` · `TypeScript`

**Tags flutuantes no Hero:**
`QA Automation` · `React · TypeScript` · `Robot Framework` · `CI/CD · Docker` · `API Testing` · `Cypress` · `Python · FastAPI` · `Full-Stack Dev`

---

## 9. Experiências Profissionais

### Nuclear Gaming — QA Engineer & Product Developer
- **Período:** Jan 2025 – Presente
- **Regime:** Remoto — Freelance
- Função híbrida: QA + code review + infraestrutura de pipelines + desenvolvimento de produto
- Testa produtos Unity WebGL/HTML5, registra defeitos com evidências, mantém checklists de release
- Concebe MVPs, realiza code review com foco em qualidade, configura pipelines CI/CD
- **Tags:** Unity · WebGL · Code Review · CI/CD · Docker · QA

### QA Engineer — Web & SaaS Projects (Freelance)
- **Período:** Mar 2023 – Presente
- **Regime:** Remoto
- QA para aplicações web e produtos SaaS em desenvolvimento ativo
- Testes funcionais, exploratórios, regressão e API — documentação completa
- Automação com Cypress e Robot Framework, suporte a checklists de release
- **Tags:** Cypress · Robot Framework · Postman · API Testing · Regression

### PER5 Engenharia — QA Analyst (OpenBIM / IFC)
- **Período:** Out 2024 – Presente
- **Regime:** Remoto — Freelance
- QA/QC em modelos IFC, padronização de documentação técnica
- Critérios de aceitação rastreáveis, alinhamento cliente ↔ equipe operacional
- Norma ISO 19650
- **Tags:** OpenBIM · IFC · ISO 19650 · QA/QC · Documentation

### Grupo BIM — Data & Process Quality Analyst
- **Período:** Jan 2017 – Ago 2025
- **Regime:** Presencial
- 9 anos de evolução de sistemas internos de controle operacional
- Soluções usadas por até 20 usuários simultâneos em 50+ projetos
- Contas a pagar, RH, gestão documental, acompanhamento de obras
- Liderou implementação do ERP SIENGE
- Automações em JavaScript e Python para validação e relatórios
- **Tags:** JavaScript · Python · ERP · Data Quality · Process Automation

---

## 10. Projetos (Portfolio Grid — 9 itens)

| # | Slug | Título | Subtítulo | Stack principal |
|---|---|---|---|---|
| 01 | portfolio-1 | BTCHECK | Bitcoin Data Platform | Python · Robot Framework · Cypress · API · Scraping |
| 02 | portfolio-2 | Nuclear Gaming | Game QA & DevOps | Unity · WebGL · Docker · CI/CD · QA |
| 03 | portfolio-3 | CONV+ | File Conversion API | FastAPI · Python · API · Async |
| 04 | portfolio-4 | Linkeiro | SaaS QA | QA · SaaS · Test Cases · Exploratory Testing |
| 05 | portfolio-5 | Oddswatch | Predict Market QA | QA · Regression Testing · Financial Systems |
| 06 | portfolio-6 | Per5HUB | OpenBIM Project Platform | OpenBIM · IFC · Kanban · Gantt |
| 07 | portfolio-7 | PER5 | OpenBIM Quality & Business | OpenBIM · IFC · Quality · Business Integration |
| 08 | portfolio-8 | Grupo BIM | Internal Systems & Data Pipelines | JavaScript · Python · Dashboards |
| 09 | portfolio-9 | R2J | Operations, Systems & Quality | Operations · Systems Design · Quality |

**Conteúdo detalhado de cada projeto:** `public/portfolio/portfolio-{n}.md`
**Logos:** `public/logos/logo{n}-{nome}.png`
**Rota de detalhe:** `/portfolio/:slug` → componente `PortfolioDetail.tsx`

---

## 11. Educação & Certificações

### Certificações
| Nome | Emissor | Status |
|---|---|---|
| Certified Scrum Professional® | CertiPROF | ✓ Aprovado |
| ISTQB CTFL | ISTQB | ○ Em andamento (expected 2026) |

**Link planilha de cursos com certificados:**
`https://docs.google.com/spreadsheets/d/1CD9x_f_cSd1cHMqV2ocq6ZeNRr0EsZ32hiYcxnFE1Xw/edit?gid=0#gid=0`

### Educação
| Grau | Instituição | Período |
|---|---|---|
| B.Sc. Engenharia de Software | Faculdade Anhanguera | Jan 2026 – Em andamento |
| B.B.A. Administração de Empresas | Centro Universitário de Jaguariúna (UniFAJ) | Jan 2019 – Dez 2022 |

### Idiomas
| Idioma | Nível |
|---|---|
| Português | Nativo |
| Inglês | Avançado |

---

## 12. Study Notes

**Google Drive (pasta unificada):**
`https://drive.google.com/drive/folders/1FxiMYio-i2LRwopK0s9DcsQZzKuoU9Oi?usp=sharing`

**6 categorias exibidas no site:**
1. Software Testing & QA Fundamentals
2. Test Automation with Cypress & Robot Framework
3. API Testing & Postman
4. Python & JavaScript for QA
5. DevOps, CI/CD & Docker
6. Software Engineering themes

---

## 13. Links Externos (todos usados no site)

| Destino | URL | Onde aparece |
|---|---|---|
| CV (download) | `/resume.pdf` | Hero, About, Header, Footer |
| GitHub | https://github.com/guibim | Footer/Contact |
| LinkedIn | https://www.linkedin.com/in/guilherme-bim | Footer/Contact |
| Email | guilhermebim016@gmail.com | Footer/Contact |
| Google Drive (notas) | https://drive.google.com/drive/folders/1FxiMYio-i2LRwopK0s9DcsQZzKuoU9Oi | StudyNotes |
| Planilha de cursos | https://docs.google.com/spreadsheets/d/1CD9x_f_cSd1cHMqV2ocq6ZeNRr0EsZ32hiYcxnFE1Xw/ | Education |
| BTCheck (live) | https://guibim.github.io/btcheck-site/ | (nos .md de detalhe) |
| BTCheck (repo) | https://github.com/guibim/btcheck | (nos .md de detalhe) |
| Conv+ (live) | https://guibim.github.io/conv-site/ | (nos .md de detalhe) |
| Conv+ (repo) | https://github.com/guibim/conv | (nos .md de detalhe) |

---

## 14. SEO

### Meta tags (`index.html`)
- `<title>`: Guilherme Bim | QA Engineer & Web Developer — São Paulo
- `<meta name="description">`: texto com keywords principais
- `<meta name="keywords">`: QA Engineer, SDET, Cypress, Robot Framework, React, TypeScript, Python, Docker, CI/CD, etc.
- `<link rel="canonical">`: https://guibim.github.io/

### Open Graph / Twitter
- `og:type`: website
- `og:image`: `/unnamed.jpg`
- Twitter card: summary_large_image

### JSON-LD (Structured Data)
- `@type`: Person
- Campos: name, url, email, jobTitle, description, address, sameAs (GitHub + LinkedIn), knowsAbout (array de 20+ skills), alumniOf (2 instituições)

---

## 15. CI/CD e Deploy

- **Branch principal:** `main`
- **Deploy:** push em `main` → GitHub Actions → `npm run build` → publica `dist/` na branch `gh-pages`
- **Config:** `.github/workflows/deploy.yml`
- **URL live:** https://guibim.github.io (serve de `gh-pages`)

**Para publicar mudanças:**
```bash
git add .
git commit -m "descrição"
git push origin main
# Actions cuida do deploy automaticamente (~2 min)
```

---

## 16. Histórico de Modificações (nesta conversa)

### Fase 1 — Reestruturação visual completa
- Design anterior: dark/teal minimalista com seções de card simples
- Design novo: inspirado em gabrielfsmota.com.br — Bebas Neue, Space Mono, seções alternadas por cor, animações de scroll reveal, ticker marquee, tags flutuantes no hero, grain canvas

### Fase 2 — Paleta, i18n, CV, Dev info
- **Cores:** revertidas para teal/dark do portfolio original (`#22C3B6`, `#0C0E12`, etc.), agora com CSS variables para suportar Light Mode
- **Toggle de tema (Dark/Light):** botão ☀/🌙 no header, persiste em localStorage
- **Toggle de idioma (EN/PT):** botão `PT`/`EN` no header, persiste em localStorage
- **Logo:** mudado de `G.BIM` para `GUIBIM`
- **CV atualizado:** alinhado com `CV_Guilherme_Bim_QA_EN 04-26.pdf`
  - Nuclear Gaming: cargo correto (QA Engineer & Product Developer)
  - Freelance QA: nova entrada (Mar 2023 – Present)
  - Grupo BIM: papel correto (Data & Process Quality Analyst), SIENGE ERP
  - UniFAJ: período correto (Jan 2019 – Dez 2022)
  - ISTQB: Expected 2026
  - CSP: CertiPROF (não Scrum Alliance)
  - Inglês: Advanced (não Professional)
- **Dev info adicionado:** React, TypeScript, Chrome Extension, FastAPI, Full-Stack no about/hero/tags
- **StudyNotes:** restaurada no novo padrão visual, 6 categorias
- **SEO:** JSON-LD Person schema, meta description e keywords completas
- **`.gitignore`:** adicionados `portfolio-base.md`, `portfolio-objetivo.md`, `pr_*.txt`, PDF do CV na raiz

### Fase 3 — Ajustes finos
- Tags flutuantes: removido "Chrome Extension", adicionado "Full-Stack Dev"
- Stats: 5 itens agora — 27 / 3+ / **10+** (Technology) / **10+** (Projects) / 2
- Education: botão "View All Courses & Certificates" → planilha Google Sheets
- StudyNotes: corrigido bug de `.reveal` aninhado que ocultava categorias

---

## 17. Como Fazer Manutenções Comuns

### Atualizar texto/bio/cargo
→ Edite `src/lib/content.ts` — tudo está centralizado em `content.en` e `content.pt`.

### Adicionar/editar projeto no grid
→ Edite `src/data/projects.ts` — adicione item ao array `projects[]`.
→ Adicione arquivo `public/portfolio/portfolio-{n}.md` com o conteúdo de detalhe.
→ Adicione logo em `public/logos/logo{n}-{nome}.png`.

### Atualizar o CV
1. Coloque o novo PDF em `public/resume.pdf` (sobrescreve)
2. Atualize o conteúdo do site em `src/lib/content.ts` se necessário

### Adicionar nova seção
1. Crie componente em `src/components/NovaSeccao.tsx`
2. Importe e adicione em `src/pages/Index.tsx`
3. Adicione link de nav em `src/components/Header.tsx` (array `navItems`)
4. Adicione textos em `src/lib/content.ts` (EN + PT)

### Editar conteúdo dos markdowns de projeto
→ Edite diretamente `public/portfolio/portfolio-{n}.md` — são servidos como arquivos estáticos e renderizados via `react-markdown`.

### Adicionar certificação
→ Edite o array `certifications` em `src/components/Education.tsx` diretamente.

---

## 18. Arquivos de Referência (não commitados)

| Arquivo | Conteúdo | Commitado? |
|---|---|---|
| `portfolio-base.md` | Análise do site anterior (design tokens, seções, conteúdo) | Não (.gitignore) |
| `portfolio-objetivo.md` | Análise do site de referência (gabrielfsmota.com.br) | Não (.gitignore) |
| `CV_Guilherme_Bim_QA_EN 04-26.pdf` | CV atual na raiz do projeto | Não (.gitignore) |
| `public/resume.pdf` | Cópia do CV servida pelo site | **Sim** |
| `contexto.md` | Este documento | Opcional |

---

*Atualizar este arquivo sempre que houver mudanças estruturais significativas: novos projetos, mudança de cargo, novo emprego, nova certificação, mudança de paleta ou arquitetura.*
