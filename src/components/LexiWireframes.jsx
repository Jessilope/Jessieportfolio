import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Image path
const wireframesImage = '/assets/images/lexi/wirframes.jpg'

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

  const imageContainerStyles = {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  }

  const imageStyles = {
    width: '100%',
    height: 'auto',
    display: 'block',
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

        {/* Single Wireframes Image */}
        <div style={imageContainerStyles}>
          <img 
            src={wireframesImage}
            alt="Wireframes"
            style={imageStyles}
          />
        </div>
      </div>
    </section>
  )
}

export default LexiWireframes
