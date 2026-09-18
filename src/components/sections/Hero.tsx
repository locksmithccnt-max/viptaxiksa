import { site } from '@/config/site'
import { Badge } from '@/components/ui/Badge'
import { Star } from 'lucide-react'

interface HeroProps {
  h1: string
  subheading: string
  /** Slot for the QuoteWidget client island */
  children?: React.ReactNode
}

export function Hero({ h1, subheading, children }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 sm:pt-20 lg:px-8"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Subtle radial glow behind the heading */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: headline + trust chips */}
          <div className="flex flex-col gap-6">
            {/* Trust chips */}
            <div className="flex flex-wrap gap-2" role="list" aria-label="Trust indicators">
              <div role="listitem">
                <Badge variant="gold">
                  <Star className="h-3.5 w-3.5" fill="currentColor" aria-hidden />
                  {site.rating.value} on {site.rating.source}
                </Badge>
              </div>
              <div role="listitem">
                <Badge variant="muted">{site.rating.count} reviews</Badge>
              </div>
              <div role="listitem">
                <Badge variant="muted">Hotel-to-hotel</Badge>
              </div>
              <div role="listitem">
                <Badge variant="muted">Makkah · Madinah · Jeddah</Badge>
              </div>
            </div>

            <h1
              className="font-display leading-tight font-semibold text-balance"
              style={{ color: 'var(--color-text)' }}
            >
              {h1}
            </h1>

            <p className="max-w-lg text-lg leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              {subheading}
            </p>

            {/* Desktop CTA buttons (visible on large screens where widget is beside) */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={site.whatsapp}
                className="inline-flex min-h-[52px] items-center gap-2.5 rounded-[10px] px-8 py-3.5 text-base font-semibold text-black transition-all hover:opacity-90"
                style={{ background: 'var(--color-wa)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on WhatsApp
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex min-h-[52px] items-center gap-2.5 rounded-[10px] px-8 py-3.5 text-base font-semibold transition-all"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text)',
                }}
              >
                {site.phonePretty}
              </a>
            </div>
          </div>

          {/* Right: quote widget slot */}
          {children && <div className="w-full">{children}</div>}
        </div>
      </div>
    </section>
  )
}
