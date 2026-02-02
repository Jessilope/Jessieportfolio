import Navbar from './Navbar'
import useResponsive from '../hooks/useResponsive'

const TripFinderHero = () => {
  const { isMobile } = useResponsive()

  const heroContainerStyles = {
    backgroundColor: '#8125f4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    height: '100vh',
    flexShrink: 0,
    position: 'relative',
  }

  const heroContentStyles = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    flexShrink: 0,
    position: 'relative',
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
  }

  const logoTextStyles = {
    fontFamily: `'Righteous', sans-serif`,
    fontSize: isMobile ? '44px' : '54px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1.2',
    letterSpacing: '0.54px',
    textAlign: 'center',
    color: 'white',
    margin: 0,
  }

  const subtitleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '18px' : '24px',
    fontWeight: 700,
    lineHeight: '1.3',
    letterSpacing: '1.2px',
    textAlign: 'center',
    color: '#580092',
    width: '100%',
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
  }

  const gradientTopStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '120px',
    background: 'linear-gradient(to bottom, #8125f4 0%, transparent 100%)',
    pointerEvents: 'none',
    zIndex: 1,
  }

  const gradientBottomStyles = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '120px',
    background: 'linear-gradient(to top, #8125f4 0%, transparent 100%)',
    pointerEvents: 'none',
    zIndex: 1,
  }

  return (
    <div style={heroContainerStyles}>
      <div style={heroContentStyles}>
        {isMobile && <div style={gradientTopStyles} />}
        {/* Fixed Navbar */}
        <Navbar />

        {/* Title Section */}
        <div style={titleContainerStyles}>
          <p style={logoTextStyles}>Tripfinder</p>
          <p style={subtitleStyles}>Based in Bogota, Colombia</p>
        </div>
        {isMobile && <div style={gradientBottomStyles} />}
      </div>
    </div>
  )
}

export default TripFinderHero
