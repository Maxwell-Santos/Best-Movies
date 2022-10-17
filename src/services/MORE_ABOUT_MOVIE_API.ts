import { useEffect, useMemo, useState } from "react"
import { MoreAboutMovieInterface } from "../interfaces/MoreAboutMovieInterface"

//Quando clica em Siba mais, no cartaz do filme
export function FetchMoreAboutMovie(id: string | any) {
  const [movie, setMovie] = useState<MoreAboutMovieInterface>()

  useMemo(async () =>{
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`)
      const resp = await data.json()
      return setMovie(resp)
      
    } catch (err) {
      return alert(err)
    }

  },[id])

  return movie
}