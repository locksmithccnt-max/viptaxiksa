export interface VehicleClass {
  id: string
  /** Display name, e.g. "Economy Sedan" */
  name: string
  /** Owner-supplied model(s), e.g. "Toyota Camry" — leave as TODO until confirmed */
  model: string
  seats: number
  largeLuggage: number
  smallLuggage: number
  /** Plain-language best-use summary */
  bestFor: string
  enabled: boolean
}
