import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Image path
const userJourneyMapImage = '/assets/images/dollarcity/user-journey-map.png'

const DollarCityUserJourneyMap = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '112px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    alignItems: 'center',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : spacing.xxl, // 64px
    alignItems: 'flex-start',
    width: isMobile ? '100%' : '1033px',
  }

  const titleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '0',
    color: '#370161',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    margin: 0,
    width: '100%',
  }

  const textStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    width: '100%',
  }

  const imageContainerStyles = {
    width: isMobile ? '100%' : '705px',
    height: isMobile ? 'auto' : '741px',
    position: 'relative',
    alignSelf: 'center',
  }

  const imageStyles = {
    width: '100%',
    height: isMobile ? 'auto' : '100%',
    objectFit: 'contain',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
          <p style={titleStyles}>User Journey Map</p>
        </div>

        {/* Text Block */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
          <p style={textStyles}>
            After analyzing user reviews and survey results, I needed a way to visualize the full Dollar City shopping experience and understand where frustrations actually occur. I created a User Journey Map to map each step of the user's process, from discovering Dollar City to completing a purchase, and aligned it with the user's emotional state at every stage.
          </p>
        </div>

        {/* User Journey Map Image */}
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

export default DollarCityUserJourneyMap
