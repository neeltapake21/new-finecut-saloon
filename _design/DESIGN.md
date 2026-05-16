---
name: Obsidian & Gold Premium
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c6c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#d0cdcd'
  on-tertiary: '#313030'
  tertiary-container: '#b4b2b2'
  on-tertiary-container: '#454544'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 32px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
---

## Brand & Style

This design system embodies the essence of a high-end luxury saloon—sophisticated, masculine, and timeless. It targets a discerning clientele that values precision, discretion, and heritage. The aesthetic is rooted in **Minimalism** with a heavy emphasis on negative space and editorial-grade typography.

The emotional response should be one of "quiet luxury." By stripping away unnecessary ornamentation and relying on a strict, high-contrast palette of deep obsidian and metallic gold, the UI feels exclusive and premium. Visual density is kept low to ensure every element—from a service price to a booking button—feels deliberate and important.

## Colors

The palette is strictly dark-mode by default to evoke the atmosphere of a private lounge. 

- **Primary (Gold):** Used sparingly for interactive accents, dividers, and status indicators. It represents the "standard of excellence."
- **Secondary (Platinum Grey):** The primary color for typography and iconography, ensuring high legibility against the dark background without the harshness of pure white.
- **Neutral (Obsidian Black):** The foundation of the system. Used for page backgrounds.
- **Tertiary (Onyx):** A slightly lighter shade of black used for surface-level containers (cards, input fields) to create subtle depth.

## Typography

The typographic hierarchy relies on the tension between a traditional, high-contrast Serif and a sharp, contemporary Sans-Serif.

- **Headlines:** Set in *Libre Caslon Text*. This choice provides a classic, authoritative voice. Headlines should use generous margins to allow the letterforms to breathe.
- **Body & Interface:** Set in *Hanken Grotesk*. This font provides a clean, technical counterpoint to the Serif, ensuring that functional information remains legible and professional.
- **Micro-copy:** Labels and buttons utilize uppercase styling with increased letter-spacing to reinforce the premium, "tailored" feel of the interface.

## Layout & Spacing

The layout philosophy is based on a **fixed-width grid** for desktop to maintain control over the "editorial" composition. 

- **The Golden Ratio:** Use 1.618 as a multiplier for determining vertical rhythm between disparate content blocks.
- **Negative Space:** Sections must have significant vertical padding (minimum 120px on desktop) to prevent the UI from feeling cluttered.
- **Grid:** A 12-column grid with wide gutters (32px). Large images or featured text blocks should frequently span 6 or 8 columns, centered, to create a focused viewing experience.
- **Mobile:** Transition to a 4-column fluid grid with 20px margins. Reduce section padding but maintain enough white space to ensure the "breathable" luxury feel isn't lost on smaller screens.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layering** and **Thin Outlines**.

- **Surfaces:** Depth is achieved by placing `#1A1A1A` (Onyx) containers against the `#0B0B0B` (Obsidian) background. 
- **Borders:** Instead of shadows, use 1px solid borders in Primary Gold (`#D4AF37`) for active states or Secondary Platinum (`#E5E5E5`) at 10% opacity for inactive containers.
- **Dividers:** Use extremely thin (0.5px - 1px) horizontal lines in Gold to separate major content sections or list items, mimicking the pinstripe of a bespoke suit.
- **Backdrop:** For overlays or modals, use a high-radius background blur (20px+) with a 60% opacity Obsidian tint to maintain focus on the elevated content.

## Shapes

To maintain a masculine, architectural, and serious tone, the design system utilizes **Sharp** corners. 

- **Buttons & Inputs:** Hard 90-degree angles convey precision and strength.
- **Images:** All photography should be cropped with sharp corners.
- **Exception:** Very small functional elements like radio buttons or toggles may use a 1px radius for optical softening, but visually, the system remains strictly rectilinear.

## Components

### Buttons
- **Primary:** Solid Gold background with Obsidian text. Sharp corners. All-caps typography.
- **Secondary:** Transparent background with 1px Gold border. Gold text.
- **Tertiary:** Text-only, underlined with a 1px Gold stroke that expands on hover.

### Input Fields
- Underline-only style preferred. A 1px Platinum Grey line that turns Gold on focus. Label is positioned above the line in uppercase micro-copy.

### Cards
- No shadows. Background color `#1A1A1A`. 1px border at 10% Platinum opacity. Cards should have generous internal padding (min 40px).

### Lists
- Used for service menus. Item name on the left (Serif), price on the right (Sans-Serif), connected by a subtle dotted or hairline Gold divider.

### Icons
- Use ultra-thin stroke icons (0.5pt to 1pt). Icon color should match the text color (Platinum) or be used in Gold for specific calls to action. Never use filled icons unless they are social media logos.

### Additional Elements
- **Signature Divider:** A Gold vertical line (approx 40px tall) used to precede major section headers, grounding the typography.