import { ContentMedia } from "../components/ContentMedia";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";
import { MovieProvider } from "../providers/MovieContext";

export function Index() {

  return (
    <>
      
      <Loader />

      <div className="mb-9">
        <MovieProvider>

          <main className="mb-10">
            <ContentMedia titulo="Lançamentos" />
            <ContentMedia titulo="Séries" />
            <ContentMedia titulo="Cartoons" />
            <ContentMedia titulo="Aclamados pela crítica" />
          </main>
          
        </MovieProvider>

        <Footer />

      </div>
    </>
  )
}