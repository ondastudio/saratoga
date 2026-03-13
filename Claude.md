# Saratoga Design System

> The comprehensive design system and style guide for the Saratoga insurance compliance platform. This document serves as the single source of truth for all UI/UX decisions across the product and marketing website.

**Version:** 1.0
**Last updated:** March 13, 2026
**Maintained by:** Onda Studio

---

## 1. Brand Foundation

### Company

Saratoga is the leading, all-in-one compliance platform for the insurance industry. It combines industry-leading software, AI-enabled managed services, and dedicated insurance regulatory experts to deliver an efficient solution that removes barriers to success.

### Brand Personality

Confident, solutions-oriented, modern, and reliable. The visual language should feel authoritative and trustworthy while remaining approachable — never cold or overly corporate.

### Design Principles

**Clarity over decoration.** Every element should serve a purpose. When in doubt, simplify.

**Trust through structure.** Clean layouts, consistent spacing, and a disciplined color system build credibility with compliance professionals who value precision.

**Guide, don't overwhelm.** Use visual hierarchy to lead users toward understanding and action. Insurance compliance is complex enough — the interface shouldn't add to that.

**Accessible by default.** Every design decision should meet WCAG 2.1 AA minimum. Color contrast, font sizing, and interactive targets must be inclusive.

---

## 2. Color System

The Saratoga palette is built around deep purples and blues that convey authority and trust, accented with vibrant lilacs for energy and modernity. A full neutral grey scale provides the structural backbone.

### 2.1 Deep Blue Purple (Primary)

The primary brand color. Used for navigation, primary CTAs, and key brand moments.

| Token   | Hex       | Usage |
|---------|-----------|-------|
| 900     | `#110846` | Darkest backgrounds, high-contrast text on light surfaces |
| 800     | `#1E195B` | Dark UI elements, footer backgrounds |
| 700     | `#262267` | Secondary dark backgrounds |
| 600     | `#2D2A72` | Active/pressed states |
| 500     | `#33317A` | Hover states on primary elements |
| 400     | `#4E4D8C` | Muted primary, secondary text on dark |
| 300     | `#6A6B9E` | Borders, disabled states |
| 200     | `#9293BA` | Subtle backgrounds, dividers |
| 100     | `#BDBDD6` | Light tints, background accents |
| 50      | `#E4E5EE` | Lightest tint, surface highlights |

**Default:** `#110846`

### 2.2 Deep Purple (Secondary)

A warmer purple that complements the primary. Used for secondary actions and accent elements.

| Token   | Hex       | Usage |
|---------|-----------|-------|
| Default | `#300067` | Standard secondary color |
| 800     | `#4E0276` | Dark secondary variant |
| 700     | `#5E057F` | — |
| 600     | `#6F0986` | — |
| 500     | `#7B0B8C` | — |
| 400     | `#8E349C` | Mid-range secondary, tags |
| 300     | `#A157AC` | Hover accents |
| 200     | `#BC86C4` | Light secondary fills |
| 100     | `#D6B6DB` | Subtle secondary tints |
| 50      | `#EEE2F0` | Lightest secondary surface |

### 2.3 Electric Lilac (Accent)

A vibrant accent used sparingly for emphasis, highlights, and interactive feedback.

| Token   | Hex       | Usage |
|---------|-----------|-------|
| 900     | `#3D00CC` | Darkest accent |
| 800     | `#5800DA` | — |
| 700     | `#6800E2` | — |
| 600     | `#7800EB` | — |
| 500     | `#8400F1` | Strong accent, badges |
| 400     | `#9A35FE` | — |
| Default | `#AF63FF` | Standard accent color |
| 200     | `#C694FE` | Light accent fills |
| 100     | `#DDC0FE` | Soft accent backgrounds |
| 50      | `#F3E5FF` | Lightest accent surface |

### 2.4 Electric Purple (Accent Alternate)

An alternative accent bridging blue and purple. Used for data visualizations and interactive states.

| Token   | Hex       | Usage |
|---------|-----------|-------|
| 900     | `#0000DC` | — |
| 800     | `#2600EA` | — |
| 700     | `#4500EF` | — |
| 600     | `#5B00F7` | — |
| 500     | `#6900FD` | — |
| Default | `#8740FF` | Standard alternate accent |
| 300     | `#9F68FF` | — |
| 200     | `#BC96FE` | — |
| 100     | `#D8C1FE` | — |
| 50      | `#F0E6FF` | — |

### 2.5 Neutral Grey

The foundation for text, backgrounds, borders, and structural UI.

| Token   | Hex       | Usage |
|---------|-----------|-------|
| 900     | `#202020` | Primary text, headings |
| 800     | `#414141` | Body text |
| 700     | `#606060` | Secondary text, labels |
| 600     | `#747474` | Placeholder text, icons |
| 500     | `#9D9D9D` | Disabled text |
| Default | `#BCBCBC` | Borders, dividers |
| 300     | `#DFDFDF` | Subtle borders, separators |
| 200     | `#EDEDED` | Light backgrounds, table stripes |
| 100     | `#F5F5F5` | Page backgrounds, cards |
| 50      | `#FAFAFA` | Lightest surface |

