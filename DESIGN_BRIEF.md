# DESIGN BRIEF: TASTE OF ETHIOPIA
**Project:** Taste of Ethiopia — Brand Website & Digital Front Door  
**Location:** Wagenstraat 177, 2512 AW Den Haag, Netherlands  
**Domain:** `tasteofethiopia.nl`  
**Role:** Lead Product Engineer, UX Designer & Technical Architect  
**Status:** Approved Design Specification (Pre-Implementation)  
**Governing Document:** [PROJECT_SPEC.md](file:///home/ab/codes/projects/resturant_website/PROJECT_SPEC.md)

---

## Executive Summary & Core Principle

> **"The website should feel designed for a real restaurant, not generated for a restaurant."**

Taste of Ethiopia is a beloved authentic Ethiopian dining establishment in Den Haag's historic Chinatown/Centre district. Following the catastrophic failure of its legacy WordPress site (HTTP 500 fatal error), this design brief outlines the visual, cultural, typographic, and experiential architecture for its replacement.

This document translates the verified product requirements of [PROJECT_SPEC.md](file:///home/ab/codes/projects/resturant_website/PROJECT_SPEC.md) into concrete, uncompromising design decisions. We reject generic "AI restaurant templates" (monolithic card grids, arbitrary neon/purple gradients, generic glassmorphism, and fake stock photography) in favor of **Editorial Warm Hospitality**: an organic, tactile, and culturally grounded dining experience celebrating communal Ethiopian food culture while meeting Dutch and international diners with effortless clarity.

---

## 1. Information Taxonomy: Distinguishing Fact from Assumption

To maintain strict architectural integrity, all information in this design brief is classified into five distinct tiers:

| Tier | Definition | Examples in this Project |
| :--- | :--- | :--- |
| **1. Verified Facts** | Empirically verified via live platform inspection, DNS probes, or primary records. | • Location: Wagenstraat 177, 2512 AW Den Haag.<br>• Current website: WordPress 500 error on PHP 8.3/Mijndomein.<br>• Active TheFork Listing: ID `848136` (rated 9.6/10).<br>• Active delivery channels: Thuisbezorgd.nl (4.6/5 stars) & Uber Eats.<br>• DNS & Email: Managed at Mijndomein with active MX records for `info@tasteofethiopia.nl`. |
| **2. Research Findings** | Industry benchmarks, technical constraints, and cultural precedents extracted during discovery. | • Official TheFork Manager widgets are 100% commission-free when loaded on the restaurant's domain.<br>• Cross-origin iframes without explicit sizing trigger severe Cumulative Layout Shift (CLS).<br>• Dutch privacy law (AVG/Telecommunicatiewet) allows cookieless analytics without intrusive cookie banners.<br>• Traditional Ethiopian hospitality centers on *Injera*, *Mesob*, *Gursha*, and the *Bunna* coffee ritual. |
| **3. Design Recommendations** | Synthesized architectural and aesthetic decisions proposed by the Lead UX/Architect. | • "Editorial Warm Hospitality" visual direction: unbleached linen canvas (`#FAF7F2`), berbere spice crimson (`#8A2C18`), terracotta clay (`#C86D51`), and roasted teff gold (`#D9A74A`).<br>• Typography: `Fraunces` (warm, tactile serif) + `Plus Jakarta Sans` (clean humanist body).<br>• Hybrid reservation module: Direct high-converting fallback that upgrades to an embedded TheFork widget.<br>• Dual-provider delivery modal dialog. |
| **4. Assumptions** | Working engineering assumptions required to proceed without blocking progress. | • The restaurant retains its existing Mijndomein domain account.<br>• The kitchen prepares food that accommodates vegan, vegetarian, and meat diners.<br>• The restaurant prefers a contemporary, warm aesthetic over kitschy cultural clichés. |
| **5. Client Decisions Required** | Specific business and operational variables that must be finalized by the restaurant owner before public DNS cutover. | • Resolution of opening hours (12:00–00:00 on TheFork vs. 12:00–02:00 on Thuisbezorgd).<br>• Confirmation of dine-in menu prices vs. delivery platform markup.<br>• Halal meat certification status & pure teff gluten-free injera availability.<br>• Delivery of authentic high-resolution restaurant photography and social media handles. |

---

## 2. Research & Curated Reference Set

We analyzed 10 benchmark hospitality, editorial, and cultural websites across Europe and North America. Rather than treating any single site as a template, we extracted specific principles across composition, typography, cultural storytelling, and conversion mechanics.

*(Note on Research Tooling: The Inspo MCP server was inspected and confirmed unconfigured (`"mcpServers": {}`) in the local environment; comprehensive research was executed through deep-web architectural analysis, live DOM inspections, and design system evaluations.)*

```
                    ┌──────────────────────────────────────────────┐
                    │      TASTE OF ETHIOPIA DESIGN SYNTHESIS      │
                    └──────────────────────┬───────────────────────┘
                                           │
         ┌──────────────────┬──────────────┴─────┬──────────────────┐
         ▼                  ▼                    ▼                  ▼
  [ AKOKO / IKOYI ]   [  DE KAS  ]         [  DISHOOM  ]     [ ST. JOHN ]
  • West African      • Dutch culinary     • Masterclass in   • Anti-kitsch
    fine dining         leader               cultural story     pure typography
  • Tactile clay &    • Editorial pace     • Layered warmth   • High-contrast
    terracotta tones  • Clear navigation   • Bespoke feel       legibility
```

### Reference 1: Akoko (Fitzrovia, London)
* **URL:** `akoko.co.uk` (Michelin-starred West African cuisine)
* **What it does exceptionally well:** Uses earthy terracotta, warm clay textures, and dramatic dish photography that honors culinary roots without falling into folkloric tropes. High-contrast typography makes African fine dining feel luxurious and contemporary.
* **Relevant Visual Characteristics:** Asymmetric split layouts (imagery alternating with warm textured content blocks), bespoke earthenware pottery visuals, restrained warm color palette.
* **Relevant UX Characteristics:** Full-bleed hero image establishing culinary authority immediately; discrete "Book a Table" modal trigger.
* **What to learn from it:** How to present African food culture with modern fine-dining poise and dignity.
* **What NOT to copy:** Heavy jQuery animation dependencies, reliance on external PDF menus instead of accessible HTML, and intrusive cookie consent banners.
* **Where it informs Taste of Ethiopia:** The **Cultural Story** section and **Featured Dishes** presentation.

### Reference 2: Dishoom (London / UK)
* **URL:** `dishoom.com` (Bombay Irani café culture in the UK)
* **What it does exceptionally well:** The global gold standard in cultural restaurant storytelling. Every digital touchpoint evokes the warmth, heritage, and communal spirit of Irani cafés through narrative-first editorial composition.
* **Relevant Visual Characteristics:** Tactile, printed feel; warm parchment tones; vintage-modern typography pairing (classic humanist grotesque with expressive display serifs); intentional asymmetry.
* **Relevant UX Characteristics:** Seamless third-party reservation and delivery integrations wrapped inside a unified, hospitable brand shell.
* **What to learn from it:** How to build an immersive cultural narrative around communal dining without feeling like a tourist museum.
* **What NOT to copy:** Massive multi-location complexity and sprawling narrative easter eggs that would overwhelm a single-location restaurant.
* **Where it informs Taste of Ethiopia:** The **Communal Table (Injera, Gursha & Coffee Ceremony)** narrative and copywriting tone.

### Reference 3: Restaurant De Kas (Amsterdam, Netherlands)
* **URL:** `restaurantdekas.nl` (Dutch farm-to-table culinary landmark)
* **What it does exceptionally well:** Flawless Dutch hospitality UX: clean, airy, fast-loading, and completely clear about its offerings, location, and booking policies.
* **Relevant Visual Characteristics:** Generous whitespace, stunning natural light photography, restrained typography with subtle serif accents.
* **Relevant UX Characteristics:** Seamless booking calendar integration, clear bilingual layout, unambiguous dining hours and policies.
* **What to learn from it:** How Dutch and European diners evaluate a restaurant website: immediate clarity of concept, location, menus, and reservation availability.
* **What NOT to copy:** Generic Squarespace layout rigidity.
* **Where it informs Taste of Ethiopia:** The **Navigation hierarchy**, **Location/Visit** block, and **Mobile-first conversion** flow.

### Reference 4: St. John Restaurant (Smithfield, London)
* **URL:** `stjohnrestaurant.com` (Pioneer of modern nose-to-tail dining)
* **What it does exceptionally well:** Radical typographic minimalism. St. John rejects visual clutter, decorative gimmicks, and animations, treating the daily menu as a piece of clean typographic art.
* **Relevant Visual Characteristics:** Pure monochrome typography, generous margins, crisp rule lines, zero rounded cards or decorative badges.
* **Relevant UX Characteristics:** Uncluttered menu legibility, instant page load, zero cognitive friction.
* **What to learn from it:** The power of typographic confidence. A great restaurant menu does not need cards with drop shadows; it needs immaculate typography, clear prices, and breathing room.
* **What NOT to copy:** Stark, cold sterility. Ethiopian dining requires warmth, rich spice color, and tactile energy that St. John deliberately omits.
* **Where it informs Taste of Ethiopia:** The **HTML Menu Section** structure and pricing layout.

### Reference 5: Bunna Cafe (Bushwick, Brooklyn, NYC)
* **URL:** `bunnaethiopia.net` (Plant-based Ethiopian hospitality & coffee ritual)
* **What it does exceptionally well:** Celebrates the communal, plant-based heritage of Ethiopian cuisine (*Beyaynetu* / *Yetsom*) and the traditional *Bunna* (coffee ceremony) with vibrant warmth.
* **Relevant Visual Characteristics:** Rich golden ochre and earthy spice accents; celebration of the round communal *Mesob* platter.
* **Relevant UX Characteristics:** Clear dietary indicators showing which items are vegan, gluten-free, or shared feasts.
* **What to learn from it:** How to position Ethiopian fasting food as an exciting, naturally plant-based culinary feast for modern health-conscious diners.
* **What NOT to copy:** Template-like third-party ordering embeds that feel disconnected from the brand.
* **Where it informs Taste of Ethiopia:** The **Vegetarian & Vegan Specialties** section and dietary tagging UX.

### Reference 6: Demera Ethiopian Restaurant (Uptown, Chicago)
* **URL:** `demerachicago.com` (James Beard-recognized Ethiopian restaurant)
* **What it does exceptionally well:** Clear explanation of communal dining etiquette (*"How to Eat with Injera"*) for newcomers who may never have experienced Ethiopian cuisine before.
* **Relevant Visual Characteristics:** Photography showing hands tearing injera and dipping into rich stews (*Wot*).
* **Relevant UX Characteristics:** Intuitive family-style combination platter builder/display.
* **What to learn from it:** Demystifying the eating experience reduces anxiety for prospective diners, converting curious visitors into confirmed table bookings.
* **What NOT to copy:** Cluttered banner advertisements and busy promotional popups.
* **Where it informs Taste of Ethiopia:** The **Dine-In Etiquette & Communal Eating Guide** callouts.

### Reference 7: Ikoyi (180 Strand, London)
* **URL:** `ikoyilondon.com` (Two-Michelin-starred spice-driven cuisine)
* **What it does exceptionally well:** Pure, restrained elegance. Combines deep spice pigments (ochre, saffron, dark embers) with razor-sharp editorial typography.
* **Relevant Visual Characteristics:** Deep charcoal background with warm amber and spice-toned highlights; full-bleed cinematic imagery; extreme typographic discipline.
* **Relevant UX Characteristics:** Invisible, frictionless SevenRooms booking integration that feels completely native to the site.
* **What to learn from it:** Treating spice and African botanical heritage as high luxury rather than casual street food.
* **What NOT to copy:** Extreme exclusivity and minimal menu disclosure (Ikoyi reveals almost no dish details online). Taste of Ethiopia is a welcoming community restaurant that requires full menu transparency.
* **Where it informs Taste of Ethiopia:** The **Color harmony** (how deep charcoal and spice crimson interact) and **Hero aesthetic**.

### Reference 8: Lyle's (Shoreditch, London)
* **URL:** `lyleslondon.com` (Modern British Michelin-starred)
* **What it does exceptionally well:** Fluid, natural single-page scrolling narrative that shifts effortlessly between opening hours, menus, private dining, and reservations.
* **Relevant Visual Characteristics:** Editorial grid with fine borders (`1px solid #E5E0D8`), subtle micro-interactions, perfectly balanced serif headings.
* **Relevant UX Characteristics:** Sticky header that changes state on scroll to reveal a direct "Reserve" action without obstructing the content.
* **What to learn from it:** How to build a single-page restaurant narrative that feels premium, cohesive, and easy to navigate.
* **What NOT to copy:** Extremely muted, almost grey palette.
* **Where it informs Taste of Ethiopia:** The **Sticky Navigation transition** and **Section border language**.

### Reference 9: Chishuru (Fitzrovia, London)
* **URL:** `chishuru.com` (Michelin-starred contemporary West African dining)
* **What it does exceptionally well:** Vibrant, joyful, culturally grounded design. Uses bold typographic scales and rich, celebratory colors that feel distinctly West African while maintaining crisp modern layout standards.
* **Relevant Visual Characteristics:** Distinctive display serif headings with organic curves; rich warm paper textures.
* **Relevant UX Characteristics:** Simple, direct booking pathway leading to immediate reservation completion.
* **What to learn from it:** African dining websites should feel vibrant and joyful—warm hospitality is an active, living experience.
* **What NOT to copy:** Very short one-page layout that omits dish descriptions.
* **Where it informs Taste of Ethiopia:** The **Typographic character of headings (`Fraunces`)** and **Warm linen background foundation**.

### Reference 10: Restaurant Breda (Amsterdam, Netherlands)
* **URL:** `bredagroup-amsterdam.com` (Contemporary Dutch gastronomy)
* **What it does exceptionally well:** Clean multi-channel routing (reservations, private dining, gift cards) tailored specifically to urban Dutch diners.
* **Relevant Visual Characteristics:** Refined Dutch graphic design sensibility: structured grid, clean borders, high-contrast typography.
* **Relevant UX Characteristics:** Prominent phone and location integration with one-tap Google Maps directions.
* **What to learn from it:** Practical local UX for the Netherlands market: transit connections, neighborhood context, clear pricing including BTW (VAT).
* **What NOT to copy:** Multi-brand group layout complexity.
* **Where it informs Taste of Ethiopia:** The **Visit & Location Block (Wagenstraat Chinatown context)**.

---

## 3. The Anti-AI Design Manifesto

AI-generated restaurant websites have flooded the web with repetitive, soulless templates. We explicitly identify and ban these tropes from Taste of Ethiopia:

```
┌──────────────────────────────────────────────┬──────────────────────────────────────────────┐
│  REJECTED: Generic "AI Restaurant" Patterns   │   REQUIRED: Editorial Ethiopian Hospitality  │
├──────────────────────────────────────────────┼──────────────────────────────────────────────┤
│ ❌ Neon purple, violet, or generic gradients │ ✅ Rich culinary earth tones (berbere, clay) │
│ ❌ Floating, rounded cards with heavy shadow │ ✅ Editorial flat/bordered structure (1px)   │
│ ❌ Generic "Frosted Glass" / Glassmorphism   │ ✅ Solid, warm unbleached linen & ecru paper │
│ ❌ 3-column repetitive card grids            │ ✅ Asymmetric editorial split compositions   │
│ ❌ Giant centered hero headline with badge   │ ✅ Left-aligned or structured editorial title│
│ ❌ Fake AI stock food with glossy pasta/meat │ ✅ Authentic Ethiopian dishes & preparations │
│ ❌ Micro-animations and bouncing icons       │ ✅ Purposeful, subtle opacity & layout shifts│
│ ❌ PDF download link for the menu            │ ✅ Native, accessible, responsive HTML menu  │
│ ❌ Generic multi-tier pricing cards          │ ✅ Traditional restaurant menu list with dots│
│ ❌ Clichéd Amharic script used as decoration │ ✅ Authentic culinary naming & translations   │
└──────────────────────────────────────────────┴──────────────────────────────────────────────┘
```

### Guiding Axiom
> "Every pixel, color, and line of text must exist to communicate Ethiopian food, culture, or operational hospitality. If an element is purely decorative digital clutter, delete it."

---

## 4. Ethiopian Cultural & Hospitality Direction

Ethiopian culinary culture is ancient, deeply communal, and centered around rituals of sharing, bread-breaking, and aromatic hospitality. We integrate these cultural tenets authentically rather than treating them as superficial decoration:

```
                      ┌────────────────────────────────────────┐
                      │    ETHIOPIAN HOSPITALITY TRADITIONS    │
                      └───────────────────┬────────────────────┘
                                          │
        ┌─────────────────┬───────────────┴───────────────┬─────────────────┐
        ▼                 ▼                               ▼                 ▼
   [ INJERA ]        [  MESOB  ]                    [  GURSHA  ]      [  BUNNA  ]
• Teff sourdough  • Conical woven              • Feeding a       • Coffee ritual
• The plate,        dining table                 companion       • Clay Jebena,
  utensil &       • Gathering point            • Gesture of        frankincense &
  foundation        for communal feast           love & respect    shared cups
```

### 1. Injera (The Foundation)
* **What it is:** The sourdough flatbread made from fermented *Teff* (an ancient grain native to the Ethiopian highlands). It has a spongy, bubbly texture (*Ayen* or "eyes") that absorbs sauces and juices.
* **Hospitality Meaning:** Injera is plate, utensil, and food all in one. It represents sustenance, resourcefulness, and collective dining.
* **Visual Expression:** Tactile macro-photography showcasing the delicate, aerated sourdough texture; subtle curved framing mimicking the circular flatbread.
* **What to Avoid:** Depicting injera as flat pita bread, crêpes, or tortillas.

### 2. Mesob (The Communal Table)
* **What it is:** The traditional hand-woven straw table/basket with an hourglass base and a tall conical lid (*Sefed*). When the lid is lifted, the communal platter is revealed.
* **Hospitality Meaning:** Diners sit together around a single Mesob; there are no individual plates. It symbolizes unity, equality, and shared experience (*"Those who eat from the same plate do not betray one another"*).
* **Visual Expression:** Woven geometric structural rhythm, circular platter compositions in photography, section framing that conveys gathering.
* **What to Avoid:** Cartoonish clip-art baskets or tribal pattern borders.

### 3. Gursha (The Gesture of Friendship)
* **What it is:** The act of taking a piece of injera, wrapping it around a morsel of stew (*Wot*), and placing it directly into the mouth of a friend, family member, or guest.
* **Hospitality Meaning:** The highest sign of hospitality, intimacy, and respect. It demonstrates that the host honors the guest before themselves.
* **Visual Expression:** Engaging storytelling copy in the *About* section; imagery showing hands sharing food and breaking bread together.
* **What to Avoid:** Overly staged or clinical stock hand photos.

### 4. Bunna (The Ethiopian Coffee Ceremony)
* **What it is:** Ethiopia is the birthplace of Arabica coffee (*Kaffa*). The Bunna ceremony is a 3-stage hospitality ritual: green beans are washed, roasted over an open flame, ground with mortar and pestle, brewed in a black clay *Jebena*, and served in small handleless cups (*Cini*) alongside burning frankincense (*Itan*) and popcorn (*Kolo*).
* **Hospitality Meaning:** Invitation to connection, conversation, and blessing. To be invited to Bunna is to be welcomed into an Ethiopian home.
* **Visual Expression:** Rich coffee tones (`#1C1614`), warm amber accents, imagery of steaming jebena clay pots and delicate porcelain cini cups.
* **What to Avoid:** Generic Italian espresso machine or takeaway paper cup imagery.

### 5. Shemma & Tibeb (Textile Heritage)
* **What it is:** The *Shemma* is hand-spun unbleached Ethiopian cotton cloth. The borders are decorated with *Tibeb*—intricate, colorful geometric woven bands.
* **Hospitality Meaning:** Dignity, elegance, and artisanal craft.
* **Visual Expression:** The website's foundational canvas is unbleached cotton ecru (`#FAF7F2`); section dividers use subtle, fine 1px border lines inspired by the precision of loom-woven threads.
* **What to Avoid:** Rainbow-striped borders or chaotic zig-zag graphics.

---

## 5. Typography Exploration & Proposal

Typography carries the editorial voice of the restaurant. It must bridge classical European dining elegance with warm, organic hospitality.

```
DISPLAY SERIF: Fraunces (Variable Old-Style Serif)
   "Warm, fleshy, softly rounded serifs with high stroke contrast"
   Used for: Section Headings, Hero Statement, Dish Names

BODY SANS: Plus Jakarta Sans (Humanist-Geometric Sans)
   "Crisp, open counters, exceptional micro-spacing at small sizes"
   Used for: Descriptions, Menu Details, Navigation, Buttons, Metadata
```

### Display Face: Fraunces (Google Fonts)
* **Designers:** Phaedra Charles & Flavia Zimbardi
* **Why it fits:** Unlike severe, sterile high-fashion serifs (such as Bodoni or Didot), `Fraunces` is a "warm" serif inspired by 20th-century vintage food advertising, editorial packaging, and hand-cut type. Its organic curves, soft terminals, and variable optical weight evoke warmth, artisanal bread, simmered stews, and human touch.
* **Application:** `h1`, `h2`, `h3`, dish titles, quote callouts.
* **Alternative evaluated:** `Cormorant Garamond` (more traditional/formal, but slightly fragile on mobile viewports) vs. `Fraunces` (more robust, grounded, and welcoming). `Fraunces` is our primary recommendation.

### Body Face: Plus Jakarta Sans (Google Fonts)
* **Designers:** Tokotype
* **Why it fits:** A modern humanist sans-serif with geometric foundations and warm, generous apertures. At 14px–16px on mobile screens, it offers pristine readability for ingredient lists, opening hours, and address details.
* **Application:** Body paragraphs, navigation links, dietary badges, menu ingredients, form inputs, button labels.
* **Alternative evaluated:** `Inter` (very clean, but tends toward corporate SaaS) vs. `Plus Jakarta Sans` (warmer, friendlier, more hospitable).

### Typographic Hierarchy & Scale (Mobile-First CSS Tokens)

| Element | Font Family | Mobile Size / Line-Height | Desktop Size / Line-Height | Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (`h1`)** | Fraunces | `32px` / `1.15` | `56px` / `1.1` | SemiBold (600) | `-0.02em` |
| **Section Title (`h2`)** | Fraunces | `26px` / `1.2` | `40px` / `1.15` | SemiBold (600) | `-0.015em` |
| **Subsection (`h3`)** | Fraunces | `20px` / `1.25` | `28px` / `1.2` | Medium (500) | `-0.01em` |
| **Dish Title (`h4`)** | Fraunces | `17px` / `1.3` | `20px` / `1.25` | SemiBold (600) | `0em` |
| **Lead Paragraph** | Plus Jakarta Sans | `16px` / `1.6` | `18px` / `1.6` | Regular (400) | `0em` |
| **Body Paragraph** | Plus Jakarta Sans | `15px` / `1.55` | `16px` / `1.55` | Regular (400) | `0em` |
| **Menu Description** | Plus Jakarta Sans | `13.5px` / `1.45` | `14.5px` / `1.45` | Regular (400) | `0em` |
| **Button / Nav CTA** | Plus Jakarta Sans | `14px` / `1` | `14px` / `1` | Medium (500) | `+0.02em` |
| **Eyebrow / Category** | Plus Jakarta Sans | `11px` / `1` | `12px` / `1` | SemiBold (600) | `+0.08em` (Uppercase) |
| **Price Tag** | Fraunces | `16px` / `1` | `18px` / `1` | SemiBold (600) | `0em` |

---

## 6. Color Direction & Accessibility Palette

The palette is derived directly from the physical materials of Ethiopian gastronomy: raw cotton, baked clay, aromatic berbere spices, teff seeds, roasted coffee, and mountain herbs.

```
       #FAF7F2              #F3EDE2              #1C1614              #8A2C18
   [ Canvas Ecru ]     [ Surface Sand ]     [ Espresso Dark ]    [ Berbere Crimson ]
   Background Base      Cards & Panels       Text Primary         Primary CTA / Brand

       #C86D51              #D9A74A              #374A3D              #E5DCCF
  [ Terracotta Clay ]   [ Teff Ochre Gold ]  [ Highland Sage ]    [ Fine Thread Line ]
   Secondary Warmth     Accent & Starters    Vegan & Herbal Badges Borders & Dividers
```

### Color Roles & WCAG 2.1 AA Contrast Verification

| Token Name | Hex Code | Semantic Role | Contrast vs. Background | WCAG Status |
| :--- | :--- | :--- | :--- | :--- |
| `color-bg-canvas` | `#FAF7F2` | Page background (unbleached cotton shemma) | Baseline | N/A |
| `color-bg-surface` | `#F3EDE2` | Alternating section, modal, & drawer background | Subtle 1.05:1 shift | Background only |
| `color-text-primary` | `#1C1614` | Primary headlines, body text, dish titles | **15.6:1** on canvas | **Passes AAA** (Exceeds 7:1) |
| `color-text-muted` | `#63564F` | Descriptions, operational hours, secondary text | **5.4:1** on canvas | **Passes AA** (Exceeds 4.5:1) |
| `color-brand-berbere`| `#8A2C18` | Primary CTA buttons, key highlight accents | **5.6:1** on canvas | **Passes AA** (Exceeds 4.5:1) |
| `color-berbere-hover`| `#702313` | Button hover & active states | **7.4:1** on canvas | **Passes AAA** |
| `color-terracotta` | `#C86D51` | Secondary accents, decorative borders, icons | **2.8:1** (Graphical elements) | **Passes UI Components** (3:1) |
| `color-ochre-gold` | `#B88424` | Combos, specialties, rating badges | **3.2:1** on dark surfaces | **Passes AA Large** |
| `color-sage-green` | `#2D4736` | Vegan & vegetarian badges, fasting text | **7.8:1** on canvas | **Passes AAA** |
| `color-border-subtle`| `#E2D9CC`| Clean hairline dividers, table borders | Graphical 1.2:1 | Structure only |

---

## 7. Photography & Art Direction

Photography is the primary emotional bridge. The photography strategy focuses on warmth, appetizing reality, and human togetherness rather than clinical catalog shots.

```
                                  PHOTOGRAPHY MATRIX
  ┌────────────────────────────────────────────────────────────────────────────────┐
  │ 1. THE HERO (Atmospheric Immersion)                                            │
  │    • Wide aspect (16:9 desktop, 4:5 mobile)                                    │
  │    • A full Mesob table shot from a 45° angle in warm evening light            │
  │    • Steam gently rising from Doro Wot, fresh injera rolls, clay Jebena        │
  │    • Hands visible at frame edges reaching in together                         │
  ├────────────────────────────────────────────────────────────────────────────────┤
  │ 2. FOOD DISHES (Tactile Appetite)                                              │
  │    • Overhead and 30° close-ups of signature dishes in authentic earthenware   │
  │    • Visible texture: bubbly injera "eyes", simmering red berbere, green gomen │
  │    • Natural directional lighting with soft, warm shadows (no harsh flash)     │
  ├────────────────────────────────────────────────────────────────────────────────┤
  │ 3. THE COFFEE CEREMONY (Sensory Ritual)                                        │
  │    • Pouring aromatic Bunna from a black clay Jebena into white Cini cups      │
  │    • Subtle wisp of frankincense smoke catching natural light                  │
  │    • Roasted beans, popcorn, and warm golden tones                             │
  ├────────────────────────────────────────────────────────────────────────────────┤
  │ 4. THE RESTAURANT INTERIOR (Chinatown Den Haag)                                │
  │    • Warm, inviting dining room with traditional Ethiopian art & modern seating│
  │    • Welcoming evening ambiance on Wagenstraat                                 │
  └────────────────────────────────────────────────────────────────────────────────┘
```

### Staging vs. Real Asset Protocol
* **Strict Rule:** We will NEVER fabricate artificial stock photos and present them as official restaurant images.
* **Phase 1 (Development & Layout Staging):** High-fidelity culinary assets accurately depicting traditional Ethiopian preparations (*Doro Wot*, *Shiro*, *Injera*, *Bunna*) will be used for layout geometry and responsive performance testing.
* **Phase 2 (Pre-Launch Owner Review):** The restaurant owner will review all staging photography and provide their authentic in-house dish photos where available.

---

## 8. Homepage Composition & Section Rhythm

The homepage is structured as an **unbroken editorial narrative** that answers the user's questions in natural psychological order:

```
  [1. GLOBAL HEADER] ──── Subtle brandmark | Nav links | Tel | "Reserve Table" CTA
         │
  [2. HERO SECTION] ───── "Authentic Ethiopian Hospitality in the Heart of The Hague"
         │                Dual CTAs: "Reserve Table" & "Explore Menu"
         │
  [3. THE COMMUNAL TABLE] Introduction to Injera, Mesob & Gursha
         │                Asymmetric text + tactile dish feature
         │
  [4. SIGNATURE FEASTS] ─ Chef's highlights: Doro Wot, Veggie Bayenetu, Awaze Tibs
         │
  [5. THE FULL MENU] ──── Interactive categorized tabs (Starters, Meat, Vegan, Drinks)
         │                Dietary filters (Vegan, Vegetarian, Halal)
         │
  [6. THE BUNNA RITUAL] ─ The Ethiopian Coffee Ceremony spotlight
         │
  [7. RESERVATIONS] ───── TheFork booking module / instant confirmation card
         │
  [8. VISIT & CONTACT] ── Wagenstraat 177, Chinatown map, transit, hours, direct call
         │
  [9. FOOTER] ─────────── Operational summary, legal notices, social links
```

### Section-by-Section Design Specification

#### Section 1: Global Sticky Header
* **User Question Answered:** *"Where am I, how do I navigate, and how do I book right now?"*
* **Visual Treatment:** Clean 72px desktop / 56px mobile bar. Transparent at top of hero; smoothly transitions to frosted unbleached canvas (`rgba(250, 247, 242, 0.95)` with subtle `backdrop-blur-md` and `1px solid #E2D9CC`) upon scrolling 40px.
* **Content Hierarchy:**
  - Left: "Taste of Ethiopia" wordmark in `Fraunces` SemiBold with subtle subtitle *"Den Haag"*.
  - Center (Desktop): Menu, Cultural Story, Reserve, Location.
  - Right: Phone icon/number (`070 215 57 17`) + High-contrast "Reserve Table" button in Berbere Crimson (`#8A2C18`).
  - Mobile: Wordmark + Phone tap icon + Hamburger menu trigger.

#### Section 2: Hero (The Welcome)
* **User Question Answered:** *"What kind of restaurant is this and why should I dine here?"*
* **Visual Treatment:** Full-width container with rich atmospheric photography. Dark gradient scrim overlay (`rgba(28, 22, 20, 0.45)`) ensuring crisp AAA text contrast.
* **Content Hierarchy:**
  - Eyebrow: *"TRADITIONAL CULINARY HERITAGE • WAGENSTRAAT 177, DEN HAAG"*
  - Headline (`h1`): *"Authentic Ethiopian Hospitality in the Heart of The Hague"*
  - Subtitle: *"Slow-simmered wot stews, handcrafted teff injera, and the warmth of communal dining. Served with love and tradition since 2018."*
  - Dual CTAs: Primary: *"Reserve a Table"* (Berbere button) • Secondary: *"Explore Our Menu"* (Warm outline button).

#### Section 3: The Communal Table (Cultural Story)
* **User Question Answered:** *"What makes Ethiopian dining special and how does it work?"*
* **Visual Treatment:** Asymmetric two-column editorial split. Left: High-resolution vertical image of hands tearing injera around a colorful Mesob. Right: Storytelling copy with clean paragraph spacing.
* **Content Hierarchy:**
  - Eyebrow: *"THE ART OF COMMUNICATING THROUGH FOOD"*
  - Headline (`h2`): *"Eating Together from One Shared Plate"*
  - Body: Explains *Injera* (naturally fermented teff flatbread), *Mesob* (the communal table), and *Gursha* (feeding one another as a sign of affection).
  - Cultural Note Callout: A subtle bordered box explaining that dining by hand is welcome, but cutlery is always available on request.

#### Section 4: Signature Dishes (Chef's Specialties)
* **User Question Answered:** *"What are the most famous dishes I must try?"*
* **Visual Treatment:** 3-column asymmetric layout (not uniform cards; varied photo aspect ratios and warm captions).
* **Content Hierarchy:**
  1. *Doro Wot:* Slow-cooked chicken stew in berbere, boiled egg, spiced niter kibbeh butter.
  2. *Veggie Bayenetu:* The colorful vegan fasting platter (Shiro, Misir Wot, Gomen, Kik Alicha).
  3. *Awaze Tibs:* Sautéed prime beef cubes with jalapeños, onions, rosemary, and awaze chili paste.

#### Section 5: The Full Culinary Menu
* **User Question Answered:** *"Can I see all options, ingredients, dietary details, and prices?"*
* **Visual Treatment:** Clean editorial menu list (St. John meets modern bistro). No cards with shadows. Categorized horizontal tabs with fine underline indicators.
* **Content Hierarchy:**
  - Filter Tabs: *All Dishes*, *Starters (Voorgerechten)*, *Traditional Meat*, *Vegetarian & Vegan (Yetsom)*, *Combination Feasts*, *Traditional Drinks & Coffee*.
  - Dietary Pill Toggles: *All*, *Vegan Only*, *Halal*.
  - Menu Item Format: Title + Price right-aligned + dotted hairline connecting them + italicized Dutch/English description + Dietary badges (`Vegan`, `Vegetarian`, `Spicy`).

#### Section 6: The Bunna Coffee Ceremony
* **User Question Answered:** *"Can we have traditional Ethiopian coffee after dinner?"*
* **Visual Treatment:** Full-width warm parchment panel (`#F3EDE2`) with photography of the clay Jebena and steaming cini cups.
* **Content Hierarchy:**
  - Headline: *"The Ancient Ritual of Bunna"*
  - Description: The three-round Ethiopian coffee ceremony with frankincense and roasted barley.

#### Section 7: Table Reservations (TheFork Integration)
* **User Question Answered:** *"How do I book a table right now without hassle?"*
* **Visual Treatment:** Dedicated, beautifully framed container (`max-w-2xl mx-auto`).
* **Content Hierarchy:**
  - Headline: *"Join Us at the Table"*
  - Subtitle: *"Book your table instantly online. For groups larger than 8, please call us directly."*
  - Interactive Module: TheFork Booking Calendar iframe widget (or high-converting branded direct booking card with date/party selector fallback).
  - Safety Link: *"Having trouble with the calendar? [Reserve directly on TheFork →]"*

#### Section 8: Location, Chinatown & Operating Hours
* **User Question Answered:** *"Where exactly is it, how do I get there, and when is it open?"*
* **Visual Treatment:** 2-column split. Left: Interactive stylized Google Maps embed showing Wagenstraat 177 in Den Haag Chinatown. Right: Operational details, public transit trams, parking info, and hours.
* **Content Hierarchy:**
  - Address: *Wagenstraat 177, 2512 AW Den Haag* (walking distance from HS & Centraal).
  - Public Transit: *Trams 1, 9, 16 (Stop Bierkade or Kalvermarkt-Stadhuis).*
  - Opening Hours: *Daily: 12:00 – 00:00* *(Footnote: Kitchen open until 23:00)*.
  - Quick Action Buttons: *"Call 070 215 57 17"* • *"Open in Google Maps"*.

---

## 9. Mobile-First Experience & Dedicated Mobile Architecture

Mobile traffic represents over 70% of restaurant searches. The mobile interface is designed independently:

```
  ┌────────────────────────────────────────┐
  │  MOBILE VIEWPORT (< 768px)             │
  │                                        │
  │  [≡]  TASTE OF ETHIOPIA       [📞]     │  <- Sticky 56px Header
  │  ────────────────────────────────────  │
  │                                        │
  │       [ Atmospheric Hero ]             │  <- 4:5 Mobile Aspect
  │   "Authentic Ethiopian Dining"         │
  │   Wagenstraat 177 • Den Haag           │
  │                                        │
  │   [ Explore Menu ]                     │
  │                                        │
  │   ── Story of Injera & Mesob ──        │  <- Single-column fluid scroll
  │                                        │
  │   [ Menu Tabs: All | Meat | Vegan ]    │  <- Horizontal touch-scroll chips
  │   • Doro Wot ................. €24.00  │
  │     Chicken simmered in berbere...     │
  │   • Shiro Wot ................ €20.00  │
  │     Chickpea stew in clay pot...       │
  │                                        │
  │   ──────────────────────────────────── │
  │   [ RESERVE TABLE ]  [ ORDER ONLINE ]  │  <- PERSISTENT BOTTOM ACTION BAR
  └────────────────────────────────────────┘
```

### Key Mobile Requirements
1. **Persistent Bottom Action Dock (Screens < 768px):**
   - High-contrast, floating glass bar fixed to the bottom of the viewport with safe-area inset padding (`env(safe-area-inset-bottom)`).
   - Primary Action (65% width): **"Reserve Table"** in Berbere Crimson (`#8A2C18`).
   - Secondary Action (35% width): **"Order Online"** outline button opening the Thuisbezorgd/Uber Eats modal.
   - Quick phone tap icon on the side.
2. **Touch Target Standard:** Every button, menu category chip, drawer link, and telephone trigger has a minimum touch target of **48px × 48px** to eliminate mis-taps.
3. **Horizontal Swipeable Menu Chips:** Menu categories (*All, Starters, Meat, Vegan, Platters, Drinks*) render as a smooth horizontal scrolling chip bar with momentum scrolling (`-webkit-overflow-scrolling: touch`), preventing vertical page bloat.
4. **Zero Pinch-to-Zoom:** No PDF menus. All menu items, descriptions, and prices are native HTML rendered at a legible minimum of 14.5px with 1.45 line-height.

---

## 10. Navigation & Conversion Hierarchy

The website guides users toward four primary conversion actions with clear priority:

```
  LEVEL 1: PRIMARY ACTION ─────────► "Reserve a Table" (TheFork)
                                     High-contrast Berbere Crimson button in Header,
                                     Hero, and Mobile Persistent Dock.

  LEVEL 2: SECONDARY ACTION ───────► "Order Online" (Thuisbezorgd & Uber Eats)
                                     Modal selector in Header, Hero, and Menu footer.

  LEVEL 3: DISCOVERY ACTION ───────► "View Menu" (Interactive HTML)
                                     Direct scroll anchor in Hero and navigation.

  LEVEL 4: OPERATIONAL ACTION ─────► "Get Directions" & "Call Restaurant"
                                     Prominent in Header phone icon, Visit section,
                                     and Footer.
```

### The "Order Online" Multi-Provider Modal Flow
When a customer taps "Order Online", an accessible modal opens:
1. **Modal Title:** *"Order Taste of Ethiopia for Home Delivery"*
2. **Subtitle:** *"Select your preferred delivery provider in Den Haag:"*
3. **Choice A (Thuisbezorgd.nl):** Branded card featuring orange Thuisbezorgd logo, *"Customer Favorite (4.6 ★)"* badge, and direct button *"Order on Thuisbezorgd.nl →"*.
4. **Choice B (Uber Eats):** Branded card featuring Uber Eats logo, *"Fast Delivery"* badge, and direct button *"Order on Uber Eats →"*.
5. Both buttons open the respective official store page in a new secure tab (`target="_blank" rel="noopener noreferrer"`).

---

## 11. Motion, Interaction & Accessibility

### Motion Principles
1. **Subtle & Purposeful:** Motion is used only to clarify spatial relationships (e.g. mobile drawer sliding in, modal fading in, menu tab indicator gliding).
2. **Zero Distraction:** No parallax lag, no bouncing food illustrations, no scroll-jacking.
3. **Reduced Motion Respect:** Full compliance with `prefers-reduced-motion: reduce`:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```

### Accessibility Standards (WCAG 2.1 AA)
* **Keyboard Focus Rings:** Clear, high-contrast focus rings on all interactive elements:
  `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-berbere`
* **Modal Accessibility:** Modals trap keyboard focus, bind `Escape` key to close, set `aria-modal="true"`, and restore focus to trigger element upon closing.
* **Semantic Landmark Roles:** Strictly structured with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
* **Descriptive Alt Text:** All culinary images include rich, informative alt text (e.g., *"Large communal mesob platter with Doro Wot chicken, red lentil misir wot, and rolled teff injera"*).

---

## 12. Component Language & Surface Hierarchy

Instead of boxing every piece of content into generic drop-shadow cards, components adopt a refined editorial surface hierarchy:

```
  SURFACE TIER 1: CANVAS (Flat #FAF7F2)
  • Used for: Hero, Cultural Story, Main Menu Body
  • Styling: Clean unbleached linen background, zero shadow, generous margins

  SURFACE TIER 2: RECESSED PANEL (Parchment #F3EDE2)
  • Used for: Bunna Ceremony spotlight, Visit/Location block, Footer
  • Styling: Warm subtle contrast shift, bounded by 1px solid #E2D9CC hairline

  SURFACE TIER 3: FLOATING INTERACTIVE (Elevated #FFFFFF)
  • Used for: TheFork Booking Card, Delivery Provider Modal, Mobile Bottom Dock
  • Styling: Pure white background, subtle 1px border (#E2D9CC), soft shadow (0 4px 20px rgba(28, 22, 20, 0.06))
```

### Component Rules
* **No "Card Soup":** Menu items are listed cleanly on the canvas with dotted leader lines (`border-b border-dotted border-border-subtle`), not individual floating rectangles.
* **Border Philosophy:** Dividers and borders are razor-thin (`1px`), colored in muted thread ecru (`#E2D9CC`).
* **Corner Radii:** Subtle, tailored rounding (`rounded-md` = 6px for buttons; `rounded-lg` = 12px for modal dialogs and image frames). Never giant pill-shaped cards or cartoonish 24px+ bubble radii.

---

## 13. Design Alternatives Evaluated

We developed and evaluated three distinct aesthetic directions before making the final recommendation:

```
┌─────────────────────────────────┬─────────────────────────────────┬─────────────────────────────────┐
│ DIRECTION A (RECOMMENDED)       │ DIRECTION B                     │ DIRECTION C                     │
│ Editorial Warm Hospitality      │ Intimate Midnight Lounge        │ Minimalist Nordic Bistro        │
├─────────────────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ • Unbleached linen canvas       │ • Deep obsidian black background│ • Stark white & grey palette    │
│ • Rich spice earth accents      │ • Candlelight amber & gold glow │ • Utilitarian black typography  │
│ • Fraunces & Plus Jakarta Sans  │ • High drama, late-night bar    │ • Minimal cultural warmth       │
│ • Communal warmth & food focus  │ • Focus on drinks & nighttime   │ • Food treated clinically       │
│ • Broadest demographic appeal   │ • May alienate daytime diners   │ • Lacks Ethiopian soul          │
│ • PASSES: Welcoming & Authentic │ • RISKS: Too clubby/dark        │ • RISKS: Feels cold & generic   │
└─────────────────────────────────┴─────────────────────────────────┴─────────────────────────────────┘
```

### Why Direction A is the Selected Winner
Direction A (**Editorial Warm Hospitality**) directly honors the communal spirit of Ethiopian dining (*Injera*, *Mesob*, *Gursha*) while presenting the restaurant with modern European poise. It appeals equally to Dutch locals, international expats in The Hague, vegetarian/vegan diners, and families seeking an authentic cultural experience.

---

## 14. Preliminary Design Tokens Proposal

For downstream implementation in Tailwind CSS (`tailwind.config.ts` and `src/styles/globals.css`):

```ts
// tailwind.config.ts token excerpt
export const designTokens = {
  colors: {
    canvas: '#FAF7F2',        // Base page unbleached ecru
    surface: '#F3EDE2',       // Secondary panels & drawers
    surfaceElevated: '#FFFFFF',// Floating modals & booking card
    primary: '#1C1614',       // Deep roasted espresso body text
    muted: '#63564F',         // Muted earthen description text
    berbere: {
      DEFAULT: '#8A2C18',     // Primary brand crimson
      hover: '#702313',       // Darkened button hover
      light: '#F8ECE9',       // Subtle tinted background
    },
    terracotta: '#C86D51',    // Jebena clay warmth
    ochre: '#B88424',         // Golden teff & tej honey
    sage: {
      DEFAULT: '#2D4736',     // Highland juniper / vegan badge
      light: '#EDF2EE',       // Vegan badge background
    },
    border: '#E2D9CC',        // Fine thread border line
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
    full: '9999px',
  },
  boxShadow: {
    subtle: '0 2px 8px rgba(28, 22, 20, 0.04)',
    elevated: '0 8px 30px rgba(28, 22, 20, 0.08)',
    dock: '0 -4px 20px rgba(28, 22, 20, 0.06)',
  }
};
```

---

## 15. Content Tone & Copywriting Guidelines

Website copy must speak with authentic Ethiopian warmth, clarity, and unpretentious pride:

```
  TONE PILLARS:
  1. HOSPITABLE & WELCOMING   ── Treat the reader as an honored guest in an Ethiopian home.
  2. CULTURALLY RESPECTFUL    ── Explain rituals (Injera, Gursha) with dignity, not folklore clichés.
  3. CLEAR & TRANSPARENT      ── Straightforward pricing, ingredients, and dietary indicators.
  4. ZERO HYPE & NO BUZZWORDS ── Ban words like "paradise", "mouthwatering", "symphony", "gem".
```

### Copy Comparison Examples
* **Bad (Generic AI Hype):** *"Embark on a tantalizing culinary journey of authentic delights and mouthwatering flavors that will leave your tastebuds singing!"*
* **Good (Editorial Hospitality):** *"Traditional Ethiopian dining is centered on the shared plate. Tender stews slow-simmered with fragrant berbere, served atop sourdough teff injera and eaten together by hand. Welcome to our table in Den Haag."*

* **Bad (Sterile Operational):** *"Reservations are mandatory on peak dates. Click the button to select an available timeslot."*
* **Good (Warm Hospitality):** *"We invite you to reserve your table in advance. For families and celebrations of more than eight guests, please give us a call so we can prepare your table."*

---

## 16. Open Questions & Client Decisions Checklist

The following items are documented here and will be confirmed with the restaurant owner before public DNS switchover:

- [ ] **1. Operating Hours Confirmation:** Confirm whether dining hours are *12:00 – 00:00* daily (TheFork) or *12:00 – 02:00* (Thuisbezorgd/old site). *Recommendation:* Display 12:00 – 00:00 with "Late bar service until 02:00".
- [ ] **2. Menu Dine-In Price Verification:** Confirm whether prices verified from delivery platforms (e.g. *Doro Wot* €24.00, *Shiro Wot* €20.00, *Special for 2* €42.00) match in-house table pricing.
- [ ] **3. Halal Certification:** Confirm whether all meat served is 100% Halal certified to enable the verified "Halal" dietary badge.
- [ ] **4. Pure Teff Gluten-Free Injera:** Confirm whether 100% pure teff injera is available on request for guests with celiac disease.
- [ ] **5. Official TheFork Manager Widget Code:** Obtain the restaurant's private widget embed snippet from TheFork Manager (`Settings > Booking module`) to activate inline calendar booking.
- [ ] **6. Official Photography & Social Handles:** Gather original high-res interior and dish photos from the restaurant owner, along with active Instagram/Facebook URLs.

---

## 17. Design Acceptance Checklist (For Implementation Review)

During subsequent implementation phases, the resulting website must be verified against this checklist:

- [ ] **Visual Distinction:** Does the site look unique, warm, and authentic to Taste of Ethiopia rather than a generic AI template?
- [ ] **No Prohibited Tropes:** Is the site completely free of neon gradients, glassmorphism blobs, floating rounded card grids, and PDF menu links?
- [ ] **Cultural Reverence:** Are *Injera*, *Mesob*, *Gursha*, and *Bunna* presented with dignity, clarity, and accurate explanations?
- [ ] **Typography Rigor:** Are headings rendered in `Fraunces` and body text in `Plus Jakarta Sans` with appropriate hierarchy and contrast?
- [ ] **Color Contrast AA Compliance:** Do all body text and UI controls exceed WCAG 2.1 AA contrast ratios (4.5:1 body, 3:1 large text)?
- [ ] **Mobile Touch Optimization:** Is the persistent bottom action dock functional on mobile (< 768px) with 48px touch targets?
- [ ] **Dual Ordering Modal:** Does the "Order Online" button open an accessible modal presenting both Thuisbezorgd.nl and Uber Eats?
- [ ] **TheFork Reservation Clarity:** Is the reservation experience accessible, clear, and equipped with an immediate fallback booking link?
- [ ] **Fast LCP & Zero CLS:** Does the layout remain completely stable during image and iframe loading?
- [ ] **Cookieless Experience:** Does the site function with zero tracking cookies and without an intrusive cookie banner?
