# Sumit Sadafule — 3D Portfolio

A personal portfolio website built with React, TypeScript, Tailwind CSS and Three.js (react-three-fiber), featuring an interactive 3D desktop scene and rotating Earth model.

## Sections

- Hero
- About
- Internships & Experience
- Achievements & Certifications
- Projects
- Contact (with a 3D Earth model, powered by EmailJS)

## Tech Stack

React 18 • TypeScript • Vite • Tailwind CSS • Three.js • @react-three/fiber • @react-three/drei • Framer Motion • EmailJS

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# type-check and build for production
npm run build

# preview the production build
npm run preview
```

## Contact form setup

The Contact section sends email through [EmailJS](https://www.emailjs.com/). Copy `.env.example` to `.env` and fill in your own EmailJS Service ID, Template ID and Public Key (access token):

```bash
cp .env.example .env
```

## Project Structure

```
src/
├── App.tsx
├── main.tsx
├── globals.css
├── components/
│   ├── atoms/        # small shared UI pieces (e.g. section Header)
│   ├── canvas/        # 3D scenes (Computers, Earth, Ball, Stars)
│   ├── layout/         # Navbar, Loader
│   └── sections/       # Hero, About, Experience, Feedbacks, Works, Contact
├── constants/         # site content/config and data arrays
├── hoc/                # SectionWrapper higher-order component
├── types/              # shared TypeScript types
└── utils/              # animation helpers
public/
├── desktop_pc/         # 3D computer model
└── planet/             # 3D planet model
```

## Credits

- "Stylized Planet" 3D model by [cmzw](https://sketchfab.com/cmzw) on Sketchfab, licensed under [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/). See `public/planet/license.txt`.
## Recent update

- Added **Sadafule Agro** as a live project in the Projects section.
- Project cards now use a **LIVE ↗** button instead of a GitHub logo.
- Replaced technology image/3D icons with lightweight animated text badges.
- Redesigned the hero banner container to preserve the banner aspect ratio and improve mobile responsiveness.
- Added responsive overflow protections and mobile-friendly spacing.

> The portfolio package includes the Sadafule Agro live-project preview image. The full Sadafule Agro source code is not embedded because only the portfolio ZIP was supplied for this update.

