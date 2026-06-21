import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Star, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useMovie } from "@/features/movies/hooks/useMovie"

export function MovieDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { data: movie, isLoading, isError } = useMovie(id)

  if (isLoading)
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">Cargando detalle...</p>
      </div>
    )
  if (isError || !movie)
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-destructive">No se encontró la película.</p>
      </div>
    )

  return (
    <div>
      {/* BACKDROP BANNER */}
      <div className="relative -mx-4 -mt-8 overflow-hidden">
        {movie.backdrop_path && (
          <img
            src={movie.backdrop_path}
            alt=""
            className="h-[24rem] w-full object-cover sm:h-[28rem] md:h-[32rem]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="absolute left-4 top-4 z-10">
          <Button asChild variant="secondary" size="sm" className="gap-1.5 shadow-lg">
            <Link to="/movies">
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Link>
          </Button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto -mt-32 max-w-6xl px-4 sm:-mt-40">
        <div className="grid gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">
          {/* POSTER */}
          <div className="relative">
            <img
              src={movie.poster_path ?? undefined}
              alt={movie.title}
              className="w-full rounded-xl shadow-2xl shadow-black/50 ring-1 ring-border/50"
            />
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-end space-y-5 pb-2">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              {movie.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="secondary"
                className="gap-1 text-sm"
              >
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                {movie.vote_average.toFixed(1)}
              </Badge>

              {movie.release_date && (
                <Badge variant="outline" className="gap-1 text-sm">
                  <Calendar className="h-3.5 w-3.5" />
                  {movie.release_date}
                </Badge>
              )}
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {movie.overview || "Sin sinopsis disponible."}
            </p>

            <div>
              <Button size="lg" className="mt-2">
                Comprar entrada
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
