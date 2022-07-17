import { Media } from "./Media";
import { useEffect, useState } from "react";

import { MovieContentInterface } from '../interfaces/MovieContentInterface'
import { MOVIE_API } from "../APIs/MOVIES_API";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';


interface ContentMediaProps {
  titulo: string;
}

export function ContentMedia({ titulo }: ContentMediaProps) {

  const [movies, setMovies] = useState<MovieContentInterface[]>([]);

  useEffect(() => {
    fetch(MOVIE_API)
      .then(data => data.json())
      .then(response => setMovies(response.results))
  }, [])

  return (
    <section
      className="my-5 lg:mt-7"
    >
      <h1
        className="block ml-4 md:ml-10 text-lg md:text-2xl tracking-wide mb-4 font-medium uppercase">
        {titulo}
      </h1>

      <Swiper
        slidesPerView={"auto"}
        freeMode={true}
        spaceBetween={10}
        modules={[FreeMode, Navigation]}
        navigation
      >
        {
          movies?.map(movie => {
            return (
              <SwiperSlide
                key={movie.id}
                className="first:ml-4 md:first:ml-10 flex-shrink-0 w-[160px] h-[240px] rounded-md shadow-lg bg-gray-500 md:w-[200px] md:h-[280px] overflow-hidden"
              >
                {/*armazenando os atributos de cada movie nessa prop (data)*/}
                <Media data={ movie } />

              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}