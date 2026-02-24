# Comprehensive Site Audit

**Site:** Shepherds of Cassini (shepherds-website-staging.vercel.app)
**Stack:** Next.js 15 (App Router) + Tailwind CSS v3 + GSAP + Swiper + Vercel
**Audit Date:** 2026-02-24
**Audited Against:** SEO best practices (2025-2026), OWASP Top 10, Core Web Vitals, WCAG 2.2 AA

---

## Severity Legend

| Symbol          | Meaning                                                |
| --------------- | ------------------------------------------------------ |
| :red_circle:    | **CRITICAL** -- Must fix before production launch      |
| :orange_circle: | **HIGH** -- Fix soon after launch / significant impact |
| :yellow_circle: | **MEDIUM** -- Should fix within first month            |
| :white_circle:  | **LOW** -- Best practice / nice-to-have                |
| :green_circle:  | **PASS** -- No action needed                           |

---

## SECTION 1: SEO

### 1.1 Search Engine Indexing

- [x] :red_circle: **No `robots.txt` file** -- No `robots.txt` route or static file exists anywhere in the project. Search engines have no crawling directives, and no sitemap reference. Create `app/robots.ts` using the Next.js Metadata API.
- [x] :red_circle: **No `sitemap.xml`** -- No sitemap generation exists. Search engines cannot discover pages efficiently. Create `app/sitemap.ts` listing the homepage, all `/music/[slug]` pages, and `/purchase`.
- [x] :red_circle: **No `robots` meta tag** -- No noindex/nofollow gating for staging vs production. The staging deployment at `shepherds-website-staging.vercel.app` is fully indexable by search engines, which will create duplicate content issues. Add environment-aware `robots` metadata.
- [x] :green_circle: **`<html lang='en'>` set** -- Correct language attribute present.

### 1.2 Canonical Tags

- [x] :red_circle: **No canonical tags on any page** -- No `alternates.canonical` in metadata exports. This means search engines may index the staging URL as the canonical version, or index duplicate URLs with/without trailing slashes. Add canonical URLs to all pages via the Next.js Metadata API.
- [x] :orange_circle: **`metadataBase` points to staging URL** -- `layout.tsx:30` sets `metadataBase` using `process.env.NEXT_PUBLIC_BASE_URL` with localhost fallback. On the deployed staging site, all OG image URLs resolve to `shepherds-website-staging.vercel.app`. Ensure the production deployment has `NEXT_PUBLIC_BASE_URL` set to the final production domain.

### 1.3 Meta Descriptions

- [x] :orange_circle: **Homepage meta description too long (223 chars)** -- `layout.tsx:26-27` sets a description of ~223 characters. Optimal SERP display is 120-155 characters. Google will truncate it. Shorten to focus on the key value proposition.
- [x] :orange_circle: **Music page descriptions are excessively long** -- `formatMetaDescr.ts` concatenates ALL credits AND ALL track names into a single description string, producing descriptions of 400+ characters. Truncate to 155 characters, focusing on album name, band name, and release date.
- [x] :orange_circle: **Purchase page has no metadata** -- `purchase/page.tsx` exports no `metadata` or `generateMetadata`. It inherits the homepage title and description, meaning search results show "Shepherds of Cassini | Official Website" with the homepage description. Add unique title and description.
- [x] :green_circle: **Music release pages have dynamic metadata** -- `music/[slug]/page.tsx:10-33` generates per-page titles, descriptions, keywords, OG and Twitter tags.

### 1.4 Title Tags

- [x] :green_circle: **Homepage title well-formed** -- "Shepherds of Cassini | Official Website" (42 chars, good).
- [x] :green_circle: **Music pages have unique titles** -- Format: `{Album Name} - Shepherds of Cassini`.
- [x] :orange_circle: **Purchase page has no unique title** -- Inherits homepage title.

### 1.5 Structured Data / Schema Markup

- [x] :orange_circle: **WebSite schema is minimal** -- `layout.tsx:35-39` only includes `@type` and `name`. Missing `url`, `description`, `publisher`, and `potentialAction` (SearchAction). Expand with at minimum `url` and `description`.
- [x] :orange_circle: **No MusicGroup schema** -- The band has no `MusicGroup` structured data. This is the most important schema type for a music artist website. Should include members, albums, genre, founding date, and `sameAs` links to all streaming/social profiles.
- [x] :orange_circle: **No MusicAlbum/MusicRecording schema on album pages** -- Music release pages (`/music/[slug]`) have no structured data. Each should have `MusicAlbum` schema with tracks, release date, artist, and links.
- [x] :yellow_circle: **No BreadcrumbList schema** -- Album pages have an implicit hierarchy (Home > Music > Album Name) but no breadcrumb structured data.
- [x] :white_circle: **No `sameAs` links in any schema** -- Social profiles (Bandcamp, Spotify, Apple Music, YouTube, Facebook, Instagram) should be linked via `sameAs` in the Organization or MusicGroup schema.

### 1.6 Open Graph / Social Meta

