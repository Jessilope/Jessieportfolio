import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Lexi from './pages/Lexi'
import DollarCity from './pages/DollarCity'
import TuCredit from './pages/TuCredit'
import TripFinder from './pages/TripFinder'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lexi" element={<Lexi />} />
        <Route path="/dollarcity" element={<DollarCity />} />
        <Route path="/tucredit" element={<TuCredit />} />
        <Route path="/tripfinder" element={<TripFinder />} />
      </Routes>
    </Router>
  )
}

export default App
