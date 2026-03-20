# Saratoga Design System

> The comprehensive design system and style guide for the Saratoga Compliance platform. This document serves as the single source of truth for all UI/UX decisions across the marketing website and product.

**Version:** 1.1
**Last updated:** March 13, 2026
**Maintained by:** Onda Studio

---

## 1. Brand Foundation

### Company

Saratoga Compliance Solutions is the leading provider of all-in-one compliance and license operations software and AI-enabled managed services for insurance companies in the U.S. and Canada. Headquartered at 36 Long Alley, Saratoga Springs, NY 12866.

### Brand Personality

Confident, solutions-oriented, modern, and reliable. The visual language is **dark-first** — built on deep purple and indigo tones that convey authority and technical sophistication, punctuated by vibrant electric lilac accents that bring energy and modernity.

### Design Principles

**Dark confidence.** The site leads with dark, immersive backgrounds that command attention and set Saratoga apart from typical light-theme B2B SaaS. White and light sections provide contrast and breathing room for detailed content.

**Clarity over decoration.** Every element serves a purpose. When in doubt, simplify. The complexity of insurance compliance demands a clean, structured interface.

**Trust through proof.** Social proof is everywhere — logo bars, stat counters, testimonials, and case studies reinforce credibility at every scroll depth.

**Guide, don't overwhelm.** Visual hierarchy leads users toward understanding and action. Strong CTAs are present at every section break.

**Accessible by default.** All design decisions meet WCAG 2.1 AA minimum. Color contrast on dark backgrounds is carefully managed.

---

## 2. Color System

The Saratoga palette is dominated by deep purples and indigos. The site is **dark-themed by default** — hero sections, navigation, footer, and CTA blocks all use dark backgrounds. Light sections appear for content-heavy areas like feature descriptions.

### 2.1 Deep Blue Purple (Primary)

The dominant brand color. Used for hero backgrounds, navigation, footer, and all dark-themed sections.

| Token   | Hex       | Usage |
|---------|-----------|-------|
| 900     | `#110846` | Hero backgrounds, nav bar, footer, darkest surfaces |
| 800     | `#1E195B` | Card backgrounds on dark sections, secondary dark surfaces |
| 700     | `#262267` | Map fills, interactive element backgrounds |
| 600     | `#2D2A72` | Active/pressed states, stat card backgrounds |
| 500     | `#33317A` | Hover states on dark surfaces |
| 400     | `#4E4D8C` | Muted text on dark backgrounds, secondary labels |
| 300     | `#6A6B9E` | Border lines on dark backgrounds, disabled states |
| 200     | `#9293BA` | Subtle dividers on dark surfaces |
| 100     | `#BDBDD6` | Light tints for background accents |
| 50      | `#E4E5EE` | Lightest tint, surface highlights on light sections |

**Default:** `#110846`

### 2.2 Deep Purple (Secondary)

A warmer purple for secondary accents, gradient endpoints, and supporting UI.

| Token   | Hex       | Usage |
|---------|-----------|-------|
| Default | `#300067` | Standard secondary color |
| 800     | `#4E0276` | Dark secondary variant |
| 700     | `#5E057F` | Gradient midpoints |
| 600     | `#6F0986` | — |
| 500     | `#7B0B8C` | — |
| 400     | `#8E349C` | Tags, category labels |
| 300     | `#A157AC` | Hover accents on light sections |
| 200     | `#BC86C4` | Light secondary fills |
| 100     | `#D6B6DB` | Subtle secondary tints |
| 50      | `#EEE2F0` | Lightest secondary surface |

### 2.3 Electric Lilac (Accent)

The primary accent — used for interactive highlights, CTA arrows, gradient accents, active states, and focus indicators. This is the color that "pops" against the dark backgrounds.

| Token   | Hex       | Usage |
|---------|-----------|-------|
| 900     | `#3D00CC` | Darkest accent |
| 800     | `#5800DA` | — |
| 700     | `#6800E2` | — |
| 600     | `#7800EB` | Active tab indicators, progress bars |
| 500     | `#8400F1` | Strong accent, badges, map hover fills |
| 400     | `#9A35FE` | — |
| Default | `#AF63FF` | Standard accent — CTA arrow icons, active nav indicators, card accents |
| 200     | `#C694FE` | Light accent fills on dark surfaces |
| 100     | `#DDC0FE` | Soft accent backgrounds |
| 50      | `#F3E5FF` | Lightest accent surface |

### 2.4 Electric Purple (Accent Alternate)

