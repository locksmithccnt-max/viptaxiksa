'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { site } from '@/config/site'

type ConsentState = 'granted' | 'denied' | null

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void
  }
}

function pushConsent(analytics: 'granted' | 'denied') {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('consent', 'update', {
    analytics_storage: analytics,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}

export function ConsentBanner() {
  const [state, setState] = useState<ConsentState>(null)
  // visible: initially false (SSR-safe), set after mount reads localStorage
  const [visible, setVisible] = useState(false)
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    const stored = localStorage.getItem('consent') as ConsentState
    if (stored) {
      pushConsent(stored)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState(stored)
    } else {
      setVisible(true)
    }
  }, [])

  if (!site.ga4Id || state !== null || !visible) return null

  const accept = () => {
    localStorage.setItem('consent', 'granted')
    setState('granted')
    pushConsent('granted')
    setVisible(false)
  }

  const deny = () => {
    localStorage.setItem('consent', 'denied')
    setState('denied')
    pushConsent('denied')
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed right-4 bottom-20 left-4 z-50 rounded-xl p-4 shadow-xl sm:right-4 sm:bottom-4 sm:left-auto sm:max-w-sm md:right-6 md:bottom-6"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        We use Google Analytics to understand how visitors use this site. No personal data is shared
        with third parties.{' '}
        <Link href="/privacy-policy/" className="underline" style={{ color: 'var(--color-gold)' }}>
          Privacy policy
        </Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={accept}
          className="flex-1 rounded-lg py-2.5 text-sm font-semibold text-black transition-all"
          style={{ background: 'var(--color-gold)', minHeight: '44px' }}
        >
          Accept
        </button>
        <button
          type="button"
          onClick={deny}
          className="flex-1 rounded-lg py-2.5 text-sm font-medium transition-all"
          style={{
            background: 'var(--color-surface-2)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-muted)',
            minHeight: '44px',
          }}
        >
          Decline
        </button>
      </div>
    </div>
  )
}
