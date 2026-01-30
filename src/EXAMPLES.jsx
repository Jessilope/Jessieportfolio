// Design System Usage Examples
// How to use tokens in new components

import { colors, spacing, typography, borderRadius, shadows } from './tokens'

// ✅ CORRECT: Using design system tokens

const ExampleButton = () => {
  const styles = {
    backgroundColor: colors.semantic.buttonPrimary,      // Not: "#580092"
    color: colors.semantic.buttonPrimaryText,            // Not: "#FFFFFF"
    padding: `${spacing.s} ${spacing.m}`,                // Not: "16px 24px"
    borderRadius: borderRadius.l,                         // Not: "32px"
    fontFamily: typography.presets.button.fontFamily,    // Not: "Kantumruy"
    fontSize: typography.presets.button.fontSize,        // Not: "16px"
  }
  return <button style={styles}>Click me</button>
}

// ✅ CORRECT: Using semantic color tokens
const ExampleText = () => {
  const titleStyle = {
    color: colors.semantic.textHeaders,                  // Use semantic names
    ...typography.presets.header                         // Spread preset
  }
  const bodyStyle = {
    color: colors.semantic.textPrimary,
    ...typography.presets.body
  }
  return (
    <div>
      <h1 style={titleStyle}>Title</h1>
      <p style={bodyStyle}>Body text</p>
    </div>
  )
}

// ✅ CORRECT: Using spacing scale
const ExampleLayout = () => {
  const containerStyle = {
    padding: spacing.xxl,           // 64px
    gap: spacing.m,                 // 24px
    marginBottom: spacing.xl,       // 40px
  }
  return <div style={containerStyle}>Content</div>
}

// ✅ CORRECT: Using border radius
const ExampleCard = () => {
  const cardStyle = {
    borderRadius: borderRadius.m,   // 24px
    backgroundColor: colors.backgrounds.primary,
    boxShadow: shadows.card,
    padding: spacing.l,
  }
  return <div style={cardStyle}>Card content</div>
}

// ❌ INCORRECT: Hardcoded values
const WrongExample = () => {
  const wrongStyle = {
    backgroundColor: "#580092",      // ❌ Use colors.semantic.buttonPrimary
    padding: "16px 24px",            // ❌ Use spacing tokens
    borderRadius: "32px",            // ❌ Use borderRadius.l
    fontSize: "48px",                // ❌ Use typography.presets.header.fontSize
    color: "#212121",                // ❌ Use colors.semantic.textPrimary
  }
  return <div style={wrongStyle}>Wrong</div>
}

// ✅ CORRECT: Accessing nested tokens
const ExampleNested = () => {
  const style = {
    // Primary palette
    backgroundColor: colors.primary['700'],      // #580092
    borderColor: colors.primary['300'],          // #E0C7FF
    
    // Secondary palette
    accentColor: colors.secondary['700'],        // #EBDB32
    
    // Typography
    fontFamily: typography.fontFamilies.primary, // Kantumruy
    fontSize: typography.fontSizes.header,       // 48px
    fontWeight: typography.fontWeights.bold,     // 700
    lineHeight: typography.lineHeights.tight,    // 1.3
    letterSpacing: typography.letterSpacing.wide,// 1.2px
  }
  return <div style={style}>Nested tokens</div>
}

// ✅ CORRECT: Creating component variants
const ExampleVariants = ({ variant = 'primary' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.semantic.buttonPrimary,
          color: colors.semantic.buttonPrimaryText,
        }
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          color: colors.semantic.buttonSecondaryText,
          border: `1px solid ${colors.semantic.buttonPrimary}`,
        }
      case 'accent':
        return {
          backgroundColor: colors.secondary['700'],
          color: colors.neutral['700'],
        }
      default:
        return {}
    }
  }

  const baseStyles = {
    padding: `${spacing.s} ${spacing.m}`,
    borderRadius: borderRadius.l,
    ...typography.presets.button,
  }

  return (
    <button style={{ ...baseStyles, ...getVariantStyles() }}>
      Button
    </button>
  )
}

// ✅ CORRECT: Responsive spacing
const ExampleResponsive = () => {
  const style = {
    padding: spacing.m,              // Base: 24px
    gap: spacing.s,                  // Base: 16px
    
    // For larger screens, use larger spacing
    '@media (min-width: 768px)': {
      padding: spacing.xl,           // Tablet: 40px
      gap: spacing.m,                // Tablet: 24px
    },
    '@media (min-width: 1280px)': {
      padding: spacing.xxl,          // Desktop: 64px
      gap: spacing.l,                // Desktop: 32px
    },
  }
  return <div style={style}>Responsive</div>
}

// ✅ CORRECT: Hover states
const ExampleHover = () => {
  const [isHovered, setIsHovered] = React.useState(false)

  const style = {
    backgroundColor: isHovered 
      ? colors.semantic.buttonSecondaryHover 
      : 'transparent',
    color: colors.semantic.buttonSecondaryText,
    border: `1px solid ${colors.semantic.buttonPrimary}`,
    transition: 'all 0.3s ease',
  }

  return (
    <button
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Hover me
    </button>
  )
}

// 📚 CHEAT SHEET

// Colors
colors.semantic.textPrimary          // #212121
colors.semantic.textHeaders          // #580092
colors.semantic.textOnPrimary        // #FFFFFF
colors.semantic.backgroundMain       // #FFFEFA
colors.semantic.backgroundCard       // #FFFFFF
colors.semantic.buttonPrimary        // #580092
colors.semantic.buttonPrimaryText    // #FFFFFF
colors.semantic.buttonSecondaryText  // #580092
colors.semantic.borderDefault        // #E0C7FF

// Spacing
spacing.xxs   // 4px
spacing.xs    // 8px
spacing.s     // 16px
spacing.m     // 24px
spacing.l     // 32px
spacing.xl    // 40px
spacing.xxl   // 64px

// Border Radius
borderRadius.s    // 16px
borderRadius.m    // 24px
borderRadius.l    // 32px
borderRadius.xxl  // 48px

// Typography Presets (use with spread operator)
...typography.presets.header     // 48px Kanit
...typography.presets.header2    // 32px Kanit
...typography.presets.subtitle   // 24px Kantumruy Bold
...typography.presets.subtitle2  // 20px Kantumruy Bold
...typography.presets.body       // 16px Kantumruy
...typography.presets.button     // 16px Kantumruy
...typography.presets.caption    // 12px Kantumruy

// Shadows
shadows.card  // Box shadow for elevated cards

export {
  ExampleButton,
  ExampleText,
  ExampleLayout,
  ExampleCard,
  ExampleNested,
  ExampleVariants,
  ExampleResponsive,
  ExampleHover,
}