Used for data visualizations, interactive map fills, and gradient components.

| Token   | Hex       | Usage |
|---------|-----------|-------|
| 900     | `#0000DC` | — |
| 800     | `#2600EA` | — |
| 700     | `#4500EF` | — |
| 600     | `#5B00F7` | — |
| 500     | `#6900FD` | — |
| Default | `#8740FF` | Standard alternate accent, gradient highlights |
| 300     | `#9F68FF` | — |
| 200     | `#BC96FE` | Map state fills (lighter regions) |
| 100     | `#D8C1FE` | Map state fills (lightest regions) |
| 50      | `#F0E6FF` | — |

### 2.5 Neutral Grey

Used for body text on light sections, borders, and structural elements.

| Token   | Hex       | Usage |
|---------|-----------|-------|
| 900     | `#202020` | Primary text on light backgrounds |
| 800     | `#414141` | Body text on light backgrounds |
| 700     | `#606060` | Secondary text, labels |
| 600     | `#747474` | Placeholder text, icons |
| 500     | `#9D9D9D` | Disabled text |
| Default | `#BCBCBC` | Borders, dividers on light sections |
| 300     | `#DFDFDF` | Subtle borders, separators |
| 200     | `#EDEDED` | Light backgrounds, table stripes |
| 100     | `#F5F5F5` | Light section backgrounds |
| 50      | `#FAFAFA` | Lightest surface, card backgrounds |

### 2.6 Gradient System

Gradients are a core part of the visual identity. They appear on stat cards, CTA sections, map backgrounds, and accent strips.

| Name | Definition | Usage |
|------|-----------|-------|
| Hero gradient | Deep Blue Purple 900 → Deep Purple 700 (diagonal) | Hero section backgrounds |
| Stat card gradient | Deep Blue Purple 800 → Electric Lilac 600 (horizontal) | Stat counter cards |
| CTA section gradient | Deep Blue Purple 900 → Electric Purple Default (overlay on terrain texture) | Bottom-of-page CTA blocks |
| Map gradient | Electric Purple 200 → Electric Lilac 500 (range) | Interactive US map state fills |
| Accent strip | Electric Lilac Default → Electric Purple Default (horizontal) | Decorative accent lines on cards, tab indicators |

### 2.7 Semantic Colors

| Role      | Token             | Suggested Hex | Usage |
|-----------|-------------------|---------------|-------|
| Success   | `color-success`   | TBD           | Confirmations, positive status |
| Warning   | `color-warning`   | TBD           | Alerts, caution states |
| Error     | `color-error`     | TBD           | Errors, destructive actions |
| Info      | `color-info`      | TBD           | Informational callouts |

---

## 3. Typography

### 3.1 Font Families

