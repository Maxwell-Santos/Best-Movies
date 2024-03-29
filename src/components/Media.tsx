import { MovieContentInterface } from '../interfaces/MovieContentInterface';
import { useState } from 'react';
import { MoreAboutMovie } from './MoreAboutMovie';

interface MovieProps extends MovieContentInterface {
  data: any
}

//pegando os dados do m
export function Media({ data }: MovieProps) {
  const [ showMore, setShowMore] = useState(false)
  return (
    <div
      className="relative group bg-[#283f5a] h-full w-full overflow-hidden rounded-md z-20"
    >
        <img
          className="w-full h-full -z-10 object-cover transition sm:group-hover:blur-sm delay-100 lg:pointer-events-none md:group-hover:scale-125 duration-300"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt="banner"
          loading="lazy"
          onClick={() => setShowMore(true)}
        />

      {/*Essa condição na classe, é por conta de não ter o hover no mobile, daí basta clicar na imagem que mostra mais informações sobre o filme, diferente do web, que tem o botão específico "saiba mais"*/}
      <div
        className={`${screen.width >= 768 ? 'block' : 'hidden'} 
        w-full h-auto min-h-[70%] flex flex-col items-center justify-center gap-3
        absolute transform translate-y-[100%] 
        bg-gray-800/60 transition duration-500 ease-in-out
         group-hover:-translate-y-[100%] p-4 z-20
         ${showMore && '-translate-y-[100%]'}
         `}
      >

        <h2
          className="line-clamp-1 leading-tight text-lg font-bold tracking-wide"
          title={data.title}
        >
          {data.title}
        </h2>

        <p
          className="line-clamp-4 leading-tight font-normal text-sm md:text-base ">
          {data.overview}
        </p>

        <button
          onClick={() => setShowMore(true)}
          className='bg-[#0d3d74] hover:bg-[#121983] w-full text-base tracking-wide font-bold py-2 transition text-center rounded-md shadow-md'
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