import type { Metadata } from 'next'
import { site } from '@/config/site'

export const metadata: Metadata = {
  title: 'VIP Taxi Service KSA – Private Makkah, Madinah & Jeddah Transfers',
  description:
    'Private taxi and limousine transfers between Makkah, Madinah and Jeddah for Umrah and Hajj pilgrims, families, and tourists. Hotel-to-hotel, 24/7. Book via WhatsApp.',
  alternates: { canonical: `${site.url}/` },
}

/** Home page — Phase 2/3 will replace this stub with full sections. */
export default function HomePage() {
  return (
    <main id="main-content">
      <section
        className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
        style={{ background: 'var(--color-bg)' }}
      >
        <h1
          className="font-display text-4xl font-semibold md:text-6xl"
          style={{ color: 'var(--color-text)' }}
        >
          VIP Taxi Service KSA
        </h1>
        <p className="mt-4 max-w-xl text-lg" style={{ color: 'var(--color-muted)' }}>
          Private transfers between Makkah, Madinah and Jeddah — for Umrah &amp; Hajj pilgrims,
          families, and tourists. Hotel-to-hotel service.
        </p>
        <p className="mt-3 text-sm" style={{ color: 'var(--color-muted)', opacity: 0.6 }}>
          ★ {site.rating.value} on {site.rating.source} · {site.rating.count} reviews
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={site.whatsapp}
            className="rounded-lg px-8 py-4 font-semibold text-black transition-all"
            style={{ background: 'var(--color-wa)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book on WhatsApp
          </a>
          <a
            href={site.phoneHref}
            className="rounded-lg px-8 py-4 font-semibold transition-all"
            style={{
              background: 'var(--color-surface-2)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
          >
            {site.phonePretty}
          </a>
        </div>
      </section>
    </main>
  )
}
