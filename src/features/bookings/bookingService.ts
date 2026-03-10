export type Booking = {
  id: number
  date: string
  court: string
}

export function getBookings(): Booking[] {
  return [
    { id: 1, date: '2026-03-12 19:00', court: 'Quadra A' },
    { id: 2, date: '2026-03-13 18:00', court: 'Quadra B' },
  ]
}
