import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { getMovies } from "@/services/movie-service"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default function MoviesPage() {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Cartelera</h1>
        <p className="text-muted-foreground">
          Todas las películas disponibles en CineSpoilerS
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[2/3] animate-pulse rounded-xl bg-muted"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {movies?.map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <Card className="group overflow-hidden border-transparent transition-colors hover:border-primary/50">
                <CardContent className="p-0">
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <img
                      src={movie.posterUrl}
                      alt={movie.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1 bg-background/80 backdrop-blur-sm"
                      >
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                        {movie.rating}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-1 p-3">
                    <h3 className="truncate text-sm font-semibold">
                      {movie.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{movie.genre}</span>
                      <span className="font-semibold text-foreground">
                        S/ {movie.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
