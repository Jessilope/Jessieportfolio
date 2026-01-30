import useResponsive from '../hooks/useResponsive'

const TripFinderTypography = () => {
  const { isMobile } = useResponsive()

  const imgImage31 = "http://localhost:3845/assets/576d29eb7a620d439a33cae7d1dd2c54fa451b58.png"

  const sectionStyles = {
    backgroundColor: '#fffefb',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    alignItems: 'center',
    paddingTop: isMobile ? '48px' : '128px',
    paddingBottom: isMobile ? '48px' : '48px',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '96px',
    width: '100%',
    flexShrink: 0,
    boxSizing: 'border-box',
  }

  const titleContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kanit', sans-serif`,
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '0',
    textAlign: 'center',
    color: '#370161',
    height: '32px',
    width: isMobile ? '100%' : '1121px',
    flexShrink: 0,
  }

  const titleStyles = {
    lineHeight: '32px',
    margin: 0,
  }

  // Desktop styles
  const fontsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const imageContainerStyles = {
    width: '612px',
    height: '815px',
    position: 'relative',
    flexShrink: 0,
  }

  const imageStyles = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
  }

  return (
    <div style={sectionStyles}>
      {/* Title */}
      <div style={titleContainerStyles}>
        <p style={titleStyles}>Visual</p>
      </div>

      {/* Typography Image */}
      {isMobile ? (
        /* Mobile: Simple responsive image */
        <img 
          src={imgImage31}
          alt="Typography system"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            pointerEvents: 'none',
          }}
        />
      ) : (
        /* Desktop: Original structure */
        <div style={fontsContainerStyles}>
          <div style={imageContainerStyles}>
            <img 
              src={imgImage31}
              alt="Typography system"
              style={imageStyles}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default TripFinderTypography
