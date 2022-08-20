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
import { Hate } from "./Hate";

interface ContentMediaProps {
  titulo: string;
  id: string;
}


/**
 * Este componente é abstrato e ele tem um pouco de polimorfismo do paradigma POO
 * Ele faz a mesma coisa duas vezes, como são duas listas 'mais populares' e 'aclamados pela crítica', ele se adapta para cada contexto.
 * isso é feito por meio do if else, que filtra o contexto escolhido para enviar como parâmetro
 */
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
      className="mt-5 lg:mt-14"
    >
      <h1 
        className="block ml-4 md:ml-10 text-lg md:text-2xl lg:text-4xl tracking-wide mb-4 font-bold uppercase">
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
            movies.map((movie, index) => {
              
              return (
                <SwiperSlide
                  key={movie.id}
                  className={`first:ml-10 md:first:ml-20 ml-6 md:ml-12 flex-shrink-0 w-[130px] h-[210px] md:w-[200px] md:h-[280px] z-70
                  ${id != 'popular' && 'ml-0 md:ml-2' }
                  `}
                >
                  
                  {/*Essa verificação é feita porque, como o mesmo componente renderiza dois componentes diferentes, eu quero que o componente "Hate" só na primeira lista */}

                  { id == 'popular' ? (
                    <>
                      <Hate indexMovie={index}/>
                      <Media data={movie} /> {/*passando os atributos por meio de props */}
                    </>

                    ) : <Media data={movie} />
                }
                
                </SwiperSlide>
              )
            })
          }
        </Swiper>
    </section>
  )
}