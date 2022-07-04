import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { MoreAboutMovie } from "./pages/MoreAboutMovie";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={ <Index/> } />
      <Route path="/about" element={ <MoreAboutMovie/> } />
    </Routes>
  )
}