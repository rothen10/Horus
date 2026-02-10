# Guide de Test - Thème et Langue

## Test du Mode Sombre/Clair

### Étapes de test

1. **Ouvrir le site**
   - Le site devrait s'ouvrir en mode sombre par défaut
   - Vérifier que les couleurs sont correctes

2. **Basculer le thème**
   - Cliquer sur l'icône Sun/Moon dans le header
   - Le site doit passer en mode clair
   - Les couleurs doivent changer immédiatement

3. **Vérifier la persistance**
   - Rafraîchir la page (Ctrl+R ou F5)
   - Le thème doit rester le même (light ou dark)

4. **Tester sur tous les éléments**
   - Navigation/Header - couleurs correctes?
   - Hero section - texte lisible?
   - Services - cartes bien formatées?
   - Formulaire de contact - inputs visibles?
   - Footer - texte lisible?

5. **Tester les transitions**
   - Les couleurs doivent changer sans flash
   - Les transitions doivent être fluides

### Points de vérification

| Élément | Dark Mode | Light Mode |
|---------|-----------|-----------|
| Background | Noir (#0d0d0d) | Gris clair (#f5f5f5) |
| Texte principal | Blanc | Noir |
| Accent | Orange-jaune | Orange-jaune |
| Borders | Gris foncé | Gris clair |
| Inputs | Gris très foncé | Blanc/Gris très clair |

## Test de la Langue

### Étapes de test

1. **État initial**
   - Le site s'ouvre en français par défaut
   - Header affiche "Services", "À propos", "Galerie", etc.

2. **Basculer vers l'anglais**
   - Cliquer sur le bouton "FR" dans le header
   - Le site bascule en anglais
   - Header affiche "Services", "About", "Gallery", etc.

3. **Vérifier les traductions**
   - Hero section: "Rise to Excellence" (EN) vs "Envolez-vous vers l'Excellence" (FR)
   - Services: "Drone Sales", "Expert Maintenance", "Professional Training"
   - Boutons: "Get Started" vs "Commencer maintenant"

4. **Persistance de la langue**
   - Changer en anglais
   - Rafraîchir la page
   - La langue doit rester anglaise

5. **Tester tous les sections**
   - Navigation complète du site
   - Vérifier que TOUS les textes sont traduits
   - Aucun texte en dur (hardcoded) ne doit être visible

### Sections à vérifier

- [ ] Header et navigation
- [ ] Hero section
- [ ] Services (tous les textes et boutons)
- [ ] About section
- [ ] Gallery
- [ ] Testimonials
- [ ] Contact form
- [ ] Footer

## Test des Toggles

### Vérification de l'UX

1. **Boutons visibles**
   - [ ] Icône Sun/Moon visible
   - [ ] Bouton langue (FR/EN) visible
   - [ ] Emplacement: Header droit (avant le bouton devis sur desktop)
   - [ ] Position mobile: Avant le menu burger

2. **Tooltips**
   - Hovrer sur l'icône Sun/Moon
   - Tooltip "Dark Mode" ou "Light Mode" s'affiche
   - Hovrer sur le bouton langue
   - Tooltip "English" ou "Français" s'affiche

3. **Accessibilité**
   - Aria-label présent sur les boutons
   - Keyboard navigation fonctionne (Tab)
   - Focus visible sur les boutons

4. **Responsive**
   - Desktop: Toggles visibles et bien espacés
   - Tablet: Toggles toujours visibles
   - Mobile: Toggles présents avec le menu burger

## Test Combiné (Thème + Langue)

### Scénarios

1. **Basculer thème puis langue**
   - Changer en light mode
   - Changer en anglais
   - Vérifier que tout fonctionne (texte anglais en light mode)

2. **Rafraîchir avec deux paramètres**
   - Activer light mode + anglais
   - Rafraîchir 3 fois
   - Vérifier que les deux préférences persistent

3. **Ouvrir dans deux onglets**
   - Onglet 1: Light mode + Français
   - Onglet 2: Ouvrir le site
   - Onglet 2 doit avoir light mode + français

## Checklist de Test Complète

### Avant le déploiement

- [ ] Mode dark fonctionne
- [ ] Mode light fonctionne
- [ ] Français complet
- [ ] Anglais complet
- [ ] Persistence après F5
- [ ] Persistence après fermeture/réouverture
- [ ] Toggles visibles
- [ ] Tooltips fonctionnels
- [ ] Responsive (mobile/tablet/desktop)
- [ ] Aucun console error
- [ ] Aucun texte hardcoded visible
- [ ] Transitions fluides
- [ ] Performance acceptable

### Tests Multi-navigateurs

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Chrome
- [ ] Mobile Safari

## Dépannage

### Le thème ne change pas
**Solution:**
1. Vérifier que le clic enregistre (console log dans handler)
2. Vérifier que `ThemeProvider` enveloppe le contenu
3. Vérifier localStorage.setItem() dans DevTools

### La langue ne change pas
**Solution:**
1. Vérifier que `LanguageProvider` enveloppe le contenu
2. Vérifier que `useLanguage()` retourne la bonne langue
3. Vérifier que les clés existent dans `translations.ts`

### Texte hardcoded visible
**Solution:**
1. Chercher le texte avec Ctrl+F dans le code
2. Le remplacer par `t('chemin.cle')`
3. Ajouter la traduction dans `translations.ts`

### Flash au rechargement
**Solution:**
1. C'est normal au premier chargement (hydratation)
2. Vérifier que le composant a `mounted` check
3. ThemeProvider doit utiliser useEffect pour appliquer

## Performance

Pour tester les performances:

1. DevTools > Network > Throttle
2. Ralentir à 3G
3. Basculer thème/langue
4. Vérifier que les changements sont rapides
5. Pas de lag notable

## Notes

- Les traductions se chargent au montage
- Le changement de langue re-render tout (c'est normal)
- Le thème persiste 1 an (localStorage default)
- Pas d'appels API pour thème/langue (tout client-side)
