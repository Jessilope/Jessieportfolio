import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const LexiOverview = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: colors.backgrounds.main,
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xxl, // 48px
    alignItems: 'flex-start',
    width: '100%',
    flex: 1,
  }

  const headerStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 400,
    lineHeight: isMobile ? '28px' : '32px',
    letterSpacing: '0',
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    margin: 0,
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

  const paragraphContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  }

  const listStyles = {
    margin: '0',
    paddingLeft: '24px',
    listStyleType: 'disc',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        <AnimatedOnScroll animation="fadeIn" duration={700}>
          <p style={headerStyles}>
            A Supportive AI-Driven Language Learning Experience
          </p>
        </AnimatedOnScroll>
        
        <AnimatedOnScroll animation="slideUp" delay={100} duration={600}>
          <div style={paragraphContainerStyles}>
            <p style={bodyTextStyles}>
              The app LEXI provides a structured and supportive environment where users can practice without fear of judgment, making language learning feel approachable rather than intimidating. Through the integration of Lexi AI, users receive personalized guidance, adaptive conversations, and meaningful practice tailored to their level and interests. As a result, learners feel more secure, more motivated, and more willing to communicate — transforming language practice into a consistent, natural habit instead of a stressful experience.
            </p>
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll animation="slideUp" delay={200} duration={600}>
          <div style={paragraphContainerStyles}>
            <div style={bodyTextStyles}>
              <p style={{ margin: '0 0 0 0', lineHeight: 1.6 }}>The final outcome is a mobile app flow composed of six core screens:</p>
              <ul style={listStyles}>
                <li style={{ marginBottom: '0' }}>
                  <span style={{ lineHeight: 1.6 }}>Home</span>
                </li>
                <li style={{ marginBottom: '0' }}>
                  <span style={{ lineHeight: 1.6 }}>Messages by LEXI</span>
                </li>
                <li style={{ marginBottom: '0' }}>
                  <span style={{ lineHeight: 1.6 }}>Vocabulary</span>
                </li>
                <li style={{ marginBottom: '0' }}>
                  <span style={{ lineHeight: 1.6 }}>Profile track</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  )
}

export default LexiOverview
