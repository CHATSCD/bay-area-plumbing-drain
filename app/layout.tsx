import type { Metadata, Viewport } from 'next'
import './globals.css'
import { BUSINESS, SITE_URL, localBusinessSchema } from '@/lib/business'

/** Local SEO primary target: "Emergency Plumber Bay St. Louis, MS" */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Emergency Plumber Bay St. Louis, MS | 24/7 Plumbing & Drain',
    template: '%s | Bay Area Plumbing & Drain',
  },
  description:
    '24/7 emergency plumber in Bay St. Louis, MS. Slab leaks, water heaters, main line drains and burst pipes fixed fast across Hancock County. Licensed & insured, 18+ years, 4.9★ from 95+ reviews. Call (228) 467-9618.',
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  category: 'Plumbing',
  keywords: [
    'emergency plumber Bay St. Louis MS',
    'plumber near me Hancock County',
    '24 hour plumber Mississippi Gulf Coast',
    'slab leak repair Bay St. Louis',
    'water heater replacement Pass Christian',
    'main line drain clearing Waveland MS',
    'emergency leak repair Bay St. Louis',
    'licensed plumber Hancock County Mississippi',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: BUSINESS.name,
    locale: 'en_US',
    title: 'Emergency Plumber in Bay St. Louis, MS — Answered 24/7',
    description:
      'Slab leaks, water heaters, and backed-up main lines fixed fast across Hancock County. Under 60-minute local response, upfront pricing, 4.9★ from 95+ reviews. Tap to call (228) 467-9618.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Plumber Bay St. Louis, MS | Bay Area Plumbing & Drain',
    description:
      '24/7 emergency plumbing in Bay St. Louis, Waveland & Pass Christian. Upfront pricing, same-day turnaround. Call (228) 467-9618.',
  },
  formatDetection: { telephone: true, address: true, email: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#1b2789',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white font-sans antialiased">
        <script
          type="application/ld+json"
          // LocalBusiness (Plumber) schema: NAP, hours, service area, rating, reviews, service catalog
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
