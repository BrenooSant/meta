import { useNavigate } from "react-router-dom"

type Court = {
  id: string
  name: string
  image_url: string
  price: number
  sports: string[]
}

export function CourtCard({ court }: { court: Court }) {
  const navigate = useNavigate()

  function handlePress() {
    navigate(`/court/${court.id}`)
  }

  return (
    <div
      onClick={handlePress}
      className="flex items-center justify-between py-6 border-b border-zinc-200 cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <img
          src={court.image_url}
          alt={court.name}
          className="w-20 h-20 rounded-xl object-cover"
        />

        <div>
          <h2 className="text-lg font-semibold">{court.name}</h2>

          <div className="text-sm text-zinc-500 mt-2 space-y-1">
            {court.sports.map((sport) => (
              <p key={sport}>⚽ {sport}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="border border-zinc-400 rounded-xl px-4 py-2 text-sm font-semibold">
        R${court.price},00
      </div>
    </div>
  )
}