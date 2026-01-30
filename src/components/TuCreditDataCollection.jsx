import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const TuCreditDataCollection = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: colors.backgrounds.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    width: '100%',
    flexShrink: 0,
  }

  const contentContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const innerContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '48px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const titleContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 700,
    letterSpacing: '1.2px',
    color: '#370161',
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
  }

  const titleStyles = {
    lineHeight: '1.3',
    margin: 0,
  }

  const bodyContainerStyles = {
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
      <div style={contentContainerStyles}>
        <div style={innerContentStyles}>
          {/* Title */}
          <div style={titleContainerStyles}>
            <p style={titleStyles}>Data collection</p>
          </div>

          {/* Body Content */}
          <div style={bodyContainerStyles}>
            <p style={paragraphStyles}>Data Collection & Benchmark Findings</p>
            <p style={paragraphStyles}>
              As part of the research phase, I analyzed mortgage loan flows from multiple banks to identify common patterns and expectations across digital credit experiences. The benchmark revealed a high level of consistency in how banks structure and communicate mortgage information.
            </p>
            <p style={paragraphStyles}>&nbsp;</p>
            
            <p style={paragraphStyles}>Most platforms include:</p>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  General information about mortgage loans and bank benefits
                </span>
              </li>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  Clear CTAs such as Apply for a loan, Loan simulator, and Credit information
                </span>
              </li>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  FAQ sections to help users understand complex financial topics
                </span>
              </li>
            </ul>
            <p style={paragraphStyles}>&nbsp;</p>

            <p style={paragraphStyles}>
              In terms of application structure, the process is typically divided into progressive steps:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  Step 1: Personal information (name, email, phone number)
                </span>
              </li>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  Step 2: Residency and employment details (location, occupation, time in current job)
                </span>
              </li>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  Step 3: Financial information (monthly income, additional income, total assets)
                </span>
              </li>
            </ul>
            <p style={paragraphStyles}>&nbsp;</p>

            <p style={paragraphStyles}>
              Nearly all banks also provide a loan simulator as a key decision-support tool. Simulation options usually allow users to calculate affordability either by property value or monthly income, considering factors such as:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  Occupation and income
                </span>
              </li>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  Number of applicants
                </span>
              </li>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  Property type (new or used)
                </span>
              </li>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  Project status (selected or not)
                </span>
              </li>
              <li style={listItemStyles}>
                <span style={listItemSpanStyles}>
                  Credit type (VIS, VIP, or non-VIS)
                </span>
              </li>
            </ul>
            
            <p style={{...paragraphStyles, lineHeight: '1.6'}}>
              These findings highlighted the importance of structured guidance, financial education, and simulation tools in helping users understand their options and feel prepared to move forward with a mortgage application.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TuCreditDataCollection
