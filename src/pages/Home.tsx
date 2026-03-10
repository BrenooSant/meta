import { CourtCard } from "../features/courts/CourtCard";

export function Home() {
  return (
    <><section className="space-y-3 w-50%">
      <h1 className="text-2xl font-bold font-montserrat">
        <span className="block text-[#181918] px-2 py-1">
          Eai bora,
        </span>

        <span className="block gradient-background text-white px-1 py-1">
          marcar o play de hoje?
        </span>
      </h1>
      <span className="block text-[gradient-background] px-1 py-1">
        ver localização
      </span>
    </section><CourtCard
        court={{
          id: "1",
          name: "Quadra 01",
          image_url: "/quadra.jpg",
          price: 60,
          sports: ["Beach Tennis", "Vôlei", "Futvôlei"]
        }} /></>
  )
}