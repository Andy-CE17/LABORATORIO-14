import axios from "axios"

// Cliente Axios preconfigurado para la API de TMDB.
// Centraliza la URL base y la API key para no repetirlas en cada petición.
export const tmdbClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "es-ES", // pedimos los datos en español
  },
})