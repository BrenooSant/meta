import { Card } from '../../components/ui/Card'
import type { Court } from './courtService'

export function CourtCard({ court }: { court: Court }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold">{court.name}</h3>
      <p className="text-gray-600">Esporte: {court.sport}</p>
    </Card>
  )
}
