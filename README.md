# Bay Area Plumbing & Drain — emergency service site

Single-page, mobile-first conversion site for **Bay Area Plumbing & Drain** (Bay St. Louis, MS).
Built with **Next.js 14 (App Router) + Tailwind CSS**, deployable to Vercel as a static page.

Goal: someone lands mid-emergency and reaches a phone call in **under 3 seconds** — zero scrolling,
zero tapping through menus.

---

## Conversion architecture

| Element | Where | Why |
| --- | --- | --- |
| Sticky call bar | Fixed to bottom, **always visible** | The number never leaves the screen |
| Hero call button | Above the fold, full width | One tap to dial, no scroll required |
| Hero form CTA | Under the call button | Catches people who won't call yet |
| Trust bar | Directly under hero | License, 18+ years, 4.9★/95+ reviews, response time |
| Services | Icon cards + "Call about this" | Jargon-free, each card is its own call trigger |
| Service area | City + ZIP chips | Local SEO + "am I in range?" reassurance |
| Reviews | Real quotes, name + city | Social proof from named neighbors |
| Request form | `#request` | Name, phone, service, urgency — 4 inputs, ~30 seconds |
| FAQ | Native `<details>` accordion | Kills pricing / response-time / "is it really 24/7?" objections |
| Final CTA | Pre-footer band | Last chance for a tap before they bounce |

Urgency messaging is repeated throughout: **24/7 badge**, **under 60-minute local response**,
**available nights, weekends & holidays**, **same-day turnaround**, **upfront pricing**.

Every phone number on the page is a `tel:` link — hero, sticky bar, service cards, service area,
form, FAQ, footer, and the form's success/error states.

---

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deploy to Vercel

1. Import this repository at [vercel.com/new](https://vercel.com/new) — the framework is detected
   automatically, no build settings needed.
2. (Optional) Add the `NEXT_PUBLIC_FORM_ENDPOINT` environment variable — see below.
3. Deploy, then point the real domain at it.

---

## Wire up the form (do this before launch)

The request form has no backend by design — it POSTs JSON to whatever endpoint you give it.

1. Create a form endpoint (Formspree, Basin, a Zapier/Make webhook, or your own `/api/lead` route).
2. Set `NEXT_PUBLIC_FORM_ENDPOINT` in Vercel → Settings → Environment Variables.
3. Redeploy.

```json
{ "name": "…", "phone": "…", "service": "…", "urgency": "…", "details": "…", "page": "…", "submittedAt": "…" }
```

**Until that variable is set, submissions are not delivered anywhere.** The form still validates and
shows the confirmation screen (which funnels the visitor to tap-to-call), but no lead reaches you.
For a panicked homeowner, missed leads are the whole ballgame — set this up on day one.

---

## Editing content

Everything lives in `lib/business.ts` — one file drives both the visible page **and** the
schema.org JSON-LD:

- `BUSINESS` — name, phone (display / `tel:` / E.164), hours, rating, review count, license, guarantee
- `SERVICES` — the five services + which icon each uses
- `SERVICE_AREA` — cities and ZIP codes
- `TESTIMONIALS` — quotes, names, cities
- `FAQS` — accordion content **and** FAQPage schema
- `localBusinessSchema` / `faqSchema` — structured data

> ⚠️ Change `SITE_URL` in `lib/business.ts` to the real domain before launch. It feeds the canonical
> URL, Open Graph tags, the sitemap, and the schema `@id`.

---

## SEO

- **Meta title:** `Emergency Plumber Bay St. Louis, MS | 24/7 Plumbing & Drain`
- **Meta description:** 24/7 emergency positioning + phone number, kept under ~160 characters
- **Schema.org:** `Plumber` + `LocalBusiness` with name, phone, address, `areaServed` (6 cities +
  Hancock County), `openingHoursSpecification` (Mon–Fri 7:30–5:00 **and** a 24/7 emergency spec),
  `priceRange`, `aggregateRating` (4.9 / 95), individual `review` entries, and an `OfferCatalog`
  of all five services — plus a separate `FAQPage` schema
- `app/robots.ts` and `app/sitemap.ts` are generated automatically

**Still to do (needs real data, not invented):** add the street address and geo-coordinates to
`localBusinessSchema` once available — a full `PostalAddress` meaningfully strengthens local pack
rankings. Also create a Google Business Profile if one doesn't exist and point it at this domain.

---

## Performance

- **Zero images.** Every icon is an inline SVG; the favicon is a ~400-byte SVG. No carousels, no video.
- No web fonts — system font stack, so text paints instantly on 4G.
- Styled entirely with CSS utilities; the page is statically prerendered at build time.
- `prefers-reduced-motion` is respected (the pulsing "live" dot and smooth scroll both stand down).

## Accessibility

- Semantic landmarks, one `<h1>`, labeled form fields, `fieldset`/`legend` for the urgency radios
- 3px brass focus ring on all interactive elements
- Native `<details>` accordion — works with keyboard and screen readers without JS
- Bottom padding uses `env(safe-area-inset-bottom)` so the sticky bar never covers content or the
  iPhone home indicator
