import { CourtCard } from '../features/courts/CourtCard'
import { getCourts } from '../features/courts/courtService'

export function Courts() {
  const courts = getCourts()

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold font-montserrat">Quadras</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {courts.map((court) => (
          <CourtCard key={court.id} court={court} />
        ))}
      </div>
    </section>
  )
}
