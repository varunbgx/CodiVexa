---
name: Modern Scholastic
colors:
  surface: '#faf9ff'
  surface-dim: '#ccdaff'
  surface-bright: '#faf9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8ff'
  surface-container-highest: '#d8e2ff'
  on-surface: '#051a3e'
  on-surface-variant: '#434654'
  inverse-surface: '#1d3054'
  inverse-on-surface: '#edf0ff'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#006c47'
  on-secondary: '#ffffff'
  secondary-container: '#8af5be'
  on-secondary-container: '#00714b'
  tertiary: '#432f9c'
  on-tertiary: '#ffffff'
  tertiary-container: '#5b49b5'
  on-tertiary-container: '#d5ccff'
  error: '#FF5630'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#8df7c1'
  secondary-fixed-dim: '#71dba6'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005235'
  tertiary-fixed: '#e5deff'
  tertiary-fixed-dim: '#c9bfff'
  on-tertiary-fixed: '#1a0063'
  on-tertiary-fixed-variant: '#4633a0'
  background: '#faf9ff'
  on-background: '#051a3e'
  surface-variant: '#d8e2ff'
  surface-bg: '#F4F5F7'
  surface-card: '#FFFFFF'
  success: '#36B37E'
  warning: '#FFAB00'
  info: '#00B8D9'
  border-subtle: '#DFE1E6'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 24px
---

## Brand & Style

The design system is engineered for a high-performance Learning Management System (LMS) that balances academic rigor with modern digital efficiency. The brand personality is **authoritative yet accessible**, aiming to evoke a sense of progress, clarity, and professional achievement.

The visual style follows a **Corporate / Modern** aesthetic with **Minimalist** influences. It prioritizes content legibility and cognitive ease, ensuring that the interface never distracts from the educational material. Key characteristics include:
- **Functional Clarity:** Every element has a purpose, utilizing generous white space to prevent learner fatigue.
- **Subtle Depth:** A refined use of soft shadows and tonal layering to establish a clear information hierarchy.
- **Trust-Driven:** A structured, grid-based approach that feels stable and dependable for professional certification.

## Colors

The palette is anchored by a "Trustworthy Blue" (#0052CC), chosen for its association with professional enterprise and intelligence. This primary color is used for key actions and navigational markers.

- **Primary:** Used for the main call-to-actions, active navigation states, and progress indicators.
- **Success Green:** Integrated into the secondary and named colors to signify course completion, passing grades, and secure payments.
- **Surface Strategy:** The design utilizes a layered grayscale approach. The background uses a soft off-white (`#F4F5F7`) to reduce glare, while interactive cards and containers use pure white to pop forward.
- **Functional Tints:** High-saturation tints of the secondary and tertiary colors are reserved for feedback loops (success, warnings, and system alerts).

## Typography

This design system exclusively utilizes **Inter** for its exceptional legibility and systematic weight distribution. 

- **Hierarchy:** We use a tight scale to maintain professional density. Headlines use a semi-bold or bold weight with slight negative letter-spacing to appear modern and "locked-in."
- **Readability:** Body text is set with a generous line height (1.5x) to facilitate long-form reading during course modules.
- **Labels:** Small labels and metadata (e.g., duration, video count) use a slightly heavier weight and increased letter spacing to ensure they remain distinct at small sizes.

## Layout & Spacing

The layout is built on an **8px linear scale**, ensuring consistent vertical rhythm and alignment across all components.

- **Grid System:** A 12-column fluid grid is used for desktop layouts, transitioning to a single-column stack on mobile. Gutters are fixed at 24px to provide ample breathing room between course cards and dashboard widgets.
- **Dashboard Philosophy:** The "Admin" and "Student" dashboards should utilize a "Sidebar + Main Content" pattern. The sidebar remains fixed on desktop, while the main content area scrolls and expands fluently.
- **Sectioning:** Vertical spacing between sections (e.g., "My Courses" vs. "Recommended") should use the `stack-lg` (24px) unit to clearly demarcate different content types.

## Elevation & Depth

To maintain the minimalist aesthetic while ensuring clarity, this design system uses **Tonal Layers** combined with **Ambient Shadows**.

- **Level 0 (Base):** The foundation layer (`#F4F5F7`). Used for the main canvas.
- **Level 1 (Surface):** White cards (`#FFFFFF`) with a very soft, diffused shadow (Blur: 4px, Y: 2px, Opacity: 4% Black). Used for secondary content and list items.
- **Level 2 (Interactive/Elevated):** Hover states and primary cards. These use a more pronounced but still subtle shadow (Blur: 12px, Y: 4px, Opacity: 8% Blue-Tinted Black).
- **Level 3 (Overlays):** Modals, dropdowns, and floating buttons. These use a high-depth shadow to create a clear separation from the workspace.
- **Outlines:** In addition to shadows, a 1px border (`#DFE1E6`) is used on all containers to provide structural definition without relying solely on depth.

## Shapes

The design system employs a **Rounded** shape language to feel approachable and modern without being overly playful.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Course thumbnails and main dashboard panels use a 1rem (16px) radius to create a softer, more premium look.
- **Indicators:** Progress bars and status chips use a full "pill" radius for distinct visual differentiation from interactive buttons.

## Components

### Buttons
- **Primary:** Solid `#0052CC` with white text. 8px radius. Subtle 150ms transform (scale 0.98) on click.
- **Secondary:** Outline variant with 1px border.
- **Success:** Solid `#36B37E` used exclusively for "Enroll Now" or "Download Certificate."

### Input Fields
- White background with a 1px `#DFE1E6` border. On focus, the border transitions to Primary Blue with a 2px soft outer glow (ring).

### Course Cards
- Image at the top, followed by a padded content area. Metadata (Duration, Videos) should be displayed using `label-md` with icons.
- Progress bars within cards should be 4px height, using `#36B37E` for the fill.

### Animations
- **Standard Reveal:** 300ms, Cubic-Bezier(0.4, 0, 0.2, 1). Used for page transitions and card entrances.
- **Hover Transitions:** 200ms, Ease-in-out. Used for button color shifts and shadow elevation.
- **Micro-interactions:** 100ms for checkbox toggles and radio selection animations.

### Progress Tracking
- Use a circular progress ring for overall course completion in the sidebar.
- Use a linear progress bar for individual video lessons.