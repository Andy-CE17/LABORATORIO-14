import { Button } from "@/components/ui/button"
import { MovieCard } from "@/features/movies/components/MovieCard"
import { useMovies } from "@/features/movies/hooks/useMovies"

export function HomePage() {
  const { data: movies, isLoading, isError } = useMovies()

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="rounded-2xl border border-border bg-card p-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Bienvenido a <span className="text-primary">CineSpoilerS</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Descubre las películas más populares del momento y reserva tus
          entradas en segundos.
        </p>
        <Button className="mt-6" size="lg">
          Explorar cartelera
        </Button>
      </section>

      {/* GRILLA DE PELÍCULAS */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Populares ahora</h2>

        {isLoading && <p className="text-muted-foreground">Cargando películas...</p>}
        {isError && <p className="text-destructive">Error al cargar las películas.</p>}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  )
}