'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/image02.jpg"
          alt="Laura Grimm"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider text-white/80 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              Professionalität trifft Leidenschaft
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 text-white"
            >
              Laura Grimm
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-light text-zinc-300 mb-6"
            >
              Moderation aus der Rhein-Neckar-Region
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-zinc-400 mb-10 leading-relaxed"
            >
              Für Ihr Event, Ihre Fernsehsendung oder Ihren Podcast: Professionelle Moderation 
              mit Herz, Stimme und einem feinen Gespür für Menschen und Momente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#contact"
                className="group flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-xl"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#showreel"
                className="flex items-center gap-2 px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                <Play className="w-5 h-5" />
                Showreel ansehen
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="/images/image02.jpg"
                alt="Laura Grimm"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-xl">
              <p className="text-sm font-medium text-zinc-900 dark:text-white">Rhein-Neckar-Fernsehen</p>
              <p className="text-xs text-zinc-500">Moderatorin seit 2023</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
