import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Image path
const userJourneyMapImage = '/assets/images/lexi/user-journey-map.png'

const LexiUserJourneyMap = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '64px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    alignItems: 'center',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'flex-start',
    width: '100%',
    flex: 1,
  }

  const headerStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '1.2px',
    color: '#370161',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    margin: 0,
    width: '100%',
  }

  const imageContainerStyles = {
    position: 'relative',
    width: '100%',
    aspectRatio: '2566 / 1366',
  }

  const imageStyles = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
          <p style={headerStyles}>User Journey Map</p>
        </div>
        <div style={imageContainerStyles}>
          <img 
            src={userJourneyMapImage}
            alt="User Journey Map"
            style={imageStyles}
          />
        </div>
      </div>
    </section>
  )
}

export default LexiUserJourneyMap
