# Development Guide

Guía técnica completa para desarrollar y mantener el portfolio de andres.

---

## 🚀 Quick Start

```bash
# 1. Clone & Install
git clone https://github.com/intelguy8000/portfolio.git
cd portfolio-juan
npm install

# 2. Run dev server
npm run dev
# Visit http://localhost:3000

# 3. Build for production
npm run build
npm start

# 4. Deploy (auto from main branch)
git push origin main
```

---

## 📁 Project Structure

```
portfolio-juan/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles + utilities
│   │   ├── layout.tsx          # Root layout (fonts, metadata)
│   │   └── page.tsx            # Main page (imports sections)
│   │
│   ├── components/             # React components
│   │   ├── Navigation.tsx      # Top nav (minimal)
│   │   ├── Hero.tsx           # Fullscreen hero + stats
│   │   ├── Projects.tsx       # Featured projects (3 max)
│   │   ├── Contact.tsx        # Email CTA + socials
│   │   ├── Footer.tsx         # Simple footer
│   │   ├── About.tsx          # [NOT USED] Available if needed
│   │   ├── Experience.tsx     # [NOT USED] Available if needed
│   │   └── Skills.tsx         # [NOT USED] Available if needed
│   │
│   ├── data/
│   │   └── portfolio-content.js  # ⭐ SINGLE SOURCE OF TRUTH
│   │
│   └── utils/
│       ├── animations.ts      # Framer Motion variants
│       └── helpers.ts         # Utility functions (scroll, email validation)
│
├── public/
│   ├── resume/                # CV files (PDF)
│   └── favicon.ico
│
├── [Config Files]
│   ├── next.config.js         # Next.js configuration
│   ├── tailwind.config.js     # Tailwind configuration
│   ├── tsconfig.json          # TypeScript configuration
│   ├── postcss.config.js      # PostCSS (required for Tailwind)
│   └── package.json           # Dependencies
│
└── [Documentation]
    ├── README.md              # Main documentation
    ├── ROADMAP.md             # Future plans
    ├── CHANGELOG.md           # Version history
    └── DEVELOPMENT.md         # This file
```

---

## 🎯 Content Management

### ⭐ Single Source of Truth

**Everything lives in:** `src/data/portfolio-content.js`

```javascript
export default {
  // Personal info
  personal: {
    name: 'Juan Andrés García G.',
    email: 'your@email.com',
    phone: '+57 XXX XXX XXXX',
    location: 'Colombia',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    resumeUrl: '/resume/YourCV.pdf'
  },

  // Hero section
  hero: {
    headline: 'Transforming Data into Strategic Insights',
    description: '...',
    stats: [
      { value: 50, suffix: '+', label: 'Dashboards Delivered', prefix: '' },
      { value: 2, suffix: 'M+', label: 'Cost Savings', prefix: '$' },
      // ...
    ]
  },

  // Projects
  projects: [
    {
      id: 'project-1',
      title: 'Project Name',
      description: 'Description...',
      category: 'SaaS Analytics',
      featured: true,  // ⭐ Show in homepage
      technologies: ['Python', 'BigQuery', 'Power BI'],
      metrics: {
        'Impact': '$500K saved',
        'Scale': '100M+ events'
      },
      links: {
        github: 'https://github.com/...',
        demo: 'https://...',
        case: 'https://...'
      }
    }
  ],

  // Other sections (not currently used but available)
  about: { ... },
  experience: [ ... ],
  skills: { ... },
  education: { ... }
}
```

### How to Update Content

1. **Edit personal info:**
```javascript
// src/data/portfolio-content.js
personal: {
  email: 'newemail@example.com',  // ← Change here
  // Components auto-update!
}
```

2. **Add a new project:**
```javascript
projects: [
  // Add at top for featured
  {
    id: 'new-project',
    title: 'New Amazing Project',
    featured: true,  // ⭐ Will show on homepage
    // ... rest of fields
  },
  // ... existing projects
]
```

3. **Update stats:**
```javascript
hero: {
  stats: [
    { value: 60, suffix: '+', label: 'New Number' },  // ← Change value
  ]
}
```

**No need to touch components!** They read from this file.

---

## 🎨 Styling System

### Tailwind Utilities (in globals.css)

```css
/* Brand colors */
.text-brand-green { color: #42CA80; }
.bg-brand-green { background-color: #42CA80; }
.border-brand-green { border-color: #42CA80; }

/* Buttons */
.btn-primary { /* Green button */ }
.btn-secondary { /* Black button */ }
.btn-outline { /* Outline button */ }

/* Cards */
.card-clean { /* White card with gray border */ }
.card-stat { /* Stat card (used in hero) */ }

/* Links */
.link-clean { /* Gray → Green hover */ }
.link-primary { /* Green → Darker green hover */ }

/* Spacing */
.section-padding { /* py-20 md:py-32 */ }
```

### Using Custom Classes

