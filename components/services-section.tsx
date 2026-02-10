'use client'

import { useEffect, useState } from 'react'
import { Zap, Wrench, BookOpen, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  const services = [
    {
      icon: Zap,
      title: t('services.sales.title'),
      description: t('services.sales.description'),
      features: t('services.sales.features'),
      color: 'accent',
      cta: t('services.sales.cta'),
    },
    {
      icon: Wrench,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.description'),
      features: t('services.maintenance.features'),
      color: 'primary',
      cta: t('services.maintenance.cta'),
    },
    {
      icon: BookOpen,
      title: t('services.training.title'),
      description: t('services.training.description'),
      features: t('services.training.features'),
      color: 'muted',
      cta: t('services.training.cta'),
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('services-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="relative w-full py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            {t('services.title')}
          </h2>
          <p className="text-lg text-foreground/70">
            {t('services.description')}
          </p>
        </div>

        {/* Section Header */}
        <div id="services-section" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm text-accent font-medium">Nos Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Services Complèts & Intégrés</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            De la sélection du matériel à la formation professionnelle, nous accompagnons votre croissance technologique
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group relative bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group/link"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Border gradient on hover */}
                <div className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/30 transition-colors pointer-events-none"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
