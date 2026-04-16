# RockIsland Rimini — Demo Website

Single-page demo site for **RockIsland** — a restaurant and bar on the pier (Molo di Levante) 400 meters into the Adriatic Sea in Rimini. This is a **sales demo** to show the client how their website could look and function.

## Concept

Premium night-out venue: dark, cinematic look (deep navy, black, amber/gold accents), not a family seafood place. The site presents the evening experience (aperitivo → sunset → dinner → DJ set), menu, testimonials, convention/events offer, and table booking.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** (icons)

Fonts: **Cormorant Garamond** (headlines), **Inter** (body).

## Features

- **Bilingual**: Italian (default) and English with a navbar toggle (IT | EN). All copy is in `lib/translations.ts`.
- **Responsive**: Mobile-first layout; mobile drawer menu, sticky bottom bar (Call / Book), horizontal-scroll testimonials.
- **Sections**: Hero, Evening timeline, Menu (3 tabs), Testimonials, Convention/events, Booking form, Footer.
- **Animations**: Scroll-triggered reveals (IntersectionObserver), staggered hero headline, no external animation libraries.
- **SEO**: Metadata (title, description, Open Graph, Twitter) and JSON-LD Restaurant schema in `app/layout.tsx`.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout, fonts, metadata, JSON-LD, LanguageProvider
│   ├── page.tsx        # Single page composing all sections
│   └── globals.css     # Tailwind + custom keyframes (hero, tabs)
├── components/
│   ├── Navbar.tsx           # Fixed nav, scroll bg, mobile drawer, IT/EN, Prenota
│   ├── Hero.tsx             # Full-screen hero, CTAs, shuttle badge
│   ├── EveningTimeline.tsx   # 5-step experience timeline
│   ├── MenuSection.tsx      # 3 tabs: Aperitivi & Bar, Ristorante, Cocktail
│   ├── TestimonialsSection.tsx
│   ├── ConventionSection.tsx
│   ├── BookingSection.tsx   # Contact info + form
│   ├── BookingForm.tsx      # Form with validation, success state (no API)
│   ├── Footer.tsx
│   ├── StickyBookingBar.tsx  # Mobile-only Call / Book bar
│   ├── Reveal.tsx           # Scroll reveal wrapper
│   └── SectionHeading.tsx
├── contexts/
│   └── LanguageContext.tsx  # Locale state + translations
├── lib/
│   ├── translations.ts      # IT/EN strings (nav, hero, menu labels, etc.)
│   └── menu-data.ts         # Menu items and prices (no translations)
├── tailwind.config.ts      # rock, amber, ocean palette; fonts; animations
└── next.config.mjs          # Image domains/remotePatterns for Unsplash
```

## Running the Project

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
npm start
```

## Demo Data

- **Contacts** (placeholder): phone 0541 149 7100, info@rockislandrimini.it  
- **Location**: Molo di Levante, Largo Boscovich, Rimini  
- **Images**: Unsplash (hero ocean, convention event); configured in `next.config.mjs`  
- **Booking**: Form only; no backend — success message is simulated  

## Notes

- Demo only: no real API, no CMS. Contact data matches the client’s real details for presentation.
- All images use the Next.js `Image` component; Unsplash hostname must be allowed in `next.config.mjs`.
