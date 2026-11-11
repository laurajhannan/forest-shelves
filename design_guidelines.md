# Design Guidelines: Handcrafted Floating Shelves Website

## Design Approach: Reference-Based (Artisanal E-commerce)

**Primary References:** Shopify artisan stores, Etsy product pages, Airbnb's clean image-forward aesthetic

**Design Philosophy:** Authentic craftsmanship meets modern simplicity. The design should feel warm, honest, and grounded—reflecting the handmade nature of the product and Portuguese rural setting. Emphasize photography and natural materials over excessive decoration.

## Typography System

**Font Families:**
- Primary: "Crimson Text" (serif) - for headlines, storytelling sections
- Secondary: "Inter" (sans-serif) - for body text, forms, pricing, technical specs

**Hierarchy:**
- Hero Headlines: text-5xl to text-7xl, font-semibold (Crimson Text)
- Section Headers: text-3xl to text-4xl, font-semibold (Crimson Text)  
- Subsections: text-xl to text-2xl, font-medium (Inter)
- Body Text: text-base to text-lg, font-normal, leading-relaxed (Inter)
- Captions/Labels: text-sm, font-medium (Inter)
- Pricing: text-2xl to text-3xl, font-bold (Inter)

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12 for grids
- Inner content: px-6 to px-8 (mobile), px-12 (desktop)
- Container max-width: max-w-7xl for full sections, max-w-4xl for text content

**Grid Strategy:**
- Product specifications: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Image gallery: Masonry-style or 3-4 column grid with varying heights
- Order form: 2-column for desktop inputs, single column mobile

## Component Library

**Navigation:**
- Sticky header with transparent-to-solid scroll transition
- Logo left, navigation links center, "Order Now" CTA button right
- Mobile: Hamburger menu with full-screen overlay

**Hero Section:**
- Full-width image background (Portuguese forest or workshop)
- Height: min-h-screen but allow natural content flow
- Overlay: Subtle gradient for text readability
- Content: Centered headline, subheading, dual CTAs ("Explore Shelves" + "Meet the Craftsman")
- Buttons on images: Blurred backgrounds (backdrop-blur-md, bg-white/20)

**Product Cards:**
- Image with 4:3 aspect ratio
- Product name, dimensions, price clearly displayed
- Subtle hover lift effect (transition-transform hover:scale-105)
- "View Details" button below each card

**Order Form:**
- Multi-step or single-page with clear sections
- Dropdown selects for specifications (depth, length, finish)
- Quantity steppers (+ / - buttons)
- Dynamic price calculator showing total as selections change
- Large "Submit Order Request" button
- Contact info prominently displayed below form

**Image/Video Gallery:**
- Category tabs: "Shelves", "Workshop", "Portugal Forests", "Installation"
- Lightbox modal for full-size viewing
- Admin upload interface (separate authenticated section)
- Grid layout with consistent spacing (gap-6)

**Testimonial/Social Proof:**
- Card-based layout with customer photos (if available)
- Quote + name + location format
- 2-column on desktop, stacked on mobile

**Footer:**
- 4-column layout: About, Quick Links, Contact, Newsletter
- WhatsApp and email prominent
- Social media icons
- Copyright and sustainability badges (FSC/PEFC logos)

## Page-Specific Layouts

**Homepage:**
1. Hero (forest background image, headline, dual CTAs)
2. Introduction section (text + workshop image side-by-side)
3. Key features (3-column grid with icons)
4. Featured shelf gallery (4 products in grid)
5. Craftsmanship story (image-text split layout)
6. Sustainability commitment (centered text + certification badges)
7. CTA section ("Ready to Order?")

**Product/Buy Now Page:**
1. Product showcase (large images in carousel)
2. Specifications table (depth/length options)
3. Pricing table (clear, structured)
4. Order form (prominent, well-spaced)
5. What's included checklist
6. Installation preview images
7. Delivery information

**About the Craftsman:**
1. Hero image (Peter in workshop)
2. Biography (text with supporting images)
3. Workshop photo gallery (3-4 images)
4. Philosophy statement (centered, generous spacing)

**Gallery/Portfolio Page:**
1. Category filter tabs at top
2. Masonry grid of images/videos
3. Upload button (admin only, top-right)
4. Lightbox viewer with prev/next navigation

## Images

**Required Images:**
- Hero: Wide landscape shot of Portuguese forest or workshop exterior (2000x1000px minimum)
- Workshop: Peter crafting, tools, finished shelves on workbench
- Product shots: Installed shelves in homes, close-ups of wood grain, bracket system
- Forest landscapes: Cork oaks, pine forests around Góis
- Process photos: Wood selection, joining, finishing
- Lifestyle: Shelves styled with books, plants, decor

**Image Treatment:**
- Natural, authentic photography (no overly staged shots)
- Warm tones preferred, maintain wood's natural appearance
- Mix of wide shots and detail close-ups
- Installation examples showing shelves in real homes

## Animations

**Minimal, purposeful only:**
- Smooth scroll reveal for sections (fade-in-up on viewport entry)
- Hover states on product cards (subtle scale transform)
- Navigation scroll transition (transparent to solid)
- Form validation feedback (shake on error)
- NO parallax, NO complex scroll-triggered animations

## Accessibility

- Form labels always visible, properly associated with inputs
- Sufficient contrast for all text (especially on image backgrounds)
- Focus indicators on all interactive elements
- Alt text for all product and gallery images
- Keyboard navigation throughout

This design balances authentic craftsmanship storytelling with modern e-commerce functionality, using generous photography and clean layouts to let the product quality speak for itself.