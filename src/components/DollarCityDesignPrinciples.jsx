import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const DollarCityDesignPrinciples = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '112px',
    paddingTop: isMobile ? '64px' : '112px',
    paddingBottom: isMobile ? '32px' : '48px',
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

  const headerContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '12px' : '16px',
    alignItems: 'flex-start',
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

  const highlightsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '48px',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
  }

  const highlightItemStyles = {
    display: 'flex',
    gap: isMobile ? '12px' : '16px',
    alignItems: isMobile ? 'flex-start' : 'center',
    width: '100%',
  }

  const lineStyles = {
    width: '3px',
    backgroundColor: '#370161',
    flexShrink: 0,
    alignSelf: 'stretch',
    minHeight: isMobile ? '60px' : undefined,
  }

  const highlightTextStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    width: isMobile ? '100%' : '744px',
    flexShrink: isMobile ? 1 : 0,
    margin: 0,
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        {/* Header Content */}
        <div style={headerContentStyles}>
          {/* Title */}
          <p style={titleStyles}>Design Principles</p>

          {/* Description Paragraphs */}
          <p style={textStyles}>
            Once the structure and flow were validated through low-fidelity wireframes, I focused on defining a visual system that reinforced clarity, trust, and accessibility.
          </p>
          <p style={textStyles}>
            The visual and interaction design was guided by three core principles that shaped every decision throughout the experience:
          </p>
        </div>

        {/* Highlights Container */}
        <div style={highlightsContainerStyles}>
          {/* Modern */}
          <div style={highlightItemStyles}>
            <div style={lineStyles}></div>
            <p style={highlightTextStyles}>
              <span style={{ color: '#370161', lineHeight: 1.6 }}>Modern</span>
              <br />
              The interface uses contemporary patterns and a clean visual language that feels current and familiar, aligning with how users interact with digital products today.
            </p>
          </div>

          {/* Organic */}
          <div style={highlightItemStyles}>
            <div style={lineStyles}></div>
            <div style={highlightTextStyles}>
              <p style={{ margin: '0', lineHeight: 1.6 }}>
                <span style={{ color: '#370161', lineHeight: 1.6 }}>Organic</span>
                <br />
                The experience feels human and natural, using clear language and fluid interactions to reduce friction and make the shopping process feel comfortable and approachable.
              </p>
              <p style={{ margin: '0', lineHeight: 1.6 }}>
                These principles ensured the design remained consistent, purposeful, and aligned with user expectations at every stage of the journey.
              </p>
            </div>
          </div>

          {/* Intuitive */}
          <div style={highlightItemStyles}>
            <div style={lineStyles}></div>
            <p style={highlightTextStyles}>
              <span style={{ color: '#370161', lineHeight: 1.6 }}>Intuitive</span>
              <br />
              Interactions are designed to be immediately understandable, allowing users to navigate, browse, and complete actions without hesitation or unnecessary effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DollarCityDesignPrinciples
