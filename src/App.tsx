import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Index } from "./pages/Index";
import { ResultsSearchByGenre } from "./pages/ResultsSearchByGenre";
import { Router } from "./Router";

export function App() {
  return (
    
    <BrowserRouter>
      <Index />
      <Router />
      <Footer />
    </BrowserRouter>
  )

}
