/**
 * projects.js — single source of truth for all project data.
 *
 * Field reference: draft format 
 *
 * CARD (default state)
 *   index       "01"          large display number on card
 *   title                     card heading
 *   type                      monospace label, e.g. "Meal Planning Application"
 *   status      "Capstone"    badge text: Capstone | Featured | Archived
 *   tagline     ~6-8 words    punchy line shown below title
 *   role                      brief role title
 *   stack       string[]      tech tags
 *   theme       hex string    per-project accent color (placeholder — update later)
 *   variant     "spectag" | "plate"  (optional override; section cardStyle wins on /projects)
 *   section     "web" | "ux"   which archive block on /projects
 *   lifecycle   "completed" | "in-progress" | "planned"  (optional; overrides status badge)
 *
 * CARD (expanded preview)
 *   summary     1-2 sentences  shown in the expanded card section
 *   problem     1 sentence     what problem the project solves
 *   keyFeature  1 sentence     main feature or capability
 *   image       string | null  path or URL to preview image (null = placeholder)
 *
 * LINKS
 *   github      URL string
 *   demo        URL string
 *
 * DETAIL PAGE (ProjectDetail.jsx — build later)
 *   fullDescription  paragraph(s)
 *   features         { title, text }[]
 *   outcome          string
 *   screenshots      string[]
 */

