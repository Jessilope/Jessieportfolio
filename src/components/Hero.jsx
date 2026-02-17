import { useState } from 'react'
import { colors, typography, spacing, borderRadius } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import { documents } from '../assets'
import AnimatedOnScroll from './AnimatedOnScroll'

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

  // Landing section - matches Figma mobile
  const sectionStyles = {
    backgroundColor: colors.backgrounds.main,
    width: '100%',
    minHeight: isMobile ? 'auto' : '760px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingTop: isMobile ? '220px' : '180px',
    paddingBottom: isMobile ? '120px' : '100px',
    paddingLeft: isMobile ? '24px' : '0',
    paddingRight: isMobile ? '24px' : '0',
  }

  // Container
  const containerStyles = {
    position: 'relative',
    width: isMobile ? '100%' : '1152px',
    height: isMobile ? '438px' : '562px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: isMobile ? '0' : '64px',
    paddingRight: isMobile ? '0' : '64px',
    gap: isMobile ? '84px' : '0',
  }

  // Text container
  const textContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 0,
    width: '100%',
    position: 'relative',
    zIndex: 1,
  }

  // Header - "Hello, I'm a UX/UI designer."
  const headerStyles = {
    fontFamily: `'${typography.presets.header2.fontFamily}', sans-serif`,
    fontSize: isMobile ? '32px' : typography.presets.header.fontSize,
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: '0',
    color: colors.semantic.textHeaders,
    margin: 0,
    width: '100%',
  }

  // Body text - Longer description
  const bodyTextStyles = {
    fontFamily: `'${typography.presets.bodyLarge.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: isMobile ? '18px' : '18px',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.9px',
    color: colors.neutral['400'],
    margin: 0,
    width: '100%',
    maxWidth: isMobile ? '100%' : '600px',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
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

  // Yellow Flower position - top right
  const yellowFlowerStyles = {
    position: 'absolute',
    left: isMobile ? 'auto' : '939px',
    right: isMobile ? '-80px' : 'auto',
    top: isMobile ? '20px' : '80px',
    width: isMobile ? '140px' : '289px',
    height: isMobile ? '140px' : '308px',
    zIndex: 0,
  }

  // Purple Flower position - bottom left
  const purpleFlowerStyles = {
    position: 'absolute',
    left: isMobile ? '-70px' : '-88px',
    top: isMobile ? 'auto' : '329px',
    bottom: isMobile ? '-20px' : 'auto',
    width: isMobile ? '170px' : '332px',
    height: isMobile ? '170px' : '332px',
    zIndex: 0,
  }

  return (
    <section id="landing" style={sectionStyles}>
      <div style={containerStyles}>
        {/* Text content */}
        <div style={textContainerStyles}>
          <AnimatedOnScroll animation="fadeIn" duration={800}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
              <p style={headerStyles}>Hello, I'm a UX/UI designer.</p>
            </div>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="slideUp" delay={200} duration={700}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
              <p style={bodyTextStyles}>
                Jessie is a junior product designer driven to create user-centered solutions. She combines creativity and strategic thinking to craft intuitive and impactful digital experiences.
              </p>
            </div>
          </AnimatedOnScroll>
        </div>

        {/* Yellow Flower - top right */}
        <AnimatedOnScroll animation="scaleIn" delay={300} duration={900}>
          <YellowFlower style={yellowFlowerStyles} />
        </AnimatedOnScroll>

        {/* Purple Flower - bottom left */}
        <AnimatedOnScroll animation="scaleIn" delay={400} duration={900}>
          <PurpleFlower style={purpleFlowerStyles} />
        </AnimatedOnScroll>
      </div>
    </section>
  )
}

export default Hero
