import { useNavigate, useLocation } from 'react-router-dom'
import { colors, spacing, borderRadius, shadows, typography } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import { documents } from '../assets'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isMobile } = useResponsive()

  // Navbar container - Especificaciones exactas de Figma
  const navbarStyles = {
    position: 'fixed',
    top: spacing.xxl, // 64px
    left: '50%',
    transform: 'translateX(-50%)',
    width: isMobile ? '380px' : '1152px',
    height: isMobile ? '56px' : '88px',
    backgroundColor: colors.backgrounds.primary, // #FFFFFF
    borderRadius: borderRadius.xxl, // 48px
    boxShadow: shadows.card,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.s, // 16px
    paddingBottom: spacing.s, // 16px
    paddingLeft: isMobile ? spacing.m : spacing.l, // 24px : 32px
    paddingRight: isMobile ? spacing.m : spacing.l, // 24px : 32px
    overflow: 'clip',
    flexShrink: 0,
    zIndex: 1000,
  }

  // Logo container
  const logoContainerStyles = {
    display: 'inline-grid',
    gridTemplateColumns: 'max-content',
    gridTemplateRows: 'max-content',
    alignItems: 'center',
    justifyItems: 'start',
    lineHeight: 0,
    position: 'relative',
    flexShrink: 0,
    cursor: 'pointer',
  }

  // Logo text - Barlow Condensed SemiBold
  const logoTextStyles = {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: '24px',
    letterSpacing: '6px',
    fontWeight: 600,
    lineHeight: '32px',
    color: colors.semantic.textHeaders, // #580092
    margin: 0,
    fontStyle: 'normal',
  }

  // Nav links wrapper (flex-1 on mobile to center links in remaining space)
  const navLinksWrapperStyles = {
    display: isMobile ? 'flex' : 'contents',
    flex: isMobile ? '1 0 0' : 'none',
    alignItems: 'center',
    alignSelf: 'stretch',
    minHeight: '1px',
    minWidth: '1px',
  }

  // Nav links container
  const navLinksStyles = {
    display: 'flex',
    gap: isMobile ? spacing.m : spacing.xl, // 24px : 40px
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flexShrink: 0,
    cursor: 'pointer',
    flex: isMobile ? '1 0 0' : 'none',
  }

  // Button group
  const buttonGroupStyles = {
    display: isMobile ? 'none' : 'flex',
    gap: spacing.xs, // 8px
    alignItems: 'center',
    position: 'relative',
    flexShrink: 0,
  }

  const isHomePage = location.pathname === '/'

  const handleWorkClick = () => {
    if (isHomePage) {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      navigate('/')
      setTimeout(() => {
        const projectsSection = document.getElementById('projects')
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }

  const handleHomeClick = () => {
    if (isHomePage) {
      const landingSection = document.getElementById('landing')
      if (landingSection) {
        landingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      navigate('/')
    }
  }

  const handleAboutClick = () => {
    navigate('/about')
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <nav style={navbarStyles}>
      {/* Logo - Flower on mobile, JESSIE text on desktop */}
      <div style={logoContainerStyles} onClick={handleLogoClick}>
        {isMobile ? (
          <FlowerLogo size={44} />
        ) : (
          <p style={logoTextStyles}>JESSIE</p>
        )}
      </div>
      
      {/* Nav Links - Wrapped in flex-1 container on mobile */}
      <div style={navLinksWrapperStyles}>
        <div style={navLinksStyles}>
          <NavbarLink text="Work" onClick={handleWorkClick} />
          <NavbarLink text="Home" onClick={handleHomeClick} />
          <NavbarLink text="About" onClick={handleAboutClick} />
        </div>
      </div>

      {/* Buttons - Hidden on mobile */}
      <div style={buttonGroupStyles}>
        <SecondaryButton href={documents.cv}>
          CV
        </SecondaryButton>
        <PrimaryButton href="mailto:ale.mogollon06@gmail.com">
          Contact me
        </PrimaryButton>
      </div>
    </nav>
  )
}

// NavbarLink Component - Con animación de underline (estados: Default, Hover, Click)
const NavbarLink = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isClicked, setIsClicked] = React.useState(false)

  const linkButtonStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    padding: '4px',
    position: 'relative',
    flexShrink: 0,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  }

  const textStyles = {
    fontFamily: `'${typography.presets.navLink.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: typography.presets.navLink.fontSize, // 16px
    fontWeight: typography.presets.navLink.fontWeight, // 400
    lineHeight: typography.presets.navLink.lineHeight, // 1.6
    letterSpacing: typography.presets.navLink.letterSpacing, // 0.8px
    color: colors.semantic.textPrimary,
    margin: 0,
    textAlign: 'left',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  // Container para la línea animada
  const lineContainerStyles = {
    height: '0px',
    width: '100%',
    position: 'relative',
    flexShrink: 0,
  }

  // Línea amarilla - estado hover (línea delgada)
  const hoverLineStyles = {
    position: 'absolute',
    top: '-2px',
    left: 0,
    right: 0,
    height: '2px',
    backgroundColor: colors.secondary['600'], // #FFDF5B
    opacity: isHovered && !isClicked ? 1 : 0,
    transition: 'opacity 0.3s ease',
  }

  // Línea amarilla - estado click (línea más gruesa)
  const clickLineStyles = {
    position: 'absolute',
    top: '-2px',
    left: 0,
    right: 0,
    height: '3px',
    backgroundColor: colors.secondary['600'], // #FFDF5B
    opacity: isClicked ? 1 : 0,
    transition: 'opacity 0.3s ease',
  }

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 300) // Reset después de la animación
    if (onClick) onClick()
  }

  return (
    <button 
      style={linkButtonStyles}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p style={textStyles}>{text}</p>
      <div style={lineContainerStyles}>
        <div style={hoverLineStyles} />
        <div style={clickLineStyles} />
      </div>
    </button>
  )
}

// SecondaryButton Component - Con hover (Figma node 261:2112 & 384:1244)
const SecondaryButton = ({ children, href }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  const buttonStyles = {
    // Size: big (from Figma)
    width: '99px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: spacing.m, // 24px
    paddingRight: spacing.m, // 24px
    paddingTop: spacing.s, // 16px
    paddingBottom: spacing.s, // 16px
    borderRadius: borderRadius.l, // 32px
    
    // States: Default -> Hover
    border: `1px solid ${isHovered ? colors.primary['300'] : colors.primary['700']}`,
    backgroundColor: 'transparent',
    color: isHovered ? colors.primary['300'] : colors.primary['700'], // #E0C7FF : #580092
    
    // Typography from Figma: Kantumruy Regular 16px
    fontFamily: `'${typography.presets.button.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: typography.presets.button.fontSize, // 16px
    fontWeight: typography.presets.button.fontWeight, // 400
    lineHeight: typography.presets.button.lineHeight, // 24px
    letterSpacing: typography.presets.button.letterSpacing, // 0
    
    cursor: 'pointer',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  )
}

