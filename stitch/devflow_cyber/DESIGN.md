# Design System Strategy: High-End Editorial Portfolio

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Architect"**

The objective of this design system is to transition the Dulkifal brand from a standard personal site to a high-authority digital presence. We are moving away from "template-style" layouts—characterized by centered columns and generic shadows—toward an editorial, tech-forward experience. 

The "Architectural Architect" philosophy treats code as structure. We achieve this through **intentional asymmetry**, where content isn't just placed, but "constructed" across the canvas. By utilizing wide typography scales and a deep, monochromatic base layered with "glass" elements, we signal to potential clients that Dulkifal doesn't just write code; he engineers digital environments.

---

## 2. Colors
Our palette is rooted in the depth of `surface` (#131313), using high-contrast accents to guide the user’s eye through complex technical narratives.

### Color Tokens
- **Base:** `surface` (#131313) for primary backgrounds.
- **Accents:** `primary` (#adc6ff) and `secondary` (#ecb2ff) serve as the "electric" highlights against the dark canvas.
- **Functional:** `tertiary` (#ebc323) is reserved for high-priority CTA moments or "Golden Ratio" highlights.

### The Rules of Color Application
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for defining sections. We do not use "lines" to separate ideas. Boundaries must be defined solely through background color shifts. For example, a "My Skills" section may use `surface-container-low` to sit naturally on a `surface` background.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers. A `surface-container-lowest` card should sit inside a `surface-container-low` section. This nesting creates natural depth without visual noise.
*   **The "Glass & Gradient" Rule:** Use `surface-variant` with a `backdrop-blur` of 12px–20px for floating navigation or modal overlays. 
*   **Signature Textures:** For primary CTAs, do not use flat fills. Use a subtle linear gradient (45deg) transitioning from `primary` (#adc6ff) to `primary_container` (#4b8eff) to provide a "liquid-tech" feel.

---

## 3. Typography
The typography strategy is a play between technical precision and bold editorial statements.

*   **Headings (Space Grotesk):** This font carries the "tech" weight. Its geometric, slightly quirky terminals reflect a modern programming aesthetic. Use `display-lg` for hero statements with tight letter-spacing (-0.02em) to create an authoritative, "locked-in" look.
*   **Body (Inter):** Chosen for its clinical readability. Use `body-md` for general content. To maintain the premium feel, increase line-height to 1.6 for long-form text to allow the layout to "breathe."
*   **Hierarchy as Identity:** Use extreme scale contrast. A `display-lg` headline should often be paired directly with a `label-md` sub-caption to create a sophisticated, non-linear hierarchy that feels like a high-end magazine.

---

## 4. Elevation & Depth
In this system, elevation is conveyed through **Tonal Layering** rather than traditional drop shadows.

*   **The Layering Principle:** Depth is achieved by stacking surface tokens. 
    *   *Base Level:* `surface`
    *   *Interactive Elements:* `surface-container-high`
    *   *Active/Top Level:* `surface-bright`
*   **Ambient Shadows:** If a floating effect is required (e.g., a "Project Spotlight" card), use extra-diffused shadows. 
    *   *Spec:* `0px 24px 48px rgba(0, 0, 0, 0.4)`. The shadow color must be a tinted version of the background, never a generic grey.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use a "Ghost Border." Apply the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Apply to navigation bars and floating chips. Use a semi-transparent `surface-container` fill with a `backdrop-filter: blur(16px)`. This allows the vibrant accent colors of the background to bleed through, softening the UI.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), `roundness-md`, with `label-md` (bold) text. No border.
*   **Secondary:** Ghost style. `outline-variant` (20% opacity) with `on_surface` text.
*   **States:** On hover, primary buttons should "glow" using a soft `primary` shadow (10% opacity, 20px blur).

### Cards & Projects
*   **Forbid Dividers:** Do not use lines to separate project metadata. Use `spacing-8` (2rem) of vertical white space or a shift to `surface-container-highest` for the card background.
*   **Image Treatments:** Project thumbnails should have a slight `roundness-lg` and use a subtle `surface-tint` overlay that disappears on hover.

### Chips (Tech Stack)
*   **Styling:** Use `surface-container-high` with `on_surface_variant` text. 
*   **Shape:** `roundness-full` to contrast against the architectural, sharp-edged layout of the grid.

### Input Fields
*   **Styling:** Use `surface-container-lowest` for the field fill. 
*   **Focus State:** Instead of a thick border, use a 1px "Ghost Border" of `primary` at 50% opacity and a subtle glow.

### Interactive "Code" Snippets
*   A bespoke component for Dulkifal's portfolio. Use a `surface-container-highest` block with a `glassmorphism` overlay to showcase snippets of featured code, emphasizing his "Programmer" identity.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. For example, align a headline to the far left (Column 1) while the body text starts at Column 4.
*   **Do** use `tertiary` (#ebc323) sparingly. It is a "surgical" color used only for the most important conversion points.
*   **Do** lean into white space. If a section feels crowded, double the spacing token (e.g., move from `spacing-10` to `spacing-20`).

### Don't:
*   **Don't** use standard "Drop Shadows" (e.g., 0, 2, 4, black). They look cheap and dated.
*   **Don't** use centered text for body paragraphs. It breaks the "Architectural" editorial flow. Always left-align for technical authority.
*   **Don't** use 100% white (#FFFFFF) for body text on the dark background. Use `on_surface_variant` (#c1c6d6) to reduce eye strain and increase the "premium" feel.
*   **Don't** use dividers or horizontal rules. Let the negative space define the end of a thought.