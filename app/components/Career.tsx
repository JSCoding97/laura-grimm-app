'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Calendar, MapPin, Briefcase, Sparkles } from 'lucide-react'

const jobs = [
  {
    title: 'Referentin Presse- und Öffentlichkeitsarbeit',
    company: 'Rheinbrückengesellschaft Ludwigshafen-Mannheim mbH',
    type: 'Vollzeit · Hybrid',
    date: 'Feb. 2026 – Heute',
    location: 'Ludwigshafen am Rhein, Rheinland-Pfalz',
    description: 'Ich habe die Uferseite gewechselt. Und das im doppelten Sinn 🎥🎙️ Zuletzt war ich als leidenschaftliche Journalistin für den ältesten privaten regionalen Fernsehsender Deutschlands unterwegs. Nun bin ich als Referentin für Presse- und Öffentlichkeitsarbeit bei der Rheinbrückengesellschaft Mannheim-Ludwigshafen mbH tätig.',
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
    date: 'Juni 2020 – März 2021',
    location: 'Karlsruhe, Baden-Württemberg',
    description: 'Beratung und Umsetzung von PR-Maßnahmen für verschiedene Kunden.',
  },
  {
    title: 'Volontärin',
    company: 'dm-drogerie markt (Pressestelle)',
    type: 'Vollzeit',
    date: 'März 2019 – Juni 2020',
    location: 'Karlsruhe, Baden-Württemberg',
    description: 'Volontariat in der Pressestelle eines der größten Drogeriemärkte Deutschlands.',
  },
  {
    title: 'PR-Managerin',
    company: 'børding messe GmbH & Co KG',
    type: 'Vollzeit',
    date: 'Apr. 2018 – Feb. 2019',
    location: 'Karlsruhe, Baden-Württemberg',
    description: 'Schriftliche Kommunikation, Facebook-Marketing und PR-Management für Messeveranstaltungen.',
  },
  {
    title: 'Sendungsproducerin',
    company: 'SWR',
    type: 'Vollzeit',
    date: 'Juni 2017 – Dez. 2017',
    location: 'Baden-Baden, Baden-Württemberg',
    description: 'Produktion von Radiosendungen und Podcasts. Schriftliche Kommunikation und Zeitmanagement.',
  },
  {
    title: 'Praktikum',
    company: 'Radio Salü',
    type: 'Praktikum',
    date: 'Aug. 2016 – Okt. 2016',
    location: 'Saarland',
    description: 'Praktikum im Bereich Hörfunk. Schriftliche Kommunikation und Zeitmanagement.',
  },
  {
    title: 'Praktikum',
    company: 'Radio Regenbogen',
    type: 'Praktikum',
    date: 'Feb. 2016 – Mai 2016',
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
      className="py-32 bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-dark/5 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium tracking-wider text-dark/80 uppercase">
              Berufserfahrung
            </span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-dark mb-6"
          >
            Mein beruflicher <span className="text-primary">Werdegang</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-dark/60 max-w-2xl mx-auto"
          >
            Von ersten Praktika über Volontariat bis hin zur aktuellen Position – 
            mein Weg durch die Medien- und Kommunikationsbranche.
          </motion.p>
        </div>

        {/* Job List */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title + job.date}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-dark/5"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Building2 className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="font-display text-xl font-bold text-dark">
                      {job.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream text-dark/70 rounded-full text-sm">
                      <Calendar className="w-3 h-3" />
                      {job.date}
                    </span>
                  </div>

                  <p className="text-primary font-medium mb-2">
                    {job.company}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-dark/50">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </span>
                  </div>

                  <p className="text-dark/70 leading-relaxed">
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
