import { Routes, Route } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Thesis from './components/Thesis'

function HomePage() {
  return (
    <>
      <Hero />
      <Journey />
      <Projects />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/consumer-neobank-thesis" element={<Thesis />} />
    </Routes>
  )
}

export default App
