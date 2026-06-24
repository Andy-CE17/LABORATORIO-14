import { useParams } from "react-router-dom"

export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <h1 className="text-4xl font-bold">Detalle de Película #{id}</h1>
    </div>
  )
}
