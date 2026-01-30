import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const DollarCityReflection = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefa',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
  }

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : spacing.xxl, // 48px
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const titleContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 400,
    lineHeight: '0',
    letterSpacing: '0',
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const titleStyles = {
    lineHeight: isMobile ? '28px' : '32px',
    margin: 0,
  }

  const textContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.8px',
    color: '#212121',
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const paragraph1Styles = {
    marginBottom: 0,
  }

  const paragraph2Styles = {
    margin: 0,
  }

  return (
    <div style={sectionStyles}>
      <div style={containerStyles}>
        <div style={titleContainerStyles}>
          <p style={titleStyles}>Reflection</p>
        </div>
        <div style={textContainerStyles}>
          <p style={paragraph1Styles}>
            This Dollar City project was carried out for educational purposes. I'm happy with the progress I made and hope you enjoy reviewing it. Every stage was a learning experience where I challenged myself to grow and improve.
          </p>
          <p style={paragraph2Styles}>
            Through this personal project, I gained deeper exposure to the full process behind designing an app. I learned that design is not just about putting elements together, but about analyzing target users—their needs, behaviors, and expectations. I also realized that there are multiple types of users, each expecting different things from a product.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DollarCityReflection
