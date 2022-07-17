import { MovieContentInterface } from "../interfaces/MovieContentInterface";
import { FetchMoreAboutMovie } from "../APIs/MORE_ABOUT_MOVIE_API";

import { Genres } from "./Genres";

import { Modal, Rating } from "@mui/material";

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface MovieAtr extends MovieContentInterface {
  state: any;
  data: any;
}
export function MoreAboutMovie({ state, data }: MovieAtr) {

  //desestruturando o objeto 'data', e armazenando o atributo 'id' 
  const { id } = data;

  const movie = FetchMoreAboutMovie(id);

  return (
  
    <Modal
      open={state.showMore}
      className="flex justify-end bg-[#03090f] bg-opacity-50 backdrop-blur-sm w-screen h-screen"
    >
     
      <div
        className="text-white h-full w-full sm:w-[70%] lg:w-[50%] max-w-[700px] absolute"
      >

        <div
          className="w-full h-full opacity-80 absolute bg-[#03090f]"
        ></div>

        <img
          className="w-full h-full object-cover object-center -z-10 absolute"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt="" />

        <ClearRoundedIcon
          className="p-1 rounded-full bg-gray-100/40 absolute top-3 left-3 md:top-5 md:left-5 flex justify-center text-sm transition hover:bg-gray-100/50 z-10 shadow-md"
          onClick={() => state.setShowMore(false)}
        />
        <div
          className="relative w-full h-full p-7 pt-9 md:p-12 md:pt-14 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-900"
        >

          <h1
            className="text-xl sm:text-2xl lg:text-4xl text-center uppercase tracking-wider mt-6 mx-auto w-fit font-bold"
          >
            {data.title}
          </h1>

          {movie && 
          <Rating 
            className="w-full justify-center my-3"
            defaultValue={movie.vote_average / 2} 
            precision={0.5} 
            icon={<StarRateIcon style={{color:'#ffffff' }}/>}
            emptyIcon={<StarBorderIcon style={{color: '#ffffff'}}/>}
            readOnly 
          />
          }

          <p
            className="mt-10 ml-3 leading-relaxed text-base md:text-lg first-letter:text-5xl first-letter:float-left first-letter:tracking-widest"
          >
            {data.overview}
          </p>

          <div
          className="w-full flex justify-end mt-7 gap-2 flex-wrap"
          >
            {
            movie?.genres.map(genre => <Genres key={genre.id} data={genre.name}/>)
            }
          </div>

        </div>

      </div>
    </Modal>
  )
}