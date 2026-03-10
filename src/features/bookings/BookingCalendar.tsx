import { getBookings } from './bookingService'

export function BookingCalendar() {
  const bookings = getBookings()

  return (
    <ul className="space-y-2">
      {bookings.map((booking) => (
        <li key={booking.id} className="rounded-md border border-gray-200 bg-white p-3">
          {booking.date} - {booking.court}
        </li>
      ))}
    </ul>
  )
}
