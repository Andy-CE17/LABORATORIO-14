import { tmdbClient } from "@/api/tmdb"
import type { Movie, MoviesResponse } from "@/features/movies/types/movie"

// Obtiene la lista de películas populares.
export async function getPopularMovies(): Promise<Movie[]> {
  const { data } = await tmdbClient.get<MoviesResponse>("/movie/popular")
  return data.results
}

// Obtiene el detalle de una película por su id.
export async function getMovieById(id: number): Promise<Movie> {
  const { data } = await tmdbClient.get<Movie>(`/movie/${id}`)
  return data
}