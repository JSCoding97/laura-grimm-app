'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const videos = [
  {
    title: 'Jürgen Müller – Der Ninja-Opi',
    subtitle: 'RNF Beitrag',
    url: 'https://www.rnf.de/mediathek/video/juergen-mueller-der-ninjaopi-aus-seckenheim/',
    thumbnail: '/images/image03.jpg',
  },
  {
    title: 'Freiwilligenwoche – Wir schaffen Demokratie',
    subtitle: 'RNF Beitrag',
    url: 'https://www.rnf.de/mediathek/video/freiwilligenwoche-wir-schaffen-demokratie/',
    thumbnail: '/images/image06.jpg',
  },
  {
    title: 'Turmspringen in Mannheim',
    subtitle: 'RNF Beitrag',
    url: 'https://www.rnf.de/mediathek/video/turmspringen-in-mannheim-mit-welcher-technik-schafft-man-den-10-meter-sprung/',
    thumbnail: '/images/image05.jpg',
  },
]

export default function Showreel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="showreel"
      ref={ref}
      className="py-24 md:py-32 bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold text-primary-400 uppercase tracking-wider mb-4"
          >
            Showreel
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Einblicke in meine Arbeit
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Hier findest du eine Auswahl meiner Arbeit beim Rhein-Neckar-Fernsehen.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative block"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-800">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-zinc-900 ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-zinc-400 mb-2">{video.subtitle}</p>
                  <h3 className="font-display text-xl font-semibold text-white group-hover:text-primary-300 transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
