import { useState } from 'react'
import { colors, typography, spacing, borderRadius } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import { documents } from '../assets'

// Yellow Flower SVG Component (6 petals) - Figma node 293:2146
const YellowFlower = ({ style }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      style={{
        ...style,
        cursor: 'pointer',
        transition: 'transform 4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: isHovered ? 'rotate(360deg) scale(1.05)' : 'rotate(0deg) scale(1)',
      }}
      onMouseEnter={() => setTimeout(() => setIsHovered(true), 100)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 289 308" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 6 overlapping circles forming flower petals - yellow #FFDF5B */}
        <circle cx="144" cy="68" r="58" fill="#FFDF5B"/>
        <circle cx="210" cy="105" r="58" fill="#FFDF5B"/>
        <circle cx="210" cy="195" r="58" fill="#FFDF5B"/>
        <circle cx="144" cy="235" r="58" fill="#FFDF5B"/>
        <circle cx="78" cy="195" r="58" fill="#FFDF5B"/>
        <circle cx="78" cy="105" r="58" fill="#FFDF5B"/>
        {/* Center - light yellow #FFF3C2 */}
        <circle cx="144" cy="150" r="52" fill="#FFF3C2"/>
      </svg>
    </div>
  )
}

// Purple Flower SVG Component (6 petals) - Figma node 293:2155
const PurpleFlower = ({ style }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      style={{
        ...style,
        cursor: 'pointer',
        transition: 'transform 4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: isHovered ? 'rotate(360deg) scale(1.05)' : 'rotate(0deg) scale(1)',
      }}
      onMouseEnter={() => setTimeout(() => setIsHovered(true), 100)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 332 332" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 6 overlapping circles forming flower petals - light purple #E0C7FF */}
        <circle cx="166" cy="72" r="62" fill="#E0C7FF"/>
        <circle cx="240" cy="115" r="62" fill="#E0C7FF"/>
        <circle cx="240" cy="212" r="62" fill="#E0C7FF"/>
        <circle cx="166" cy="258" r="62" fill="#E0C7FF"/>
        <circle cx="92" cy="212" r="62" fill="#E0C7FF"/>
        <circle cx="92" cy="115" r="62" fill="#E0C7FF"/>
        {/* Center - darker purple #C192FF */}
        <circle cx="166" cy="165" r="55" fill="#C192FF"/>
      </svg>
    </div>
  )
}

const Hero = () => {
  const { isMobile } = useResponsive()
  const [isContactHovered, setIsContactHovered] = useState(false)
  const [isCVHovered, setIsCVHovered] = useState(false)

  // Landing section - matches Figma 1280x760 (desktop) / 928px height (mobile)
  const sectionStyles = {
    backgroundColor: colors.backgrounds.main, // #FFFEFA
    width: '100%',
    minHeight: isMobile ? '928px' : '760px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingTop: isMobile ? '220px' : '0',
    paddingBottom: isMobile ? '68px' : '0',
  }

  // Container - matches Figma: 1152x562 (desktop) / full width (mobile)
  const containerStyles = {
    position: 'relative',
    width: isMobile ? '100%' : '1152px',
    height: isMobile ? 'auto' : '562px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: isMobile ? '24px' : '64px',
    paddingRight: isMobile ? '24px' : '64px',
    gap: isMobile ? '64px' : '0',
  }

  // Text container
  const textContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: colors.semantic.textHeaders, // #580092
    width: '100%',
    height: isMobile ? 'auto' : '347px',
  }

  // Subtitle - "Hi, this is Jessie ML"
  const subtitleStyles = {
    fontFamily: `'${typography.presets.subtitle.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: isMobile ? '18px' : '24px',
    fontWeight: isMobile ? 400 : 700,
    lineHeight: isMobile ? 1.5 : 1.3,
    letterSpacing: isMobile ? '0.9px' : '1.2px',
    margin: 0,
    fontVariationSettings: isMobile ? "'CTGR' 0, 'wdth' 100, 'wght' 400" : "'CTGR' 0, 'wdth' 100, 'wght' 700",
  }

  // Title - "UX-UI designer in trainee"
  const titleStyles = {
    fontFamily: `'${typography.presets.header.fontFamily}', sans-serif`,
    fontSize: isMobile ? '20px' : '48px',
    fontWeight: isMobile ? 700 : 400,
    lineHeight: isMobile ? 1.3 : 1.4,
    letterSpacing: isMobile ? '1px' : '2.4px',
    margin: 0,
  }

  // Buttons container for mobile
  const buttonsContainerStyles = {
    display: isMobile ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'center',
  }

  // Primary button styles for mobile
  const primaryButtonStyles = {
    backgroundColor: isContactHovered ? colors.primary['300'] : colors.primary['700'],
    color: colors.backgrounds.primary,
    border: 'none',
    borderRadius: borderRadius.l,
    padding: '14px 16px',
    fontFamily: `'${typography.presets.button.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  }

  // Secondary button styles for mobile
  const secondaryButtonStyles = {
    backgroundColor: 'transparent',
    color: isCVHovered ? colors.primary['300'] : colors.primary['700'],
    border: `1px solid ${isCVHovered ? colors.primary['300'] : colors.primary['700']}`,
    borderRadius: borderRadius.l,
    padding: '14px 20px',
    fontFamily: `'${typography.presets.button.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  }

  // Yellow Flower position - desktop vs mobile
  const yellowFlowerStyles = {
    position: 'absolute',
    left: isMobile ? 'auto' : '939px',
    right: isMobile ? '-76px' : 'auto',
    top: isMobile ? '95px' : '80px',
    width: isMobile ? '129px' : '289px',
    height: isMobile ? '129px' : '308px',
  }

  // Purple Flower position - desktop vs mobile
  const purpleFlowerStyles = {
    position: 'absolute',
    left: isMobile ? '-63px' : '-88px',
    top: isMobile ? 'auto' : '329px',
    bottom: isMobile ? '164px' : 'auto',
    width: isMobile ? '144px' : '332px',
    height: isMobile ? '144px' : '332px',
  }

  return (
    <section id="landing" style={sectionStyles}>
      <div style={containerStyles}>
        {/* Text content */}
        <div style={textContainerStyles}>
          <p style={subtitleStyles}>Hi, this is Jessie ML</p>
          <p style={titleStyles}>UX-UI designer in trainee</p>
        </div>

        {/* Buttons - Only on mobile */}
        <div style={buttonsContainerStyles}>
          <a 
            href="mailto:ale.mogollon06@gmail.com" 
            style={primaryButtonStyles}
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
          >
            Contact me
          </a>
          <a 
            href={documents.cv} 
            target="_blank"
            rel="noopener noreferrer"
            style={secondaryButtonStyles}
            onMouseEnter={() => setIsCVHovered(true)}
            onMouseLeave={() => setIsCVHovered(false)}
          >
            Download my CV
          </a>
        </div>

        {/* Yellow Flower - top right (desktop) / top right smaller (mobile) */}
        <YellowFlower style={yellowFlowerStyles} />

        {/* Purple Flower - bottom left */}
        <PurpleFlower style={purpleFlowerStyles} />
      </div>
    </section>
  )
}

export default Hero
