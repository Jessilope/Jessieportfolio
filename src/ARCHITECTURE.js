
// Component Architecture Reference
// All components follow the Design System JSON pattern

/*
═══════════════════════════════════════════════════════════════
DESIGN SYSTEM TOKENS USAGE
═══════════════════════════════════════════════════════════════

Import pattern:
  import { colors, spacing, typography, borderRadius, shadows } from '../tokens'

Token Access:
  colors.semantic.buttonPrimary        → #580092
  colors.primary[700]                  → #580092
  spacing.m                            → 24px
  typography.presets.header.fontSize   → 48px
  borderRadius.l                       → 32px
  shadows.card                         → 0px 1px 2px...

═══════════════════════════════════════════════════════════════
COMPONENT INVENTORY
═══════════════════════════════════════════════════════════════

1. BUTTONS
   - PrimaryButton.jsx
     * Props: children, onClick, size
     * Tokens: buttonPrimary, buttonPrimaryText, spacing, borderRadius
     * Usage: CTA actions, primary interactions

   - SecondaryButton.jsx
     * Props: children, onClick
     * Tokens: buttonSecondaryText, buttonPrimary, buttonSecondaryHover
     * Usage: Secondary actions, download CV

2. NAVIGATION
   - Navbar.jsx
     * Fixed position, shadow elevation
     * Contains: Logo, Nav links, Button group
     * Tokens: All spacing, colors, shadows, borderRadius

3. CONTENT
   - ProjectCard.jsx
     * Props: title, tags, backgroundColor, imageContent
     * Reusable for all portfolio projects
     * Tokens: borderRadius.m, spacing, typography

   - Tag.jsx
     * Props: children
     * Used in ProjectCard for skill/category labels
     * Tokens: borderRadius.s, spacing.xxs/xs, colors.semantic

4. DECORATIONS
   - FlowerDecoration.jsx
     * Props: variant (1-3), style
     * SVG-based decorative element
     * Tokens: colors.primary, colors.secondary

   - LogoStripe.jsx
     * Horizontal scrolling logo showcase
     * Tokens: spacing, typography

5. FOOTER
   - Footer.jsx
     * Contains: Branding, Copyright, Social icons
     * Tokens: All typography presets, spacing, colors

   - SocialIcon.jsx
     * Props: type (behance, linkedin, instagram)
     * SVG icons with theme colors
     * Tokens: colors.primary[300]

═══════════════════════════════════════════════════════════════
PAGE SECTIONS
═══════════════════════════════════════════════════════════════

1. HeroSection.jsx
   - Landing hero with name and title
   - Decorative flowers positioned absolutely
   - Height: 832px (matches Figma)

2. ProjectsSection.jsx
   - Header with description
   - 4 ProjectCard instances:
     * Lexi (#155DFC background)
     * Dollar City (#005830 background)
     * Tu credit (#FFFFFF background)
     * Tripfinder (#8125F4 background)

3. ClosingSection.jsx
   - 7x5 CSS Grid of flowers
   - Centered "Design for good :)" message
   - Pattern matches Figma layout exactly

═══════════════════════════════════════════════════════════════
LAYOUT SPECIFICATIONS
═══════════════════════════════════════════════════════════════

Container Widths:
  - Navbar: 1152px
  - Hero container: 1152px
  - Projects container: Full width with 116px/136px padding
  - Footer container: 1128px

Vertical Spacing:
  - Section gaps: 64px, 128px
  - Card gaps: 51px horizontal
  - Content gaps: 12px, 21px, 48px

Fixed Elements:
  - Navbar: position fixed, top: 64px, left: 64px

═══════════════════════════════════════════════════════════════
COLOR USAGE MAP
═══════════════════════════════════════════════════════════════

Primary Purple (#580092):
  - Button backgrounds
  - Header text
  - Borders
  - Logo

Secondary Yellow (#EBDB32):
  - Accent decorations
  - Dollar City text

Neutral (#212121):
  - Body text
  - Project titles

Backgrounds:
  - Main: #FFFEFA (off-white)
  - Card: #FFFFFF (white)

═══════════════════════════════════════════════════════════════
TYPOGRAPHY HIERARCHY
═══════════════════════════════════════════════════════════════

Header (48px, Kanit)
  - "UX-UI designer in trainee"
  - "Personal Projects"

Header2 (32px, Kanit)
  - "Design for good :)"

Subtitle (24px, Kantumruy Bold)
  - "Hi, this is Jessie ML"
  - Project card titles

Body (16px, Kantumruy)
  - Descriptions
  - Nav links

Caption (12px, Kantumruy)
  - Tags
  - Footer subtitle

═══════════════════════════════════════════════════════════════
COMPONENT REUSABILITY
═══════════════════════════════════════════════════════════════

Reused Components:
  - PrimaryButton: Navbar (1x)
  - SecondaryButton: Navbar (1x)
  - Tag: ProjectCard (multiple per card, 4 cards = 15+ instances)
  - ProjectCard: ProjectsSection (4x)
  - FlowerDecoration: HeroSection (2x), ClosingSection (21x)
  - SocialIcon: Footer (3x)

Single-Use Components:
  - Navbar: Header (1x)
  - Footer: Footer (1x)
  - LogoStripe: Between Hero and Projects (1x)

═══════════════════════════════════════════════════════════════
*/

export default {
  note: "This file documents the component architecture",
  designSystemPath: "../design-system.json",
  tokenImportPath: "./tokens.js"
}
