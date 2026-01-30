import { colors } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const TripFinderComponentSet = () => {
  const { isMobile } = useResponsive()

  const imgImage30 = "http://localhost:3845/assets/de73d3ab9c0163b324eae5ef8e1840ef24a7b2c3.png"

  const sectionStyles = {
    backgroundColor: '#fffefb',
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
    alignItems: 'center',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    width: '100%',
    flexShrink: 0,
  }

  const contentContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '57px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const textContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '48px',
    alignItems: 'flex-start',
    width: '100%',
    flexShrink: 0,
  }

  const titleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 700,
    lineHeight: '1.3',
    letterSpacing: '1.2px',
    color: '#370161',
    width: '100%',
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
  }

  const descriptionStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.8px',
    color: colors.semantic.textPrimary,
    width: '100%',
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const imageContainerStyles = {
    width: isMobile ? '100%' : '880px',
    height: isMobile ? 'auto' : '792px',
    aspectRatio: isMobile ? '880 / 792' : undefined,
    position: 'relative',
    flexShrink: 0,
  }

  const imageStyles = {
    position: isMobile ? 'relative' : 'absolute',
    inset: isMobile ? undefined : 0,
    width: '100%',
    height: isMobile ? 'auto' : '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
  }

  return (
    <div style={sectionStyles}>
      <div style={contentContainerStyles}>
        {/* Text content */}
        <div style={textContainerStyles}>
          <p style={titleStyles}>Component set</p>
          <p style={descriptionStyles}>
            A consistent component set was created to maintain visual harmony across the interface and support scalability. Core elements such as buttons, cards, navigation bars, and input fields were designed with flexibility in mind, allowing them to adapt seamlessly to both light and dark modes. Reusable components ensure alignment in spacing, typography, and interaction patterns, helping the interface feel cohesive and easy to navigate. This systemized approach allowed the UI to remain clean and predictable while supporting different screen contexts throughout the app.
          </p>
        </div>

        {/* Component set image */}
        <div style={imageContainerStyles}>
          <img 
            src={imgImage30}
            alt="Component set examples"
            style={imageStyles}
          />
        </div>
      </div>
    </div>
  )
}

export default TripFinderComponentSet
