
import { createContext, useEffect, useState } from "react"
import { MOVIE_TOP_RATED_API } from "../APIs/MOVIES_API";
import { MovieContentInterface } from "../interfaces/MovieContentInterface";

export const MovieTopRatedContext = createContext([{}]);

export function MovieTopRatedProvider(props: any) {
  
  const [movies, setMovies] = useState<MovieContentInterface[]>([]);

  useEffect(() => {
    fetch(MOVIE_TOP_RATED_API)
      .then(data => data.json())
      .then(response => {
        setMovies(response.results)
      })
  }, [])

  return (
   <MovieTopRatedContext.Provider value={movies}>
    {props.children}
   </MovieTopRatedContext.Provider>
 )
}
