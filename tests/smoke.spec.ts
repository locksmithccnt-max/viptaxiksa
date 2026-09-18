import { test, expect } from '@playwright/test'

const CRITICAL_PAGES = [
  { path: '/', name: 'Home' },
  { path: '/jeddah-airport-to-makkah-taxi/', name: 'Jeddah Airport to Makkah' },
  { path: '/makkah-to-madinah-taxi/', name: 'Makkah to Madinah' },
  { path: '/makkah-ziyarah-tour/', name: 'Makkah Ziyarah Tour' },
  { path: '/airport-transfers-umrah-hajj/', name: 'Umrah Airport Transfers' },
  { path: '/fleet/', name: 'Fleet' },
  { path: '/about-us/', name: 'About' },
  { path: '/contact/', name: 'Contact' },
  { path: '/faq/', name: 'FAQ' },
  { path: '/reviews/', name: 'Reviews' },
  { path: '/blog/', name: 'Blog' },
  { path: '/blog/jeddah-airport-to-makkah-guide/', name: 'Blog Post' },
  { path: '/privacy-policy/', name: 'Privacy Policy' },
]

for (const page of CRITICAL_PAGES) {
  test(`${page.name} (${page.path}) — loads with correct status`, async ({ page: p }) => {
    const response = await p.goto(page.path)
    expect(response?.status()).toBe(200)
  })

  test(`${page.name} — has exactly one H1`, async ({ page: p }) => {
    await p.goto(page.path)
    const h1s = await p.locator('h1').count()
    expect(h1s).toBe(1)
  })
}

test('Homepage — QuoteWidget is present', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('#quote-widget')).toBeVisible()
})

test('Homepage — Book on WhatsApp button exists', async ({ page }) => {
  await page.goto('/')
  const waBtn = page.locator('button:has-text("Book on WhatsApp")').first()
  await expect(waBtn).toBeVisible()
})

test('QuoteWidget — disables submit until route is selected', async ({ page }) => {
  await page.goto('/')
  const submitBtn = page.locator('#quote-widget button[type="submit"]')
  await expect(submitBtn).toBeDisabled()
})

test('QuoteWidget — enables submit after route selection', async ({ page }) => {
  await page.goto('/')
  await page.locator('#qw-route').selectOption('makkah-to-madinah-taxi')
  const submitBtn = page.locator('#quote-widget button[type="submit"]')
  await expect(submitBtn).toBeEnabled()
})

test('FAQ page — accordion items expand on click', async ({ page }) => {
  await page.goto('/faq/')
  const firstSummary = page.locator('details summary').first()
  await firstSummary.click()
  const firstDetails = page.locator('details').first()
  await expect(firstDetails).toHaveAttribute('open', '')
})

test('Route page — JSON-LD is present and valid', async ({ page }) => {
  await page.goto('/makkah-to-madinah-taxi/')
  const jsonLd = await page.locator('script[type="application/ld+json"]').first().textContent()
  expect(() => JSON.parse(jsonLd ?? '')).not.toThrow()
})

test('410 handler — WordPress paths return 410', async ({ page }) => {
  const response = await page.goto('/wp-login.php')
  expect(response?.status()).toBe(410)
})

test('Sitemap — returns XML', async ({ page }) => {
  const response = await page.goto('/sitemap.xml')
  expect(response?.status()).toBe(200)
  const contentType = response?.headers()['content-type'] ?? ''
  expect(contentType).toContain('xml')
})

test('Robots — accessible', async ({ page }) => {
  const response = await page.goto('/robots.txt')
  expect(response?.status()).toBe(200)
})

test('RSS feed — returns XML', async ({ page }) => {
  const response = await page.goto('/feed.xml/')
  expect(response?.status()).toBe(200)
  const contentType = response?.headers()['content-type'] ?? ''
  expect(contentType).toContain('xml')
})

test('Skip link — present on homepage', async ({ page }) => {
  await page.goto('/')
  const skipLink = page.locator('.skip-link')
  await expect(skipLink).toHaveAttribute('href', '#main-content')
})

test('Main content — has id="main-content"', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('#main-content')).toBeVisible()
})
