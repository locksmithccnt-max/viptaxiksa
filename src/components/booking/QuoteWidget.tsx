'use client'

import React, { useState, useEffect, useRef } from 'react'
import { site } from '@/config/site'
import { buildWAUrl } from '@/lib/utils'
import { track } from '@/lib/track'

const ROUTES = [
  { value: 'jeddah-airport-to-makkah', label: 'Jeddah Airport → Makkah' },
  { value: 'makkah-to-jeddah-airport', label: 'Makkah → Jeddah Airport' },
  { value: 'makkah-to-madinah', label: 'Makkah → Madinah' },
  { value: 'madinah-to-makkah', label: 'Madinah → Makkah' },
  { value: 'makkah-ziyarah', label: 'Makkah Ziyarah Tour' },
  { value: 'madinah-ziyarah', label: 'Madinah Ziyarah Tour' },
  { value: 'makkah-to-jeddah-sightseeing', label: 'Makkah → Jeddah Sightseeing' },
  { value: 'airport-transfers-umrah-hajj', label: 'Umrah / Hajj Airport Transfer' },
  { value: 'limousine', label: 'Limousine Service' },
]

interface QuoteWidgetProps {
  /** Pre-select a route when embedded on a route page */
  prefilledRoute?: string
}

function getSourceTag(): string {
  if (typeof window === 'undefined') return ''
  const params = new URLSearchParams(window.location.search)
  if (params.get('gclid')) return 'google-ads'
  if (params.get('fbclid')) return 'facebook-ad'
  if (params.get('utm_source')) return params.get('utm_source') ?? 'direct'
  const ref = document.referrer
  if (ref.includes('google')) return 'google-organic'
  if (ref.includes('instagram')) return 'instagram'
  if (ref.includes('whatsapp')) return 'whatsapp-share'
  return 'direct'
}

const inputStyle = {
  background: 'var(--color-surface-2)',
  border: '1px solid var(--color-border)',
  borderRadius: '8px',
  color: 'var(--color-text)',
  padding: '0.625rem 0.875rem',
  width: '100%',
  fontSize: '0.9375rem',
  outline: 'none',
}

const labelStyle = {
  fontSize: '0.8125rem',
  fontWeight: '500',
  color: 'var(--color-muted)',
  marginBottom: '0.375rem',
  display: 'block',
}

export function QuoteWidget({ prefilledRoute }: QuoteWidgetProps) {
  const [route, setRoute] = useState(prefilledRoute ?? '')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [passengers, setPassengers] = useState('1')
  const [largeBags, setLargeBags] = useState('0')
  const [smallBags, setSmallBags] = useState('0')
  const [vehicleClass, setVehicleClass] = useState('')
  const [name, setName] = useState('')
  // sourceRef: read-only browser API, no render cycle needed
  const sourceRef = useRef('')

  useEffect(() => {
    sourceRef.current = getSourceTag()
    track({ name: 'open_quote_widget', route: prefilledRoute })
  }, [prefilledRoute])

  const routeLabel = ROUTES.find((r) => r.value === route)?.label ?? ''

  const isValid = route.length > 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return
    const waUrl = buildWAUrl(site.whatsappNumber, {
      '*VIP Taxi Service KSA — Booking Request*\n\nRoute': routeLabel || undefined,
      Date: date || undefined,
      Time: time || undefined,
      Passengers: passengers !== '1' || route ? passengers : undefined,
      Luggage:
        largeBags !== '0' || smallBags !== '0'
          ? `${largeBags} large, ${smallBags} small`
          : undefined,
      'Vehicle class': vehicleClass || undefined,
      Name: name || undefined,
      '': sourceRef.current ? `[src:${sourceRef.current}]` : undefined,
    })
    track({ name: 'submit_quote', route })
    window.open(waUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      id="quote-widget"
      className="rounded-xl p-5 md:p-6"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      <h2
        className="font-display mb-5 text-lg font-semibold"
        style={{ color: 'var(--color-text)' }}
      >
        Get an instant quote
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Route */}
        <div className="sm:col-span-2">
          <label htmlFor="qw-route" style={labelStyle}>
            Route{' '}
            <span aria-hidden style={{ color: 'var(--color-danger)' }}>
              *
            </span>
          </label>
          <select
            id="qw-route"
            required
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            style={inputStyle}
            autoComplete="off"
          >
            <option value="">Select your route…</option>
            {ROUTES.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label htmlFor="qw-date" style={labelStyle}>
            Travel date
          </label>
          <input
            id="qw-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            style={inputStyle}
            autoComplete="bday"
            inputMode="numeric"
          />
        </div>

        {/* Time */}
        <div>
          <label htmlFor="qw-time" style={labelStyle}>
            Pickup time
          </label>
          <input
            id="qw-time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Passengers */}
        <div>
          <label htmlFor="qw-pax" style={labelStyle}>
            Passengers
          </label>
          <select
            id="qw-pax"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            style={inputStyle}
          >
            {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'person' : 'people'}
              </option>
            ))}
          </select>
        </div>

        {/* Vehicle class */}
        <div>
          <label htmlFor="qw-vehicle" style={labelStyle}>
            Vehicle class
          </label>
          <select
            id="qw-vehicle"
            value={vehicleClass}
            onChange={(e) => setVehicleClass(e.target.value)}
            style={inputStyle}
          >
            <option value="">Any / let us choose</option>
            <option value="Sedan (up to 3 passengers)">Sedan (up to 3 passengers)</option>
            <option value="SUV (up to 6 passengers)">SUV (up to 6 passengers)</option>
            <option value="Minivan (up to 7 passengers)">Minivan (up to 7 passengers)</option>
            <option value="Minibus (up to 14 passengers)">Minibus (up to 14 passengers)</option>
          </select>
          <p className="mt-1 text-xs" style={{ color: 'var(--color-muted)' }}>
            Selecting a class locks your vehicle — we confirm it in writing.
          </p>
        </div>

        {/* Luggage */}
        <div>
          <label htmlFor="qw-large-bags" style={labelStyle}>
            Large bags (check-in size)
          </label>
          <select
            id="qw-large-bags"
            value={largeBags}
            onChange={(e) => setLargeBags(e.target.value)}
            style={inputStyle}
          >
            {Array.from({ length: 10 }, (_, i) => i).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="qw-small-bags" style={labelStyle}>
            Small bags (carry-on)
          </label>
          <select
            id="qw-small-bags"
            value={smallBags}
            onChange={(e) => setSmallBags(e.target.value)}
            style={inputStyle}
          >
            {Array.from({ length: 10 }, (_, i) => i).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        {/* Name */}
        <div className="sm:col-span-2">
          <label htmlFor="qw-name" style={labelStyle}>
            Your name (optional)
          </label>
          <input
            id="qw-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ahmed"
            style={inputStyle}
            autoComplete="given-name"
            maxLength={60}
          />
        </div>

        {/* Submit */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={!isValid}
            className="flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-[10px] px-6 py-3.5 text-base font-semibold text-black transition-all disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              background: isValid ? 'var(--color-wa)' : 'var(--color-surface-2)',
            }}
          >
            {/* WhatsApp icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Book on WhatsApp
          </button>
          {!isValid && (
            <p className="mt-2 text-center text-xs" style={{ color: 'var(--color-muted)' }}>
              Please select a route to continue
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
