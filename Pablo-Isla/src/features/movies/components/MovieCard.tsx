import { Star, Calendar } from "lucide-react"
import type { Movie } from "@/features/movies/types/movie"
import { Link } from "react-router-dom"

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={`/movies/${movie.id}`} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-card shadow-md shadow-black/20 ring-1 ring-border/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/40 group-hover:ring-border">
        <div className="aspect-[2/3] overflow-hidden">
          {movie.poster_path ? (
            <img
              src={movie.poster_path}
              alt={movie.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-muted text-sm text-muted-foreground">
              Sin imagen
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-sm font-semibold leading-tight text-white">
              {movie.title}
            </h3>
            <div className="mt-1.5 flex items-center gap-1.5 text-xs text-white/80">
              {movie.vote_average > 0 ? (
                <>
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  {movie.vote_average.toFixed(1)}
                </>
              ) : (
                <>
                  <Calendar className="h-3.5 w-3.5" />
                  {movie.release_date}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
