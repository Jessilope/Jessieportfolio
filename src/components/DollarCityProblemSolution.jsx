import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const DollarCityProblemSolution = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#ffffff',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '112px',
    paddingTop: isMobile ? '64px' : '112px',
    paddingBottom: isMobile ? '64px' : '112px',
    display: 'flex',
    alignItems: 'center',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'flex-start',
    width: isMobile ? '100%' : '1033px',
  }

  const textBlockStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    alignItems: 'flex-start',
    width: '100%',
  }

  const textStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0',
    color: '#000000',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    width: '100%',
  }

  const highlightsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '38px',
    alignItems: 'flex-start',
    width: '100%',
  }

  const highlightItemStyles = {
    display: 'flex',
    gap: isMobile ? '12px' : '19px',
    alignItems: isMobile ? 'flex-start' : 'center',
    width: isMobile ? '100%' : '1152px',
  }

  const lineStyles = {
    width: '3px',
    backgroundColor: '#370161',
    flexShrink: 0,
    alignSelf: 'stretch',
    minHeight: isMobile ? '80px' : undefined,
    borderRadius: '1.5px',
  }

  const highlightTextStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    flex: '1 0 0',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        {/* Introductory Text Block */}
        <div style={textBlockStyles}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <p style={textStyles}>
              After reviewing Dollar City's current digital presence, analyzing user reviews, and synthesizing survey insights, clear patterns began to emerge. Users value the brand for its accessibility and pricing, but recurring concerns around customer service, trust, and online purchasing highlighted a gap between user expectations and the existing digital experience.
            </p>
          </div>
        </div>

        {/* Highlights Container */}
        <div style={highlightsContainerStyles}>
          {/* Problem */}
          <div style={highlightItemStyles}>
            <div style={lineStyles}></div>
            <p style={highlightTextStyles}>
              <span style={{ color: '#370161', lineHeight: 1.6 }}>Problem</span>
              <br />
              Although Dollar city has a digital presence to showcase their offerings and locations, so far online shopping is not available on their official platform.
            </p>
          </div>

          {/* Solution */}
          <div style={highlightItemStyles}>
            <div style={lineStyles}></div>
            <p style={highlightTextStyles}>
              <span style={{ color: '#370161', lineHeight: 1.6 }}>Solution</span>
              <br />
              Develop a responsive e-commerce app for Dollar City that offers a seamless and secure shopping experience, enabling users to browse products, check stock availability, and complete purchases with flexible payment and delivery options.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DollarCityProblemSolution
