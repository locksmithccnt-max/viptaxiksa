export interface RouteData {
  slug: string
  title: string
  h1: string
  metaDescription: string
  /** 40–60 word direct answer for answer-box / AI extraction */
  answerBox: string
  fromCity: string
  toCity: string
  /** Approximate distance range in km, marked as approximate */
  approxDistanceKm: [number, number]
  /** Approximate drive time range in minutes, marked as approximate */
  approxDurationMin: [number, number]
  reverseSlug: string
  relatedSlugs: string[]
  enabled: boolean
  updatedAt: string // ISO date string
  faq: Array<{ question: string; answer: string }>
}

export interface ServiceData {
  slug: string
  title: string
  h1: string
  metaDescription: string
  answerBox: string
  serviceType: string
  enabled: boolean
  updatedAt: string
  faq: Array<{ question: string; answer: string }>
}

export type PageData = RouteData | ServiceData
