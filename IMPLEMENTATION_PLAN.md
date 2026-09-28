# IMPLEMENTATION PLAN: TASTE OF ETHIOPIA
**Project:** Taste of Ethiopia — Brand Website & Digital Front Door  
**Location:** Wagenstraat 177, 2512 AW Den Haag, Netherlands  
**Domain:** `tasteofethiopia.nl`  
**Role:** Lead Product Engineer, UX Designer & Technical Architect  
**Status:** Revised Implementation Blueprint (Pre-Implementation)  
**Governing Documents:** [PROJECT_SPEC.md](file:///home/ab/codes/projects/resturant_website/PROJECT_SPEC.md) & [DESIGN_BRIEF.md](file:///home/ab/codes/projects/resturant_website/DESIGN_BRIEF.md)  

---

## Fact & Requirement Taxonomy Audit

To ensure unverified assumptions do not leak into production requirements, every restaurant detail in this plan is strictly categorized:

| Category | Definition | Plan Items in this Category |
| :--- | :--- | :--- |
| **Confirmed** | Verified through active technical/DNS inspection or public physical records. | • Address: Wagenstraat 177, 2512 AW Den Haag.<br>• Current site: WordPress 500 fatal error on PHP 8.3/Mijndomein.<br>• Domain: `tasteofethiopia.nl` at Mijndomein.<br>• Active business mail: `info@tasteofethiopia.nl` routed to Mijndomein MX servers. |
| **External Source, Needs Verification** | Sourced from third-party aggregators (TheFork, Thuisbezorgd, Neotaste, Google Maps); not yet verified directly with the restaurant. | • Operating hours: Discrepancy between 12:00–00:00 (TheFork) and 12:00–02:00 (Thuisbezorgd).<br>• Menu items & descriptions: Gathered from third-party delivery/booking platforms.<br>• Prices: Third-party platform prices may include delivery markups.<br>• TheFork listing: ID `848136` exists, but restaurant's private account settings/widget config are unconfirmed.<br>• Ordering channels: Active storefronts exist on Thuisbezorgd and Uber Eats; restaurant URLs and merchant status require confirmation.<br>• Phone: `070 215 57 17` / Mobile: `+31 6 860 814 52`.<br>• Coordinates & transit routes. |
| **Design Proposal** | Architectural and visual recommendations proposed during design phases; subject to review/validation. | • Visual direction: *Editorial Warm Hospitality* (unbleached canvas `#FAF7F2`, earth tones, `Fraunces` + `Plus Jakarta Sans`).<br>• Persistent mobile bottom action dock: **Proposed UX pattern requiring validation on mobile devices**.<br>• Menu presentation: Clean editorial layout by default; client-side tab filtering only if verified menu volume requires it.<br>• Dual-provider ordering modal: Proposed selector to choose between delivery channels.<br>• Dedicated subpage routes (`/menu`, `/reserve`): Proposed deep-link anchors sharing the homepage components. |
| **Client Decision Required** | Operational or commercial business decisions that only the restaurant owner can finalize. | • Official dining vs. late-service hours.<br>• Official in-house menu prices & active dishes.<br>• Dietary certifications (Halal status, pure teff gluten-free injera policy).<br>• Official high-resolution restaurant photography and active social media URLs.<br>• TheFork Manager widget embed snippet / configuration preference.<br>• Preferred ordering platform presentation. |

---

## 1. Implementation Overview

### What We Are Building
A modern, mobile-first, editorial restaurant website for **Taste of Ethiopia** (Den Haag), built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**, designed for deployment on **Vercel** and connection to `tasteofethiopia.nl`.

### Primary Purpose
To replace the broken WordPress site (currently returning a PHP 500 fatal error) with an intentionally simple, resilient digital front door that:
1. Presents the restaurant's authentic Ethiopian culinary heritage with warmth and editorial poise.
2. Routes reservation-seeking guests directly to the restaurant's existing **TheFork** reservation system.
3. Routes delivery/takeaway customers to the restaurant's active third-party ordering platforms.
4. Presents a readable, native HTML culinary menu.
5. Provides essential location and contact information with direct Google Maps directions.

### Commercial & Operational Boundaries
* **Reservations:** The website's role is strictly to provide a polished pathway connecting guests to TheFork. All reservation availability, seating rules, booking confirmations, notifications, and commercial terms are managed entirely by TheFork and the restaurant's TheFork Manager account. The website makes **no claims regarding commercial terms or commission structures**.
* **Ordering:** The website does not process payments, carts, or delivery logistics. It routes users cleanly to third-party ordering platforms.
* **Confirmation:** The website does not provide "instant confirmation"; reservation confirmations are handled by TheFork according to the restaurant's configuration.

### Scope: What is Explicitly in V1
- Next.js App Router application with static/server rendering and minimal client JavaScript.
- Custom Tailwind design tokens implementing the *Editorial Warm Hospitality* aesthetic.
- Single-page editorial narrative with dedicated deep-link routes (`/menu`, `/reserve`).
- Native HTML culinary menu with explicit content verification gates.
- Reservation section routing users to TheFork (direct link baseline, with architecture ready for an official widget if configured).
- Online ordering selector routing to third-party channels.
- Visit section with address, transit guidance, and a direct Google Maps directions link.
- Privacy-conscious, cookieless analytics evaluated against regulatory requirements before deployment.
- Semantic HTML and Schema.org structured data populated strictly with verified facts.

### Scope: Explicit Non-Goals
- **NO Database:** No PostgreSQL, MySQL, MongoDB, or Prisma.
- **NO Authentication:** No user accounts, customer logins, or member dashboards.
- **NO Custom CMS:** No Strapi, Sanity, or headless CMS. Content lives in typed config files.
- **NO Custom Reservation Engine:** No calendar availability calculation, table management, or booking storage.
- **NO Custom Ordering / Payment Engine:** No Stripe, checkout, or cart logic.
- **NO Domain Transfer:** The domain remains registered at Mijndomein; nameservers are not changed.

---

## 2. Technical Architecture

### Core Stack
* **Framework:** Next.js (App Router)
* **Language:** TypeScript (strict mode)
* **Styling:** Vanilla Tailwind CSS with custom design tokens
* **Iconography:** Lucide React (tree-shakeable SVG icons)
* **Font Loading:** `next/font/google` (`Fraunces` variable serif and `Plus Jakarta Sans` variable sans)
* **Hosting:** Vercel (edge CDN, automated SSL)

### Directory Structure
```
resturant_website/
├── public/
│   ├── images/
│   │   ├── hero/               # Hero photography (staging vs verified)
│   │   ├── dishes/             # Food photography
│   │   ├── culture/            # Injera craft, Bunna coffee ceremony
│   │   └── interior/           # Dining room & Wagenstraat location
│   ├── favicon.ico
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout: fonts, metadata, global nav & footer
│   │   ├── page.tsx            # Editorial single-page homepage narrative
│   │   ├── menu/
│   │   │   └── page.tsx        # Dedicated deep-link menu view
│   │   ├── reserve/
│   │   │   └── page.tsx        # Dedicated reservation landing view
│   │   ├── sitemap.ts          # XML sitemap generator
│   │   └── robots.ts           # Robots.txt generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Sticky header with subtle scroll-state border/background
│   │   │   ├── MobileNav.tsx   # Mobile navigation drawer
│   │   │   ├── MobileBar.tsx   # Proposed persistent mobile action dock (PROTOTYPE)
│   │   │   └── Footer.tsx      # Operational info, legal notices, credits
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Brand positioning & primary CTAs
│   │   │   ├── CulturalStory.tsx # Injera, Mesob & Gursha editorial feature
│   │   │   ├── SignatureFeasts.tsx # Featured culinary highlights
│   │   │   ├── MenuSection.tsx # Native HTML menu (simple editorial structure)
│   │   │   ├── BunnaCeremony.tsx # Ethiopian coffee ritual spotlight
│   │   │   ├── ReservationSection.tsx # TheFork reservation routing & integration wrapper
│   │   │   ├── VisitSection.tsx  # Address, directions CTA, optional map preview
│   │   │   └── OrderingModal.tsx # Multi-provider dispatch dialog
│   │   └── ui/
│   │       ├── Button.tsx      # Standardized button/link component
│   │       ├── Badge.tsx       # Content & dietary indicator badge
│   │       └── Modal.tsx       # Accessible dialog primitive
│   ├── config/
│   │   ├── restaurant.ts       # Verified restaurant facts & verification gates
│   │   ├── menu.ts             # Typed menu catalog with item verification statuses
│   │   ├── reservations.ts     # TheFork routing configuration
│   │   └── ordering.ts         # Ordering platform configuration
│   ├── types/
│   │   ├── restaurant.ts       # Interfaces for restaurant metadata
│   │   ├── menu.ts             # Interfaces for menu catalog & verification states
│   │   └── common.ts           # Shared UI component types
│   ├── lib/
│   │   └── utils.ts            # Class name helper (clsx / tailwind-merge)
│   └── styles/
│       └── globals.css         # Tailwind directives & CSS design tokens
├── tailwind.config.ts          # Color tokens, typography, container scales
├── tsconfig.json               # Strict TypeScript configuration
├── next.config.mjs             # Image optimization & security headers
├── DESIGN_BRIEF.md             # Design specification source of truth
├── PROJECT_SPEC.md            # Product specification source of truth
└── package.json
```

### Server vs. Client Component Boundaries
* **React Server Components (RSC - Default):**
  * `RootLayout`, `page.tsx`, `menu/page.tsx`, `reserve/page.tsx`
  * `Hero`, `CulturalStory`, `SignatureFeasts`, `BunnaCeremony`, `VisitSection`, `Footer`
  * `MenuSection` (Server-rendered by default; client tabs added only if menu size warrants it).
* **Client Components (`'use client'` - Strictly Isolated):**
  * `Header.tsx` & `MobileNav.tsx`: Manages scroll-state background transition and mobile drawer state.
  * `MobileBar.tsx`: Manages mobile action dock visibility (prototype).
  * `OrderingModal.tsx`: Manages dialog state, focus trap, and Escape key handling.
  * `ReservationSection.tsx`: Manages widget integration loading states if enabled.

---

## 3. Route Architecture

| Route | Purpose | Content | Primary CTA | Secondary CTAs | SEO & Indexing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Primary digital front door | Complete editorial narrative: Hero, Story, Highlights, Menu, Coffee Ritual, Reservation, Visit | **Reserve on TheFork** | • Order Online (Modal)<br>• Explore Menu<br>• Call Restaurant | Canonical root; rich `Restaurant` JSON-LD schema (verified properties only). |
| `/menu` | Dedicated deep-link menu view | Full native HTML menu, descriptions, verified prices, dietary notices | **Reserve on TheFork** | • Order Online<br>• View Story | Canonical `/menu`; indexed for direct menu searches. |
| `/reserve` | Dedicated reservation landing view | TheFork booking routing card, reservation guidance, group booking note | **Book on TheFork** | • Call for Groups<br>• View Menu | Canonical `/reserve`; direct destination for booking links. |

---

## 4. Design System Implementation

### Design Tokens (`tailwind.config.ts`)
```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FAF7F2',        // Unbleached cotton base
        surface: '#F3EDE2',       // Warm parchment surface
        surfaceElevated: '#FFFFFF',// Clean white for dialogs/cards
        primary: '#1C1614',       // Deep roasted espresso (15.6:1 AAA contrast)
        muted: '#63564F',         // Muted description text (5.4:1 AA contrast)
        berbere: {
          DEFAULT: '#8A2C18',     // Brand crimson CTA (5.6:1 AA contrast)
          hover: '#702313',       // Active/hover state (7.4:1 AAA contrast)
          light: '#F8ECE9',       // Subtle tinted background
        },
        terracotta: '#C86D51',    // Earthenware clay warmth
        ochre: '#B88424',         // Golden teff & tej honey (4.5:1 AA contrast)
        sage: {
          DEFAULT: '#2D4736',     // Highland juniper / plant-based tag (7.8:1 AAA contrast)
          light: '#EDF2EE',       // Tinted tag background
        },
        border: {
          DEFAULT: '#E2D9CC',     // Hairline border
          subtle: '#EDE6DC',      // Soft divider
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        subtle: '0 2px 8px rgba(28, 22, 20, 0.04)',
        elevated: '0 8px 30px rgba(28, 22, 20, 0.08)',
      },
      maxWidth: {
        content: '1200px',
        reading: '720px',
      },
    },
  },
  plugins: [],
};
export default config;
```

### Visual Rules
* **No Glassmorphism:** Header uses an opaque or high-opacity solid background (`#FAF7F2`) with a subtle border transition on scroll (`border-b border-border`). No frosted-glass effects.
* **No Cards-for-Everything:** Menu items and content blocks sit directly on the canvas with hairline dividers, avoiding repetitive floating rounded cards.
* **Focus States:** High-visibility outline on all interactive controls: `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-berbere`.

---

## 5. Component Architecture

### Component Hierarchy
* **Layout:**
  * `Header`: Sticky navigation bar with subtle scroll-state background/border transition.
  * `MobileNav`: Fullscreen slide-over drawer for mobile screens.
  * `MobileBar` (PROTOTYPE): Fixed bottom action bar on mobile (< 768px). *Treated as a proposed pattern requiring mobile validation before final inclusion.*
  * `Footer`: Operational information, address, legal notices, and credits.
* **Sections:**
  * `Hero`: Editorial headline, positioning statement, and dual CTAs.
  * `CulturalStory`: Asymmetric two-column feature on *Injera*, *Mesob*, and *Gursha*.
  * `SignatureFeasts`: Highlight of key culinary preparations.
  * `MenuSection`: Native HTML menu with clean category groupings.
  * `BunnaCeremony`: Visual spotlight on the Ethiopian coffee ritual.
  * `ReservationSection`: TheFork reservation routing container with direct link fallback.
  * `VisitSection`: Wagenstraat 177 address, public transit guidance, and a direct Google Maps directions link (map iframe optional).
  * `OrderingModal`: Accessible dialog presenting active delivery channels.
* **UI Primitives:**
  * `Button`: Standardized button/anchor element supporting `primary`, `secondary`, and `outline` variants.
  * `Badge`: Visual tag for verified dietary indicators (`Vegan`, `Vegetarian`, `Spicy`).
  * `Modal`: Accessible dialog with focus trap, `aria-modal="true"`, and `Escape` key listener.

---

## 6. Content/Data Architecture & Verification Taxonomy

### Verification Status Types (`src/types/menu.ts`)
```ts
export type ContentVerificationStatus = 
  | 'CLIENT_VERIFIED'              // Confirmed directly by restaurant owner
  | 'EXTERNAL_SOURCE_UNVERIFIED'   // Gathered from third-party platforms; unconfirmed
  | 'DRAFT';                       // Placeholder / editorial draft
```

### Production Display Gate
To prevent unverified content from accidentally being presented as factual production claims:
1. **Seed Data Segregation:** All initial dish names, descriptions, and prices are tagged with `status: 'EXTERNAL_SOURCE_UNVERIFIED'`.
2. **Production Verification Gate:** A build-time or environment flag (`REQUIRE_VERIFIED_CONTENT=true`) can enforce that items without `CLIENT_VERIFIED` cannot be deployed to public production, or display an explicit staging notice during review.
3. **Safety-Sensitive Claims:** Dietary badges (`halal`, `gluten-friendly`) are **disabled by default in production** until explicitly confirmed by the restaurant owner (`CLIENT_VERIFIED`).

### Menu Data Model (`src/config/menu.ts`)
```ts
export type DietaryTag = 'vegan' | 'vegetarian' | 'halal' | 'spicy' | 'gluten-friendly';

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  priceNumeric: number;
  description: string;
  dietary: DietaryTag[];
  isSignature?: boolean;
  status: ContentVerificationStatus;
}

export interface MenuCategory {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}
```

### Restaurant Metadata Model (`src/config/restaurant.ts`)
All operational fields are tagged with their verification status:
```ts
export interface RestaurantMetadata {
  name: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    status: 'CONFIRMED';
  };
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
    status: 'EXTERNAL_SOURCE_UNVERIFIED';
  };
  hours: {
    display: string;
    kitchenNote: string;
    status: 'EXTERNAL_SOURCE_UNVERIFIED'; // 00:00 vs 02:00 discrepancy
  };
  location: {
    coordinates: { lat: number; lng: number };
    directionsUrl: string; // Direct Google Maps routing link
    status: 'EXTERNAL_SOURCE_UNVERIFIED';
  };
}
```

---

## 7. Homepage Implementation

### Sequence & Rhythm
1. **Header:** Clean navigation with subtle scroll transition (`#FAF7F2` background, `border-b border-border`).
2. **Hero:** Warm, left-aligned editorial typography: *"Authentic Ethiopian Hospitality in the Heart of The Hague"*, dual CTAs (*"Reserve on TheFork"* & *"View Menu"*).
3. **The Communal Table:** Two-column feature explaining communal dining etiquette, teff injera, and the ritual of Gursha.
4. **Signature Feasts:** Highlights signature preparations (*Doro Wot*, *Veggie Bayenetu*, *Awaze Tibs*).
5. **Full Menu Section:** Clean, readable editorial menu.
6. **The Bunna Ritual:** Sensory spotlight on the traditional coffee ceremony.
7. **Reservation Section:** Branded card routing users to TheFork.
8. **Visit & Location:** Address details with prominent **"Get Directions on Google Maps"** action.
9. **Footer:** Summary of operational info, address, copyright, and legal links.

---

## 8. Menu Implementation

### Editorial Structure First
* Rather than forcing complex client-side tabs, the menu initially renders as a **clean, semantic, server-rendered editorial list** divided by category headings (`Starters`, `Meat Feasts`, `Vegetarian & Vegan`, `Shared Platters`, `Beverages`).
* Dotted leader lines connect dish names to prices.
* If final verified menu volume exceeds 25 items, category filter tabs may be activated as a progressive enhancement.
* **Allergen Notice:** Prominently placed at the base of the menu:
  > *"Dishes are traditionally served with teff injera. If you have severe allergies or dietary questions, please consult our staff."*

---

## 9. Reservation Integration (TheFork)

### Strategy
1. **Routing Focus:** The website acts as a high-converting conduit to the restaurant's existing TheFork booking system (`thefork.nl/restaurant/taste-of-ethiopia-r848136`).
2. **Neutral Wording:** Availability and confirmation timelines are determined solely by TheFork and the restaurant's configuration.
3. **No Commercial Claims:** The website makes no claims regarding booking fees or commercial terms.
4. **Integration Structure:**
   - **Baseline:** A beautifully styled reservation section featuring party size guidance and a direct button: **"Reserve Table on TheFork →"**.
   - **Widget Ready:** If the restaurant provides their official widget embed snippet from TheFork Manager, the component is architected to render the widget within an explicitly sized container (`min-h-[550px]` with `loading="lazy"`).
   - **Always Preserved Fallback:** Direct external link to TheFork is always provided below the integration.

---

## 10. Online Ordering Integration

### Strategy
1. Prominent "Order Online" CTA in navigation and hero.
2. Clicking triggers an accessible modal (`OrderingModal.tsx`) presenting the active delivery platforms:
   - **Thuisbezorgd.nl** (with external storefront link)
   - **Uber Eats** (with external storefront link)
3. Both links open in a new secure tab (`target="_blank" rel="noopener noreferrer"`).
4. URLs are managed centrally in `src/config/ordering.ts` with `EXTERNAL_SOURCE_UNVERIFIED` flags until validated.

---

## 11. Visit & Location Implementation

### Strategy
* **Physical Address:** Wagenstraat 177, 2512 AW Den Haag (Chinatown district).
* **Primary Action:** Direct **"Get Directions on Google Maps"** link opening Google Maps navigation:
  `https://www.google.com/maps/dir/?api=1&destination=Taste+of+Ethiopia+Wagenstraat+177+Den+Haag`
* **Map Strategy:** An embedded map iframe is **optional**; the high-contrast direct directions link is the required primary action to ensure zero third-party performance drag on mobile devices.
* **Hours Display:** Displayed with an explicit footnote noting kitchen closing times to account for the unverified midnight vs. 02:00 discrepancy.

---

## 12. Photography & Asset Strategy

### Asset Protocol
* **Strict Rule:** Stock or development imagery must NEVER be presented as authentic restaurant photography.
* **Development Staging:** High-quality culinary assets accurately representing traditional Ethiopian preparations (*Doro Wot*, *Shiro*, *Injera*, *Bunna*) are used strictly to validate responsive layout geometry and image performance.
* **Pre-Launch Replacement:** All staging assets will be reviewed with the restaurant owner and replaced with verified photography prior to public launch.
* **Optimization:** Rendered via `next/image` with responsive `sizes` attributes; hero image loaded with `priority`.

---

## 13. Responsive Design

* **Mobile-First Foundation:** Styles are built from mobile viewports (320px–375px) up to large desktop (1440px+).
* **Persistent Mobile Bottom Action Dock (PROTOTYPE):**
  - Evaluated as a *proposed UX pattern*.
  - Tested during the responsive QA pass on real devices.
  - If it obstructs content or feels intrusive on mobile screens, it will be omitted or made dismissible.
* **Touch Targets:** All clickable controls strictly meet or exceed **48px × 48px**.

---

## 14. Accessibility (WCAG 2.1 AA)

* **Contrast Ratios:** Primary headlines achieve 15.6:1 (AAA); body text achieves 5.4:1 (AA).
* **Keyboard Navigability:** Full tab-order navigation; visible focus rings (`focus-visible:ring-2 focus-visible:ring-berbere`).
* **Modal Accessibility:** Trapped focus, `aria-modal="true"`, `Escape` key close listener, focus restored on close.
* **No Color-Only Information:** Badges include explicit text labels (`Vegan`, `Vegetarian`, `Spicy`).
* **Motion Sensitivity:** Respects `prefers-reduced-motion: reduce`.

---

## 15. Performance & Core Web Vitals Strategy

* **Core Web Vitals Targets:**
  - **LCP (Largest Contentful Paint):** Target `< 2.0s` (Hero image preloaded via `priority`).
  - **INP (Interaction to Next Paint):** Target `< 150ms` (Minimal client JS).
  - **CLS (Cumulative Layout Shift):** Target `< 0.05` (Explicit aspect ratios on all image containers).
* **Bundle Discipline:** Zero heavy runtime animation or CSS-in-JS libraries.
* **Font Optimization:** Zero layout shift via `next/font/google` font preloading.

---

## 16. SEO & Structured Data

### Verified Structured Data Only
* **No Unverified Claims:** Do NOT publish unverified opening hours or fake reviews in Schema.org structured data.
* **No Spammy Actions:** Do NOT add `ReserveAction` unless an official automated API endpoint is verified.
* **Supported Schema (`src/app/layout.tsx`):**
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Taste of Ethiopia",
  "url": "https://tasteofethiopia.nl",
  "telephone": "+31702155717",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Wagenstraat 177",
    "addressLocality": "Den Haag",
    "postalCode": "2512 AW",
    "addressCountry": "NL"
  },
  "servesCuisine": ["Ethiopian", "African", "Vegetarian", "Vegan"]
}
```

---

## 17. Security & Privacy

### Security Headers & Content Security Policy (`next.config.mjs`)
* **Framing Policy:**
  - `X-Frame-Options: SAMEORIGIN` (prevents external clickjacking).
  - `Content-Security-Policy`:
    - `frame-ancestors 'self'` (specifies who can embed this site; belongs in HTTP headers, not meta tags).
    - `frame-src 'self' https://www.google.com` (allows embedding Google Maps; TheFork origins such as `https://module.lafourchette.com` or `https://widget.thefork.com` are added **only if the official widget is actually enabled**).
