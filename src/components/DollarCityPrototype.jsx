import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const DollarCityPrototype = () => {
  const { isMobile } = useResponsive()

  const imgRectangle = "http://localhost:3845/assets/c86fa070260ad1969430f5b9c45dd5a99de7269f.png"
  const imgRectangle1 = "http://localhost:3845/assets/d304507ffb1717319cfbaa3caad78f9189d979da.png"
  const imgRectangle2 = "http://localhost:3845/assets/0603bd22b030e1cf110f1908c7b58dc62c94c6bb.png"

  const sectionStyles = {
    backgroundColor: '#fffefa',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '64px',
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
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const prototypeContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '70px',
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

  const imageMockupsStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '24px' : '64px',
    height: isMobile ? 'auto' : '757px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const imageContainer1Styles = {
    width: isMobile ? '180px' : '281px',
    height: isMobile ? '360px' : '564px',
    position: 'relative',
    flexShrink: 0,
  }

  const imageContainer2Styles = {
    width: isMobile ? '220px' : '368px',
    height: isMobile ? '446px' : '745px',
    position: 'relative',
    flexShrink: 0,
  }

  const imageContainer3Styles = {
    width: isMobile ? '170px' : '269px',
    height: isMobile ? '328px' : '518px',
    position: 'relative',
    flexShrink: 0,
  }

  const imageWrapperStyles = {
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
  }

  return (
    <div style={sectionStyles}>
      <div style={containerStyles}>
        <div style={prototypeContentStyles}>
          <div style={titleContainerStyles}>
            <p style={titleStyles}>Prototype</p>
          </div>
          <p style={textStyles}>
            With the structure, visual direction, and design principles in place, I transformed the wireframes into a high-fidelity, interactive prototype. The prototype focuses on validating the end-to-end shopping flow, allowing users to navigate through key actions such as browsing categories, viewing product details, adding items to the cart, and completing the checkout process. Interactions and transitions were designed to feel natural and predictable, reinforcing clarity and user confidence
          </p>
        </div>
        <div style={imageMockupsStyles}>
          <div style={imageContainer1Styles}>
            <div style={imageWrapperStyles}>
              <img 
                alt="Dollar City app prototype 1" 
                src={imgRectangle}
                style={{
                  position: 'absolute',
                  height: '152.21%',
                  left: '-153.18%',
                  maxWidth: 'none',
                  top: '-20.78%',
                  width: '407.08%',
                }}
              />
            </div>
          </div>
          <div style={imageContainer2Styles}>
            <div style={imageWrapperStyles}>
              <img 
                alt="Dollar City app prototype 2" 
                src={imgRectangle1}
                style={{
                  position: 'absolute',
                  height: '111.13%',
                  left: '-100%',
                  maxWidth: 'none',
                  top: 0,
                  width: '300%',
                }}
              />
            </div>
          </div>
          <div style={imageContainer3Styles}>
            <div style={imageWrapperStyles}>
              <img 
                alt="Dollar City app prototype 3" 
                src={imgRectangle2}
                style={{
                  position: 'absolute',
                  height: '157.26%',
                  left: '-153.23%',
                  maxWidth: 'none',
                  top: '-23.4%',
                  width: '403.8%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DollarCityPrototype
