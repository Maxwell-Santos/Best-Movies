import { ContentMedia } from "../components/ContentMedia";
import { MovieProvider } from "../providers/MovieContext";
import { MovieTopRatedProvider } from "../providers/MovieTopRatedContext";

export function Index() {

  return (
    <>
      <div className="mb-24">

        <main className="mb-10">

          <MovieProvider> {/*Contexto fazendo uma requisição dos filmes mais populares */}
            <ContentMedia titulo="Mais Populares" id="popular" />
          </MovieProvider>

          <MovieTopRatedProvider> {/*Contexto fazendo uma requisição dos filmes mais votados*/}
            <ContentMedia titulo="aclamados pela crítica" id="lancamento"/>
          </MovieTopRatedProvider>

        </main>
        
      </div>
    </>
  )
} 