// Forma normalizada de una película que usa la app (mapeada desde OMDb).
export interface Movie {
  id: string // imdbID, p.ej. "tt3896198"
  title: string
  overview: string
  poster_path: string | null // OMDb ya entrega la URL completa del póster
  backdrop_path: string | null // OMDb no provee backdrop; reutilizamos el póster
  release_date: string
  vote_average: number
}

// Forma cruda que devuelve OMDb al buscar por título (?s=).
export interface OmdbSearchItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface OmdbSearchResponse {
  Search?: OmdbSearchItem[]
  totalResults?: string
  Response: "True" | "False"
}

// Forma cruda que devuelve OMDb al buscar por id (?i=).
export interface OmdbDetail {
  Title: string
  Year: string
  Plot: string
  Poster: string
  imdbRating: string
  imdbID: string
  Response: "True" | "False"
}
