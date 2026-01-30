import { colors, spacing } from '../tokens'
import Navbar from './Navbar'
import useResponsive from '../hooks/useResponsive'

const TuCreditHero = () => {
  const { isMobile } = useResponsive()
  
  const imgSidbarSurvey1 = "http://localhost:3845/assets/4d0872b3332ed744abe3e5a3a4a603e1d2b7112a.png"
  const imgHome41 = "http://localhost:3845/assets/859c2ce1b2088201ba002209fa97f24502d15a18.png"
  const imgHome32 = "http://localhost:3845/assets/c8bc1d983ee23af307abe38014d0b8cc2c41cb68.png"
  const imgRequisitos1 = "http://localhost:3845/assets/24d03f314e0d5374a575ee1f1adbf01a817d4f3e.png"

  const heroStyles = {
    backgroundColor: 'white',
    width: '100%',
    height: isMobile ? '500px' : '892px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0,
  }

  const titleContainerStyles = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '48px' : '212px',
    alignItems: 'center',
    justifyContent: 'center',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90%' : '758px',
    zIndex: 5,
  }

  const logoContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }

  const logoTextStyles = {
    background: 'linear-gradient(to right, #a464ff 0%, #5405c7 49%, #34007e 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontFamily: `'Roboto', sans-serif`,
    fontSize: isMobile ? '44px' : '64px',
    fontWeight: 500,
    lineHeight: '1.7',
    letterSpacing: '0',
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'wdth' 100",
  }

  const subtitleContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const subtitleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '18px' : '24px',
    fontWeight: 700,
    lineHeight: '1.3',
    letterSpacing: '1.2px',
    color: '#580092',
    textAlign: 'center',
    width: '100%',
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
  }

  // Image container styles for rotated mockups
  const imageContainer1Styles = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 'calc(58.33% + 65.33px)',
    top: '469px',
    width: '479.629px',
    height: '516.441px',
  }

  const imageContainer2Styles = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: '-31px',
    top: '79px',
    width: '544.546px',
    height: '502.446px',
  }

  const imageContainer3Styles = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: '-46px',
    top: '491px',
    width: '478.328px',
    height: '493.636px',
  }

  const imageContainer4Styles = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 'calc(66.67% + 16.67px)',
    top: '79px',
    width: '457.665px',
    height: '495.709px',
  }

  const imageWrapper1Styles = {
    transform: 'rotate(-32.24deg)',
  }

  const imageWrapper2Styles = {
    transform: 'rotate(-34.48deg)',
  }

  const imageWrapper3Styles = {
    transform: 'rotate(-34.94deg)',
  }

  const imageWrapper4Styles = {
    transform: 'rotate(-32.92deg)',
  }

  return (
    <div style={heroStyles}>
      {/* Navbar */}
      <Navbar />

      {/* Title Container */}
      <div style={titleContainerStyles}>
        <div style={logoContainerStyles}>
          <p style={logoTextStyles}>Tu credit</p>
        </div>
        <div style={subtitleContainerStyles}>
          <p style={subtitleStyles}>Based in Bogota, Colombia</p>
        </div>
      </div>

      {/* Rotated Images - Hidden on mobile */}
      {!isMobile && (
        <>
      {/* Image 1 - Sidbar Survey (bottom right) */}
      <div style={imageContainer1Styles}>
        <div style={imageWrapper1Styles}>
          <div style={{
            width: '302.161px',
            height: '420.004px',
            position: 'relative',
            boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.1)',
          }}>
            <img 
              src={imgSidbarSurvey1}
              alt="Tu Credit app screen"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>

      {/* Image 2 - Home4 (top left) */}
      <div style={imageContainer2Styles}>
        <div style={imageWrapper2Styles}>
          <div style={{
            width: '458px',
            height: '295px',
            position: 'relative',
            borderRadius: '6px',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              pointerEvents: 'none',
              borderRadius: '6px',
            }}>
              <img 
                src={imgHome41}
                alt="Tu Credit app screen"
                style={{
                  position: 'absolute',
                  height: '654.96%',
                  left: '-0.72%',
                  top: 0,
                  width: '101.59%',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image 3 - Home3 (bottom left) */}
      <div style={imageContainer3Styles}>
        <div style={imageWrapper3Styles}>
          <div style={{
            width: '318.018px',
            height: '379.993px',
            position: 'relative',
            borderRadius: '15px',
            boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.1)',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              pointerEvents: 'none',
              borderRadius: '15px',
            }}>
              <img 
                src={imgHome32}
                alt="Tu Credit app screen"
                style={{
                  position: 'absolute',
                  height: '354.73%',
                  left: '-0.57%',
                  top: '-115.77%',
                  width: '100.93%',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image 4 - Requisitos (top right) */}
      <div style={imageContainer4Styles}>
        <div style={imageWrapper4Styles}>
          <div style={{
            width: '280.452px',
            height: '408.959px',
            position: 'relative',
            borderRadius: '15px',
            boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.1)',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              pointerEvents: 'none',
              borderRadius: '15px',
            }}>
              <img 
                src={imgRequisitos1}
                alt="Tu Credit app screen"
                style={{
                  position: 'absolute',
                  height: '139.67%',
                  left: '-0.32%',
                  top: '0.5%',
                  width: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
        </>
      )}
    </div>
  )
}

export default TuCreditHero
