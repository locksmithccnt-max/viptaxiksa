import type { Metadata } from 'next'
import { site } from '@/config/site'
import { Hero } from '@/components/sections/Hero'
import { CTASection } from '@/components/sections/CTASection'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description: `Book or enquire via WhatsApp: ${site.phonePretty}. VIP Taxi Service KSA — private transfers between Makkah, Madinah and Jeddah.`,
  alternates: { canonical: `${site.url}/contact/` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${site.url}/contact/` },
      ],
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero
        h1="Contact VIP Taxi Service KSA"
        subheading="The fastest way to book or get a quote is WhatsApp. We typically respond within minutes."
      />
      <div className="mx-auto max-w-2xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact' }]} />

        <div
          className="space-y-8 rounded-2xl p-6 sm:p-8"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          {/* WhatsApp */}
          <div>
            <h2
              className="font-display mb-2 text-lg font-semibold"
              style={{ color: 'var(--color-text)' }}
            >
              WhatsApp (recommended)
            </h2>
            <p className="mb-4 text-sm" style={{ color: 'var(--color-muted)' }}>
              Send your route, date, passengers, and luggage details. We reply quickly and confirm
              everything in writing.
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center gap-3 rounded-[10px] px-6 py-3 font-semibold text-black transition-all"
              style={{ background: 'var(--color-wa)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Phone */}
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
            <h2
              className="font-display mb-2 text-lg font-semibold"
              style={{ color: 'var(--color-text)' }}
            >
              Phone
            </h2>
            <p className="mb-3 text-sm" style={{ color: 'var(--color-muted)' }}>
              Same number as WhatsApp. Call us directly if you prefer a voice call.
            </p>
            <a
              href={site.phoneHref}
              className="text-lg font-semibold underline"
              style={{ color: 'var(--color-gold)' }}
            >
              {site.phonePretty}
            </a>
          </div>

          {/* Service area */}
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
            <h2
              className="font-display mb-2 text-lg font-semibold"
              style={{ color: 'var(--color-text)' }}
            >
              Service area
            </h2>
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
              Makkah · Madinah · Jeddah · Jeddah Airport (KAIA) · Madinah Airport (AMAA)
            </p>
          </div>
        </div>

        <CTASection />
      </div>
    </>
  )
}
