import Link from 'next/link'
import { site } from '@/config/site'
import { MobileMenuToggle } from './MobileMenu'

const navLinks = [
  { href: '/services/', label: 'Services' },
  { href: '/fleet/', label: 'Fleet' },
  { href: '/about-us/', label: 'About' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/contact/', label: 'Contact' },
]

export function Header() {
  return (
    <header
      className="sticky top-0 z-30 w-full"
      style={{
        background: 'rgba(5, 5, 5, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label="VIP Taxi Service KSA — home"
        >
          {/* Inline SVG wordmark */}
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
            <rect width="32" height="32" rx="6" fill="#050505" />
            <path
              d="M6 8 L16 24 L26 8"
              stroke="var(--color-gold)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="16" cy="26" r="2" fill="var(--color-gold)" />
          </svg>
          <span
            className="font-display hidden text-lg font-semibold sm:block"
            style={{ color: 'var(--color-text)' }}
          >
            VIP Taxi <span style={{ color: 'var(--color-gold)' }}>KSA</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-[--color-gold]"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-medium transition-colors hover:text-[--color-gold]"
            style={{ color: 'var(--color-muted)' }}
          >
            {site.phonePretty}
          </a>
          <a
            href={site.whatsapp}
            className="inline-flex min-h-[40px] items-center gap-2 rounded-[10px] px-5 py-2 text-sm font-semibold text-black transition-all hover:opacity-90"
            style={{ background: 'var(--color-wa)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger — client island */}
        <MobileMenuToggle />
      </div>
    </header>
  )
}
