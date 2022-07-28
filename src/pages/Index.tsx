import { ContentMedia } from "../components/ContentMedia";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";
import { MovieProvider } from "../providers/MovieContext";
import { MovieTopRatedProvider } from "../providers/MovieTopRatedContext";

export function Index() {

  return (
    <>

      <Loader />

      <div className="mb-9">

        <main className="mb-10">

          <MovieProvider>
            <ContentMedia titulo="Mais Populares" id="popular" />
          </MovieProvider>

          <MovieTopRatedProvider>
            <ContentMedia titulo="aclamados pela crítica" id="lancamento"/>
          </MovieTopRatedProvider>

        </main>


        <Footer />

      </div>
    </>
  )
}