<div align="center">

# AutoVista Motors, Multi-Page Car Dealership Showcase

**A 24-vehicle, 7-page car dealership website built purely to demonstrate front-end visual design, layout, and interaction skill.**

[![Vibe Coded](https://img.shields.io/badge/Vibe%20Coded-Google%20AI%20Studio%20%2B%20Gemini-4285F4?style=for-the-badge)](https://ai.studio)

**[Important Notice](#important-notice)** · **[Features](#features)** · **[Tech Stack](#tech-stack)** · **[Getting Started](#getting-started)** · **[Project Structure](#project-structure)** · **[How It Works](#how-it-works)** · **[Known Issues](#known-issues)**

</div>

---

## Important Notice

**AutoVista Motors is a fictional company. This is a student portfolio and learning project, not a real dealership, and no real sales, bookings, or inquiries happen here.**

- Every vehicle shown is a real, correctly named model from a real manufacturer, but AutoVista Motors itself has no affiliation with, endorsement from, or connection to Toyota, Honda, Mercedes-Benz, BMW, Mitsubishi, Hyundai, Tesla, BYD, MINI, Volkswagen, or Porsche.
- The Test Drive booking form and any contact action on this site are entirely cosmetic. Submitting them does not send an email, hit a server, or notify anyone, they only show an in-page confirmation for demonstration purposes.
- The showroom address, staff names, and company history shown on the site are all invented for the purposes of this project.
- Vehicle photographs are real, sourced from Wikimedia Commons under Creative Commons licensing, with the search term and license documented alongside each entry in the code.

The entire point of this project is the front end, the color palette, the layout, the interaction design, not the business idea behind it.

---

## Overview

AutoVista Motors was built to prove a specific, narrow skill, that a front-end developer can take a content-heavy, multi-page site and make deliberate, consistent choices about color, layout, and information density across all of it, not just polish a single landing page. The result is a 7-page dealership site carrying a 24-vehicle lineup across 6 categories, with real search, sorting, filtering, and comparison tools rather than a static catalog.

The project was **vibe-coded in [Google AI Studio](https://ai.studio) using Gemini**, starting from a written Product Requirements Document that defined the page structure, the fixed color palette, the exact list of real vehicles to feature, and the rule that vehicle photography must be found through genuine search rather than generated. It is part of a broader personal portfolio series demonstrating applied "vibe coding" ability outside of my primary technical focus areas (Data Science, NLP, and GenAI/LLM agent engineering), sitting alongside sibling projects such as a link-in-bio platform and a set of interactive celebration cards.

---

## Features

### Seven Pages
Home, Vehicles, About Us, Visit Us, Test Drive, Offers, and FAQ, sharing one consistent header and footer, with the header's full navigation bar collapsing into a hamburger menu below 1024 pixels of viewport width.

### A 24-Vehicle Lineup Across 6 Categories
Sedans, SUVs, MPVs, Electric vehicles, Hatchbacks, and Coupes, all real, correctly named models. Every vehicle can be opened in a detail popup showing an image gallery, a full specification table, available trims with individual pricing, and a key-features list, without leaving the Vehicles page underneath it.

### Real Search, Sort, Filter, and Comparison
The Vehicles page is not a static grid, it supports live text search across model name, engine, transmission, and drivetrain, sorting by price or name, a budget range filter, and a side-by-side comparison tool for up to two vehicles at once with a full specification breakdown.

### Financing Calculator
The Offers page includes an interactive calculator with a down-payment slider and loan-tenure selector, producing an illustrative monthly installment estimate for a selected vehicle, clearly framed as illustrative rather than a real loan offer.

### Layered Parallax and Motion
The homepage hero uses a multi-layer parallax effect (background photo, floating content layer, and a glass highlight bar), extended into a scroll-triggered reveal on the featured vehicles strip and a rotating decorative element on the promotional banner section.

### Real Photography, Documented Sourcing
Every vehicle photo is a real photograph sourced from Wikimedia Commons, not AI-generated, since a generated image of a specific, real, named car model would likely be inaccurate. Each vehicle's data entry in the code documents its image source and license.

### Deliberate Color Palette
A dark charcoal base with a warm metallic gold accent, applied consistently across all seven pages rather than left to page-by-page defaults, described further in How It Works below.

### A Test Drive Form That Goes Nowhere, On Purpose
The Test Drive page collects a name, contact details, preferred vehicle, date, and time slot, and on submission shows an in-page confirmation with a generated reference code. No data leaves the browser, this is a front-end demonstration, not a working booking system.

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Language** | TypeScript |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Icons** | [`lucide-react`](https://lucide.dev/) |
| **Photography** | Real photographs from [Wikimedia Commons](https://commons.wikimedia.org/), Creative Commons licensed |
| **Development Environment** | [Google AI Studio](https://ai.studio) (Build mode, powered by Gemini) |

**AutoVista Motors requires no backend and no database.** Every vehicle, price, and page of content is static data defined directly in the front-end code, and every interactive feature (search, sort, filter, comparison, the financing calculator, the test drive form) runs entirely client-side.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (or an equivalent package manager)

### Installation and Local Development

```bash
# 1. Clone the repository
git clone https://github.com/viochris/autovista-car-dealership.git
cd autovista-car-dealership

# 2. Install dependencies
npm install

# 3. Run the app locally
npm run dev
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server with hot module reloading |
| `npm run build` | Builds an optimized static production bundle |
| `npm run preview` | Serves the production build locally for a final check |

### Deployment
Since the app has no backend or database dependency, it can be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, Cloudflare Pages, and so on) by running `npm run build` and serving the resulting output folder.

---

## Project Structure

```
autovista-car-dealership/
├── src/
│   ├── pages/
│   │   ├── HomePage.tsx           # Hero with layered parallax, featured vehicles, testimonials
│   │   ├── VehiclesPage.tsx       # Search, sort, budget filter, and the full 24-vehicle grid
│   │   ├── AboutPage.tsx          # Company story, mission, leadership, milestones
│   │   ├── VisitPage.tsx          # Showroom location, hours, and an embedded map
│   │   ├── TestDrivePage.tsx      # Booking form with an in-page-only confirmation
│   │   ├── OffersPage.tsx         # Promotional cards and the financing calculator
│   │   └── FaqPage.tsx            # Searchable frequently asked questions
│   ├── components/
│   │   ├── Header.tsx             # Navigation, collapsing to a hamburger menu below 1024px
│   │   ├── Footer.tsx             # Site-wide footer, contact details, and the disclaimer
│   │   ├── VehicleModal.tsx       # Per-vehicle detail popup, gallery, specs, trims, features
│   │   ├── VehicleComparisonModal.tsx # Side-by-side comparison of up to two vehicles
│   │   └── TestimonialCarousel.tsx
│   ├── data/
│   │   └── vehicles.ts            # All 24 vehicles, specs, trims, pricing, and photo sourcing notes
│   ├── App.tsx                    # Page routing and shared layout
│   └── main.tsx                   # React app entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── metadata.json
```

---

## How It Works

### Page Routing
`App.tsx` renders the shared `Header` and `Footer` around whichever of the seven pages is active, switched through simple client-side state rather than a routing library, since the site has a small, fixed set of pages.

### The Color Palette
The palette is deliberately limited to a small set of roles, a deep charcoal background, a slightly lighter slate surface for cards, a warm metallic gold used sparingly for calls to action and highlights, and off-white text, applied consistently across all seven pages rather than each page introducing its own colors. The intent is to demonstrate restraint as much as style.

### Vehicle Data and Photo Sourcing
`src/data/vehicles.ts` holds all 24 vehicles as structured data, name, category, specs, trims and pricing, key features, and a gallery of image URLs. Each vehicle's real photographs were sourced from Wikimedia Commons, with the source and license recorded alongside the data rather than generated by an image model, since an AI-generated depiction of a specific, real car risks being visually inaccurate.

### Search, Sort, and Comparison
The Vehicles page filters its full list against the search query (checked against name, engine, transmission, drivetrain, and key features), the active category, and the selected price range, then sorts the result, all computed client-side with no network request involved. The comparison tool holds up to two selected vehicles in state and renders their full specifications side by side in a single table.

### The Financing Calculator
The Offers page's calculator takes a selected vehicle's base price, a down-payment percentage from a slider, and a loan tenure, and computes an illustrative monthly installment figure using a simple, transparent formula, explicitly labeled as an estimate rather than a real financing offer.

---

## Known Issues

In the interest of accurate documentation, one piece of leftover copy was not updated when the vehicle lineup grew from its original planned 6 models to the current 24, the footer's disclaimer section still describes the lineup as a "curated six-vehicle portfolio" and lists only 6 example models by name. This is stale text from an earlier draft of the project rather than an accurate description of what the site now contains, and would be a reasonable thing to update if the project is revisited.

---

## License

This project is available for personal reference and learning purposes.

---

<div align="center">

**Made with 🚗 and vibe coding**

[Report an Issue](https://github.com/viochris/autovista-car-dealership/issues)

</div>
