'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react'

interface ExpandableServiceCardProps {
  title: string
  description: string
  details?: string
  benefits?: string[]
  index: number
  isVisible: boolean
  image?: string
}

export default function ExpandableServiceCard({
  title,
  description,
  details,
  benefits,
  index,
  isVisible,
}: ExpandableServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`group relative bg-gradient-to-br from-card to-card/50 rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${isExpanded ? 'lg:col-span-2' : ''}`}
      style={{
        transitionDelay: isVisible ? `${index * 50}ms` : '0ms',
      }}
    >
      {/* Image background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="p-6 lg:p-8 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-grow">
            <h4 className="text-xl lg:text-2xl font-bold text-foreground">{title}</h4>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-shrink-0 p-2 hover:bg-accent/10 rounded-lg transition-all duration-300"
            aria-label="Toggle details"
          >
            <ChevronDown
              className={`w-6 h-6 text-accent transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>

        {/* Description */}
        <p className="text-foreground/70 mb-4 leading-relaxed">{description}</p>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-6 mt-6 pt-6 border-t border-border/50 animate-in fade-in slide-in-from-top-2">
            {/* Image */}
            {image && (
              <div className="relative w-full h-48 rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none"></div>
              </div>
            )}

            {details && (
              <div>
                <h5 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                  À propos de ce service
                </h5>
                <p className="text-foreground/80 leading-relaxed">{details}</p>
              </div>
            )}

            {benefits && benefits.length > 0 && (
              <div>
                <h5 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                  Avantages clés
                </h5>
                <div className="space-y-2">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all group/cta"
            >
              Demander un devis
              <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
            </a>
          </div>
        )}

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
      </div>
    </div>
  )
}
