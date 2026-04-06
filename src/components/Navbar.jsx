import { useNavigate, useLocation } from 'react-router-dom'
import { colors, spacing, borderRadius, shadows, typography } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import { documents } from '../assets'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isMobile } = useResponsive()
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [isBurgerPressed, setIsBurgerPressed] = React.useState(false)

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
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: isMobile ? 'auto' : 'auto',
    backgroundColor: '#fffefa',
    boxShadow: '0px 2px 12px -4px rgba(0,0,0,0.10)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: isMobile ? spacing.m : '16px',
    paddingBottom: isMobile ? spacing.m : '16px',
    paddingLeft: isMobile ? spacing.m : '96px',
    paddingRight: isMobile ? spacing.m : '96px',
    overflow: 'hidden',
    flexShrink: 0,
    zIndex: 1000,
    boxSizing: 'border-box',
  }

  // Inner content wrapper — mirrors Projects section centering
  const navInnerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1090px',
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
    gap: '24px',
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

  // Burger icon button — glass effect from Figma
  const burgerButtonStyles = {
    display: isMobile ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '44px',
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: 'none',
    borderRadius: '24px',
    boxShadow: '0px 0px 4px 0px rgba(156, 156, 156, 0.25)',
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
    position: 'relative',
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
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: '#212121',
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
    backgroundColor: colors.primary[700],
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
    border: '1px solid #5D5F98',
    backgroundColor: 'transparent',
    color: '#5D5F98',
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

        {/* Mobile navbar — full-width bar fixed at top */}
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          backgroundColor: '#fffefa',
          boxShadow: '0px 2px 12px -4px rgba(0,0,0,0.10)',
          borderRadius: menuOpen ? '0 0 4px 4px' : '0 0 4px 4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          boxSizing: 'border-box',
          zIndex: 1000,
          overflow: menuOpen ? 'visible' : 'hidden',
        }}>
          {/* Logo */}
          <div style={logoContainerStyles} onClick={handleLogoClick}>
            <p style={logoTextStyles}>Jessie</p>
          </div>

          {/* Burger / Close button — plain, no glass */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              flexShrink: 0,
              position: 'relative',
              overflow: 'hidden',
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {/* Burger icon — slides out upward when menu opens */}
            <span style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? 'rotate(90deg) scale(0.7)' : 'rotate(0deg) scale(1)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
              pointerEvents: 'none',
            }}>
              <BurgerIcon />
            </span>
            {/* Close icon — slides in from below when menu opens */}
            <span style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.7)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
              pointerEvents: 'none',
            }}>
              <CloseIcon />
            </span>
          </button>

          {/* Dropdown panel — extends below the bar */}
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            height: menuOpen ? '165px' : '0px',
            backgroundColor: '#fffefa',
            overflow: 'hidden',
            transition: 'height 0.25s ease',
            boxShadow: menuOpen ? '0px 4px 8px 0px rgba(0,0,0,0.10)' : 'none',
            borderRadius: '0 0 4px 4px',
            zIndex: 999,
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '24px',
              paddingBottom: '16px',
              paddingLeft: '8px',
              paddingRight: '8px',
              width: '100%',
            }}>
              {[
                { label: 'Work',  handler: handleWorkClick },
                { label: 'Home',  handler: handleHomeClick },
                { label: 'About', handler: handleAboutClick },
              ].map(({ label, handler }) => (
                <button key={label} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px',
                  width: '100%',
                  height: '34px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  flexShrink: 0,
                }} onClick={handler}>
                  <p style={{
                    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    letterSpacing: '0.8px',
                    color: '#22282f',
                    margin: 0,
                    whiteSpace: 'nowrap',
                    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
                  }}>{label}</p>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </>
    )
  }

  return (
    <nav style={navbarStyles}>
      <div style={navInnerStyles}>
        {/* Logo */}
        <div style={logoContainerStyles} onClick={handleLogoClick}>
          <p style={logoTextStyles}>jessie</p>
        </div>
        
        {/* Nav Links */}
        <div style={navLinksWrapperStyles}>
          <div style={navLinksStyles}>
            <NavbarLink text="Work" onClick={handleWorkClick} />
            <NavbarLink text="Home" onClick={handleHomeClick} />
            <NavbarLink text="About me" onClick={handleAboutClick} />
          </div>
        </div>
      </div>
    </nav>
  )
}

// NavbarLink Component - Color change on hover/click (no underline)
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
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: (isHovered || isClicked) ? '#7f8d9f' : '#22282f',
    margin: 0,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    transition: 'color 0.25s ease',
  }

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 300)
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
    </button>
  )
}

// PrimaryButton and SecondaryButton are imported from their shared components

// Import React for useState
import React from 'react'

// Burger icon — exact paths from Figma (asymmetric middle line)
const BurgerIcon = () => (
  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 3H19.5M1.5 10H16.5M1.5 17H19.5" stroke="#5D5F98" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Close icon — exact paths from Figma (X with subtle center gap)
const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2.5L17 17.5M9 10H10M2 17.5L17 2.5" stroke="#5D5F98" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Download icon for CV button
const DownloadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3V15M12 15L8 11M12 15L16 11" stroke="#5D5F98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17" stroke="#5D5F98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
