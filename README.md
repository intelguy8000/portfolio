# andres - Personal Portfolio

> Building. Learning. Evolving.

Clean, minimal, commercial portfolio inspired by Anthropic's design philosophy. Built to convert visitors into clients in < 30 seconds.

**Live:** https://andres-ai.vercel.app/
**Previous:** https://portfolio-eta-amber-z65kfa5giq.vercel.app/

---

## 🎯 Design Philosophy

**Inspired by:** Anthropic, Starlink, Neuralink
**Goal:** Professional, high-impact, commercially viable
**Target:** Decision makers, not just tech enthusiasts
**Time to message:** < 30 seconds

### Brand Identity

- **Brand Name:** andres (lowercase, clean)
- **Tagline:** Building. Learning. Evolving.
- **Mission:** Data architect transforming complexity into clarity
- **Current Focus:** GenAI @ Vanderbilt | Ex-Graphite | 6+ Years

---

## 🎨 Design System

### Colors

```css
White:     #FFFFFF  /* Background */
Black:     #000000  /* Primary text */
Green:     #42CA80  /* Brand accent */
Gray-600:  #666666  /* Secondary text */
Gray-200:  #E5E5E5  /* Borders */
Gray-100:  #F5F5F5  /* Subtle backgrounds */
```

### Typography

- **Font Family:** Inter (sans-serif)
- **Headings:** Bold, tight letter-spacing
- **Body:** Regular, comfortable line-height
- **Style:** Clean, modern, professional

### Components

- **Cards:** White background, gray borders, green hover
- **Buttons:** Primary (green), Secondary (black), Outline (black border)
- **Navigation:** Minimal, transparent → white on scroll
- **Footer:** Simple, single-line

---

## 📐 Structure

```
├── Hero (fullscreen)
│   ├── Brand name: "andres" (huge)
│   ├── Tagline: "Building. Learning. Evolving."
│   ├── Description + credentials
│   ├── CTAs: View Work | Get in Touch
│   └── Stats: 50+ | $2M+ | 500M+ | 6+
│
├── Projects (featured only)
│   ├── 3 projects maximum
│   ├── Numbered cards (01, 02, 03)
│   └── Link to GitHub for all projects
│
├── Contact (ultra-minimal)
│   ├── "Let's Build Something" CTA
│   └── Email + Social links
│
└── Footer (simple)
    └── Copyright + Built with
```

**Total scroll time:** < 30 seconds
**Sections:** 3 (Hero+Stats, Projects, Contact)
**Page size:** 47.1 kB

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Inter (Google Fonts)
- **Icons:** React Icons (HeroIcons, FontAwesome)
- **Deployment:** Vercel (auto-deploy from main branch)

---

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/intelguy8000/portfolio.git
cd portfolio-juan

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 📂 Project Structure

```
portfolio-juan/
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles + utilities
│   │   ├── layout.tsx          # Root layout + metadata
│   │   └── page.tsx            # Main page (3 sections)
│   ├── components/
│   │   ├── Navigation.tsx      # Minimal nav (Work | Contact)
│   │   ├── Hero.tsx           # Fullscreen hero + stats
│   │   ├── Projects.tsx       # Featured projects (3 max)
│   │   ├── Contact.tsx        # Email CTA + socials
│   │   └── Footer.tsx         # Simple footer
│   ├── data/
│   │   └── portfolio-content.js  # All content (centralized)
│   └── utils/
│       ├── animations.ts      # Framer Motion variants
│       └── helpers.ts         # Utility functions
├── public/
│   ├── resume/                # CV files
│   └── favicon.ico
└── [config files]
```

---

## 🎯 What's Included

### ✅ Implemented

- [x] Clean minimal design (Anthropic-inspired)
- [x] Responsive mobile-first layout
- [x] Smooth animations (Framer Motion)
- [x] SEO optimized (metadata, OpenGraph)
- [x] Fast loading (< 50 kB)
- [x] Auto-deploy to Vercel
- [x] TypeScript + ESLint
- [x] Centralized content management

### ❌ Removed (Intentionally)

