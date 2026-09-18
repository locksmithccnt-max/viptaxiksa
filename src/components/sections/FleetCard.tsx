import type { VehicleClass } from '@/types/fleet'
import { Briefcase, Users } from 'lucide-react'

interface FleetCardProps {
  vehicle: VehicleClass
  highlighted?: boolean
}

export function FleetCard({ vehicle, highlighted = false }: FleetCardProps) {
  return (
    <div
      className="flex flex-col gap-4 rounded-xl p-5"
      style={{
        background: 'var(--color-surface)',
        border: highlighted ? '1px solid var(--color-gold)' : '1px solid var(--color-border)',
      }}
    >
      {highlighted && (
        <div
          className="self-start rounded-full px-3 py-0.5 text-xs font-semibold"
          style={{ background: 'var(--color-gold)/15', color: 'var(--color-gold)' }}
        >
          Popular
        </div>
      )}

      {/* Placeholder for vehicle image — replace when photos are supplied */}
      <div
        className="flex h-36 items-center justify-center rounded-lg text-4xl"
        style={{ background: 'var(--color-surface-2)', color: 'var(--color-border)' }}
        aria-hidden
      >
        🚗
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
          {vehicle.name}
        </h3>
        {vehicle.model && !vehicle.model.startsWith('TODO') && (
          <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
            {vehicle.model}
          </p>
        )}
      </div>

      <div className="flex gap-4">
        <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--color-muted)' }}>
          <Users className="h-4 w-4 shrink-0" aria-hidden />
          <span>
            <strong style={{ color: 'var(--color-text)' }}>{vehicle.seats}</strong> passengers
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--color-muted)' }}>
          <Briefcase className="h-4 w-4 shrink-0" aria-hidden />
          <span>
            <strong style={{ color: 'var(--color-text)' }}>{vehicle.largeLuggage}</strong> large
            bags
          </span>
        </div>
      </div>

      <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
        {vehicle.bestFor}
      </p>
    </div>
  )
}
