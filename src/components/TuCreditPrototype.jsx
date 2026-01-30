import { colors } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const TuCreditPrototype = () => {
  const { isMobile } = useResponsive()

  const imgHome32 = "http://localhost:3845/assets/c8bc1d983ee23af307abe38014d0b8cc2c41cb68.png"
  const imgHome41 = "http://localhost:3845/assets/859c2ce1b2088201ba002209fa97f24502d15a18.png"
  const imgRequisitos1 = "http://localhost:3845/assets/24d03f314e0d5374a575ee1f1adbf01a817d4f3e.png"
  const imgGlosary1 = "http://localhost:3845/assets/52996d29c161247afa131b6ab426bcb4c30c3c18.png"

  const sectionStyles = {
    backgroundColor: '#fffefa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    width: '100%',
    flexShrink: 0,
  }

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '48px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const prototypeContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '70px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const titleContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: isMobile ? '28px' : '32px',
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const titleStyles = {
    lineHeight: isMobile ? '28px' : '32px',
    margin: 0,
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

  const lastParagraphStyles = {
    margin: 0,
  }

  const mockupsRowStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '24px' : '48px',
    alignItems: isMobile ? 'center' : 'flex-start',
    justifyContent: 'center',
    flexShrink: 0,
    width: isMobile ? '100%' : 'auto',
  }

  // First row mockups
  const mockup1ContainerStyles = {
    width: isMobile ? '100%' : '435px',
    height: isMobile ? 'auto' : '520px',
    aspectRatio: isMobile ? '435 / 520' : undefined,
    position: 'relative',
    borderRadius: '15px',
    overflow: 'hidden',
    flexShrink: 0,
  }

  const mockup1ImageStyles = {
    position: 'absolute',
    height: '354.73%',
    left: '-0.57%',
    top: '-115.77%',
    width: '100.93%',
    maxWidth: 'none',
  }

  const mockup2ContainerStyles = {
    width: isMobile ? '100%' : '432px',
    height: isMobile ? 'auto' : '599px',
    aspectRatio: isMobile ? '432 / 599' : undefined,
    position: 'relative',
    borderRadius: '6px',
    overflow: 'hidden',
    flexShrink: 0,
  }

  const mockup2ImageStyles = {
    position: 'absolute',
    height: '304.31%',
    left: '-0.72%',
    top: '0',
    width: '101.59%',
    maxWidth: 'none',
  }

  // Second row mockups
  const mockup3ContainerStyles = {
    width: isMobile ? '100%' : '375px',
    height: isMobile ? 'auto' : '547px',
    aspectRatio: isMobile ? '375 / 547' : undefined,
    position: 'relative',
    borderRadius: '15px',
    overflow: 'hidden',
    flexShrink: 0,
  }

  const mockup3ImageStyles = {
    position: 'absolute',
    height: '139.67%',
    left: '0',
    top: '-5.24%',
    width: '100%',
    maxWidth: 'none',
  }

  const mockup4ContainerStyles = {
    width: isMobile ? '100%' : '497px',
    height: isMobile ? 'auto' : '519px',
    aspectRatio: isMobile ? '497 / 519' : undefined,
    position: 'relative',
    borderRadius: '15px',
    flexShrink: 0,
  }

  const mockup4ImageStyles = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
    borderRadius: '15px',
  }

  return (
    <div style={sectionStyles}>
      <div style={containerStyles}>
        {/* Title and description */}
        <div style={prototypeContentStyles}>
          <div style={titleContainerStyles}>
            <p style={titleStyles}>Prototype</p>
          </div>
          <div style={descriptionStyles}>
            <p style={paragraphStyles}>
              The prototype brings the experience together by connecting screens into a clear and guided flow. At this stage, the focus was on demonstrating how users move from understanding mortgage concepts to exploring requirements and evaluating loan options.
            </p>
            <p style={lastParagraphStyles}>
              Interactions were designed to feel smooth and predictable, helping users navigate educational content, access key information, and explore simulations without friction. The prototype reflects the intended pacing of the experience, reinforcing clarity and confidence at every step.
            </p>
          </div>
        </div>

        {/* First row of mockups */}
        <div style={mockupsRowStyles}>
          <div style={mockup1ContainerStyles}>
            <img 
              src={imgHome32}
              alt="Home screen mockup"
              style={mockup1ImageStyles}
            />
          </div>
          <div style={mockup2ContainerStyles}>
            <img 
              src={imgHome41}
              alt="Home screen alternate mockup"
              style={mockup2ImageStyles}
            />
          </div>
        </div>

        {/* Second row of mockups */}
        <div style={mockupsRowStyles}>
          <div style={mockup3ContainerStyles}>
            <img 
              src={imgRequisitos1}
              alt="Requirements screen mockup"
              style={mockup3ImageStyles}
            />
          </div>
          <div style={mockup4ContainerStyles}>
            <img 
              src={imgGlosary1}
              alt="Glossary screen mockup"
              style={mockup4ImageStyles}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TuCreditPrototype
