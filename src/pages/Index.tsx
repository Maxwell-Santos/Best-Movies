import { useEffect, useState } from "react";
import { ContentMedia } from "../components/ContentMedia";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Slide } from "../components/Slide";

export function Index(){

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/company/521/movie?api_key=0e719d679bc60373b0188b1edb2d1726&language=pt-BR')
    .then(data => data.json())
    .then(response => console.log(response))
  },[])
  return(
    <div className=" mb-9">
      <Slide />

      <div className="mb-10">
        <ContentMedia titulo="Lançamentos" />
        <ContentMedia titulo="Séries" />
        <ContentMedia titulo="Cartoons" />
        <ContentMedia titulo="Aclamados pela crítica" />
        
      </div>
      <Nav />
      <Footer />

    </div>
  )
}