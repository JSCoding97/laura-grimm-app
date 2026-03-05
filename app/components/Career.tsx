'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Calendar, MapPin, Briefcase } from 'lucide-react'

const jobs = [
  {
    title: 'Referentin Presse- und Öffentlichkeitsarbeit',
    company: 'Rheinbrückengesellschaft Ludwigshafen-Mannheim mbH',
    type: 'Vollzeit · Hybrid',
    date: 'Feb. 2026 – Heute',
    location: 'Ludwigshafen am Rhein, Rheinland-Pfalz',
    description: 'Ich habe die Uferseite gewechselt. Und das im doppelten Sinn 🎥🎙️ Zuletzt war ich als leidenschaftliche Journalistin für den ältesten privaten regionalen Fernsehsender Deutschlands unterwegs. Nun bin ich als Referentin für Presse- und Öffentlichkeitsarbeit bei der Rheinbrückengesellschaft Mannheim-Ludwigshafen mbH tätig und freue mich, auch weiterhin einen Beitrag für die Metropolregion Rhein-Neckar leisten zu können.',
  },
  {
    title: 'Social Media Manager, Videojournalistin und Moderatorin',
    company: 'RNF GmbH',
    type: 'Vollzeit',
    date: 'Sept. 2021 – März 2026',
    location: 'Heidelberg, Baden-Württemberg',
    description: 'Moderation und Redaktion für lokale Fernsehformate. Social Media Management und Videojournalismus für den ältesten privaten regionalen Fernsehsender Deutschlands.',
  },
  {
    title: 'Presse & Content Managerin',
    company: 'DEUTSCHE WOHNWERTE GmbH & Co. KG',
    type: 'Vollzeit',
    date: 'März 2021 – Sept. 2021',
    location: 'Heidelberg, Baden-Württemberg',
    description: 'Pressearbeit und Content Management für ein Immobilienunternehmen.',
  },
  {
    title: 'PR-Beraterin/Redakteurin',
    company: 'Arthen Kommunikation GmbH',
    type: 'Vollzeit',
    date: 'Juni 2020 – März 2021 · 10 Monate',
    location: 'Karlsruhe, Baden-Württemberg',
    description: 'Beratung und Umsetzung von PR-Maßnahmen für verschiedene Kunden.',
  },
  {
    title: 'Volontärin',
    company: 'dm-drogerie markt (Pressestelle)',
    type: 'Vollzeit',
    date: 'März 2019 – Juni 2020 · 1 Jahr 4 Monate',
    location: 'Karlsruhe, Baden-Württemberg',
    description: 'Volontariat in der Pressestelle eines der größten Drogeriemärkte Deutschlands.',
  },
  {
    title: 'PR-Managerin',
    company: 'børding messe / boerding messe GmbH & Co KG',
    type: 'Vollzeit',
    date: 'Apr. 2018 – Feb. 2019 · 11 Monate',
    location: 'Karlsruhe, Baden-Württemberg',
    description: 'Schriftliche Kommunikation, Facebook-Marketing und PR-Management für Messeveranstaltungen.',
  },
  {
    title: 'Sendungsproducerin',
    company: 'SWR',
    type: 'Vollzeit',
    date: 'Juni 2017 – Dez. 2017 · 7 Monate',
    location: 'Baden-Baden, Baden-Württemberg',
    description: 'Produktion von Radiosendungen und Podcasts. Schriftliche Kommunikation und Zeitmanagement.',
  },
  {
    title: 'Praktikum',
    company: 'Radio Salü (EURO-RADIO SAAR GmbH)',
    type: 'Praktikum',
    date: 'Aug. 2016 – Okt. 2016 · 3 Monate',
    location: 'Saarland',
    description: 'Praktikum im Bereich Hörfunk. Schriftliche Kommunikation und Zeitmanagement.',
  },
  {
    title: 'Praktikum',
    company: 'Radio Regenbogen',
    type: 'Praktikum',
    date: 'Feb. 2016 – Mai 2016 · 4 Monate',
    location: 'Mannheim, Baden-Württemberg',
    description: 'Erstes Praktikum im Hörfunk und die Grundlage für meine spätere Karriere im Medienbereich.',
  },
]

export default function Career() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="career"
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
            Berufserfahrung
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Mein beruflicher Werdegang
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Von ersten Praktika über Volontariat bis hin zur aktuellen Position – 
            mein Weg durch die Medien- und Kommunikationsbranche.
          </motion.p>
        </div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title + job.date}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="group bg-white dark:bg-zinc-950 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white">
                      {job.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full text-sm">
                      <Calendar className="w-3 h-3" />
                      {job.date}
                    </span>
                  </div>

                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {job.company}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </span>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {job.description}
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
