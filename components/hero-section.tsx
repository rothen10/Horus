'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        ></div>
        <div
          className={`absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        ></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              {/* Subtitle */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="text-sm text-accent font-medium">Innovation Technologique</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
                <span className="text-foreground">{t('hero.main').split('\n')[0] || 'Envolez-vous vers'}</span>
                <br />
                <span className="text-accent">{t('hero.main').split('\n')[1] || 'l\'Excellence'}</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
                {t('hero.subtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all transform hover:scale-105 active:scale-95"
                >
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent/10 transition-all"
                >
                  Voir nos services
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-accent">10+</div>
                  <div className="text-sm text-foreground/60">{t('hero.stats.projects')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-sm text-foreground/60">{t('hero.stats.satisfaction')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-sm text-foreground/60">{t('hero.stats.team')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Drone Image */}
          <div
            className={`relative h-96 md:h-full flex items-center justify-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Floating animation wrapper */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent rounded-full blur-2xl"></div>

              {/* Drone Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <Image
                  src="/drone.png"
                  alt="Drone premium 3D"
                  fill
                  sizes="(max-width: 768px) 320px, 384px"
                  className="object-contain drop-shadow-2xl"
                  priority
                  style={{
                    animation: 'float 6s ease-in-out infinite',
                    filter: 'drop-shadow(0 20px 40px rgba(255, 165, 0, 0.3))',
                  }}
                />
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border-2 border-accent/20 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute w-3/4 h-3/4 rounded-full border-2 border-primary/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(-5deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  )
}
