import { FetchMoreAboutMovie } from "../services/MORE_ABOUT_MOVIE_API";

import { Genres } from "./Genres";
import { CircularProgress, Drawer, Rating } from "@mui/material";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ClickAwayListener from '@mui/base/ClickAwayListener';

import { Link } from "react-router-dom";

interface MoreAboutMovieProps {
  state: {
    showMore: any,
    setShowMore: any,
  };
  data: any;
}
export function MoreAboutMovie({ state, data }: MoreAboutMovieProps) {

  //desestrutura o atributo id do filme selecionado, para usar como parâmetro para uma outra requisição mais detalhada do filme
  const { id } = data;
  const { movie, watchProviders } = FetchMoreAboutMovie(id);
  const runtimeInHours = movie && movie.runtime / 60;
  
  return (
    <Drawer
      anchor='right'
      open={state.showMore}
    >
      {
        movie ? (
          <ClickAwayListener onClickAway={() => state.setShowMore(false)} >
          <div
            className="text-white w-screen
            flex flex-col items-center md:justify-start
            max-w-[750px] 
            h-full
            sm:w-[70vw]"
          >
            <img
              className="absolute w-full h-full object-cover object-center -z-10"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Poster"
            />
            <div
              className="inset-0 opacity-60 absolute bg-[#03090f] -z-10"
            ></div>

            <ClearRoundedIcon
              className="p-1 rounded-full bg-gray-100/40 fixed top-2 left-2 sm:top-3 sm:left-3 md:top-5 md:left-5 flex justify-center text-sm transition hover:bg-gray-100/50 z-10 shadow-md"
              onClick={() => {
                state.setShowMore(false)

              }}
            />
            <h1
              className="md:mt-10 text-3xl md:text-4xl text-center uppercase tracking-wider mx-auto w-fit font-bold p-3"
            >
              {movie.title}
            </h1>

            <span
              className="flex gap-2 w-fit mx-auto items-center"
            >
              {movie &&
                <Rating
                  className="w-full justify-center my-3"
                  defaultValue={movie.vote_average / 2} //a API retorna um valor de >=10, mas eu usei ese valor como estrelas e só tem 5 estrelas, por isso a divisão por 2
                  precision={0.5}
                  icon={<StarRateIcon style={{ color: '#ffffff' }} />}
                  emptyIcon={<StarBorderIcon style={{ color: '#ffffff' }} />}
                  readOnly
                />
              }
              <span
                className="text-zinc-300 font-thin text-sm"

              >
                {movie && (
                  movie.vote_count >= 1000 ? movie.vote_count = '999+' : movie.vote_count

                )}
              </span>
            </span>

            <div
              className="w-full flex items-center gap-3 flex-wrap text-zinc-100"
            >

              {
                movie?.genres.map(genre => {
                  return (

                    <Link
                      to={`/${genre.id}/${genre.name}`} //vai para a página ResultSearchByGenre.tsx
                      key={genre.id}
                      className="first:ml-7"
                      onClick={() => state.setShowMore(false)} //fecha a aba que mostra mais sobre o filme
                    >
                      <Genres key={genre.id} name={genre.name} />
                    </Link>

                  )
                }
                )
              }

              <span className="group cursor-pointer leading-3 p-1 rounded-md">?
              <small 
              className="hidden group-hover:inline rounded-md px-2 p-1" 
              >Basta clicar em um gênero que terá muito mais filmes do mesmo</small>
              </span>
            </div>

            <div className="mx-7">
              <div
                className="relative overflow-y-auto w-full h-[300px] mt-2 
              after:content-[''] 
              after:w-full 
              after:h-5 
              after:absolute 
               
              after:bottom-0 after:right-0 after:left-0 "
              >
                <p
                  className="mt-3 leading-relaxed text-lg text-zinc-200 md:text-lg first-letter:text-5xl first-letter:float-left first-letter:tracking-widest py-2"
                >
                  {movie.overview}
                </p>
              </div>
              <div
                className="flex-col flex text-lg mt-5 tracking-wide"
              >
                <span
                >
                  Lançamento: {movie.release_date}
                </span>
                <span
                >
                  Duração: {runtimeInHours?.toFixed(2) + 'h'}
                </span>
              </div>

            </div>
            <div className="bg-black w-full p-3 mt-2">
              <h3
                className="text-center text-xl uppercase tracking-wide my-5"
              >
                Onde Assistir?
              </h3>
              {
                watchProviders.results.US ?
                  (
                    <div
                      className="grid grid-cols-3 md:flex md:flex-col gap-2 md:gap-4"
                    >
                      {

                        (
                          watchProviders.results.US.flatrate ||  
                          watchProviders.results.US.rent || 
                          watchProviders.results.US.buy

                          ).map((item: any) => (
                          <div
                            key={item}
                            className="h-full md:w-full flex flex-col md:flex-row gap-4 items-center text-center md:border-b md:border-b-gray-800 p-2 px-3 mb-2
                              relative"
                          >
                            <div className="w-full max-w-[80px] h-full rounded-md overflow-hidden">
                              <img src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} alt="a logo"
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div className="flex flex-col items-start
                              absolute inset-0 md:relative
                              ">
                              <span className="hidden md:inline text-xl mb-2">{item.provider_name}</span>
                              <a
                                href={`https://www.google.com.br/search?q=${item.provider_name} ${movie.title}`}
                                target="_blank"
                                className="
                                bg-transparent
                                text-transparent
                                w-full h-full
                                md:bg-[#0d3d74] md:hover:bg-[#121983] p-2 md:px-5 transition-all rounded-sm md:w-fit md:text-[#fff]"
                              >Pesquisar</a>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  ) : <div>Ainda não está disponível em nenhum streaming (provavelmente está nos cinemas ainda)</div>
              }

              <span
                className="text-gray-100/50 mx-auto text-sm"
              >Dados da empresa <a href="https://www.justwatch.com">JustWatch</a></span>
            </div>
          </div>
          </ClickAwayListener>
        ) : (

          <div className='
            w-screen h-screen max-w-[750px] 
            sm:w-[70vw] 
            grid place-items-center
            bg-black/30 filter backdrop-blur-sm
            '>
            <CircularProgress color='primary' />
          </div>
        )
      }
    </ Drawer>
  )
}