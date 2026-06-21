import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "@/components/layout/RootLayout"
import { HomePage } from "@/pages/HomePage"
import { MoviesPage } from "@/pages/MoviesPage"
import { MovieDetailPage } from "@/pages/MovieDetailPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies", element: <MoviesPage /> },
      { path: "movies/:id", element: <MovieDetailPage /> },
    ],
  },
])