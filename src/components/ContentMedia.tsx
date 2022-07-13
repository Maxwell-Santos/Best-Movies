import { Media } from "./Media";
import { useEffect, useState } from "react";

import { MovieContentInterface } from '../interfaces/MovieContentInterface'
import { MOVIE_API } from "../APIs/MOVIES_API";

interface ContentMediaProps {
  titulo: string;
}

export function ContentMedia({ titulo }: ContentMediaProps) {

  const [movies, setMovies] = useState<MovieContentInterface[]>([]);

  useEffect(() => {
    fetch(MOVIE_API)
    .then(data => data.json())
    .then(response => setMovies(response.results))
  },[])

  console.log(movies)

  return (
    <section 
    className="relative my-5 lg:mt-7"
    >
      <h1 
      className="block ml-4 md:ml-10 text-lg md:text-2xl tracking-wide mb-4 font-medium uppercase">
        {titulo}
      </h1>

      <ul 
      className="flex space-x-2 lg:space-x-5 xl:space-x-6 pb-5 overflow-x-scroll scrollbar-none"
      >
        
      {
        movies?.map(movie => {
          return(
            <li 
            key={movie.id}
            className="first:ml-4 md:first:ml-10 flex-shrink-0 w-[170px] h-[250px] rounded-md shadow-lg bg-gray-500 md:w-[200px] md:h-[280px] overflow-hidden"
            >
              {/*armazenando os atributos de cada movie nessa prop (data)*/}
              <Media data={movie} />
            
            </li>
          )
        })
      }

{/* 
<Media 
                banner="https://br.web.img2.acsta.net/pictures/16/10/18/16/29/576071.jpg"
              />
        <Media 
          banner="https://images-na.ssl-images-amazon.com/images/I/91L80naXOrL.jpg"
        />

        <Media 
          banner="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tCTC6pwer_D9krFIK7-D5V2wrPEb6TcIdw&usqp=CAU"
        />

        <Media 
          banner="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRZ1rbmyHEGIIRHLTLOAoKmzU_gp1uNbn3A&usqp=CAU"
        />

        <Media 
          banner="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKlmtDlp__9FOrFEy-eyabxGkdmbJH5_E3Yg&usqp=CAU"
        />

        <Media 
          banner="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQCUWxV2fy2W-XMyTLDIt7uokzfsoX1TJHA&usqp=CAU"
        />

        <Media 
          banner="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmoBmT3ag70wnfwEVJvpeilH-sK9Mqzf3jQ&usqp=CAU"
        />

        <Media 
          banner="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMT242mLu5B2DQZ9VcjNEUW_0AyrFD8FJ2qw&usqp=CAU"
        />

        <Media 
          banner="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-wK0BAphH5r5HQMVJMaUYk5-En7H8EMvaA&usqp=CAU"
        />

        <Media 
          banner="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR46we87FG1Mw6WmP65GZggrfYdFN6eux9IA&usqp=CAU"
        /> */}

      </ul>
    </section>
  )
}