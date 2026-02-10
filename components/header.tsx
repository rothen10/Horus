'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import ThemeLanguageToggle from './theme-language-toggle'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 transform group-hover:scale-110 transition-transform">
            <svg viewBox="0 0 512 384" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <rect x="30" y="180" width="120" height="24" rx="12" fill="hsl(39, 95%, 54%)" />
              <rect x="80" y="80" width="20" height="120" rx="10" fill="currentColor" />
              <rect x="50" y="50" width="80" height="20" rx="10" fill="currentColor" transform="rotate(-45 90 60)" />
              <rect x="362" y="180" width="120" height="24" rx="12" fill="hsl(39, 95%, 54%)" />
              <rect x="412" y="80" width="20" height="120" rx="10" fill="currentColor" />
              <circle cx="256" cy="192" r="90" fill="none" stroke="hsl(39, 95%, 54%)" strokeWidth="16" />
              <g transform="translate(256, 192)">
                <path d="M 0,-70 L 60,-20 L 35,55 L -35,55 L -60,-20 Z" fill="hsl(39, 95%, 54%)" opacity="0.8" />
                <path d="M 0,-70 L 60,-20 L 35,55 L -35,55 L -60,-20 Z" fill="hsl(39, 95%, 54%)" opacity="0.4" transform="rotate(120)" />
                <path d="M 0,-70 L 60,-20 L 35,55 L -35,55 L -60,-20 Z" fill="hsl(39, 95%, 54%)" opacity="0.2" transform="rotate(240)" />
                <circle cx="0" cy="0" r="8" fill="currentColor" />
              </g>
            </svg>
          </div>
          <span className="text-xl font-bold text-foreground hidden sm:inline">Horus</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium">
            {t('header.services')}
          </a>
          <a href="#about" className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium">
            {t('header.about')}
          </a>
          <a href="#gallery" className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium">
            {t('header.gallery')}
          </a>
          <a href="#testimonials" className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium">
            {t('header.testimonials')}
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium">
            {t('header.contact')}
          </a>
        </nav>

        {/* Right Section - Toggles and CTA */}
        <div className="hidden md:flex items-center gap-6">
          <ThemeLanguageToggle />
          <a
            href="#contact"
            className="px-6 py-2.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:bg-accent/90 transition-all transform hover:scale-105"
          >
            {t('header.quote')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeLanguageToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="#services" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-accent transition-colors py-2">
              {t('header.services')}
            </a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-accent transition-colors py-2">
              {t('header.about')}
            </a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-accent transition-colors py-2">
              {t('header.gallery')}
            </a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-accent transition-colors py-2">
              {t('header.testimonials')}
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-accent transition-colors py-2">
              {t('header.contact')}
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full px-6 py-2.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:bg-accent/90 transition-all text-center"
            >
              {t('header.quote')}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
