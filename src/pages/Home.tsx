import { CourtCard } from '../features/courts/CourtCard'

const courtImage =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'

const courts = Array.from({ length: 4 }, (_, index) => ({
  id: `${index + 1}`,
  name: 'Quadra 02',
  image_url: courtImage,
  price: 60,
  sports: ['Beach Tennis', 'Vôlei'],
}))

export function Home() {
  return (
    <section className="space-y-5">
      <section className="space-y-3 w-50%">
      <h1 className="text-2xl font-bold font-montserrat">
        <span className="block text-[#181918] px-2 py-1">
          Eai bora,
        </span>

        <span className="block gradient-background text-white px-1 py-1 max-w-80">
          marcar o play de hoje?
        </span>
      </h1>
      <span className="text-[#181918] text-sm">
        ver localização.
      </span>
      </section>

      <div className="bg-white rounded-2xl px-6">
        {courts.map((court) => (
          <CourtCard key={court.id} court={court} />
        ))}
      </div>
    </section>
  )
}
