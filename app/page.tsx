'use client'

import Hero from './components/Hero'
import About from './components/About'
import Career from './components/Career'
import Events from './components/Events'
import Showreel from './components/Showreel'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Career />
      <Events />
      <Showreel />
      <Contact />
      <Footer />
    </main>
  )
}
