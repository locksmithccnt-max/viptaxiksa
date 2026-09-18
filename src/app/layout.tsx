import type { Metadata, Viewport } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { site } from '@/config/site'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyActionBar } from '@/components/layout/StickyActionBar'
import { ConsentBanner } from '@/components/ui/ConsentBanner'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'VIP Taxi Service KSA — Private Makkah, Madinah & Jeddah Transfers',
    template: '%s | VIP Taxi KSA',
  },
  description:
    'Private taxi and limousine transfers between Makkah, Madinah and Jeddah. Hotel-to-hotel service for Umrah and Hajj pilgrims, families, and tourists. Book via WhatsApp.',
  keywords: [
    'taxi Makkah Madinah',
    'Jeddah airport to Makkah taxi',
    'Makkah to Madinah transfer',
    'private car Umrah',
    'Hajj pilgrims transfer Saudi Arabia',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: 'VIP Taxi Service KSA — Private Makkah, Madinah & Jeddah Transfers',
    description:
      'Private taxi and limousine transfers between Makkah, Madinah and Jeddah. Hotel-to-hotel for pilgrims, families, tourists. 4.8★ on Google.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'VIP Taxi Service KSA — Private Transfers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIP Taxi Service KSA — Private Transfers',
    description: 'Hotel-to-hotel taxi transfers between Makkah, Madinah and Jeddah.',
    images: ['/og-default.png'],
  },
  alternates: {
    canonical: site.url + '/',
  },
  verification: {
    google: site.gscVerification || undefined,
    other: site.bingVerification ? { 'msvalidate.01': site.bingVerification } : {},
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        {/* GA4 Consent Mode v2 — deny by default, updated by ConsentBanner */}
        {site.ga4Id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('consent', 'default', {
                  analytics_storage: 'denied',
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  wait_for_update: 500
                });
                gtag('config', '${site.ga4Id}', { send_page_view: false });
              `}
            </Script>
          </>
        )}

        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <main id="main-content">{children}</main>

        <Footer />

        <StickyActionBar />
        <ConsentBanner />
      </body>
    </html>
  )
}
