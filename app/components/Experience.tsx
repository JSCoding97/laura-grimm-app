'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Radio, Tv, Calendar, Mic, Users, Award } from 'lucide-react'

const experiences = [
  {
    icon: Tv,
    title: 'Sendungsproducerin',
    company: 'DASDING // SWR',
    description: 'Produktion von Radiosendungen und Podcasts für die junge Zielgruppe.',
  },
  {
    icon: Radio,
    title: 'Redakteurin',
    company: 'Radio Regenbogen',
    description: 'Redaktionelle Arbeit und Content-Erstellung für den Sender.',
  },
  {
    icon: Mic,
    title: 'Moderatorin & Redakteurin',
    company: 'Rhein-Neckar-Fernsehen',
    description: 'Moderation und Redaktion für lokale Fernsehformate.',
  },
  {
    icon: Calendar,
    title: 'Stadtfest Mannheim',
    company: 'Seit 2023',
    description: 'Live-Moderation auf der Hauptbühne des Mannheimer Stadtfests.',
  },
  {
    icon: Users,
    title: 'Stadionsingen Mannheim',
    company: '2024',
    description: 'Moderation des Stadionsingens im Carl-Benz-Stadion.',
  },
  {
    icon: Award,
    title: 'Speakerin',
    company: 'Lokalrundfunktage 2025',
    description: 'Vortrag über Moderation und digitale Medien.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 md:py-32 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4"
          >
            Erfahrung
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Bekannt aus dem Rhein-Neckar-Fernsehen
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Eine Auswahl meiner bisherigen Stationen und Highlights.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <exp.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
