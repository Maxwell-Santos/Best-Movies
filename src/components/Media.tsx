import { useState } from "react";
import { MoreAboutMovie } from "./MoreAboutMovie";

import { MovieContentInterface } from '../interfaces/MovieContentInterface';

interface MovieProps extends MovieContentInterface {
  data: any
}


//pegando os dados do m
export function Media({ data }: MovieProps) {

  const [showMore, setShowMore] = useState(false);

  const windowSize = () => {
    screen.width <= 1024 && setShowMore(true); 
  }

  return (
    <div
      className="relative group bg-[#283f5a] h-full w-full"
      onClick={() => windowSize()}
      >

      <img
        className="w-full h-full object-cover transition group-hover:blur-sm delay-100"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt="banner"
        loading="lazy"
      />

      <div
        className={`${screen.width >= 768 ? 'visible' : 'invisible'} absolute transform translate-y-[100%] bg-gray-700/50 transition duration-500 ease-in-out w-full h-auto min-h-[70%] flex flex-col items-center justify-center gap-3 group-hover:-translate-y-[100%] p-4 ${showMore && '-translate-y-[100%]'}`}
      >

        <h2
          className="line-clamp-1 leading-tight text-sm md:text-base font-bold tracking-wide"
          title={data.title}
        >
          {data.title}
        </h2>

        <p
          className="line-clamp-4 leading-tight font-light text-xs md:text-sm ">
          {data.overview}
        </p>

        <button
          className={` ${showMore ? 'bg-[#08203b] pointer-events-none' : 'bg-[#123a68] hover:bg-[#08203b]'} w-full py-2 text-sm md:py-3 transition text-center rounded-lg shadow-md`}
          onClick={() => setShowMore(true)}
        >
          Saiba mais
        </button>
      </div>

      {
        showMore && <MoreAboutMovie state={{ showMore, setShowMore }} data={data} />
      }
    </div>
  )
}