import axios from "axios"

// Cliente Axios preconfigurado para la API de OMDb.
// Centraliza la URL base y la API key para no repetirlas en cada petición.
export const omdbClient = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: import.meta.env.VITE_OMDB_API_KEY,
  },
})
