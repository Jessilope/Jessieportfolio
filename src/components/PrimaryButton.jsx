/**
 * PrimaryButton
 * Figma node 1927:3352
 *
 * States:
 *  default — solid #5D5F98, white text
 *  hover   — small blob enters from bottom-right corner
 *  active  — large blob fills button
 */

import { useState } from 'react'
import { colors, borderRadius, typography } from '../tokens'
import Icons from './Icons'

const SIZES = {
  M:      { paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px' },
  S:      { paddingTop: '14px', paddingBottom: '14px', paddingLeft: '16px', paddingRight: '16px' },
  Xs:     { paddingTop: '8px',  paddingBottom: '8px',  paddingLeft: '16px', paddingRight: '16px' },
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
    backgroundColor: colors.primary[700],
    color: '#f9f9f9',
    fontFamily: `'${typography.presets.button.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: typography.presets.button.fontSize,
    fontWeight: typography.presets.button.fontWeight,
    lineHeight: typography.presets.button.lineHeight,
    letterSpacing: typography.presets.button.letterSpacing,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  }

  // Hover blob — starts small at bottom-right, scales up to fill the button
  const hoverBlobStyles = {
    position: 'absolute',
    width: '66.866px',
    height: '71.549px',
    left: '47.14px',
    top: '55.98px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.35)',
    transform: isHover ? 'scale(4.5)' : 'scale(0)',
    opacity: isHover ? 1 : 0,
    transition: isHover
      ? 'transform 0.65s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease'
      : 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
    pointerEvents: 'none',
    zIndex: 0,
  }

  // Active blob — large circle fills button on click
  const activeBlobStyles = {
    position: 'absolute',
    width: '186.338px',
    height: '186.338px',
    left: '-10.81px',
    top: '-70.9px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.30)',
    transform: isActive ? 'scale(1)' : 'scale(0)',
    opacity: isActive ? 1 : 0,
    transition: 'transform 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.22s ease',
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
      <span style={hoverBlobStyles} aria-hidden="true" />
      <span style={activeBlobStyles} aria-hidden="true" />
      <span style={contentStyles}>
        {children}
        {showIcon && (
          <Icons
            icon="right-arrow"
            state="Default"
            size={20}
            style={{ color: '#f9f9f9' }}
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
