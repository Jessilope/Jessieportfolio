import { colors, spacing, borderRadius, typography } from '../tokens'
import { useState } from 'react'

const PrimaryButton = ({ children, onClick, size = 'Big', className }) => {
  const [state, setState] = useState('Default')

  const getStyles = () => {
    const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: borderRadius.l,
      border: 'none',
      cursor: 'pointer',
      fontFamily: `'${typography.presets.button.fontFamily}', ${typography.fontFamilies.fallback}`,
      fontSize: typography.presets.button.fontSize,
      fontWeight: typography.presets.button.fontWeight,
      lineHeight: typography.presets.button.lineHeight,
      letterSpacing: typography.presets.button.letterSpacing,
      position: 'relative',
      flexShrink: 0,
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
      transition: 'all 0.3s ease',
      textAlign: 'left',
    }

    // Default state colors
    let backgroundColor = colors.semantic.buttonPrimary
    let textColor = colors.semantic.buttonPrimaryText

    // Hover state
    if (state === 'Hover') {
      backgroundColor = colors.semantic.buttonSecondaryHover
    }

    // Click/Active state
    if (state === 'Click') {
      backgroundColor = colors.semantic.buttonSecondaryHover
    }

    // Size-specific padding
    let padding = {}
    if (size === 'Big') {
      padding = {
        paddingTop: spacing.s,
        paddingBottom: spacing.s,
        paddingLeft: spacing.m,
        paddingRight: spacing.m,
      }
    } else if (size === 'medium') {
      if (state === 'Click') {
        padding = {
          paddingTop: '14px',
          paddingBottom: '14px',
          paddingLeft: '20px',
          paddingRight: '20px',
        }
      } else {
        padding = {
          paddingTop: '14px',
          paddingBottom: '14px',
          paddingLeft: spacing.s,
          paddingRight: spacing.s,
        }
      }
    } else if (size === 'small') {
      padding = {
        paddingTop: spacing.xs,
        paddingBottom: spacing.xs,
        paddingLeft: spacing.s,
        paddingRight: spacing.s,
      }
    }

    return {
      ...baseStyles,
      backgroundColor,
      color: textColor,
      ...padding,
    }
  }

  const handleMouseEnter = () => {
    setState('Hover')
  }

  const handleMouseLeave = () => {
    setState('Default')
  }

  const handleMouseDown = () => {
    setState('Click')
  }

  const handleMouseUp = () => {
    setState('Hover')
  }

  const handleClick = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button 
      style={getStyles()}
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
