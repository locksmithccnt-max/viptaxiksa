import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  route: z.string().min(1).max(100),
  date: z.string().optional(),
  time: z.string().optional(),
  passengers: z.string().optional(),
  name: z.string().max(60).optional(),
  // honeypot — bots fill this, humans leave it empty
  website: z.string().max(0).optional(),
})

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const rateMap = new Map<string, { count: number; resetAt: number }>()

function getRateLimitKey(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(key)
  if (!entry || now > entry.resetAt) {
    rateMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count++
  return true
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const key = getRateLimitKey(req)
  if (!checkRateLimit(key)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const result = schema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  const data = result.data

  // Honeypot check
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true })
  }

  // Send email notification via Resend (if configured)
  const resendKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.LEAD_NOTIFY_EMAIL

  if (resendKey && notifyEmail) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'bookings@viptaxiserviceksa.com',
        to: notifyEmail,
        subject: `New lead: ${data.route}`,
        text: [
          `Route: ${data.route}`,
          data.date ? `Date: ${data.date}` : null,
          data.time ? `Time: ${data.time}` : null,
          data.passengers ? `Passengers: ${data.passengers}` : null,
          data.name ? `Name: ${data.name}` : null,
        ]
          .filter(Boolean)
          .join('\n'),
      })
    } catch {
      // Non-fatal — return success to client even if email fails
    }
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}
