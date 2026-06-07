# Mint Lapatrada · Portfolio

Personal portfolio site for OSU CS406 — industrial dossier UI, project archive, and case-study detail pages.

**Stack:** React 19 · Vite · Tailwind CSS 4 · Framer Motion · React Router

## Live site

Deploy target: [Vercel](https://vercel.com) (connect this repo after push).

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Build

```bash
npm run build
npm run preview   # optional — test production build locally
```

## Project structure

| Path | Purpose |
|------|---------|
| `src/pages/` | Home, About, Projects, Project detail, Contact |
| `src/data/projects.js` | Single source of truth — 4 live projects |
| `src/components/project-cards/` | Production card styles (SpecTag, Plate) |
| `src/me_draft_ver/` | Archived drafts, card labs, placeholder data |
| `public/projects/` | Project screenshots |

## Deploy (Vercel)

1. Push this repo to GitHub
2. [vercel.com](https://vercel.com) → **Add New Project** → import **Portfolio-Project**
3. Framework: **Vite** · Build: `npm run build` · Output: `dist`
4. Deploy — `vercel.json` handles client-side routing

---

# Design Direction

## Core Design Identity

**Primary Direction**: Futuristic Industrial Luxury UI

**Alternative Labels**:
- Future Minimal Luxury
- Tech Editorial
- Cyber-Lux Minimal
- Industrial Futurism

**Concept**: The portfolio should feel like a premium digital dossier — a futuristic identity system, high-end technology archive, cyber-industrial interface (no neo), luxury product, classified project database, digital identity archive.

---

## Visual Tone

### Should Feel
- Minimal
- Expensive
- Controlled
- Technical
- Editorial
- Structured
- Futuristic but believable

### Should NOT Feel
- Gamer cyberpunk
- RGB neon overload
- Flashy sci-fi
- Generic SaaS glassmorphism
- Generic developer template
- Over-animated portfolio

---

## Motion & Animation

### Animation Style
Motion should feel: elegant, cinematic, restrained, smooth, expensive.

### Motion
- Fade-up reveals
- Staggered entrance animations
- Soft hover lift
- Blur transitions
- Subtle parallax

---

## Small Interface Elements

Use sparingly for texture and detail:
- Metadata labels
- Fake serial numbers
- Interface dividers
- Status indicators
- Corner brackets
- Barcode-inspired lines
- Scan frames
- Technical indicators

---

## Project Card System

### Component Approach
**1 base card component. 4 visual styles max.**

Each style shares the same content structure but changes shape, cutout, or border treatment slightly.

**Think of it as**:
- **Component** = reusable template
- **Variant** = style version of that template
- **State** = hover, active, expanded

---

### Card States

**State 0: Default**
- Base card appearance

**State 1: Hover**
- Subtle lift, glow, border, or color shift

**State 2: Expanded Preview**
- Short summary
- Key feature/function
- What problem it solves
- One image or visual
- "See Project" button

---

## Project Page Layout

**Layout Type**: Bento grid

**Key Principles**:
- Grid of cards with different sizes and emphasis
- One unified visual system
- Curated, scannable, modular — not a random list
- Cards can differ in width, height, corner style, theme color, detail level
- Typography, spacing rhythm, and overall mood stay consistent

### Best Layout Direction
- 1 featured large card
- A couple medium cards
- Maybe one smaller supporting card

---

## Theme Color System

**Each project can have its own theme color.**

- Theme flows through card styling as an **accent**, not changing the whole system
- Project data defines the theme
- Card component reads theme and applies to borders, badges, hover accents, preview highlights

---

## Component Architecture

### File Structure
- `project.jsx` — page layout and placement
- Card component(s) — actual project tiles
- Data file — project content, theme color, card type
- Shared styling rules/tokens — spacing, type, radius, motion

### Philosophy
Treat cards as a **family of reusable variants** that share foundations but can evolve into different shapes/layouts when needed.

**One visual system, multiple card treatments when useful.*

---

## Design Rules

1. Keep the page **same family, different details**
2. Use **theme colors per project**
3. Keep hover state **subtle**
4. Make expanded state **short, useful, and clean**
5. Don't force rigid templates — allow flexibility for future growth

---

## Working Summary

**Direction**:
- Project page = bento layout
- Cards = same family, different design/detail
- States = default, hover, preview
- Theme = project-specific accent color
- Architecture = flexible enough for future growth