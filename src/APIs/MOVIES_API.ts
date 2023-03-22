export const MOVIE_API=`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`;

export const MOVIE_TOP_RATED_API=`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`;

export const SEARCHING_MOVIE=`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR&query=1&include_adult=false`