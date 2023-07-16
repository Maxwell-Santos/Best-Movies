//  ESSE CÓDIGO NÃO ESTÁ SENDO USADO !!!!!!!!!!!!!
//  ESSE CÓDIGO NÃO ESTÁ SENDO USADO !!!!!!!!!!!!!
//  ESSE CÓDIGO NÃO ESTÁ SENDO USADO !!!!!!!!!!!!!

import { MovieContentInterface } from '../interfaces/MovieContentInterface';

import { Media } from '../components/Media';
import { useEffect, useState, useMemo } from 'react';

import Scroll from 'react-scroll'
import { loadMoreMovies } from '../services/LoadMoreMovies';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SearchByName } from '../services/SearchByName';

/**
 * Esse componente vai mostrar os filmes daquele nome
 */
export function ResultSearchByName() {

  const [moviesByName, setMoviesByName] = useState<any>([]);

  let search = SearchByName()

  const [moreMovies, setMoreMovies] = useState<any>([...moviesByName])
  const [page, setPage] = useState(1)

  const S = Scroll.scroller

  console.log(search)

  const SEARCH_BY_NAME_API = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR&query=${search}&include_adult=false`;

  
  useMemo(async () => {
    try {
      const data = await fetch(SEARCH_BY_NAME_API);
      const response = await data.json();
      setMoviesByName(response.results);

    } catch (error) {
      return console.log(error);
    }
  }, [search])

  useEffect(() => {
    setMoreMovies([])
    setPage(1)

  }, [search])

  /**
   * sempre que aparecer o observer, ele vai adicionar um valor para page que desencadeia a função de carregar mais filmes
   * ao passo que o valor que está em page, será usado para selecionar a página da lista de filmes que api mostrará
   * iniciando em página 1 e indo infinitamente 
   * carregando sempre de acordo com o gênero selecionado
   * se mudar o nome, o page volta para o 1 e reinicia o ciclo
   */
  useEffect(() => {
    if (page == 1) {
      return

    } else {
      search && loadMoreMovies(page, search)
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

  useMemo(() => {
    S.scrollTo('header', {
      delay: 800,
      // duration: 1500,
      offset: -20
    })
  }, [moviesByName])

  return (
    <>

      {search && (
        <div
          className='relative flex flex-wrap mt-5 md:mt-7 gap-2 md:gap-3 justify-center max-w-[1444px] mx-auto'
          id='comp'
        >

          {moviesByName.map((movie: MovieContentInterface, index: number) => {
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

          <div id="sentinela" className='h-3 w-3 bg-red-500'></div>

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

      ) 
      }
    </>
  )
}

