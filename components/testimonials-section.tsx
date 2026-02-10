'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Marc Dupont',
    role: 'Directeur Agro Tech',
    company: 'Ferme Moderne SA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    testimonial:
      'DroneElite a transformé notre approche agricole. Les solutions proposées ont augmenté notre rendement de 35% en une saison.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Martin',
    role: 'Responsable Construction',
    company: 'BTP Solutions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    testimonial:
      'Service professionnel, support excellent et technologies de pointe. Un partenaire fiable pour nos inspections aériennes.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jean Leclerc',
    role: 'Gestionnaire Propriété',
    company: 'Immobilier Prestige',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    testimonial:
      'Les vidéos aériennes produites par DroneElite ont accéléré nos ventes de 40%. Qualité cinématographique exceptionnelle.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Claire Bernard',
    role: 'Coordinatrice Événements',
    company: 'Events Luxe',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    testimonial:
      'Pour nos événements corporatifs, DroneElite apporte toujours une touche spectaculaire. Professionnel et innovant.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('testimonials-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="relative w-full py-24 bg-card/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div id="testimonials-section" className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm text-accent font-medium">Témoignages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Ce Que Nos Clients Disent</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Découvrez les succès de nos partenaires et l'impact de nos solutions
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex gap-2">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-2xl md:text-3xl font-bold leading-relaxed text-foreground">
                  "{testimonials[activeIndex].testimonial}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                    <Image
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div>
                    <div className="font-bold text-foreground">{testimonials[activeIndex].name}</div>
                    <div className="text-sm text-foreground/60">{testimonials[activeIndex].role}</div>
                    <div className="text-sm text-accent font-medium">{testimonials[activeIndex].company}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Carousel */}
            <div
              className={`grid grid-cols-2 gap-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 text-left ${
                    activeIndex === index
                      ? 'bg-accent/10 border-accent'
                      : 'bg-background border-border hover:border-accent/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                      <div className="text-xs text-foreground/60">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-xs text-foreground/70 line-clamp-3">{testimonial.testimonial}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index ? 'bg-accent w-8' : 'bg-accent/30 hover:bg-accent/50'
              }`}
            ></button>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent">98%</div>
            <div className="text-foreground/60 mt-2">Satisfaction Client</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent">500+</div>
            <div className="text-foreground/60 mt-2">Projets Réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent">50+</div>
            <div className="text-foreground/60 mt-2">Partenaires Majeurs</div>
          </div>
        </div>
      </div>
    </section>
  )
}
