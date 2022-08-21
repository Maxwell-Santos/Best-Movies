import { ContentMedia } from "../components/ContentMedia";
import { Footer } from "../components/Footer";
import { MovieProvider } from "../providers/MovieContext";
import { MovieTopRatedProvider } from "../providers/MovieTopRatedContext";

export function Index() {

  return (
    <>
      <div className="mb-9">

        <main className="mb-10">

          <MovieProvider> {/*Contexto fazendo uma requisição dos filmes mais populares */}
            <ContentMedia titulo="Mais Populares" id="popular" />
          </MovieProvider>

          <MovieTopRatedProvider> {/*Contexto fazendo uma requisição dos filmes mais votados*/}
            <ContentMedia titulo="aclamados pela crítica" id="lancamento"/>
          </MovieTopRatedProvider>

        </main>
        
        <Footer />
      </div>
    </>
  )
} 