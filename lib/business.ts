/**
 * Single source of truth for every piece of business info on the page.
 * Change a phone number, city, or FAQ answer here and it updates the UI *and* the schema.
 *
 * NOTE: SITE_URL is a placeholder until the real domain is live — it feeds the
 * canonical URL, Open Graph tags, and the schema `@id`. Update it at launch.
 */
export const SITE_URL = 'https://www.bayareaplumbinganddrain.com'

export const BUSINESS = {
  name: 'Bay Area Plumbing & Drain',
  phoneDisplay: '(228) 467-9618',
  phoneE164: '+12284679618',
  phoneTel: 'tel:+12284679618',
  city: 'Bay St. Louis',
  region: 'MS',
  county: 'Hancock County',
  postalCode: '39520',
  rating: 4.9,
  reviewCount: 95,
  yearsInBusiness: '18+',
  priceRange: '$$',
  license: 'Licensed & Insured Master Plumber',
  regularHours: 'Mon–Fri, 7:30 AM – 5:00 PM',
  emergencyHours: '24/7 emergency line — nights, weekends & holidays',
  responseTime: 'Same-day emergency turnaround, under 60 minutes locally',
  guarantee: '100% satisfaction guarantee',
  valueProp:
    'Slab leaks, water heaters, and main line backups fixed fast across Hancock County — clear upfront pricing, no surprise fees.',
  emergencyBadge: '24/7 Emergency Line',
} as const

export type ServiceIcon = 'droplet' | 'heater' | 'drain' | 'zap' | 'wrench'

/** Services written the way a panicked homeowner talks, not the way a plumber talks. */
export const SERVICES: { title: string; icon: ServiceIcon; blurb: string }[] = [
  {
    title: 'Slab Leak Repair',
    icon: 'droplet',
    blurb:
      'A rising water bill, hot spot on the floor, or damp carpet can mean a leak under your slab. We pinpoint it with leak detection instead of guesswork — then fix it with the least damage to your home.',
  },
  {
    title: 'Water Heater Replacement',
    icon: 'heater',
    blurb:
      'No hot water, or a tank leaking on your floor? We replace traditional and tankless water heaters — usually same day — and you approve the price before we start.',
  },
  {
    title: 'Main Line Drain Clearing',
    icon: 'drain',
    blurb:
      'When every drain backs up at once (or sewage comes up), the clog is in your main line. We clear the line other companies could not and get your house draining again.',
  },
  {
    title: 'Emergency Leak Repair',
    icon: 'zap',
    blurb:
      'Burst pipe, leaking supply line, water you cannot shut off — call any hour. We help you stop the water immediately and repair the leak before it becomes foundation or mold damage.',
  },
  {
    title: 'Faucet & Toilet Installs',
    icon: 'wrench',
    blurb:
      'New faucets, toilets, and shut-off valves installed cleanly and tested for leaks before we leave. Small jobs welcome — no job is too small to do right.',
  },
]

export const SERVICE_AREA = {
  headline: 'Hancock County, Mississippi',
  cities: [
    { city: 'Bay St. Louis', zips: '39520, 39521' },
    { city: 'Waveland', zips: '39576' },
    { city: 'Pass Christian', zips: '39571' },
    { city: 'Diamondhead', zips: '39525' },
    { city: 'Kiln', zips: '39556' },
    { city: 'Pearlington', zips: '39572' },
  ],
}

export const TESTIMONIALS = [
  {
    quote:
      'Our water heater broke and started leaking late on a Tuesday night. Called at 6:30 am, and he was available to come out the same day with no surprise costs.',
    name: 'E.J. S.',
    city: 'Bay St. Louis',
  },
  {
    quote:
      'Terrific professional service. Cleared house line that others failed to fix. Fair price. Should be your first choice.',
    name: 'Greg G.',
    city: 'Pass Christian',
  },
]

/** Answers the objections that stop someone from dialing mid-emergency. */
export const FAQS = [
  {
    q: 'How fast can you get here?',
    a: 'We are local to Hancock County, so same-day service is our standard and emergency calls average under 60 minutes when we are in the area. When you call, we tell you honestly what time we can be there — no inflated promises.',
  },
  {
    q: 'Is the 24/7 line really answered 24/7?',
    a: 'Yes. Call (228) 467-9618 any time — nights, weekends, and holidays. Regular office hours are Mon–Fri 7:30 AM–5:00 PM, but water damage does not keep business hours, so the emergency line is always on.',
  },
  {
    q: 'How much will this cost me?',
    a: 'You get clear, upfront pricing before any work starts, and no surprise fees on the invoice. Free estimates are available on major replacements like water heaters, slab leaks, and repipes.',
  },
  {
    q: 'Do you charge for estimates?',
    a: 'Estimates on major replacements are free. For diagnostic work, we explain exactly what it costs before we come out — so you are never guessing what the visit will run.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — we are a Licensed & Insured Master Plumber and have been serving the Mississippi Gulf Coast for over 18 years. If a permit is required for your job, we handle it.',
  },
  {
    q: 'Can you find a slab leak without tearing up my floor?',
    a: 'In most cases, yes. We use leak detection equipment to locate the break first, then recommend the least-invasive repair — which may be a reroute, a spot repair, or tunneling — instead of opening up the whole floor.',
  },
  {
    q: 'Another plumber could not fix my drain. Can you?',
    a: 'Often, yes. Hard-to-clear main lines and hidden leaks are what we are known for, and we will tell you up front if a problem is outside what we can solve. Work is backed by our 100% satisfaction guarantee.',
  },
]

/* ------------------------------------------------------------------ */
/* schema.org structured data                                          */
/* ------------------------------------------------------------------ */

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const ALL_DAYS = [...WEEKDAYS, 'Saturday', 'Sunday']

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['Plumber', 'LocalBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS.name,
  url: `${SITE_URL}/`,
  telephone: BUSINESS.phoneE164,
  description:
    '24/7 emergency plumbing and drain service in Bay St. Louis, MS. Slab leak repair, water heater replacement, main line drain clearing, emergency leak repair, and fixture installs across Waveland, Pass Christian, and Hancock County.',
  slogan: "Hancock County's trusted local plumber — 100% satisfaction guarantee.",
  priceRange: BUSINESS.priceRange,
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Check, Credit Card',
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: 'US',
  },
  areaServed: [
    ...SERVICE_AREA.cities.map(({ city }) => ({ '@type': 'City', name: city })),
    { '@type': 'AdministrativeArea', name: 'Hancock County, MS' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: WEEKDAYS,
      opens: '07:30',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ALL_DAYS,
      opens: '00:00',
      closes: '23:59',
      description: '24/7 emergency line',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  review: TESTIMONIALS.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    locationCreated: { '@type': 'Place', name: `${t.city}, MS` },
    reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    reviewBody: t.quote,
  })),
  aggregateOffer: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    description: 'Free estimates on major replacements. Upfront pricing before work begins.',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Plumbing & Drain Services',
    itemListElement: SERVICES.map((service, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.blurb,
        areaServed: 'Hancock County, MS',
        provider: { '@id': `${SITE_URL}/#business` },
      },
    })),
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/#request`,
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: { '@type': 'Reservation', name: 'Plumbing service call' },
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}