- [x] :green_circle: **OG tags present on homepage** -- `og:title`, `og:description`, `og:image` (1200x630 PNG) all present.
- [x] :green_circle: **Twitter Card tags present** -- `twitter:card` set to `summary_large_image` with matching title, description, and image.
- [x] :green_circle: **Music pages have page-specific OG images** -- Each album page specifies its own OG image (315x315).
- [ ] :yellow_circle: **OG images on music pages are small** -- `music/[slug]/page.tsx:26` specifies 315x315 images. Recommended OG image size is 1200x630 for optimal display on Facebook/Twitter. Consider generating properly sized OG images for each album.
- [ ] :orange_circle: **Purchase page has no OG tags** -- Inherits homepage OG data.

### 1.7 Favicon & Icons

- [x] :green_circle: **Favicon present** -- `/favicon.ico` (32x32) served correctly.
- [ ] :yellow_circle: **No Apple Touch Icon** -- No 180x180 icon for iOS home screen. Add via metadata API.
- [ ] :yellow_circle: **No web app manifest** -- No `manifest.webmanifest` for PWA support. Consider adding basic manifest with site name, icons, and theme color.

### 1.8 Font Loading

- [x] :green_circle: **Using `next/font/google`** -- Archivo Narrow, Cormorant Upright, and Jura loaded via Next.js font optimization.
- [x] :green_circle: **Fonts preloaded** -- Verified in live HTML: 6 `.woff2` files preloaded in `<head>`.
- [x] :green_circle: **No FOIT** -- Next.js defaults to `display: swap` for Google Fonts.

### 1.9 Image SEO

- [ ] :yellow_circle: **Gallery images have generic alt text** -- `Gallery.tsx:43`, `FullScreenGallery.tsx:67`, and `ImageGrid.tsx:19` all use `alt='Shepherds of Cassini gallery photo'` for every image. Each image should have a unique, descriptive alt text.
- [ ] :yellow_circle: **Product images have placeholder alt text** -- `purchase/page.tsx:23,33` uses "Placeholder Vinyl image" and "Placeholder CD image". Replace with actual descriptive alt text.
- [x] :green_circle: **Album cover images have good alt text** -- Each album's `frontCover.altText` includes the album name and artist.
- [x] :green_circle: **About photo has descriptive alt text** -- "Shepherds of Cassini band members standing together".

### 1.10 Content & E-E-A-T

- [ ] :white_circle: **No blog/news page** -- The homepage has a News section but there's no dedicated news/blog page. Regular content publishing builds topical authority.
- [ ] :white_circle: **Limited internal linking** -- Pages link between each other (music nav, purchase links) but there's no cross-linking strategy or related content.
- [x] :green_circle: **Band bio demonstrates expertise** -- The About section provides detailed band history, which supports E-E-A-T signals.

### 1.11 Emerging SEO (2025-2026)

- [ ] :white_circle: **No Speculation Rules API** -- Could add `<script type="speculationrules">` for faster perceived navigation between pages.
- [ ] :white_circle: **AVIF image format not enabled** -- See Performance section for details.
- [ ] :white_circle: **No AI Overviews optimization** -- Content could be structured with clear, direct answers for potential AI Overview citations (e.g., "Shepherds of Cassini is a..." in the first paragraph).

### 1.12 Analytics

- [x] :green_circle: **Google Analytics implemented** -- `layout.tsx:64` uses `@next/third-parties` GoogleAnalytics with tag `G-L7J30WL4PG`.
- [ ] :yellow_circle: **No Google Search Console verification detected** -- Ensure GSC is set up with the production domain and sitemap submitted.

---

## SECTION 2: SECURITY

### 2.1 Security Headers

- [ ] :red_circle: **No security headers configured at all** -- `next.config.mjs` is completely empty (`const nextConfig = {};`). None of the following critical headers are set:
  - **Content-Security-Policy (CSP)** -- No CSP header. The site embeds Bandcamp and YouTube iframes, which need to be whitelisted. Implement a CSP allowing `'self'`, `bandcamp.com`, `youtube.com`, `www.youtube.com`, `www.googletagmanager.com`, `www.google-analytics.com`, and Next.js inline scripts.
  - **X-Content-Type-Options** -- Missing `nosniff`. Prevents MIME-type sniffing attacks.
  - **X-Frame-Options** -- Site can be embedded in iframes by any domain, enabling clickjacking.
  - **Referrer-Policy** -- No control over referrer information.
  - **Permissions-Policy** -- No restriction on browser feature access (camera, microphone, geolocation).
  - Add all of these via the `headers()` config in `next.config.mjs`.
