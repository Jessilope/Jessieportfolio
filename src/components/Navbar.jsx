import { useNavigate, useLocation } from 'react-router-dom'
import { colors, spacing, borderRadius, shadows, typography } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import { documents } from '../assets'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isMobile } = useResponsive()
  const [menuOpen, setMenuOpen] = React.useState(false)

  // Close menu on route change
  React.useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, isMobile])

  // Navbar container
  const navbarStyles = {
    position: 'fixed',
    top: spacing.xxl,
    left: '50%',
    transform: 'translateX(-50%)',
    width: isMobile ? '380px' : '1152px',
    height: isMobile ? '56px' : '88px',
    backgroundColor: colors.backgrounds.primary,
    borderRadius: borderRadius.xxl,
    boxShadow: shadows.card,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: isMobile ? spacing.m : spacing.s,
    paddingBottom: isMobile ? spacing.m : spacing.s,
    paddingLeft: isMobile ? spacing.m : spacing.l,
    paddingRight: isMobile ? spacing.m : spacing.l,
    overflow: 'visible',
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

  // Logo text
  const logoTextStyles = {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: '24px',
    letterSpacing: '6px',
    fontWeight: 600,
    lineHeight: '32px',
    color: colors.semantic.textHeaders,
    margin: 0,
    fontStyle: 'normal',
  }

  // Nav links wrapper (desktop only)
  const navLinksWrapperStyles = {
    display: isMobile ? 'none' : 'contents',
    flex: 'none',
    alignItems: 'center',
    alignSelf: 'stretch',
    minHeight: '1px',
    minWidth: '1px',
  }

  // Nav links container
  const navLinksStyles = {
    display: 'flex',
    gap: spacing.xl,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flexShrink: 0,
    cursor: 'pointer',
    flex: 'none',
  }

  // Button group (desktop only)
  const buttonGroupStyles = {
    display: isMobile ? 'none' : 'flex',
    gap: spacing.xs,
    alignItems: 'center',
    position: 'relative',
    flexShrink: 0,
  }

  // Burger icon button
  const burgerButtonStyles = {
    display: isMobile ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '44px',
    background: 'white',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
    padding: '10px',
    flexShrink: 0,
    zIndex: 1002,
  }

  // Overlay when menu is open
  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 999,
    opacity: menuOpen ? 1 : 0,
    pointerEvents: menuOpen ? 'auto' : 'none',
    transition: 'opacity 0.3s ease',
  }

  // Mobile dropdown panel
  const dropdownStyles = {
    position: 'absolute',
    top: '52px',
    right: '0',
    marginTop: '8px',
    width: '287px',
    backgroundColor: 'white',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    alignItems: 'center',
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '8px',
    paddingBottom: '8px',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)',
    opacity: menuOpen ? 1 : 0,
    transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
    pointerEvents: menuOpen ? 'auto' : 'none',
    transition: 'opacity 0.25s ease, transform 0.25s ease',
    zIndex: 1001,
  }

  // Dropdown links container
  const dropdownLinksContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start',
    width: '100%',
    cursor: 'pointer',
  }

  // Dropdown links content
  const dropdownLinksContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    alignItems: 'flex-start',
    width: '100%',
    paddingTop: '24px',
    paddingBottom: '16px',
    paddingLeft: '8px',
    paddingRight: '8px',
  }

  // Dropdown link item
  const dropdownLinkStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '4px',
    width: '100%',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
  }

  // Dropdown link text
  const dropdownLinkTextStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: '#1B0022',
    margin: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  // Dropdown buttons container
  const dropdownButtonsStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '16px',
    paddingBottom: '16px',
  }

  // Dropdown primary button
  const dropdownPrimaryBtnStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderRadius: '32px',
    border: 'none',
    backgroundColor: '#580092',
    color: 'white',
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  // Dropdown secondary button
  const dropdownSecondaryBtnStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    borderRadius: '32px',
    border: '1px solid #580092',
    backgroundColor: 'transparent',
    color: '#580092',
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const isHomePage = location.pathname === '/'

  const handleWorkClick = () => {
    setMenuOpen(false)
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
    setMenuOpen(false)
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
    setMenuOpen(false)
    navigate('/about')
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  if (isMobile) {
    return (
      <>
        {/* Overlay */}
        <div style={overlayStyles} onClick={() => setMenuOpen(false)} />

        {/* Floating burger button */}
        <div style={{
          position: 'fixed',
          top: spacing.xxl,
          right: '24px',
          zIndex: 1001,
        }}>
          <button style={burgerButtonStyles} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <CloseIcon /> : <BurgerIcon />}
          </button>

          {/* Mobile dropdown */}
          <div style={dropdownStyles}>
            <div style={dropdownLinksContainerStyles}>
              <div style={dropdownLinksContentStyles}>
                <button style={dropdownLinkStyles} onClick={handleWorkClick}>
                  <p style={dropdownLinkTextStyles}>Work</p>
                </button>
                <button style={dropdownLinkStyles} onClick={handleHomeClick}>
                  <p style={dropdownLinkTextStyles}>Home</p>
                </button>
                <button style={dropdownLinkStyles} onClick={handleAboutClick}>
                  <p style={dropdownLinkTextStyles}>About</p>
                </button>
              </div>

              <div style={dropdownButtonsStyles}>
                <a href="mailto:ale.mogollon06@gmail.com" style={dropdownPrimaryBtnStyles}>
                  Contact me
                </a>
                <a href={documents.cv} target="_blank" rel="noopener noreferrer" style={dropdownSecondaryBtnStyles}>
                  Download CV
                  <DownloadIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <nav style={navbarStyles}>
      {/* Logo */}
      <div style={logoContainerStyles} onClick={handleLogoClick}>
        <p style={logoTextStyles}>JESSIE</p>
      </div>
      
      {/* Nav Links */}
      <div style={navLinksWrapperStyles}>
        <div style={navLinksStyles}>
          <NavbarLink text="Work" onClick={handleWorkClick} />
          <NavbarLink text="Home" onClick={handleHomeClick} />
          <NavbarLink text="About" onClick={handleAboutClick} />
        </div>
      </div>

      {/* Buttons */}
      <div style={buttonGroupStyles}>
        <SecondaryButton href={documents.cv}>
          Download CV
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
    // Hug content - no fixed width
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
    whiteSpace: 'nowrap',
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
    // Hug content - no fixed width
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
    whiteSpace: 'nowrap',
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

// Burger icon (3 horizontal lines)
const BurgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6H21" stroke="#370161" strokeWidth="2" strokeLinecap="round" />
    <path d="M3 12H21" stroke="#370161" strokeWidth="2" strokeLinecap="round" />
    <path d="M3 18H21" stroke="#370161" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

// Close icon (X)
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6L18 18" stroke="#370161" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 6L6 18" stroke="#370161" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

// Download icon for CV button
const DownloadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3V15M12 15L8 11M12 15L16 11" stroke="#580092" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17" stroke="#580092" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

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
