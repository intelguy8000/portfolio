# Changelog

Historial de cambios del portfolio de andres.

---

## [2.0.0] - Anthropic Redesign - 2025-01-XX

### 🎨 COMPLETE REDESIGN

**Filosofía:** De "hacker aesthetic" a "commercial appeal"
**Inspiración:** Anthropic, Starlink, Neuralink
**Objetivo:** Convertir visitantes en clientes en < 30 segundos

### ✨ Added

- **Nueva brand identity:**
  - Brand: "andres" (lowercase, limpio)
  - Tagline: "Building. Learning. Evolving."
  - Descripción: "Data architect transforming complexity into clarity"

- **Diseño Anthropic-style:**
  - Fondo blanco (#FFFFFF)
  - Texto negro (#000000)
  - Acento verde (#42CA80)
  - Tipografía: Inter (clean, profesional)

- **Hero completamente rediseñado:**
  - Fullscreen, centrado
  - "andres" text huge (text-7xl to text-9xl)
  - Tagline prominente
  - Stats integrados en single line
  - 2 CTAs: "View Work" (green) + "Get in Touch" (outline)

- **Projects simplificado:**
  - Solo 3 proyectos featured
  - Numbered cards (01, 02, 03)
  - Design minimalista con hover verde
  - Link directo a GitHub para ver todos

- **Contact ultra-minimal:**
  - Headline: "Let's Build Something"
  - Single CTA: Email button
  - Social links en línea
  - Removed: Contact form completo

- **Navigation minimal:**
  - Solo 2 links: Work | Contact
  - Removed: Home, About, Experience, Skills
  - Logo: "andres" simple

- **Footer simplificado:**
  - Copyright + "Built with" en single line
  - Removed: Columnas, links extensos

### 🗑️ Removed

- **About section completa** → Info integrada en Hero
- **Experience timeline** → Ex-Graphite mencionado en Hero
- **Skills progress bars** → Demasiado corporativo
- **Contact form** → Email directo más efectivo
- **Multiple navigation links** → Solo esenciales

### 🎯 Changed

- **Color scheme:** Negro → Blanco
- **Vibe:** Technical/Hacker → Commercial/Professional
- **Sections:** 7 → 3
- **Scroll time:** 3-4 min → < 30 seg
- **Target audience:** Tech enthusiasts → Decision makers
- **Page size:** 52.4 kB → 47.1 kB (↓ 10%)

### 🚀 Performance

- Build time: ~15 segundos
- Bundle size: 47.1 kB (first load)
- Lighthouse score: 95+ (performance)
- Mobile-first: 100% responsive

### 📝 Commits

```
1d499d8 - Implement Anthropic-style commercial design
a921a47 - Implement Graphite Dark Hybrid design system (Phase 2)
a6f3693 - Implement Graphite Dark Hybrid design (Phase 1)
```

---

## [1.0.0] - Graphite Dark Hybrid - 2025-01-XX

### 🎨 GRAPHITE-INSPIRED DESIGN

**Filosofía:** Minimal dark design inspirado en graphite.io
**Color:** Negro #1a1a1a + Verde #42CA80
**Estilo:** Flat, sin gradientes, monoespaciado

### ✨ Added

- Dark theme (#1a1a1a background)
- Verde Graphite (#42CA80) como acento
- JetBrains Mono para títulos y números
- Diseño flat (no glassmorphism)
- Experience section con Graphite destacado:
  - Border verde especial
  - Shadow con glow verde
  - Badge "FEATURED"
- Custom scrollbar verde
- Utility classes para Graphite style

### 🎯 Components

- Hero con badge verde
- Experience con timeline visual
- Projects con filtros y featured badges
- Skills con progress bars verdes
- About con stats cards
- Contact con form completo
- Footer con back-to-top verde

### 📝 Commits

```
a6f3693 - Implement Graphite Dark Hybrid design (Phase 1)
[earlier] - Initial setup with dark gradients
```

---

## [0.1.0] - Initial Setup - 2025-01-XX

### ✨ Initial Implementation

- Next.js 14 setup
- TypeScript configuration
- Tailwind CSS
- Framer Motion animations
- All components created:
  - Navigation
  - Hero
  - About
  - Experience
  - Projects
  - Skills
  - Contact
  - Footer
- Portfolio data centralized
- Dark mode by default
- Deployed to Vercel

### 🐛 Fixes During Setup

- Missing postcss.config.js → Created
- Missing Tailwind plugins → Installed
- CSS variables not working → Simplified to direct classes
- TypeScript metadata error → Fixed author field
- Build errors → Resolved all compilation issues

---

## Version Comparison

### v2.0.0 (Current - Anthropic)
```
Style:      Clean white minimal
Vibe:       Commercial professional
Sections:   3 (Hero, Projects, Contact)
Time:       < 30 seconds
Target:     Decision makers
Conversion: High ✓
```

### v1.0.0 (Graphite Dark)
```
Style:      Dark minimal hacker
Vibe:       Technical underground
Sections:   7 (Full portfolio)
Time:       3-4 minutes
Target:     Tech enthusiasts
Conversion: Medium
```

### v0.1.0 (Initial)
```
Style:      Dark gradients
Vibe:       Portfolio showcase
Sections:   7 (Full portfolio)
Time:       3-4 minutes
Target:     General audience
Conversion: Low
```

---

## Breaking Changes

### v2.0.0 → v1.0.0
- Complete color scheme change (dark → white)
- Removed 4 major sections
- Simplified navigation drastically
- Changed brand identity
- Removed all terminal/hacker aesthetics

### v1.0.0 → v0.1.0
- Changed from gradients to flat design
- Updated all color values
- Changed typography to monospace
- Added Graphite highlighting

---

## Migration Guide

### From v1.0.0 to v2.0.0

**If you want to revert to dark theme:**

1. Edit `src/app/globals.css`:
```css
body { @apply bg-[#1a1a1a] text-white; }
```

2. Edit `src/app/layout.tsx`:
```tsx
<div className="relative min-h-screen bg-[#1a1a1a] text-white">
```

3. Update component colors in each file

**To restore removed sections:**

1. Add back to `src/app/page.tsx`:
```tsx
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';

// Add to JSX
<About />
<Experience />
<Skills />
```

Components still exist, just not imported!

---

## Upcoming Changes

See [ROADMAP.md](./ROADMAP.md) for planned features.

---

## Links

- **Production:** https://portfolio-eta-amber-z65kfa5giq.vercel.app/
- **Repository:** https://github.com/intelguy8000/portfolio
- **Deployment:** Vercel (auto-deploy from main)

---

_Mantenido por: andres_
_Última actualización: Enero 2025_
