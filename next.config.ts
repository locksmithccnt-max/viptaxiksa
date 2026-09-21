import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self), payment=()',
  },
  {
    // Report-Only CSP — tighten to enforcing once allowlist is confirmed
    key: 'Content-Security-Policy-Report-Only',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com",
      'frame-src https://www.google.com https://maps.google.com',
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  trailingSlash: true,
  turbopack: {
    // Anchor resolver to project root — prevents Turbopack scanning parent dirs for package-lock.json
    root: __dirname,
  },
  poweredByHeader: false,
  compress: true,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },

  async redirects() {
    // Produce both slash variants so trailingSlash config doesn't matter
    const r301 = (src: string, dst: string) => [
      { source: src, destination: dst, permanent: true },
      { source: `${src}/`, destination: dst, permanent: true },
    ]
    return [
      // ── Preserve already-indexed URLs ──────────────────────────────────────
      ...r301('/about', '/about-us/'),

      // ── Old WordPress slugs → new site (preserves GSC ranking equity) ──────
      ...r301('/contact-us', '/contact/'),
      ...r301('/makkah-to-jeddah-taxi', '/makkah-to-jeddah-airport-taxi/'),
      ...r301('/jeddah-to-makkah-taxi-service', '/jeddah-airport-to-makkah-taxi/'),
      ...r301('/jeddah-to-makkah-taxi-2', '/jeddah-airport-to-makkah-taxi/'),
      ...r301('/makkah-ziyarat-taxi', '/makkah-ziyarah-tour/'),
      ...r301('/madinah-ziyarat-taxi', '/madinah-ziyarah-tour/'),
      ...r301('/comfortable-ziyarah-tours-makkah-madinah', '/makkah-ziyarah-tour/'),
      ...r301('/madinah-city-taxi-ziyarah-tours', '/madinah-ziyarah-tour/'),
      ...r301('/vip-ziyarah-taxi-service', '/makkah-ziyarah-tour/'),
      ...r301('/airport-transfers-umrah-hajj-pilgrims-saudi-arabia', '/airport-transfers-umrah-hajj/'),
      ...r301('/airport-transfers-for-umrah-hajj-pilgrims', '/airport-transfers-umrah-hajj/'),
      ...r301('/umrah-hajj-taxi-services-in-jeddah', '/airport-transfers-umrah-hajj/'),
      ...r301('/transportation-services', '/'),
      ...r301('/service', '/'),
      ...r301('/congratulations', '/'),
    ]
  },

  // Rewrite WP/junk paths to the 410 handler
  async rewrites() {
    return [
      { source: '/.lsrecap/:path*', destination: '/api/gone/' },
      { source: '/wp-admin', destination: '/api/gone/' },
      { source: '/wp-admin/:path*', destination: '/api/gone/' },
      { source: '/wp-login.php', destination: '/api/gone/' },
      { source: '/xmlrpc.php', destination: '/api/gone/' },
      { source: '/wp-json/:path*', destination: '/api/gone/' },
      { source: '/wp-content/:path*', destination: '/api/gone/' },
      { source: '/wp-includes/:path*', destination: '/api/gone/' },
      { source: '/author/:path*', destination: '/api/gone/' },
    ]
  },
}

const withMDX = createMDX({})
export default withMDX(nextConfig)
