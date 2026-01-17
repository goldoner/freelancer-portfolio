# Aleksandr Grek — Freelancer Portfolio

Personal landing page for **Aleksandr Grek**, Senior Full-Stack Software Engineer based in Vienna, Austria.

🌐 **Live:** [aleksandr-grek.netlify.app](https://aleksandr-grek.netlify.app)

---

## About

A dark-themed, animated freelancer portfolio built with **Next.js 16**, **Framer Motion**, and **Tailwind CSS v4**. Features smooth scroll sections, interactive spotlight effects, a typewriter hero with profile photo, and cross-browser compatible rendering — all statically generated with no external runtime dependencies.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React + custom SVGs |
| Font | Geist (via `next/font`) |

## Sections

- **Hero** — Profile photo, animated typewriter ("Senior Full Stack Engineer."), availability badge, CTA links
- **About** — Story, background, USP cards
- **Services** — 10 service offerings with interactive hover spotlight
- **Stack** — Tech categorised by domain
- **Experience** — Timeline: Porsche Informatik · GridData · Fiverr + Education & Certifications
- **Rates** — "Let's talk" engagement card with platform links
- **Contact** — Email, GitHub, LinkedIn, location

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

**Deploy to Vercel** (recommended — connect your GitHub repo at [vercel.com/new](https://vercel.com/new) for automatic deployments on push).

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Tailwind + spotlight keyframe + overflow fix
│   ├── layout.tsx        # Metadata, SEO, fonts
│   └── page.tsx          # Section composition
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Stack.tsx
│   │   ├── Experience.tsx
│   │   ├── Rates.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── spotlight.tsx
│       ├── typewriter-effect.tsx
│       └── social-icons.tsx
└── lib/
    └── utils.ts
```

## Contact

- Email: [goldoner@gmail.com](mailto:goldoner@gmail.com)
- GitHub: [github.com/goldoner](https://github.com/goldoner)
- LinkedIn: [linkedin.com/in/aleksandr-grek-79137b1a8](https://www.linkedin.com/in/aleksandr-grek-79137b1a8/)
- Location: Vienna, Austria
