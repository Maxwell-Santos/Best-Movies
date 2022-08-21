import { Routes, Route } from 'react-router-dom'
import { Index } from './pages/Index'
import { ResultsSearchByGenre } from './pages/ResultsSearchByGenre'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/:genre/:genreName' element={<ResultsSearchByGenre />} />
    </Routes>
  )
}