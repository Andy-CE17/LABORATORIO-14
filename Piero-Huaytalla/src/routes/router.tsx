import { createBrowserRouter } from "react-router-dom"
import HomePage from "@/pages/home-page"
import MoviesPage from "@/pages/movies-page"
import MovieDetailPage from "@/pages/movie-detail-page"

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies", element: <MoviesPage /> },
      { path: "movies/:id", element: <MovieDetailPage /> },
    ],
  },
])
