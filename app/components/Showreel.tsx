'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, ExternalLink } from 'lucide-react'

const videos = [
  {
    title: 'Jürgen Müller – Der Ninja-Opi',
    url: 'https://www.rnf.de/mediathek/video/juergen-mueller-der-ninjaopi-aus-seckenheim/',
    thumbnail: '/thumbnails/ninja-opi.jpg',
  },
  {
    title: 'Freiwilligenwoche – Wir schaffen Demokratie',
    url: 'https://www.rnf.de/mediathek/video/freiwilligenwoche-wir-schaffen-demokratie/',
    thumbnail: '/thumbnails/demokratie.jpg',
  },
  {
    title: 'Turmspringen in Mannheim',
    url: 'https://www.rnf.de/mediathek/video/turmspringen-in-mannheim-mit-welcher-technik-schafft-man-den-10-meter-sprung/',
    thumbnail: '/thumbnails/turmspringen.jpg',
  },
]

export default function Showreel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="showreel"
      ref={ref}
      className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4"
          >
            Showreel
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Einblicke in meine Arbeit
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
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
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                {/* Placeholder for thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-rose-200 dark:from-primary-900/50 dark:to-rose-900/50" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-zinc-900/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary-600 dark:text-primary-400 ml-1" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 dark:group-hover:bg-white/10 transition-colors duration-300" />
              </div>

              <div className="mt-4 flex items-start justify-between">
                <h3 className="font-display text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {video.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-zinc-400 flex-shrink-0 ml-2" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
