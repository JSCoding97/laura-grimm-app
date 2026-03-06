'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Heart, Mic, Users, Sparkles } from 'lucide-react'

const highlights = [
  { icon: Mic, label: 'Live-Moderation', value: '50+' },
  { icon: Users, label: 'Zufriedene Kunden', value: '30+' },
  { icon: Heart, label: 'Leidenschaft', value: '100%' },
  { icon: Sparkles, label: 'Jahre Erfahrung', value: '10+' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 bg-ice overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cream/30 -skew-x-12 transform origin-top-right" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/image02.jpg"
                alt="Laura Grimm"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl"
            >
              <p className="text-4xl font-display font-bold text-primary">10+</p>
              <p className="text-sm text-dark/60">Jahre Erfahrung</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-cream rounded-full"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium tracking-wider text-dark/80 uppercase">
                Über mich
              </span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl font-bold text-dark mb-6 leading-tight"
            >
              Moderation mit<br />
              <span className="text-primary">Herz und Hingabe</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-dark/70 text-lg leading-relaxed"
            >
              <p>
                Ich bin Laura, Moderatorin aus der Rhein-Neckar-Region – mit Herz, 
                Stimme und echter Leidenschaft für Bühne und Publikum.
              </p>
              <p>
                Schon früh habe ich meine Begeisterung für das Fernsehen und die 
                Moderation entdeckt. Heute lebe ich diesen Traum und begleite Events 
                mit Professionalität, Charme und einem feinen Gespür für Menschen und Momente.
              </p>
              <p>
                Von der ersten Praktikumserfahrung beim Radio bis hin zur aktuellen 
                Position als Referentin für Presse und Öffentlichkeitsarbeit – mein 
                Weg führte mich durch alle Facetten der Medienwelt.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-white rounded-xl shadow-sm"
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-display font-bold text-dark">{item.value}</p>
                  <p className="text-xs text-dark/60">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
