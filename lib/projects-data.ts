export interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  fullDescription: string
  client: string
  date: string
  duration: string
  technologies: string[]
  results: string[]
  budget: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Survol Agricole',
    category: 'Agriculture',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&h=600&fit=crop',
    description: 'Cartographie aérienne pour optimisation agricole',
    fullDescription:
      'Projet de cartographie aérienne complète pour une exploitation agricole de 500 hectares. Utilisation de drones avec capteurs multispectres pour analyser la santé des cultures, détecter les zones de stress hydrique et optimiser les rendements.',
    client: 'Ferme Agronomique du Cameroun',
    date: 'Janvier 2024',
    duration: '3 mois',
    technologies: ['DJI M300 RTK', 'Capteurs multispectres', 'Logiciel SIG'],
    results: [
      'Cartographie de précision à 5cm',
      'Augmentation du rendement de 15%',
      'Réduction des intrants de 20%',
      'Rapport complet avec recommandations',
    ],
    budget: '2,500,000 XAF',
  },
  {
    id: 2,
    title: 'Inspection Infrastructure',
    category: 'Industrie',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    description: 'Inspections précises de structures critiques',
    fullDescription:
      'Inspection complète d\'une structure industrielle de 200 mètres de haut. Détection des fissures, corrosion et défauts structurels sans mise en péril du personnel.',
    client: 'Société Industrielle de Douala',
    date: 'Février 2024',
    duration: '2 semaines',
    technologies: ['DJI Matrice 350', 'Caméra thermique', 'Logiciel analyse'],
    results: [
      'Inspection complète en toute sécurité',
      '200+ points de données collectés',
      'Rapport détaillé avec plans 3D',
      'Maintenance préventive planifiée',
    ],
    budget: '1,800,000 XAF',
  },
  {
    id: 3,
    title: 'Photographie Aérienne',
    category: 'Immobilier',
    image: 'https://images.unsplash.com/photo-1494783367193-149034c05e41?w=800&h=600&fit=crop',
    description: 'Visualisation immobilière professionnelle',
    fullDescription:
      'Portfolio photographique aérien haute qualité pour complexe résidentiel. Vidéos promotionnelles en 4K avec perspectives spectaculaires pour marketing immobilier.',
    client: 'Promoteur Immobilier Royal',
    date: 'Mars 2024',
    duration: '1 semaine',
    technologies: ['DJI Air 3', 'Caméra 4K', 'Montage professionnel'],
    results: [
      '50+ photos haute résolution',
      'Vidéo promotionnelle 4K',
      'Visite virtuelle interactive',
      'Augmentation des visites de 45%',
    ],
    budget: '900,000 XAF',
  },
  {
    id: 4,
    title: 'Surveillance Site',
    category: 'Sécurité',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b4?w=800&h=600&fit=crop',
    description: 'Monitoring en temps réel haute définition',
    fullDescription:
      'Système de surveillance continue avec drones autonomes pour site de construction. Monitoring 24/7 avec alertes en temps réel et enregistrement sécurisé.',
    client: 'Chantier Construction West Gate',
    date: 'Avril 2024',
    duration: '6 mois',
    technologies: ['Drones autonomes', 'IA reconnaissance', 'Plateforme cloud'],
    results: [
      'Réduction des vols de 90%',
      'Conformité sécurité 100%',
      'Accès video 24/7',
      'Rapports automatisés quotidiens',
    ],
    budget: '5,000,000 XAF',
  },
  {
    id: 5,
    title: 'Vidéo Événement',
    category: 'Événementiel',
    image: 'https://images.unsplash.com/photo-1585654269175-31daf4aaf34f?w=800&h=600&fit=crop',
    description: 'Cinématographie professionnelle',
    fullDescription:
      'Captation cinématographique d\'un événement corporatif majeur avec 2000 participants. Drone show synchronisé avec animations et montage professionnel post-production.',
    client: 'Gala Horus Annual Conference',
    date: 'Mai 2024',
    duration: '3 jours',
    technologies: ['DJI M300', 'Caméra 8K', 'Montage professionnel'],
    results: [
      'Vidéo 8K complète',
      'Drone show époustouflant',
      'Montage cinématique',
      'Vidéo viral 500K vues',
    ],
    budget: '3,500,000 XAF',
  },
  {
    id: 6,
    title: 'Relevé Topographique',
    category: 'Géomètre',
    image: 'https://images.unsplash.com/photo-1516321957774-8405a8ad6b1f?w=800&h=600&fit=crop',
    description: 'Cartographie de précision géométrique',
    fullDescription:
      'Relevé topographique complet d\'une zone d\'aménagement de 5km². Numérisation 3D avec précision centimétrique pour études urbaines.',
    client: 'Communauté Urbaine de Douala',
    date: 'Juin 2024',
    duration: '4 semaines',
    technologies: ['Drone RTK', 'Photogrammétrie', 'Nuage de points 3D'],
    results: [
      'Cartographie 3D complète',
      'Précision ±2cm',
      'Modèle numérique du terrain',
      'Plans techniques complets',
    ],
    budget: '4,200,000 XAF',
  },
]
