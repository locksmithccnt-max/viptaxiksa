export interface FaqItem {
  question: string
  answer: string
}

export interface RouteData {
  slug: string
  title: string
  h1: string
  /** Meta description 140–160 chars */
  metaDescription?: string
  /** 40–60 word direct answer for AnswerBox / AI extraction */
  answerBoxText: string
  description: string
  fromCity: string
  toCity: string
  /** km — 0 for tours that start and end in same city */
  distanceKm: number
  /** Drive time range in minutes */
  durationMin: [number, number]
  highlights: string[]
  faqs: FaqItem[]
  relatedSlugs: string[]
  updatedAt: string
}

export interface ServiceData {
  slug: string
  title: string
  h1: string
  metaDescription?: string
  answerBoxText: string
  description: string
  serviceType: string
  highlights: string[]
  faqs: FaqItem[]
  updatedAt: string
}

export type PageData = RouteData | ServiceData
