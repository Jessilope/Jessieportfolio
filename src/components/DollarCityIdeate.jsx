import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Image path
const informationArchitectureImage = '/assets/images/dollarcity/information-architecture.png'

const DollarCityIdeate = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '112px',
    paddingTop: isMobile ? '64px' : '112px',
    paddingBottom: isMobile ? '64px' : '112px',
    display: 'flex',
    alignItems: 'center',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'flex-start',
    width: isMobile ? '100%' : '1033px',
  }

  const headerContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : spacing.xxl, // 48px
    alignItems: 'center',
    width: '100%',
  }

  const titleStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 400,
    lineHeight: isMobile ? '28px' : '32px',
    letterSpacing: '0',
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    margin: 0,
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
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '33px',
    alignItems: 'center',
    width: '100%',
  }

  const subtitleStyles = {
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

  const diagramContainerStyles = {
    width: isMobile ? '100%' : '942px',
    height: isMobile ? 'auto' : '715px',
    position: 'relative',
    overflow: 'hidden',
  }

  const diagramImageStyles = {
    width: '100%',
    height: isMobile ? 'auto' : '100.48%',
    position: isMobile ? 'relative' : 'absolute',
    left: isMobile ? undefined : 0,
    top: isMobile ? undefined : '-0.47%',
    objectFit: 'contain',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        {/* Header Content */}
        <div style={headerContentStyles}>
          {/* Title */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <p style={titleStyles}>Ideate</p>
          </div>

          {/* Description Text */}
          <p style={textStyles}>
            Special attention was given to features that reinforce trust, such as visible stock availability, simple payment options, and clear feedback at every step. Rather than adding complexity, the ideation phase focused on removing unnecessary steps and aligning the digital experience with how users already shop in physical Dollar City stores.
          </p>
        </div>

        {/* Image Container */}
        <div style={imageContainerStyles}>
          {/* Subtitle */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <p style={subtitleStyles}>Information Architecture</p>
          </div>

          {/* Diagram */}
          <div style={diagramContainerStyles}>
            <img 
              src={informationArchitectureImage} 
              alt="Information Architecture Diagram"
              style={diagramImageStyles}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DollarCityIdeate
