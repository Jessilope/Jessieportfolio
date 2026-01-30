import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const LexiWireframes = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '64px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '64px' : '118px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    alignItems: 'center',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : spacing.xxl, // 48px
    alignItems: 'flex-start',
    width: '100%',
    flex: 1,
  }

  const headerContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '16px' : '26px',
    alignItems: 'flex-start',
    width: '100%',
  }

  const subheaderStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: isMobile ? '1px' : '1.2px',
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
    letterSpacing: '0.8px',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    width: '100%',
  }

  const imagesRowStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '24px' : spacing.xxl, // 48px
    alignItems: isMobile ? 'center' : 'flex-start',
    justifyContent: 'center',
    width: '100%',
  }

  const imageContainerStyles = {
    width: isMobile ? '100%' : '311px',
    maxWidth: isMobile ? '311px' : 'none',
    height: isMobile ? 'auto' : '601px',
    aspectRatio: isMobile ? '311 / 601' : undefined,
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden',
  }

  const singleImageContainerStyles = {
    width: isMobile ? '100%' : '311px',
    maxWidth: isMobile ? '311px' : 'none',
    height: isMobile ? 'auto' : '601px',
    aspectRatio: isMobile ? '311 / 601' : undefined,
    flexShrink: 0,
    position: 'relative',
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
        {/* Header Section */}
        <div style={headerContainerStyles}>
          <p style={subheaderStyles}>Wireframes</p>
          <p style={bodyTextStyles}>
            With the information architecture and core interactions defined, I translated the main concepts into low-fidelity wireframes to validate structure, user flow, and content hierarchy. This step helped ensure clarity and consistency across the experience before moving into visual design.
          </p>
        </div>

        {/* First row of images */}
        <div style={imagesRowStyles}>
          <div style={imageContainerStyles}>
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              <img 
                src="http://localhost:3845/assets/baef8e255735ac518e8218f6692f894fa26cd91d.png"
                alt="Wireframe 1"
                style={{
                  position: 'absolute',
                  height: '100%',
                  left: '-0.08%',
                  maxWidth: 'none',
                  top: 0,
                  width: '419.31%',
                }}
              />
            </div>
          </div>
          <div style={imageContainerStyles}>
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              <img 
                src="http://localhost:3845/assets/baef8e255735ac518e8218f6692f894fa26cd91d.png"
                alt="Wireframe 2"
                style={{
                  position: 'absolute',
                  height: '100%',
                  left: '-106.48%',
                  maxWidth: 'none',
                  top: '1.37%',
                  width: '419.31%',
                }}
              />
            </div>
          </div>
        </div>

        {/* Second row of images */}
        <div style={imagesRowStyles}>
          <div style={imageContainerStyles}>
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              <img 
                src="http://localhost:3845/assets/baef8e255735ac518e8218f6692f894fa26cd91d.png"
                alt="Wireframe 3"
                style={{
                  position: 'absolute',
                  height: '100%',
                  left: '-318.41%',
                  maxWidth: 'none',
                  top: '0.46%',
                  width: '419.31%',
                }}
              />
            </div>
          </div>
          <div style={imageContainerStyles}>
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              <img 
                src="http://localhost:3845/assets/baef8e255735ac518e8218f6692f894fa26cd91d.png"
                alt="Wireframe 4"
                style={{
                  position: 'absolute',
                  height: '100%',
                  left: '-0.08%',
                  maxWidth: 'none',
                  top: 0,
                  width: '419.31%',
                }}
              />
            </div>
          </div>
        </div>

        {/* Single centered image */}
        <div style={{ display: 'flex', alignItems: isMobile ? 'center' : 'flex-start', justifyContent: 'center', width: '100%' }}>
          <div style={singleImageContainerStyles}>
            <img 
              src="http://localhost:3845/assets/1ec282ce97b6307dff6a83909f824d14cfc1dfad.png"
              alt="Wireframe 5"
              style={imageStyles}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LexiWireframes
