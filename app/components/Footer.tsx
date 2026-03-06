'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Über mich', href: '#about' },
  { name: 'Karriere', href: '#career' },
  { name: 'Ausbildung', href: '#education' },
  { name: 'Kontakt', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-2xl font-bold text-cream mb-4">
              Laura Grimm
            </h3>
            <p className="text-ice/60 text-sm leading-relaxed">
              Moderatorin und Journalistin aus der Rhein-Neckar-Region. 
              Mit Herz, Stimme und Leidenschaft für Ihr Event.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="font-display text-sm font-semibold text-cream uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-ice/60 hover:text-cream transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex md:justify-end"
          >
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-6 py-3 border border-cream/30 rounded-full hover:bg-cream/10 transition-all"
            >
              <span className="text-sm text-cream">Nach oben</span>
              <ArrowUp className="w-4 h-4 text-cream group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-ice/40 text-sm">
              © {new Date().getFullYear()} Laura Grimm. Alle Rechte vorbehalten.
            </p>
            <p className="text-ice/40 text-sm flex items-center gap-1">
              Mit <Heart className="w-4 h-4 text-primary inline" /> gemacht
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
