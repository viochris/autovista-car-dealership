<div align="center">

# AutoVista Motors, Multipage Car Dealership Showcase

**A 7 page dealership website with a 24 vehicle lineup, built to show frontend visual design, layout and interaction skill.**

[Live Demo](https://autovista-car-dealership.vercel.app)

</div>

***

## Important Notice

AutoVista Motors is a fictional company. This is a student portfolio and learning project, not a real dealership, so no sales, bookings or inquiries actually happen here.

* Every vehicle shown is a real model from a real manufacturer, but AutoVista Motors has no connection to Toyota, Honda, Mercedes Benz, BMW, Mitsubishi, Hyundai, Tesla, BYD, MINI, Volkswagen or Porsche. All vehicle names, trademarks and badges belong to their owners.
* The Test Drive form is cosmetic. Submitting it does not send an email, call a server or notify anyone. It only shows a confirmation on the page.
* The showroom address, phone numbers, email, staff, testimonials, offers, interest rate and company history are all made up.
* The photos come from two places. Six vehicles use genuine Wikimedia Commons photographs under a Creative Commons license. The other vehicles, the team portraits and the testimonial avatars use free license stock photos from Unsplash. The Known Limitations section explains what that means for accuracy.

The point of this project is the frontend. The colors, layout and interactions are what I wanted to practice, not the business idea behind them.

***

## Overview

I built AutoVista Motors to prove one narrow thing. A frontend developer should be able to take a content heavy, multipage site and make deliberate, consistent choices about color, layout, motion and information density across all of it, instead of polishing a single landing page and calling it done.

The result is a dealership site with 7 pages and 24 vehicles across 6 categories. It has real search, sorting, filtering and comparison tools, a working financing calculator and a multi layer parallax homepage. It is not a static catalog with a coat of paint.

The whole thing was vibe coded in Google AI Studio with Gemini, starting from a written Product Requirements Document that fixed the page structure, the color palette and the list of vehicles. It belongs to a small series of portfolio pieces that show applied vibe coding outside my main focus areas, which are Data Science, NLP and GenAI or LLM agent engineering.

The showroom is set in Marina Bay Financial Centre in Singapore, and every price is shown in Indonesian Rupiah (IDR).

***

## Features

### Seven pages, one shared frame
Home, Vehicles, About Us, Visit Us, Test Drive, Offers and FAQ all share the same header and footer. Below 1024 pixels the navigation bar collapses into a hamburger menu. The logo and a Book a Test Drive button stay visible in both states, so the layout holds up from a small phone to a wide monitor.

### 24 vehicles in 6 categories
The Vehicles page covers Sedans, SUVs, MPVs, Electric vehicles, Hatchbacks and Coupes, with exactly 4 models in each. Clicking a vehicle opens a detail popup on top of the page, so nobody gets navigated away. The popup closes with the Escape key and contains an image gallery with arrows and thumbnails, a full specification list, every trim level with its own price, and the key features. A Book a Test Drive button inside it sends the chosen vehicle straight to the booking form.

### Search, sort, filter and comparison
The Vehicles page is a working tool rather than a plain grid.

* Live text search runs across the name, category, tagline, description, engine, fuel or range, transmission, drive type and key features.
* Category chips show a live count for each category.
* Sorting offers featured order, price low to high, price high to low, and name A to Z.
* The budget filter has a two handle slider from IDR 250M to IDR 2.5B, editable minimum and maximum inputs, and quick presets for under 500M, 500M to 1B, 1B to 1.8B and above 1.8B.
* The comparison tool lets a visitor pick two vehicles and see their specs, trims and starting prices side by side. It has a swap button and a short note on which one is cheaper and by how much.
* When nothing matches, an empty state offers a one click reset.

### A financing calculator that actually calculates
The Offers page includes a calculator. You pick a vehicle, move a down payment slider between 20% and 50%, choose a tenure from 12 to 60 months, and the down payment, financed amount and monthly installment update live. It uses a simple flat rate at a made up 2.18% per year, and it is labeled everywhere as an illustrative estimate rather than a real loan offer.

### Parallax and motion
The homepage hero has three layers. A background photo moves slower than the page and zooms slightly as you scroll, a floating foreground layer carries the headline and call to action with a gentle depth and fade effect, and a glass styled highlights bar sits above both. Further down, the Featured Vehicles strip rises into view as you scroll, the four Why Choose AutoVista points appear one after another, and decorative rings in the promotional banner rotate along with the scroll position. Three soft glow orbs drift behind the whole page.

None of this uses an animation library. It is plain React state, a scroll listener throttled with requestAnimationFrame, and an IntersectionObserver.

### Testimonial carousel
The homepage cycles through 8 customer quotes every 5 seconds. Each one has a star rating, an avatar, the vehicle that was bought, and a slide counter. Visitors can also jump around with the arrows or the dots.

### An About Us page with a real story
It has a founding narrative with a watermark emblem in the background, four mission and value cards, a leadership team of four (all fictional people with portrait photos), and a timeline of four company milestones. The idea was to give the made up company some history instead of a paragraph of filler.

### A Visit Us page
It shows the showroom address, opening hours, a Singapore phone line and a Jakarta phone line, an email address, driving directions from Changi Airport and from the Orchard Road area, a note on landmarks and valet parking, and an embedded Google Map.

### A searchable FAQ
There are 16 questions in 4 categories (Test Drive, Financing, Warranty and Service, and Showroom and Delivery). A search box matches the question text, category chips show live counts, and the accordion list updates as you type. If nothing matches, a friendly empty state appears. A box at the bottom points visitors to the Test Drive and Visit Us pages.

### Three offers and a trade in program
The Offers page opens with three promotional cards, a cash advantage, a low flat interest financing deal and a trade in guarantee, and then leads into the calculator.

### A consistent color palette
A dark charcoal base, a slightly lighter slate for cards, a warm metallic gold used sparingly for calls to action, highlights and active states, and off white text. The same few color roles repeat on all seven pages. I wanted to show restraint as much as style.

### A Test Drive form that goes nowhere, on purpose
The form collects a name, phone number, email, vehicle (all 24 models), date, a time slot and an optional message. The time slots have some fun names, like Golden Hour Sunset Drive and Evening City Lights. The phone number must start with a plus sign and a country code and be 8 to 15 digits long, and the email is checked against a pattern, both with inline error messages. On submit, the page shows a confirmation screen with a reference code made of AVM and six random digits. Nothing leaves the browser.

***

## Tech Stack

* React 19
* TypeScript
* Vite
* Tailwind CSS v4, through the official Vite plugin
* lucide react for icons
* Outfit and Plus Jakarta Sans from Google Fonts
* Photography from Wikimedia Commons (Creative Commons) and Unsplash (Unsplash License)
* Google AI Studio with Gemini as the development environment

There is no backend, no database and no AI API call at runtime. Every vehicle, price, offer and page of content is static data in the code, and every interactive feature runs in the browser. The only outside requests are Google Fonts, the embedded Google Map on the Visit Us page, and a handful of gallery images loaded straight from Wikimedia Commons.

> The .env.example file and a few packages in package.json (@google/genai, express, dotenv and motion) came with the Google AI Studio template. The app does not use them, and you do not need an API key to run it.

***

## Getting Started

You need Node.js 20.19 or newer (or 22.12 or newer), because the current version of Vite requires it, plus npm or a similar package manager.

Clone the repository, open the folder in a terminal, and run the following.

```bash
npm install
npm run dev
```

The dev server starts on port 3000 of your machine. No environment variables or API keys are needed.

### Available scripts

* npm run dev starts the Vite dev server on port 3000 with hot reloading.
* npm run build creates an optimized production bundle in the dist folder.
* npm run preview serves that production build locally for a final check.
* npm run lint type checks the project with tsc.
* npm run clean deletes the dist folder.

### Deployment

Because there is no backend, any static host will do, such as Vercel, Netlify, GitHub Pages or Cloudflare Pages. Run npm run build and serve the dist folder. The live demo runs on Vercel.

***

## Project Structure

```
public/
├── vehicles/                      Local vehicle photos, two per model
├── team/                          Leadership portraits for the About Us page
├── avatars/                       Testimonial avatars
├── logo.png and logo.jpg          Site logo
└── showroom-hero.jpg              Homepage hero background

src/
├── pages/
│   ├── HomePage.tsx               Parallax hero, featured vehicles, value points, carousel, banner
│   ├── VehiclesPage.tsx           Search, sort, budget filter, category chips, comparison, grid
│   ├── AboutPage.tsx              Story, values, leadership team, milestone timeline
│   ├── VisitPage.tsx              Address, hours, contacts, directions, embedded map
│   ├── TestDrivePage.tsx          Validated booking form with a page only confirmation
│   ├── OffersPage.tsx             Three promotional cards and the financing calculator
│   └── FaqPage.tsx                Searchable, filterable FAQ
├── components/
│   ├── Header.tsx                 Navigation, collapsing to a hamburger menu below 1024px
│   ├── Footer.tsx                 Footer, contact details and the disclaimer
│   ├── VehicleModal.tsx           Vehicle detail popup with gallery, specs, trims and features
│   ├── VehicleComparisonModal.tsx Side by side comparison of two vehicles
│   └── TestimonialCarousel.tsx    Auto advancing testimonial carousel
├── data/
│   └── vehicles.ts                All 24 vehicles with specs, trims, prices, galleries and photo sources
├── assets/images/                 Logo and hero source images
├── App.tsx                        Hash based page routing and shared layout
├── main.tsx                       App entry point
└── index.css                      Tailwind import, base styles and custom scrollbar

download_portraits.sh              Helper script that fetched the team and avatar portraits
.env.example                       Leftover from the AI Studio template, not used
index.html
vite.config.ts
tsconfig.json
package.json
metadata.json
```

***

## How It Works

### Routing
App.tsx wraps whichever of the seven pages is active in the shared header and footer. Navigation follows the URL hash, for example #vehicles or #faq, so every page can be linked directly and the browser's back and forward buttons work. The Test Drive page can also be opened with a vehicle already selected, which is what the Book a Test Drive buttons around the site do. Every route change scrolls back to the top. I did not use a routing library because the site has a small, fixed set of pages.

### The color palette
Four colors do almost everything. A deep charcoal (#14161B) for the background, a slate (#23262E) for cards, a metallic gold (#C9A24B) for accents, and off white (#F2F0EA) for text. Because the same roles repeat on every page, the site reads as one system instead of seven separately styled pages.

### Homepage motion
The homepage keeps the scroll position in a single piece of state, updated through requestAnimationFrame so it never changes more than once per frame. Every parallax effect comes from that one number, including the hero background movement and zoom, the foreground drift and fade, the glow orbs and the rotating rings. An IntersectionObserver triggers the scroll in reveal of the Featured Vehicles, Why Choose AutoVista and offers sections.

### Vehicle data and photo sources
Everything lives in src/data/vehicles.ts. Each vehicle has its name, category, specs, trims with prices, key features, a thumbnail, a gallery, and a record of where its photo came from, including the source, the search query, the license and the original link. Prices are plain IDR numbers formatted by one shared helper.

### Search, sort, filter and comparison
The Vehicles page filters the full list by the search text, the active category and the price range, and then sorts what is left. All of that happens in one memoized calculation with no network request. The comparison tool keeps up to two selected vehicles in component state and shows them in a single table.

### The calculator formula
The financed amount is the vehicle price minus the down payment. The interest is the financed amount multiplied by 2.18 percent and by the tenure in years. The monthly installment is the financed amount plus that interest, divided by the number of months. The result updates as soon as any input changes.

### FAQ search
The FAQ keeps all its questions in one array and works out the visible list on every keystroke and category change. The count on each chip comes from the same array.

***

## Known Limitations

This is a learning project, and a few things are not perfect yet.

* **Many vehicle photos do not match the model shown.** Only six vehicles (Toyota Camry, Honda Civic RS, Toyota Fortuner, Honda CRV, Toyota Innova Zenix and Tesla Model 3) use correctly matched Wikimedia Commons photos, with the exact source recorded in vehicles.ts. The other 18 use generic Unsplash stock photos found by keyword search. Many of them show a different car from the one named, and some images are reused across several models. Replacing them with matched photos is the main improvement I plan to make.
* **The portraits are stock photos.** The leadership and testimonial pictures are 400 pixel wide Unsplash photos of people who have nothing to do with this project.
* **Hash routing is not search engine friendly.** It keeps things simple but is not what a production site would use.
* **There are no automated tests.** The project relies on TypeScript type checking only.
* **Some original photos are very large.** A few are over 10 MB each, so the first page load is heavier than it should be.

***

## License

This project is available for personal reference and learning purposes.

<div align="center">

Made with 🚗 and vibe coding

</div>
