import { useMovies } from "@/features/movies/hooks/useMovies"

export function MoviesPage() {
  const { data: movies, isLoading, isError } = useMovies()

  if (isLoading) return <p>Cargando películas...</p>
  if (isError) return <p>Error al cargar las películas.</p>

  return (
    <div>
      <h1 className="text-3xl font-bold">Movies</h1>
      <ul className="mt-4 list-disc pl-6">
        {movies?.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}