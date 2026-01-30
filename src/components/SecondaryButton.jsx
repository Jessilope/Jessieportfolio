import { colors, spacing, borderRadius, typography } from '../tokens'
import { useState } from 'react'

const SecondaryButton = ({ children, onClick, size = 'big', className, href, download }) => {
  const [isHovered, setIsHovered] = useState(false)

  const getStyles = () => {
    const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: borderRadius.l,
      borderWidth: '1px',
      borderStyle: 'solid',
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
      textAlign: 'center',
      backgroundColor: 'transparent',
      width: '100%',
      textDecoration: 'none',
    }

    // Hover state - text color AND border color change
    const textColor = isHovered ? colors.primary['400'] : colors.primary['700']
    const borderColor = isHovered ? colors.primary['300'] : colors.primary['700']

    // Size-specific padding
    let padding = {}
    if (size === 'big') {
      padding = {
        paddingTop: spacing.s,
        paddingBottom: spacing.s,
        paddingLeft: spacing.m,
        paddingRight: spacing.m,
      }
    } else if (size === 'medium') {
      padding = {
        paddingTop: '14px',
        paddingBottom: '14px',
        paddingLeft: '20px',
        paddingRight: '20px',
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
      color: textColor,
      borderColor: borderColor,
      ...padding,
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  // Si hay href, renderizar como un link
  if (href) {
    return (
      <a 
        href={href}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        style={getStyles()}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    )
  }

  // Si no hay href, renderizar como botón normal
  return (
    <button 
      style={getStyles()}
      className={className}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}

export default SecondaryButton