* **Script Policy:**
  - No `unsafe-eval` in production.
  - External script origins are added only when an integration genuinely requires them.
* **Privacy & Analytics Review:**
  - Any analytics (e.g. Vercel Web Analytics) must be strictly privacy-conscious and reviewed against applicable Dutch/EU regulatory requirements prior to production deployment.

---

## 18. Deployment & DNS Transition Strategy

### Infrastructure Expectation
* The deployment strategy aims to **preserve existing mail and DNS services at Mijndomein and minimize web interruption**.
* **Zero Domain Transfer:** The domain remains registered at Mijndomein under restaurant ownership.
* **DNS Transition Protocol:**
  1. Deploy application to Vercel preview (`taste-of-ethiopia.vercel.app`).
  2. Perform full QA audit on preview URL.
  3. Export current DNS records from Mijndomein control panel as a backup.
  4. Update only web-routing records:
     - Apex A record (`@`): Point to Vercel IP `76.76.21.21`.
     - Subdomain CNAME (`www`): Point to `cname.vercel-dns.com`.
  5. **LEAVE ALL MX, SPF, AND MAIL TXT RECORDS INTACT** to ensure uninterrupted delivery for `info@tasteofethiopia.nl`.

---

## 19. Testing Strategy

1. **Static Analysis:**
   - Strict TypeScript compilation (`npx tsc --noEmit`).
   - ESLint validation (`npm run lint`).
   - Production build check (`npm run build`).
