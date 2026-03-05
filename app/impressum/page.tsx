'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Impressum() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-12">
            Impressum
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                Angaben gemäß § 5 DDG
              </h2>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl">
                <p className="text-lg mb-2">Laura Grimm</p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">C7 1</p>
                <p className="text-zinc-600 dark:text-zinc-400">68159 Mannheim</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                Kontakt
              </h2>
              <div className="space-y-4">
                <a 
                  href="tel:+491711143215"
                  className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +49 171 1143215
                </a>
                <a 
                  href="mailto:laura@lauragrimm.de"
                  className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  laura@lauragrimm.de
                </a>
                <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                  <MapPin className="w-5 h-5" />
                  Mannheim, Deutschland
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                Haftungsausschluss
              </h2>
              
              <h3 className="text-lg font-medium mb-3">Haftung für Inhalte</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von 
                Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche 
                Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung 
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte 
                umgehend entfernen.
              </p>

              <h3 className="text-lg font-medium mb-3">Haftung für Links</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten 
                ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei 
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-lg font-medium mb-3">Urheberrecht</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser 
                Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
                Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf 
                eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>

              <h3 className="text-lg font-medium mb-3">Datenschutz</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
                Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder 
                eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. 
                Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. 
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation 
                per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem 
                Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht 
                veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich 
                angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. 
                Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der 
                unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
