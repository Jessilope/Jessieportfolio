import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const DollarCityMockup = () => {
  const { isMobile } = useResponsive()

  const imgImage12 = "http://localhost:3845/assets/ccd0460a8496271313cc98dd813129c57e286cdc.png"

  const sectionStyles = {
    backgroundColor: '#fffefa',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '96px',
    paddingTop: isMobile ? '64px' : '112px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  }

  const imageContainerStyles = {
    maxWidth: isMobile ? '100%' : '1196px',
    width: '100%',
    position: 'relative',
  }

  const imageStyles = {
    width: '100%',
    height: 'auto',
    display: 'block',
  }

  return (
    <div style={sectionStyles}>
      <div style={imageContainerStyles}>
        <img 
          src={imgImage12} 
          alt="Dollar City app mockup" 
          style={imageStyles}
        />
      </div>
    </div>
  )
}

export default DollarCityMockup