| Role      | Family         | Fallback Stack | Usage |
|-----------|----------------|----------------|-------|
| Primary   | **Saans**      | `"Saans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | Headings, body text, UI elements, nav labels |
| Secondary | **Px Grotesk** | `"Px Grotesk", "Helvetica Neue", Arial, sans-serif` | Stat numbers, data labels, overlines, special callouts |

### 3.2 Font Weights

| Token   | Value     | Usage |
|---------|-----------|-------|
| Regular | `regular` | Body text, descriptions, long-form content |
| Medium  | `medium`  | Headings, nav labels, buttons, stat labels, emphasis |

### 3.3 Type Scale

Values in pixels (convert to rem at 1rem = 16px for implementation).

| Token | Size (px) | Suggested Use |
|-------|-----------|---------------|
| 100   | 4         | Micro labels |
| 200   | 8         | Overlines, eyebrow text |
| 300   | 12        | Captions, helper text, footer links, legal text |
| 400   | 16        | Body text (base), nav links, button labels |
| 500   | 20        | Large body, intro paragraphs |
| 600   | 24        | H5, small headings, card titles |
| 700   | 28        | H4 |
| 800   | 32        | H3, section subheadings |
| 900   | 36        | H2, section titles |
| 1000  | 40        | H1, standard page titles |
| 1200  | 48        | Display heading, hero subpage titles |
| 1400  | 56        | Large display |
| 1600  | 64        | XL display, homepage hero headline |
| 1800  | 72        | XXL display |
| 2400  | 96        | Stat counter numbers |
| 3000  | 120       | Maximum display size |

### 3.4 Recommended Type Styles

| Style            | Font       | Weight  | Size  | Line Height | Letter Spacing | Color Context |
|------------------|------------|---------|-------|-------------|----------------|---------------|
| Display XL       | Saans      | Medium  | 64px  | 1.1         | -0.02em        | White on dark bg |
| Display Large    | Saans      | Medium  | 48px  | 1.15        | -0.02em        | White on dark bg |
| H1               | Saans      | Medium  | 40px  | 1.2         | -0.01em        | White on dark / Grey 900 on light |
| H2               | Saans      | Medium  | 36px  | 1.25        | -0.01em        | Grey 900 on light sections |
| H3               | Saans      | Medium  | 32px  | 1.3         | 0              | — |
| H4               | Saans      | Medium  | 28px  | 1.3         | 0              | — |
| H5               | Saans      | Medium  | 24px  | 1.35        | 0              | Card titles, feature headings |
| Body Large       | Saans      | Regular | 20px  | 1.6         | 0              | Hero descriptions |
| Body             | Saans      | Regular | 16px  | 1.6         | 0              | Default body |
| Body Small       | Saans      | Regular | 14px  | 1.5         | 0              | Secondary descriptions |
| Caption          | Saans      | Regular | 12px  | 1.4         | 0.01em         | Footer links, legal |
| Overline         | Saans      | Medium  | 12px  | 1.4         | 0.08em         | Section eyebrows ("TRUSTED BY", "PRODUCTS") |
| Button           | Saans      | Medium  | 16px  | 1           | 0.01em         | — |
| Stat Number      | Px Grotesk | Medium  | 48–96px | 1          | -0.02em        | Large stat counters (330+, 40K+, etc.) |
| Stat Label       | Saans      | Regular | 14px  | 1.4         | 0.04em         | Labels below stat numbers |
| Nav Link         | Saans      | Medium  | 14px  | 1           | 0.01em         | Top bar and main navigation |

---

## 4. Spacing System

A 4px base unit grid. This scale covers padding, margins, gaps, and layout gutters.

| Token | Value (px) | Common Usage |
|-------|------------|--------------|
| 0     | 0          | None |
| 25    | 1          | Hairline borders |
| 50    | 2          | Tight inner spacing |
| 100   | 4          | Compact padding (badges, tags) |
| 200   | 8          | Small gaps, icon-to-text spacing |
| 300   | 12         | Standard inner padding, nav link gaps |
| 400   | 16         | Default component padding, grid gutters (mobile) |
| 500   | 20         | Card padding, form field gaps |
| 600   | 24         | Grid gutters (desktop), section sub-gaps |
| 800   | 32         | Component group spacing, card gaps |
| 1000  | 40         | Section padding (small) |
| 1200  | 48         | Section padding (medium) |
| 1600  | 64         | Section padding (large) |
| 2000  | 80         | Page-level vertical padding |
| 2400  | 96         | Hero section vertical padding |
| 3000  | 120        | Maximum section spacing |

---

## 5. Layout & Grid

### Breakpoints

| Name    | Min Width | Columns | Gutter | Margin |
|---------|-----------|---------|--------|--------|
| Mobile  | 0px       | 4       | 16px   | 16px   |
| Tablet  | 768px     | 8       | 24px   | 32px   |
| Desktop | 1024px    | 12      | 24px   | 40px   |
| Wide    | 1440px    | 12      | 32px   | auto (max-width container) |

### Container

Max content width: **1200px**. Centered with auto margins. Full-bleed dark sections extend to viewport edges while content stays within the container.

### Grid Usage Guidelines

Common layout patterns observed across the Saratoga site:

**Homepage hero:** Full-width dark background. Content split roughly 55/45 — headline and CTAs on the left, geometric illustration on the right.

**Stat bars:** 4-column equal grid (3/3/3/3) with gradient-accent cards. Each card contains a large number (Px Grotesk) and a small label (Saans).

**Feature sections:** Asymmetric 5/7 or 4/8 splits with text on one side and product screenshot or illustration on the other. Alternating left/right between sections.

**Logo bars:** 2 rows of evenly spaced client logos, centered. Preceded by an overline label like "TRUSTED BY THE MOST INNOVATIVE INSURANCE COMPANIES."

**Card grids:** 2×2 grid (6/6 columns) for feature benefit cards. Each card has an icon, heading, and short description.

**Accordion lists:** Full-width section with a vertical list of expandable feature items, each with a small icon, title, and expandable description.

---

## 6. Component Library

### 6.1 Navigation

**Structure:** Two-tier navigation system.

**Top bar (utility nav):** Dark background (Deep Blue Purple 900). Contains secondary links: About, Careers, Events, Contact, Support, and a search icon. Text is small (12–14px), light color.

**Main nav:** Slightly lighter dark background. Contains: Saratoga logo (left), primary nav links with dropdown carets (Products, Why Saratoga?, Solutions, Resources, Partners, Company), and two CTA buttons (right) — "Login" (outline/ghost style) and "Request a Demo" (filled accent style with rounded corners).

**Behavior:** Sticky on scroll. Dropdowns on hover/click for items with carets.

### 6.2 Buttons

**Primary CTA — "Request a Demo":**
Rounded pill shape with generous horizontal padding. White or light text on Electric Lilac/accent background. Includes a right-arrow icon (→) inside a small square/circle accent. This is the most prominent CTA across the entire site.

**Secondary CTA — "Why Saratoga?":**
Outline style with rounded pill shape. White border and text on dark backgrounds; dark border and text on light backgrounds. No arrow icon.

**Ghost / Text link:**
No border or background. Underline on hover. Used inline within content sections.

**Arrow icon buttons:**
Several CTAs include a small square badge with a → arrow to the right of the button label. This is a distinctive Saratoga pattern. The arrow badge uses a slightly different shade or gradient.

**Contact Us button (CTA sections):**
White text, outline or filled style, centered in the full-width CTA band. Arrow icon included.

### 6.3 Stat Cards

A signature component. Horizontal row of 4 cards with gradient backgrounds (Deep Blue Purple → Electric Lilac). Each card contains:

- A small overline label (e.g., "CLIENTS", "LICENSES MANAGED", "PREMIUMS MANAGED", "ENTITY FILINGS ANNUALLY")
- A large stat number in Px Grotesk (e.g., "330+", "40K+", "$30B+", "1M+")
- Subtle gradient from left to right, darkest on the left card, most vibrant on the right

The cards sit between the hero section and the next content section, acting as a social proof bridge.

### 6.4 Logo Bar

Displays client logos in a 2-row grid, typically 5–6 logos per row. Logos are monochrome (white on dark backgrounds, or grey on light). Preceded by an uppercase overline label. Used on the homepage and product pages.

### 6.5 Video Testimonial Section

Dark background section with an embedded video player (centered, with play button overlay). Includes a carousel/pagination control with dots and left/right arrows. Below the video, a quote attribution shows the speaker's name and company title.

### 6.6 Feature Accordion

Used on product pages (e.g., Insurance Entity Management). Vertical list of features, each row containing:

- A small icon on the far left (line-style, monochrome)
- Feature title as a link/heading
- Expandable content below with a paragraph description

The active/expanded item shows a lilac accent border on the left or a highlighted background. Non-active items are collapsed to title-only.

### 6.7 Product Screenshot Carousel

Shows product UI screenshots in a contained frame. Includes:

- A numbered indicator (01, 02, etc.)
- Pagination dots
- Left/right navigation arrows
- A heading and description below or beside the screenshot

Used to showcase platform features like dashboards and tracking interfaces.

### 6.8 Feature Benefit Cards (2×2 Grid)

Used on the homepage and solutions pages. 2×2 grid of cards, each containing:

- An icon (line-style, inside a circle or square badge)
- A heading (e.g., "Streamline Operations", "Boost Profitability")
- A short description (2–3 sentences)
- A subtle accent color on hover or on the icon badge

Cards sit on a light background section with generous padding between them.

### 6.9 Sticky Scroll Feature Section

Found on the homepage. A scrolling section with a fixed/sticky heading on the left and a visual or card on the right that updates as the user scrolls. The left side shows a headline and tabbed or stepped navigation; the right side shows a corresponding product screenshot or visual.

The active tab/step is indicated by a lilac accent line or highlight. Inactive steps are muted.

### 6.10 CTA Band

A full-width section that appears before the footer on every page. Features:

- Dark gradient background with a terrain/topographic texture overlay
- Centered headline: "Ready to Work with Saratoga Compliance?"
- Subheadline with benefit-driven copy
- "Contact Us" button with arrow icon
- The gradient blends Deep Blue Purple 900 with Electric Purple/Lilac accents

### 6.11 Footer

Dark background (Deep Blue Purple 900). Multi-column layout:

**Row 1:** Logo + company description (left), then 4 link columns: Products (Insurance Entity Management, Producer & License Management, Contracting & Appointment Management, Surplus Lines Management, E&O Coverage, Regulatory Helpdesk), By Business Type (Insurance Agencies & Brokers, MGAs & MGUs, Wholesale + E&S Brokers, Hybrid & Fronting Carriers, InsurTechs, Insurance Carriers, Adjusters & Claims Managers), By Use Case (Launch an Agency, Mitigate Risk, Streamline Operations, Boost Profitability, Improve Distribution).

**Row 2:** Physical address + contact info (left), then: Partners (Integrations, Developer Portal, Alliances), Resources (Case Studies, Blog & Insights, Regulatory Database, Events, Why Saratoga?), Company (About Us, Careers, Leadership, Press & News, Contact Us).

**Row 3:** Social icons (LinkedIn, X, YouTube, Instagram) on the left. Newsletter signup ("Enter your email" + arrow button) on the right.

**Bottom bar:** Copyright notice (left), legal links (Terms of Service, Privacy Policy, Data Security, Cookie Policy) on the right.

### 6.12 Interactive Map (Regulatory Database)

A full-width US map rendered in purple tones. Each state is a clickable region that highlights on hover (lighter lilac fill). Clicking a state opens a detail popover card on the left side with:

- State name + close button
- Assessment date
- Bulleted detail items (currently placeholder lorem ipsum)

A search input above the map allows filtering by state name.

### 6.13 Forms & Inputs

**Search inputs:** Rounded or slightly rounded border, dark background variant (on dark sections) with white text and a search icon. Light background variant with grey border for light sections.

**Newsletter input:** Dark background, borderless or subtle border, with a submit arrow button flush to the right edge.

**Demo request forms:** TBD — likely a dedicated form page or modal.

---

## 7. Illustration & Imagery Style

### Geometric Illustrations

The homepage hero uses **abstract geometric illustrations** — not photography. These are composed of simple shapes (squares, rectangles, crosses, arrows) in Electric Lilac and white on the dark background. The style is minimal, technical, and modern — evoking the idea of structured systems and organized data.

Use this geometric illustration style for: hero sections, feature section accents, empty states, and marketing visuals.

### Product Screenshots

Product UI screenshots appear in contained frames with rounded corners and subtle shadows. They show dashboard interfaces, tracking views, and data tables. Screenshots are always shown at high fidelity — never as wireframes.

### Photography

Photography is minimal on the current site. When used, it should be professional, clean, and modern — real people in business settings preferred over stock.

### Iconography

Line-style icons used throughout, appearing in: feature accordion items (small, monochrome), benefit card headers (inside circular badges), stat card labels, and navigation elements. Consistent stroke weight and sizing. Icons are decorative/supportive — never the primary information carrier.

---

## 8. Page Templates

### Template A: Homepage

```
[Top bar — utility nav]
[Main nav — sticky]
[Hero: Dark bg, headline left, geometric illustration right, 2 CTAs]
[Stat bar: 4 gradient stat cards]
[Video testimonial carousel: Dark bg]
[Logo bar: 2-row client logos]
[Sticky scroll feature section: Tabs left, visual right]
[Feature benefit cards: 2×2 grid, light bg]
[CTA band: Dark gradient with terrain texture]
[Footer: Multi-column, dark bg]
```

### Template B: Product Page (e.g., Insurance Entity Management)

```
[Top bar + Main nav]
[Hero: Dark bg, headline left, description right, CTA]
[Logo bar: Social proof]
[Content section: 2-column text, light bg]
[Stat bar: 4 stat cards]
[Feature accordion: Expandable feature list]
[Product screenshot carousel]
[CTA band]
[Footer]
```

### Template C: Regulatory Database

```
[Top bar + Main nav]
[Hero: Dark bg, headline + description + CTA]
[Interactive US map: Dark bg, search input, state popovers]
[CTA band]
[Footer]
```

---

## 9. Content & Voice

### Messaging Framework

**Primary message:** "We handle compliance, license operations and surplus lines filings — so you can focus on selling insurance."

**Supporting messages:**

- "One platform. Complete compliance." — All-in-one positioning
- "AI + experts working together for you." — Hybrid approach differentiator
- "Stay ahead of every regulation, in every state." — Comprehensive coverage (50-state regulatory intelligence)
- "From complexity to clarity." — Transformation narrative

### Key Stats for Social Proof

| Stat | Value | Label |
|------|-------|-------|
| Clients | 330+ | Active clients |
| Licenses | 40K+ | Licenses managed |
| Premiums | $30B+ | Premiums managed |
| Filings | 1M+ | Entity filings annually |

### Writing Rules

Lead with benefits and outcomes, not features. Use "you/your" to speak to the reader directly. Keep paragraphs to 2–3 sentences. Use active voice. Be specific with numbers and results. Explain compliance concepts clearly without assuming jargon familiarity.

### Overline/Eyebrow Conventions

Use uppercase overlines sparingly to label sections. Examples from the site: "TRUSTED BY", "PRODUCTS", "BY BUSINESS TYPE", "BY USE CASE", "PARTNERS", "RESOURCES", "COMPANY", "FOLLOW US", "SUBSCRIBE TO OUR NEWS AND UPDATE".

### SEO Guidelines

Target keywords: insurance compliance software, insurance regulatory compliance, compliance platform for insurers, managed compliance services, insurance entity management, producer license management, surplus lines management. Each page needs a unique H1 with the primary keyword, benefit-driven meta descriptions with a CTA, proper header hierarchy, and internal linking.

---

## 10. Accessibility

All design and development must meet **WCAG 2.1 AA** standards at minimum.

**Color contrast:** White text on Deep Blue Purple 900 (`#110846`) must meet 4.5:1 for body text. Verify all text/background pairings, especially on gradient surfaces. The lighter purple tones (400, 300) may not meet contrast requirements for small text — test carefully.

