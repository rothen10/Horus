# Structure des Traductions

## Vue d'ensemble

Les traductions sont centralisées dans le fichier `lib/translations.ts` et organisées de manière hiérarchique par section du site.

## Structure JSON

```
translations
├── fr (Français)
│   ├── header
│   ├── hero
│   ├── services
│   ├── about
│   ├── gallery
│   ├── testimonials
│   ├── contact
│   └── footer
└── en (English)
    ├── header
    ├── hero
    ├── services
    ├── about
    ├── gallery
    ├── testimonials
    ├── contact
    └── footer
```

## Sections disponibles

### 1. **header**
Textes du header et navigation
- `services` - Lien Services
- `about` - Lien À propos
- `gallery` - Lien Galerie
- `testimonials` - Lien Témoignages
- `contact` - Lien Contact
- `quote` - Bouton "Demander un devis"

### 2. **hero**
Section héro principale
- `main` - Titre principal
- `subtitle` - Sous-titre descriptif
- `cta` - Texte du bouton d'action
- `stats` - Statistiques (projects, satisfaction, team)

### 3. **services**
Section des services
- `title` - Titre de la section
- `description` - Description générale
- `sales` - Service Ventes (title, description, features, cta)
- `maintenance` - Service Maintenance
- `training` - Service Formation

Chaque service contient:
- `title` - Titre du service
- `description` - Description
- `features` - Array de fonctionnalités
- `cta` - Texte du bouton

### 4. **about**
Section À propos
- `title` - Titre principal
- `description` - Description de l'entreprise
- `mission` - Titre de la mission
- `missionText` - Texte complet de la mission
- `values` - Valeurs (innovation, quality, trust, expertise, service, passion)
- `stats` - Statistiques (clients, drones, formations)

### 5. **gallery**
Section Galerie
- `title` - Titre principal
- `description` - Description
- `filter` - Filtres (all, commercial, inspection, mapping)

### 6. **testimonials**
Section Témoignages
- `title` - Titre principal
- `description` - Description
- `trustMetrics` - Texte metric "clients satisfaits"

### 7. **contact**
Section Contact et formulaire
- `title` - Titre principal
- `description` - Description
- `form` - Éléments du formulaire
  - `name` - Label "Nom complet"
  - `email` - Label "Email"
  - `phone` - Label "Téléphone"
  - `subject` - Label "Sujet"
  - `message` - Label "Message"
  - `service` - Label "Service"
  - `selectService` - Texte "Choisir un service"
  - `sales` - "Ventes de drones"
  - `maintenance` - "Maintenance"
  - `training` - "Formation"
  - `other` - "Autre"
  - `send` - Bouton "Envoyer"
  - `sending` - État envoi "Envoi en cours..."
  - `success` - Message succès
  - `error` - Message erreur
- `info` - Informations de contact
  - `phone` - "Téléphone"
  - `email` - "Email"
  - `address` - "Adresse"
  - `hours` - "Horaires"
  - `hoursText` - Horaires détaillées

### 8. **footer**
Section Footer
- `description` - Description de l'entreprise
- `company` - Titre "Entreprise"
- `links` - Titre "Liens utiles"
- `social` - Titre "Réseaux sociaux"
- `rights` - Texte "Tous droits réservés"
- `terms` - "Conditions d'utilisation"
- `privacy` - "Politique de confidentialité"

## Formats spéciaux

### Arrays (Listes)
```tsx
'services.sales.features' // Retourne un array
```

### Accès imbriqué
```tsx
t('about.values.innovation') // Accès profond
```

## Guide d'ajout rapide

Pour ajouter une nouvelle traduction:

1. Localiser la section appropriée dans `lib/translations.ts`
2. Ajouter la clé en français et en anglais
3. Utiliser `t('chemin.complet.cle')` dans le composant

Exemple:
```tsx
// Avant
const text = "Ceci est un texte en dur"

// Après
// 1. Ajouter dans translations.ts
hero: {
  newText: 'Ceci est un texte en dur'
}

// 2. Utiliser dans le composant
const { t } = useLanguage()
const text = t('hero.newText')
```

## Bonnes pratiques

✅ **À faire:**
- Garder une structure cohérente (hiérarchie logique)
- Traduire TOUS les textes visibles
- Utiliser des clés descriptives
- Maintenir la parité FR/EN

❌ **À éviter:**
- Harcoder du texte dans les composants
- Mélanger les langues
- Créer des clés trop profondément imbriquées (max 3-4 niveaux)
- Oublier de traduire en FR ET EN

## Vérification

Pour vérifier que toutes les traductions sont présentes:

1. Chercher tous les appels `t('` dans les composants
2. Vérifier que chaque clé existe en FR et EN
3. Tester les deux langues dans l'app

## Performance

Les traductions sont chargées au montage et mises en cache. Le changement de langue provoque un re-render de toute l'app (mais c'est rapide et imperceptible).
