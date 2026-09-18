'use client'

import type { Review } from '@/types/review'
import { ReviewCard } from './ReviewCard'

interface ReviewCarouselProps {
  reviews: Review[]
  heading?: string
}

export function ReviewCarousel({ reviews, heading }: ReviewCarouselProps) {
  return (
    <section aria-labelledby={heading ? 'reviews-carousel-heading' : undefined}>
      {heading && (
        <h2
          id="reviews-carousel-heading"
          className="font-display mb-6 text-2xl font-semibold"
          style={{ color: 'var(--color-text)' }}
        >
          {heading}
        </h2>
      )}
      <div
        className="flex gap-4 overflow-x-auto pb-4"
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--color-border) transparent',
          WebkitOverflowScrolling: 'touch',
        }}
        role="list"
        aria-label="Customer reviews"
      >
        {reviews.map((review) => (
          <div key={review.id} role="listitem" style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </section>
  )
}
