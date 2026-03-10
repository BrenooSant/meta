export type Court = {
  id: number
  name: string
  sport: string
}

export function getCourts(): Court[] {
  return [
    { id: 1, name: 'Quadra A', sport: 'Futebol' },
    { id: 2, name: 'Quadra B', sport: 'Vôlei' },
  ]
}
