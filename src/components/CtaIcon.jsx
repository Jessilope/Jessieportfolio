import { useState } from 'react'
import { colors, typography } from '../tokens'

const CtaIcon = ({ text = 'About', onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  const containerStyles = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '4px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    transition: 'all 0.3s ease',
  }

  const textStyles = {
    fontFamily: isHovered 
      ? `'${typography.presets.bodyLarge.fontFamily}', ${typography.fontFamilies.fallback}`
      : `'${typography.presets.body.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: isHovered ? typography.presets.bodyLarge.fontSize : typography.presets.body.fontSize, // 18px : 16px
    fontWeight: isHovered ? typography.presets.bodyLarge.fontWeight : typography.presets.body.fontWeight, // 400
    lineHeight: isHovered ? typography.presets.bodyLarge.lineHeight : typography.presets.body.lineHeight, // 1.5 : 1.6
    letterSpacing: isHovered ? typography.presets.bodyLarge.letterSpacing : typography.presets.body.letterSpacing, // 0.9px : 0.8px
    color: isHovered ? colors.primary['700'] : colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    transition: 'all 0.3s ease',
  }

  const iconStyles = {
    width: '24px',
    height: '24px',
    flexShrink: 0,
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
  }

  const arrowColor = isHovered ? colors.primary['700'] : colors.primary['300']

  return (
    <button
      style={containerStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <p style={textStyles}>{text}</p>
      <svg style={iconStyles} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M5.175 13.625H16.3688L12.7313 17.2625C12.2688 17.725 12.2688 18.4875 12.7313 18.95C13.1938 19.4125 13.9563 19.4125 14.4188 18.95L20.2313 13.1375C20.6938 12.675 20.6938 11.9125 20.2313 11.45L14.4188 5.6375C13.9563 5.175 13.1938 5.175 12.7313 5.6375C12.2688 6.1 12.2688 6.8625 12.7313 7.325L16.3688 10.9625H5.175C4.525 10.9625 4 11.4875 4 12.1375C4 12.7875 4.525 13.625 5.175 13.625Z" 
          fill={arrowColor}
          style={{ transition: 'fill 0.3s ease' }}
        />
      </svg>
    </button>
  )
}

export default CtaIcon
