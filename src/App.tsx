import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {
  // const URL = 'https://api.themoviedb.org/3/movie/459151?api_key=0e719d679bc60373b0188b1edb2d1726&language=pt-BR';

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );

}