- [x] :green_circle: **HSTS present** -- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` (provided by Vercel).
- [ ] :orange_circle: **`X-Powered-By` not disabled** -- `next.config.mjs` does not set `poweredByHeader: false`. The `X-Powered-By: Next.js` header leaks framework information. While not observed on the current deployment (Vercel may strip it), it should be explicitly disabled.
- [ ] :yellow_circle: **Missing Cross-Origin headers** -- Consider adding `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Resource-Policy: same-origin` for enhanced isolation.

### 2.2 CORS

- [ ] :yellow_circle: **`Access-Control-Allow-Origin: *` on all responses** -- Confirmed in live response headers. This is Vercel's default. Not a major concern since the site has no API routes handling sensitive data, but worth noting.

### 2.3 Secrets & Environment Variables

- [ ] :red_circle: **Hardcoded password in client bundle** -- `layout.tsx:33` has `const hardcodedPassword = 'nail';`. Even though the `<PasswordWrapper>` is commented out (lines 51, 62), the password string is still included in the JavaScript bundle shipped to users. **Remove the password variable entirely, or move it to a server-only environment variable.**
- [ ] :orange_circle: **PasswordScreen stores password in plain text in localStorage** -- `PasswordScreen.tsx:15` stores `localStorage.setItem('authenticated', enteredPassword)` -- the raw password. If password protection is re-enabled, this should use a hashed token instead.
- [x] :green_circle: **No `.env` files committed** -- `.gitignore` properly excludes `.env*.local`.
- [ ] :yellow_circle: **`.gitignore` only excludes `.env*.local`** -- A file named `.env` (without `.local` suffix) would NOT be excluded. Add `.env` to `.gitignore` as well.

### 2.4 XSS Prevention

- [x] :green_circle: **No `dangerouslySetInnerHTML` with user input** -- Only used for trusted JSON-LD structured data.
- [x] :green_circle: **React's default escaping** -- JSX automatically escapes interpolated values.
- [x] :green_circle: **No API routes exposed** -- The site has no API routes, eliminating server-side injection vectors.

### 2.5 Dependency Security

- [ ] :orange_circle: **`npm audit` shows multiple vulnerabilities** -- The following were found:
  - **HIGH:** `braces` (<3.0.3) -- Uncontrolled resource consumption
  - **HIGH:** `cross-spawn` (7.0.0-7.0.4) -- ReDoS vulnerability
  - **HIGH:** `glob` (3.0.0-10.5.0) -- Command injection via CLI
  - **MODERATE:** `ajv` (<6.14.0) -- ReDoS with `$data` option
  - **MODERATE:** `js-yaml` (4.0.0-4.1.0) -- Prototype pollution
  - Run `npm audit fix` to address fixable issues. The `eslint` chain of vulnerabilities may require upgrading `eslint` to v10+.

### 2.6 Information Disclosure

- [ ] :yellow_circle: **Google Analytics ID exposed** -- `G-L7J30WL4PG` is visible in the source. This is standard and expected, but competitors can view traffic patterns via third-party tools. Not actionable, just an awareness item.

### 2.7 iframe Security

- [x] :green_circle: **YouTube iframes use `referrerPolicy='strict-origin-when-cross-origin'`** -- `VideoEmbed.tsx:32` correctly sets referrer policy on YouTube embeds.
- [ ] :yellow_circle: **Bandcamp iframes have no `sandbox` attribute** -- `BandcampPlayer.tsx:19,24` embeds Bandcamp player with `seamless` attribute (deprecated). Consider adding `sandbox="allow-scripts allow-same-origin allow-popups"` for defense-in-depth.

---

## SECTION 3: PERFORMANCE

### 3.1 Image Optimization

- [ ] :red_circle: **Massive unoptimized images in `/public`** -- 62 images totaling **73MB**. The 6 largest files are 4.3-5.1MB each (PNG album art). While Next.js Image component will serve optimized versions at runtime, these oversized source files cause:
  - Slower builds
  - Larger git repository
  - Unnecessarily large images served even after optimization (Next.js can only downsize, not magic away detail from a 5MB PNG)
  - **Action:** Compress source images. Album art PNGs should be no larger than 500KB-1MB. Gallery JPEGs should be under 500KB. Convert PNGs to WebP where transparency isn't needed.
- [ ] :orange_circle: **AVIF not enabled** -- `next.config.mjs` has no `images.formats` configuration. Adding `images: { formats: ['image/avif', 'image/webp'] }` gives 30-50% smaller images than WebP alone for supporting browsers.
- [ ] :orange_circle: **Background image uses `quality={100}`** -- `BackgroundImage.tsx:93` sets `quality={100}` on the fixed variant. For a blurred background image, `quality={75}` (default) or even lower would be visually indistinguishable but significantly smaller.
- [ ] :yellow_circle: **Background image `sizes` hint incorrect** -- `BackgroundImage.tsx:116,136` uses `sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'` for an image that fills the entire viewport. Should be `sizes='100vw'` so the browser downloads the appropriately sized image.

### 3.2 Client-Side JavaScript

- [x] :green_circle: **Server components by default** -- Pages (`page.tsx`, `layout.tsx`) and many components are server components.
- [ ] :yellow_circle: **Header is a client component with raw DOM queries** -- `Header.tsx:33-34` uses `document.querySelector('header')` and `document.querySelector('.logo')` instead of React refs. This is fragile and bypasses React's rendering model.
- [ ] :yellow_circle: **GSAP scroll handlers without throttling** -- `BackgroundImage.tsx:67` and `Header.tsx:66` both attach raw `scroll` event listeners without throttling or `requestAnimationFrame`. Scroll events fire at 60+ fps, causing unnecessary GSAP animations on every frame.
- [ ] :yellow_circle: **Hero carousel runs off-screen** -- `HeroImages.tsx:33` has a 4-second `setInterval` that continues even when the hero is scrolled off-viewport. Should pause with `IntersectionObserver` when not visible.

