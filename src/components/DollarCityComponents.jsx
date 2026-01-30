import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Image path
const componentsImage = '/assets/images/dollarcity/components.png'

const DollarCityComponents = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
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
    alignItems: isMobile ? 'center' : 'flex-end',
    width: '100%',
    flexShrink: 0,
  }

  const textStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.8px',
    color: '#212121',
    width: '100%',
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const imageContainerStyles = {
    aspectRatio: '1606/1252',
    width: '100%',
    position: 'relative',
    flexShrink: 0,
  }

  const imageStyles = {
    position: isMobile ? 'relative' : 'absolute',
    inset: isMobile ? undefined : 0,
    width: '100%',
    height: isMobile ? 'auto' : '100%',
    objectFit: 'cover',
  }

  return (
    <div style={sectionStyles}>
      <div style={containerStyles}>
        <p style={textStyles}>
          When defining the visual style, I kept in mind that Dollarcity app had to be modern, organic and intuitive. To create an interface that stays in the background and lets the products take the lead. Dollar City shoppers focus on value and clarity, so the design needed to feel simple, familiar, and unobtrusive.
        </p>
        <div style={imageContainerStyles}>
          <img 
            src={componentsImage} 
            alt="Dollar City app components" 
            style={imageStyles}
          />
        </div>
      </div>
    </div>
  )
}

export default DollarCityComponents
