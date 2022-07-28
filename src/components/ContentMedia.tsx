import { Media } from "./Media";
import { useContext } from "react";

import { MovieContext } from "../providers/MovieContext";
import { MovieTopRatedContext } from "../providers/MovieTopRatedContext";

import { MovieContentInterface } from '../interfaces/MovieContentInterface'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import '../styles/buttonSwiper.css';

interface ContentMediaProps {
  titulo: string;
  id: string;
}

export function ContentMedia({ titulo, id }: ContentMediaProps) {
  
  let context;

  if(id == 'popular'){
    context = MovieContext

  } else {
    context = MovieTopRatedContext
  }

  const movies  = useContext<MovieContentInterface[]>(context);
  
  return (
    <section
      className="mt-5 lg:mt-10"
    >
      <h1 
        className="block ml-4 md:ml-10 text-lg md:text-2xl tracking-wide mb-1 font-medium uppercase">
        {titulo}
      </h1>

        <Swiper
          slidesPerView={"auto"}
          freeMode={true}
          spaceBetween={10}
          modules={[FreeMode, Navigation]}
          navigation={screen.width >= 760 ? true : false} //mostrará o botão de navegação apenas se a tela for maior ou igual à 760px
          className="pr-5"
        >
          {
            movies.map(movie => {
              return (
                <SwiperSlide
                  key={movie.id}
                  className="first:ml-4 md:first:ml-10 flex-shrink-0 w-[130px] h-[210px] rounded-md shadow-lg bg-gray-500 md:w-[200px] md:h-[280px] overflow-hidden"
                >
                  {/*armazenando os atributos de cada movie nessa prop (data)*/}
                  <Media data={movie} />

                </SwiperSlide>
              )
            })
          }
        </Swiper>
    </section>
  )
}