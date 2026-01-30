import { colors, spacing } from '../tokens'
import Navbar from './Navbar'
import useResponsive from '../hooks/useResponsive'

const TuCreditHero = () => {
  const { isMobile } = useResponsive()

  const heroStyles = {
    backgroundColor: 'white',
    width: '100%',
    height: isMobile ? '500px' : '892px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0,
  }

  const titleContainerStyles = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '48px' : '212px',
    alignItems: 'center',
    justifyContent: 'center',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90%' : '758px',
    zIndex: 5,
  }

  const logoContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }

  const logoTextStyles = {
    background: 'linear-gradient(to right, #a464ff 0%, #5405c7 49%, #34007e 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontFamily: `'Roboto', sans-serif`,
    fontSize: isMobile ? '44px' : '64px',
    fontWeight: 500,
    lineHeight: '1.7',
    letterSpacing: '0',
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'wdth' 100",
  }

  const subtitleContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const subtitleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '18px' : '24px',
    fontWeight: 700,
    lineHeight: '1.3',
    letterSpacing: '1.2px',
    color: '#580092',
    textAlign: 'center',
    width: '100%',
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
  }

  return (
    <div style={heroStyles}>
      {/* Navbar */}
      <Navbar />

      {/* Title Container */}
      <div style={titleContainerStyles}>
        <div style={logoContainerStyles}>
          <p style={logoTextStyles}>Tu credit</p>
        </div>
        <div style={subtitleContainerStyles}>
          <p style={subtitleStyles}>Based in Bogota, Colombia</p>
        </div>
      </div>
    </div>
  )
}

export default TuCreditHero
