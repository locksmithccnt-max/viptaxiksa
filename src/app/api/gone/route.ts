/** Returns HTTP 410 Gone for all WordPress/legacy paths mapped in next.config rewrites. */
export async function GET() {
  return new Response(null, { status: 410 })
}
export async function POST() {
  return new Response(null, { status: 410 })
}
export async function HEAD() {
  return new Response(null, { status: 410 })
}
