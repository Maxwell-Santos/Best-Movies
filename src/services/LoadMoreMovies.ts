export async function loadMoreMovies(page: number, currentGenre: string) {
  //desestruturação do parâmetro de gênero
  // const [moviesByGenre, setMoviesByGenre] = useState([]);

  const SEARCH_BY_GENRE_API = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR&with_genres=${currentGenre}&page=${page}`;

  try {
    const data = await fetch(SEARCH_BY_GENRE_API);
    const response = await data.json();
  
    return response.results

  } catch (error) {
    return console.log(error);
  }
}