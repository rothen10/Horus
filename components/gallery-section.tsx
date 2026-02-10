'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projectsData } from '@/lib/projects-data'
import { useLanguage } from '@/lib/language-context'

const galleryItems = projectsData; // Declare galleryItems variable

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('Tous')
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

    const element = document.getElementById('gallery-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const categories = ['Tous', 'Agriculture', 'Industrie', 'Immobilier', 'Sécurité', 'Événementiel', 'Géomètre']

  const filteredItems =
    selectedFilter === 'Tous' ? projectsData : projectsData.filter((item) => item.category === selectedFilter)

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
            <span className="text-sm text-accent font-medium">Nos Réalisations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Galerie de Projets</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explorez nos meilleures réalisations et découvrez les possibilités infinies de la technologie drone
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 ${
                selectedFilter === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-secondary text-foreground hover:border-accent border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : '0ms',
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden bg-secondary">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-3">
                  {item.category}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>

                {/* Hidden Info on Hover */}
                <Link href={`/projects/${item.id}`}>
                  <div className="absolute inset-0 bg-background/90 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 cursor-pointer">
                    <div className="text-center space-y-4">
                      <h4 className="text-lg font-bold text-accent">{item.title}</h4>
                      <p className="text-foreground/80">{item.description}</p>
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all">
                        Voir détails
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <p className="text-foreground/60 mb-6">Vous souhaitez un projet similaire?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all transform hover:scale-105"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  )
}
