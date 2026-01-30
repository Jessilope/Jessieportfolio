import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Lexi from './pages/Lexi'
import DollarCity from './pages/DollarCity'
import TuCredit from './pages/TuCredit'
import TripFinder from './pages/TripFinder'

function App() {
  return (
    <Router>
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
