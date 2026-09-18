export interface Review {
  id: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
  text: string
  /** Route or service this review relates to, if identifiable */
  routeHint?: string
  source: 'google'
  /** Approximate date of review (month/year) */
  dateApprox?: string
}
