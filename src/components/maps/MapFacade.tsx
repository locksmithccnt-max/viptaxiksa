'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { site } from '@/config/site'
import { track } from '@/lib/track'

interface MapFacadeProps {
  label?: string
  height?: number
}

export function MapFacade({
  label = 'View our service area on Google Maps',
  height = 300,
}: MapFacadeProps) {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <div style={{ height, borderRadius: '12px', overflow: 'hidden' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.5!2d39.826168!3d21.422510!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b71b5be4f3%3A0x7c5c7c3c3c3c3c3c!2sMakkah!5e0!3m2!1sen!2ssa!4v1000000000000"
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="VIP Taxi Service KSA service area map"
        />
      </div>
    )
  }

  return (
    <div
      className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl transition-colors hover:border-[--color-gold]"
      style={{
        height,
        background: 'var(--color-surface-2)',
        border: '1px solid var(--color-border)',
      }}
      onClick={() => {
        track({ name: 'click_directions' })
        setLoaded(true)
      }}
      role="button"
      tabIndex={0}
      aria-label={label}
      onKeyDown={(e) => e.key === 'Enter' && setLoaded(true)}
    >
      <MapPin className="h-8 w-8" style={{ color: 'var(--color-gold)' }} aria-hidden />
      <p className="text-sm font-medium" style={{ color: 'var(--color-muted)' }}>
        {label}
      </p>
      <a
        href={site.gbpUrl.startsWith('TODO') ? '#' : site.gbpUrl}
        className="text-xs underline"
        style={{ color: 'var(--color-gold)' }}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        Open in Google Maps →
      </a>
    </div>
  )
}
