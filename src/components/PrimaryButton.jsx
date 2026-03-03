/**
 * PrimaryButton
 * Source: Figma node 1927:3352
 *
 * States: default · hover (blob slides in from left) · active (large blob fills button, text inverts)
 * Sizes:  M (default) · S · Xs
 *
 * Props:
 *   children     — button label
 *   onClick      — click handler
 *   href         — if provided, renders as <a> tag
 *   size         — 'M' | 'S' | 'Xs' | 'Big' | 'medium' | 'small'  (legacy aliases supported)
 *   showIcon     — show right-arrow icon (default true)
 *   className
 */

import { useState } from 'react'
import { colors, borderRadius, typography } from '../tokens'
import Icons from './Icons'

const SIZES = {
  M:      { paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px' },
  S:      { paddingTop: '14px', paddingBottom: '14px', paddingLeft: '16px', paddingRight: '16px' },
  Xs:     { paddingTop: '8px',  paddingBottom: '8px',  paddingLeft: '16px', paddingRight: '16px' },
  // Legacy size aliases
  Big:    { paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px' },
  medium: { paddingTop: '14px', paddingBottom: '14px', paddingLeft: '16px', paddingRight: '16px' },
  small:  { paddingTop: '8px',  paddingBottom: '8px',  paddingLeft: '16px', paddingRight: '16px' },
}

const PrimaryButton = ({ children, onClick, href, size = 'M', showIcon = true, className }) => {
  const [btnState, setBtnState] = useState('default')

  const isHover  = btnState === 'hover'
  const isActive = btnState === 'active'

  const pad = SIZES[size] ?? SIZES.M

  const buttonStyles = {
    ...pad,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    borderRadius: borderRadius.l,
    border: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    flexShrink: 0,
    backgroundColor: colors.primary[700],          // #5D5F98
    color: isActive ? colors.primary[700] : '#FFFFFF',
    fontFamily: `'${typography.presets.button.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: typography.presets.button.fontSize,
    fontWeight: typography.presets.button.fontWeight,
    lineHeight: typography.presets.button.lineHeight,
    letterSpacing: typography.presets.button.letterSpacing,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    transition: 'color 0.3s ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  }

  // Hover fill: sweeps left-to-right across the full button (Smart Animate equivalent)
  const hoverFillStyles = {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(to right, ${colors.primary[600]}, ${colors.primary[600]})`,
    transformOrigin: 'left center',
    transform: isHover ? 'scaleX(1)' : 'scaleX(0)',
    transition: isHover
      ? 'transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)'
      : 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
    pointerEvents: 'none',
    zIndex: 0,
  }

  // Active blob: large circle fills the button
  const activeBlobStyles = {
    position: 'absolute',
    width: '300px',
    height: '300px',
    left: '50%',
    top: '50%',
    marginLeft: '-150px',
    marginTop: '-150px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.90)',
    transform: isActive ? 'scale(1)' : 'scale(0)',
    opacity: isActive ? 1 : 0,
    transition: 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.22s ease',
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
      {/* Hover fill — sweeps left-to-right */}
      <span style={hoverFillStyles} aria-hidden="true" />
      {/* Active ripple blob */}
      <span style={activeBlobStyles} aria-hidden="true" />
      {/* Visible content */}
      <span style={contentStyles}>
        {children}
        {showIcon && (
          <Icons
            icon="right-arrow"
            state={isActive ? 'active' : 'Default'}
            size={20}
            style={{ color: isActive ? colors.primary[700] : '#FFFFFF' }}
          />
        )}
      </span>
    </>
  )

  const handlers = {
    onMouseEnter: () => setBtnState('hover'),
    onMouseLeave: () => setBtnState('default'),
    onMouseDown:  () => setBtnState('active'),
    onMouseUp:    () => setBtnState('hover'),
  }

  if (href) {
    return (
      <a href={href} style={buttonStyles} className={className} {...handlers}>
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

export default PrimaryButton
