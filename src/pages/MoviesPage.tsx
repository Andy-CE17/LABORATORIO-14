import { MovieCard } from "@/features/movies/components/MovieCard"
import { useMovies } from "@/features/movies/hooks/useMovies"

export function MoviesPage() {
  const { data: movies, isLoading, isError } = useMovies()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Cartelera
        </h1>
        <p className="mt-2 text-muted-foreground">
          Las películas más populares del momento
        </p>
      </div>

      {isLoading && (
        <p className="text-muted-foreground">Cargando películas...</p>
      )}
      {isError && (
        <p className="text-destructive">Error al cargar las películas.</p>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
