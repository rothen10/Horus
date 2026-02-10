# Horus - Site Vitrine Professionnel

Un site vitrine ultra-moderne et dynamique pour Horus, entreprise spécialisée dans les services liés aux drones (ventes, maintenance, formations).

## 🌟 Nouvelles Fonctionnalités

### 🌓 Mode Sombre/Clair

- Basculement fluide entre mode sombre et clair
- Détection automatique des préférences système
- Sauvegarde des préférences dans localStorage
- Styles optimisés pour chaque thème

### 🌍 Multilangue (Français/Anglais)

- Interface complètement traduite en français et anglais
- Tous les textes du site sont dynamiques
- Basculement instantané de la langue
- Préférences de langue persistantes

### 🎯 Boutons de Contrôle

- Toggles intégrés dans le header
- Icônes visuelles claires (Sun/Moon pour thème, Globe pour langue)
- Tooltips au survol pour une meilleure UX
- Accessibilité complète (ARIA labels)

## 🎨 Design & Esthétique

### Palette de Couleurs Premium

- **Noir** (#0d0d0d) - Fond principal
- **Gris** (#1a1a1a, #262626) - Éléments secondaires
- **Jaune Orangé** (#FFA500) - Accent principal et éléments interactifs

### Caractéristiques Design

- ✨ Animations fluides et transitions modernes
- 🎯 Design épuré et élégant
- 📱 Entièrement responsive (mobile-first)
- ⚡ Performance optimisée
- 🎭 Effets visuels sophistiqués (glows, morphing)

## 🚀 Sections Principales

### 1. **Hero Section** - Spectaculaire et Immersive

- Drone 3D réaliste avec animation de flottaison
- Texte principal percutant et inspirant
- Appel à l'action clair (CTA)
- Statistiques clés de l'entreprise
- Animations d'entrée sophistiquées

### 2. **Services** - Catalogue Complet

Trois services principaux :

- **Ventes de Drones** - Catalogue exclusif, modèles premium
- **Maintenance Experte** - Services complets et urgences
- **Formations Professionnelles** - Programmes certifiés

Chaque service inclut :

- Icône personnalisée
- Description détaillée
- Liste de fonctionnalités
- Lien d'appel à l'action

### 3. **À Propos** - Mission & Valeurs

- Présentation de l'entreprise
- 15+ ans d'expertise
- Valeurs clés et engagements
- Statistiques impressionnantes (500+ clients, 1000+ drones)

### 4. **Galerie** - Projets Réalisés

- Portfolio de 6 projets showcase
- Filtrage par catégorie (Agriculture, Industrie, Immobilier, etc.)
- Images haute qualité
- Descriptions détaillées

### 5. **Témoignages** - Preuve Sociale

- Carousel automatique de 4 témoignages clients
- Système de notation (5 étoiles)
- Photos des clients
- Rotation automatique toutes les 6 secondes

### 6. **Contact** - Formulaire Professionnel

- Formulaire complet (nom, email, téléphone, message)
- Sélection du service demandé
- Informations de contact (email, téléphone, adresse)
- Message de confirmation de soumission
- Respect de la confidentialité

### 7. **Footer** - Navigation Complète

- Liens de navigation
- Informations de contact
- Réseaux sociaux
- Mentions légales

## 🛠️ Stack Technologique

### Frontend

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.3
- **UI Components**: Shadcn/ui
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization

### Performance

- ✅ Optimisation d'images automatique
- ✅ Code splitting
- ✅ Preloading intelligent
- ✅ Animations GPU-optimisées
- ✅ Lazy loading des images externes

### SEO & Métadonnées

- Title optimisé avec mots-clés
- Description meta complète
- Open Graph tags pour partage
- Twitter Card
- Structured data ready
- Sitemap-ready structure

## 📱 Responsive Design

- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1919px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (jusqu'à 767px)

## ⚡ Animations & Interactions

### Animations Principales

- **Float Animation**: Drone flottant dans le hero
- **Scroll Reveal**: Éléments qui apparaissent au scroll
- **Hover Effects**: Transitions fluides au survol
- **Glow Effects**: Effets lumineux sur les éléments clés
- **Shimmer**: Effets de scintillement subtils
- **Auto-rotate**: Carousel de témoignages

### Transitions

- Duration: 300ms - 1000ms selon le contexte
- Easing: ease-in-out, ease-out
- Transform: scale, translate, rotate
- Opacity: fade in/out

## 🎯 Fonctionnalités Clés

1. **Navigation Responsive**
   - Desktop: Menu horizontal complet
   - Mobile: Burger menu avec overlay

2. **Scroll Smooth**
   - Scrolling fluide entre les sections
   - Lien d'ancrage automatique

3. **Formulaire de Contact**
   - Validation côté client
   - Message de confirmation
   - Réinitialisation automatique

4. **Testimonials Carousel**
   - Auto-rotation
   - Sélection manuelle
   - Aperçu multiple

5. **Filtrage de Galerie**
   - Filtres par catégorie
   - Animations de transition
   - Images responsives

## 🔧 Personnalisation

### Thème & Couleurs

Modifier les tokens de design dans `/app/globals.css` :

```css
--primary: 39 95% 54%; /* Couleur accent */
--background: 0 0% 8%; /* Fond */
--foreground: 0 0% 95%; /* Texte principal */
```

### Contenu

Tous les textes et données sont modifiables dans les composants respectifs. Cherchez les sections commentées `// TODO:` ou `data-content`.

### Images

- Remplacer `/public/drone.jpg` par votre image
- Mettre à jour les URLs de la galerie
- Ajouter vos logos et favicons

## 📊 Performance Metrics

- Lighthouse Score: 90+/100
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Cumulative Layout Shift: < 0.1

## 🚀 Déploiement

```bash
# Installation
npm install
# ou
pnpm install

# Développement local
npm run dev

# Build production
npm run build
npm start
```

## 📝 License

Tous droits réservés © 2024 Horus

## 📧 Support

Pour toute question ou modification, contactez : contact@Horus.fr

---

**Créé avec ❤️ pour Horus** - Votre partenaire technologique en altitude.
