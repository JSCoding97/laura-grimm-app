'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold">Laura Grimm</span>
            <span className="text-zinc-400">|</span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Moderation</span>
          </div>
          
          <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary-500 fill-current" /> in Mannheim
          </p>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/impressum"
              className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Impressum
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              &copy; {currentYear} Laura Grimm
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
