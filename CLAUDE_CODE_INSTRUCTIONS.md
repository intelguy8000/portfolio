# 🤖 INSTRUCCIONES PARA CLAUDE CODE

## OBJETIVO
Construir un portfolio website profesional para Juan Andrés García usando este repositorio como base.

## STACK TECNOLÓGICO REQUERIDO
- **Framework**: Next.js 14 con App Router
- **Styling**: Tailwind CSS (config ya incluido)
- **Animaciones**: Framer Motion
- **Charts**: Recharts para visualizaciones
- **Formulario**: EmailJS para contacto
- **Iconos**: React Icons
- **Deploy**: Optimizado para Vercel

## ESTRUCTURA DE CARPETAS A CREAR

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio-content.js (YA CREADO)
│   └── utils/
│       ├── animations.ts
│       └── helpers.ts
└── public/
    ├── images/
    ├── resume/
    └── favicon.ico
```

## COMPONENTES A IMPLEMENTAR

### 1. Navigation.tsx
- Sticky header con blur background
- Links: Home, About, Experience, Projects, Skills, Contact
- Dark/Light mode toggle
- Mobile responsive con hamburger menu

### 2. Hero.tsx
- Headline animado con typewriter effect
- Stats cards con counter animation (CountUp)
- Botones CTA: View Work, Download CV, Contact
- Background con partículas o gradient animado

### 3. About.tsx
- Grid layout con bio y highlights
- Skills badges interactivos
- Foto placeholder o avatar
- Animación fade-in on scroll

### 4. Experience.tsx
- Timeline vertical con línea conectora
- Cards para cada experiencia
- Tags de tecnologías
- Indicador visual para contract vs full-time
- Animación stagger on scroll

### 5. Projects.tsx
- Grid de project cards
- Filtros por categoría (All, SaaS, Power BI, Full-Stack)
- Hover effects con overlay
- Métricas destacadas
- Links a demo/GitHub
- Modal o expanded view opcional

### 6. Skills.tsx
- Categorías: BI, Data Engineering, SaaS Metrics, Cloud
- Progress bars o rating stars
- Hover effects para mostrar nivel
- Grid responsive

### 7. Contact.tsx
- Formulario con validación
- Integración con EmailJS
- Info de contacto directa
- Social links
- Mapa opcional (Medellín)

### 8. Footer.tsx
- Links rápidos
- Social media
- Copyright
- Back to top button

## FEATURES ESPECIALES A INCLUIR

### Dark/Light Mode
```typescript
// Usar next-themes
import { ThemeProvider } from 'next-themes'

// En layout.tsx
<ThemeProvider attribute="class" defaultTheme="dark">
  {children}
</ThemeProvider>
```

### Animaciones On Scroll
```typescript
// Usar framer-motion con InView
import { motion, useInView } from 'framer-motion'

const ref = useRef(null)
const isInView = useInView(ref, { once: true })
```

### Counter Animation para Stats
```typescript
import CountUp from 'react-countup'

<CountUp 
  end={50} 
  duration={2.5} 
  suffix="+"
  enableScrollSpy
/>
```

### Filtros de Proyectos
```typescript
const [filter, setFilter] = useState('All')

const filteredProjects = projects.filter(project => 
  filter === 'All' || project.category === filter
)
```

## ESTILOS Y TEMA

### Colores (ya configurados en tailwind.config.js)
- Primary: Blue (#2563eb)
- Secondary: Purple (#7c3aed)
- Accent: Green (#10b981)
- Dark BG: #0f172a
- Card BG: #1e293b

### Tipografía
- Headlines: font-display (Poppins)
- Body: font-sans (Inter)
- Code: font-mono (Fira Code)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## OPTIMIZACIONES REQUERIDAS

### Performance
- Lazy loading de imágenes
- Code splitting por ruta
- Optimización de bundle size
- Precarga de fonts

### SEO
```typescript
// En layout.tsx o page.tsx
export const metadata = {
  title: 'Juan Andrés García | Senior BI Analyst',
  description: 'Ex-Graphite contractor specializing in SaaS metrics',
  keywords: 'BI, Power BI, Looker Studio, BigQuery, SaaS',
  openGraph: {
    // OG tags
  }
}
```

### Analytics
```typescript
// Google Analytics con next/script
import Script from 'next/script'

<Script 
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

## CONTENIDO PLACEHOLDER

### Imágenes Necesarias
- Avatar/Foto profesional: 400x400px
- Screenshots proyectos: 800x600px
- Logo empresas: 200x100px
- Fondo hero: 1920x1080px

### Textos a Personalizar
- Todo el contenido está en `/src/data/portfolio-content.js`
- Actualizar links de GitHub
- Agregar PDF del CV en `/public/resume/`

## COMANDOS DE DESARROLLO

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Preview producción
npm run start

# Linting
npm run lint

# Deploy a Vercel
vercel --prod
```

## CHECKLIST DE IMPLEMENTACIÓN

- [ ] Setup inicial con Next.js
- [ ] Configurar Tailwind CSS
- [ ] Crear layout base con navegación
- [ ] Implementar Hero section
- [ ] Agregar About section
- [ ] Crear Experience timeline
- [ ] Desarrollar Projects grid
- [ ] Añadir Skills section
- [ ] Implementar Contact form
- [ ] Agregar Footer
- [ ] Dark/Light mode
- [ ] Animaciones scroll
- [ ] Responsive design
- [ ] Optimización SEO
- [ ] Testing cross-browser
- [ ] Deploy a Vercel

## PROMPT SUGERIDO PARA CLAUDE CODE

```
Necesito que construyas el portfolio completo siguiendo estas especificaciones:

1. Usa Next.js 14 con App Router y TypeScript
2. Implementa todos los componentes listados
3. Usa los datos de /src/data/portfolio-content.js
4. Aplica animaciones con Framer Motion
5. Hazlo completamente responsive
6. Incluye dark/light mode
7. Optimiza para performance y SEO

Empieza creando la estructura base y luego implementa cada componente.
El diseño debe ser moderno, profesional y destacar la experiencia en Graphite.
```

## NOTAS IMPORTANTES

1. **Graphite Experience**: Destacar prominentemente
2. **SaaS Metrics**: Enfatizar expertise en ARR/MRR
3. **Diseño**: Profesional pero moderno (tech startup vibe)
4. **Performance**: Lighthouse score > 90
5. **Accesibilidad**: WCAG 2.1 AA compliant

---

**¡Con estas instrucciones, Claude Code debería poder construir el portfolio completo!**
