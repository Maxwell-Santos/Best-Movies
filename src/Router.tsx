import { Routes, Route } from 'react-router-dom'
import { ResultsSearchByGenre } from './pages/ResultsSearchByGenre'

export function Router() {
  return (
    <Routes>
      <Route path='/:genre/:genreName' element={<ResultsSearchByGenre />} />
    </Routes>
  )
}