2. **Functional Testing:**
   - Navigation links scroll cleanly to section anchors.
   - Ordering modal opens, traps focus, and links to external platforms.
   - TheFork button links to the verified listing.
   - Phone and directions actions trigger appropriate device handlers.
3. **Responsive & Mobile Usability Testing:**
   - Manual verification on small mobile (320px–375px), large mobile (390px–430px), tablet (768px), and desktop.
   - Evaluate whether the proposed mobile bottom dock improves or hinders usability.
4. **Accessibility Audit:**
   - Keyboard tab-cycle verification.
   - Contrast check with color-contrast analyzers.
   - Screen-reader landmark check.

---

## 20. Implementation Milestones

### Milestone 0: Workspace & Dependency Audit
* **Objective:** Inspect existing workspace and dependencies; avoid blind scaffolding.
* **Tasks:** Check current directory files; determine whether an existing package setup exists; plan deliberate dependency additions.
* **Verification:** `ls -la`.

### Milestone 1: Project Setup & Design System Tokens
* **Objective:** Initialize clean Next.js project with TypeScript and custom Tailwind design tokens from `DESIGN_BRIEF.md`.
* **Tasks:** Set up `tailwind.config.ts`, `globals.css`, and font loading (`Fraunces` + `Plus Jakarta Sans`).
* **Verification:** `npm run build`.