### 2.6 Semantic Colors

Define these based on your product needs. Recommended starting point:

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
| Primary   | **Saans**      | `"Saans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | Headings, body text, UI elements |
| Secondary | **Px Grotesk** | `"Px Grotesk", "Helvetica Neue", Arial, sans-serif` | Accents, special callouts, data labels |

### 3.2 Font Weights

| Token   | Value     | Usage |
|---------|-----------|-------|
| Regular | `regular` | Body text, descriptions, long-form content |
| Medium  | `medium`  | Headings, labels, buttons, emphasis |

### 3.3 Type Scale

A consistent sizing system for all text elements. Values in pixels (convert to rem at 1rem = 16px for implementation).

| Token | Size (px) | Suggested Use |
|-------|-----------|---------------|
| 0     | 0         | — |
| 25    | 1         | — |
| 50    | 2         | — |
| 100   | 4         | Micro labels, legal fine print |
| 200   | 8         | Overlines, eyebrow text |
| 300   | 12        | Captions, helper text, footnotes |
| 400   | 16        | Body text (base size) |
| 500   | 20        | Large body, intro paragraphs |
| 600   | 24        | H5 / small headings |
| 700   | 28        | H4 |
| 800   | 32        | H3 |
| 900   | 36        | H2 |
| 1000  | 40        | H1 (standard pages) |
| 1100  | 44        | — |
| 1200  | 48        | Display heading (hero sections) |
| 1300  | 52        | — |
| 1400  | 56        | Large display |
| 1500  | 60        | — |
| 1600  | 64        | XL display (homepage hero) |
| 1700  | 68        | — |
| 1800  | 72        | XXL display |
| 1900  | 76        | — |
| 2000  | 80        | — |
| 2100  | 84        | — |
| 2200  | 88        | — |
| 2300  | 92        | — |
| 2400  | 96        | — |
| 3000  | 120       | Maximum display size |

### 3.4 Recommended Type Styles

| Style            | Font     | Weight  | Size  | Line Height | Letter Spacing |
|------------------|----------|---------|-------|-------------|----------------|
| Display XL       | Saans    | Medium  | 64px  | 1.1         | -0.02em |
| Display Large    | Saans    | Medium  | 48px  | 1.15        | -0.02em |
| H1               | Saans    | Medium  | 40px  | 1.2         | -0.01em |
| H2               | Saans    | Medium  | 36px  | 1.25        | -0.01em |
| H3               | Saans    | Medium  | 32px  | 1.3         | 0 |
| H4               | Saans    | Medium  | 28px  | 1.3         | 0 |
| H5               | Saans    | Medium  | 24px  | 1.35        | 0 |
| Body Large       | Saans    | Regular | 20px  | 1.6         | 0 |
| Body             | Saans    | Regular | 16px  | 1.6         | 0 |
| Body Small       | Saans    | Regular | 14px  | 1.5         | 0 |
| Caption          | Saans    | Regular | 12px  | 1.4         | 0.01em |
| Overline         | Saans    | Medium  | 12px  | 1.4         | 0.08em |
| Button           | Saans    | Medium  | 16px  | 1           | 0.01em |
| Data Label       | Px Grotesk | Regular | 14px | 1.4        | 0 |

---

## 4. Spacing System

A 4px base unit grid for all spacing decisions. This scale covers padding, margins, gaps, and layout gutters.

| Token | Value (px) | Common Usage |
|-------|------------|--------------|
| 0     | 0          | None |
| 25    | 1          | Hairline borders |
| 50    | 2          | Tight inner spacing |
| 100   | 4          | Compact padding (badges, tags) |
| 200   | 8          | Small gaps, icon spacing |
| 300   | 12         | Standard inner padding |
| 400   | 16         | Default component padding |
| 500   | 20         | Card padding, form field gaps |
| 600   | 24         | Section sub-gaps |
| 700   | 28         | — |
| 800   | 32         | Component group spacing |
| 900   | 36         | — |
| 1000  | 40         | Section padding (small) |
| 1100  | 44         | — |
| 1200  | 48         | Section padding (medium) |
| 1300  | 52         | — |
| 1400  | 56         | — |
| 1500  | 60         | — |
| 1600  | 64         | Section padding (large) |
| 1700  | 68         | — |
| 1800  | 72         | — |
| 1900  | 76         | — |
| 2000  | 80         | Page-level vertical padding |
| 2100  | 84         | — |
| 2200  | 88         | — |
| 2300  | 92         | — |
| 2400  | 96         | Hero section padding |
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

Max content width: **1200px** (recommended; adjust per design). Centered with auto margins on wide screens.

### Grid Usage Guidelines

Use the 12-column grid for page layouts. Common patterns for Saratoga include: 2-column layouts (6/6) for feature sections with text and image side-by-side, 3-column layouts (4/4/4) for feature grids and card groups, 4-column layouts (3/3/3/3) for logo bars, stat blocks, and icon grids, and asymmetric layouts (5/7 or 4/8) for hero sections with text and illustration.

---

## 6. Component Guidelines

### 6.1 Buttons

**Primary:** Deep Blue Purple 900 background, white text, medium weight. Used for main CTAs like "Request a Demo."

**Secondary:** Transparent background with Deep Blue Purple 900 border and text. Used for secondary actions like "Learn More."

**Ghost:** No background or border, Deep Blue Purple 900 text with underline on hover. Used for tertiary/inline actions.

All buttons use size-400 (16px) text, size-300 (12px) vertical padding, and size-500 (20px) horizontal padding. Border radius should be consistent across the system (suggest 8px).

### 6.2 Cards

Cards use Neutral Grey 100 (`#F5F5F5`) or white backgrounds with a 1px border in Neutral Grey 300 (`#DFDFDF`). Interior padding is size-500 (20px) to size-600 (24px). Cards should have a subtle box shadow on hover to indicate interactivity when linked.