export const projects = [
  {
    // ── Identity ──
    id: "nourishly",
    index: "01",
    title: "Nourishly",
    type: "Meal Planning Application",
    status: "Capstone",
    variant: "spectag",
    section: "web",
    theme: "#5D866C",

    // ── Card: default ──
    tagline:
      "Full-stack meal planning web app built with a 4-person team — from Figma design system to production-ready React frontend with CI/CD.",
    role: "Product/UX Architect · Lead Frontend Engineer",
    stack: ["React 19", "Vite", "Tailwind CSS", "Express.js", "Figma", "Spoonacular API"],

    // ── Card: expanded ──
    summary:
      "Capstone project built across three terms with a 4-person Agile team. Owned the full UI/UX design system in Figma and led frontend engineering — including Spoonacular API integration, multi-page React architecture, shared localStorage state, and team-wide component patterns.",
    problem:
      "Meal planning is scattered across too many tools. Nourishly centralizes recipe discovery, weekly planning, and grocery management in one cohesive, accessible experience.",
    keyFeature:
      "End-to-end ownership from Figma design system to React implementation — Recipes page with live search and filtering, Grocery List with progress tracking, Recipe Detail with ingredient management, and shared state across pages via localStorage.",
    image: "/projects/nourishly/landingPage.png",

    // ── Links ──
    github: "https://github.com/cs041-mealplanner/CS041-meal-planning-app",
    demo: "#",

    // ── Detail page ───
    fullDescription:
      "Nourishly — Capstone Project\n\nRole: Product/UX Architect, Lead Frontend Engineer & Integration Developer · Stack: React 19, Vite, Tailwind CSS, Express.js, Figma, Spoonacular API\n\nNourishly is a full-stack meal planning web application built over three capstone terms with a 4-person Agile team. The goal: give everyday users one place to discover recipes, plan their week, track ingredients, and manage grocery lists — with a frontend that feels polished and a codebase the whole team could build on. I held two tracks simultaneously: owning the full UI/UX design in Figma, and leading frontend engineering and API integration.",
    features: [
      {
        title: "Design Track",
        text: "Built the complete design system in Figma before any code was written — reusable components, style guides, design tokens, spacing, typography, and color palettes. High-fidelity prototypes served as the source of truth across the team. Designed all major user flows: recipe discovery, weekly meal planning, ingredient tracking, grocery list management, and authentication screens. Mobile-first, WCAG-accessible, responsive across desktop, tablet, and mobile.",
      },
      {
        title: "Recipes Page & Spoonacular Integration",
        text: "Designed and implemented the Recipes page end-to-end. Integrated the Spoonacular API for live recipe search and data fetching — handling search queries, 5 filter tags for dietary preferences and meal type, a responsive card grid layout, loading and error states, and pagination. This was the core discovery surface of the app — getting search, filtering, and pagination right here set the pattern for how data flowed through the rest of the frontend.",
      },
      {
        title: "Grocery List, Ingredient Page & Recipe Detail",
        text: "Built three interconnected features that share state across pages via localStorage: Recipe Detail with ingredients, instructions, and save/add actions; Ingredient Page for tracking tied to saved recipes; Grocery List with progress indicators reflecting ingredients added from Recipe Detail. Shared localStorage state meant users could add ingredients from a recipe and immediately see them in their grocery list — no backend round-trip required.",
      },
      {
        title: "Dashboard & Core Components",
        text: "Engineered Dashboard components including a weekly Calendar view, GroceryList panel with progress tracking, and reusable MealCard components used across multiple pages. These became the foundational UI building blocks adopted team-wide.",
      },
      {
        title: "Frontend Architecture",
        text: "Architected client-side routing and page structure using React 19 and Vite — establishing component patterns and folder structure the entire team built on. State managed with React Hooks throughout — controlled components, single source of truth, clean prop interfaces. Tailwind CSS utility-first styling with custom color tokens, responsive breakpoints, and design token usage matching the Figma system.",
      },
      {
        title: "Team & Process",
        text: "4-person Agile team across three terms — sprint planning, standups, retrospectives. Feature-branch workflow with conventional commits and squash-merge strategy. PRs required peer review, with larger changes needing additional approval. GitHub Actions CI/CD automated linting and testing on every PR.",
      },
    ],
    outcome:
      "A production-ready meal planning application with real API integration, interconnected features, and a design system that scaled across a 4-person team. My dual role across design and engineering meant I could bridge the gap between how things looked and how they worked — and set standards on both sides of that line.",
    screenshots: [
      "/projects/nourishly/recipesPage.png",
      "/projects/nourishly/IngredientPage.png",
      "/projects/nourishly/dashboard-withdetail.png",
      "/projects/nourishly/mealplaner-withdetail.png",
      "/projects/nourishly/grocery-withdetail.png",
    ],
  },

  {
    // ── Identity ──
    id: "reelphrases",
    index: "02",
    title: "ReelPhrases",
    type: "Movie Quote Search Engine",
    status: "Featured",
    variant: "spectag",
    section: "web",
    theme: "#FFBF00",

    // ── Card: default ──
    tagline:
      "Search 1,053 movies by quotes you half-remember — powered by full-text search across 818,000 lines of screenplay dialogue.",
    role: "Full-Stack Developer",
    stack: ["React", "FastAPI", "Python", "SQLite", "FTS5"],

    // ── Card: expanded ──
    summary:
      "Full-stack web app that lets users find movies from remembered dialogue. Built a Python preprocessing pipeline, SQLite FTS5 search index with BM25 ranking, FastAPI backend, and React frontend with multi-page routing.",
    problem:
      "You remember a line from a movie but can't place it. No tool handles fuzzy, partial quote matching at scale across a real screenplay dataset. Google doesn't cut it.",
    keyFeature:
      "Two-phase search strategy — phrase matching first, individual-word fallback second — across 818,000 indexed dialogue lines with Porter stemming and BM25 relevance scoring.",
    image: "/projects/reelphrases/home.png",

    // ── Links ──
    github: "https://github.com/mlpm21/REELPHRASES",
    demo: "#",

    // ── Detail page ──
    fullDescription:
      "ReelPhrases — Full-Stack Project\n\nEver remember a line from a movie but couldn't name it? ReelPhrases solves that. It's a full-stack search application that lets users find movies by typing in dialogue they half-remember — searching across 818,000 lines of real screenplay data from 1,053 films.\n\nPartial quote recall is a genuinely hard search problem. Raw text matching fails on typos, contractions, and word variations. The data was massive — 246 MB of raw screenplay text — and needed to be cleaned, parsed, indexed, and made searchable in under a second.",
    features: [
      {
        title: "Data Pipeline",
        text: "Built a Python preprocessing pipeline that parsed raw screenplay text using regex patterns — detecting character names via ALL-CAPS formatting and scene headings via INT/EXT markers — to extract dialogue lines with proper speaker attribution. A normalization function handled contractions (It's → Its, don't → dont), collapsed punctuation to spaces, and lowercased everything for consistent fuzzy matching. Output: a 115 MB SQLite database with an FTS5 full-text search index using Porter stemming (remembered → remember, dying → die).",
      },
      {
        title: "Search Logic",
        text: "Two-phase strategy: phrase match first — quoted FTS5 query for exact word order; word-by-word fallback when phrase results are insufficient — individual terms matched and merged, deduplicating on dialogue ID. BM25 relevance scoring ranked results by match quality. The result: a search that handles the way people actually remember dialogue — imprecisely.",
      },
      {
        title: "Backend",
        text: "FastAPI server exposing /api/search accepting a query string and result limit (1–100), returning JSON with movie ID, movie name, matched dialogue lines, and BM25 scores. Clean, typed, fast.",
      },
      {
        title: "Frontend",
        text: "React + Vite with React Router across three pages: Home (search interface), Results (grouped movie matches with up to 3 dialogue lines per film), and MovieDetails (full movie info). Vite proxied /api/* to FastAPI locally, eliminating CORS config entirely. FavoriteButton component used local storage for persistence across sessions. Styled with Tailwind CSS, fully responsive.",
      },
    ],
    outcome:
      "A working search engine across nearly a million lines of dialogue, returning ranked results in real time. The pipeline, search logic, and two-phase strategy were all built from scratch — no off-the-shelf search library.",
    screenshots: [
      "/projects/reelphrases/quote-search.png",
      "/projects/reelphrases/movie-result.png",
      "/projects/reelphrases/result-notfound.png",
      "/projects/reelphrases/recognition.png",
    ],
  },

  {
    // ── Identity ───
    id: "filmroll-pro",
    index: "03",
    title: "MLP FilmRoll Pro",
    type: "E-commerce Interface",
    status: "Archived",
    variant: "spectag",
    section: "web",
    theme: "#6B5B95",

    // ── Card: default ──
    tagline:
      "E-commerce platform for film photography enthusiasts — featuring 15+ products, dynamic cart, promotional pricing engine, and multi-select filtering.",
    role: "Frontend Developer",
    stack: ["JavaScript", "HTML", "CSS", "Accessibility"],

    // ── Card: expanded ──
    summary:
      "Frontend e-commerce web app for film roll sales built with vanilla JavaScript, HTML, and CSS. Features a dynamic shopping cart, promotional discount engine, brand/ISO filter system using Set data structures, and full accessibility support.",
    problem:
      "Build a fully functional, accessible e-commerce experience from scratch — no frameworks, no libraries — with real filtering, real cart logic, and real pricing mechanics.",
    keyFeature:
      "Toggleable multi-select filter system using JavaScript Sets, promotional pricing engine with percentage-based discounts and visual sale badges, and ARIA-compliant accessibility throughout.",
    image: "/projects/filmroll-pro/hero.png",

    // ── Links ──
    github: "https://github.com/mlpm21/MLP-FilmRoll-Pro",
    demo: "#",

    // ── Detail page ──
    fullDescription:
      "MLP FilmRoll Pro — Frontend Project\n\nMLP FilmRoll Pro is an e-commerce platform built for film photography — a niche with a passionate community and specific product needs. The store carries 15+ products from Kodak, Fujifilm, Ilford, Cinestill, and Lomography, with real filtering, real cart logic, and a promotional pricing system.\n\nMost e-commerce demos are surface-level. The goal here was to build something that actually functions like a real store: products go on sale, carts update in real time, filters stack, and users who rely on assistive technology can still use it.",
    features: [
      {
        title: "Pricing Engine",
        text: "Implemented a promotional pricing system applying percentage-based discounts (5%–15%) to eligible products, with visual sale badges and strikethrough pricing displayed on discounted items. Price logic runs dynamically — not hardcoded per product.",
      },
      {
        title: "Cart System",
        text: "Dynamic shopping cart with add/remove functionality, quantity adjustment, and real-time total calculation. Cart item count updates in the header on every change. All state managed in JavaScript without any external state library.",
      },
      {
        title: "Filter System",
        text: "Built a toggleable filter chip system for brand and ISO using JavaScript Set data structures for multi-select support. Filters stack — selecting Kodak + ISO 400 shows only products matching both. Active filter state is visually indicated on each chip.",
      },
      {
        title: "Accessibility",
        text: "Full WCAG compliance: ARIA labels on interactive elements, keyboard navigation support, screen reader compatibility for dialog panels and filter controls. Not an afterthought — accessibility was built in from the start.",
      },
    ],
    outcome:
      "A complete, functional frontend e-commerce experience built without frameworks. Demonstrates that clean architecture, real product logic, and accessibility don't require a library — just solid fundamentals.",
    screenshots: [
      "/projects/filmroll-pro/multi-filter.png",
      "/projects/filmroll-pro/filtered-results.png",
      "/projects/filmroll-pro/empty-state.png",
    ],
  },

  // ── Portfolio System — commented out for now ──
  // {
  //   id: "portfolio",
  //   index: "04",
  //   title: "Portfolio System",
  //   type: "Personal Website",
  //   status: "Active",
  //   variant: "spectag",
  //   section: "web",
  //   lifecycle: "in-progress",
  //   theme: "#92DCE2",
  //   tagline:
  //     "A recruiter-facing portfolio built as one cohesive product — industrial UI, sectioned project archive, and preview modals powered by a single data layer.",
  //   role: "Designer / Frontend Developer",
  //   stack: ["React", "Vite", "Tailwind", "Framer Motion", "React Router"],
  //   summary:
  //     "Full-stack frontend portfolio treating the site itself as a designed system. React + Vite app with a unified projects.js data layer, dual card styles (SpecTag for web builds, Plate for UX case studies), floating 30/70 preview modals, and full case-study routes — all wrapped in a consistent industrial-luxury visual language.",
  //   problem:
  //     "Most developer portfolios are generic templates that flatten project depth into identical tiles. I needed one site that reads like a product — structured archive, real case-study depth, and interface craft that reflects how I actually build.",
  //   keyFeature:
  //     "Single source of truth in projects.js drives cards, preview modals, and detail pages; section-aware card routing (SpecTag vs Plate) with per-project theme accents, lifecycle badges, and a reusable preview modal before the full write-up route.",
  //   image: null,
  //   github: "https://github.com/mlpm21/Portfolio-Project",
  //   demo: "#",
  //   fullDescription: "...",
  //   features: [],
  //   outcome: "...",
  //   screenshots: [],
  // },

  {
    // ── Identity ──
    id: "readysetadult",
    index: "04",
    title: "ReadySetAdult",
    type: "UX Case Study",
    status: "Completed",
    variant: "plate",
    section: "ux",
    lifecycle: "completed",
    theme: "#4285F4",

    // ── Card: default ──
    tagline:
      "Mobile app designed to help young adults (18–26) navigate independent living — from budgets to housing to community resources.",
    role: "UX Designer / Researcher",
    stack: ["Figma", "User Research", "Prototyping", "Inclusive Design"],

    // ── Card: expanded ──
    summary:
      "End-to-end UX research and design for a mobile application targeting young adults transitioning to independent living. Conducted population research, built personas, designed and prototyped three core feature sets, and iterated based on structured usability evaluations.",
    problem:
      "Young adults (18–26) entering independent life lack accessible, centralized tools for managing finances, finding housing, and building life skills — especially those from underserved backgrounds with limited prior exposure.",
    keyFeature:
      "Inclusive, research-driven design across three feature areas: a budget management wizard, a customizable housing checklist, and a gamified community skill-learning system — all grounded in Material Design 3 and WCAG accessibility standards.",
    image: "/projects/readysetadult/finance-center.jpg",

    // ── Links ───
    github: "#",
    demo: "#",

    // ── Detail page ──
    fullDescription:
      "ReadySetAdult — UX Case Study\n\nRole: UX Designer / Researcher · Tools: Figma, Usability Testing, Cognitive Walkthrough, Design Gallery Critique\n\nTransitioning to independent living is one of the most overwhelming experiences young adults face — and most apps don't actually help. ReadySetAdult was designed to change that: a mobile application built specifically for adults 18–26, with a focus on the underserved and under-prepared.\n\n40.3 million young adults in the US are navigating independent living with gaps in financial literacy, housing knowledge, and everyday life skills. Existing tools are either too generic, too overwhelming, or not built with low-knowledge users in mind. The core challenge: design something that works for both the confident user and the one who doesn't know where to start.\n\nTwo personas anchored the research across five facets: Financial Literacy, Mental Health Management, Independent Living Confidence, Housing Knowledge, and Safety & Security Preparedness. Al — 23, underserved background, limited financial exposure, high anxiety around digital security and decision-making. Han — 45, mainstream user, more experienced, needs efficiency over hand-holding. Design decisions were stress-tested against both personas throughout every iteration.\n\nResearch → Concept → Prototype → Evaluate → Iterate — repeated across three feature areas. Methods used: population analysis, user interviews, cognitive walkthroughs, heuristic evaluation, comparative analysis, Design Gallery critiques, and xMag evaluation.",
    features: [
      {
        title: "Budget Management",
        text: "Al found the original financial pages overwhelming and confusing. The redesign introduced a step-by-step budget creation wizard with progress indicators, a skip option for users uncomfortable with bank linking, and educational tooltips for terms like renters insurance and emergency funds. A visual spending dashboard with pie charts and category breakdowns gave users a clear picture of budgeted vs. actual spending — without the cognitive overload of raw numbers.",
      },
      {
        title: "Housing Search & Checklist",
        text: "First-time renters often don't know what they don't know. The housing feature used a customizable checklist system with pre-populated templates (sourced from Kiplinger and Azibo research) covering things users commonly miss — like conducting a move-in inspection or verifying lock functionality. A tag-based filtering system (Find Rental, Pack Item, Application) provided recognition-based guidance rather than forcing recall. Two entry points — category-first or task-first — accommodated different mental models.",
      },
      {
        title: "Community Resources & Skill Learning",
        text: "Isolation and lack of community knowledge were recurring pain points in research. The solution: a gamified Daily Challenge system presenting 3 learnable skills per day with visual progress tracking, a Most Recent Skills review section, and category-based filtering across six life domains (Safety, Home & Daily Living, Cooking, Health, Transportation, Community). Community connection cards linked users directly to local support groups via Facebook, Instagram, phone, and address — addressing the social isolation finding head-on.",
      },
      {
        title: "Key Iterations",
        text: "Hamburger menu → Material Design 3 bottom navigation bar after feedback that navigation wasn't clear. Home screen redesigned with welcome modal and feature cards after multiple critiques citing missing clear home page. Budget categories simplified after xMag evaluation showed cognitive overload for Al persona. List vs. card navigation pattern informed by Nielsen Norman Group research.",
      },
    ],
    outcome:
      "A high-fidelity Figma prototype covering all three core use cases, built on Material Design 3 with bottom navigation, high-contrast card layouts, and WCAG-compliant design decisions throughout. Iterated across multiple design gallery cycles with structured evaluation methodology.",
    screenshots: ["/projects/readysetadult/knowledge-center.jpg"],
  },
];

/** All live portfolio entries */
export const portfolioProjects = projects;

/** Section config for the final /projects page layout. */
export const PROJECT_SECTIONS = [
  {
    id: "web",
    index: "01",
    title: "Web Applications",
    subtitle: "Full-stack apps, SPAs, e-commerce",
    descriptor: "Build layer",
    accent: "#92DCE2",
    layout: "grid",
    cardStyle: "spectag",
  },
  {
    id: "ux",
    index: "02",
    title: "UX Case Studies",
    subtitle: "Research, design, user testing",
    descriptor: "Research layer",
    accent: "#A78BFA",
    layout: "grid",
    cardStyle: "plate",
  },
];

export function projectsBySection(sectionId) {
  return portfolioProjects.filter((p) => p.section === sectionId);
}

export function getProjectById(id) {
  return portfolioProjects.find((p) => p.id === id);
}