// PrimaryButton Component - Con hover (Figma node 261:2111 & 344:507)
const PrimaryButton = ({ children, href, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  const buttonStyles = {
    // Size: Big (from Figma - width: 135px, height: 56px)
    minWidth: '135px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: spacing.m, // 24px
    paddingRight: spacing.m, // 24px
    paddingTop: spacing.s, // 16px
    paddingBottom: spacing.s, // 16px
    borderRadius: borderRadius.l, // 32px
    border: 'none',
    
    // States: Default -> Hover
    backgroundColor: isHovered ? colors.primary['300'] : colors.primary['700'], // #E0C7FF : #580092
    color: colors.backgrounds.primary, // #FFFFFF
    
    // Typography from Figma: Kantumruy Regular 16px
    fontFamily: `'${typography.presets.button.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: typography.presets.button.fontSize, // 16px
    fontWeight: typography.presets.button.fontWeight, // 400
    lineHeight: typography.presets.button.lineHeight, // 24px
    letterSpacing: typography.presets.button.letterSpacing, // 0
    
    cursor: 'pointer',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    transition: 'all 0.3s ease',
    flexShrink: 0,
    textDecoration: 'none',
  }

  // If href is provided, render as a link
  if (href) {
    return (
      <a
        href={href}
        style={buttonStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      style={buttonStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  )
}

// Import React for useState
import React from 'react'

// FlowerLogo Component for mobile navbar - Same as About page flower (variant 1), scalable
const FlowerLogo = ({ size = 44 }) => {
  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 355 355"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      >
        {/* Outer layer - 8 circles in #FFF7D6 */}
        <g style={{
          transformOrigin: '177.5px 177.5px',
          animation: 'rotateNavFlowerOuter 20s linear infinite'
        }}>
          <circle cx="86.1548" cy="92.3831" r="59.1667" fill="#FFF7D6" />
          <circle cx="177.5" cy="59.1667" r="59.1667" fill="#FFF7D6" />
          <circle cx="177.5" cy="295.833" r="59.1667" fill="#FFF7D6" />
          <circle cx="264.693" cy="92.3831" r="59.1667" fill="#FFF7D6" />
          <circle cx="295.833" cy="177.5" r="59.1667" fill="#FFF7D6" />
          <circle cx="264.693" cy="262.617" r="59.1667" fill="#FFF7D6" />
          <circle cx="96.535" cy="262.617" r="59.1667" fill="#FFF7D6" />
          <circle cx="59.1667" cy="177.5" r="59.1667" fill="#FFF7D6" />
        </g>
        
        {/* Middle layer - 8 circles + center in #FFEB99 */}
        <g style={{
          transformOrigin: '177.5px 177.5px',
          animation: 'rotateNavFlowerMiddle 15s linear infinite reverse'
        }}>
          <circle cx="109.344" cy="109.344" r="49.3056" fill="#FFEB99" />
          <circle cx="177.5" cy="88.0556" r="49.3056" fill="#FFEB99" />
          <circle cx="245.656" cy="109.344" r="49.3056" fill="#FFEB99" />
          <circle cx="266.944" cy="177.5" r="49.3056" fill="#FFEB99" />
          <circle cx="245.656" cy="245.656" r="49.3056" fill="#FFEB99" />
          <circle cx="177.5" cy="266.944" r="49.3056" fill="#FFEB99" />
          <circle cx="109.344" cy="245.656" r="49.3056" fill="#FFEB99" />
          <circle cx="88.0556" cy="177.5" r="49.3056" fill="#FFEB99" />
          <circle cx="177.5" cy="177.5" r="81.5962" fill="#FFEB99" />
        </g>
        
        {/* Inner layer - 8 circles + center in #FFF3C2 */}
        <g style={{
          transformOrigin: '177.5px 177.5px',
          animation: 'rotateNavFlowerInner 10s linear infinite'
        }}>
          <circle cx="133.796" cy="133.796" r="33.5624" fill="#FFF3C2" />
          <circle cx="177.5" cy="118.333" r="33.5624" fill="#FFF3C2" />
          <circle cx="221.204" cy="133.796" r="33.5624" fill="#FFF3C2" />
          <circle cx="236.667" cy="177.5" r="33.5624" fill="#FFF3C2" />
          <circle cx="221.204" cy="221.204" r="33.5624" fill="#FFF3C2" />
          <circle cx="177.5" cy="236.667" r="33.5624" fill="#FFF3C2" />
          <circle cx="133.796" cy="221.204" r="33.5624" fill="#FFF3C2" />
          <circle cx="118.333" cy="177.5" r="33.5624" fill="#FFF3C2" />
          <circle cx="177.5" cy="177.5" r="55.3485" fill="#FFF3C2" />
        </g>
      </svg>
      
      <style>{`
        @keyframes rotateNavFlowerOuter {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateNavFlowerMiddle {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes rotateNavFlowerInner {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Navbar