**Interactive targets:** Minimum 44×44px touch targets on mobile. Map state regions must be large enough for reliable tap targeting.

**Focus states:** All interactive elements must have visible focus indicators. Use Electric Lilac 2px outline as the standard focus ring. Ensure focus is visible on both dark and light backgrounds.

**Motion:** Respect `prefers-reduced-motion`. Carousel auto-play should be pausable. Scroll-driven animations should degrade gracefully.

**Map accessibility:** The interactive map must have a keyboard-accessible alternative (the search input provides this). State details should be reachable without mouse hover.

---

## 11. Sitemap Reference

```
Homepage
├── Products
│   ├── Insurance Entity Management
│   ├── Producer & License Management
│   ├── Contracting & Appointment Management
│   ├── Surplus Lines Management
│   ├── E&O Coverage
│   └── Regulatory Helpdesk
├── Why Saratoga?
├── Solutions
│   ├── By Business Type
│   │   ├── Insurance Agencies & Brokers
│   │   ├── MGAs & MGUs
│   │   ├── Wholesale + E&S Brokers
│   │   ├── Hybrid & Fronting Carriers
│   │   ├── InsurTechs
│   │   ├── Insurance Carriers
│   │   └── Adjusters & Claims Managers
│   └── By Use Case
│       ├── Launch an Agency
│       ├── Mitigate Risk
│       ├── Streamline Operations
│       ├── Boost Profitability
│       └── Improve Distribution
├── Resources
│   ├── Case Studies
│   ├── Blog & Insights
│   ├── Regulatory Database
│   ├── Events
│   └── Why Saratoga?
├── Partners
│   ├── Integrations
│   ├── Developer Portal
│   └── Alliances
├── Company
│   ├── About Us
│   ├── Careers
│   ├── Leadership
│   ├── Press & News
│   └── Contact Us
├── Login
└── Request a Demo
```

