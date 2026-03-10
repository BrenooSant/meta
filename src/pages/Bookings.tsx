import { BookingCalendar } from '../features/bookings/BookingCalendar'

export function Bookings() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold font-montserrat">Agendamentos</h1>
      <BookingCalendar />
    </section>
  )
}