### Milestone 2: Typed Configuration Layer & Content Taxonomy
* **Objective:** Implement data models with explicit verification statuses.
* **Tasks:** Create `src/config/restaurant.ts`, `menu.ts`, `reservations.ts`, `ordering.ts` with `EXTERNAL_SOURCE_UNVERIFIED` flags.
* **Verification:** `npx tsc --noEmit`.

### Milestone 3: Layout & Navigation
* **Objective:** Build Header (with subtle scroll transition), MobileNav drawer, and Footer.
* **Tasks:** Implement layout components; test mobile drawer open/close.
* **Verification:** Keyboard tab navigation through header.

### Milestone 4: Editorial Homepage Sections
* **Objective:** Implement Hero, CulturalStory, SignatureFeasts, and BunnaCeremony.
* **Tasks:** Build asymmetric layouts; configure Next.js image loading with hero `priority`.
* **Verification:** Visual review across breakpoints.

### Milestone 5: Native HTML Menu Section
* **Objective:** Implement clean editorial menu with category groupings and price leader lines.
* **Tasks:** Render menu items; display dietary badges; add allergen notice.
* **Verification:** Verify readability and zero-shift layout.

### Milestone 6: Reservation & Ordering Integrations
* **Objective:** Implement TheFork routing component and accessible OrderingModal dialog.
* **Tasks:** Build TheFork button card; implement accessible delivery selector modal.
* **Verification:** Test modal focus trapping and external links.

