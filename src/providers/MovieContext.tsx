// import { Container } from './styles';

import { createContext, useEffect, useState } from "react"
import { MOVIE_API } from "../APIs/MOVIES_API";
import { MovieContentInterface } from "../interfaces/MovieContentInterface";

export const MovieContext = createContext([{}]);

export function MovieProvider(props: any) {
  
  const [movies, setMovies] = useState<MovieContentInterface[]>([]);

  useEffect(() => {
    fetch(MOVIE_API)
      .then(data => data.json())
      .then(response => setMovies(response.results))
  }, [])

  return (
   <MovieContext.Provider value={movies}>
    {props.children}
   </MovieContext.Provider>
 )
}
