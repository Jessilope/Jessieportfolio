import { colors, spacing, borderRadius, typography } from '../tokens'
import { useState } from 'react'

const SIZES = {
  big:    { paddingTop: spacing.s,  paddingBottom: spacing.s,  paddingLeft: spacing.m,  paddingRight: spacing.m  },
  M:      { paddingTop: '16px',     paddingBottom: '16px',     paddingLeft: '24px',     paddingRight: '24px'     },
  medium: { paddingTop: '14px',     paddingBottom: '14px',     paddingLeft: '20px',     paddingRight: '20px'     },
  S:      { paddingTop: '14px',     paddingBottom: '14px',     paddingLeft: '16px',     paddingRight: '16px'     },
  small:  { paddingTop: spacing.xs, paddingBottom: spacing.xs, paddingLeft: spacing.s,  paddingRight: spacing.s  },
  Xs:     { paddingTop: '8px',      paddingBottom: '8px',      paddingLeft: '16px',     paddingRight: '16px'     },
}

const SecondaryButton = ({ children, onClick, size = 'big', className, href, download }) => {
  const [isHovered, setIsHovered] = useState(false)

  const pad = SIZES[size] ?? SIZES.big

  const buttonStyles = {
    ...pad,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    borderRadius: borderRadius.l,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.primary[700],
    color: colors.primary[700],
    cursor: 'pointer',
    fontFamily: `'${typography.presets.button.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: typography.presets.button.fontSize,
    fontWeight: typography.presets.button.fontWeight,
    lineHeight: typography.presets.button.lineHeight,
    letterSpacing: typography.presets.button.letterSpacing,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0,
    backgroundColor: 'transparent',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  }

  // Soft radial glow — fades in as a pure opacity transition.
  // Radial gradient naturally has no hard edges so it looks like a blurred
  // color wash, exactly matching the Figma hover state.
  const sheenStyles = {
    position: 'absolute',
    inset: 0,
    background: `radial-gradient(ellipse 130% 180% at 0% 100%,
      rgba(93, 95, 152, 0.30) 0%,
      rgba(93, 95, 152, 0.10) 50%,
      transparent 75%)`,
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.45s ease',
    pointerEvents: 'none',
    zIndex: 0,
  }

  const contentStyles = {
    position: 'relative',
    zIndex: 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
  }

  const inner = (
    <>
      {/* Diagonal fill sweep */}
      <span style={sheenStyles} aria-hidden="true" />
      {/* Visible content */}
      <span style={contentStyles}>{children}</span>
    </>
  )

  const handlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  }

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyles}
        className={className}
        {...handlers}
      >
        {inner}
      </a>
    )
  }

  return (
    <button
      style={buttonStyles}
      className={className}
      onClick={onClick}
      {...handlers}
    >
      {inner}
    </button>
  )
}

export default SecondaryButton
