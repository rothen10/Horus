'use client'

import { useEffect, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const values = [
    t('about.values.innovation'),
    t('about.values.quality'),
    t('about.values.trust'),
    t('about.values.expertise'),
    t('about.values.service'),
    t('about.values.passion'),
  ]

  return (
    <section id="about" className="relative w-full py-24 bg-card/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div id="about-section" className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-sm text-accent font-medium">À Propos de Nous</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {t('about.title')}
              </h2>

              {/* Description */}
              <p className="text-lg text-foreground/70 leading-relaxed">
                {t('about.description')}
              </p>

              <p className="text-lg text-foreground/70 leading-relaxed">
                {t('about.mission')}: {t('about.missionText')}
              </p>

              {/* Values Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${index * 50 + 200}ms` : '0ms',
                    }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 font-medium">{value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all transform hover:scale-105"
                >
                  {t('header.quote')}
                </a>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div
            className={`relative h-96 md:h-full transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl border border-accent/30 overflow-hidden flex items-center justify-center">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-grid opacity-10"></div>

              {/* Content */}
              <div className="relative z-10 text-center space-y-8 p-8">
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-accent">15+</div>
                  <div className="text-foreground/60">Années d'Excellence</div>
                </div>

                <div className="border-t border-b border-accent/30 py-8 space-y-4">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-accent">500+</div>
                    <div className="text-foreground/60">{t('about.stats.clients')}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent">1000+</div>
                  <div className="text-foreground/60">{t('about.stats.drones')}</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-accent/10 rounded-lg transform rotate-45"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid {
          background-image: linear-gradient(
            0deg,
            transparent 24%,
            rgba(255, 165, 0, 0.05) 25%,
            rgba(255, 165, 0, 0.05) 26%,
            transparent 27%,
            transparent 74%,
            rgba(255, 165, 0, 0.05) 75%,
            rgba(255, 165, 0, 0.05) 76%,
            transparent 77%,
            transparent
          ),
          linear-gradient(
            90deg,
            transparent 24%,
            rgba(255, 165, 0, 0.05) 25%,
            rgba(255, 165, 0, 0.05) 26%,
            transparent 27%,
            transparent 74%,
            rgba(255, 165, 0, 0.05) 75%,
            rgba(255, 165, 0, 0.05) 76%,
            transparent 77%,
            transparent
          );
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  )
}
