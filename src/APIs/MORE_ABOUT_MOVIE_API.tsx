import { useEffect, useState } from "react"
import { MoreAboutMovieInterface } from "../interfaces/MoreAboutMovieInterface"

export function FetchMoreAboutMovie(id: number){
  const [movie, setMovie] = useState<MoreAboutMovieInterface>()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`)
      .then(data => data.json())
      .then(resp => setMovie(resp))

  }, [])

  return movie
}