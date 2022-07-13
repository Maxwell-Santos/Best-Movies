import { MovieContentInterface } from "../interfaces/MovieContentInterface";

interface b extends MovieContentInterface {
  state: any;
  moreData: any;
}



export function MoreAboutMovie({ state, moreData }: b) {

  return (
    <section 
      className={`
        fixed inset-0 z-10 transition flex justify-end bg-[#03090f] bg-opacity-50 backdrop-blur-sm
        ${state.showMore === true && 'w-screen h-screen'}
      `}
    >
      <div
      className="text-white sm:w-[70%] lg:w-[50%] h-full max-w-[700px] absolute"
      >

      <div
        className="w-full h-full opacity-80 absolute bg-[#03090f]"
      ></div>

      <img
        className="w-full h-full object-cover object-center -z-10 absolute"
        src={`https://image.tmdb.org/t/p/w500${moreData.poster_path}`}
        alt="" />

      <div
        className="relative w-full h-full p-12 pt-14"
      >
        <button
          className="group overflow-hidden p-1 px-3 rounded-full bg-gray-100 bg-opacity-40 absolute top-5 left-5 flex justify-center text-sm transition"
          onClick={() => state.setShowMore(false)}
        >
          Fechar
        </button>

        <h1
          className="text-4xl text-center uppercase tracking-wider mt-6 mx-auto w-fit font-bold"
        >{moreData.title}
        </h1>

        <p
          className="mt-10 leading-relaxed text-lg
        first-letter:text-5xl first-letter:float-left first-letter:tracking-widest"
        >
          {moreData.overview}
        </p> {/*Meu texto*/}
      </div>
      </div>


    </section>
  )
}