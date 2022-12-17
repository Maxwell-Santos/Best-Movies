import { Banner } from "../components/Banner";
import { ContentMedia } from "../components/ContentMedia";
import { MovieProvider } from "../providers/MovieContext";
import { MovieTopRatedProvider } from "../providers/MovieTopRatedContext";

export function Index() {

  return (

    <main className="mb-32">

      <MovieProvider> {/*Contexto fazendo uma requisição dos filmes mais populares */}  
        {/* <Banner /> */}

        <ContentMedia titulo="Mais Populares" id="popular" />
      </MovieProvider>

      <MovieTopRatedProvider> {/*Contexto fazendo uma requisição dos filmes mais votados*/}
        <ContentMedia titulo="aclamados pela crítica" id="lancamento" />
      </MovieTopRatedProvider>

    </main>
  )
} 