# PromoBeta — Price Comparison & Deal Alert Platform

> **Status:** In Development · Personal Project

## Overview

PromoBeta is a web platform for price comparison and deal alerts focused on the Brazilian e-commerce market. It monitors prices across major retailers — Mercado Livre, Americanas, Shoptime, Magalu, Amazon — and automatically distributes verified deals to WhatsApp and Telegram groups, while notifying individual users when a tracked product hits their target price.

The platform addresses three real problems with online shopping in Brazil: price dispersion across dozens of stores, flash deals that expire in hours, and manipulated "discount" prices with inflated reference values. PromoBeta solves all three by automating the comparison, alerting before the deal ends, and showing the real price history so the user can verify whether the discount is genuine.

---

## Core Features

| Feature | What it does |
|---------|-------------|
| **Price comparison** | Real-time comparison across integrated sources with lowest-price ranking per product |
| **Price history chart** | Full variation graph per product — validates whether a discount is real or a reference price was inflated before a sale event |
| **Drop alerts** | User-configurable threshold (percentage or absolute price target) with instant notification via email or Telegram |
| **Automated group distribution** | Bot publishes verified deals directly to Telegram channels and WhatsApp groups, including price, drop percentage, and affiliate link |
| **Search & category browse** | Semantic URLs, filterable by category, store, and price range |
| **Premium tier** | Unlimited personalized alerts with immediate notification — free tier covers public search and group deal reception |

---

## Technical Architecture

```
Frontend     React 18 · Vite · TypeScript · Tailwind CSS · TanStack Query · Zustand · Recharts
Backend      Supabase — PostgreSQL · Auth · Storage · Edge Functions
Crawler      TypeScript/Node — runs on GitHub Actions (hourly schedule, no dedicated server)
Cache        Upstash Redis — 30-minute search result cache, prevents DB overload at zero cost
Notifications Resend (email) · Telegram Bot API (groups + direct alerts)
Payments     Mercado Pago Subscriptions (native BR recurring billing)
Deploy       Vercel (frontend) · GitHub Actions (crawler CI)
```

### Key Design Decisions

**Crawler on GitHub Actions, not a server** — the price collection job is a scheduled GitHub Actions workflow running hourly. Zero infrastructure to maintain, zero monthly server cost, colocated with the repository. Each run queries integrated APIs, diffs against the last recorded price, and persists only on change.

**Telegram prioritized over WhatsApp for MVP** — Telegram's official Bot API is free, carries no risk of account blocking, and natively supports automated group broadcasting. WhatsApp via Evolution API or Z-API is on the roadmap as Phase 2 once the base distribution pipeline is stable.

**Price history as a trust feature, not just data** — every price collected is persisted in `price_history`. The variation chart on the product page is the platform's primary differentiator: it exposes inflated reference prices ahead of promotional events (a common practice in Brazilian retail) and lets the user make a data-driven purchase decision.

**Affiliate revenue without user cost** — all outbound links are affiliate deep links (Mercado Livre, Lomadee network). Commission is paid by the retailer to the platform at CPA or CPC rate — the user pays the same price they would find going directly to the store.

**SEO as the primary acquisition channel** — semantic product URLs, dynamic meta tags per route, auto-generated sitemaps from product slugs, and `Product` schema.org structured data for Google rich snippets. Organic search is the natural growth channel for an affiliate model.

---

## Data Sources

| Source | Type | Coverage |
|--------|------|----------|
| Mercado Livre | Official REST API | Largest Brazilian marketplace |
| Lomadee | API + XML feed | Americanas, Shoptime, OLX + 200 stores |

Roadmap: Magalu Parceiros · Amazon PA API · Casas Bahia · Kabum

---

## Roadmap

| Phase | Status | Deliverables |
|-------|--------|-------------|
| Frontend MVP | ✅ Done | All routes and components with mocked data — home, search, product, category, alerts, account, premium |
| Infrastructure | 🔜 In progress | Supabase migrations + RLS, Mercado Livre + Lomadee crawler, Vercel + GitHub Actions deploy |
| Live MVP | 🔜 Next | Auth, email alerts via Resend, fixed threshold, first Telegram group integration |
| Premium | 🔄 Planned | Mercado Pago Subscriptions, Telegram bot, checkout flow |
| Scale | 🔄 Planned | WhatsApp integration, new sources (Magalu, Amazon, Casas Bahia), PWA |

---

## What This Project Demonstrates

- **Serverless automation** — a price crawler running on GitHub Actions eliminates infrastructure overhead and demonstrates practical use of CI/CD pipelines beyond code deployment
- **Multi-source data aggregation** — integrating heterogeneous APIs (REST, XML feed) into a unified product and price data model
- **Full-stack product ownership** — frontend, backend, data pipeline, notification system, and subscription billing designed and built end-to-end
- **Affiliate business model** — platform architecture built around an affiliate revenue model with SEO as the acquisition channel, not paid ads

---

*Developed by Guilherme Bim — 2026*
*Stack: React · TypeScript · Tailwind CSS · Supabase · Vercel · GitHub Actions*
*Working name: PromoBeta — final name TBD.*
