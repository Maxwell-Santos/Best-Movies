import { Routes, Route } from 'react-router-dom'
import { MoreAboutMovie } from './components/MoreAboutMovie'
import { ResultsSearchByGenre } from './pages/ResultsSearchByGenre'

export function Router() {
  return (
    <Routes>
      <Route path='/:id' element={<MoreAboutMovie/>} />
      <Route path='/:genre/:genreName' element={<ResultsSearchByGenre />} />
    </Routes>
  )
}