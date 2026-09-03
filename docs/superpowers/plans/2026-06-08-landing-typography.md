# Landing Typography Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the approved distinct typography treatments for Keita Eriawan, data, code, and curiosity on the Home page.

**Architecture:** Keep the treatments inline in `src/pages/index.astro` and define their stable sizing, colors, animations, responsive behavior, and reduced-motion fallback in `src/styles/global.css`. Extend the existing source regression test to guard the approved copy and required classes.

**Tech Stack:** Astro, CSS animations, Node test runner.

---

### Task 1: Extend The Landing Regression Test

**Files:**
- Modify: `tests/landing-copy.test.mjs`

- [ ] Assert that `Keita Eriawan` uses `class="name"`.
- [ ] Assert that `data`, `code`, and `curiosity` use `keyword-data`, `keyword-code`, and `keyword-curiosity`.
- [ ] Assert that the old `type-break`, `marker`, and closing line remain absent.
- [ ] Run `node --test tests/landing-copy.test.mjs` and confirm it fails before implementation.

### Task 2: Implement Keyword Markup And Styling

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`

- [ ] Update the Home sentence with the styled name and three keyword spans.
- [ ] Add stable inline-box styling for all keyword treatments.
- [ ] Add staggered column offsets and motion for data.
- [ ] Add clay bracket/cursor styling and cursor blink for code.
- [ ] Add acid-green italic offset letters and gentle float for curiosity.
- [ ] Add reduced-motion overrides and mobile offset reductions.

### Task 3: Verify And Update PR

**Files:**
- Modify: `docs/superpowers/plans/2026-06-08-landing-typography.md`

- [ ] Run `node --test tests/landing-copy.test.mjs`.
- [ ] Run `npm run build`.
- [ ] Browser-check desktop and mobile for text, overlap, and stable layout.
- [ ] Browser-check reduced-motion computed animation state.
- [ ] Commit and push to `codex/update-landing-copy`.
- [ ] Confirm PR #3 Vercel checks pass.
