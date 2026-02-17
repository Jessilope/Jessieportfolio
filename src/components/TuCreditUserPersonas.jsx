import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// User persona images
const personaImages = {
  persona1: '/assets/images/tucredit/user-persona-1.png',
  persona2: '/assets/images/tucredit/user-persona-2.png',
}

const TuCreditUserPersonas = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    width: '100%',
    flexShrink: 0,
  }

  const contentStyles = {
    display: 'flex',
    flex: isMobile ? '1 1 auto' : '1 0 0',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '48px',
    alignItems: 'center',
    minHeight: '1px',
    minWidth: isMobile ? '0' : '1px',
    position: 'relative',
    width: isMobile ? '100%' : 'auto',
  }

  const titleContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 700,
    letterSpacing: '1.2px',
    color: '#370161',
    width: '100%',
    minWidth: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
  }

  const titleStyles = {
    lineHeight: '1.3',
    margin: 0,
  }

  const descriptionContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.8px',
    color: '#5b5b5b',
    width: '100%',
    minWidth: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const paragraphStyles = {
    margin: 0,
    marginBottom: 0,
  }

  const imageContainerStyles = {
    width: isMobile ? '100%' : '754px',
    height: isMobile ? 'auto' : '487px',
    aspectRatio: isMobile ? '754 / 487' : undefined,
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
      <div style={contentStyles}>
        {/* Title */}
        <div style={titleContainerStyles}>
          <p style={titleStyles}>User personas</p>
        </div>

        {/* Description */}
        <div style={descriptionContainerStyles}>
          <p style={paragraphStyles}>
            I created user personas to represent the main user types interacting with the mortgage experience. These personas helped keep real user needs, motivations, and concerns at the center of the design process.
          </p>
        </div>

        {/* Image 1 - User persona 1 */}
        <div style={imageContainerStyles}>
          <img 
            src={personaImages.persona1}
            alt="User persona 1"
            style={imageStyles}
          />
        </div>

        {/* Image 2 - User persona 2 */}
        <div style={imageContainerStyles}>
          <img 
            src={personaImages.persona2}
            alt="User persona 2"
            style={imageStyles}
          />
        </div>
      </div>
    </div>
  )
}

export default TuCreditUserPersonas
