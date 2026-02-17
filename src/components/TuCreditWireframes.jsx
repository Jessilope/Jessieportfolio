import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Wireframe images
const wireframeImages = {
  wireframe1: '/assets/images/tucredit/wireframe-1.png',
  wireframe2: '/assets/images/tucredit/wireframe-2.png',
  wireframe3: '/assets/images/tucredit/wireframe-3.png',
}

const TuCreditWireframes = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '64px' : '118px',
    paddingBottom: isMobile ? '32px' : '48px',
    width: '100%',
    flexShrink: 0,
  }

  const contentStyles = {
    display: 'flex',
    flex: isMobile ? '1 1 auto' : '1 0 0',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '48px',
    alignItems: 'flex-start',
    minHeight: '1px',
    minWidth: isMobile ? '0' : '1px',
    position: 'relative',
    width: isMobile ? '100%' : 'auto',
  }

  const textContainerStyles = {
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
    color: '#5b5b5b',
    width: '100%',
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const imagesRowStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '24px' : '48px',
    alignItems: isMobile ? 'center' : 'flex-start',
    justifyContent: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const imageSingleRowStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    flexShrink: 0,
  }

  return (
    <div style={sectionStyles}>
      <div style={contentStyles}>
        {/* Text content */}
        <div style={textContainerStyles}>
          <p style={titleStyles}>Wireframes</p>
          <p style={descriptionStyles}>
            I started by mapping out a low-fidelity user flow to visualize the main steps of the mortgage process before designing high-fidelity screens. With the design principles defined, This low-fidelity wireframes establish structure, content hierarchy, and user flow. The focus at this stage was on organizing information in a way that feels clear and guided.
          </p>
        </div>

        {/* First row - 2 images */}
        <div style={imagesRowStyles}>
          {/* Image 1 */}
          <div style={{
            width: isMobile ? '100%' : '421px',
            height: isMobile ? 'auto' : '498px',
            position: 'relative',
            borderRadius: isMobile ? '20px' : '34px',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
            <img 
              src={wireframeImages.wireframe1}
              alt="Wireframe 1"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: isMobile ? '20px' : '34px',
              }}
            />
          </div>

          {/* Image 2 */}
          <div style={{
            width: isMobile ? '100%' : '425px',
            height: isMobile ? 'auto' : '502px',
            position: 'relative',
            borderRadius: isMobile ? '20px' : '34px',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
            <img 
              src={wireframeImages.wireframe2}
              alt="Wireframe 2"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: isMobile ? '20px' : '34px',
              }}
            />
          </div>
        </div>

        {/* Second row - 1 image */}
        <div style={imageSingleRowStyles}>
          <div style={{
            width: isMobile ? '100%' : '515px',
            height: isMobile ? 'auto' : '384px',
            position: 'relative',
            borderRadius: isMobile ? '25px' : '50px',
            flexShrink: 0,
            overflow: 'hidden',
          }}>
            <img 
              src={wireframeImages.wireframe3}
              alt="Wireframe 3"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: isMobile ? '25px' : '50px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TuCreditWireframes