### 3.3 Bundle Size

- [ ] :orange_circle: **react-icons imports from 4 different icon sets** -- `Icon.tsx` imports from `react-icons/fa` (7 icons), `react-icons/si` (1), `react-icons/ai` (1), `react-icons/md` (1). Additionally, `purchase/page.tsx` and `ShippingInfo.tsx` import more icons from `react-icons/fa`. Each icon set adds to the bundle. Consider consolidating to a single set or using custom SVG icons (~2-3KB vs estimated 15-25KB gzipped for react-icons).
- [ ] :yellow_circle: **No bundle analyzer configured** -- No `@next/bundle-analyzer` or similar tool. Add for visibility into bundle composition.
- [ ] :yellow_circle: **Swiper imported for simple gallery** -- `FullScreenGallery.tsx` and `ProductList.tsx` import Swiper (~30KB gzipped) for what is essentially a prev/next image carousel. A lightweight custom implementation could save significant bundle weight.
- [x] :green_circle: **`next.config.mjs` is minimal** -- No unnecessary experimental features enabled.

### 3.4 Core Web Vitals

- [ ] :yellow_circle: **Potential CLS from header height transition** -- `Header.tsx:42-46` animates `height` from `10rem` to `6rem` via GSAP on scroll. Height animations are not GPU-composited and can cause layout shifts. Consider using `transform: scale()` instead, or set a fixed height with `transform: translateY()` for the shrink effect.
- [ ] :yellow_circle: **Cloud animations may impact INP** -- `styles.module.scss` has continuous CSS animations on large elements (70vw-200vh elements). While CSS animations are generally GPU-accelerated, the large element sizes with `border-radius: 50%` and `opacity` changes can cause paint on some devices.
- [x] :green_circle: **Hero image marked as priority** -- `HeroImages.tsx:82` correctly sets `priority={index === 0}` on the first hero image.
- [x] :green_circle: **Background image marked as priority** -- `BackgroundImage.tsx:91,112,132` uses `priority` loading.
- [x] :green_circle: **Fonts preloaded** -- Next.js handles font preloading automatically.

### 3.5 Caching Strategy

- [x] :green_circle: **Vercel caching active** -- Response headers show `x-vercel-cache: HIT` and `x-nextjs-prerender: 1`, confirming static generation and edge caching.
- [ ] :yellow_circle: **No `Cache-Control` customization** -- Currently uses Vercel defaults (`public, max-age=0, must-revalidate`). Since the site content is static (no CMS), consider setting longer `revalidate` periods or fully static generation.
- [x] :green_circle: **Static pages properly generated** -- All pages are statically generated at build time.

### 3.6 Third-Party Resources

- [ ] :yellow_circle: **No preconnect for Bandcamp** -- The homepage embeds a Bandcamp player iframe. Adding `<link rel="preconnect" href="https://bandcamp.com">` could speed up the embed load.
- [ ] :yellow_circle: **No preconnect for YouTube** -- Album/news pages embed YouTube videos. Add preconnect hints where these appear above the fold.
- [x] :green_circle: **Google Analytics loaded via `@next/third-parties`** -- Uses Next.js optimized integration, loaded after page content.
- [ ] :yellow_circle: **YouTube embeds not lazy loaded** -- `VideoEmbed.tsx:27` renders an iframe immediately without `loading='lazy'`. Since videos appear below the fold on the news section, add `loading='lazy'` to defer iframe loading.

### 3.7 CSS

- [x] :green_circle: **Tailwind CSS with minimal custom styles** -- `globals.scss` is only ~93 lines of custom styles.
- [x] :green_circle: **CSS properly chunked** -- Two CSS files loaded in the HTML head.

### 3.8 Rendering

- [ ] :white_circle: **Each ScrollReveal creates its own IntersectionObserver** -- For pages with many animated elements (e.g., galleries with 6+ items), consider a shared observer pattern.
- [x] :green_circle: **ScrollReveal respects `prefers-reduced-motion`** -- `useScrollReveal.ts:18` checks for reduced motion preference and shows elements immediately if set.

---

## SECTION 4: ACCESSIBILITY

### 4.1 Skip-to-Content Link

- [ ] :red_circle: **No skip-to-content link** -- There is no skip link allowing keyboard users to bypass the header navigation and jump to `<main>`. The header has 6+ navigation links that must be tabbed through on every page. **Add a skip link as the first focusable element in `<body>`. WCAG 2.4.1 failure.**
- [x] :green_circle: **`<main>` element present** -- `layout.tsx:58` wraps page content in `<main>`. Just needs an `id` attribute for the skip link target.

### 4.2 Document Structure

