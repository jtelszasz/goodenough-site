# About Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an About page with two-column layout (content left, headshot right) and update navigation to include the new page.

**Architecture:** Create `/src/pages/about.astro` using CSS Grid for layout with responsive behavior. Update Layout.astro to add "About" to navigation and reorder links. Follow existing styling patterns with scoped styles.

**Tech Stack:** Astro, CSS Grid, TypeScript

---

## File Structure

**Files to Create:**
- `/src/pages/about.astro` - About page with two-column layout, headshot, and bio content

**Files to Modify:**
- `/src/layouts/Layout.astro` - Update navigation links and TypeScript interface

---

### Task 1: Update Navigation in Layout Component

**Files:**
- Modify: `/src/layouts/Layout.astro:7-10` (TypeScript interface)
- Modify: `/src/layouts/Layout.astro:27-31` (navigation links)

- [ ] **Step 1: Update TypeScript interface to include 'about' in activePage union type**

In `/src/layouts/Layout.astro`, change line 7:

```typescript
interface Props {
  title?: string;
  activePage?: 'home' | 'about' | 'ai-use';
}
```

- [ ] **Step 2: Reorder navigation links and add About link**

In `/src/layouts/Layout.astro`, replace the `<nav>` section (lines 27-31) with:

```astro
        <nav>
          <a href="/" class:list={[{ active: activePage === 'home' }]}>Home</a>
          <a href="/about" class:list={[{ active: activePage === 'about' }]}>About</a>
          <a href="/ai-use" class:list={[{ active: activePage === 'ai-use' }]}>AI @ GE</a>
          <a href="https://goodenough4gov.substack.com" target="_blank" rel="noopener">Writing</a>
          <a href="mailto:justin@goodenough4gov.com">Contact</a>
        </nav>
```

- [ ] **Step 3: Verify navigation order**

Check that the navigation now reads: Home, About, AI @ GE, Writing, Contact

- [ ] **Step 4: Commit navigation changes**

```bash
git add src/layouts/Layout.astro
git commit -m "feat: add About to navigation and reorder links

- Add 'about' to activePage union type
- Reorder nav: Home, About, AI @ GE, Writing, Contact

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 2: Create About Page with Layout Structure

**Files:**
- Create: `/src/pages/about.astro`

- [ ] **Step 1: Create about.astro with imports and frontmatter**

Create `/src/pages/about.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
import headshot from '../assets/img/justin-elszasz-headshot.jpg';
---

<Layout activePage="about">

  <section class="about">
    <div class="about-inner">

    </div>
  </section>

</Layout>
```

- [ ] **Step 2: Add two-column grid structure**

Inside the `<div class="about-inner">`, add:

```astro
      <div class="content">
        <h1 class="headline">Building capacity for cities that need it most</h1>

        <div class="bio">
          <p>
            [Why you founded Good Enough — your motivation, the gap you identified in how cities
            access technical capacity, and your vision for what good enough means in the public sector.]
          </p>

          <p>
            [Your background and experience — the roles, organizations, and work that positioned you
            to build Good Enough. Include relevant expertise in data, AI, digital services, city operations,
            or innovation that informs your approach.]
          </p>

          <p>
            [Additional context about your approach or philosophy, if needed.]
          </p>
        </div>
      </div>

      <div class="image">
        <img src={headshot.src} alt="Justin Elszasz" />
      </div>
```

- [ ] **Step 3: Verify page structure is complete**

Check that about.astro has:
- Layout component with activePage="about"
- Section with about class
- Inner container with about-inner class
- Content div with headline and bio
- Image div with headshot

- [ ] **Step 4: Commit page structure**

```bash
git add src/pages/about.astro
git commit -m "feat: create About page structure

- Two-column layout with content and image
- Placeholder bio text in brackets
- Import headshot from assets

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 3: Add Desktop Styles for About Page

**Files:**
- Modify: `/src/pages/about.astro` (add `<style>` block)

- [ ] **Step 1: Add scoped style block with section and container styles**

At the end of `/src/pages/about.astro`, before the closing tag, add:

```astro
<style>
  /* ── About Section ── */
  .about {
    border-top: 1px solid rgba(23, 23, 23, 0.10);
  }

  .about-inner {
    max-width: 72rem;
    margin: 0 auto;
    padding: 6rem 1.5rem;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 4rem;
    align-items: start;
  }
</style>
```

- [ ] **Step 2: Add content typography styles**

