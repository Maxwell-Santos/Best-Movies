import { MovieContentInterface } from '../interfaces/MovieContentInterface';

import { Header } from '../components/Header';
import { Media } from '../components/Media';
import { SearchByGenre } from '../services/SearchByGenre';
import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';

import Scroll from 'react-scroll'

/**
 * Esse componente vai mostrar os filmes daquele gênero
 */
export function ResultsSearchByGenre() {

  const moviesSortedByGenre = SearchByGenre().moviesByGenre;
  const titleGenre = SearchByGenre().genreName;

  const S = Scroll.scroller

  useEffect(() => {
    S.scrollTo('header', {
      delay: 800,
      // duration: 1500,
      offset: -20
    })

  }, [moviesSortedByGenre])

  return (
    <>
      <Header genreTitle={titleGenre} />

      {
        moviesSortedByGenre ? (
          <div
            className='relative flex flex-wrap mt-5 md:mt-7 gap-2 md:gap-3 justify-center'
            id='comp'
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

          <div className='w-screen h-[200px] flex justify-center items-center'>
            <CircularProgress color='primary' />
          </div>
        )
      }
    </>

  )
}
