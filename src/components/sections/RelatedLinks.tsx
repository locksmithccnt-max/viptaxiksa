import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface RelatedLink {
  href: string
  label: string
  description?: string
}

interface RelatedLinksProps {
  heading?: string
  links: RelatedLink[]
}

export function RelatedLinks({ heading = 'Related transfers', links }: RelatedLinksProps) {
  return (
    <nav aria-label={heading}>
      <h2
        className="font-display mb-4 text-xl font-semibold"
        style={{ color: 'var(--color-text)' }}
      >
        {heading}
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex items-center justify-between gap-3 rounded-lg px-4 py-3 transition-all duration-200"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div>
                <span
                  className="block text-sm font-medium transition-colors group-hover:text-[--color-gold]"
                  style={{ color: 'var(--color-text)' }}
                >
                  {link.label}
                </span>
                {link.description && (
                  <span className="mt-0.5 block text-xs" style={{ color: 'var(--color-muted)' }}>
                    {link.description}
                  </span>
                )}
              </div>
              <ArrowRight
                className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                style={{ color: 'var(--color-gold)' }}
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
