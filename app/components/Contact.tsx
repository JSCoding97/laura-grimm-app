'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, ArrowRight, Linkedin, Instagram } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
  }

  const contactInfo = [
    { icon: Mail, label: 'E-Mail', value: 'laura@lauragrimm.de', href: 'mailto:laura@lauragrimm.de' },
    { icon: Phone, label: 'Telefon', value: '+49 171 1143215', href: 'tel:+491711143215' },
    { icon: MapPin, label: 'Standort', value: 'Mannheim, Deutschland', href: '#' },
  ]

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 bg-ice"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-cream rounded-full">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium tracking-wider text-dark/80 uppercase">
              Kontakt
            </span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-6">
            Lassen Sie uns <span className="text-primary">zusammenarbeiten</span>
          </h2>
          <p className="text-lg text-dark/60 max-w-2xl mx-auto">
            Haben Sie ein Event, eine Sendung oder ein Projekt? 
            Ich freue mich darauf, von Ihnen zu hören!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="font-display text-xl font-semibold text-dark mb-6">
                Direkter Kontakt
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-cream/50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-dark/50">{item.label}</p>
                      <p className="font-medium text-dark">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-dark p-6 md:p-8 rounded-2xl">
              <h3 className="font-display text-xl font-semibold text-white mb-6">
                Social Media
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-cream hover:text-dark transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-cream" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-2xl shadow-lg">
              <h3 className="font-display text-2xl font-semibold text-dark mb-8">
                Senden Sie mir eine Nachricht
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Ihr Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark/70 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="ihre@email.de"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-dark/70 mb-2">
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Worum geht es?"
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-dark/70 mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-dark/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt..."
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Nachricht senden
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
