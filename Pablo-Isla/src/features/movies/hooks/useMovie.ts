import { useQuery } from "@tanstack/react-query"
import { getMovieById } from "@/features/movies/api/movies.api"

// Hook que obtiene el detalle de una película por su imdbID.
export function useMovie(id: string | undefined) {
  return useQuery({
    queryKey: ["movies", id],
    queryFn: () => getMovieById(id as string),
    enabled: Boolean(id), // solo ejecuta si hay un id
  })
}
