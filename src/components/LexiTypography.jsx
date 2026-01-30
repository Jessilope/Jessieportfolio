import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const LexiTypography = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '96px',
    paddingTop: isMobile ? '32px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const mainContainerStyles = {
    display: 'flex',
    gap: spacing.xxl, // 48px
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }

  // Mobile image styles for typography
  const mobileImageContainerStyles = {
    width: '100%',
    aspectRatio: '1246 / 940',
    position: 'relative',
  }

  const mobileImageStyles = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
  }

  const fontsContainerStyles = {
    display: 'flex',
    gap: '51px',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }

  const sizesColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    alignItems: 'flex-start',
    width: '204px',
    flexShrink: 0,
  }

  const sizeLabelStyles = {
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '28px',
    letterSpacing: '0.8px',
    color: '#8c8c8c',
    margin: 0,
    width: '100%',
    height: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }

  const contentColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '47px',
    alignItems: 'flex-start',
    width: '320px',
    flexShrink: 0,
    color: '#363636',
  }

  const spacingContainerStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '148px',
    flexShrink: 0,
  }

  const rectanglesColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center',
    width: '48px',
    flexShrink: 0,
  }

  const spacingSizesColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '47px',
    alignItems: 'flex-start',
    width: '26px',
    flexShrink: 0,
    fontFamily: `'Lora', sans-serif`,
    fontSize: '10px',
    fontWeight: 400,
    color: 'black',
  }

  const spacingSizeLabelStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '8px',
    justifyContent: 'center',
    width: '100%',
    margin: 0,
    lineHeight: 0,
  }

  return (
    <section style={sectionStyles}>
      {/* Mobile: Show consolidated image */}
      {isMobile ? (
        <div style={mobileImageContainerStyles}>
          <img
            src="http://localhost:3845/assets/39ef550c92f46a24463e4c78965d0f650d7f93da.png"
            alt="Typography and spacing system"
            style={mobileImageStyles}
          />
        </div>
      ) : (
      <div style={mainContainerStyles}>
        {/* Fonts Section */}
        <div style={fontsContainerStyles}>
          {/* Sizes Column */}
          <div style={sizesColumnStyles}>
            <p style={sizeLabelStyles}>Fonts-size: 48px</p>
            <div style={{ 
              fontFamily: `'Karla', sans-serif`,
              fontSize: '48px',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#363636',
              width: '100%',
              margin: 0,
            }}>
              <p style={{ margin: 0 }}>HEADER</p>
            </div>

            <p style={sizeLabelStyles}>Fonts-size: 32px</p>
            <div style={{ 
              fontFamily: `'Karla', sans-serif`,
              fontSize: '32px',
              fontWeight: 400,
              lineHeight: '36px',
              color: '#363636',
              width: '100%',
              margin: 0,
            }}>
              <p style={{ margin: 0 }}>HEADER 1</p>
            </div>

            <p style={sizeLabelStyles}>Fonts-size: 28 px</p>
            <div style={{ 
              fontFamily: `'Karla', sans-serif`,
              fontSize: '28px',
              fontWeight: 400,
              lineHeight: 1.5,
              color: '#363636',
              width: '100%',
              height: '24px',
              margin: 0,
            }}>
              <p style={{ margin: 0 }}>HEADER 2</p>
            </div>

            <p style={sizeLabelStyles}>Fonts-size: 24 px</p>
            <div style={{ 
              fontFamily: `'Karla', sans-serif`,
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#363636',
              width: '100%',
              height: '24px',
              margin: 0,
            }}>
              <p style={{ margin: 0 }}>Subtitle</p>
            </div>

            <p style={sizeLabelStyles}>Fonts-size: 16 px</p>
            <p style={{ 
              fontFamily: `'Montserrat', sans-serif`,
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '28px',
              letterSpacing: '0.8px',
              color: '#363636',
              width: '100%',
              height: '24px',
              margin: 0,
            }}>Body</p>

            <p style={sizeLabelStyles}>Fonts-size: 14 px</p>
            <p style={{ 
              fontFamily: `'Montserrat', sans-serif`,
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '20px',
              color: '#363636',
              width: '100%',
              height: '20px',
              margin: 0,
            }}>Body medium bold 2</p>

            <p style={sizeLabelStyles}>Fonts-size: 12 px</p>
            <p style={{ 
              fontFamily: `'Montserrat', sans-serif`,
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '16px',
              color: '#363636',
              width: '100%',
              height: '15px',
              margin: 0,
            }}>Captions / Labels</p>

            <p style={sizeLabelStyles}>Fonts-size: 16 px</p>
            <div style={{ 
              fontFamily: `'Montserrat', sans-serif`,
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              color: '#363636',
              width: '100%',
              height: '23px',
              margin: 0,
            }}>
              <p style={{ margin: 0 }}>Buttons</p>
            </div>
          </div>

          {/* Content Column (Examples) */}
          <div style={contentColumnStyles}>
            <div style={{ 
              fontFamily: `'Karla', sans-serif`,
              fontSize: '48px',
              fontWeight: 400,
              lineHeight: 1.1,
              width: '100%',
              margin: 0,
            }}>
              <p style={{ margin: 0 }}>Hello there</p>
            </div>

            <div style={{ 
              fontFamily: `'Karla', sans-serif`,
              fontSize: '32px',
              fontWeight: 400,
              lineHeight: '36px',
              width: '100%',
              margin: 0,
            }}>
              <p style={{ margin: 0 }}>Hello there</p>
            </div>

            <div style={{ 
              fontFamily: `'Karla', sans-serif`,
              fontSize: '28px',
              fontWeight: 400,
              lineHeight: 1.5,
              width: '100%',
              margin: 0,
            }}>
              <p style={{ margin: 0 }}>Hello there</p>
            </div>

            <div style={{ 
              fontFamily: `'Karla', sans-serif`,
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: 1.1,
              width: '100%',
              margin: 0,
            }}>
              <p style={{ margin: 0 }}>Hello there</p>
            </div>

            <div style={{ 
              fontFamily: `'Montserrat', sans-serif`,
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '28px',
              letterSpacing: '0.8px',
              width: '100%',
              margin: 0,
            }}>
              <p style={{ margin: 0 }}>Hello there</p>
            </div>

            <div style={{ 
              fontFamily: `'Montserrat', sans-serif`,
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '20px',
              width: '100%',
              margin: 0,
            }}>
              <p style={{ margin: 0 }}>Hello there</p>
            </div>

            <div style={{ 
              fontFamily: `'Montserrat', sans-serif`,
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '16px',
              width: '100%',
              margin: 0,
            }}>
              <p style={{ margin: 0 }}>Hello there</p>
            </div>

            <div style={{ 
              fontFamily: `'Montserrat', sans-serif`,
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              width: '100%',
              margin: 0,
            }}>
              <p style={{ margin: 0 }}>Hello there</p>
            </div>
          </div>
        </div>

        {/* Spacing Section */}
        <div style={spacingContainerStyles}>
          {/* Rectangles Column */}
          <div style={rectanglesColumnStyles}>
            <div style={{ backgroundColor: '#d9d9d9', width: '4px', height: '4px', flexShrink: 0 }} />
            <div style={{ backgroundColor: '#d9d9d9', width: '8px', height: '8px', flexShrink: 0 }} />
            <div style={{ backgroundColor: '#d9d9d9', width: '16px', height: '16px', flexShrink: 0 }} />
            <div style={{ backgroundColor: '#d9d9d9', width: '24px', height: '24px', flexShrink: 0 }} />
            <div style={{ backgroundColor: '#d9d9d9', width: '28px', height: '28px', flexShrink: 0 }} />
            <div style={{ backgroundColor: '#d9d9d9', width: '32px', height: '32px', flexShrink: 0 }} />
            <div style={{ backgroundColor: '#d9d9d9', width: '36px', height: '36px', flexShrink: 0 }} />
            <div style={{ backgroundColor: '#d9d9d9', width: '48px', height: '40px', flexShrink: 0 }} />
            <div style={{ backgroundColor: '#d9d9d9', width: '48px', height: '44px', flexShrink: 0 }} />
            <div style={{ backgroundColor: '#d9d9d9', width: '48px', height: '48px', flexShrink: 0 }} />
          </div>

          {/* Sizes Labels Column */}
          <div style={spacingSizesColumnStyles}>
            <p style={spacingSizeLabelStyles}>4px</p>
            <p style={{ ...spacingSizeLabelStyles, opacity: 0.8 }}>8px</p>
            <p style={{ ...spacingSizeLabelStyles, opacity: 0.8 }}>16px</p>
            <p style={{ ...spacingSizeLabelStyles, opacity: 0.8 }}>24px</p>
            <p style={{ ...spacingSizeLabelStyles, opacity: 0.8 }}>28px</p>
            <p style={{ ...spacingSizeLabelStyles, opacity: 0.8 }}>32px</p>
            <p style={{ ...spacingSizeLabelStyles, opacity: 0.8 }}>36px</p>
            <p style={{ ...spacingSizeLabelStyles, opacity: 0.8 }}>40px</p>
            <p style={{ ...spacingSizeLabelStyles, opacity: 0.8 }}>44px</p>
            <p style={{ ...spacingSizeLabelStyles, opacity: 0.8 }}>48px</p>
          </div>
        </div>
      </div>
      )}
    </section>
  )
}

export default LexiTypography
