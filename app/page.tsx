import type { ComponentType } from 'react'
import RequestForm from '@/components/RequestForm'
import {
  BUSINESS,
  FAQS,
  SERVICES,
  SERVICE_AREA,
  TESTIMONIALS,
  faqSchema,
} from '@/lib/business'

type IconProps = { className?: string }

/* ------------------------------------------------------------------ */
/* Inline SVG icons — no icon font, no image requests, ~0 bytes over   */
/* ------------------------------------------------------------------ */

function IconPhone({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconClock({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  )
}

function IconShield({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5.5L12 2.5 4 5.5V12c0 6 8 10 8 10z" />
      <path d="M9 12.2l2.1 2.1L15.2 10" />
    </svg>
  )
}

function IconAward({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.2 13.6L6.5 21.5l5.5-2.8 5.5 2.8-1.7-7.9" />
    </svg>
  )
}

function IconDroplet({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.7c3.1 3.7 5.6 6.6 5.6 9.5a5.6 5.6 0 0 1-11.2 0c0-2.9 2.5-5.8 5.6-9.5z" />
    </svg>
  )
}

function IconHeater({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="7" y="4" width="10" height="15" rx="3" />
      <path d="M12 4V2" />
      <path d="M10 21h4" />
      <path d="M12 15.5c-1.3-1.3-1.3-2.6 0-3.9 1.3 1.3 1.3 2.6 0 3.9z" />
    </svg>
  )
}

function IconDrain({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 7.5c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M3 12.5c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M3 17.5c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    </svg>
  )
}

function IconZap({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2L3.5 14H10l-1 8 9.5-12H12l1-8z" />
    </svg>
  )
}

function IconWrench({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.3 12.3l2.5 2.5 5-5.6" />
    </svg>
  )
}

function IconStar({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function IconPin({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 12.5-9 12.5S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconArrowDown({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="M6 13l6 6 6-6" />
    </svg>
  )
}

function IconQuote({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.5 5.5C6.4 7 4.6 9.6 4.6 13v5.5h6.2V12H7.6c.1-1.6 1-2.9 2.9-4l-1-2.5zm9 0C15.4 7 13.6 9.6 13.6 13v5.5h6.2V12h-3.2c.1-1.6 1-2.9 2.9-4l-1-2.5z" />
    </svg>
  )
}

function IconCheck({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6.5L9.2 17.3 4.5 12.6" />
    </svg>
  )
}

const SERVICE_ICONS: Record<string, ComponentType<IconProps>> = {
  droplet: IconDroplet,
  heater: IconHeater,
  drain: IconDrain,
  zap: IconZap,
  wrench: IconWrench,
}

const TRUST_ITEMS: { icon: ComponentType<IconProps>; title: string; sub: string }[] = [
  { icon: IconShield, title: 'Licensed & Insured', sub: 'Master Plumber' },
  { icon: IconAward, title: '18+ Years Local', sub: 'Hancock County' },
  { icon: IconStar, title: '4.9 ★ · 95+ Reviews', sub: 'Google, BBB & Angi' },
  { icon: IconClock, title: 'Same-Day Service', sub: 'Under 60-min response' },
]

const WHY_US = [
  {
    icon: IconClock,
    title: 'Upfront pricing, zero surprise fees',
    copy: 'You hear the price and approve it before we start. Free estimates on major replacements.',
  },
  {
    icon: IconDroplet,
    title: 'Real slab leak detection',
    copy: 'We locate the leak with detection equipment instead of guessing — and repair it with the least damage to your home.',
  },
  {
    icon: IconShield,
    title: '100% satisfaction guarantee',
    copy: 'Hancock County has trusted us for 18+ years. If the work is not right, we come back and make it right.',
  },
]

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#service-area', label: 'Service Area' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#request', label: 'Request Service' },
]

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* FAQ structured data, generated from the same source as the visible FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ---------------- Minimal sticky header ---------------- */}
      <header
        id="top"
        className="sticky top-0 z-40 border-b border-slate-200 bg-white/92 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      >
        <div className="container-tight flex h-14 items-center justify-between gap-3">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-royal-900 text-brass-300">
              <IconDroplet className="h-5 w-5" />
            </span>
            <span className="truncate text-[13px] font-extrabold leading-tight text-royal-950 sm:text-sm">
              Bay Area Plumbing &amp; Drain
            </span>
          </a>

          <nav aria-label="Sections" className="hidden items-center gap-5 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-royal-800"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={BUSINESS.phoneTel}
            className="btn-royal hidden shrink-0 px-3.5 py-2 text-sm md:inline-flex"
          >
            <IconPhone className="h-4 w-4" />
            <span>{BUSINESS.phoneDisplay}</span>
          </a>
          <a
            href="#request"
            className="btn-royal shrink-0 px-3 py-2 text-[13px] md:hidden"
            aria-label="Request service"
          >
            Request Service
          </a>
        </div>
      </header>

      <main>
        {/* ---------------- HERO: call reachable without scrolling ---------------- */}
        <section className="relative isolate overflow-hidden bg-royal-900" aria-labelledby="hero-heading">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-32 h-80 bg-royal-600/30 blur-3xl"
          />
          <div className="container-tight relative pb-8 pt-6 sm:pb-14 sm:pt-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="pill bg-brass-400 text-royal-950">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-royal-900 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-royal-900" />
                </span>
                {BUSINESS.emergencyBadge}
              </span>
              <span className="pill bg-white/10 text-white ring-1 ring-inset ring-white/25">
                {BUSINESS.license}
              </span>
            </div>

            <h1
              id="hero-heading"
              className="mt-4 text-[30px] font-black leading-[1.08] tracking-tight text-white sm:text-5xl"
            >
              Emergency Plumber in <span className="text-brass-300">Bay St. Louis, MS</span>
            </h1>

            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-royal-100 sm:text-lg">
              {BUSINESS.valueProp}
            </p>

            {/* Primary CTA — single action, huge tap target, above the fold */}
            <div className="mt-5">
              <a
                href={BUSINESS.phoneTel}
                data-cta="hero-call"
                className="btn-brass w-full px-4 py-4 text-lg sm:text-xl"
              >
                <IconPhone className="h-6 w-6 shrink-0" />
                <span>Call Now: {BUSINESS.phoneDisplay}</span>
              </a>
              <p className="mt-2 text-center text-[12px] font-semibold text-royal-100 sm:text-sm">
                Tap to call — a real person answers 24/7. Avg. local response: under 60 minutes.
              </p>
            </div>

            {/* Secondary CTA — for people who will not call yet */}
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
              <a href="#request" data-cta="hero-form" className="btn-ghost-light w-full px-4 py-3 text-sm sm:w-auto">
                <span>Prefer not to call? Request service</span>
                <IconArrowDown className="h-4 w-4 shrink-0" />
              </a>
              <a
                href="#services"
                className="text-center text-[13px] font-semibold text-royal-200 underline decoration-brass-400 decoration-2 underline-offset-4 sm:text-left"
              >
                See what we fix
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- Trust bar directly under hero ---------------- */}
        <section aria-label="Credentials and reviews" className="border-b border-slate-200 bg-white">
          <div className="container-tight grid grid-cols-2 gap-x-3 gap-y-4 py-5 sm:grid-cols-4">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title} className="flex items-start gap-2.5">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-royal-700" />
                <div className="min-w-0">
                  <p className="text-[13px] font-extrabold leading-tight text-royal-950 sm:text-sm">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-500 sm:text-xs">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Services ---------------- */}
        <section id="services" className="section bg-white" aria-labelledby="services-heading">
          <div className="container-tight">
            <p className="eyebrow">What we fix</p>
            <h2 id="services-heading" className="h2 mt-1.5">
              Whatever is leaking, backing up, or not heating — we handle it
            </h2>
            <p className="body-copy mt-2 max-w-2xl">
              Five things we do every week in Hancock County. If your problem is not listed, call
              anyway — we will tell you straight whether it is a job for us.
            </p>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => {
                const Icon = SERVICE_ICONS[service.icon] ?? IconWrench
                return (
                  <li key={service.title} className="card flex flex-col">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brass-100 text-brass-700">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-3 text-lg font-black leading-tight text-royal-950">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-slate-600">
                      {service.blurb}
                    </p>
                    <a
                      href={BUSINESS.phoneTel}
                      data-cta="service-call"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-royal-800 underline decoration-brass-400 decoration-2 underline-offset-4"
                    >
                      <IconPhone className="h-4 w-4" />
                      Call about this
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {WHY_US.map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-royal-50 p-4">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-royal-700" />
                  <div>
                    <p className="text-[14px] font-extrabold leading-tight text-royal-950">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-snug text-slate-600">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Service area ---------------- */}
        <section
          id="service-area"
          className="section border-y border-slate-200 bg-royal-50"
          aria-labelledby="area-heading"
        >
          <div className="container-tight">
            <p className="eyebrow">Where we work</p>
            <h2 id="area-heading" className="h2 mt-1.5">
              Serving {SERVICE_AREA.headline} — including the cities below
            </h2>
            <p className="body-copy mt-2 max-w-2xl">
              We are local, not a call center routing you to a subcontractor three counties away.
              That is why same-day service is normal for us, and why we can often be at your door
              within the hour.
            </p>

            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICE_AREA.cities.map((entry) => (
                <li
                  key={entry.city}
                  className="flex items-center gap-3 rounded-xl border border-royal-100 bg-white px-3.5 py-3"
                >
                  <IconPin className="h-5 w-5 shrink-0 text-brass-600" />
                  <span className="min-w-0">
                    <span className="block text-[15px] font-extrabold leading-tight text-royal-950">
                      {entry.city}
                    </span>
                    <span className="block text-[12px] font-semibold text-slate-500">
                      ZIP {entry.zips}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-2xl border border-royal-200 bg-white p-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
              <p className="text-[14px] font-semibold text-slate-700">
                Not sure if you are in range? Call and ask — we will tell you straight.
              </p>
              <a href={BUSINESS.phoneTel} className="btn-royal mt-3 w-full text-sm sm:mt-0 sm:w-auto">
                <IconPhone className="h-4 w-4" />
                <span>Call {BUSINESS.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- Testimonials ---------------- */}
        <section id="reviews" className="section bg-white" aria-labelledby="reviews-heading">
          <div className="container-tight">
            <p className="eyebrow">Neighbors, not strangers</p>
            <h2 id="reviews-heading" className="h2 mt-1.5">
              {BUSINESS.rating} stars from {BUSINESS.reviewCount}+ reviews
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <span className="flex gap-0.5 text-brass-500" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </span>
              <span className="text-[13px] font-semibold text-slate-500">
                Rated on Google, BBB, and Angi
              </span>
            </div>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {TESTIMONIALS.map((review) => (
                <li key={review.name} className="card flex flex-col">
                  <IconQuote className="h-6 w-6 text-brass-300" />
                  <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-700">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-4 border-t border-slate-100 pt-3">
                    <p className="text-[14px] font-extrabold text-royal-950">{review.name}</p>
                    <p className="text-[12px] font-semibold text-slate-500">{review.city}, MS</p>
                  </footer>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-[13px] text-slate-500">
              Google, BBB, and Angi reviewers mention the same things over and over: same-day
              turnaround, no surprise costs, and jobs other plumbers could not finish.
            </p>
          </div>
        </section>

        {/* ---------------- Request service (secondary CTA) ---------------- */}
        <section
          id="request"
          className="section relative isolate overflow-hidden bg-royal-950"
          aria-labelledby="request-heading"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-royal-700/40 blur-3xl"
          />
          <div className="container-tight relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
              <div>
                <p className="eyebrow text-brass-300">Not ready to call?</p>
                <h2 id="request-heading" className="h2 mt-1.5 text-white">
                  Send us the details and we will call you back
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-royal-100 sm:text-base">
                  Tell us what is going on and how urgent it is. No account, no waiting on hold, no
                  obligation — you get a straight answer and an upfront price.
                </p>

                <ul className="mt-5 space-y-2.5">
                  {[
                    'Emergency requests get called back first',
                    'Free estimates on major replacements',
                    'Upfront pricing before any work starts',
                    BUSINESS.emergencyHours,
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2.5 text-[14px] text-royal-100">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brass-300" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 hidden rounded-2xl border border-white/15 bg-white/5 p-4 lg:block">
                  <p className="text-[13px] font-bold uppercase tracking-wide text-brass-300">
                    Water actively running right now?
                  </p>
                  <p className="mt-1 text-[14px] text-royal-100">
                    Do not wait on a form. Call and we will walk you through shutting off the water
                    before we arrive.
                  </p>
                  <a
                    href={BUSINESS.phoneTel}
                    data-cta="form-section-call"
                    className="btn-brass mt-3 w-full px-4 py-3.5 text-base"
                  >
                    <IconPhone className="h-5 w-5" />
                    <span>Call Now: {BUSINESS.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              <RequestForm />
            </div>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section id="faq" className="section bg-white" aria-labelledby="faq-heading">
          <div className="container-tight">
            <p className="eyebrow">Before you call</p>
            <h2 id="faq-heading" className="h2 mt-1.5">
              Straight answers to the questions everyone asks
            </h2>

            <div className="mt-5 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200">
              {FAQS.map((faq, index) => (
                <details key={faq.q} className="group bg-white open:bg-royal-50/60" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-4 py-4 text-[15px] font-extrabold leading-snug text-royal-950 marker:hidden">
                    <span>{faq.q}</span>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-royal-100 text-royal-800 transition-transform duration-200 group-open:rotate-180"
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-[14px] leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            <p className="mt-4 text-[13px] text-slate-500">
              Still unsure? Call{' '}
              <a href={BUSINESS.phoneTel} className="font-bold text-royal-800 underline">
                {BUSINESS.phoneDisplay}
              </a>{' '}
              — questions are free, and we will tell you if you do not need a plumber at all.
            </p>
          </div>
        </section>

        {/* ---------------- Final CTA ---------------- */}
        <section className="bg-royal-900 pb-10 pt-9 sm:pb-14 sm:pt-12" aria-labelledby="final-heading">
          <div className="container-tight text-center">
            <h2 id="final-heading" className="h2 text-white">
              Water where it should not be? Let&rsquo;s stop it.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-[15px] leading-relaxed text-royal-100">
              Licensed &amp; insured master plumber, 18+ years in Hancock County, 100% satisfaction
              guarantee. Answered nights, weekends, and holidays.
            </p>
            <a
              href={BUSINESS.phoneTel}
              data-cta="final-call"
              className="btn-brass mt-5 w-full px-4 py-4 text-lg sm:text-xl"
            >
              <IconPhone className="h-6 w-6 shrink-0" />
              <span>Call Now: {BUSINESS.phoneDisplay}</span>
            </a>
            <a
              href="#request"
              className="btn-ghost-light mt-3 w-full px-4 py-3 text-sm sm:w-auto"
            >
              Or request service online
            </a>
          </div>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="bg-royal-950 pb-8 pt-9 text-royal-100">
        <div className="container-tight grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-base font-black text-white">{BUSINESS.name}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-royal-200">
              Emergency plumbing and drain service for homes across Hancock County, Mississippi.
              Same-day turnaround, upfront pricing, and work backed by a 100% satisfaction
              guarantee.
            </p>
          </div>

          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-wide text-brass-300">
              Call or request service
            </p>
            <a href={BUSINESS.phoneTel} className="mt-2 block text-xl font-black text-white">
              {BUSINESS.phoneDisplay}
            </a>
            <p className="mt-3 text-[14px] text-royal-200">
              <span className="font-bold text-white">Office:</span> {BUSINESS.regularHours}
            </p>
            <p className="text-[14px] text-royal-200">
              <span className="font-bold text-white">Emergency:</span> {BUSINESS.emergencyHours}
            </p>
            <p className="mt-2 text-[13px] text-royal-300">{BUSINESS.license}</p>
          </div>

          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-wide text-brass-300">
              Service area
            </p>
            <ul className="mt-2 space-y-1 text-[14px] text-royal-200">
              {SERVICE_AREA.cities.map((entry) => (
                <li key={entry.city}>
                  {entry.city}, MS <span className="text-royal-400">{entry.zips}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container-tight mt-8 border-t border-white/10 pt-5 text-[12px] text-royal-300">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="mt-1">
            Serving {SERVICE_AREA.headline} · Bay St. Louis · Waveland · Pass Christian ·
            Diamondhead · Kiln · Pearlington
          </p>
        </div>
      </footer>

      {/* ---------------- Sticky call bar (always on screen) ---------------- */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50">
        <div className="pointer-events-auto bg-gradient-to-t from-white via-white/95 to-white/70 px-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur">
          <a
            href={BUSINESS.phoneTel}
            data-cta="sticky-call"
            className="btn-brass mx-auto flex w-full max-w-md px-4 py-3.5 text-base sm:text-lg"
          >
            <IconPhone className="h-5 w-5 shrink-0" />
            <span>Call Now: {BUSINESS.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </>
  )
}