### Milestone 7: Visit & Location Section
* **Objective:** Implement address, public transit guidance, and direct Google Maps directions action.
* **Tasks:** Build location block with directions CTA.
* **Verification:** Verify Google Maps routing URL.

### Milestone 8: Dedicated Subpages (`/menu` & `/reserve`)
* **Objective:** Implement focused deep-link routes.
* **Tasks:** Compose shared components on dedicated routes.
* **Verification:** Direct URL navigation to `/menu` and `/reserve`.

### Milestone 9: Prototype Validation & Mobile Usability Pass
* **Objective:** Test proposed mobile bottom dock; validate touch targets; perform contrast check.
* **Tasks:** Real-device responsive testing; determine whether mobile dock is retained.
* **Verification:** Usability audit report.

### Milestone 10: SEO, Security & Performance Pass
* **Objective:** Configure verified-only structured data, sitemap, robots, and security headers.
* **Tasks:** Implement `sitemap.ts`, `robots.ts`, CSP headers in `next.config.mjs`.
* **Verification:** Run Lighthouse audit.

### Milestone 11: Deployment & DNS Cutover Documentation
* **Objective:** Prepare production deployment instructions preserving Mijndomein mail records.
* **Tasks:** Compile `DEPLOYMENT.md`.
* **Verification:** Full Definition of Done audit.

