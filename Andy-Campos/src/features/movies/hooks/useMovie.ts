import { useQuery } from "@tanstack/react-query"
import { getMovieById } from "@/features/movies/api/movies.api"

// Hook que obtiene el detalle de una película por su id.
export function useMovie(id: number) {
  return useQuery({
    queryKey: ["movies", id],
    queryFn: () => getMovieById(id),
    enabled: !Number.isNaN(id), // solo ejecuta si el id es válido
  })
}