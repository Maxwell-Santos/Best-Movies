import { useMemo, useState } from "react"
import { MoreAboutMovieInterface } from "../interfaces/MoreAboutMovieInterface"

//Quando clica em Siba mais, no cartaz do filme
export function FetchMoreAboutMovie(id: string | any) {
  const [movie, setMovie] = useState<MoreAboutMovieInterface>()
  const [watchProviders, setWatchProviders] = useState<any>()

  useMemo(async () =>{
    try {
      const fetchMovieData = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`)
      const movieData = await fetchMovieData.json()
      
      const fetchMovieWatchProviders = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${import.meta.env.VITE_API_KEY}`)

      const seila = await fetchMovieWatchProviders.json()

      return {
        movie: setMovie(movieData),
        watch: setWatchProviders(seila)
      }
      
    } catch (err) {
      return alert(err)
    }

  },[id])

  return {movie, watchProviders}
}