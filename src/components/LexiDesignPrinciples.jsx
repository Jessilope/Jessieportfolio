import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const LexiDesignPrinciples = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '64px',
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
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'center',
    width: '100%',
  }

  const headerContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '12px' : '16px',
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

  const highlightsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : spacing.xxl, // 48px
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: isMobile ? '100%' : '862px',
  }

  const highlightItemStyles = {
    display: 'flex',
    gap: isMobile ? '12px' : '16px',
    alignItems: isMobile ? 'flex-start' : 'center',
    width: '100%',
  }

  const highlightTextStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    width: isMobile ? '100%' : '744px',
    flexShrink: isMobile ? 1 : 0,
  }

  const highlightLabelStyles = {
    color: '#580092',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        {/* Header Section */}
        <div style={headerContainerStyles}>
          <p style={subheaderStyles}>Design Principles</p>
          <p style={bodyTextStyles}>
            After defining the problem and user needs, I moved into establishing the core design principles that would guide the product from the very beginning. These principles served as a foundation for shaping the structure, interactions, and visual direction of the app before moving into wireframes.
          </p>
        </div>

        {/* Highlights Section */}
        <div style={highlightsContainerStyles}>
          {/* Modern */}
          <div style={highlightItemStyles}>
            <div style={{ 
              width: '3px',
              minHeight: isMobile ? '60px' : '74px',
              alignSelf: 'stretch',
              backgroundColor: '#580092',
              flexShrink: 0,
            }} />
            <p style={highlightTextStyles}>
              <span style={highlightLabelStyles}>Modern</span>
              <br />
              The interface adopts contemporary design patterns and a clean visual language that feels current and familiar, aligning with how users interact with AI-powered learning products today.
            </p>
          </div>

          {/* Human & Supportive */}
          <div style={highlightItemStyles}>
            <div style={{ 
              width: '3px',
              minHeight: isMobile ? '60px' : '67px',
              alignSelf: 'stretch',
              backgroundColor: '#580092',
              flexShrink: 0,
            }} />
            <p style={highlightTextStyles}>
              <span style={highlightLabelStyles}>Human & Supportive</span>
              <br />
              The experience feels natural and encouraging, using friendly language, guided interactions, and AI assistance to reduce anxiety and help users practice with confidence.
            </p>
          </div>

          {/* Guided & Clear */}
          <div style={highlightItemStyles}>
            <div style={{ 
              width: '3px',
              minHeight: isMobile ? '60px' : '45px',
              alignSelf: 'stretch',
              backgroundColor: '#580092',
              flexShrink: 0,
            }} />
            <p style={highlightTextStyles}>
              <span style={highlightLabelStyles}>Guided & Clear</span>
              <br />
              Interactions are designed to gently guide users through each step, making it easy to start conversations, follow learning paths, and understand what to do next without confusion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LexiDesignPrinciples
