import { Modal } from "@mui/material";
import { MovieContentInterface } from "../interfaces/MovieContentInterface";

import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

interface b extends MovieContentInterface {
  state: any;
  moreData: any;
}



export function MoreAboutMovie({ state, moreData }: b) {

  return (
    
    <Modal
      open={state.showMore}
      className="flex justify-end bg-[#03090f] bg-opacity-50 backdrop-blur-sm w-screen h-screen"
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
          <ClearRoundedIcon
            className="p-1 rounded-full bg-gray-100/40 absolute top-5 left-5 flex justify-center text-sm transition hover:bg-gray-100/50"
            onClick={() => state.setShowMore(false)}
          />

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

    </Modal>
  )
}