# Changelog

## [2.2.0] - 2026-07-15

### Added

- Dynamic age rendering in the About section based on the current date.
- Skill tooltips now show `Since {year}` to reflect first-use year instead of rounded experience counts.
- Refreshed skill metadata across the Skills section with explicit starting years.

### Changed

- Updated localized About metadata in all supported languages to support runtime age interpolation.
- Refined the Skills and About sections to present more precise, time-aware profile information.

### Performance

- Added `generateStaticParams()` for locale routes to improve static prerendering.
- Set the request locale in both the locale layout and page render path for better `next-intl` rendering performance and consistency.

### Notes

- This release focuses on profile freshness and locale rendering optimizations without changing the overall site structure.

## [2.1.0] – 2025-10-17

### Added

- Floating **Buy Me a Coffee** button next to the scroll-to-top FAB.
- Tooltip showing “Buy me a coffee” on hover or focus.
- Gentle **bouncing animation** when the scroll-to-top button is hidden.
- Smooth **layout transitions** when scroll-to-top appears or disappears.
- Added **ChatGPT** under <em>AI skills</em> in the Skills section.

### Changed

- Refactored component structure to use `motion.div layout` for stable animation.
- Updated `Button` + `TooltipTrigger` nesting to ensure proper tooltip behavior.
- Adjusted transition timing to eliminate delay when the scroll-to-top hides.
- Replaced `<a>` tag with `window.open()` for better compatibility with Framer Motion and Tooltip.

### 🧩 Dependency Updates

- Bumped @cantabile/date-helper → ^1.4.2
- Bumped @cantabile/hooks → ^1.2.1

### Notes

- Animation and layout are now separated for stability and reusability.
- The `motion.div layout` wrapper ensures correct re-rendering when FAB state changes.

## [2.0.2] - 2025-07-17

### 🛠️ Fixes

- **Code style cleanup:**
  Simplified the tags array for the Selen project in src/modules/portfolio.section/projects.ts by removing unnecessary line breaks and redundant spread markers.

### ✨ Summary

This patch focuses on small code hygiene improvements to keep the project data clean and consistent — no functional or UI changes introduced in this release.

## [2.0.1] - 2025-07-01

### ✨ Enhancements

