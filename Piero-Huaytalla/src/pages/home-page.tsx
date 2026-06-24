import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { getMovies } from "@/services/movie-service"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star } from "lucide-react"

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-xl">
      <div className="absolute inset-0">
        <img
          src="https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
          alt="Hero backdrop"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="relative flex min-h-[400px] flex-col justify-center gap-4 p-8 md:max-w-xl md:p-12">
        <Badge variant="secondary" className="w-fit">
          En cartelera
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Dune: Part Two
        </h1>
        <p className="text-muted-foreground">
          Paul Atreides se une a los Fremen mientras busca venganza contra
          quienes destruyeron a su familia.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <Link to="/movies/1">Comprar tickets</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/movies">Ver cartelera</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function MovieGrid() {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  })

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[2/3] animate-pulse rounded-xl bg-muted"
          />
        ))}
      </div>
    )
  }

  return (
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
  )
}

export default function HomePage() {
  return (
    <div className="space-y-8">
      <HeroSection />

      <Separator />

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Películas en cartelera</h2>
          <Button variant="ghost" asChild>
            <Link to="/movies">Ver todas →</Link>
          </Button>
        </div>
        <MovieGrid />
      </section>
    </div>
  )
}