Inside the `<style>` block, add:

```css
  /* ── Content ── */
  .content {
    max-width: 48rem;
  }

  .headline {
    font-family: 'Didot', 'GFS Didot', Georgia, serif;
    font-size: 2.5rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: var(--cobalt);
    margin-bottom: 2rem;
  }

  .bio {
    color: var(--n700);
    font-size: 1.125rem;
    line-height: 1.7;
  }

  .bio p {
    margin-bottom: 1.5rem;
  }

  .bio p:last-child {
    margin-bottom: 0;
  }
```

- [ ] **Step 3: Add image styles**

Inside the `<style>` block, add:

```css
  /* ── Image ── */
  .image img {
    display: block;
    width: 220px;
    height: 220px;
    max-width: 220px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
```

- [ ] **Step 4: Test desktop layout in browser**

Run: `npm run dev`

Navigate to: `http://localhost:4321/about`

Expected:
- Two-column layout with content on left, image on right
- Headshot displays as 220px circle
- Headline uses Didot font in cobalt color
- Bio text is readable with proper spacing

- [ ] **Step 5: Commit desktop styles**

```bash
git add src/pages/about.astro
git commit -m "feat: add desktop styles for About page

- Grid layout with 4rem gap
- Headline typography in Didot/cobalt
- Circular headshot at 220px
- Bio text with proper spacing

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 4: Add Responsive Mobile Styles

**Files:**
- Modify: `/src/pages/about.astro` (add media query to `<style>` block)

- [ ] **Step 1: Add mobile breakpoint media query**

At the end of the `<style>` block in `/src/pages/about.astro`, add:

```css
  /* ── Responsive ── */
  @media (max-width: 768px) {
    .about-inner {
      grid-template-columns: 1fr;
      gap: 2.5rem;
      padding: 4rem 1.5rem;
    }

    .image {
      order: -1;
      display: flex;
      justify-content: center;
    }

    .headline {
      font-size: clamp(1.75rem, 5vw, 2.5rem);
    }
  }
```

- [ ] **Step 2: Test mobile layout in browser**

Run: `npm run dev` (if not already running)

Navigate to: `http://localhost:4321/about`

Resize browser to mobile width (< 768px)

Expected:
- Single column layout
- Image appears above content
- Image centered horizontally
- Headline scales down on smaller screens
- Reduced vertical padding

- [ ] **Step 3: Test tablet/desktop breakpoint**

Resize browser to > 768px

Expected:
- Two-column layout returns
- Image moves to right side
- Full spacing restored

- [ ] **Step 4: Commit responsive styles**

```bash
git add src/pages/about.astro
git commit -m "feat: add responsive mobile styles for About page

- Single column below 768px
- Image stacks above content
- Centered image on mobile
- Headline scales with clamp()

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

### Task 5: Final Verification and Testing

**Files:**
- Test: All modified files

- [ ] **Step 1: Test navigation active state on about page**

Navigate to: `http://localhost:4321/about`

Expected:
- "About" link in navigation has cobalt color and bottom border
- Other nav links are default color

- [ ] **Step 2: Test navigation active state on home page**

Navigate to: `http://localhost:4321/`

Expected:
- "Home" link has active styling
- "About" link does not have active styling

- [ ] **Step 3: Test navigation order**

Check that navigation reads left to right:
- Home
- About
- AI @ GE
- Writing
- Contact

- [ ] **Step 4: Verify all success criteria from spec**

Check:
- ✓ About page displays with two-column layout on desktop
- ✓ Headshot renders as circle, max 220px wide
- ✓ Content-left, image-right layout as specified
- ✓ Navigation includes "About" in correct position
- ✓ Navigation reordered: Home, About, AI @ GE, Writing, Contact
- ✓ Active state works on /about route
- ✓ Mobile layout stacks image above content
- ✓ Placeholder text clearly marked with brackets
- ✓ Visual consistency with existing site maintained

- [ ] **Step 5: Run build to verify no errors**

Run: `npm run build`

Expected: Build completes successfully with no errors

- [ ] **Step 6: Final commit if any fixes were needed**

If any fixes were made during testing:

```bash
git add .
git commit -m "fix: final adjustments for About page

[Describe any fixes made during testing]

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Implementation Complete

All tasks complete when:
- Navigation updated with About link in correct position
- About page created with two-column layout
- Headshot displays as 220px circle
- Responsive behavior works on mobile
- All success criteria verified
- Build passes without errors
