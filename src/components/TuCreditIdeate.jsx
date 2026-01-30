import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Information architecture image
const informationArchitectureImage = '/assets/images/tucredit/information-architecture.png'

const TuCreditIdeate = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '64px',
    width: '100%',
    flexShrink: 0,
  }

  const contentStyles = {
    display: 'flex',
    flex: isMobile ? '1 1 auto' : '1 0 0',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '64px',
    alignItems: 'center',
    minHeight: '1px',
    minWidth: isMobile ? '0' : '1px',
    position: 'relative',
    width: isMobile ? '100%' : 'auto',
  }

  const textContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '48px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const titleStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 400,
    lineHeight: isMobile ? '28px' : '32px',
    letterSpacing: '0',
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    margin: 0,
    flexShrink: 0,
  }

  const descriptionStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.8px',
    color: colors.semantic.textPrimary,
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const paragraphStyles = {
    margin: 0,
    marginBottom: 0,
  }

  const imageContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '20px' : '33px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const imageTitleStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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

  const imageWrapperStyles = {
    aspectRatio: '2032/768',
    position: 'relative',
    width: '100%',
    flexShrink: 0,
  }

  const imageStyles = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.7,
    pointerEvents: 'none',
  }

  return (
    <div style={sectionStyles}>
      <div style={contentStyles}>
        {/* Text content */}
        <div style={textContentStyles}>
          {/* Title */}
          <div style={titleStyles}>
            <p style={paragraphStyles}>Ideate</p>
          </div>

          {/* Description */}
          <div style={descriptionStyles}>
            <p style={paragraphStyles}>
              At this stage, the challenge was clear: people don't avoid mortgage loans because of lack of interest, but because the process feels complex, intimidating, and unclear.
            </p>
            <p style={paragraphStyles}>
              Ideation focused on rethinking the experience as a guided journey rather than a traditional banking flow. Instead of pushing users directly into forms, the experience begins by helping them understand key concepts, requirements, and options in a simple and approachable way.
            </p>
            <p style={paragraphStyles}>
              Education, transparency, and simulation became central ideas. Users should know what to expect, explore scenarios without pressure, and feel supported at every step. The goal was not to oversimplify the process, but to make it understandable and confidence-building.
            </p>
            <p style={paragraphStyles}>
              These ideas shaped TuCredit as an experience designed to guide users forward with clarity and trust, setting the foundation for the following design stages.
            </p>
          </div>
        </div>

        {/* Image section */}
        <div style={imageContainerStyles}>
          <div style={imageTitleStyles}>
            <p style={paragraphStyles}>Information Architecture</p>
          </div>
          <div style={imageWrapperStyles}>
            <img 
              src={informationArchitectureImage}
              alt="Information Architecture diagram"
              style={imageStyles}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TuCreditIdeate
