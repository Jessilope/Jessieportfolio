import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Image path
const informationArchitectureImage = '/assets/images/lexi/information-architecture.png'

const LexiIdeate = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '64px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '10px',
    display: 'flex',
    alignItems: 'center',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'center',
    width: '100%',
    flex: 1,
  }

  const headerStyles = {
    fontFamily: isMobile ? `'Kantumruy', 'Noto Sans', sans-serif` : `'Kanit', sans-serif`,
    fontSize: isMobile ? '20px' : '32px',
    fontWeight: isMobile ? 700 : 400,
    lineHeight: isMobile ? 1.3 : '32px',
    letterSpacing: isMobile ? '1px' : '0',
    color: '#370161',
    textAlign: 'center',
    margin: 0,
    width: '100%',
    fontVariationSettings: isMobile ? "'CTGR' 0, 'wdth' 100, 'wght' 700" : undefined,
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

  const listItemStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    marginLeft: isMobile ? '16px' : '24px',
    marginBottom: 0,
  }

  const imageContainerStyles = {
    position: 'relative',
    width: '100%',
    aspectRatio: '1444 / 1152',
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
        {/* Content Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '32px' : '87px', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <p style={headerStyles}>Ideate</p>
          </div>
          
          <div style={{ width: '100%' }}>
            <p style={{ ...bodyTextStyles, marginBottom: '1em' }}>
              With a clear problem statement and "How Might We" questions defined, I explored multiple solution ideas focused on helping users practice consistently while feeling safe and supported. The ideation phase centered on transforming user needs into actionable features, using AI as a guide rather than a replacement for human learning.
            </p>
            <p style={{ ...bodyTextStyles, marginBottom: '1em' }}>
              To ensure ideas stayed aligned with the user's goals, I focused on solutions that:
            </p>
            <ul style={{ margin: '0 0 1em 0', padding: 0, listStyleType: 'disc', paddingLeft: '24px' }}>
              <li style={listItemStyles}>Simulate natural conversations without social pressure</li>
              <li style={listItemStyles}>Provide real-time, supportive feedback</li>
              <li style={listItemStyles}>Adapt to the user's level, interests, and daily routine</li>
              <li style={listItemStyles}>Reinforce motivation through progress and consistency</li>
            </ul>
            <p style={bodyTextStyles}>
              Through brainstorming and feature exploration, I identified key opportunities for Lexi, including AI-guided chats based on skill level, personalized conversation topics, real-time correction, pronunciation support, and progress tracking. These ideas formed the foundation for the app's core experience and informed the features selected for the final design.
            </p>
          </div>
        </div>

        {/* Information Architecture Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '24px' : '33px', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <p style={{ ...headerStyles, textAlign: 'left' }}>Information Architecture</p>
          </div>
          <div style={imageContainerStyles}>
            <img 
              src={informationArchitectureImage}
              alt="Information Architecture"
              style={imageStyles}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LexiIdeate
