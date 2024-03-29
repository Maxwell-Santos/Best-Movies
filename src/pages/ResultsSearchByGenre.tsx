import { MovieContentInterface } from '../interfaces/MovieContentInterface';

import { Header } from '../components/Header';
import { Media } from '../components/Media';
import { SearchByGenre } from '../services/SearchByGenre';
import { CircularProgress } from '@mui/material';
import { useEffect, useState, useMemo } from 'react';

import Scroll from 'react-scroll'
import { loadMoreMovies } from '../services/LoadMoreMovies';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

/**
 * Esse componente vai mostrar os filmes daquele gênero
 */
export function ResultsSearchByGenre() {

  const moviesSortedByGenre = SearchByGenre().moviesByGenre
  const titleGenre = SearchByGenre().genreName
  const idGenre = SearchByGenre().genre

  const [moreMovies, setMoreMovies] = useState<any>([...moviesSortedByGenre])
  const [page, setPage] = useState(1)

  const S = Scroll.scroller

  useEffect(() => {
    setMoreMovies([])
    setPage(1)

  }, [idGenre])

  /**
   * sempre que aparecer o observer, ele vai adicionar um valor para page que desencadeia a função de carregar mais filmes
   * ao passo que o valor que está em page, será usado para selecionar a página da lista de filmes que api mostrará
   * iniciando em página 1 e indo infinitamente 
   * carregando sempre de acordo com o gênero selecionado
   * se mudar o gênero, o page volta para o 1 e reinicia o ciclo
   */
  useEffect(() => {
    if (page == 1) return
    else {
      idGenre && loadMoreMovies(page, idGenre)
        .then(data => {
          console.log(page)
          setMoreMovies((prev: any) => [...prev, ...data])
        })
    }

  }, [page])


  useEffect(() => {
    let value = document.querySelector("#sentinela")
    let options = {
      root: null,
      rootMargin: '500px',
      threshold: 0.1 //quando aparecer 10% dessa div, vai pegar mais filmes
    }

    //pq estou observando filmes
    const movieObserver = new IntersectionObserver((entries, observer) => {

      if (entries.some(entry => entry.isIntersecting)) {
        setPage(prev => prev + 1) //atualizando a página
      }
    }, options)

    value && movieObserver.observe(value)

    return () => movieObserver.disconnect()
  }, [])

  // escrollar para o topo sempre que mudar o gênero
  useMemo(() => {
    S.scrollTo('header', {
      delay: 800,
      // duration: 1500,
      offset: -20
    })
  }, [titleGenre])

  return (
    <>
      <Header genreTitle={titleGenre} />

      {moviesSortedByGenre ? (
        <div
          className='relative flex flex-wrap mt-5 md:mt-7 gap-2 md:gap-3 justify-center max-w-[1444px] mx-auto'
          id='comp'
        >

          {moviesSortedByGenre.map((movie: MovieContentInterface, index: number) => {
            return (
              <div
                className={`
                w-[150px] h-[230px]
                sm:w-[130px] sm:h-[210px] 
                md:w-[200px] md:h-[280px]`}
                key={index}
              >
                <Media data={movie} />
              </div>
            )
          })}
          {moreMovies.map((movie: MovieContentInterface, index: number) => {
            return (
              <div
                className={`
                w-[150px] h-[230px]
                sm:w-[130px] sm:h-[210px] 
                md:w-[200px] md:h-[280px]`}
                key={index}
              >
                <Media data={movie} />
              </div>
            )
          })}

          <div id="sentinela" className='h-3 w-3 bg-transparent' />

          <button
            className='fixed bottom-5 right-5 rounded-md aspect-square bg-white/10 backdrop-blur-md z-50 sm:p-3 transition-all
            hover:bg-white/20
            hover:-translate-y-2'
            onClick={() => window.scrollTo(0, 0)}
            title="voltar ao topo da página"
          >
            <KeyboardArrowUpIcon
              fontSize="large"
            />
          </button>
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

