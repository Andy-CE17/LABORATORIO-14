import { movies } from "@/data/movies"
import type { Movie } from "@/types/movie"

export async function getMovies(): Promise<Movie[]> {
  return movies
}

export async function getMovieById(id: number): Promise<Movie | undefined> {
  return movies.find((movie) => movie.id === id)
}
