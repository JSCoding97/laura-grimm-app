'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Mic2, Users, Award, Star } from 'lucide-react'
import Image from 'next/image'

const events = [
  {
    icon: Mic2,
    title: 'Stadionsingen Mannheim',
    position: 'Moderation',
    date: '2025',
    employer: 'Carl-Benz-Stadion',
    location: 'Mannheim',
    description: 'Moderation des Stadionsingens vor tausenden Fans im Carl-Benz-Stadion.',
    image: '/images/image04.jpg',
  },
  {
    icon: Award,
    title: 'Lokalrundfunktage',
    position: 'Speakerin',
    date: '2025',
    employer: 'Lokalrundfunktage',
    location: 'Rhein-Neckar-Region',
    description: 'Vortrag über Moderation und digitale Medien auf der Fachkonferenz für Lokalrundfunk.',
    image: null,
  },
  {
    icon: Mic2,
    title: 'Stadionsingen Mannheim',
    position: 'Moderation',
    date: '2024',
    employer: 'Carl-Benz-Stadion',
    location: 'Mannheim',
    description: 'Moderation des Stadionsingens mit begeisterten Fans im Carl-Benz-Stadion.',
    image: '/images/image04.jpg',
  },
  {
    icon: Star,
    title: 'Stadtfest Mannheim',
    position: 'Moderatorin',
    date: '2023 – heute',
    employer: 'Stadt Mannheim',
    location: 'Mannheim',
    description: 'Live-Moderation auf der Hauptbühne des größten Stadtfests der Region.',
    image: '/images/image01.jpg',
  },
  {
    icon: Mic2,
    title: 'RNF Beiträge',
    position: 'Moderatorin & Redakteurin',
    date: '2021 – 2026',
    employer: 'Rhein-Neckar-Fernsehen',
    location: 'Rhein-Neckar-Region',
    description: 'Moderation und Redaktion für lokale Fernsehformate beim ältesten privaten regionalen Fernsehsender Deutschlands.',
    image: '/images/image03.jpg',
  },
]

export default function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="events"
      ref={ref}
      className="py-24 md:py-32 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Eine Auswahl meiner Moderations-Erfahrungen bei Events, im Fernsehen und auf der Bühne.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-primary-500 to-zinc-200 dark:to-zinc-800 hidden md:block" />

          <div className="space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={event.title + event.date}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-xl font-bold mb-1">{event.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{event.position}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.employer} · {event.location}
                      </span>
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400">{event.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center shadow-lg">
                    <event.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  {event.image && (
                    <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ${
                      index % 2 === 0 ? '' : 'md:order-first'
                    }`}>
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
