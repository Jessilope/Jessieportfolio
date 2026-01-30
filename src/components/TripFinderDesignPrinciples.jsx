import { colors } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const TripFinderDesignPrinciples = () => {
  const { isMobile } = useResponsive()

  const imgLine10 = "http://localhost:3845/assets/23926dcbd83e23bcf525dd6265992e6d1a08e6f3.svg"
  const imgLine11 = "http://localhost:3845/assets/140855ac4e9aff4465620809ac0d702104cecaab.svg"
  const imgLine12 = "http://localhost:3845/assets/43ec9691753b63462341129e13c998b822069938.svg"

  const sectionStyles = {
    backgroundColor: '#fffefb',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
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

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
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

  const highlightsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '48px',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: isMobile ? '100%' : '862px',
    flexShrink: 0,
  }

  const highlightRowStyles = {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const lineContainerStyles = (height) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: isMobile ? `${Math.max(height, 60)}px` : `${height}px`,
    width: '0',
    position: 'relative',
    flexShrink: 0,
  })

  const lineWrapperStyles = {
    transform: 'rotate(90deg)',
    flexShrink: 0,
  }

  const lineStyles = (width) => ({
    width: `${width}px`,
    height: '0',
    position: 'relative',
  })

  const lineImageContainerStyles = {
    position: 'absolute',
    inset: '-3px 0 0 0',
  }

  const lineImageStyles = {
    display: 'block',
    maxWidth: 'none',
    width: '100%',
    height: '100%',
  }

  const textBlockStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: '0',
    letterSpacing: '0.8px',
    color: colors.semantic.textPrimary,
    width: isMobile ? '100%' : '744px',
    flexShrink: isMobile ? 1 : 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const paragraphStyles = {
    margin: 0,
  }

  const highlightSpanStyles = {
    lineHeight: '1.6',
    color: '#580092',
  }

  const normalSpanStyles = {
    lineHeight: '1.6',
  }

  return (
    <div style={sectionStyles}>
      <div style={containerStyles}>
        {/* Title */}
        <div style={contentStyles}>
          <p style={titleStyles}>Design Principles</p>
        </div>

        {/* Highlights */}
        <div style={highlightsContainerStyles}>
          {/* First principle */}
          <div style={highlightRowStyles}>
            <div style={lineContainerStyles(74)}>
              <div style={lineWrapperStyles}>
                <div style={lineStyles(74)}>
                  <div style={lineImageContainerStyles}>
                    <img src={imgLine10} alt="" style={lineImageStyles} />
                  </div>
                </div>
              </div>
            </div>
            <div style={textBlockStyles}>
              <p style={paragraphStyles}>
                <span style={highlightSpanStyles}>Safety Through Calm Visuals</span>
                <span style={normalSpanStyles}>
                  <br />
                  Soft colors, rounded shapes, and balanced spacing create a comfortable and reassuring experience.
                </span>
              </p>
            </div>
          </div>

          {/* Second principle */}
          <div style={highlightRowStyles}>
            <div style={lineContainerStyles(67)}>
              <div style={lineWrapperStyles}>
                <div style={lineStyles(67)}>
                  <div style={lineImageContainerStyles}>
                    <img src={imgLine11} alt="" style={lineImageStyles} />
                  </div>
                </div>
              </div>
            </div>
            <div style={textBlockStyles}>
              <p style={paragraphStyles}>
                <span style={highlightSpanStyles}>Content Comes First</span>
                <span style={normalSpanStyles}>
                  <br />
                  A minimal interface allows destinations and imagery to stand out without visual distractions.
                </span>
              </p>
            </div>
          </div>

          {/* Third principle */}
          <div style={highlightRowStyles}>
            <div style={lineContainerStyles(45)}>
              <div style={lineWrapperStyles}>
                <div style={lineStyles(45)}>
                  <div style={lineImageContainerStyles}>
                    <img src={imgLine12} alt="" style={lineImageStyles} />
                  </div>
                </div>
              </div>
            </div>
            <div style={textBlockStyles}>
              <p style={paragraphStyles}>
                <span style={highlightSpanStyles}>Clear and Consistent Structure</span>
                <span style={normalSpanStyles}>
                  <br />
                  Repeated patterns and simple layouts make navigation feel familiar and effortless.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripFinderDesignPrinciples
