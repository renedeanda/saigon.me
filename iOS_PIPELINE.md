# saigon.me → iOS Pipeline

A pointer doc for the iOS app candidates evidenced by this site's content. The canonical analysis lives in iBootstrap:

→ **[iBootstrap/portfolio/PORTFOLIO_BACKLOG.md](https://github.com/renedeanda/iBootstrap/blob/main/portfolio/PORTFOLIO_BACKLOG.md)** — full per-card details (grounding citations, market analysis, scorecards, free/paid splits, reuse maps, Apple APIs incl. ongoing-cost analysis, revenue models, positioning-checks)

This file is a short mirror so anyone working in saigon.me can find the iOS pipeline without leaving the site repo.

---

## Pipeline status (saigon.me)

Two SKUs — flagship + cross-country sibling. Founder decision 2026-05-27: ship as separate apps, not as a single bundled product.

| Pick | Tier | Status | Grounding citation | Ship order |
|---|---|---|---|---|
| **Saigon Offline** *(flagship)* | Tier 2 — $9.99 lifetime, iPad Universal | Menu pick (2026 picking-guide recommended top-3) | [`/data/experiences.json`](https://github.com/renedeanda/saigon.me) (100+ entries across 5 categories, each tagged by district/time/season with Vietnamese phrase + cultural tip + why-go narrative) + [`/data/phrases.json`](https://github.com/renedeanda/saigon.me) (9 situations, 1000+ trained phrases) + [`/data/districts.json`](https://github.com/renedeanda/saigon.me) (8 districts with personality + hidden gems + local sayings). About-page persona ladder: "For First-Timers · For Expats · For Locals" | **Ships first** — recommended weekends 4–8 of 2026 |
| **Vietnam Companion** *(cross-country sibling)* | Tier 2 — $9.99 lifetime, iPad Universal | Menu pick (year-2 after Saigon Offline proves the engine) | [`/data/cities.json`](https://github.com/renedeanda/saigon.me) — 10 cities (Hanoi, Hoi An, Da Nang, Da Lat, Hue, Nha Trang, Vung Tau, Phu Quoc, Sapa, Mui Ne) each with whyGo + topAttractions + whenToVisit + howToGetThere + localTips + didYouKnow (~600 lines per city) + [`/app/[locale]/destinations/page.tsx`](https://github.com/renedeanda/saigon.me) headlines "Where to Go in Vietnam" (intentional cross-country scope, not Saigon-spillover) | **Ships second** — year-2 expansion play |

## Considered & cut

| Pick | Reason cut |
|---|---|
| **Travel Wallet** *(currency converter + multi-trip expense tracker)* | Researched and cut. The saigon.me repo audit found zero money/expense/currency content; the JTBD does not exist for this audience. The site focuses on *cultural connection* and *language*, not *financial optimization*. An audit revealed experiences list "$2–4" prices inline (informational, not tracking) and the About page never mentions financial access or cost comparison. Travel Wallet was an invented add-on, not a source-grounded pick. |

## Why this pipeline exists

saigon.me has 4 explicit personas (First-Timers / Expats / Locals / Returning Visitors) and 7 cited JTBDs. The site's headline differentiator: *"Not restaurants. Not landmarks. Moments. Specific, hyper-real experiences that capture the soul of Saigon."* That curation IS the content moat — competitors can't copy 100+ hyper-specific cultural moments without doing ~2 years of residence in Saigon.

**Saigon content is 8–10x deeper than other-city content** (100+ entries + 1000+ phrases vs. ~600 lines per other-city). But the 10-city Vietnam content is fully fleshed (not stub), evidencing intentional cross-country scope. Hence the two-SKU shape: depth flagship + breadth sibling, sharing an engine.

## Multi-country expansion (year 3+)

If Vietnam Companion proves the engine, natural siblings using the same offline-content shell:

- **Bangkok Offline** *(if the saigon.me brand expands editorial coverage to Thailand)*
- **Phnom Penh Offline** *(Cambodia)*
- **Vientiane Offline** *(Laos)*

Each would require building the same depth (100+ moments + ~1000 phrases + district maps) — multi-year editorial commitment per city. The portfolio doesn't commit to these; they're documented here as the *possible* shape if saigon.me's editorial scope expands.

## Process for shipping the flagship

1. Re-read [PORTFOLIO_BACKLOG.md #2 Saigon Offline](https://github.com/renedeanda/iBootstrap/blob/main/portfolio/PORTFOLIO_BACKLOG.md#2-saigon-offline-saigonme--flagship) — full card with mixed hand-drawn + warm-minimal identity declaration per Ember precedent.
2. In iBootstrap, run `/new-app --draft "Saigon Offline"`.
3. Sleep on it.
4. Run `/new-app --commit saigon-offline`. Scaffold renders, repo pushes.
5. Port content engine for tagged experiences (district / time / season filters) + offline MapKit tile caching + AVSpeechSynthesizer Vietnamese pronunciation.
6. In saigon.me: add "Bring this in your pocket" CTA on every experience page once the App Store listing is live.

## Cross-links

- iOS backlog (canonical): [iBootstrap/portfolio/PORTFOLIO_BACKLOG.md](https://github.com/renedeanda/iBootstrap/blob/main/portfolio/PORTFOLIO_BACKLOG.md)
- Pricing logic: [iBootstrap/portfolio/MONETIZATION_MATRIX.md](https://github.com/renedeanda/iBootstrap/blob/main/portfolio/MONETIZATION_MATRIX.md)

Last reviewed: 2026-05-27. Keep in sync with PORTFOLIO_BACKLOG.md when either changes.
