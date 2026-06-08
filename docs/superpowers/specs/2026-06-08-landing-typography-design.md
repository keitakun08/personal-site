# Landing Typography Design Spec

## Goal

Refine the approved Home copy with expressive typography that keeps the visual personality of the original `RESHAPING` treatment without restoring the old wording.

## Final Copy

> Hello.
>
> I’m Keita Eriawan, a curious practitioner using data, code, and curiosity to explore messy questions and build useful things along the way.
>
> This is where I share projects, experiments, and what I learn while building them.

The closing “It’s nice to meet you” line remains removed.

## Name Treatment

`Keita Eriawan` keeps the original acid-green italic serif treatment.

The name should feel warm and personal while remaining visually distinct from the three technical/conceptual keywords.

## Keyword Treatments

Each keyword receives a different typographic personality.

### Data

- Blue/lilac monospace.
- Structured, column-like composition inspired by a dataset.
- Letters use small staggered vertical offsets within a stable inline footprint.
- A subtle looping column-shift animation reinforces the structured treatment.

### Code

- Warm clay monospace.
- Framed by bracket-like characters.
- Includes a subtle blinking cursor.
- Must remain readable and should not cause layout movement.

### Curiosity

- Acid-green italic serif.
- Uses a playful gently rising/falling baseline.
- Should feel exploratory rather than chaotic.

## Layout

- The three styled keywords appear inside the main introductory sentence.
- Each treatment must use a stable inline container so animation and styling do not resize or shift the surrounding sentence.
- The Home page remains a fixed, single-screen editorial landing page.
- No call-to-action button is added.

## Motion

- Motion should be restrained and continuous.
- `Data` uses a subtle staggered column shift.
- `Code` blinks its cursor.
- `Curiosity` gently floats along its offset baseline.
- Respect `prefers-reduced-motion` by disabling nonessential animation.

## Responsive Behavior

- All three styled words must remain readable on desktop and mobile.
- Small screens preserve the same treatments with reduced offsets and motion distance.
- No keyword may overlap surrounding copy.

## Acceptance Criteria

- `Keita Eriawan` uses the acid-green italic serif treatment.
- `data`, `code`, and `curiosity` each use visibly different treatments.
- The approved copy remains intact.
- “It’s nice to meet you” and `RESHAPING` remain absent.
- Styled words do not cause layout shifts or overlap.
- Reduced-motion users receive a stable presentation.
