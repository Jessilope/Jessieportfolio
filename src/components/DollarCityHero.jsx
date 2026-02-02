import Navbar from './Navbar'
import useResponsive from '../hooks/useResponsive'

const DollarCityHero = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#f4fff8',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }

  const workContainerStyles = {
    height: isMobile ? '100vh' : '832px',
    overflow: 'clip',
    position: 'relative',
    width: '100%',
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
    padding: isMobile ? '0 24px' : '0',
  }

  const logoStyles = {
    fontFamily: `'Archivo Black', sans-serif`,
    fontSize: isMobile ? '48px' : '96px',
    fontWeight: 400,
    lineHeight: isMobile ? '50px' : '90px',
    letterSpacing: '0',
    color: '#ebdb32',
    textAlign: 'center',
    margin: 0,
    width: '100%',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '9px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const subtitle1Styles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '16px' : '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '1.2px',
    color: '#929292',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    textAlign: 'center',
    margin: 0,
    width: '100%',
    flexShrink: 0,
  }

  const subtitle2Styles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '1.2px',
    color: '#bbb',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    textAlign: 'center',
    margin: 0,
    width: '100%',
    flexShrink: 0,
  }

  const gradientTopStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '120px',
    background: 'linear-gradient(to bottom, #f4fff8 0%, transparent 100%)',
    pointerEvents: 'none',
    zIndex: 1,
  }

  const gradientBottomStyles = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '120px',
    background: 'linear-gradient(to top, #f4fff8 0%, transparent 100%)',
    pointerEvents: 'none',
    zIndex: 1,
  }

  return (
    <section style={sectionStyles}>
      <Navbar />
      <div style={workContainerStyles}>
        {isMobile && <div style={gradientTopStyles} />}
        <div style={titleContainerStyles}>
          <p style={logoStyles}>DOLLAR CITY</p>
          <div style={contentStyles}>
            <p style={subtitle1Styles}>The store for purchasing household products</p>
            <p style={subtitle2Styles}>Based in Bogota, Colombia</p>
          </div>
        </div>
        {isMobile && <div style={gradientBottomStyles} />}
      </div>
    </section>
  )
}

export default DollarCityHero
