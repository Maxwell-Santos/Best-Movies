import { ArrowBack } from "@mui/icons-material";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";


interface HeaderTitle {
  genreTitle?: string;
}

export function Header({ genreTitle }: HeaderTitle) {
  // const [showHeader, setShowHeader] = useState(false);

  // const referencia = useRef(null);

  // window.addEventListener('scroll', () => {
  //   let scroll = window.scrollY;

  //   if(scroll >= 180){
  //     setShowHeader(true)

  //   } else {
  //     setShowHeader(false)
  //   }
  // });


  return (
    <div>
      <Link
      to='/'
      className={`
      absolute left-5 top-4 md:top-5 
      p-5 h-5 w-5
      hover:bg-zinc-100/30 
      rounded-full transition-all 
      flex justify-center items-center
      `}
      >
        <ArrowBack />
      </Link>

      <h1
        className='block text-xl md:text-2xl lg:text-4xl font-bold uppercase text-center tracking-wide'
      >

        {genreTitle}
      </h1>
    </div>
  )
}
