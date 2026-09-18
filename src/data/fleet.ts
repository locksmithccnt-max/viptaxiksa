export interface VehicleData {
  id: string
  name: string
  model: string
  seats: number
  largeLuggage: number
  smallLuggage: number
  bestFor: string
  enabled: boolean
}

export const FLEET: VehicleData[] = [
  {
    id: 'sedan',
    name: 'Economy Sedan',
    model: 'Toyota Camry or similar',
    seats: 3,
    largeLuggage: 3,
    smallLuggage: 3,
    bestFor: 'Couples and solo travellers with standard luggage.',
    enabled: true,
  },
  {
    id: 'suv',
    name: 'Standard SUV',
    model: 'Toyota Land Cruiser or similar',
    seats: 6,
    largeLuggage: 4,
    smallLuggage: 4,
    bestFor: 'Small families and travellers with extra luggage.',
    enabled: true,
  },
  {
    id: 'minivan',
    name: 'Family Minivan',
    model: 'Toyota Hiace or similar',
    seats: 7,
    largeLuggage: 6,
    smallLuggage: 6,
    bestFor: 'Families with young children and heavy luggage.',
    enabled: true,
  },
  {
    id: 'minibus',
    name: 'Group Minibus',
    model: 'Toyota Coaster or similar',
    seats: 14,
    largeLuggage: 10,
    smallLuggage: 10,
    bestFor: 'Umrah and Hajj groups, corporate delegations.',
    enabled: true,
  },
]

export function getVehicleById(id: string): VehicleData | undefined {
  return FLEET.find((v) => v.id === id)
}
