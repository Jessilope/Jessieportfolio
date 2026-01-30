import { colors } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const TuCreditReflection = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefa',
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

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '48px',
    alignItems: 'center',
    lineHeight: '0',
    width: '100%',
    flexShrink: 0,
  }

  const titleContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontStyle: 'normal',
    fontWeight: 400,
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const titleStyles = {
    lineHeight: isMobile ? '28px' : '32px',
    margin: 0,
  }

  const descriptionContainerStyles = {
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

  return (
    <div style={sectionStyles}>
      <div style={containerStyles}>
        <div style={titleContainerStyles}>
          <p style={titleStyles}>Reflection</p>
        </div>
        <div style={descriptionContainerStyles}>
          <p style={paragraphStyles}>
            This project allowed me to explore the complexity behind designing financial products and reinforced the importance of clarity and trust in user experience. Working on TuCredit helped me understand that users don't just need functional tools, but guidance, education, and reassurance when making high-impact decisions
          </p>
        </div>
      </div>
    </div>
  )
}

export default TuCreditReflection