---

## 21. Definition of Done

### Code Quality & Build
- [ ] `npm run build` succeeds without errors.
- [ ] `npx tsc --noEmit` passes with strict mode.
- [ ] `npm run lint` passes without warnings.
- [ ] No browser console errors.

### UX & User Journeys
- [ ] All primary journeys functional (Reservation routing, Ordering modal, Discovery, Directions).
- [ ] Clean editorial navigation works across all viewports.
- [ ] Touch targets meet or exceed 48px × 48px.

### Accessibility
- [ ] All interactive elements accessible via keyboard.
- [ ] Contrast ratios meet WCAG 2.1 AA (4.5:1 body, 3:1 large text).
- [ ] No information conveyed by color alone.
- [ ] `prefers-reduced-motion` respected.

### Content & Verification Gates
- [ ] No unverified content presented as confirmed production claims.
- [ ] Structured data contains only verified facts.
- [ ] Direct Google Maps directions link functions.

### Deployment & Domain Safety
- [ ] Vercel deployment preview verified.
- [ ] DNS guide verified to preserve Mijndomein MX/SPF records.

---

## 22. Open Decisions / Verification Gates

| Decision / Item | Current Status | Owner | Blocks Development? | Required Before Production? |
| :--- | :--- | :--- | :--- | :--- |
| **Operating Hours Discrepancy** | `EXTERNAL_SOURCE_UNVERIFIED` | Restaurant Owner | **NO** | **YES** |
| **Dine-In Menu Prices** | `EXTERNAL_SOURCE_UNVERIFIED` | Restaurant Owner | **NO** | **YES** |
| **Halal Meat Certification** | `EXTERNAL_SOURCE_UNVERIFIED` | Restaurant Owner | **NO** | **YES** |
| **Pure Teff Gluten-Free Policy** | `EXTERNAL_SOURCE_UNVERIFIED` | Restaurant Owner | **NO** | **YES** |
| **TheFork Manager Widget Preference**| `PROPOSED` (Direct link baseline) | Restaurant Owner | **NO** | **NO** |
| **Uber Eats Storefront URL** | `EXTERNAL_SOURCE_UNVERIFIED` | Restaurant Owner | **NO** | **YES** |
| **Official Photography** | `PROPOSED` (Staging assets used) | Restaurant Owner | **NO** | **NO** |
| **Social Media URLs** | `EXTERNAL_SOURCE_UNVERIFIED` | Restaurant Owner | **NO** | **YES** |
| **Mobile Bottom Action Dock** | `PROPOSED` (Requires UX validation) | UX Lead / Client | **NO** | **YES** |

