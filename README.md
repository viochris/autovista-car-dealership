<div align="center">

# AutoVista Motors, Multipage Car Dealership Showcase

**A 24 vehicle, 7 page car dealership website built purely to demonstrate frontend visual design, layout, and interaction skill.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-autovista--car--dealership.vercel.app-C9A24B?style=for-the-badge)](https://autovista-car-dealership.vercel.app)
[![Vibe Coded](https://img.shields.io/badge/Vibe%20Coded-Google%20AI%20Studio%20%2B%20Gemini-4285F4?style=for-the-badge)](https://ai.studio)

**[Important Notice](#important-notice)** · **[Features](#features)** · **[Tech Stack](#tech-stack)** · **[Getting Started](#getting-started)** · **[Project Structure](#project-structure)** · **[How It Works](#how-it-works)** · **[Known Limitations](#known-limitations)**
</div>

---

## Important Notice

**AutoVista Motors is a fictional company. This is a student portfolio and learning project, not a real dealership, and no real sales, bookings, or inquiries happen here.**

* Every vehicle shown is a real, correctly named model from a real manufacturer, but AutoVista Motors itself has no affiliation with, endorsement from, or connection to Toyota, Honda, Mercedes Benz, BMW, Mitsubishi, Hyundai, Tesla, BYD, MINI, Volkswagen, or Porsche. All vehicle names, trademarks, and badges belong to their respective owners.
* The Test Drive booking form is entirely cosmetic. Submitting it does not send an email, hit a server, or notify anyone. It only shows an in page confirmation for demonstration purposes.
* The showroom address, phone numbers, email, staff names, leadership team, testimonials, offers, interest rate, and company history shown on the site are all invented for the purposes of this project.
* Photographs come from two sources. Six vehicles use photographs from Wikimedia Commons under Creative Commons licensing, with the source and license documented alongside each entry in the code. The remaining vehicles, the team portraits, and the testimonial avatars use free license stock photography from Unsplash. The [Known Limitations](#known-limitations) section explains what that means for photo accuracy.

The entire point of this project is the frontend, the color palette, the layout, and the interaction design, not the business idea behind it.

---

## Overview

AutoVista Motors was built to prove a specific, narrow skill, that a frontend developer can take a content heavy, multipage site and make deliberate, consistent choices about color, layout, motion, and information density across all of it, not just polish a single landing page. The result is a 7 page dealership site carrying a 24 vehicle lineup across 6 categories, with real search, sorting, filtering, and comparison tools, a working financing calculator, and a multi layer parallax homepage, rather than a static catalog with a coat of paint.

The project was **vibe coded in [Google AI Studio](https://ai.studio) using Gemini**, starting from a written Product Requirements Document that defined the page structure, the fixed color palette, the exact list of real vehicles to feature, and the rule that vehicle photography must be found through search rather than generated. It is part of a broader personal portfolio series demonstrating applied "vibe coding" ability outside of my primary technical focus areas (Data Science, NLP, and GenAI/LLM agent engineering), sitting alongside sibling projects such as a link in bio platform and a set of interactive celebration cards.

The showroom is set at Marina Bay Financial Centre in Singapore, and every price on the site is shown in Indonesian Rupiah (IDR).

---

## Features

### Seven Fully Built Pages
Home, Vehicles, About Us, Visit Us, Test Drive, Offers, and FAQ, all sharing one consistent header and footer. The header's full horizontal navigation bar collapses into a hamburger triggered dropdown menu below 1024 pixels of viewport width, with the logo and a persistent Book a Test Drive button remaining visible in either state, so the layout stays usable and intentional from a small phone up to a wide desktop monitor rather than simply shrinking.

### A 24 Vehicle Lineup Across 6 Categories
The Vehicles page carries Sedans, SUVs, MPVs, Electric vehicles, Hatchbacks, and Coupes, with exactly 4 models in each category, 24 real, correctly named models in total, spanning everyday family cars up to performance coupes. Every vehicle can be opened in a detail popup that closes with the Escape key and shows an image gallery with arrows and thumbnails, a complete specification list (engine, transmission, seating, fuel or range, dimensions, power output, and drive type), the available trim levels with their own individual pricing, and a list of key features, all without navigating away from the Vehicles page sitting underneath it. A Book a Test Drive button inside the popup sends the chosen vehicle straight into the booking form.

### Real Search, Sort, Filter, and Side by Side Comparison
The Vehicles page is not a static grid.

* **Live text search** runs across the model name, category, tagline, description, engine, fuel type or range, transmission, drive type, and key features.
* **Category chips** for All plus the 6 categories, each with a live vehicle count.
* **Sorting** by featured order, price low to high, price high to low, or name A to Z.
* **A budget range filter** with a two handle slider from IDR 250M to IDR 2.5B, editable minimum and maximum inputs, and quick presets for under 500M, 500M to 1B, 1B to 1.8B, and above 1.8B.
* **A comparison tool** that lets a visitor pick two vehicles straight from the grid and see their specifications, trims, and starting prices laid out side by side in a single popup, with a swap button and a short note on which vehicle is cheaper and by how much.
* **Clear empty states** with a one click reset when nothing matches.

### An Interactive Financing Calculator
The Offers page includes a working calculator, not just a static illustration. A visitor selects a vehicle, adjusts a down payment slider (20% to 50%) and a loan tenure selector (12 to 60 months), and sees the down payment, the financed amount, and the estimated monthly installment update live. It uses a simple flat rate formula at a made up 2.18% per year promotional rate. The result is clearly labeled as an illustrative estimate, not a real loan offer, consistent with the rest of the site's fictional framing.

### Multi Layer Parallax and Considered Motion Throughout
The homepage hero is built from three coordinated layers, a background photograph that moves more slowly than the page and zooms slightly as the visitor scrolls, a floating foreground content layer carrying the headline and call to action with a subtle depth and fade effect, and a glass styled highlights bar that adds a further sense of elevation. That same care extends further down the page. The Featured Vehicles strip animates into view with a scroll triggered elevation effect, the "Why Choose AutoVista" section staggers its four value propositions in as the visitor scrolls past them, and the promotional banner section rotates decorative kinetic rings in the background as a parallax accent. Ambient, softly drifting glow orbs sit behind the whole homepage, shifting gently with scroll to add background depth without ever distracting from the content in front of them.

All of it is built with plain React state, a scroll listener throttled through requestAnimationFrame, and an IntersectionObserver, with no animation library involved.

### An Auto Advancing Testimonial Carousel
The homepage's testimonials section cycles automatically through 8 short customer quotes every 5 seconds. Each quote comes with a star rating, an avatar, the vehicle that was bought, and a slide counter, and visitors can also jump between quotes with the previous and next arrows or the dot navigation.

### A Full About Us Story, Not a Placeholder Page
The About Us page includes a founding narrative section with a decorative watermark emblem in the background, a four item mission and values section, a leadership section presenting a four person executive team with portrait photographs (all entirely fictional people), and a chronological timeline of four company milestones, giving the fictional company a sense of real history rather than a single paragraph of filler text.

### A Visit Us Page With Real Layout Work
The Visit Us page presents the showroom address, operating hours, a Singapore phone line and a Jakarta phone line, an email address, driving directions from Changi Airport and from the Orchard Road area, a note on landmarks and complimentary valet parking, and an embedded Google Map with a link out to full directions.

### A Genuinely Searchable, Filterable FAQ
The FAQ page is not a flat list. It carries 16 questions across 4 categories (Test Drive, Financing, Warranty and Service, and Showroom and Delivery). It includes a live search box that matches the question text and a row of category filter chips with live counts per category. The accordion style question list updates instantly as the visitor types or switches categories, with a clear empty state if a search returns nothing, plus a "still have questions" box at the bottom that points visitors to the Test Drive and Visit Us pages.

### Three Distinct Promotional Offers, Plus the Calculator
The Offers page presents three separate promotional cards, a short term cash advantage, a low flat interest financing highlight, and a trade in guarantee, before leading into the interactive financing calculator described above, so the page reads as a genuine offers hub rather than a single generic banner.

### Photography and Documented Sourcing
Vehicle photos were found through search rather than generated by an image model, since a generated image of a specific, real, named car model would likely be inaccurate or mismatched to the wrong trim or generation. Six vehicles (Toyota Camry, Honda Civic RS, Toyota Fortuner, Honda CRV, Toyota Innova Zenix, and Tesla Model 3) use Wikimedia Commons photographs that match the model, and each of those entries records its source, search query, license, and original link in the code. The other vehicles use Unsplash stock photography, which is also recorded in the code. See [Known Limitations](#known-limitations) for details on photo accuracy.

### A Deliberate, Consistent Color Palette
A dark charcoal base, a slightly lighter slate surface for cards, and a warm metallic gold accent used sparingly for calls to action, highlights, and active states, applied consistently across all seven pages rather than left to page by page defaults. The intent throughout is to demonstrate restraint as much as style, a small, repeated set of color roles rather than a different palette improvised on every page.

### A Test Drive Form That Goes Nowhere, On Purpose
The Test Drive page collects a name, phone number, email, preferred vehicle (any of the 24 models), preferred date, a named time slot (including flavorful options like a "Golden Hour Sunset Drive" or "Evening City Lights" slot), and an optional message. The phone number must start with a plus sign and a country code and be 8 to 15 digits long, and the email is checked against a pattern, both with inline error messages. On submission the page shows an in page confirmation screen with a generated reference code (AVM followed by six random digits) and a short, human sounding message. The vehicle field can also be pre filled from anywhere on the site through the Book a Test Drive buttons. No data leaves the browser at any point, this is a frontend interaction demonstration, not a working booking system connected to any real backend.

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Language** | TypeScript |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) through the official Vite plugin |
| **Icons** | [`lucide-react`](https://lucide.dev/) |
| **Fonts** | [Outfit](https://fonts.google.com/specimen/Outfit) and [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) from Google Fonts |
| **Photography** | [Wikimedia Commons](https://commons.wikimedia.org/) (Creative Commons) for six vehicles, [Unsplash](https://unsplash.com/) (Unsplash License) for the rest, the portraits, and the avatars |
| **Development Environment** | [Google AI Studio](https://ai.studio) (Build mode, powered by Gemini) |

**AutoVista Motors requires no backend, no database, and makes no AI API call at runtime.** Every vehicle, price, offer, and page of content is static data defined directly in the frontend code, and every interactive feature, search, sort, filter, comparison, the financing calculator, the FAQ search, and the test drive form, runs entirely in the browser. The only outside requests are for Google Fonts, the embedded Google Map on the Visit Us page, and a handful of gallery images loaded straight from Wikimedia Commons.

> The `.env.example` file and a few packages in `package.json` (`@google/genai`, `express`, `dotenv`, and `motion`) are part of the Google AI Studio project template. The app does not use them, and no API key is needed to run it.

---

## Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) 20.19 or newer (or 22.12 or newer), because the current version of Vite requires it
* npm (or an equivalent package manager)

### Installation and Local Development

```bash
# 1. Clone the repository
git clone https://github.com/viochris/autovista-car-dealership.git
cd autovista-car-dealership

# 2. Install dependencies
npm install

# 3. Run the app locally (served on port 3000)
npm run dev
```

No environment variables or API keys are required.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server on port 3000 with hot module reloading |
| `npm run build` | Builds an optimized static production bundle into the `dist` folder |
| `npm run preview` | Serves the production build locally for a final check |
| `npm run lint` | Type checks the whole project with `tsc` |
| `npm run clean` | Deletes the `dist` folder |

### Deployment
Since the app has no backend or database dependency, it can be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, Cloudflare Pages, and so on) by running `npm run build` and serving the resulting `dist` folder. The live demo is hosted on Vercel.

---

## Project Structure

```
autovista-car-dealership/
├── public/
│   ├── vehicles/                  # Local vehicle photographs, two per model
│   ├── team/                      # Leadership portraits for the About Us page
│   ├── avatars/                   # Testimonial avatars
│   ├── logo.png / logo.jpg        # Site logo
│   └── showroom-hero.jpg          # Homepage hero background
├── src/
│   ├── pages/
│   │   ├── HomePage.tsx           # Multi layer parallax hero, featured vehicles, value propositions,
│   │   │                          # auto advancing testimonial carousel, promotional banner
│   │   ├── VehiclesPage.tsx       # Live search, sort, budget range filter, category chips, comparison
│   │   │                          # tool, and the full 24 vehicle grid
│   │   ├── AboutPage.tsx          # Founding story, mission and values, leadership team, milestone timeline
│   │   ├── VisitPage.tsx          # Showroom address, hours, contacts, directions, and an embedded map
│   │   ├── TestDrivePage.tsx      # Validated booking form with a generated reference code and an
│   │   │                          # in page only confirmation
│   │   ├── OffersPage.tsx         # Three promotional cards plus the interactive financing calculator
│   │   └── FaqPage.tsx            # Searchable, category filterable frequently asked questions
│   ├── components/
│   │   ├── Header.tsx             # Navigation, collapsing to a hamburger menu below 1024px
│   │   ├── Footer.tsx             # Site wide footer, contact details, and the disclaimer
│   │   ├── VehicleModal.tsx       # Per vehicle detail popup, gallery, specs, trims, features
│   │   ├── VehicleComparisonModal.tsx # Side by side comparison of two vehicles
│   │   └── TestimonialCarousel.tsx    # Auto advancing testimonial carousel
│   ├── data/
│   │   └── vehicles.ts            # All 24 vehicles, specs, trims, pricing, galleries, and photo sourcing notes
│   ├── assets/images/             # Logo and hero source images
│   ├── App.tsx                    # Hash based page routing and shared layout
│   ├── main.tsx                   # React app entry point
│   └── index.css                  # Tailwind import, base styles, and custom scrollbar
├── download_portraits.sh          # Helper script that fetched the team and avatar portraits
├── .env.example                   # Environment variable template from Google AI Studio, not used by the app
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── metadata.json
```

---

## How It Works

### Page Routing
`App.tsx` renders the shared `Header` and `Footer` around whichever of the seven pages is currently active. Navigation follows the URL hash, for example `#vehicles` or `#faq`, rather than a full routing library, since the site has a small, fixed set of pages. That keeps every page directly linkable and makes the browser's back and forward buttons work. The Test Drive page can also be opened with a vehicle already selected, which is what the Book a Test Drive buttons around the site do, and every route change scrolls back to the top of the page.

### The Color Palette
The palette is deliberately limited to a small set of roles, a deep charcoal background (`#14161B`), a slightly lighter slate surface for cards (`#23262E`), a warm metallic gold (`#C9A24B`) used sparingly for calls to action and highlights, and off white text (`#F2F0EA`) for body copy. That same small set of roles repeats across all seven pages rather than each page introducing its own new colors, so the site reads as one considered system rather than several independently styled pages stitched together.

### The Homepage's Layered Motion
The homepage keeps the scroll position in a single piece of state, updated through requestAnimationFrame so it changes at most once per frame, and every parallax effect is derived from that one number. The hero background moves slowest and zooms slightly, the foreground layer drifts and fades with its own subtle depth, the glow orbs shift at different rates, and the rings in the promotional banner rotate in step with the scroll position. An IntersectionObserver triggers the scroll in reveal of the Featured Vehicles, Why Choose AutoVista, and offers sections, so the four value propositions stagger in one after another rather than appearing all at once.

### Vehicle Data and Photo Sourcing
`src/data/vehicles.ts` holds all 24 vehicles as structured data, name, category, full specifications, trims and their individual pricing, key features, a thumbnail, a gallery of image paths, and an attribution record with the source, search query, license, and original link. Prices are stored as plain IDR numbers and formatted by one shared helper. Photos were found through search rather than generated by an image model, since an AI generated depiction of a specific, real car risks being visually inaccurate or mismatched to the wrong model year or trim.

### Search, Sort, Filter, and Comparison
The Vehicles page filters its full 24 vehicle list against the live search query, the active category, and the selected price range, then sorts the resulting list, all in one memoized calculation computed in the browser with no network request involved. The comparison tool holds up to two selected vehicles in component state and renders their specifications, trims, and starting prices side by side in a single table, so differences are easy to scan at a glance rather than needing to be remembered while switching between two separate popups.

### The Financing Calculator
The Offers page's calculator takes a selected vehicle's starting price, a down payment percentage chosen from a slider, and a loan tenure chosen from a selector. The financed amount is the vehicle price minus the down payment. The interest is the financed amount multiplied by 2.18 percent and by the tenure in years, and the monthly installment is the financed amount plus that interest, divided by the number of months. The figure updates live as any input changes and is explicitly labeled throughout as an estimate rather than a real financing offer.

### The FAQ Search and Filter
The FAQ page keeps its full question list in one array, and derives the visible list on every keystroke and category change by filtering that array against the current search text and the selected category. The live count on each category chip comes from the same array, and a clear, friendly empty state appears when a search matches nothing.

---

## Known Limitations

This is a learning project, and a few things are not perfect yet.

* **Many vehicle photos do not match the model shown.** Only six vehicles (Toyota Camry, Honda Civic RS, Toyota Fortuner, Honda CRV, Toyota Innova Zenix, and Tesla Model 3) use Wikimedia Commons photographs that match the model. The other 18 use generic Unsplash stock photos found by keyword search, and many of them show a different car from the one named, with some images reused across several models. Replacing them with matched photos is the next improvement on the list.
* **The portraits are stock photos.** The leadership and testimonial pictures are 400 pixel wide Unsplash photos of people who have no connection to this project.
* **Hash routing is not search engine friendly.** It keeps the project simple, but it is not what a production site would use.
* **There are no automated tests.** The project relies on TypeScript type checking only.
* **Some vehicle photos are very large.** A few are over 10 MB each, which makes the first page load heavier than a production site should allow.

---

## License

This project is available for personal reference and learning purposes.

---

<div align="center">

**Made with 🚗 and vibe coding**

[Report an Issue](https://github.com/viochris/autovista-car-dealership/issues)

</div>
