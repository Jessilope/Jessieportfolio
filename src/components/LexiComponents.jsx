import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Image path
const componentsImage = '/assets/images/lexi/components.png'

const LexiComponents = () => {
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
    gap: isMobile ? '24px' : spacing.xxl, // 48px
    alignItems: isMobile ? 'center' : 'flex-end',
    width: '100%',
  }

  const textStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    width: '100%',
    flexShrink: 0,
  }

  const imageContainerStyles = {
    width: '100%',
    aspectRatio: '1440 / 1250',
    position: 'relative',
    flexShrink: 0,
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
        {/* Intro Text */}
        <p style={textStyles}>
          When defining the visual style, I focused on making Lexi feel modern, supportive, and clear. The interface was designed to stay in the background, allowing learning and conversation to take center stage. Since language beginners value clarity and reassurance, the design needed to feel simple, familiar, and calm, reducing distractions and helping users focus on practice.
        </p>

        {/* Components Image */}
        <div style={imageContainerStyles}>
          <img 
            src={componentsImage}
            alt="Lexi app components"
            style={imageStyles}
          />
        </div>
      </div>
    </section>
  )
}

export default LexiComponents