```tsx
// ✅ Good
<button className="btn-primary">Click me</button>

// ❌ Avoid repeating
<button className="px-10 py-4 bg-[#42CA80] text-white rounded-lg...">
```

### Color Palette

```javascript
// Use these exact values
const colors = {
  white: '#FFFFFF',      // Background
  black: '#000000',      // Text
  green: '#42CA80',      // Brand accent
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    600: '#4B5563',
  }
}
```

### Typography Scale

```tsx
// Headings
<h1 className="text-7xl sm:text-8xl md:text-9xl">  // Hero brand
<h2 className="text-4xl md:text-5xl lg:text-6xl">  // Section titles
<h3 className="text-2xl">                          // Card titles

// Body
<p className="text-lg sm:text-xl">  // Lead text
<p className="text-base">           // Regular text
<p className="text-sm">             // Small text
```

---

## 🧩 Component Architecture

### Component Pattern

All components follow this structure:

```tsx
'use client';  // ← Required for interactive components

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '@/data/portfolio-content';

export default function ComponentName() {
  // Intersection observer for animations
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Get data from centralized source
  const { section } = portfolioData;

  return (
    <section id="component-name" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Content here */}
        </motion.div>
      </div>
    </section>
  );
}
```

### Adding a New Component

1. **Create file:**
```bash
touch src/components/NewSection.tsx
```

2. **Component code:**
```tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import portfolioData from '@/data/portfolio-content';

export default function NewSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="new-section" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            New Section
          </h2>
          {/* Your content */}
        </motion.div>
      </div>
    </section>
  );
}
```

3. **Import in page.tsx:**
```tsx
import NewSection from '@/components/NewSection';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <NewSection />  {/* ← Add here */}
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
```

4. **Add to Navigation (if needed):**
```tsx
const navLinks = [
  { name: 'Work', href: 'projects' },
  { name: 'New', href: 'new-section' },  // ← Add here
  { name: 'Contact', href: 'contact' },
];
```

---

## 🎬 Animations

### Using Framer Motion

```tsx
import { motion } from 'framer-motion';

// Fade in on mount
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Fade in when in viewport
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Stagger children
<motion.div
  initial="hidden"
  animate="show"
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item, i) => (
    <motion.div key={i} variants={fadeIn('up', 0.1 * i)}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Animation Variants

Available in `src/utils/animations.ts`:

```typescript
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number) => { ... }
export const staggerContainer = (staggerChildren: number, delayChildren: number) => { ... }
export const textVariant = (delay: number) => { ... }
```

---

## 📱 Responsive Design

### Breakpoints

```javascript
// Tailwind breakpoints (mobile-first)
sm:  640px   // Small tablets
md:  768px   // Tablets
lg:  1024px  // Laptops
xl:  1280px  // Desktops
2xl: 1536px  // Large desktops
```

### Responsive Patterns

```tsx
// Mobile: Stack, Desktop: Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// Mobile: Small text, Desktop: Large text
<h1 className="text-4xl sm:text-6xl md:text-8xl">

// Mobile: Hidden, Desktop: Show
<div className="hidden md:block">

// Mobile: Show, Desktop: Hidden
<div className="block md:hidden">

// Responsive padding
<div className="px-4 sm:px-6 lg:px-8">

// Responsive margin
<div className="mb-8 md:mb-16">
```

### Testing Responsive

```bash
# Run dev server
npm run dev

# Open Chrome DevTools (F12)
# Click device icon (Cmd+Shift+M)
# Test on:
# - iPhone SE (375px)
# - iPhone 12 Pro (390px)
# - iPad (768px)
# - Desktop (1280px)
```

---

## 🔧 Development Workflow

### Daily Development

```bash
# 1. Pull latest
git pull origin main

# 2. Create feature branch (optional)
git checkout -b feature/new-section

# 3. Run dev server
npm run dev

# 4. Make changes
# Edit files...

# 5. Test
npm run build  # Check for errors

# 6. Commit
git add .
git commit -m "feat: add new section"

# 7. Push
git push origin main
# (or: git push origin feature/new-section)

# 8. Vercel auto-deploys
# Wait ~2 minutes
# Check: https://portfolio-eta-amber-z65kfa5giq.vercel.app/
```

### Git Commit Convention

```bash
# Format: <type>: <description>

# Types:
feat:     New feature
fix:      Bug fix
docs:     Documentation only
style:    Formatting, no code change
refactor: Code change, no feature/fix
perf:     Performance improvement
test:     Adding tests
chore:    Build process, dependencies

# Examples:
git commit -m "feat: add dark mode toggle"
git commit -m "fix: mobile navigation not closing"
git commit -m "docs: update README with new sections"
git commit -m "style: improve button hover states"
```

---

## 🐛 Debugging

### Common Issues

#### 1. Build fails

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

#### 2. Styles not applying

```bash
# Hard refresh browser
# Chrome/Edge: Cmd+Shift+R (Mac) or Ctrl+F5 (Windows)

