import { ContentMedia } from "../components/ContentMedia";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Slide } from "../components/Slide";
import { Title } from "../components/Title";
import { MovieProvider } from "../providers/MovieContext";

export function Index() {

  return (
    <div
      className="mb-9"
    >
      <Title />
      <Slide />

      <main
        className="mb-10"
      >
        <MovieProvider>
          <ContentMedia titulo="Lançamentos" />
          <ContentMedia titulo="Séries" />
          <ContentMedia titulo="Cartoons" />
          <ContentMedia titulo="Aclamados pela crítica" />
        </MovieProvider>
      </main>

      <Nav />
      <Footer />

    </div>
  )
}