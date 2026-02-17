import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const TuCreditOverview = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: colors.backgrounds.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    width: '100%',
    flexShrink: 0,
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '48px',
    alignItems: 'flex-start',
    width: '100%',
    flexShrink: 0,
  }

  const titleStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 400,
    lineHeight: isMobile ? '28px' : '32px',
    letterSpacing: '0',
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    margin: 0,
    flexShrink: 0,
  }

  const paragraphContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    letterSpacing: '0.8px',
    color: colors.semantic.textPrimary,
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const paragraphStyles = {
    lineHeight: '1.6',
    margin: 0,
  }

  const listContainerStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    letterSpacing: '0.8px',
    color: colors.semantic.textPrimary,
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const listTitleStyles = {
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

  return (
    <div style={sectionStyles}>
      <div style={contentStyles}>
        {/* Title */}
        <p style={titleStyles}>
          Mortgage Loans — Designing a Clear and Trust-Driven Credit Experience
        </p>

        {/* Combined paragraph */}
        <div style={paragraphContainerStyles}>
          <p style={paragraphStyles}>
            This project focuses on designing a digital mortgage experience that simplifies a complex and high-commitment financial decision. Mortgage loans often generate confusion and mistrust due to technical language and information overload. The goal was to reduce that friction by prioritizing clarity, transparency, and structured guidance. The experience breaks down complex information into clear, manageable steps helping users understand their options, assess affordability, and move forward with confidence. The final solution transforms a traditionally intimidating process into a guided, transparent journey that supports informed decision-making and builds trust from the first interaction.
          </p>
        </div>

        {/* Key Features section */}
        <div style={listContainerStyles}>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Financial Education: Clear explanations of mortgage fundamentals and terminology.
              </span>
            </li>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Credit Requirements: Eligibility criteria and required documentation.
              </span>
            </li>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Mortgage Options: Comparison of available credit types.
              </span>
            </li>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Supportive Education: Content designed to reinforce financial confidence.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TuCreditOverview
