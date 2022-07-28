import { useContext } from "react";
import { MovieContentInterface, MostPopularMovie } from "../interfaces/MovieContentInterface";
import { MovieContext } from "../providers/MovieContext";

export function Slide() {
  //este contexto é uma chamada API, que retorna os filmes mais populares do momento
  const movies = useContext<MovieContentInterface[]>(MovieContext);

  //esses filmes têm o atributo 'popularity', que define qual o mais popular
  //e guardei todos eles neste array "listPopularity", para poder fazer a lógica depois 
  const listPopularity = movies.map(movie => movie.popularity);
  
  //como esse atributo 'popularity' tem o valor de number e está num array, foi fácil descobrir qual o mais popular
  const mostPopular = listPopularity.sort().pop();
  
  //tendo esse dado, basta filtrar o que tem o atributo 'popularity' igual a um dos filmes
  const mostPopularMovie: MostPopularMovie|any = movies.find(movie => movie.popularity === mostPopular)

  console.log(listPopularity)
  console.log('filme mais popular tem:', mostPopular)
  console.log('estes são seus dados:', mostPopularMovie)

  return (
    <div
      className=" relative overflow-hidden mx-auto  w-full h-[40vh] md:h-[50vh] xl:h-[80vh] max-h-[800px] flex justify-center"
    >
      <img
        className="object-cover w-full h-full object-center "
        src={`https://image.tmdb.org/t/p/w500${mostPopularMovie.backdrop_path}`}
        // src={`https://image.tmdb.org/t/p/w500/qTkJ6kbTeSjqfHCFCmWnfWZJOtm.jpg`}
        alt=""
      />

      <footer className="absolute bottom-0 left-0 right-0 text-gray-100 p-3 z-10 pl-10"
      >
        <div className="h-full flex items-end"> {/*details*/}

        <h1
        className="text-lg"
        >
          {mostPopularMovie.title}
          </h1>
        </div>
      </footer>
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-[50%] bg-gradient-to-t from-[#081524]"
      ></div>
    </div>
  )
}