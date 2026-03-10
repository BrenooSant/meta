import { useParams } from "react-router-dom"

export default function Court() {
  const { id } = useParams()

  return <div>Quadra {id}</div>
}