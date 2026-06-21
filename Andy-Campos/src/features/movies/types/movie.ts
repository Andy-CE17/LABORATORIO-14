// Forma de una película según la API de TMDB (campos que usaremos).
export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  vote_average: number
}

// La API de TMDB envuelve las listas en un objeto con paginación.
export interface MoviesResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}