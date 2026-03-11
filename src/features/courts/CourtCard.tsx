import { useNavigate } from 'react-router-dom'

export type Court = {
  id: string
  name: string
  image_url: string
  price: number
  sports: string[]
}

type CourtCardProps = {
  court: Court
}

export function CourtCard({ court }: CourtCardProps) {
  const navigate = useNavigate()

  return (
    <article
      onClick={() => navigate(`/courts/${court.id}`)}
      className="flex items-center justify-between py-6 border-b border-zinc-200 cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <img
          src={court.image_url}
          alt={court.name}
          className="w-28 h-28 rounded-2xl object-cover"
        />

        <div>
          <h2 className="text-3xl font-semibold font-montserrat text-[#181918]">
            {court.name}
          </h2>

          <div className="text-xl text-zinc-500 mt-2 space-y-1">
            {court.sports.map((sport) => (
              <p key={sport}>{sport}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="border border-zinc-400 rounded-2xl px-2 py-2 text-sm font-semibold text-[#181918] mt-18">
        R${court.price},00
      </div>
    </article>
  )
}