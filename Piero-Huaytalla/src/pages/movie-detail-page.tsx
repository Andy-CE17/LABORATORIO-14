import { useParams, Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getMovieById } from "@/services/movie-service"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Clock, Calendar, ArrowLeft } from "lucide-react"

export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>()

  const { data: movie, isLoading } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(Number(id)),
    enabled: !!id,
  })

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-[400px] animate-pulse rounded-xl bg-muted" />
        <div className="h-8 w-1/3 animate-pulse rounded bg-muted" />
        <div className="h-20 w-2/3 animate-pulse rounded bg-muted" />
      </div>
    )
  }

  if (!movie) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Película no encontrada</h1>
        <Button asChild variant="outline">
          <Link to="/movies">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a cartelera
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Button asChild variant="ghost" size="sm">
        <Link to="/movies">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a cartelera
        </Link>
      </Button>

      <div className="relative overflow-hidden rounded-xl">
        <img
          src={movie.backdropUrl}
          alt={movie.title}
          className="h-[300px] w-full object-cover md:h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="-mt-32 relative z-10 w-48 rounded-xl border border-border shadow-lg md:-mt-40 md:w-56"
        />

        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">{movie.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Badge variant="secondary">{movie.genre}</Badge>
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                {movie.rating}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {movie.year}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {movie.duration}
              </span>
            </div>
          </div>

          <Separator />

          <p className="leading-relaxed text-muted-foreground">
            {movie.overview}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">
              S/ {movie.price.toFixed(2)}
            </span>
            <Button size="lg">Comprar tickets</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
