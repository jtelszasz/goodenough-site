# About Page Design

**Date:** 2026-06-02
**Status:** Approved

## Overview

Add an "About" page to the Good Enough site featuring a two-column layout with Justin's headshot (circular, modest size) on the right and biographical content on the left. The page introduces Justin, explains why he founded Good Enough, and highlights his relevant experience.

## User Requirements

- Add headshot from `/src/assets/img/justin-elszasz-headshot.jpg`
- Image should not be very large
- Image cropped into a circle
- Placeholder text for describing why GE was founded and Justin's experience
- Add "About" to main navigation
- Reorder navigation to: Home, About, AI @ GE, Writing, Contact

## Page Structure & Layout

### File Location
- `/src/pages/about.astro`

### Layout
- Uses existing `Layout` component with `activePage="about"`
- Centered container: `max-width: 72rem` (matching other pages)
- CSS Grid two-column layout: `grid-template-columns: 1fr auto`
  - Left column: content area (headline + bio)
  - Right column: headshot image (fixed size)
- Column gap: 3-4rem for breathing room
- Vertical padding matches homepage rhythm

### Visual Hierarchy
- Content-first layout: text naturally takes more width than fixed-size image
- Headshot anchors the right side without dominating
- Clear reading flow from headline → bio paragraphs

## Navigation Updates

### Layout.astro Changes
1. Add "About" link between Home and AI @ GE
2. Final order: Home, About, AI @ GE, Writing, Contact
3. Update TypeScript interface `activePage` to include `'about'` in union type: `'home' | 'about' | 'ai-use'`
4. About link href: `/about`
5. Active state styling: cobalt color + 2px bottom border (existing pattern)

### Visual Consistency
- Same typography, spacing, hover states as current nav
- No visual changes to existing nav items

## Image Handling

### Import & Rendering
```astro
import headshot from '../assets/img/justin-elszasz-headshot.jpg';
```

### Styling Specifications
- **Shape:** `border-radius: 50%` for circular crop
- **Size:** `max-width: 220px` to keep it modest
- **Fit:** `object-fit: cover` ensures image fills circle properly
- **Position:** `object-position: center` (adjustable if needed)
- **Display:** `display: block` to prevent inline spacing issues

### Rationale
- 220px max-width keeps image from overwhelming the content
- `object-fit: cover` handles non-square source images gracefully
- Border-radius approach is simple and reliable

## Content Structure

### Headline
- **Font:** Didot (matches site heading hierarchy)
- **Size:** 2-2.5rem
- **Color:** Cobalt (`var(--cobalt)`) or n900 (`var(--n900)`)
- **Purpose:** Short, attention-grabbing intro statement
- **Example:** "Building capacity for cities that need it most" (placeholder)

### Bio Text
Two to three paragraphs with placeholder content covering:

1. **Why Good Enough was founded:** Motivation, gap identified, vision
2. **Experience & background:** Relevant expertise that positioned Justin for this work

**Typography:**
- **Font:** Avenir Next Condensed (body font)
- **Size:** 1.125rem
- **Color:** `var(--n700)` for softer contrast
- **Line height:** 1.6-1.7 for comfortable reading

**Placeholder format:**
- Clearly marked with brackets: `[Your background and why you started Good Enough...]`
- Easy to identify and replace with real content

## Responsive Behavior

### Desktop (default)
- Two-column grid: content left, image right
- Full spacing and sizing as specified

### Tablet/Mobile (≤768px breakpoint)
- Grid switches to single column
- Image stacks above content
- Image centers horizontally
- Maintains 220px max-width
- Content becomes full-width within container padding
- Container padding reduces for mobile
- Headline font size scales down using clamp() if needed
- Vertical spacing adjusts for narrower layout

### Design Goal
Natural top-to-bottom reading flow on mobile without awkward side-by-side cramming.

## Styling Approach

### Implementation
- Scoped `<style>` block within `about.astro` (matches existing pattern)
- Uses established CSS custom properties:
  - `var(--cobalt)`
  - `var(--n900)`
  - `var(--n700)`
  - `var(--bg)`

### Visual Continuity
- Subtle top border like services/partners sections
- Padding and max-width (72rem) match homepage containers
- Typography hierarchy consistent with existing pages
- Same spacing rhythm throughout

### Design Principle
Page feels like a natural extension of the existing site—no jarring shifts in design language when navigating from Home to About.

## File Changes Summary

1. **Create:** `/src/pages/about.astro`
   - Two-column grid layout
   - Headshot import and circular rendering
   - Headline + placeholder bio content
   - Scoped styles following existing patterns
   - Responsive breakpoint at 768px

2. **Modify:** `/src/layouts/Layout.astro`
   - Add "About" link in navigation
   - Reorder nav links
   - Update TypeScript interface for `activePage` prop

## Success Criteria

- [ ] About page displays with two-column layout on desktop
- [ ] Headshot renders as circle, max 220px wide
- [ ] Content-left, image-right layout as specified
- [ ] Navigation includes "About" in correct position
- [ ] Navigation reordered: Home, About, AI @ GE, Writing, Contact
- [ ] Active state works on /about route
- [ ] Mobile layout stacks image above content
- [ ] Placeholder text clearly marked for replacement
- [ ] Visual consistency with existing site maintained
