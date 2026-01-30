import { colors } from '../tokens'
import Navbar from './Navbar'
import useResponsive from '../hooks/useResponsive'

const LexiHero = () => {
  const { isMobile } = useResponsive()

  const heroStyles = {
    position: 'relative',
    width: '100%',
    height: isMobile ? '500px' : '100vh',
    backgroundColor: '#155DFC',
    display: 'flex',
    flexDirection: 'column',
  }

  const contentStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: isMobile ? 'translate(-50%, -50%)' : 'translate(-50%, calc(-50% + 171px))',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '48px' : '212px',
    alignItems: 'center',
    justifyContent: 'center',
    width: isMobile ? '90%' : '758px',
    padding: isMobile ? '0 24px' : '0',
  }

  const logoStyles = {
    fontFamily: `'Madimi One', sans-serif`,
    fontSize: isMobile ? '48px' : '64px',
    fontWeight: 400,
    lineHeight: '61.6px',
    letterSpacing: '12px',
    color: colors.backgrounds.primary,
    textAlign: 'center',
    margin: 0,
  }

  const subtitleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '18px' : '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '1.2px',
    color: colors.backgrounds.main,
    textAlign: 'center',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    margin: 0,
    width: '100%',
  }

  return (
    <div style={heroStyles}>
      <Navbar />
      <div style={contentStyles}>
        <p style={logoStyles}>LEXI</p>
        <p style={subtitleStyles}>Based in Bogota, Colombia</p>
      </div>
    </div>
  )
}

export default LexiHero
