import { ContentMedia } from "../components/ContentMedia";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Slide } from "../components/Slide";
import { Title } from "../components/Title";

export function Index(){

  return(
    <div className=" mb-9">
      <Title/>
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