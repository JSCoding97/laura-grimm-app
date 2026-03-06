'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'

const education = [
  {
    icon: GraduationCap,
    degree: 'Master of Arts',
    field: 'Medien und Kommunikation',
    institution: 'Heinrich-Heine-Universität Düsseldorf',
    period: '2015 – 2017',
    description: 'Schwerpunkte: Public Relations, Journalismus, Digitale Medien',
  },
  {
    icon: BookOpen,
    degree: 'Bachelor of Arts',
    field: 'Medien- und Kommunikationswissenschaft',
    institution: 'Universität Mannheim',
    period: '2012 – 2015',
    description: 'Grundlagen der Medienwissenschaft mit Praxisschwerpunkten',
  },
  {
    icon: Award,
    degree: 'Zertifikat',
    field: 'Social Media Management',
    institution: 'HubSpot Academy',
    period: '2020',
    description: 'Spezialisierung auf Content-Strategie und Community Management',
  },
]

const recentEvents = [
  {
    title: 'Lokalrundfunktage 2025',
    role: 'Speakerin',
    location: 'Rhein-Neckar-Region',
    image: '/images/image02.jpg',
  },
  {
    title: 'Stadionsingen Mannheim 2024',
    role: 'Moderation',
    location: 'Carl-Benz-Stadion',
    image: '/images/image02.jpg',
  },
  {
    title: 'Stadtfest Mannheim',
    role: 'Hauptbühnen-Moderatorin',
    location: 'Mannheim',
    image: '/images/image02.jpg',
  },
]

export default function Education() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      id="education"
      ref={containerRef}
      className="relative py-32 bg-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/5 to-dark" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cream/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-cream/10 rounded-full border border-cream/20">
            <GraduationCap className="w-4 h-4 text-cream" />
            <span className="text-sm font-medium tracking-wider text-cream/80 uppercase">
              Qualifikationen
            </span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ausbildung <span className="text-cream">&</span> Events
          </h2>
          <p className="text-lg text-ice/60 max-w-2xl mx-auto">
            Akademische Grundlagen gepaart mit praktischer Erfahrung bei 
            den spannendsten Events der Region.
          </p>
        </motion.div>

        {/* Parallax Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <motion.div style={{ y: y1 }} className="space-y-6">
            <h3 className="font-display text-2xl font-semibold text-cream mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6" />
              Akademischer Werdegang
            </h3>

            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cream/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cream/10 rounded-xl flex items-center justify-center group-hover:bg-cream/20 transition-colors">
                    <item.icon className="w-6 h-6 text-cream" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h4 className="font-display text-lg font-semibold text-white">
                        {item.degree}
                      </h4>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary-300 rounded-full text-xs sm:ml-auto">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-cream/80 font-medium mb-1">{item.field}</p>
                    <p className="text-ice/50 text-sm mb-2">{item.institution}</p>
                    <p className="text-ice/40 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Events Column */}
          <motion.div style={{ y: y2 }} className="space-y-6">
            <h3 className="font-display text-2xl font-semibold text-cream mb-8 flex items-center gap-3">
              <Award className="w-6 h-6" />
              Recent Events
            </h3>

            {recentEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="relative z-20 p-6">
                  <span className="inline-block px-3 py-1 bg-cream/20 text-cream rounded-full text-xs font-medium mb-3">
                    {event.role}
                  </span>
                  <h4 className="font-display text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h4>
                  <p className="text-ice/60 text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