- [x] :green_circle: **Language attribute set** -- `<html lang='en'>`.
- [x] :green_circle: **Viewport allows zoom** -- No `user-scalable=no` or `maximum-scale=1`.
- [x] :green_circle: **Semantic HTML structure** -- Proper `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` usage.
- [x] :green_circle: **SR-only H1 on homepage** -- `page.tsx:17` uses `<h1 className='sr-only'>` for screen readers.

### 4.3 Heading Hierarchy

- [x] :green_circle: **Proper H1-H2 hierarchy on homepage** -- H1 (sr-only) > H2 for each section (News, Music, About, Contact).
- [x] :green_circle: **H1 on album pages** -- `MusicTemplate.tsx:28` uses `<h1>` for album name.
- [x] :green_circle: **H1 on purchase page** -- `purchase/page.tsx:77` uses `<h1>`.
- [ ] :yellow_circle: **H3 used in hero without H2 context** -- `Hero.tsx:57` uses `<h3>` ("New album streaming now") inside the hero section, but the hero section has no H2. This creates a heading level skip (H1 > H3). Consider using H2 instead.

### 4.4 Keyboard Navigation

- [ ] :red_circle: **Gallery image grid not keyboard accessible** -- `ImageGrid.tsx:15` and `Gallery.tsx:39` use `<div onClick>` for clickable gallery thumbnails. These elements cannot receive keyboard focus and have no `role`, `tabIndex`, or keyboard event handlers. Convert to `<button>` elements. **WCAG 2.1.1 failure.**
- [ ] :orange_circle: **Hamburger button focus ring removed** -- `Header.tsx:97` uses `focus:outline-none` with no visible replacement focus indicator. The active/hover states exist but there is no visible focus ring for keyboard users. Add `focus-visible:ring-2 focus-visible:ring-white`. **WCAG 2.4.7 failure.**
- [ ] :orange_circle: **Gallery close button focus ring removed** -- `FullScreenGallery.tsx:44` uses `focus:outline-none` with no replacement. Same fix needed. **WCAG 2.4.7 failure.**
- [ ] :orange_circle: **No focus trapping in FullScreenGallery** -- Unlike `HamburgerMenu.tsx` which properly traps focus, the `FullScreenGallery.tsx` gallery modal has no focus trapping. Keyboard users can Tab behind the modal overlay. Implement focus trapping similar to the hamburger menu.
- [x] :green_circle: **Focus trapping in hamburger menu** -- `HamburgerMenu.tsx:58-78` properly cycles Tab/Shift+Tab within the menu.
- [x] :green_circle: **Escape key closes hamburger menu** -- `HamburgerMenu.tsx:52-55`.
- [x] :green_circle: **Escape key closes gallery** -- `FullScreenGallery.tsx:20-21`.
- [x] :green_circle: **Arrow keys navigate gallery** -- `FullScreenGallery.tsx:22-29` handles ArrowLeft/ArrowRight.
- [x] :green_circle: **Body scroll lock** -- `useLockBodyScroll.ts` prevents background scrolling when overlays are open.

### 4.5 Interactive Elements