### 6.3 Forms & Inputs

Input fields use a 1px Neutral Grey Default (`#BCBCBC`) border, size-400 (16px) body text, and size-300 (12px) interior padding. Focus state should show a 2px Electric Lilac Default (`#AF63FF`) border. Error state should use the semantic error color with helper text below the field.

### 6.4 Navigation

The primary navigation uses a sticky header with the Saratoga logo on the left, nav links in the center, and a primary CTA button ("Request Demo") on the right. Background is white with a subtle bottom border in Neutral Grey 300 on scroll.

### 6.5 Icons

Use a consistent icon set (suggest Phosphor, Lucide, or a custom set). Icons should be 24px default size with 20px for compact contexts and 32px for feature grid callouts. Icon color should inherit from the parent text color unless used decoratively.

---

## 7. Content & Voice

### Messaging Framework

**Primary message:** "Saratoga removes the barriers to insurance compliance — so you can focus on growth."

**Supporting messages:**

- "One platform. Complete compliance." — All-in-one positioning
- "AI + experts working together for you." — Hybrid approach differentiator
- "Stay ahead of every regulation, in every state." — Comprehensive coverage
- "From complexity to clarity." — Transformation narrative

### Writing Rules

Lead with benefits and outcomes, not features. Use "you/your" to speak to the reader directly. Keep paragraphs to 2–3 sentences. Use active voice. Be specific with numbers and results when available. Explain compliance concepts clearly without assuming jargon familiarity.

### SEO Guidelines

Target keywords: insurance compliance software, insurance regulatory compliance, compliance platform for insurers, managed compliance services. Each page needs a unique H1 with the primary keyword, benefit-driven meta descriptions with a CTA, proper header hierarchy (H1 → H2 → H3), and internal linking between related content.

---

## 8. Accessibility

All design and development must meet **WCAG 2.1 AA** standards at minimum.

**Color contrast:** Text on backgrounds must meet 4.5:1 for normal text and 3:1 for large text (18px+ or 14px+ bold). Verify all color pairings from Section 2 before use.

**Interactive targets:** Minimum 44×44px touch targets on mobile. Minimum 24×24px click targets on desktop.

**Focus states:** All interactive elements must have visible focus indicators. Use the Electric Lilac 2px outline as the standard focus ring.

**Motion:** Respect `prefers-reduced-motion`. All animations should be subtle and purposeful.

---

## 9. Sitemap Reference

```
Homepage
├── Products
│   ├── Insurance Entity Management
│   ├── Producer & License Management
│   ├── AI-Enabled Managed Services
│   ├── Regulatory Experts
│   └── Integrations
├── Solutions
│   ├── By Role
│   ├── By Company Type
│   └── By Use Case
├── Resources
│   ├── Blog
│   ├── Case Studies
│   ├── Whitepapers / Guides
│   ├── Webinars
│   └── Regulatory Updates
├── About
│   ├── Company Story
│   ├── Leadership Team
│   ├── Careers
│   └── Press / News
├── Pricing
└── Contact / Request Demo
```

---

## 10. Technical Specs

### Performance Targets

Core Web Vitals: LCP under 2.5s, FID under 100ms, CLS under 0.1. Use lazy loading for images and below-the-fold content. Serve images in WebP/AVIF with fallbacks.

### Required Integrations

Analytics (GA4 / Mixpanel), CRM (HubSpot / Salesforce), marketing automation, chat/support widget, and cookie consent management (GDPR/CCPA compliant).

### Security

HTTPS everywhere, CSP headers, SOC 2 compliance badge where applicable.

---

## 11. Open Items

Items still to be defined before development begins:

- [ ] Semantic colors (success, warning, error, info) — hex values
- [ ] Line height and letter spacing fine-tuning per type style
- [ ] Border radius system (suggest 4px / 8px / 12px / full)
- [ ] Shadow/elevation scale
- [ ] Animation/motion guidelines (duration, easing curves)
- [ ] Dark mode palette (if applicable)
- [ ] Geographic and company size targeting specifics
- [ ] Tech stack decision (framework, hosting, CMS)
- [ ] Pricing structure (if public-facing)
- [ ] Photography and illustration asset library
- [ ] Client logos for social proof
- [ ] Real testimonials and case study data
- [ ] Team photos and bios

---

*This design system is a living document. Update it as decisions are finalized and share it at the start of every design or development session for consistent results.*
