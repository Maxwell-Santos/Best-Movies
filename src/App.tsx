import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Index } from "./pages/Index";
import { ResultSearchByName } from "./pages/ResultSearchByName";
import { Router } from "./Router";
import { SearchByName } from "./services/SearchByName";

export function App() {
  return (
    
    <BrowserRouter>
      <Index />
      <Router />
      <ResultSearchByName />
      <Footer />
    </BrowserRouter>
  )

}
