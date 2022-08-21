import { MovieContentInterface } from '../interfaces/MovieContentInterface';

import { Header } from '../components/Header';
import { Media } from '../components/Media';
import { SearchByGenre } from '../services/SearchByGenre';
import { CircularProgress } from '@mui/material';

/**
 * Esse componente vai mostrar os filmes daquele gênero
 */
export function ResultsSearchByGenre() {

  const moviesSortedByGenre = SearchByGenre().moviesByGenre;
  const titleGenre = SearchByGenre().genreName;

  return (
    <div
      className='py-5'
    >
      <Header genreTitle={titleGenre} />
      {
        moviesSortedByGenre ? (
          <div
            className='relative flex flex-wrap mt-5 md:mt-7 gap-2 md:gap-3 justify-center'
          >

            {moviesSortedByGenre.map((movie: MovieContentInterface) => {
              return (
                <div
                  className='
                w-[150px] h-[230px]
                sm:w-[130px] sm:h-[210px] 
                md:w-[200px] md:h-[280px]'
                  key={movie.id}
                >
                  <Media data={movie} />
                </div>
              )
            })}

          </div>
        ) : (
          <div className='absolute inset-0 w-screen h-screen flex justify-center items-center'>
            <CircularProgress color='inherit' />
          </div>


        )
      }

    </div>

  )
}
