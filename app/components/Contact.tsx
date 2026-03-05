'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react'

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="deine@email.de"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Worum geht's?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  placeholder="Deine Nachricht..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-medium hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4" />
                Nachricht senden
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors group"
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
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary-100 to-rose-100 dark:from-primary-900/30 dark:to-rose-900/30"
            >
              <p className="text-zinc-700 dark:text-zinc-300 italic text-lg">
                &ldquo;Menschen unterhalten mit Freude und Leichtigkeit.&rdquo;
              </p>
              <p className="mt-4 font-display text-xl font-semibold">Laura Grimm</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
