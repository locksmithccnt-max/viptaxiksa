import Link from 'next/link'
import { ArrowRight, Clock, MapPin } from 'lucide-react'

interface RouteCardProps {
  slug: string
  title: string
  fromCity: string
  toCity: string
  approxDurationMin?: [number, number]
  description?: string
}

export function RouteCard({
  slug,
  title,
  fromCity,
  toCity,
  approxDurationMin,
  description,
}: RouteCardProps) {
  const durationText = approxDurationMin
    ? `${approxDurationMin[0]}–${approxDurationMin[1]} min`
    : null

  return (
    <Link
      href={`/${slug}/`}
      className="group flex flex-col gap-4 rounded-xl p-5 transition-all duration-200"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span>
              {fromCity} <ArrowRight className="inline h-3 w-3" aria-hidden /> {toCity}
            </span>
          </div>
          <h3
            className="font-display text-base leading-tight font-semibold transition-colors group-hover:text-[--color-gold]"
            style={{ color: 'var(--color-text)' }}
          >
            {title}
          </h3>
        </div>
        {durationText && (
          <div
            className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs"
            style={{
              background: 'var(--color-surface-2)',
              color: 'var(--color-muted)',
              border: '1px solid var(--color-border)',
            }}
          >
            <Clock className="h-3 w-3" aria-hidden />
            <span>~{durationText}</span>
          </div>
        )}
      </div>

      {description && (
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          {description}
        </p>
      )}

      <span
        className="flex items-center gap-1 text-sm font-medium transition-colors group-hover:text-[--color-gold-hi]"
        style={{ color: 'var(--color-gold)' }}
      >
        Book this route{' '}
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  )
}