---

## 12. Technical Specs

### Performance Targets

Core Web Vitals: LCP under 2.5s, FID under 100ms, CLS under 0.1. Lazy load images, map assets, and below-the-fold carousels. Serve images in WebP/AVIF with fallbacks.

### Required Integrations

Analytics (GA4 / Mixpanel), CRM (HubSpot / Salesforce), marketing automation, chat/support widget, cookie consent management (GDPR/CCPA), newsletter subscription service.

### Security

HTTPS everywhere, CSP headers, SOC 2 compliance considerations.

---

## 13. Open Items

- [ ] Semantic colors (success, warning, error, info) — hex values
- [ ] Border radius system (observed: pill/full-round for buttons, slight rounding for cards and inputs)
- [ ] Shadow/elevation scale
- [ ] Animation/motion guidelines (carousel speed, scroll-driven timing, easing curves)
- [ ] Hover state specifications for all interactive elements
- [ ] Mobile navigation pattern (hamburger menu behavior, drawer vs. overlay)
- [ ] Form design system (input states, validation, error handling)
- [ ] Dark/light section transition patterns
- [ ] Icon library selection and complete icon inventory
- [ ] Terrain/topographic texture asset for CTA bands
- [ ] Geometric illustration component library for hero sections
- [ ] Loading and skeleton states
- [ ] Toast/notification patterns
- [ ] Modal and dialog patterns
- [ ] Tech stack decision (framework, hosting, CMS)

---

*This design system is a living document. Update it as decisions are finalized and share it at the start of every design or development session for consistent results.*
