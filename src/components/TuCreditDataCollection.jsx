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
          </div>
        </div>
      </div>
    </div>
  )
}

export default TuCreditDataCollection
