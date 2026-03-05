'use client'

import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Showreel from './components/Showreel'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Showreel />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
