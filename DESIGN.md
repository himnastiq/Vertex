---
name: Editorial Precision
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#434657'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747688'
  outline-variant: '#c4c5da'
  surface-tint: '#0046fa'
  primary: '#0035c5'
  on-primary: '#ffffff'
  primary-container: '#0047ff'
  on-primary-container: '#d4d9ff'
  inverse-primary: '#b9c3ff'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#8d1c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#b82800'
  on-tertiary-container: '#ffd1c6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b9c3ff'
  on-primary-fixed: '#001257'
  on-primary-fixed-variant: '#0033c0'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#ffb4a2'
  on-tertiary-fixed: '#3d0700'
  on-tertiary-fixed-variant: '#8a1c00'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Chivo
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Chivo
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Chivo
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max-width: 1280px
---

## Brand & Style
The design system is built on the philosophy of **Editorial Precision**. It treats the SaaS interface as a high-end publication, prioritizing information hierarchy, disciplined alignment, and a sophisticated, intelligent tone. The aesthetic is rooted in a "Modern Minimalist" movement with a "New York Times" meets "Linear" sensibility. 

The target audience consists of power users and executives who value clarity over decoration. The UI should evoke a sense of calm authority and deliberate choice. Key visual markers include high-contrast typography, a strict adherence to a baseline grid, and a "Signal Blue" accent used sparingly to denote action and focus.

## Colors
The palette is intentionally restricted to maintain a premium, focused atmosphere. 

- **Primary (Signal Blue):** Reserved exclusively for primary actions, active states, and critical information markers. It should never be used for decorative backgrounds.
- **Secondary (Deep Charcoal):** Used for primary text and core structural elements.
- **Neutral (Off-White):** The primary background color to reduce eye strain and provide a sophisticated alternative to pure white.
- **Surface:** Pure white is used only for elevated cards or container elements to create subtle depth against the off-white background.
- **Borders:** A consistent, low-contrast grey (#E5E5E5) is used for all structural divisions.

## Typography
Typography is the cornerstone of this design system. We utilize **Chivo** for headlines to provide a sharp, authoritative geometric presence. **Inter** handles all body copy for maximum legibility across data-heavy views. For technical metadata and labels, **JetBrains Mono** is used to inject a sense of "precision engineering."

- **Hierarchy:** Use `display-lg` sparingly for landing moments or major dashboard headers. 
- **Rhythm:** All line heights are multiples of 4px to ensure they sit perfectly on the spacing grid.
- **Contrast:** Headlines should always be `Deep Charcoal` to maintain the editorial feel.

## Layout & Spacing
The layout follows a strict **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **The 4px Rule:** All spacing between elements (padding, margins) must be a multiple of 4px.
- **Vertical Rhythm:** Use generous whitespace (64px+) between major sections to emphasize the premium "editorial" nature.
- **Alignment:** All content must align to the left vertical axis. Avoid centering text in data-rich environments; it breaks the "disciplined grid" narrative.
- **Safe Zones:** Desktop layouts should maintain a 64px outer margin to give the content room to breathe.

## Elevation & Depth
This design system avoids traditional shadows in favor of **Tonal Layers** and **Subtle Outlines**. 

- **Flat Depth:** Depth is communicated through color stepping (e.g., a pure white card on an off-white background).
- **Outlines:** Use 1px solid borders (#E5E5E5) instead of shadows to define containers.
- **Interaction Elevation:** On hover, a component may transition from a 1px border to a 1.5px border or change its background color slightly. Do not use blurs or "glow" effects.
- **Z-Index:** Modals and menus should use a single, very crisp 1px border with a high-contrast background to pop against the page, rather than an ambient shadow.

## Shapes
In line with the "Editorial Precision" aesthetic, the system uses a **Sharp (0px)** roundedness model. 

- **Right Angles:** All buttons, input fields, cards, and containers must have 90-degree corners. This reinforces the disciplined, structural feel of the grid.
- **Exceptions:** Icons may contain curves for legibility, but their bounding boxes and any containing UI elements must remain sharp.

## Components
- **Buttons:** Sharp-edged. Primary buttons are solid `Signal Blue` with white text. Secondary buttons are transparent with a 1px `Deep Charcoal` border. 
- **Input Fields:** 1px `Deep Charcoal` bottom border only (classNameic editorial style) or a full rectangular border. Use `JetBrains Mono` for placeholder text.
- **Cards:** No shadows. White background, 1px `#E5E5E5` border, sharp corners.
- **Chips/Badges:** Use `JetBrains Mono` at `label-caps` size. Use a light grey background with no border for neutral tags, and a light blue tint with `Signal Blue` text for active states.
- **Lists:** Rows are separated by a 1px horizontal line. Use generous vertical padding (16px+) to ensure the "Editorial" feel.
- **Checkboxes:** Square, sharp-edged. When checked, the fill is `Signal Blue` with a white "X" or checkmark.