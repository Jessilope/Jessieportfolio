import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Steps image
const stepsImage = '/assets/images/tucredit/steps.png'

const TuCreditEmpathize = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: colors.backgrounds.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '64px',
    width: '100%',
    flexShrink: 0,
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '48px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const titleStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 400,
    lineHeight: isMobile ? '28px' : '32px',
    letterSpacing: '0',
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    minWidth: '100%',
    margin: 0,
    flexShrink: 0,
  }

  const bodyContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '48px',
    alignItems: 'flex-start',
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    letterSpacing: '0.8px',
    color: colors.semantic.textPrimary,
    width: '100%',
    flexShrink: 0,
  }

  const paragraphContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    lineHeight: '1.6',
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const paragraphStyles = {
    margin: 0,
  }

  const listContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const listParagraphStyles = {
    lineHeight: '1.6',
    margin: 0,
    marginBottom: 0,
  }

  const listStyles = {
    listStyle: 'disc',
    marginLeft: '24px',
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
  }

  const listItemStyles = {
    marginLeft: '24px',
    marginBottom: 0,
  }

  const listItemSpanStyles = {
    lineHeight: '1.6',
  }

  const imageContainerStyles = {
    width: isMobile ? '100%' : '912px',
    height: isMobile ? 'auto' : '428px',
    aspectRatio: isMobile ? '912 / 428' : undefined,
    position: 'relative',
    flexShrink: 0,
  }

  const imageStyles = {
    position: isMobile ? 'relative' : 'absolute',
    inset: isMobile ? undefined : 0,
    width: '100%',
    height: isMobile ? 'auto' : '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
  }

  return (
    <div style={sectionStyles}>
      <div style={contentStyles}>
        {/* Title */}
        <div style={titleStyles}>
          <p style={{...paragraphStyles, lineHeight: '32px'}}>Empathize</p>
        </div>

        {/* Body */}
        <div style={bodyContainerStyles}>
          {/* First paragraph */}
          <div style={paragraphContainerStyles}>
            <p style={{...paragraphStyles, marginBottom: 0}}>
              To better understand users interested in mortgage loans, I focused on how people perceive and approach long-term financial decisions. For many users, applying for a mortgage is one of the most significant commitments they will ever make, often accompanied by fear, confusion, and a lack of financial confidence.
            </p>
            <p style={paragraphStyles}>
              Research showed that potential borrowers want to feel informed and in control, but they frequently struggle with complex terminology, unclear requirements, and overwhelming information. Many users delay or abandon the process because they feel unprepared or unsure about their eligibility, even before starting an application.
            </p>
          </div>

          {/* Second paragraph */}
          <div style={paragraphContainerStyles}>
            <p style={{...paragraphStyles, marginBottom: 0}}>
              As part of the research phase, I conducted a benchmark of existing mortgage loan experiences from banks and financial institutions. By reviewing digital flows, educational content, and credit information, I identified common patterns in how banks communicate loan requirements, credit types, and financial concepts.
            </p>
            <p style={paragraphStyles}>
              The benchmark revealed that many platforms rely on complex language, dense information, and fragmented flows, which can increase confusion and discourage users early in the process. These insights highlighted an opportunity to create a more educational, transparent, and user-centered mortgage experience.
            </p>
          </div>

          {/* Third paragraph with list */}
          <div style={listContainerStyles}>
            <p style={listParagraphStyles}>
              By placing myself in the user's position, I identified an emotional goal for the experience:<br />
              to reduce uncertainty and help users feel confident enough to move forward.
            </p>
            <p style={listParagraphStyles}>
              This empathy-driven approach highlighted the importance of:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  Clear and accessible financial education
                </span>
              </li>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  Transparent explanations of credit types and requirements
                </span>
              </li>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  A guided, step-by-step experience
                </span>
              </li>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  Language that feels supportive rather than intimidating
                </span>
              </li>
            </ul>
            <p style={{...listParagraphStyles, lineHeight: '1.6'}}>
              These insights shaped the foundation for designing a mortgage experience that prioritizes clarity, trust, and informed decision-making from the very first interaction.
            </p>
          </div>
        </div>

        {/* Image */}
        <div style={imageContainerStyles}>
          <img 
            src={stepsImage}
            alt="Steps diagram"
            style={imageStyles}
          />
        </div>
      </div>
    </div>
  )
}

export default TuCreditEmpathize
