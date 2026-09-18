import nextConfig from 'eslint-config-next'

const baseConfig = Array.isArray(nextConfig) ? nextConfig : [nextConfig]

/** @type {import('eslint').Linter.Config[]} */
const config = [
  ...baseConfig,
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'public/**',
      'playwright-report/**',
      'test-results/**',
    ],
  },
]

export default config
