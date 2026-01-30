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
    width: isMobile ? '100%' : '1126px',
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

        {/* First paragraph */}
        <div style={paragraphContainerStyles}>
          <p style={paragraphStyles}>
            This project explores the design of a digital experience for mortgage loans, focused on helping users understand, evaluate, and start a home financing process with confidence. Mortgage products are complex, high-commitment decisions, often associated with confusion, mistrust, and information overload. The goal of this project was to simplify that complexity through clarity, transparency, and user-centered design. The experience was designed to guide users step by step, helping them understand their options, assess affordability, and feel supported throughout the process—without pressure or unnecessary friction.
          </p>
        </div>

        {/* Second paragraph */}
        <div style={{...paragraphContainerStyles, lineHeight: '1.6'}}>
          <p style={paragraphStyles}>
            The final outcome is a mortgage loan experience that prioritizes clarity, trust, and user confidence. By breaking down complex financial information into manageable steps, the design helps users understand their options, assess affordability, and move forward in the process with greater certainty. The solution transforms a traditionally intimidating process into a guided and transparent journey, supporting informed decision-making and building trust from the first interaction.
          </p>
          <p style={paragraphStyles}>&nbsp;</p>
        </div>

        {/* Screens Designed section */}
        <div style={listContainerStyles}>
          <p style={listTitleStyles}>Screens Designed</p>
          <p style={listTitleStyles}>
            The mortgage loan experience was structured across the following key screens:
          </p>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Financial Education – Provides clear and accessible information to help users understand how mortgage loans work, including key concepts and terminology.
              </span>
            </li>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Credit Requirements – Outlines the necessary documents, conditions, and eligibility criteria needed to apply for a mortgage loan.
              </span>
            </li>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Type of Credit Information – Explains the different mortgage options available, helping users compare and understand which credit type fits their needs.
              </span>
            </li>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Educational Information – Reinforces financial literacy through supportive content that builds confidence and prepares users to make informed decisions.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TuCreditOverview
