'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Mic2, Users, Sparkles } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: Heart,
    title: 'Mit Herz',
    description: 'Echte Leidenschaft für jedes Event und jede Sendung.',
  },
  {
    icon: Mic2,
    title: 'Mit Stimme',
    description: 'Professionelle Moderation für Fernsehen, Radio und Podcasts.',
  },
  {
    icon: Users,
    title: 'Mit Publikum',
    description: 'Ein feines Gespür für Menschen und Momente.',
  },
  {
    icon: Sparkles,
    title: 'Mit Hingabe',
    description: 'Charme und Professionalität auf jeder Bühne.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <Image
              src="/images/image04.jpg"
              alt="Laura Grimm bei der Arbeit"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4"
            >
              Über mich
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Moderation mit Herz und Hingabe
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed"
            >
              Ich bin Laura, Moderatorin aus der Rhein-Neckar-Region. Schon früh habe ich 
              meine Begeisterung für das Fernsehen und die Moderation entdeckt – heute 
              lebe ich diesen Traum und begleite Events mit Professionalität, Charme und 
              einem feinen Gespür für Menschen und Momente.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10"
            >
              Ob Fernsehsendung, Radio, Podcast oder Live-Event – ich bringe Leidenschaft 
              und Professionalität mit, die jedes Format bereichert.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
