'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { site } from '@/config/site'

const navLinks = [
  { href: '/services/', label: 'Services' },
  { href: '/fleet/', label: 'Fleet' },
  { href: '/about-us/', label: 'About' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/contact/', label: 'Contact' },
]

export function MobileMenuToggle() {
  const [open, setOpen] = useState(false)

  // Close on ESC and prevent body scroll when open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden"
        style={{
          background: 'var(--color-surface-2)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text)',
        }}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.7)' }}
            onClick={() => setOpen(false)}
            aria-hidden
          />

          {/* Drawer */}
          <nav
            id="mobile-menu"
            className="fixed top-0 right-0 z-50 flex h-full w-72 flex-col overflow-y-auto"
            style={{ background: 'var(--color-surface)' }}
            aria-label="Mobile navigation"
          >
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <span
                className="font-display text-lg font-semibold"
                style={{ color: 'var(--color-gold)' }}
              >
                VIP Taxi KSA
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ color: 'var(--color-muted)' }}
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <ul className="flex flex-col px-2 py-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-[--color-surface-2] hover:text-[--color-gold]"
                    style={{ color: 'var(--color-text)' }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="mt-auto flex flex-col gap-3 px-4 pt-4 pb-6"
              style={{ borderTop: '1px solid var(--color-border)' }}
            >
              <a
                href={site.whatsapp}
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-semibold text-black"
                style={{ background: 'var(--color-wa)' }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Book on WhatsApp
              </a>
              <a
                href={site.phoneHref}
                className="flex min-h-[48px] items-center justify-center rounded-[10px] px-6 py-3 text-sm font-semibold"
                style={{
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                }}
              >
                {site.phonePretty}
              </a>
            </div>
          </nav>
        </>
      )}
    </>
  )
}
