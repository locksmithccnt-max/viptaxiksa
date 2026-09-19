import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { site } from '@/config/site'

export const runtime = 'nodejs'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') ?? site.name
  const sub = searchParams.get('sub') ?? site.tagline

  return new ImageResponse(
    <div
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '60px',
        background: '#050505',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Gold accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: '#c9a24b',
        }}
      />

      {/* Rating badge */}
      <div
        style={{
          position: 'absolute',
          top: '48px',
          right: '60px',
          background: '#0d0d0d',
          border: '1px solid #262626',
          borderRadius: '12px',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ color: '#c9a24b', fontSize: '20px' }}>★</span>
        <span style={{ color: '#f5f5f4', fontSize: '16px', fontWeight: '600' }}>
          {site.rating.value} on Google
        </span>
      </div>

      {/* Brand name */}
      <div style={{ color: '#c9a24b', fontSize: '18px', marginBottom: '16px', fontWeight: '600' }}>
        {site.name.toUpperCase()}
      </div>

      {/* Main title */}
      <div
        style={{
          color: '#f5f5f4',
          fontSize: title.length > 60 ? '42px' : '52px',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '20px',
          maxWidth: '900px',
        }}
      >
        {title}
      </div>

      {/* Subheading */}
      <div style={{ color: '#a8a29e', fontSize: '22px', maxWidth: '800px' }}>{sub}</div>

      {/* WhatsApp cta */}
      <div
        style={{
          marginTop: '36px',
          background: '#25d366',
          borderRadius: '10px',
          padding: '14px 28px',
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
        }}
      >
        <span style={{ color: '#000', fontWeight: '700', fontSize: '18px' }}>
          Book on WhatsApp — {site.phonePretty}
        </span>
      </div>
    </div>,
    { width: 1200, height: 630 },
  )
}
