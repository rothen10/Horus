'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function PremiumServicesMain() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, language } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('premium-services-main')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const premiumData = t('services.premium') || {}

  const premiumServices = [
    {
      id: 'construction',
      ...premiumData.construction,
    },
    {
      id: 'structural',
      ...premiumData.structural,
    },
    {
      id: 'agricultural',
      ...premiumData.agricultural,
    },
  ]

  return (
    <section id="premium-services-main" className="relative w-full py-24 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm text-accent font-medium">
              {language === 'fr' ? 'Solutions Premium' : 'Premium Solutions'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            {language === 'fr' ? 'Nos Services Premium' : 'Our Premium Services'}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Des solutions complètes conçues pour les projets ambitieux qui nécessitent expertise et innovation.'
              : 'Complete solutions designed for ambitious projects that require expertise and innovation.'}
          </p>
        </div>

        {/* Premium Services Cards */}
        <div className="space-y-6">
          {premiumServices.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Container for image and content */}
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="relative w-full lg:w-2/5 h-64 lg:h-auto min-h-96 overflow-hidden bg-secondary">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-lg text-accent font-semibold mb-4">{service.intro}</p>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features - Always visible */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all group/link w-fit"
                  >
                    {language === 'fr' ? 'Demander un devis' : 'Request a Quote'}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Border gradient */}
              <div className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/30 transition-colors pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
