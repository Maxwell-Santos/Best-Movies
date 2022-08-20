import { MovieContentInterface } from '../interfaces/MovieContentInterface';

import { Media } from '../components/Media';
import { SearchByGenre } from '../services/SearchByGenre';

import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';


/**
 * Esse componente vai mostrar os filmes daquele gênero
 */
export function ResultsSearchByGenre() {

  const moviesSortedByGenre = SearchByGenre().moviesByGenre;
  const titleGenre = SearchByGenre().genreName;

  console.log(moviesSortedByGenre)

  return (
    <div
      className='p-3'
    >

      <div
        className='flex items-center p-3'
      >
        <Link to='/' className='p-3 hover:bg-zinc-100/30 rounded-full transition-all'>
          <ArrowBack />
        </Link>
        <h1
          className='block text-lg md:text-2xl lg:text-4xl tracking-wide font-bold uppercase text-center flex-1'
        >
          {titleGenre}
        </h1>

      </div>

      <div
        className='flex flex-wrap mt-5 md:mt-7 gap-2 md:gap-3 justify-center'
      >
        {moviesSortedByGenre.map((movie: MovieContentInterface) => {
          return (
            <div className='w-[130px] h-[210px] md:w-[200px] md:h-[280px]'>
              <Media data={movie} key={movie.id} />
            </div>
          )
        })}
      </div>
    </div>

  )
}