---

## 23. Recommended Execution Sequence

1. **Audit:** Inspect workspace; establish base project structure without blind scaffolding.
2. **Design Tokens:** Configure Tailwind design tokens and load `Fraunces` + `Plus Jakarta Sans`.
3. **Data Layer:** Build `src/config/` and `src/types/` with explicit verification statuses.
4. **Layout:** Build `Header` (subtle border/background scroll transition) and `Footer`.
5. **Editorial Sections:** Build `Hero`, `CulturalStory`, `SignatureFeasts`, and `BunnaCeremony`.
6. **Menu:** Build clean editorial `MenuSection` with dotted leader lines and allergen note.
7. **Integrations:** Build TheFork reservation routing section and `OrderingModal`.
8. **Location:** Build `VisitSection` with direct Google Maps directions action.
9. **Subpages:** Implement `/menu` and `/reserve`.
10. **Validation:** Perform mobile usability testing on proposed mobile dock; execute a11y and performance audit.
11. **Deployment Guide:** Document zero-interruption DNS cutover plan for Mijndomein.

---

# Final Implementation Readiness

### **READY WITH CLIENT VERIFICATION GATES**

* **What can safely be implemented immediately:**
  - Complete Next.js App Router codebase, component hierarchy, and layout.
  - Custom *Editorial Warm Hospitality* Tailwind design system tokens.
  - Single-page narrative and deep-link subpages (`/menu`, `/reserve`).
  - Editorial menu layout and presentation structure.
  - TheFork direct reservation routing component.
  - Multi-provider online ordering modal dialog.
  - Visit section with verified address and direct Google Maps directions action.
  - Security headers and verified-only Schema.org structured data.

* **What must remain configurable:**
  - Opening hours and kitchen service footnotes (`restaurant.ts`).
  - In-house menu item pricing and descriptions (`menu.ts`).
  - Active delivery platform links (`ordering.ts`).
  - TheFork widget embed snippet vs. direct booking button toggle (`reservations.ts`).
  - Dietary certification badges (Halal, pure teff gluten-free).

* **What must be verified before production:**
  - Confirmation of operating hours (midnight vs. 02:00).
  - Review of menu pricing against in-house table rates.
  - Halal and allergen/gluten policies.
  - Verification of contact phone, email, and social media links.
  - Review of privacy requirements for any analytics integration.

* **What design decisions still require validation:**
  - Usability of the proposed mobile bottom action dock during real-device testing.
  - Need for client-side menu category tabs once final verified menu volume is confirmed.
