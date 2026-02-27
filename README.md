# Fabrik Labs Marketing Website

A comprehensive marketing website for Fabrik Labs, built with Astro and Tailwind CSS. This is a mission-driven website for a custom software consulting company focused on nonprofits and ed-tech organizations.

## Project Overview

The website includes:
- **10 Pages**: Home, Services, Industries, About, Contact, Blog (with 4 posts), and 3 Case Studies
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Content Collections**: Blog posts using Astro's content collection system
- **Custom Components**: Reusable components for cards, buttons, testimonials, and more
- **Design System**: Teal, copper, charcoal, and warm gray color palette with IBM Plex fonts

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This starts a local dev server at `http://localhost:3000` with hot module reloading.

### Build

```bash
npm run build
```

This creates a static build in the `dist/` directory.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## Project Structure

```
/src
  /components       - Reusable Astro components
  /content
    /blog          - Blog posts (markdown)
    /config.ts     - Content collection configuration
  /layouts         - Page layouts
  /pages
    /blog          - Blog index and post template
    /case-studies  - Case study pages
    index.astro    - Home page
    about.astro
    services.astro
    industries.astro
    contact.astro
  /styles          - Global CSS and fonts

/public
  /images
    /logos         - Logo SVGs
    /case-studies  - Case study images

Configuration files:
- astro.config.mjs      - Astro configuration
- tailwind.config.mjs   - Tailwind CSS configuration
- tsconfig.json         - TypeScript configuration
- package.json          - Dependencies
```

## Design System

### Colors

- **Teal**: #2B9C9C (primary brand color)
- **Teal Light**: #3DB8B8
- **Teal Dark**: #238080
- **Copper**: #C75B3F (accent color)
- **Charcoal**: #1E2428 (dark text/backgrounds)
- **Slate**: #8A959E (secondary text)
- **Warm Gray**: #F5F3F0 (light backgrounds)

### Typography

- **Serif**: IBM Plex Serif (headings)
- **Sans**: IBM Plex Sans (body text)
- Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Breakpoints

- Mobile-first approach
- `md` breakpoint at 768px for tablet/desktop

## Key Pages

### Home (`/`)
Hero section with problem cards, who we serve section, testimonial, client logos, and CTA.

### Services (`/services`)
Three service offerings with descriptions and CTA.

### Industries (`/industries`)
Target market overview focusing on nonprofits and ed-tech.

### About (`/about`)
Brad's bio with headshot.

### Contact (`/contact`)
CTA to schedule a call with email contact option.

### Blog (`/blog`)
Blog index with 4 posts:
1. Why We Start With a Roadmap Workshop
2. The Hidden Cost of 'Almost Right' Software
3. What Nonprofits Get Wrong About Custom Tools
4. Choosing Between Buy and Build: A Decision Framework

### Case Studies (`/case-studies`)
Three detailed case studies:
1. The Autism Helper (ed-tech)
2. Alliance for Decision Education (ed-tech)
3. 4MyCiTy (nonprofit)

## Components

- **Nav**: Fixed navigation with mobile menu
- **Footer**: Multi-column footer with links
- **Hero**: Section header with label, title, subtitle
- **CTA**: Call-to-action section
- **Button**: Reusable button with variants
- **ProblemCard**: Card with number, title, description
- **TestimonialBlock**: Full-width testimonial section
- **StatBlock**: Stat display with value and label
- **CaseStudyCard**: Card for case study grid

## External Links

All CTA buttons link to:
- `https://cal.com/fabrikbrad/1h-discovery` (Cal.com scheduling link)
- `mailto:info@fabriklabs.co` (Email contact)

## Responsive Features

- Mobile hamburger menu that toggles with JavaScript
- Grid layouts that stack on mobile
- Font sizes that scale for mobile (72px → 40px)
- Padding adjustments for mobile (120px → 24px)
- Full-width cards on mobile

## Future Enhancements

- Add blog post images/featured images
- Add case study images/screenshots
- Implement contact form
- Add analytics tracking
- SEO optimization with meta tags
- RSS feed for blog

## License

All rights reserved - Fabrik Labs
