'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { label: 'Ventes', href: '#services' },
      { label: 'Maintenance', href: '#services' },
      { label: 'Formations', href: '#services' },
    ],
    Entreprise: [
      { label: 'À propos', href: '#about' },
      { label: 'Galerie', href: '#gallery' },
      { label: 'Projets', href: '/projects' },
      { label: 'Témoignages', href: '#testimonials' },
    ],
    Ressources: [
      { label: 'Blog', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Documentation', href: '#' },
    ],
    Légal: [
      { label: 'Mentions légales', href: '#' },
      { label: 'Politique de confidentialité', href: '#' },
      { label: 'Conditions générales', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative w-full bg-card border-t border-border overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-accent-foreground font-bold text-lg">D</span>
              </div>
              <span className="text-lg font-bold text-foreground">DroneElite</span>
            </Link>

            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour les solutions drone premium, maintenance experte et formations professionnelles.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground text-accent flex items-center justify-center transition-all transform hover:scale-110"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-t border-border">
          <a href="tel:+33123456789" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-xs text-foreground/60">Téléphone</div>
              <div className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">+33 1 23 45 67 89</div>
            </div>
          </a>

          <a href="mailto:contact@droneelite.fr" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-xs text-foreground/60">Email</div>
              <div className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">contact@droneelite.fr</div>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-xs text-foreground/60">Adresse</div>
              <div className="text-sm font-semibold text-foreground">75001 Paris, France</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-foreground/60">
            © {currentYear} DroneElite. Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Conditions générales
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#"
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all opacity-0 hover:opacity-100 pointer-events-none hover:pointer-events-auto"
        style={{
          opacity: typeof window !== 'undefined' && window.scrollY > 400 ? 1 : 0,
          pointerEvents: typeof window !== 'undefined' && window.scrollY > 400 ? 'auto' : 'none',
        }}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </footer>
  )
}
