import { colors } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const TripFinderPrototype = () => {
  const { isMobile } = useResponsive()

  const imgImage32 = "http://localhost:3845/assets/cbd09a83dadc65af0395cb8d30e914bee93849ed.png"
  const imgImage33 = "http://localhost:3845/assets/5971c3704ac299476cb4d6c1eea83351715383e3.png"
  const imgImage34 = "http://localhost:3845/assets/947e0f8bbafd98fba155ccd1dbd2618fc148ad1e.png"

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
    lineHeight: '0',
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

  const mockupContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: 0,
  }

  const mockup1ContainerStyles = {
    width: isMobile ? '100%' : '665px',
    height: isMobile ? 'auto' : '660px',
    aspectRatio: isMobile ? '665 / 660' : undefined,
    position: 'relative',
    flexShrink: 0,
  }

  const mockup1WrapperStyles = {
    position: isMobile ? 'relative' : 'absolute',
    inset: isMobile ? undefined : 0,
    overflow: 'hidden',
    pointerEvents: 'none',
  }

  const mockup1ImageStyles = {
    position: isMobile ? 'relative' : 'absolute',
    height: isMobile ? 'auto' : '101.21%',
    left: isMobile ? undefined : '-0.03%',
    top: isMobile ? undefined : '0',
    width: '100%',
    maxWidth: 'none',
  }

  const mockupRowStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexShrink: 0,
    width: isMobile ? '100%' : 'auto',
  }

  const mockup2ContainerStyles = {
    width: isMobile ? '100%' : '643px',
    height: isMobile ? 'auto' : '631px',
    aspectRatio: isMobile ? '643 / 631' : undefined,
    position: 'relative',
    flexShrink: 0,
  }

  const mockup2ImageStyles = {
    position: isMobile ? 'relative' : 'absolute',
    inset: isMobile ? undefined : 0,
    width: '100%',
    height: isMobile ? 'auto' : '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
  }

  const mockup3ContainerStyles = {
    width: isMobile ? '100%' : '781px',
    height: isMobile ? 'auto' : '703px',
    aspectRatio: isMobile ? '781 / 703' : undefined,
    position: 'relative',
    flexShrink: 0,
  }

  const mockup3ImageStyles = {
    position: isMobile ? 'relative' : 'absolute',
    inset: isMobile ? undefined : 0,
    width: '100%',
    height: isMobile ? 'auto' : '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
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
              The prototype connects the key screens to demonstrate navigation, transitions, and visual consistency across the experience. At this stage, the focus was on how components behave together, how users move between sections, and how light and dark modes adapt across the interface.
            </p>
            <p style={lastParagraphStyles}>
              Rather than testing functionality, the prototype was used to validate the overall look, rhythm, and feel of the UI, ensuring a smooth and cohesive experience from screen to screen.
            </p>
          </div>
        </div>

        {/* First mockup image */}
        <div style={mockupContainerStyles}>
          <div style={mockup1ContainerStyles}>
            <div style={mockup1WrapperStyles}>
              <img 
                src={imgImage32}
                alt="Prototype mockup 1"
                style={mockup1ImageStyles}
              />
            </div>
          </div>
        </div>

        {/* Second mockup image */}
        <div style={mockupRowStyles}>
          <div style={mockup2ContainerStyles}>
            <img 
              src={imgImage33}
              alt="Prototype mockup 2"
              style={mockup2ImageStyles}
            />
          </div>
        </div>

        {/* Third mockup image */}
        <div style={mockupRowStyles}>
          <div style={mockup3ContainerStyles}>
            <img 
              src={imgImage34}
              alt="Prototype mockup 3"
              style={mockup3ImageStyles}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripFinderPrototype
