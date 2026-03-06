'use client'

import Hero from './components/Hero'
import About from './components/About'
import Career from './components/Career'
import Education from './components/Education'
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
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
