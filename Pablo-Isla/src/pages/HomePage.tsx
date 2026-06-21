import { Button } from "@/components/ui/button"
import { MovieCard } from "@/features/movies/components/MovieCard"
import { useMovies } from "@/features/movies/hooks/useMovies"
import { Link } from "react-router-dom"
import { Play } from "lucide-react"

export function HomePage() {
  const { data: movies, isLoading, isError } = useMovies()

  const featured = movies?.[0]

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative -mx-4 -mt-8 overflow-hidden sm:-mx-4">
        {featured?.backdrop_path && (
          <img
            src={featured.backdrop_path}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />

        <div className="relative mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-end px-4 pb-12 sm:min-h-[32rem] md:min-h-[36rem]">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Destacado
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {featured?.title ?? "Bienvenido a CineSpoilerS"}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {featured?.overview ??
              "Descubre las películas más populares del momento y reserva tus entradas en segundos."}
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link to={featured ? `/movies/${featured.id}` : "/movies"}>
                <Play className="h-4 w-4" />
                Ver detalles
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/movies">Explorar cartelera</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GRILLA DE PELÍCULAS */}
      <section>
        <h2 className="mb-8 text-2xl font-bold tracking-tight">
          Populares ahora
        </h2>

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
      </section>
    </div>
  )
}
