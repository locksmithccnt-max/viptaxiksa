'use client'

type GtagFn = (command: string, ...args: unknown[]) => void

declare global {
  interface Window {
    gtag?: GtagFn
    dataLayer?: unknown[]
  }
}

type TrackEvent =
  | { name: 'click_whatsapp'; route?: string }
  | { name: 'click_call'; route?: string }
  | { name: 'submit_quote'; route?: string }
  | { name: 'open_quote_widget'; route?: string }
  | { name: 'view_route'; route: string }
  | { name: 'click_directions' }

/** Thin wrapper around gtag. Silently no-ops if GA is not loaded. */
export function track(event: TrackEvent) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  const { name, ...params } = event
  window.gtag('event', name, params)
}
