'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Mic2, Award, Star } from 'lucide-react'

const events = [
  {
    icon: Mic2,
    title: 'Stadionsingen Mannheim',
    position: 'Moderation',
    date: '2025',
    employer: 'Carl-Benz-Stadion',
    location: 'Mannheim',
    description: 'Moderation des Stadionsingens vor tausenden Fans im Carl-Benz-Stadion.',
  },
  {
    icon: Award,
    title: 'Lokalrundfunktage',
    position: 'Speakerin',
    date: '2025',
    employer: 'Lokalrundfunktage',
    location: 'Rhein-Neckar-Region',
    description: 'Vortrag über Moderation und digitale Medien auf der Fachkonferenz für Lokalrundfunk.',
  },
  {
    icon: Mic2,
    title: 'Stadionsingen Mannheim',
    position: 'Moderation',
    date: '2024',
    employer: 'Carl-Benz-Stadion',
    location: 'Mannheim',
    description: 'Moderation des Stadionsingens mit begeisterten Fans im Carl-Benz-Stadion.',
  },
  {
    icon: Star,
    title: 'Stadtfest Mannheim',
    position: 'Moderatorin',
    date: '2023 – heute',
    employer: 'Stadt Mannheim',
    location: 'Mannheim',
    description: 'Live-Moderation auf der Hauptbühne des größten Stadtfests der Region.',
  },
]

export default function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="events"
      ref={ref}
      className="py-24 md:py-32 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4"
          >
            Moderation
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Events & Auftritte
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Eine Auswahl meiner Moderations-Erfahrungen bei Events und auf der Bühne.
          </motion.p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title + event.date}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <event.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="font-display text-lg font-bold">{event.title}</h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium sm:ml-auto">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </span>
                </div>
                
                <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-1">{event.position}</p>
                
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {event.employer} · {event.location}
                  </span>
                </p>
                
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