- Google Analytics (GA4) Integration
  - Added support for privacy-aware analytics using [nextjs-google-analytics](https://www.npmjs.com/package/nextjs-google-analytics)
  - Measurement ID managed via NEXT_PUBLIC_GA_ID environment variable
  - Pageview tracking now active across client-side navigation

### 🪄 Documentation Improvements

- Refined and reformatted the **README.md**:
  - Improved visual structure using horizontal rules (---)
  - Updated tech stack to include **Analytics (GA4)**
  - Refined descriptions for **AI-related** and **Projects** sections
  - Expanded release notes for better readability and version context
  - Enhanced language consistency across sections

### 🧩 Dependency Updates

- Added new dependencies:
  - dotenv for environment variable management
  - `nextjs-google-analytics` for GA4 integration
- Updated the lockfile accordingly (bun.lock)

### 🧹 Miscellaneous

- Minor structural improvements to layout and project documentation

### 💡 Summary

This release introduces **Google Analytics GA4** for privacy-respectful insights, enhances documentation clarity, and prepares the foundation for upcoming analytics-driven features.

## [2.0.0] - 2025-07-01

### Added

- **New Skills section**: category cards (Frontend, UI Frameworks, Backend, Database, Language, Cloud, Tools, AI) with tooltips and optional external links.
- **Desktop & mobile navigation** using Radix Menubar with dropdowns and animated chevron; centralized menuList.
- **Portfolio enhancements**:
  - Project **status badges** (available, internal, achieved) with localized labels.
  - Tech **tags** rendered as badges.
  - New entries: **SURIC Connector** (achieved) and **SCG Internal Backoffice** (internal) with images.
- **Footer version**: shows version and links to the corresponding GitHub release.
- **Link UI component** wrapping next/link (uniform external link behavior).
- **i18n expansions** (EN/TH/JP/ZH):
  - General strings for project status + messages.
  - New Skills titles/subtitles and category names.
  - Resume work items keyed and localized subtitles.
- **Layout helpers**:
  - Section prop `shouldFit` to control viewport-fit sections.
  - `slideToElementId()` utility for deep-link scrolling within sections.

### Changed

- **Header/Appbar**: replaced ad-hoc mobile dropdown with Radix Menubar on mobile + desktop; reorganized nav (Home, About, Skills, Resume sub-items, Portfolio).
- **Resume**:
  - Rebuilt **Works** into responsive timeline/cards with skill badges per role.
  - Moved/generalized Skills display into the new dedicated **Skills section**.
- **Portfolio**: copy tweaks and improved subtitle; card layout refined; badges re-styled.
- **Section usage**: Hero and About now use `shouldFit` to stabilize first-fold layout.
- **Badge styles**: consolidated styling in `ui/badge.tsx` and consumers.
- **README**: updated Projects line (“Ezygas” capitalization) and added Release Notes block.

### Removed

- Old Resume **Skills** and **AI Skills** components.
- Old **Works** timeline implementation.
- `Socials Base` wrapper (replaced by the new `Link` component).

### Dependencies

- Added: `@radix-ui/react-menubar`, `uuid`.
- Introduced src/config/index.ts to expose version.

### Notes

- New images: `internal.png`, `suconnector.png`.
- Renamed `langauges.ts` → `languages.ts` and updated imports.

## [1.1.0] - 2025-06-30

### Added

- **Base Social Link Wrapper**

  - New `<Base />` component for unified external-link behavior with accessibility `(aria-label, rel="noopener noreferrer")`.
  - Used by all social icons for consistent handling and cleaner code.

- **New platform:**
  - Added **Medium** icon with vector logo and link to `@champbassist159` Medium profile.
  - Added **LINE** link integration `(https://line.me/ti/p/EldlUob9jm)`.

### Changed

- **Social Icons Refactor**:
  - Replaced all manual `window.open()` calls with `<Base />` wrapper.
  - Removed inline `cursor-pointer` duplication in favor of unified styling.
  - Re-ordered icons to `LinkedIn → GitHub → Medium → Mail → Line → Facebook` for better layout balance.

### Fixed

- Inconsistent external-link behavior between social icons (now all open in new tab safely).

### Notes

- This release focuses on **code reusability** and **link consistency** across all social media buttons.
- No UI breaking changes — all icons retain their appearance and hover effects.

## [1.0.1] - 2025-06-26

### Added

- **Portfolio tooltips**: Added hover tooltips on project cards to show project descriptions.
- **Skill hint**: Added localized “Hover to see years of experience” text `(skills-desc)` in all languages (EN, TH, JP, CN).

### Changed

- **Tooltip component**:
  - Improved dark-mode styling with `dark:bg-blue-light`.
  - Unified tooltip arrow fill color for theme consistency.
- **Portfolio layout**: Adjusted text alignment `(text-left)` and spacing for better readability.

### Fixed

- Translation accuracy:
  - JP: “英語 (English)” → “日本語 (Japanese)”
  - TH: “ภาษาอังกฤษ (English)” → “ภาษาญี่ปุ่น (Japanese)”

### Notes

- Minor visual polish and translation updates for multilingual consistency.

## [1.0.0] - 2025-06-25

### Added

- **Internationalization with next-intl**

  - Locale routes /[locale] (/en, /th, /cn, /jp)
  - src/middleware.ts for locale routing
  - i18n setup: src/i18n/{routing.ts, navigation.ts, request.ts}
  - src/app/[locale]/layout.tsx with NextIntlClientProvider

- **Localized app shell & pages**

  - src/app/[locale]/page.tsx (composes Hero, About, Resume, Portfolio)
  - Root redirect: src/app/page.tsx → /en
  - Not-found redirect: src/app/not-found.tsx → /en

- **Layouts & structure**

  - components/molecules/main-layout (Appbar + ScrollArea + Footer + Scroll-to-top)
  - components/molecules/section wrapper
  - components/molecules/timeline (refs + markdown support)
  - components/molecules/socials/\* (Facebook, LinkedIn, GitHub, Mail, Line)

- **Sections**

  - Hero (avatar, intro, socials, scroll-down)
  - About (bio, metadata, Download CV)
  - Resume (Works, Education, Lab Assistant, Skills, AI Skills, Languages, Non-dev, Pets)
  - Portfolio (tag filters + project cards)

- **Localization content**

  - messages/cn.json
  - messages/en.json
  - messages/jp.json
  - messages/th.json

- **Assets**

  - Images: /public/images/{me.jpg,ezygas.png,selen.png,senergy.png,sol7.png,synapes.png}
  - Icons/art: /src/assets/{graduation-cap.svg,job.svg,scrolldown.svg,working.png}

- **Hooks & utils**

  - use-language, use-theme (with theme switch), use-navigator, use-mounted, use-scope-translation
  - utils/utils.ts (cn, slideToSection, uniqueArray, scrollToTop)

- **UI components (Radix + shadcn-style)**
  - button, badge, tabs, select, dropdown-menu, tooltip, scroll-area, separator, switch, avatar, text
- **Styling**
  - Updated src/app/index.css: new color tokens (blue-\*), gradient button, scrollbar, dark-mode tones
- **Config/links**
  - config/langauges.ts (supported locales + fallback)
  - config/links.ts (socials, tech links, CV URL)
- **Animation**
  - config/animations.ts (fadeIn)

### How to Run

```bash
# install
bun install

# dev
bun dev
# open http://localhost:3000/en

# build & start
bun build
bun start
```

> devIndicators: false and --turbopack are enabled in dev.

### Highlights

- Clean landing with **full i18n**, smooth UX via **Radix/Shadcn** + **motion**
- Portfolio with tag filtering; resume split into clear, reusable blocks
- Scalable structure (sectionized + utility-first)
