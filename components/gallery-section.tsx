'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { ArrowRight } from 'lucide-react'
import ExpandableServiceCard from './expandable-service-card'

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('surveys')
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

    const element = document.getElementById('gallery-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const servicesData = t('gallery.services') || {}
  const filters = ['surveys', 'maintenance', 'training']
  
  const getServiceData = (serviceKey) => {
    return servicesData[serviceKey] || null
  }

  const getFilterLabel = (key) => {
    const labels = {
      surveys: t('gallery.filter.surveys'),
      maintenance: t('gallery.filter.maintenance'),
      training: t('gallery.filter.training'),
    }
    return labels[key] || key
  }

  const currentService = getServiceData(selectedFilter)

  return (
    <section id="gallery" className="relative w-full py-24 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div id="gallery-section" className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm text-accent font-medium">{language === 'fr' ? 'Nos Services' : 'Our Services'}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">{t('gallery.title')}</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">{t('gallery.description')}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 ${
                selectedFilter === filter
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-secondary text-foreground hover:border-accent border border-border'
              }`}
            >
              {getFilterLabel(filter)}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {currentService && (
          <div>
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{currentService.title}</h3>
              <p className="text-lg text-foreground/70">{currentService.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {currentService.items?.map((item, index) => (
                <ExpandableServiceCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  details={item.details}
                  benefits={item.benefits}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>


          </div>
        )}

        {/* CTA */}
        <div className="text-center pt-8 border-t border-border/50">
          <p className="text-foreground/60 mb-6 mt-8">
            {language === 'fr' ? 'Prêt à commencer votre projet ?' : 'Ready to start your project?'}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all transform hover:scale-105"
          >
            {language === 'fr' ? 'Demander un devis' : 'Get a Quote'}
          </a>
        </div>
      </div>
    </section>
  )
}