# Clear Tailwind cache
rm -rf .next

# Restart dev server
npm run dev
```

#### 3. TypeScript errors

```bash
# Check types
npx tsc --noEmit

# If too many errors, temporarily disable
# (not recommended for production)
// tsconfig.json
{
  "compilerOptions": {
    "strict": false
  }
}
```

#### 4. Framer Motion warnings

```
Warning: Function components cannot be given refs
```

Solution: Add `'use client'` to top of component

```tsx
'use client';  // ← Add this

import { motion } from 'framer-motion';
```

#### 5. Image optimization errors

```bash
# If using images, they must be in /public
/public/images/project1.jpg  ✅
/src/images/project1.jpg     ❌

# Use Next.js Image component
import Image from 'next/image';
<Image src="/images/project1.jpg" width={800} height={600} alt="Project" />
```

---

## 🚀 Deployment

### Vercel (Current)

**Auto-deployment configured:**

```bash
# Any push to main triggers deploy
git push origin main

# Check deployment status
# Visit: https://vercel.com/dashboard

# Deployment takes ~2 minutes
# URL: https://portfolio-eta-amber-z65kfa5giq.vercel.app/
```

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

If you need env vars (e.g., API keys):

```bash
# Local (.env.local)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXX

# Vercel Dashboard
# Settings → Environment Variables
```

Access in code:

```typescript
const gaId = process.env.NEXT_PUBLIC_GA_ID;
```

---

## 📊 Performance Optimization

### Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // ... your config
})

# Run analysis
ANALYZE=true npm run build
```

### Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/images/project.jpg"
  width={800}
  height={600}
  alt="Project screenshot"
  loading="lazy"  // Lazy load
  placeholder="blur"  // Blur-up effect (optional)
/>
```

### Code Splitting

```tsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false  // Don't render on server
});
```

---

## 🧪 Testing

### Manual Testing Checklist

Before deploying:

```bash
✓ npm run build succeeds
✓ All links work (navigation, projects, social)
✓ Animations smooth (not janky)
✓ Mobile responsive (test all breakpoints)
✓ Images load properly
✓ Forms work (if applicable)
✓ No console errors
✓ Lighthouse score > 90
```

### Lighthouse Audit

```bash
# Chrome DevTools
# 1. Open DevTools (F12)
# 2. Go to "Lighthouse" tab
# 3. Click "Generate report"
# 4. Check scores:
#    Performance:  > 90
#    Accessibility: > 90
#    Best Practices: > 90
#    SEO:          > 90
```

---

## 📚 Learning Resources

### Next.js

- Docs: https://nextjs.org/docs
- Learn: https://nextjs.org/learn
- Examples: https://github.com/vercel/next.js/tree/canary/examples

### Tailwind CSS

- Docs: https://tailwindcss.com/docs
- Cheat Sheet: https://nerdcave.com/tailwind-cheat-sheet
- Play: https://play.tailwindcss.com/

### Framer Motion

- Docs: https://www.framer.com/motion/
- Examples: https://www.framer.com/motion/examples/
- Animation: https://www.framer.com/motion/animation/

### TypeScript

- Handbook: https://www.typescriptlang.org/docs/handbook/intro.html
- React+TS Cheatsheet: https://react-typescript-cheatsheet.netlify.app/

---

## 🛠️ Tools & Extensions

### Recommended VS Code Extensions

```
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)
- GitLens
- Auto Rename Tag
- Path Intellisense
```

### Useful CLI Tools

```bash
# Format code
npx prettier --write .

# Lint code
npx eslint . --fix

# Check types
npx tsc --noEmit

# Update dependencies
npx npm-check-updates -u
npm install
```

---

## 🔐 Security

### Best Practices

```typescript
// ✅ DO: Sanitize user input
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(userInput);

// ✅ DO: Use environment variables for secrets
const apiKey = process.env.API_KEY;

// ❌ DON'T: Expose secrets in code
const apiKey = "sk_live_abc123";  // Never!

// ❌ DON'T: Trust user input
dangerouslySetInnerHTML={{ __html: userInput }}  // Dangerous!
```

---

## 📞 Support

### Getting Help

1. **Check documentation:** README.md, ROADMAP.md
2. **Search issues:** GitHub repo issues
3. **Next.js docs:** https://nextjs.org/docs
4. **Stack Overflow:** [nextjs] tag

### Reporting Bugs

```markdown
**Describe the bug**
Clear description

**To Reproduce**
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- OS: [e.g. macOS]
- Browser: [e.g. chrome, safari]
- Version: [e.g. 22]
```

---

## 🎯 Next Steps

1. **Read:** [ROADMAP.md](./ROADMAP.md) for planned features
2. **Review:** [CHANGELOG.md](./CHANGELOG.md) for version history
3. **Start coding!** 🚀

---

_Última actualización: Enero 2025_
_Mantenido por: andres_
