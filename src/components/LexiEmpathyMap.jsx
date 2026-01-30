import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const LexiEmpathyMap = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    alignItems: 'center',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'flex-start',
    width: '100%',
    flex: 1,
  }

  const titleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '1.2px',
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
    letterSpacing: '0',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    width: '100%',
  }

  const imageContainerStyles = {
    position: 'relative',
    width: '100%',
    aspectRatio: '2378 / 1370',
  }

  const imageStyles = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
          <p style={titleStyles}>Empathy map</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
          <p style={bodyTextStyles}>
            After analyzing the collected data, I synthesized the key patterns and behaviors into an empathy map. This allowed me to translate research findings into a human perspective, capturing what users say, think, feel, and do when learning a new language. The empathy map helped clarify emotional pain points and learning motivations, creating a solid foundation for the next design decisions.
          </p>
        </div>

        <div style={imageContainerStyles}>
          <img 
            src="http://localhost:3845/assets/9064fc7585dfa2faae74825c6a61d086a44b6036.png"
            alt="Empathy map showing user insights"
            style={imageStyles}
          />
        </div>
      </div>
    </section>
  )
}

export default LexiEmpathyMap
