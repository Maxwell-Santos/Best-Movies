
import { createContext, useEffect, useState } from "react"
import { LATEST_MOVIES_API } from "../APIs/MOVIES_API";
import { MovieContentInterface } from "../interfaces/MovieContentInterface";

export const MovieTopRatedContext = createContext([{}]);

export function MovieTopRatedProvider(props: any) {
  
  const [movies, setMovies] = useState<MovieContentInterface[]>([]);

  useEffect(() => {
    fetch(LATEST_MOVIES_API)
      .then(data => data.json())
      .then(response => {
        setMovies(response.results)
      })
  }, [])

  console.log(movies)
  return (
   <MovieTopRatedContext.Provider value={movies}>
    {props.children}
   </MovieTopRatedContext.Provider>
 )
}