- [ ] :red_circle: **Social icon links have no accessible names** -- `SocialIcons.tsx:11-35` wraps SVG icons in `<Link>` elements with no `aria-label`, no visible text, and no `<title>` element inside the SVGs. Screen readers announce these as empty links or just "link". Must add `aria-label` to each (e.g., `aria-label='Bandcamp'`, `aria-label='Spotify'`). **WCAG 1.1.1 / 4.1.2 failure.**
- [ ] :orange_circle: **Gallery Previous/Next buttons lack accessible labels** -- `FullScreenGallery.tsx:48-53` uses HTML entities `&#10094;` and `&#10095;` (chevron characters) as button content with no `aria-label`. Screen readers may not announce these meaningfully. Add `aria-label='Previous image'` and `aria-label='Next image'`.
- [ ] :orange_circle: **Hamburger button `aria-label` doesn't update** -- `Header.tsx:95` always says `aria-label='Open menu'` even when the menu is open and the button shows an X icon. Should dynamically toggle to `'Close menu'` when `isHamburgerOpen` is true.
- [ ] :yellow_circle: **`type='nav'` set on `<a>` elements** -- `Navbar.tsx:32` and `HamburgerMenu.tsx:118` set `type='nav'` on `<Link>` (rendered as `<a>`). `type` is not a valid attribute for anchor elements (it's valid on `<button>`, `<input>`, etc.). Remove these attributes.
- [ ] :yellow_circle: **No `aria-current` on active navigation link** -- Navigation links don't indicate the currently active page. Add `aria-current='page'` to the active link for screen reader users.
- [x] :green_circle: **CTA/Button components use correct semantics** -- `Button.tsx` uses `<button>`, `ButtonLink.tsx` uses `<Link>/<a>`.
- [x] :green_circle: **Button aria-labels provided** -- Listen/purchase buttons have descriptive `ariaLabel` props.

### 4.6 Screen Reader Support

- [ ] :orange_circle: **BandcampPlayer iframes missing `title`** -- `BandcampPlayer.tsx:19,24` renders two `<iframe>` elements with no `title` attribute. Screen readers use the `title` to announce what the iframe contains. Add `title='Bandcamp music player'`. **WCAG 4.1.2 concern.**
- [ ] :orange_circle: **FullScreenGallery not announced as dialog** -- `FullScreenGallery.tsx:39` is a modal overlay using a plain `<div>`. It has no `role='dialog'`, `aria-modal='true'`, or `aria-label`. Screen readers don't know a modal has opened. Add proper ARIA dialog attributes.
- [ ] :yellow_circle: **BioText "Read bio" toggle missing `aria-expanded`** -- `BioText.tsx:42` has a button that toggles expanded content but doesn't communicate its state. Add `aria-expanded={isExpanded}` so screen readers announce "Read bio, collapsed" or "Hide bio, expanded".
- [ ] :yellow_circle: **`role='menu'` used incorrectly** -- `HamburgerMenu.tsx:100` uses `role='menu'` for what is a navigation menu. The WAI-ARIA `menu` role is for application-style menus (like right-click menus), not navigation. Use `role='dialog'` or just rely on the `<nav>` element inside.
- [x] :green_circle: **`inert` attribute on closed menu** -- `HamburgerMenu.tsx:99` properly sets `inert` when the menu is closed, preventing focus and screen reader interaction.

### 4.7 Color Contrast

- [ ] :yellow_circle: **Gold gradient text may have contrast issues** -- The `gold-gradient` CSS class (`globals.scss:50-64`) applies a gradient that ranges from `#ceb533` to `#93811e`. On a black background (`#130A0B`), the darkest gold (`#93811e`) has approximately 4.8:1 contrast (passes AA for normal text), but the mid-range (`#827532`) may dip below 4.5:1 in certain areas of the gradient. Verify with a contrast checker tool.
- [ ] :yellow_circle: **`text-gray-400` used for product details** -- `ProductItem.tsx:47` uses `text-gray-400` (`#9ca3af`) on a dark background. While likely passing AA on pure black, verify the actual rendered contrast ratio.
- [x] :green_circle: **Primary content text passes contrast** -- `#E5FCFF` (shepherds_white) on `#130A0B` (shepherds_black) = ~18:1 ratio (excellent).
- [x] :green_circle: **Red accent text adequate** -- `#DE5F5F` (red_bright) on `#130A0B` = ~5.5:1 (passes AA).

### 4.8 Images & Media

- [ ] :yellow_circle: **Gallery images all share same generic alt text** -- `Gallery.tsx:43`, `FullScreenGallery.tsx:67`, and `ImageGrid.tsx:19` use `'Shepherds of Cassini gallery photo'` for every image. Ideally each should have unique alt text, or at minimum include an index (e.g., "Band photo 1 of 6").
- [ ] :yellow_circle: **VideoEmbed fallback title is generic** -- `VideoEmbed.tsx:30` defaults to `'YouTube Video'` if no title prop is passed. While the current usage in `AlbumRelease.tsx:19` passes `title='Red Veil'`, any future usage without a title will be inaccessible.
- [x] :green_circle: **Album cover images have descriptive alt text** -- All album data includes meaningful `altText` values.
- [x] :green_circle: **Background image has descriptive alt text** -- "In Thrall to Heresy back cover".

### 4.9 Focus Indicators

- [ ] :orange_circle: **Hamburger button: `focus:outline-none` with no replacement** -- See 4.4 above.
- [ ] :orange_circle: **Gallery close button: `focus:outline-none` with no replacement** -- See 4.4 above.
- [x] :green_circle: **Default browser focus outlines on most elements** -- Links and buttons that don't explicitly remove focus styles retain browser defaults.
- [ ] :yellow_circle: **ButtonLink components have no visible focus ring** -- `ButtonLink.tsx` doesn't include any focus ring classes. Keyboard users may not see which button is focused. Add `focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2`.

### 4.10 Motion & Reduced Motion

- [ ] :orange_circle: **Cloud CSS animations ignore `prefers-reduced-motion`** -- `styles.module.scss` has continuous 8-second looping animations on cloud elements with no `@media (prefers-reduced-motion: reduce)` query. Users who prefer reduced motion will still see these animations. Add a media query to pause or remove the animations.
- [ ] :yellow_circle: **GSAP scroll animations ignore `prefers-reduced-motion`** -- `BackgroundImage.tsx` and `Header.tsx` perform scroll-triggered GSAP animations without checking `prefers-reduced-motion`. While `useScrollReveal.ts` correctly checks this preference, the GSAP animations do not.
- [x] :green_circle: **ScrollReveal respects reduced motion** -- `useScrollReveal.ts:18` properly checks `prefers-reduced-motion`.

### 4.11 Touch Targets

- [x] :green_circle: **Hamburger button meets minimum size** -- `Header.tsx:97` is `w-14 h-14` (56x56px) on mobile, exceeding WCAG 2.2's 24px minimum.
- [x] :green_circle: **CTA buttons meet guidelines** -- `Button.tsx` and `ButtonLink.tsx` have `py-4` padding providing adequate touch targets.
- [x] :green_circle: **Navigation links adequate** -- Mobile nav links in hamburger menu have `p-4` padding.

### 4.12 Miscellaneous

- [ ] :yellow_circle: **Copyright year hardcoded to 2024** -- `Copyright.tsx:4` renders "2024 Shepherds of Cassini". Should be dynamically generated with `new Date().getFullYear()` or updated to 2025/2026.
- [ ] :yellow_circle: **External links missing `rel` context** -- `SocialIcons.tsx` and other external links use `target='_blank'`. Next.js `<Link>` automatically adds `rel="noopener"` but not `rel="noreferrer"` for external links. Consider adding both explicitly for privacy.

---

## SECTION 5: IMPLEMENTATION PRIORITY MATRIX

### :red_circle: CRITICAL -- Fix Before Production Launch

| #   | Issue                                                                                                    | Category      | Location                              |
| --- | -------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------- |
| 1   | Add `robots.txt` with sitemap reference                                                                  | SEO           | Create `app/robots.ts`                |
| 2   | Add `sitemap.xml` with all pages                                                                         | SEO           | Create `app/sitemap.ts`               |
| 3   | Add canonical URLs to all pages                                                                          | SEO           | `layout.tsx` metadata + page-level    |
| 4   | Add environment-aware `robots` meta tag (noindex staging)                                                | SEO           | `layout.tsx` metadata                 |
| 5   | Add security headers (CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy) | Security      | `next.config.mjs` headers config      |
| 6   | Remove hardcoded password from client bundle                                                             | Security      | `layout.tsx:33`                       |
| 7   | Add skip-to-content link                                                                                 | Accessibility | Create component, add to `layout.tsx` |
| 8   | Add `aria-label` to all social icon links                                                                | Accessibility | `SocialIcons.tsx`                     |
| 9   | Convert gallery image `<div onClick>` to `<button>`                                                      | Accessibility | `ImageGrid.tsx`, `Gallery.tsx`        |

### :orange_circle: HIGH -- Fix Within First Week

| #   | Issue                                                            | Category      | Location                      |
| --- | ---------------------------------------------------------------- | ------------- | ----------------------------- |
| 10  | Add `MusicGroup` structured data                                 | SEO           | `layout.tsx` or new component |
| 11  | Add `MusicAlbum` structured data to album pages                  | SEO           | `MusicTemplate.tsx`           |
| 12  | Add unique metadata to Purchase page                             | SEO           | `purchase/page.tsx`           |
| 13  | Shorten homepage meta description to ~150 chars                  | SEO           | `layout.tsx:26`               |
| 14  | Shorten music page meta descriptions                             | SEO           | `formatMetaDescr.ts`          |
| 15  | Expand WebSite schema (add `url`, `description`)                 | SEO           | `layout.tsx:35-39`            |
| 16  | Disable `poweredByHeader` in next.config                         | Security      | `next.config.mjs`             |
| 17  | Run `npm audit fix` for dependency vulnerabilities               | Security      | Terminal                      |
| 18  | Compress source images (73MB -> target ~15MB)                    | Performance   | `/public/imgs/`               |
| 19  | Enable AVIF image format                                         | Performance   | `next.config.mjs`             |
| 20  | Add focus ring to hamburger button                               | Accessibility | `Header.tsx:97`               |
| 21  | Add focus ring to gallery close button                           | Accessibility | `FullScreenGallery.tsx:44`    |
| 22  | Add `aria-label` to gallery Previous/Next buttons                | Accessibility | `FullScreenGallery.tsx:48-53` |
| 23  | Add `title` to Bandcamp iframes                                  | Accessibility | `BandcampPlayer.tsx:19,24`    |
| 24  | Add `role='dialog'`, `aria-modal`, `aria-label` to gallery modal | Accessibility | `FullScreenGallery.tsx:39`    |
| 25  | Add focus trapping to FullScreenGallery                          | Accessibility | `FullScreenGallery.tsx`       |
| 26  | Toggle hamburger `aria-label` between Open/Close                 | Accessibility | `Header.tsx:95`               |
| 27  | Add `prefers-reduced-motion` to cloud animations                 | Accessibility | `styles.module.scss`          |
| 28  | Set `metadataBase` to production domain in env                   | SEO           | Vercel env vars               |

### :yellow_circle: MEDIUM -- Fix Within First Month

| #   | Issue                                           | Category      | Location                            |
| --- | ----------------------------------------------- | ------------- | ----------------------------------- |
| 29  | Add Apple Touch Icon and web manifest           | SEO           | Metadata API                        |
| 30  | Add larger OG images for music pages (1200x630) | SEO           | Music data files                    |
| 31  | Fix generic gallery image alt texts             | SEO/A11y      | Multiple gallery components         |
| 32  | Fix product placeholder alt texts               | SEO/A11y      | `purchase/page.tsx`                 |
| 33  | Add BreadcrumbList structured data              | SEO           | Album pages                         |
| 34  | Add `.env` to `.gitignore`                      | Security      | `.gitignore`                        |
| 35  | Add `sandbox` to Bandcamp iframes               | Security      | `BandcampPlayer.tsx`                |
| 36  | Fix background image `sizes` hint to `100vw`    | Performance   | `BackgroundImage.tsx:116,136`       |
| 37  | Remove `quality={100}` from background images   | Performance   | `BackgroundImage.tsx:93`            |
| 38  | Throttle GSAP scroll handlers                   | Performance   | `BackgroundImage.tsx`, `Header.tsx` |
| 39  | Pause hero carousel when off-screen             | Performance   | `HeroImages.tsx`                    |
| 40  | Add `loading='lazy'` to YouTube iframes         | Performance   | `VideoEmbed.tsx:27`                 |
| 41  | Add `aria-expanded` to bio toggle button        | Accessibility | `BioText.tsx:42`                    |
| 42  | Remove invalid `type='nav'` from `<a>` elements | Accessibility | `Navbar.tsx`, `HamburgerMenu.tsx`   |
| 43  | Fix `role='menu'` to `role='dialog'` or remove  | Accessibility | `HamburgerMenu.tsx:100`             |
| 44  | Add `aria-current='page'` to active nav link    | Accessibility | `Header.tsx`, `Navbar.tsx`          |
| 45  | Add focus ring to ButtonLink components         | Accessibility | `ButtonLink.tsx`                    |
| 46  | Add `prefers-reduced-motion` to GSAP animations | Accessibility | `BackgroundImage.tsx`, `Header.tsx` |
| 47  | Update copyright year to be dynamic             | Accessibility | `Copyright.tsx:4`                   |
| 48  | Fix H3 in hero section (should be H2)           | Accessibility | `Hero.tsx:57`                       |
| 49  | Use React refs instead of DOM queries in Header | Performance   | `Header.tsx:33-34`                  |
| 50  | Verify GSC setup and submit sitemap             | SEO           | External service                    |

### :white_circle: LOW -- Best Practice / Refinement

| #   | Issue                                                | Category    | Location                                   |
| --- | ---------------------------------------------------- | ----------- | ------------------------------------------ |
| 51  | Add `sameAs` social links to schema                  | SEO         | Structured data                            |
| 52  | Add blog/news content strategy                       | SEO         | New page/content                           |
| 53  | Add Speculation Rules API for prefetching            | Performance | `layout.tsx`                               |
| 54  | Add preconnect hints for Bandcamp/YouTube            | Performance | `layout.tsx`                               |
| 55  | Consolidate react-icons to single set or custom SVGs | Performance | `Icon.tsx`, other files                    |
| 56  | Add bundle analyzer                                  | Performance | `next.config.mjs` / dev deps               |
| 57  | Consider lightweight alternative to Swiper           | Performance | `FullScreenGallery.tsx`, `ProductList.tsx` |
| 58  | Shared IntersectionObserver for ScrollReveal         | Performance | `useScrollReveal.ts`                       |
| 59  | Add Cross-Origin isolation headers                   | Security    | `next.config.mjs`                          |
| 60  | AI Overviews content optimization                    | SEO         | Content structure                          |

---

## THINGS DONE WELL

The following aspects of the site are well-implemented and should be maintained:

**SEO:**

- Google Analytics properly integrated via `@next/third-parties`
- Correct `<html lang='en'>` attribute
- Proper use of `next/font/google` for optimized font loading
- Good alt text on album cover images and band photos
- Dynamic metadata on music release pages
- Well-formed title tags

**Security:**

- No hardcoded secrets (except the commented-out password -- see above)
- No API routes to protect
- No `.env` files committed
- YouTube iframes set proper `referrerPolicy`
- React's built-in XSS protection via JSX escaping
- HSTS provided by Vercel

**Performance:**

- Server components by default (pages and layout are server components)
- Static generation for all pages (confirmed via `x-nextjs-prerender: 1`)
- Vercel edge caching active
- Hero images use `priority` loading
- Next.js Image component used throughout (no raw `<img>` tags)
- BlurImage component provides smooth loading transitions
- Proper `sizes` attributes on most images
- Minimal CSS (Tailwind + ~93 lines of custom SCSS)

**Accessibility:**

- Semantic HTML structure (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`)
- SR-only H1 on homepage
- Proper heading hierarchy (H1 > H2) on most pages
- Focus trapping and Escape key handling in hamburger menu
- `inert` attribute on closed hamburger menu
- Body scroll locking for overlays
- Viewport allows pinch-to-zoom
- `prefers-reduced-motion` respected in ScrollReveal
- Arrow key navigation in gallery
- Descriptive `aria-label` on CTA buttons

---

_Audit performed using static code analysis of the full codebase, live site inspection of the deployed staging URL (shepherds-website-staging.vercel.app), HTTP header analysis, and current (2025-2026) best practice research. For dynamic testing, run Lighthouse, axe DevTools, and WAVE against the deployed site. For real-world Core Web Vitals data, use Google PageSpeed Insights after the site has production traffic._
