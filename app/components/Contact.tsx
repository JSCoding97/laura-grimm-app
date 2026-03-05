'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Image from 'next/image'

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+49 171 1143215',
    href: 'tel:+491711143215',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'laura@lauragrimm.de',
    href: 'mailto:laura@lauragrimm.de',
  },
  {
    icon: MapPin,
    label: 'Standort',
    value: 'Mannheim, Deutschland',
    href: '#',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="contact"
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
            Kontakt
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Lass uns reden
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Du hast ein Event, eine Sendung oder ein Projekt? Ich freue mich auf deine Nachricht.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/image01.jpg"
                alt="Laura Grimm"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-6 rounded-2xl shadow-xl max-w-xs">
              <p className="text-zinc-200 dark:text-zinc-600 italic text-sm mb-2">
                "Menschen unterhalten mit Freude und Leichtigkeit."
              </p>
              <p className="font-display font-semibold">Laura Grimm</p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-zinc-950 p-8 rounded-3xl shadow-lg">
              <h3 className="font-display text-2xl font-bold mb-6">Direkter Kontakt</h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.label}</p>
                      <p className="font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href="mailto:laura@lauragrimm.de"
                className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                <Send className="w-5 h-5" />
                E-Mail schreiben
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
