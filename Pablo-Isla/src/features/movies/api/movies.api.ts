import { omdbClient } from "@/api/omdb"
import type {
  Movie,
  OmdbDetail,
  OmdbSearchResponse,
} from "@/features/movies/types/movie"

// OMDb no tiene endpoint de "populares", así que usamos una búsqueda fija como cartelera.
const CARTELERA_SEARCH_TERM = "batman"

function normalizePoster(poster: string | undefined): string | null {
  return poster && poster !== "N/A" ? poster : null
}

// Obtiene la lista de películas para la cartelera.
export async function getPopularMovies(): Promise<Movie[]> {
  const { data } = await omdbClient.get<OmdbSearchResponse>("/", {
    params: { s: CARTELERA_SEARCH_TERM, type: "movie" },
  })

  if (data.Response === "False" || !data.Search) return []

  return data.Search.map((item) => ({
    id: item.imdbID,
    title: item.Title,
    overview: "",
    poster_path: normalizePoster(item.Poster),
    backdrop_path: normalizePoster(item.Poster),
    release_date: item.Year,
    vote_average: 0,
  }))
}

// Obtiene el detalle completo de una película por su imdbID.
export async function getMovieById(id: string): Promise<Movie> {
  const { data } = await omdbClient.get<OmdbDetail>("/", {
    params: { i: id, plot: "full" },
  })

  return {
    id: data.imdbID,
    title: data.Title,
    overview: data.Plot,
    poster_path: normalizePoster(data.Poster),
    backdrop_path: normalizePoster(data.Poster),
    release_date: data.Year,
    vote_average: Number(data.imdbRating) || 0,
  }
}
