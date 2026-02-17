import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Image paths
const dataCollectionImages = {
  image1: '/assets/images/dollarcity/data-collection-1.png',
  image2: '/assets/images/dollarcity/data-collection-2.png',
  image3: '/assets/images/dollarcity/data-collection-3.png',
  image4: '/assets/images/dollarcity/data-collection-4.png',
}

const DollarCityDataCollection = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefa',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '112px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    alignItems: 'center',
  }

  const contentContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '48px' : '112px',
    alignItems: 'flex-start',
    width: isMobile ? '100%' : '1033px',
  }

  const headerContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '48px',
    alignItems: 'center',
    width: '100%',
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

  const imagesRowStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: isMobile ? '16px' : '24px',
    width: '100%',
    overflowX: 'auto',
    overflowY: 'visible',
    paddingBottom: '16px',
    scrollbarWidth: 'thin',
    scrollbarColor: '#370161 #f0f0f0',
  }

  const imageContainerStyles = (width, height) => ({
    width: isMobile ? '280px' : `${width}px`,
    height: isMobile ? 'auto' : `${height}px`,
    flexShrink: 0,
    overflow: 'hidden',
    position: 'relative',
  })

  const imageStyles = {
    width: '100%',
    height: 'auto',
    display: 'block',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentContainerStyles}>
        {/* Header Content */}
        <div style={headerContentStyles}>
          {/* Title */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <p style={titleStyles}>Data collection</p>
          </div>

          {/* Description Text */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <p style={textStyles}>
              The research phase focused on understanding real user experiences in Colombia. I analyzed open-source information, such as user reviews and comments on Google, to identify recurring patterns in how customers perceive Dollar City, especially regarding service quality and trust. To complement this qualitative data, I also conducted a user survey to validate assumptions and gather direct insights.
            </p>
          </div>
        </div>

        {/* All Images in One Row with Horizontal Scroll */}
        <div style={imagesRowStyles}>
          <div style={imageContainerStyles(564, 168)}>
            <img 
              src={dataCollectionImages.image1} 
              alt="Google review 1"
              style={imageStyles}
            />
          </div>
          <div style={imageContainerStyles(564, 188)}>
            <img 
              src={dataCollectionImages.image2} 
              alt="Google review 2"
              style={imageStyles}
            />
          </div>
          <div style={imageContainerStyles(564, 160)}>
            <img 
              src={dataCollectionImages.image3} 
              alt="Google review 3"
              style={imageStyles}
            />
          </div>
          <div style={imageContainerStyles(564, 181)}>
            <img 
              src={dataCollectionImages.image4} 
              alt="Google review 4"
              style={imageStyles}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DollarCityDataCollection
