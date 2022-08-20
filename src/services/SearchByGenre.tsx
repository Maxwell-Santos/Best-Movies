import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

/**
 * Aqui vai ficar a requisição para a API, onde vai retornar os filmes daquele gênero
 */

export function SearchByGenre() {

  //desestruturação do parâmetro de gênero
  const { genre, genreName } = useParams();
  const [moviesByGenre, setMoviesByGenre] = useState([]);

  const SEARCH_BY_GENRE_API = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR&with_genres=${genre}`;

  useEffect(() => {
    fetch(SEARCH_BY_GENRE_API)
      .then(data => data.json())
      .then(response => setMoviesByGenre(response.results))
      .catch(error => console.log(error))

  }, [genre]);

  console.log(moviesByGenre)
  console.log('id', genre)

  return { moviesByGenre, genreName}
}
