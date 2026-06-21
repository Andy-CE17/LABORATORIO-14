import { useQuery } from "@tanstack/react-query"
import { getPopularMovies } from "@/features/movies/api/movies.api"

// Hook que obtiene las películas populares usando TanStack Query.
export function useMovies() {
  return useQuery({
    queryKey: ["movies", "popular"],
    queryFn: getPopularMovies,
  })
}