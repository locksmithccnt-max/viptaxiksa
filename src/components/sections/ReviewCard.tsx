import type { Review } from '@/types/review'
import { Star } from 'lucide-react'

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article
      className="flex flex-col gap-3 rounded-xl p-5"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        minWidth: '280px',
        maxWidth: '360px',
      }}
    >
      <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className="h-4 w-4"
            style={{ color: i < review.rating ? 'var(--color-gold)' : 'var(--color-border)' }}
            fill={i < review.rating ? 'var(--color-gold)' : 'none'}
            aria-hidden
          />
        ))}
      </div>

      <blockquote className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        &ldquo;{review.text}&rdquo;
      </blockquote>

      <footer className="flex items-center justify-between">
        <cite className="text-sm font-medium not-italic" style={{ color: 'var(--color-text)' }}>
          — {review.author}
        </cite>
        {review.routeHint && (
          <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
            {review.routeHint}
          </span>
        )}
      </footer>
    </article>
  )
}
