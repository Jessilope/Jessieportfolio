import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const LexiEmphatize = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: colors.backgrounds.main,
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '64px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : spacing.xxl, // 32px mobile, 48px desktop
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
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

  const bodyContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '54px',
    alignItems: 'flex-start',
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
  }

  const paragraphContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  }

  const listStyles = {
    margin: '0',
    paddingLeft: isMobile ? '24px' : '48px',
    listStyleType: 'disc',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
          <p style={headerStyles}>Empathize</p>
        </div>

        <div style={bodyContainerStyles}>
          {/* Paragraph 1 */}
          <div style={paragraphContainerStyles}>
            <p style={bodyTextStyles}>
              I focused on understanding how language beginners feel when practicing a new language, especially in digital environments that rely on social interaction. Research and user behavior show that beginners often experience high anxiety and low perceived competence, even when they are motivated and interested in learning.
            </p>
          </div>

          {/* Paragraph 2 with bullet list */}
          <div style={paragraphContainerStyles}>
            <p style={{ ...bodyTextStyles, marginBottom: '0' }}>
              Many learners want to practice, but they:
            </p>
            <ul style={listStyles}>
              <li style={{ marginBottom: '0' }}>
                <span style={{ lineHeight: 1.6 }}>Fear making mistakes in front of others</span>
              </li>
              <li style={{ marginBottom: '0' }}>
                <span style={{ lineHeight: 1.6 }}>Feel insecure about their language level</span>
              </li>
              <li style={{ marginBottom: '0' }}>
                <span style={{ lineHeight: 1.6 }}>Worry that their effort will not be taken seriously</span>
              </li>
              <li style={{ marginBottom: '0' }}>
                <span style={{ lineHeight: 1.6 }}>Avoid interaction when the experience feels judgmental or unstructured</span>
              </li>
            </ul>
          </div>

          {/* Paragraph 3 */}
          <div style={paragraphContainerStyles}>
            <p style={bodyTextStyles}>
              Even when learners enjoy the exchange, anxiety and pressure can limit participation and slow progress. However, studies also show that supportive interaction, real-time feedback, and a sense of accountability help reduce fear and increase motivation.
            </p>
          </div>

          {/* Paragraph 4 with multiple parts */}
          <div style={paragraphContainerStyles}>
            <p style={{ ...bodyTextStyles, marginBottom: '0' }}>
              Putting myself in the learner's position, I identified an emotional goal for Lexi:<br />
              to make users feel safe, supported, and confident enough to keep practicing.
            </p>
            <p style={{ ...bodyTextStyles, marginTop: '1em', marginBottom: '0' }}>&nbsp;</p>
            <p style={{ ...bodyTextStyles, marginBottom: '0' }}>
              This empathy-driven approach led me to prioritize:
            </p>
            <ul style={listStyles}>
              <li style={{ marginBottom: '0' }}>
                <span style={{ lineHeight: 1.6 }}>Guided interactions instead of open, unstructured conversations</span>
              </li>
              <li style={{ marginBottom: '0' }}>
                <span style={{ lineHeight: 1.6 }}>Low-pressure practice that normalizes mistakes</span>
              </li>
              <li style={{ marginBottom: '0' }}>
                <span style={{ lineHeight: 1.6 }}>Clear progress tracking to reinforce a sense of achievement</span>
              </li>
              <li style={{ marginBottom: '0' }}>
                <span style={{ lineHeight: 1.6 }}>A calm, friendly tone that reduces tension and builds trust</span>
              </li>
            </ul>
            <p style={{ ...bodyTextStyles, marginTop: '1em', marginBottom: '0' }}>&nbsp;</p>
            <p style={bodyTextStyles}>
              Empathy shaped Lexi into an experience that values emotional safety as much as language progress, helping beginners feel comfortable practicing consistently and confidently.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LexiEmphatize
