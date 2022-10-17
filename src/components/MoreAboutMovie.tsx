import { useState } from "react";
import { FetchMoreAboutMovie } from "../services/MORE_ABOUT_MOVIE_API";

import { Genres } from "./Genres";
import { CircularProgress, Drawer, Rating } from "@mui/material";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function MoreAboutMovie() {
  const [open, setOpen] = useState(true)

  //desestrutura o atributo id do filme selecionado, para usar como parâmetro para uma outra requisição mais detalhada do filme
  const { id } = useParams();
  const movie = FetchMoreAboutMovie(id);

  const runtimeInHours = movie && movie.runtime / 60

  return (
    <Drawer
      anchor='right'
      open={open}
    >
      {
        movie ? (
          <div
            className="relative text-white w-screen
            flex flex-col items-center justify-center md:justify-start
            max-w-[750px] 
            h-fit
            sm:h-full
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
                history.back()
                setOpen(false)

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
              className="w-full flex gap-2 flex-wrap text-zinc-100"
            >

              {
                movie?.genres.map(genre => {
                  return (

                    <Link
                    to={`/${genre.id}/${genre.name}`} 
                    key={genre.id}
                    className="first:ml-7"
                    >
                      <Genres key={genre.id} name={genre.name} />
                    </Link>

                  )
                }
                )
              }
            </div>

            <div className="mx-7">
              <p
                className="mt-3 leading-relaxed text-lg text-zinc-200 md:text-lg first-letter:text-5xl first-letter:float-left first-letter:tracking-widest"
              >
                {movie.overview}
              </p>
              <div
                className="flex-col flex text-lg mt-5 tracking-wide"
              >
                <span
                >
                  Lançamento: {movie?.release_date}
                </span>
                <span
                >
                  Duração: {runtimeInHours?.toFixed(2) + 'h'}
                </span>
              </div>
              
            </div>
          </div>

        ) : (
          <div className='
            w-screen h-screen  max-w-[750px] 
            smaller:h-fit 
            normal:h-full 
            sm:w-[70vw] 
            grid place-items-center
            '>
            <CircularProgress color='primary' />
          </div>
        )
      }
    </ Drawer>
  )
}