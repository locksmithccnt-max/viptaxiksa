import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false },
}

const helpfulLinks = [
  { href: '/', label: 'Home' },
  { href: '/jeddah-airport-to-makkah-taxi/', label: 'Jeddah Airport → Makkah' },
  { href: '/makkah-to-madinah-taxi/', label: 'Makkah → Madinah' },
  { href: '/madinah-to-makkah-taxi/', label: 'Madinah → Makkah' },
  { href: '/airport-transfers-for-umrah-hajj-pilgrims/', label: 'Umrah & Hajj Transfers' },
  { href: '/contact/', label: 'Contact us' },
]

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-24"
      style={{ background: 'var(--color-bg)' }}
    >
      <p
        className="font-display text-[8rem] leading-none font-bold"
        style={{ color: 'var(--color-gold)', opacity: 0.2 }}
        aria-hidden
      >
        404
      </p>

      <h1
        className="font-display mt-4 text-center text-3xl font-semibold"
        style={{ color: 'var(--color-text)' }}
      >
        Page not found
      </h1>

      <p className="mt-3 max-w-sm text-center" style={{ color: 'var(--color-muted)' }}>
        The page you are looking for has moved or does not exist. Here are some useful links:
      </p>

      <nav aria-label="Helpful links" className="mt-8">
        <ul className="flex flex-col items-center gap-3">
          {helpfulLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-base font-medium transition-colors"
                style={{ color: 'var(--color-gold)' }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 flex gap-4">
        <a
          href="tel:+966573067785"
          className="rounded-lg px-6 py-3 font-semibold transition-all"
          style={{
            background: 'var(--color-surface-2)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text)',
          }}
        >
          Call us
        </a>
        <a
          href="https://wa.me/966573067785"
          className="rounded-lg px-6 py-3 font-semibold transition-all"
          style={{
            background: 'var(--color-wa)',
            color: '#000',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </main>
  )
}
