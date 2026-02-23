import React, { useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  const [route, setRoute] = useState('home')
  return (
    <div className="app">
      <Nav route={route} setRoute={setRoute} />
      <main className="container">
        {route === 'home' && <Home />}
        {route === 'about' && <About />}
        {route === 'projects' && <Projects />}
        {route === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}
