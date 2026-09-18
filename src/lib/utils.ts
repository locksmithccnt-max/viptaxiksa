import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Build a WhatsApp message URL with a structured, pre-filled booking message. */
export function buildWAUrl(waNumber: string, fields: Record<string, string | undefined>): string {
  const lines = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `*${k}:* ${v}`)
    .join('\n')
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(lines)}`
}

/** Format a raw E.164 phone number for display: +966539720003 → +966 53 972 0003 */
export function formatPhone(raw: string): string {
  return raw.replace(/(\+966)(\d{2})(\d{3})(\d{4})$/, '$1 $2 $3 $4')
}

/** Clamp a number between min and max. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/** Convert a UTC ISO date string to a human-readable "Month YYYY" label. */
export function formatMonthYear(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
}
