import { projectsData } from '@/lib/projects-data'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Nos Projets - Horus',
  description: 'Découvrez tous nos projets de services de drones à Douala',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Link href="/#gallery" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Retour à la galerie
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">Nos Projets</h1>
        <p className="text-xl text-foreground/70">Découvrez la diversité de nos réalisations drone à Douala</p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent rounded-full mb-3">
                    <span className="text-xs font-semibold text-accent">{project.category}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Meta Info */}
                  <div className="space-y-2 pt-4 border-t border-border/30">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Client:</span>
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/60">Date:</span>
                      <span className="font-medium">{project.date}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    Voir détails
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
