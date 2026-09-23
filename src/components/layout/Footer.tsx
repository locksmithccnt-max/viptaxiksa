import Link from 'next/link'
import { site } from '@/config/site'

const serviceLinks = [
  { href: '/jeddah-airport-to-makkah-taxi/', label: 'Jeddah Airport → Makkah' },
  { href: '/makkah-to-jeddah-airport-taxi/', label: 'Makkah → Jeddah Airport' },
  { href: '/makkah-to-madinah-taxi/', label: 'Makkah → Madinah' },
  { href: '/madinah-to-makkah-taxi/', label: 'Madinah → Makkah' },
  { href: '/makkah-ziyarah-tour/', label: 'Makkah Ziyarah Tour' },
  { href: '/madinah-ziyarah-tour/', label: 'Madinah Ziyarah Tour' },
  { href: '/makkah-to-jeddah-sightseeing-tour/', label: 'Makkah–Jeddah Sightseeing' },
  { href: '/limousine-service-saudi-arabia/', label: 'Limousine Service' },
  { href: '/airport-transfers-for-umrah-hajj-pilgrims/', label: 'Umrah & Hajj Transfers' },
]

const infoLinks = [
  { href: '/fleet/', label: 'Our Fleet' },
  { href: '/about-us/', label: 'About Us' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
  { href: '/blog/', label: 'Guides & Tips' },
]

const legalLinks = [
  { href: '/privacy-policy/', label: 'Privacy Policy' },
  { href: '/terms/', label: 'Terms' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + NAP */}
          <address className="not-italic">
            <Link
              href="/"
              className="font-display block text-xl font-semibold"
              style={{ color: 'var(--color-gold)' }}
            >
              VIP Taxi KSA
            </Link>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Private taxi and limousine transfers between Makkah, Madinah and Jeddah for pilgrims,
              families, and tourists.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={site.phoneHref}
                className="text-sm font-medium transition-colors hover:text-[--color-gold]"
                style={{ color: 'var(--color-text)' }}
              >
                {site.phonePretty}
              </a>
              <a
                href={site.whatsapp}
                className="text-sm font-medium transition-colors hover:text-[--color-wa]"
                style={{ color: 'var(--color-text)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </address>

          {/* Services */}
          <nav aria-label="Services">
            <h3
              className="mb-4 text-xs font-semibold tracking-wider uppercase"
              style={{ color: 'var(--color-muted)' }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-[--color-gold]"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Info */}
          <nav aria-label="Information">
            <h3
              className="mb-4 text-xs font-semibold tracking-wider uppercase"
              style={{ color: 'var(--color-muted)' }}
            >
              Information
            </h3>
            <ul className="flex flex-col gap-2">
              {infoLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-[--color-gold]"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coverage */}
          <div>
            <h3
              className="mb-4 text-xs font-semibold tracking-wider uppercase"
              style={{ color: 'var(--color-muted)' }}
            >
              Service Area
            </h3>
            <ul className="flex flex-col gap-1 text-sm" style={{ color: 'var(--color-muted)' }}>
              <li>Makkah (مكة المكرمة)</li>
              <li>Madinah (المدينة المنورة)</li>
              <li>Jeddah (جدة)</li>
              <li>KAIA — King Abdulaziz International Airport</li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-xs"
          style={{
            borderColor: 'var(--color-border)',
            color: 'var(--color-muted)',
          }}
        >
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <nav aria-label="Legal" className="flex gap-4">
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="transition-colors hover:text-[--color-gold]"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <span style={{ color: 'var(--color-border)' }}>|</span>
            <a
              href="https://razacheena.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[--color-gold]"
              style={{ color: 'var(--color-muted)' }}
            >
              Managed by razacheena.com
            </a>
            <span style={{ color: 'var(--color-border)' }}>|</span>
            <a
              href="https://www.taxibhai.com"
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-[--color-gold]"
              style={{ color: 'var(--color-muted)' }}
            >
              Taxi Bhai
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
