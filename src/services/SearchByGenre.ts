import { useMemo, useState } from "react"
import { useParams } from "react-router-dom";

/**
 * Aqui vai ficar a requisição para a API, onde vai retornar os filmes daquele gênero
 */

export function SearchByGenre() {
  //desestruturação do parâmetro de gênero
  const { genre, genreName } = useParams();
  const [moviesByGenre, setMoviesByGenre] = useState<any>([]);

  const SEARCH_BY_GENRE_API = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR&with_genres=${genre}&page=1`;

  useMemo(async () => {
    try {
      const data = await fetch(SEARCH_BY_GENRE_API);
      const response = await data.json();
      setMoviesByGenre(response.results);

    } catch (error) {
      return console.log(error);
    }
  }, [genre])

  return { moviesByGenre, genreName, genre }
}