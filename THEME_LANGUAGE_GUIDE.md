# Guide d'implémentation - Thème et Langue

## Vue d'ensemble

Le site Horus dispose d'un système complet de gestion du thème (Dark/Light mode) et de langue (Français/Anglais). Ces fonctionnalités sont implémentées avec des React Contexts et sont entièrement client-side.

## Architecture

### Providers

1. **ThemeProvider** - Gère le thème clair/sombre
   - Localisation: `lib/theme-context.tsx`
   - Stockage: localStorage
   - Options: 'dark' | 'light'

2. **LanguageProvider** - Gère la langue
   - Localisation: `lib/language-context.tsx`
   - Stockage: localStorage
   - Options: 'fr' | 'en'

### Fichiers clés

- `app/layout.tsx` - Configuration des providers
- `lib/theme-context.tsx` - Logique du thème
- `lib/language-context.tsx` - Logique de la langue
- `lib/translations.ts` - Dictionnaire de traductions
- `components/theme-language-toggle.tsx` - Boutons de basculement
- `app/globals.css` - Styles du thème

## Utilisation

### Basculer le thème

```tsx
"use client";
import { useTheme } from "@/lib/theme-context";

export default function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Thème actuel: {theme}</button>;
}
```

### Basculer la langue

```tsx
"use client";
import { useLanguage } from "@/lib/language-context";

export default function MyComponent() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <>
      <p>{t("header.services")}</p>
      <button onClick={toggleLanguage}>Langue actuelle: {language}</button>
    </>
  );
}
```

### Utiliser les traductions

```tsx
const { t } = useLanguage()

// Accès simple
<h1>{t('header.services')}</h1>

// Accès imbriqué
<span>{t('about.values.innovation')}</span>
```

## Ajouter de nouvelles traductions

1. Ouvrir `lib/translations.ts`
2. Ajouter la clé dans la structure appropriée pour 'fr' et 'en':

```tsx
export const translations = {
  fr: {
    header: {
      services: 'Services',
      newKey: 'Nouvelle traduction FR', // Ajouter ici
    },
    ...
  },
  en: {
    header: {
      services: 'Services',
      newKey: 'New translation EN', // Et ici
    },
    ...
  },
}
```

3. Utiliser dans le composant:

```tsx
<span>{t("header.newKey")}</span>
```

## Thème clair (Light Mode)

### Couleurs

Le système utilise des CSS variables définis dans `globals.css`:

**Dark Mode (par défaut)**

- Background: #0d0d0d
- Foreground: #f2f2f2
- Accent: #FFA500 (orange-jaune)

**Light Mode**

- Background: #f5f5f5
- Foreground: #0d0d0d
- Accent: #FFA500 (identique)

### Styles personnalisés

Les styles spécifiques à un thème peuvent être appliqués avec:

```tsx
"use client";
import { useTheme } from "@/lib/theme-context";

export default function Component() {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "bg-slate-900" : "bg-slate-50"}>
      Contenu
    </div>
  );
}
```

## Stockage des préférences

Les préférences de l'utilisateur sont automatiquement sauvegardées dans localStorage:

- `theme` - Thème actuel ('dark' ou 'light')
- `language` - Langue actuelle ('fr' ou 'en')

## Détection des préférences système

Au premier chargement:

1. Vérifier si une préférence existe dans localStorage
2. Sinon, utiliser la préférence système (`prefers-color-scheme`)
3. Par défaut: 'dark' pour le thème, 'fr' pour la langue

## Points importants

- ⚠️ Les providers doivent être en haut de l'arborescence (layout.tsx)
- ⚠️ Tous les composants utilisant `useTheme()` ou `useLanguage()` doivent être marqués 'use client'
- ⚠️ Le montage côté client est géré - pas de flash de contenu
- ✅ Les traductions sont chargées au-dessus de la planche
- ✅ Les préférences persistent entre les sessions

## Exemples complets

### Ajouter un nouveau composant avec traductions

```tsx
"use client";

import { useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";

export default function NewComponent() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  return (
    <div
      className={`
      ${theme === "dark" ? "bg-slate-900" : "bg-white"}
      p-4 rounded-lg
    `}
    >
      <h2>{t("mySection.title")}</h2>
      <p>{t("mySection.description")}</p>
    </div>
  );
}
```

## Dépannage

### Les traductions ne changent pas au changement de langue

- Vérifier que le composant utilise `useLanguage()`
- Vérifier que `t()` est utilisé pour chaque texte
- Vérifier que les clés existent dans `translations.ts`

### Le thème ne persiste pas

- Vérifier que localStorage est activé
- Vérifier que le provider enveloppe le composant
- Vérifier les erreurs console

### Contenu clignotant au rechargement

- C'est normal au premier chargement (hydratation React)
- Le système ignore le rendu jusqu'au montage complet
