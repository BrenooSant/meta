import { useParams } from 'react-router-dom'

export function CourtDetails() {
  const { id } = useParams()

  return (
    <div>
      <h1>Quadra {id}</h1>
    </div>
  )
}