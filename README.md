# Léa Brasseur - Portfolio

Portfolio moderne pour Léa Brasseur, mannequin et comédienne, avec animations avancées inspirées de Skaald.

![Preview](https://img.shields.io/badge/Status-Live-success)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## ✨ Features

### Animations & Effects
- **Three.js Particles** - Fond de particules 3D interactif qui suit la souris
- **GSAP + ScrollTrigger** - Animations de scroll fluides et dynamiques
- **Lenis Smooth Scroll** - Défilement ultra-fluide avec easing personnalisé
- **Text Splitting** - Animation lettre par lettre sur le titre hero
- **Parallax Images** - Effet de profondeur sur les photos de shoots
- **Auto-hide Navigation** - Navigation qui disparaît au scroll

### Sections
1. **Hero** - Titre animé avec particules Three.js
2. **Mannequinat** - Galerie de shoots avec parallax et hover effects
3. **Comédie** - Cartes vidéo avec play button animé
4. **À propos** - Biographie et statistiques
5. **Contact** - Coordonnées et réseaux sociaux

### Tech Stack
- **Framework** : Next.js 16 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : GSAP + ScrollTrigger
- **3D Graphics** : Three.js
- **Smooth Scroll** : Lenis
- **Fonts** : Geist Sans & Mono

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/tfwb5wfxwq-crypto/leabrasseur.git
cd leabrasseur

# Install dependencies
npm install

# Run development server
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tfwb5wfxwq-crypto/leabrasseur)

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tfwb5wfxwq-crypto/leabrasseur)

## 📁 Structure

```
leabrasseur/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   ├── Navigation.tsx      # Auto-hide nav with underline effects
│   ├── ParticlesBackground.tsx  # Three.js particles
│   ├── Hero.tsx            # Hero section with text animation
│   ├── ModelingSection.tsx # Photo gallery with parallax
│   ├── ActingSection.tsx   # Video cards section
│   ├── About.tsx           # Biography and stats
│   └── Contact.tsx         # Contact information
└── public/                 # Static assets
```

## 🎨 Customization

### Colors
Modifier les couleurs dans `tailwind.config.ts` :
```typescript
colors: {
  purple: {
    400: '#a78bfa',  // Accent color
    950: '#1e1b4b',  // Dark purple
  }
}
```

### Animations
Ajuster la vitesse dans `components/SmoothScroll.tsx` :
```typescript
const lenis = new Lenis({
  duration: 1.2,  // Durée de l'easing (1.2s par défaut)
  // ...
});
```

### Particles
Modifier le nombre de particules dans `components/ParticlesBackground.tsx` :
```typescript
const particlesCount = 1000;  // 1000 par défaut
```

## 📝 Content Management

### Ajouter des photos de shoots
Modifier l'array `shoots` dans `components/ModelingSection.tsx` :
```typescript
const shoots = [
  { 
    id: 1, 
    title: 'Nouveau Shoot', 
    year: '2026', 
    image: 'https://...' 
  },
  // ...
];
```

### Ajouter des vidéos
Modifier l'array `videos` dans `components/ActingSection.tsx` :
```typescript
const videos = [
  { 
    id: 1, 
    title: 'Nouvelle Production', 
    type: 'Rôle principal', 
    thumbnail: 'https://...' 
  },
  // ...
];
```

## 🐛 Troubleshooting

### Port déjà utilisé
Si le port 3000 est occupé :
```bash
npm run dev -- -p 3001
```

### Erreurs Three.js
Si vous voyez des erreurs WebGL :
- Vérifiez que votre navigateur supporte WebGL
- Essayez de désactiver les extensions qui bloquent WebGL

## 📄 License

© 2026 Léa Brasseur. Tous droits réservés.

## 🙏 Credits

- Animations inspirées de [Skaald](https://www.skaald.com/)
- Développé avec ❤️ par Claude Code

---

**Status** : 🚀 Live & Ready  
**Demo** : [https://leabrasseur.vercel.app](https://github.com/tfwb5wfxwq-crypto/leabrasseur)
