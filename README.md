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
- The showroom address, staff names, leadership team, testimonials, and company history shown on the site are all invented for the purposes of this project.
- Vehicle photographs are real, sourced from Wikimedia Commons under Creative Commons licensing, with the search term and license documented alongside each entry in the code.

The entire point of this project is the front end, the color palette, the layout, and the interaction design, not the business idea behind it.

---

## Overview

AutoVista Motors was built to prove a specific, narrow skill, that a front-end developer can take a content-heavy, multi-page site and make deliberate, consistent choices about color, layout, motion, and information density across all of it, not just polish a single landing page. The result is a 7-page dealership site carrying a 24-vehicle lineup across 6 categories, with real search, sorting, filtering, and comparison tools, a working financing calculator, and a multi-layer parallax homepage, rather than a static catalog with a coat of paint.

The project was **vibe-coded in [Google AI Studio](https://ai.studio) using Gemini**, starting from a written Product Requirements Document that defined the page structure, the fixed color palette, the exact list of real vehicles to feature, and the rule that vehicle photography must be found through genuine search rather than generated. It is part of a broader personal portfolio series demonstrating applied "vibe coding" ability outside of my primary technical focus areas (Data Science, NLP, and GenAI/LLM agent engineering), sitting alongside sibling projects such as a link-in-bio platform and a set of interactive celebration cards.

---

## Features

### Seven Fully Built Pages
Home, Vehicles, About Us, Visit Us, Test Drive, Offers, and FAQ, all sharing one consistent header and footer. The header's full horizontal navigation bar collapses into a hamburger-triggered dropdown menu below 1024 pixels of viewport width, with the logo and a persistent call-to-action button remaining visible in either state, so the layout stays usable and intentional from a small phone up to a wide desktop monitor rather than simply shrinking.

### A 24-Vehicle Lineup Across 6 Categories
The Vehicles page carries Sedans, SUVs, MPVs, Electric vehicles, Hatchbacks, and Coupes, 24 real, correctly named models in total, spanning everyday family cars up to performance coupes. Every vehicle can be opened in a detail popup that shows a full image gallery, a complete specification table (engine, transmission, drivetrain, and more), the available trim levels with their own individual pricing, and a list of key features, all without navigating away from the Vehicles page sitting underneath it.

### Real Search, Sort, Filter, and Side-by-Side Comparison
The Vehicles page is not a static grid. It supports live text search across model name, engine, transmission, and drivetrain, sorting by price or name, a budget range filter to narrow the list by price, and a dedicated comparison tool that lets a visitor pick up to two vehicles and see their full specifications laid out side by side in a single table, making it easy to weigh two options against each other directly rather than flipping between two separate popups.

### An Interactive Financing Calculator
The Offers page includes a working calculator, not just a static illustration. A visitor selects a vehicle, adjusts a down-payment slider and a loan-tenure selector, and sees an estimated monthly installment update live, alongside a recap of that vehicle's base specifications. The result is clearly labeled as an illustrative estimate, not a real loan offer, consistent with the rest of the site's fictional framing.

### Multi-Layer Parallax and Considered Motion Throughout
The homepage hero is built from three coordinated layers, a background photograph that moves more slowly than the page as the visitor scrolls, a floating foreground content layer carrying the headline and call-to-action with a subtle depth and fade effect, and a glass-styled highlights bar that adds a further sense of elevation. That same care extends further down the page, the Featured Vehicles strip animates into view with a scroll-triggered elevation effect, the "Why Choose AutoVista" section staggers its four value propositions in as the visitor scrolls past them, and the promotional banner section rotates decorative kinetic rings in the background as a parallax accent. Ambient, softly drifting glow orbs sit behind the whole homepage, shifting gently with scroll to add background depth without ever distracting from the content in front of them.

### An Auto-Advancing, Interruptible Testimonial Carousel
The homepage's testimonials section cycles automatically through a set of short customer quotes, and pauses automatically whenever the visitor's cursor is hovering over it, so a visitor who wants to actually read a testimonial is never fighting the carousel to do so.

### A Full "About Us" Story, Not a Placeholder Page
The About Us page includes a founding narrative section with a decorative watermark emblem in the background, a four-item mission and values section, a leadership section presenting a small executive team with real, high-resolution (but entirely fictional) portrait photographs, and a chronological company milestones timeline, giving the fictional company a sense of real history rather than a single paragraph of filler text.

### A Genuinely Searchable, Filterable FAQ
The FAQ page is not a flat list. It includes a live search box and a row of category filter chips (with live counts per category), and the accordion-style question list updates instantly as the visitor types or switches categories, with a clear empty state if a search returns nothing, plus a "still have questions" contact box at the bottom that scrolls smoothly back to the top of the page.

### Three Distinct Promotional Offers, Plus the Calculator
The Offers page presents three separate promotional cards, a short-term cash/discount advantage, a financing and installment highlight, and a trade-in offer, before leading into the interactive financing calculator described above, so the page reads as a genuine offers hub rather than a single generic banner.

### Real Photography, Documented Sourcing
Every vehicle photo is a real photograph sourced from Wikimedia Commons, not AI-generated, since a generated image of a specific, real, named car model would likely be inaccurate or mismatched to the wrong trim or generation. Each vehicle's data entry in the code documents its image source and license so the sourcing can be reviewed or re-verified later.

### A Deliberate, Consistent Color Palette
A dark charcoal base, a slightly lighter slate surface for cards, and a warm metallic gold accent used sparingly for calls to action, highlights, and active states, applied consistently across all seven pages rather than left to page-by-page defaults. The intent throughout is to demonstrate restraint as much as style, a small, repeated set of color roles rather than a different palette improvised on every page.

### A Test Drive Form That Goes Nowhere, On Purpose
The Test Drive page collects a name, contact details, preferred vehicle, preferred date, and a named time slot (including flavorful options like a "Golden Hour Sunset Drive" or "Evening City Lights" slot), and on submission shows an in-page confirmation screen with a generated reference code and a short, human-sounding message. No data leaves the browser at any point, this is a front-end interaction demonstration, not a working booking system connected to any real backend.

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

**AutoVista Motors requires no backend and no database.** Every vehicle, price, offer, and page of content is static data defined directly in the front-end code, and every interactive feature, search, sort, filter, comparison, the financing calculator, the FAQ search, and the test drive form, runs entirely client-side in the browser.

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
│   │   ├── HomePage.tsx           # Multi-layer parallax hero, featured vehicles, value propositions,
│   │   │                          # auto-advancing testimonial carousel, promotional banner
│   │   ├── VehiclesPage.tsx       # Live search, sort, budget filter, comparison tool, and the full
│   │   │                          # 24-vehicle grid
│   │   ├── AboutPage.tsx          # Founding story, mission and values, leadership team, milestone timeline
│   │   ├── VisitPage.tsx          # Showroom location, hours, and an embedded map
│   │   ├── TestDrivePage.tsx      # Booking form with a generated reference code and an in-page-only
│   │   │                          # confirmation
│   │   ├── OffersPage.tsx         # Three promotional cards plus the interactive financing calculator
│   │   └── FaqPage.tsx            # Searchable, category-filterable frequently asked questions
│   ├── components/
│   │   ├── Header.tsx             # Navigation, collapsing to a hamburger menu below 1024px
│   │   ├── Footer.tsx             # Site-wide footer, contact details, and the disclaimer
│   │   ├── VehicleModal.tsx       # Per-vehicle detail popup, gallery, specs, trims, features
│   │   ├── VehicleComparisonModal.tsx # Side-by-side comparison of up to two vehicles
│   │   └── TestimonialCarousel.tsx    # Auto-advancing, hover-to-pause testimonial carousel
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
`App.tsx` renders the shared `Header` and `Footer` around whichever of the seven pages is currently active, switched through simple client-side state rather than a full routing library, since the site has a small, fixed set of pages and no need for deep-linkable sub-routes.

### The Color Palette
The palette is deliberately limited to a small set of roles, a deep charcoal background, a slightly lighter slate surface for cards, a warm metallic gold used sparingly for calls to action and highlights, and off-white text for body copy. That same small set of roles repeats across all seven pages rather than each page introducing its own new colors, so the site reads as one considered system rather than several independently styled pages stitched together.

### The Homepage's Layered Motion
The hero section is built from three separate layers moving at different rates as the page scrolls, a background photograph moving slowest, a floating foreground layer carrying the headline, subheading, and call-to-action with its own subtle depth and fade behavior, and a glass-styled highlights bar sitting above both. Further down the page, the Featured Vehicles cards animate into view with a scroll-triggered elevation effect, the four "Why Choose AutoVista" value propositions stagger in one after another rather than appearing all at once, and the promotional banner section rotates a set of decorative rings in its background as a lightweight parallax accent. Soft, slow-moving glow orbs sit behind the entire homepage as ambient background depth.

### Vehicle Data and Photo Sourcing
`src/data/vehicles.ts` holds all 24 vehicles as structured data, name, category, full specifications, trims and their individual pricing, key features, and a gallery of image URLs. Each vehicle's real photographs were sourced from Wikimedia Commons, with the source and license recorded alongside the data rather than generated by an image model, since an AI-generated depiction of a specific, real car risks being visually inaccurate or mismatched to the wrong model year or trim.

### Search, Sort, Filter, and Comparison
The Vehicles page filters its full 24-vehicle list against the live search query (checked against name, engine, transmission, and drivetrain), the active category, and the selected price range, then sorts the resulting list, all computed client-side with no network request involved. The comparison tool holds up to two selected vehicles in component state and renders their full specifications side by side in a single table, so differences are easy to scan at a glance rather than needing to be remembered while switching between two separate popups.

### The Financing Calculator
The Offers page's calculator takes a selected vehicle's base price, a down-payment percentage chosen from a slider, and a loan tenure chosen from a selector, and computes an illustrative monthly installment figure using a simple, transparent formula, updating live as any input changes, and explicitly labeled throughout as an estimate rather than a real financing offer.

### The FAQ Search and Filter
The FAQ page keeps its full question list in a component state array, and derives the visible list on every keystroke and category change by filtering that array against the current search text and the selected category, with a live count shown on each category chip and a clear, friendly empty state when a search matches nothing.

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
