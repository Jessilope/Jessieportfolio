import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Image paths
const dataCollectionImages = {
  review1: '/assets/images/lexi/data-collection-1.png',
  review2: '/assets/images/lexi/data-collection-2.png',
  review3: '/assets/images/lexi/data-collection-3.png',
  review4: '/assets/images/lexi/data-collection-4.png',
  review5: '/assets/images/lexi/data-collection-5.png',
}

const LexiDataCollection = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: colors.backgrounds.main,
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '48px' : '112px',
    alignItems: 'center',
    width: '100%',
  }

  const textSectionStyles = {
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
    letterSpacing: '1.2px',
    color: '#370161',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    margin: 0,
    width: '100%',
  }

  const bodyTextStyles = {
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
    gap: isMobile ? '16px' : '10px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    maxWidth: isMobile ? '100%' : '1005px',
    overflowX: 'auto',
    overflowY: 'visible',
    paddingBottom: '16px',
    scrollbarWidth: 'thin',
    scrollbarColor: '#370161 #f0f0f0',
  }

  const imageContainerStyles = (width, height) => ({
    width: isMobile ? '100%' : `${width}px`,
    maxWidth: isMobile ? '300px' : `${width}px`,
    height: isMobile ? 'auto' : `${height}px`,
    position: 'relative',
    flexShrink: 0,
    overflow: 'hidden',
  })

  const imageStyles = {
    position: isMobile ? 'relative' : 'absolute',
    width: '100%',
    height: 'auto',
    left: isMobile ? 'auto' : 0,
    top: isMobile ? 'auto' : 0,
    maxWidth: 'none',
    pointerEvents: 'none',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        {/* Text Section */}
        <div style={textSectionStyles}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <p style={titleStyles}>Data collection</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <p style={bodyTextStyles}>
              The research phase focused on analyzing real user experiences with language exchange apps. I reviewed open-source data from App Store and Google Play comments and benchmarked platforms such as HelloTalk and Tandem. Recurring feedback revealed user discomfort related to unwanted flirting, lack of seriousness, and feeling unsafe while practicing a language. These insights helped validate the problem and informed key design decisions for creating a more respectful and guided learning experience with Lexi.
            </p>
          </div>
        </div>

        {/* All Images in One Row with Horizontal Scroll */}
        <div style={imagesRowStyles}>
          <div style={imageContainerStyles(299, 379)}>
            <img 
              src={dataCollectionImages.review1}
              alt="App review 1"
              style={imageStyles}
            />
          </div>
          <div style={imageContainerStyles(319, 421)}>
            <img 
              src={dataCollectionImages.review2}
              alt="App review 2"
              style={imageStyles}
            />
          </div>
          <div style={imageContainerStyles(328, 416)}>
            <img 
              src={dataCollectionImages.review3}
              alt="App review 3"
              style={imageStyles}
            />
          </div>
          <div style={imageContainerStyles(296, 572.225)}>
            <img 
              src={dataCollectionImages.review4}
              alt="App review 4"
              style={imageStyles}
            />
          </div>
          <div style={imageContainerStyles(338, 444)}>
            <img 
              src={dataCollectionImages.review5}
              alt="App review 5"
              style={imageStyles}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LexiDataCollection
