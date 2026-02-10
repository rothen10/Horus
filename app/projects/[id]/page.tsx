import { projectsData } from '@/lib/projects-data'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, MapPin, Calendar, Clock, DollarSign, CheckCircle2 } from 'lucide-react'

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === parseInt(params.id))
  return {
    title: `${project?.title} - Horus Drone Services`,
    description: project?.fullDescription,
  }
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === parseInt(params.id))

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
          <Link href="/projects" className="text-accent hover:underline">
            Retour aux projets
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header with back button */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/#gallery" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Retour à la galerie
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title and Meta */}
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent rounded-full mb-6">
            <span className="text-sm font-semibold text-accent">{project.category}</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-foreground/70 mb-8">{project.fullDescription}</p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-foreground/60">Client</div>
                <div className="font-semibold">{project.client}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-foreground/60">Date</div>
                <div className="font-semibold">{project.date}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-foreground/60">Durée</div>
                <div className="font-semibold">{project.duration}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-foreground/60">Budget</div>
                <div className="font-semibold">{project.budget}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12 py-12 border-t border-b border-border">
          <h2 className="text-2xl font-bold mb-6">Technologies Utilisées</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-3 bg-accent/5 border border-accent/20 rounded-lg text-sm font-medium hover:bg-accent/10 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Résultats & Réalisations</h2>
          <div className="space-y-4">
            {project.results.map((result, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground/80 leading-relaxed">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Intéressé par un projet similaire ?</h3>
          <p className="text-foreground/70 mb-6">Contactez-nous pour discuter de votre projet drone</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/237656128888?text=Bonjour, je suis intéressé par un projet similaire à "${project.title}". Pouvez-vous m'en dire plus ?`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-all transform hover:scale-105"
            >
              Nous Contacter sur WhatsApp
            </a>
            <Link
              href="/#contact"
              className="px-8 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent/10 transition-all"
            >
              Formulaire de Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
