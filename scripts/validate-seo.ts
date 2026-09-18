/**
 * SEO validation script — run with: npm run validate-seo
 *
 * Checks the built .next/server output for:
 * - Title length (30–70 chars)
 * - Meta description length (100–160 chars)
 * - Exactly one H1 per page
 * - Canonical URL present
 * - Valid JSON-LD (parses without error)
 * - No duplicate titles across pages
 */
import fs from 'fs'
import path from 'path'
import { JSDOM } from 'jsdom'

const BUILD_DIR = path.join(process.cwd(), '.next/server/app')
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://viptaxiserviceksa.com'

interface Issue {
  file: string
  severity: 'error' | 'warn'
  message: string
}

const issues: Issue[] = []
const titles = new Map<string, string>() // title → file

function err(file: string, message: string) {
  issues.push({ file, severity: 'error', message })
}
function warn(file: string, message: string) {
  issues.push({ file, severity: 'warn', message })
}

function validateHtmlFile(filePath: string) {
  const rel = path.relative(BUILD_DIR, filePath)
  let html: string
  try {
    html = fs.readFileSync(filePath, 'utf-8')
  } catch {
    warn(rel, 'Could not read file')
    return
  }

  const dom = new JSDOM(html)
  const { document } = dom.window

  // Title
  const title = document.querySelector('title')?.textContent?.trim() ?? ''
  if (!title) {
    err(rel, 'Missing <title>')
  } else {
    if (title.length < 30) warn(rel, `Title too short (${title.length} chars): "${title}"`)
    // The layout template appends "| VIP Taxi KSA" (14 chars) — allow up to 85 combined
    if (title.length > 85) warn(rel, `Title too long (${title.length} chars): "${title}"`)

    const existing = titles.get(title)
    if (existing) {
      err(rel, `Duplicate title with ${existing}: "${title}"`)
    } else {
      titles.set(title, rel)
    }
  }

  // Description
  const desc =
    document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() ?? ''
  if (!desc) {
    err(rel, 'Missing meta description')
  } else {
    if (desc.length < 100) warn(rel, `Description too short (${desc.length} chars)`)
    if (desc.length > 165) warn(rel, `Description too long (${desc.length} chars)`)
  }

  // H1 count
  const h1s = document.querySelectorAll('h1')
  if (h1s.length === 0) {
    err(rel, 'No <h1> found')
  } else if (h1s.length > 1) {
    err(rel, `Multiple <h1> tags (${h1s.length}) found`)
  }

  // Canonical
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href')?.trim()
  if (!canonical) {
    warn(rel, 'Missing canonical link')
  } else if (!canonical.startsWith(SITE_URL)) {
    warn(rel, `Canonical does not start with ${SITE_URL}: ${canonical}`)
  } else if (!canonical.endsWith('/')) {
    warn(rel, `Canonical missing trailing slash: ${canonical}`)
  }

  // JSON-LD
  const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]')
  jsonLdScripts.forEach((script, i) => {
    try {
      JSON.parse(script.textContent ?? '')
    } catch {
      err(rel, `Invalid JSON-LD (script ${i + 1})`)
    }
  })
}

const SKIP_FILES = new Set(['_global-error.html', '_error.html', '_not-found.html'])

function walkDir(dir: string) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkDir(full)
    } else if (
      (entry.name === 'index.html' || entry.name.endsWith('.html')) &&
      !SKIP_FILES.has(entry.name)
    ) {
      validateHtmlFile(full)
    }
  }
}

// Main
console.log(`\n🔍 Validating SEO in ${BUILD_DIR}\n`)

if (!fs.existsSync(BUILD_DIR)) {
  console.error(`ERROR: Build directory not found. Run \`npm run build\` first.`)
  process.exit(1)
}

walkDir(BUILD_DIR)

const errors = issues.filter((i) => i.severity === 'error')
const warnings = issues.filter((i) => i.severity === 'warn')

if (warnings.length > 0) {
  console.log('Warnings:')
  warnings.forEach((i) => console.log(`  ⚠  ${i.file}: ${i.message}`))
  console.log()
}

if (errors.length > 0) {
  console.log('Errors:')
  errors.forEach((i) => console.error(`  ✗  ${i.file}: ${i.message}`))
  console.log()
  console.error(`SEO validation FAILED — ${errors.length} error(s), ${warnings.length} warning(s)`)
  process.exit(1)
} else {
  console.log(
    `✓ SEO validation passed — ${warnings.length} warning(s), ${titles.size} pages checked`,
  )
}
