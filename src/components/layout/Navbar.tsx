import { Link } from "react-router-dom"
import { Clapperboard } from "lucide-react"

export function Navbar() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <Clapperboard className="h-5 w-5" />
          CineSpoilerS
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link to="/movies" className="text-muted-foreground hover:text-foreground">
            Movies
          </Link>
        </div>
      </nav>
    </header>
  )
}