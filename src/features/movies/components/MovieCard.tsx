import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Movie } from "@/features/movies/types/movie"

// URL base de las imágenes de TMDB. El "w500" es el ancho del póster.
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="overflow-hidden border-border bg-card transition-transform hover:scale-105">
      <div className="aspect-[2/3] overflow-hidden bg-muted">
        {movie.poster_path ? (
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Sin imagen
          </div>
        )}
      </div>
      <CardContent className="p-3">
        <h3 className="truncate font-medium" title={movie.title}>
          {movie.title}
        </h3>
        <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
          {movie.vote_average.toFixed(1)}
        </div>
      </CardContent>
    </Card>
  )
}