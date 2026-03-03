import { useState } from 'react'
import { colors, typography } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import useScrollAnimation from '../hooks/useScrollAnimation'

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

// Purple Flower SVG Component (6 petals) - Figma colors: Primary/200 petals, Primary/500 center
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
        viewBox="0 0 310 310" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 6 overlapping circles — Primary/200 #C1C2D9 */}
        <circle cx="155" cy="67"  r="58" fill="#C1C2D9"/>
        <circle cx="224" cy="108" r="58" fill="#C1C2D9"/>
        <circle cx="224" cy="200" r="58" fill="#C1C2D9"/>
        <circle cx="155" cy="243" r="58" fill="#C1C2D9"/>
        <circle cx="86"  cy="200" r="58" fill="#C1C2D9"/>
        <circle cx="86"  cy="108" r="58" fill="#C1C2D9"/>
        {/* Center — Primary/500 #8485B4 */}
        <circle cx="155" cy="155" r="52" fill="#8485B4"/>
      </svg>
    </div>
  )
}

const Hero = () => {
  const { isMobile } = useResponsive()
  
  // Animation hooks
  const headerAnimation = useScrollAnimation({ threshold: 0.2 })
  const bodyAnimation = useScrollAnimation({ threshold: 0.2 })
  const yellowFlowerAnimation = useScrollAnimation({ threshold: 0.2 })
  const purpleFlowerAnimation = useScrollAnimation({ threshold: 0.2 })

  // ─── Desktop: Figma node 1943:3590 ────────────────────────────────────────
  // Section fills full viewport height
  const sectionStyles = {
    backgroundColor: colors.backgrounds.main,
    width: '100%',
    height: isMobile ? 'auto' : '100vh',
    minHeight: isMobile ? 'auto' : '560px',
    position: 'relative',
    overflow: 'hidden',
    // Mobile: simple flex column with padding
    display: isMobile ? 'flex' : 'block',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: isMobile ? '180px' : '0',
    paddingBottom: isMobile ? '100px' : '0',
    paddingLeft: isMobile ? '24px' : '0',
    paddingRight: isMobile ? '24px' : '0',
    boxSizing: 'border-box',
  }

  // Desktop container: 895×562px, centered horizontally, 70px below vertical center
  // Figma: left:calc(50%-0.5px) top:calc(50%+70px) -translate-x-1/2 -translate-y-1/2
  const containerStyles = isMobile ? {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  } : {
    position: 'absolute',
    width: '895px',
    height: '562px',
    left: '50%',
    top: 'calc(50% + 70px)',
    transform: 'translate(-50%, -50%)',
    paddingTop: '64px',
    paddingBottom: '64px',
    paddingLeft: '64px',
    paddingRight: '64px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }

  // Text content block — 717px centered, gap 24px
  const textContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    maxWidth: isMobile ? '100%' : '717px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  }

  // Title — Poppins Regular 32px #5d5f98
  const headerStyles = {
    fontFamily: `'Poppins', sans-serif`,
    fontSize: '32px',
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: '0',
    color: colors.primary[700],
    margin: 0,
    width: '100%',
  }

  // Description — Kantumruy 18px #a4a4a4, 662px wide
  const bodyTextStyles = {
    fontFamily: `'${typography.presets.bodyLarge.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.9px',
    color: colors.neutral['400'],
    margin: 0,
    maxWidth: isMobile ? '100%' : '662px',
    width: '100%',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  // Yellow Flower — bigger, adjusted position
  const yellowFlowerStyles = {
    position: 'absolute',
    left: isMobile ? 'auto' : '820px',
    right: isMobile ? '-80px' : 'auto',
    top: isMobile ? '20px' : '-20px',
    width: isMobile ? '140px' : '380px',
    height: isMobile ? '140px' : '405px',
    zIndex: 0,
    opacity: yellowFlowerAnimation.isVisible ? 1 : 0,
    transform: yellowFlowerAnimation.isVisible ? 'scale(1)' : 'scale(0.9)',
    transition: 'opacity 900ms cubic-bezier(0.4, 0, 0.2, 1) 300ms, transform 900ms cubic-bezier(0.4, 0, 0.2, 1) 300ms',
  }

  // Purple Flower — bigger, adjusted position
  const purpleFlowerStyles = {
    position: 'absolute',
    left: isMobile ? '-70px' : '-320px',
    top: isMobile ? 'auto' : '140px',
    bottom: isMobile ? '-20px' : 'auto',
    width: isMobile ? '170px' : '410px',
    height: isMobile ? '170px' : '410px',
    zIndex: 0,
    opacity: purpleFlowerAnimation.isVisible ? 1 : 0,
    transform: purpleFlowerAnimation.isVisible ? 'scale(1)' : 'scale(0.9)',
    transition: 'opacity 900ms cubic-bezier(0.4, 0, 0.2, 1) 400ms, transform 900ms cubic-bezier(0.4, 0, 0.2, 1) 400ms',
  }

  // Header animation
  const headerAnimationStyles = {
    opacity: headerAnimation.isVisible ? 1 : 0,
    transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)',
  }

  // Body animation
  const bodyAnimationStyles = {
    opacity: bodyAnimation.isVisible ? 1 : 0,
    transform: bodyAnimation.isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1) 200ms, transform 700ms cubic-bezier(0.4, 0, 0.2, 1) 200ms',
  }

  return (
    <section id="landing" style={sectionStyles}>
      <div style={containerStyles}>
        {/* Text content — centered */}
        <div style={textContainerStyles}>
          <div ref={headerAnimation.ref} style={{ ...headerAnimationStyles, width: '100%' }}>
            <p style={headerStyles}>Hello, I'm Jessie</p>
          </div>
          <div ref={bodyAnimation.ref} style={{ ...bodyAnimationStyles, width: '100%' }}>
            <p style={bodyTextStyles}>
              A product designer driven to create user-centered solutions who combines creativity and strategic thinking to craft intuitive and impactful digital experiences.
            </p>
          </div>
        </div>

        {/* Yellow Flower — top right, partially off-screen */}
        <div ref={yellowFlowerAnimation.ref}>
          <YellowFlower style={yellowFlowerStyles} />
        </div>

        {/* Purple Flower — left, partially clipped */}
        <div ref={purpleFlowerAnimation.ref}>
          <PurpleFlower style={purpleFlowerStyles} />
        </div>
      </div>
    </section>
  )
}

export default Hero