- Long about section → Integrated into hero
- Experience timeline → Ex-Graphite mentioned in hero
- Skills progress bars → Too corporate
- Contact form → Direct email/links instead
- Filters/categories → Only featured projects

---

## 📊 Performance

```
Build size:     47.1 kB
Load time:      < 1 second
Scroll time:    < 30 seconds
Sections:       3
Mobile-first:   Yes
SEO:           Optimized
```

---

## 🔄 Content Management

All content is centralized in `src/data/portfolio-content.js`:

```javascript
// Update your info here:
export default {
  personal: {
    name: 'Juan Andrés García G.',
    email: 'your@email.com',
    phone: '+57 XXX XXX XXXX',
    location: 'Colombia',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    resumeUrl: '/resume/YourCV.pdf'
  },
  hero: {
    headline: '...',
    description: '...',
    stats: [...]
  },
  projects: [...],
  // etc.
}
```

**No need to edit components** - just update the data file!

---

## 🚀 Deployment

### Automatic (Recommended)

Connected to Vercel with auto-deploy on push to `main`:

```bash
git push origin main
# Vercel auto-deploys in ~2 minutes
```

### Manual

```bash
npm run build
npm start
# or
vercel --prod
```

---

## 🎨 Customization Guide

### Change Colors

Edit `src/app/globals.css`:

```css
.text-brand-green { color: #42CA80; }  /* Change green accent */
.btn-primary { @apply bg-[#42CA80]; }  /* Change button color */
```

### Change Content

Edit `src/data/portfolio-content.js`:

```javascript
hero: {
  headline: 'Your new headline',
  stats: [
    { value: 100, suffix: '+', label: 'Your metric' }
  ]
}
```

### Add/Remove Sections

Edit `src/app/page.tsx`:

```typescript
export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Projects />
      {/* Add your new section here */}
      <Contact />
      <Footer />
    </main>
  );
}
```

---

## 📱 Responsive Design

Breakpoints (Tailwind defaults):

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

All components are mobile-first and fully responsive.

---

## 🧪 Testing Checklist

Before deploying changes:

```bash
# 1. Type check
npm run build

# 2. Test locally
npm run dev
# Visit http://localhost:3000

# 3. Check mobile
# Use browser DevTools → Responsive mode

# 4. Verify links
# Click all CTAs and social links

# 5. Test animations
# Scroll through entire page

# 6. Check performance
# Use Lighthouse in Chrome DevTools
```

---

## 📝 Git Workflow

```bash
# Make changes
git add .
git commit -m "feat: your change description"
git push origin main

# Vercel auto-deploys
# Check: https://andres-ai.vercel.app/
```

---

## 🐛 Troubleshooting

### Build fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Styles not updating

```bash
# Restart dev server
# Hard refresh browser (Cmd+Shift+R)
```

### Vercel deploy stuck

```bash
# Force redeploy
git commit --allow-empty -m "chore: trigger deploy"
git push origin main
```

---

## 📚 Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **React Icons:** https://react-icons.github.io/react-icons/

---

## 🎯 Design Inspirations

- **Claude.com Product Page:** https://claude.com/product/overview (primary inspiration - animated, engaging)
- **Anthropic:** https://anthropic.com (clean, professional)
- **Starlink:** https://starlink.com (visual, bold)
- **Neuralink:** https://neuralink.com (minimal, luxury)

---

## 📚 Documentation

- **[README.md](./README.md)** - This file (overview)
- **[ROADMAP.md](./ROADMAP.md)** - Planned features & improvements
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Technical guide

---

## 📄 License

Personal portfolio - All rights reserved © 2025 andres

---

## 🤝 Credits

Built with Claude Code
Design: Anthropic-inspired minimal
Development: Next.js 14 + Tailwind CSS

---

## 📞 Contact

- **Email:** jgarci60@eafit.edu.co
- **LinkedIn:** https://linkedin.com/in/juanandresgarcia
- **GitHub:** https://github.com/intelguy8000

---

**Last updated:** January 2025
**Version:** 2.0.0 (Anthropic Redesign)
**Status:** ✅ Production Ready
