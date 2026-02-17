'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Zap, Eye, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import FloatingDroneBg from '@/components/floating-drone-bg'

const FloatingDrone = ({ delay }: { delay: number }) => (
  <div
    className="absolute w-8 h-8 rounded-full bg-accent/30 blur-lg"
    style={{
      animationDelay: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
    }}
  />
)

const DroneBanner = () => (
  <div className="relative h-32 flex items-center justify-center overflow-hidden mb-12">
    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5"></div>
    <div className="absolute inset-0 animate-pulse" style={{ animation: 'pulse 3s ease-in-out infinite' }}></div>
    
    {/* Floating drone image */}
    <div className="relative z-10">
      <div className="flex items-center justify-center gap-8">
        <div className="w-24 h-24 relative" style={{ animation: 'float 4s ease-in-out infinite' }}>
          <Image
            src="/drone-floating.png"
            alt="Drone"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
    `}</style>
  </div>
)

export default function PremiumPage() {
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const premiumServices = [
    {
      id: 'site-monitoring',
      icon: Eye,
      title: language === 'fr' ? 'Surveillance de Chantiers' : 'Site Monitoring',
      shortDesc: language === 'fr' ? 'Suivi temps réel des travaux' : 'Real-time work tracking',
      description:
        language === 'fr'
          ? 'Suivez l\'avancement de vos projets de construction ou agricoles en temps réel avec des rapports quotidiens et des vidéos aériennes.'
          : 'Track your construction or agricultural projects in real time with daily reports and aerial videos.',
      features: [
        language === 'fr' ? 'Rapports quotidiens' : 'Daily reports',
        language === 'fr' ? 'Vidéos aériennes HD' : 'HD aerial videos',
        language === 'fr' ? 'Suivi de progrès' : 'Progress tracking',
        language === 'fr' ? 'Alertes en temps réel' : 'Real-time alerts',
      ],
      image: '/services/premium-site-monitoring.jpg',
    },
    {
      id: '3d-imaging',
      icon: Zap,
      title: language === 'fr' ? 'Imagerie 3D & Modélisation' : '3D Imaging & Modeling',
      shortDesc: language === 'fr' ? 'Vues 3D professionnelles' : 'Professional 3D views',
      description:
        language === 'fr'
          ? 'Créez des modèles 3D précis de vos infrastructures, avec orthophotos et nuages de points pour analyse détaillée.'
          : 'Create precise 3D models of your infrastructure with orthophotos and point clouds for detailed analysis.',
      features: [
        language === 'fr' ? 'Modèles 3D haute résolution' : 'High-resolution 3D models',
        language === 'fr' ? 'Orthophotos géoréférencées' : 'Georeferenced orthophotos',
        language === 'fr' ? 'Nuages de points' : 'Point clouds',
        language === 'fr' ? 'Vidéos cinématiques' : 'Cinematic videos',
      ],
      image: '/services/premium-3d-modeling.jpg',
    },
    {
      id: 'detailed-reports',
      icon: TrendingUp,
      title: language === 'fr' ? 'Rapports Détaillés' : 'Detailed Reports',
      shortDesc: language === 'fr' ? 'Analyses complètes' : 'Comprehensive analysis',
      description:
        language === 'fr'
          ? 'Recevez des rapports professionnels avec estimations d\'avancement, analyses structurelles et recommandations.'
          : 'Receive professional reports with progress estimates, structural analysis and recommendations.',
      features: [
        language === 'fr' ? 'Estimations d\'avancement' : 'Progress estimates',
        language === 'fr' ? 'Analyses détaillées' : 'Detailed analysis',
        language === 'fr' ? 'Recommandations' : 'Recommendations',
        language === 'fr' ? 'Documentation complète' : 'Complete documentation',
      ],
      image: '/services/premium-detailed-reports.jpg',
    },
  ]

  return (
    <main className="w-full min-h-screen bg-background overflow-hidden relative">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating background drone - centered behind content */}
      <FloatingDroneBg opacity={0.08} top="50%" left="50%" duration={12} />

      {/* Floating drones */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
        {[0, 1, 2, 3, 4].map((i) => (
          <FloatingDrone key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header with back button */}
        <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
            <Link href="/#gallery" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">{language === 'fr' ? 'Retour' : 'Back'}</span>
            </Link>
            <div className="flex-grow">
              <h1 className="text-2xl font-bold text-foreground">{language === 'fr' ? 'Services Premium' : 'Premium Services'}</h1>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-6 max-w-7xl mx-auto">
          {/* Drone Banner */}
          <DroneBanner />

          <div className={`text-center mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
            <h2 className="text-5xl md:text-6xl font-bold text-balance mb-6">
              {language === 'fr' ? 'Solutions Exclusives pour Professionnels' : 'Exclusive Solutions for Professionals'}
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Accédez à nos services haut de gamme conçus pour la diaspora et les investisseurs immobiliers.'
                : 'Access our premium services designed for diaspora and real estate investors.'}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {premiumServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.id}
                  className={`group relative bg-gradient-to-br from-card via-card/50 to-card/30 rounded-3xl overflow-hidden border border-border hover:border-accent transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  }}
                >
                  {/* Image Section */}
                  {service.image && (
                    <div className="relative w-full h-40 overflow-hidden bg-secondary">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card pointer-events-none"></div>
                    </div>
                  )}

                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  {/* Content */}
                  <div className="p-8 relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6 inline-flex p-4 bg-accent/20 rounded-2xl group-hover:bg-accent/30 transition-colors w-fit">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-sm text-accent font-semibold mb-4">{service.shortDesc}</p>

                    {/* Description */}
                    <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-all group/btn"
                    >
                      {language === 'fr' ? 'Demander une consultation' : 'Request Consultation'}
                    </a>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-2xl -mr-20 -mt-20 pointer-events-none group-hover:bg-accent/10 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none"></div>
                </div>
              )
            })}
          </div>

          {/* Why Choose Premium Section */}
          <section className="mt-20 py-12 px-8 bg-accent/5 border border-accent/20 rounded-3xl">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              {language === 'fr' ? 'Pourquoi Choisir Premium ?' : 'Why Choose Premium?'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: language === 'fr' ? 'Expertise Dédiée' : 'Dedicated Expertise',
                  desc: language === 'fr' ? 'Equipes spécialisées pour vos projets' : 'Specialized teams for your projects',
                },
                {
                  title: language === 'fr' ? 'Support 24/7' : '24/7 Support',
                  desc: language === 'fr' ? 'Assistance continue pour vos besoins' : 'Continuous support for your needs',
                },
                {
                  title: language === 'fr' ? 'Résultats Garantis' : 'Guaranteed Results',
                  desc: language === 'fr' ? 'Satisfaction client assurée' : 'Customer satisfaction guaranteed',
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <h4 className="text-lg font-bold text-accent mb-2">{item.title}</h4>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>

      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
