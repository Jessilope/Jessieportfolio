/**
 * SecondaryButton
 * Figma node 1930:3418
 *
 * States:
 *  default — outlined #5D5F98, subtle gradient blob visible bottom-right, text #5D5F98
 *  hover   — large #5D5F98 blob fills entire button, text turns white
 */

import { useState } from 'react'
import { colors, spacing, borderRadius, typography } from '../tokens'

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
    // Text color transitions default→hover
    color: isHovered ? '#f9f9f9' : colors.primary[700],
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
    transition: 'color 0.3s ease',
  }

  // Default subtle blob — gradient in bottom-right, always visible at rest
  // Figma: left:26px top:54px, 114×101px, gradient from transparent→#5D5F98
  const defaultBlobStyles = {
    position: 'absolute',
    width: '114.441px',
    height: '101.633px',
    left: '26px',
    top: '54px',
    borderRadius: '200px',
    background: 'linear-gradient(180.58deg, rgba(255,255,255,0) 10.15%, rgb(93,95,152) 148.12%)',
    transform: 'rotate(-0.41deg)',
    opacity: isHovered ? 0 : 1,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
    zIndex: 0,
  }

  // Hover fill blob — large oval fills entire button from top-left
  // Figma: left:-20.74px top:-57.32px, 217×200px, solid #5D5F98
  const hoverBlobStyles = {
    position: 'absolute',
    width: '217.162px',
    height: '199.856px',
    left: '-20.74px',
    top: '-57.32px',
    borderRadius: '200px',
    backgroundColor: colors.primary[700],
    transform: isHovered ? 'scale(1) rotate(-0.41deg)' : 'scale(0) rotate(-0.41deg)',
    transformOrigin: 'center center',
    opacity: isHovered ? 1 : 0,
    transition: isHovered
      ? 'transform 0.65s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease'
      : 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
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
      <span style={defaultBlobStyles} aria-hidden="true" />
      <span style={hoverBlobStyles} aria-hidden="true" />
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
    <button style={buttonStyles} className={className} onClick={onClick} {...handlers}>
      {inner}
    </button>
  )
}

export default SecondaryButton
