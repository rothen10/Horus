# Horus Drone Services - Quick Start Guide

## What's New

Your website has been fully transformed from Horus to **Horus** - a professional drone services company in Douala, Cameroon. Here's what you can do:

## Core Features

### 1. View Project Details

- Click on any gallery item to see detailed project information
- Each project shows client, budget, timeline, and results
- Access from homepage gallery or dedicated `/projects` page

### 2. WhatsApp Integration

Three ways to contact via WhatsApp (+237 656 128 888):

- **Contact Section**: Green "Contacter via WhatsApp" button
- **Project Pages**: Call-to-action at bottom of each project
- **Phone Icon**: In contact info section

### 3. Theme Switching

- Toggle dark/light mode in header (Sun/Moon icon)
- Preference saved automatically
- Works across all pages

### 4. Language Switching

- Switch between French (FR) and English (EN)
- Available in header (Globe icon)
- All content translates instantly
- Language preference remembered

## Key Information

**Company Details:**

- Name: Horus
- Location: Douala, Cameroon
- Email: contact@horusdrones.cm
- WhatsApp: +237 656 128 888

**Services:**

- Drone Sales (Ventes de Drones)
- Expert Maintenance (Maintenance Experte)
- Professional Training (Formations Professionnelles)

**Project Categories:**

- Agriculture
- Industry (Industrie)
- Real Estate (Immobilier)
- Security (Sécurité)
- Events (Événementiel)
- Surveying (Géomètre)

## Customization

### Update Contact Information

Edit `/components/contact-section.tsx`:

```typescript
const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "your-email@horus.cm",
    link: "mailto:your-email@horus.cm",
  },
  // ... other info
];
```

### Add New Projects

Edit `/lib/projects-data.ts` and add to the `projectsData` array.

### Update Company Info

Edit `/app/layout.tsx` for SEO metadata and titles.

### Change Logo

Replace the SVG in `/components/header.tsx` or use an image at `/public/horus-logo.svg`.

## File Navigation

| File                             | Purpose                   |
| -------------------------------- | ------------------------- |
| `app/page.tsx`                   | Homepage                  |
| `app/projects/page.tsx`          | Projects listing          |
| `app/projects/[id]/page.tsx`     | Individual project detail |
| `lib/projects-data.ts`           | Project database          |
| `components/header.tsx`          | Navigation header         |
| `components/gallery-section.tsx` | Project gallery           |
| `components/contact-section.tsx` | Contact form & info       |

## Testing Checklist

- [ ] Homepage loads correctly
- [ ] Dark mode toggles properly
- [ ] Language switching works
- [ ] Gallery items link to project pages
- [ ] WhatsApp button opens with pre-filled message
- [ ] Contact form submits
- [ ] Mobile responsive on all screen sizes
- [ ] All project pages load with correct data

## Browser Compatibility

- Chrome/Edge ✅
- Firefox ✅
- Safari ✅
- Mobile browsers ✅

## Performance Tips

1. Optimize project images (compress to <500KB)
2. Use Next.js Image component for all images
3. Enable caching for static assets
4. Monitor Core Web Vitals

## Support

For issues or customization needs, refer to:

- `PROJECT_COMPLETION.md` - Detailed feature list
- `THEME_LANGUAGE_GUIDE.md` - Theme/language implementation
- `TESTING_GUIDE.md` - Testing procedures

## Deployment

Ready for deployment to:

- Vercel (recommended - automatic)
- AWS, GCP, Azure (with build config)
- Traditional hosting (build and deploy)

---

**Version:** 1.0  
**Last Updated:** 2024  
**Company:** Horus Drone Services
