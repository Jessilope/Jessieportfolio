import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Wireframes image
const wireframesImage = '/assets/images/dollarcity/wireframes.png'

const DollarCityWireframes = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '64px' : '118px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    alignItems: 'center',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'flex-start',
    width: isMobile ? '100%' : '1033px',
    flexShrink: 0,
  }

  const textContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '16px' : '26px',
    alignItems: 'flex-start',
    width: '100%',
    flexShrink: 0,
  }

  const titleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 700,
    lineHeight: '1.3',
    letterSpacing: isMobile ? '1px' : '1.2px',
    color: '#370161',
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
  }

  const bodyStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.8px',
    color: '#212121',
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const imageContainerStyles = {
    width: isMobile ? '100%' : '750px',
    height: isMobile ? 'auto' : '1475px',
    position: 'relative',
    flexShrink: 0,
    alignSelf: 'center',
  }

  const imageStyles = {
    width: '100%',
    height: isMobile ? 'auto' : '100%',
    objectFit: 'contain',
  }

  return (
    <div style={sectionStyles}>
      <div style={contentStyles}>
        <div style={textContentStyles}>
          <p style={titleStyles}>Wireframes</p>
          <p style={bodyStyles}>
            With the information architecture defined and the OOUX method in place, I translated ideas into low-fidelity wireframes to validate structure, flow, and hierarchy before focusing on visual details.
          </p>
        </div>
        <div style={imageContainerStyles}>
          <img 
            src={wireframesImage} 
            alt="Wireframes" 
            style={imageStyles}
          />
        </div>
      </div>
    </div>
  )
}

export default DollarCityWireframes
