import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Mobile color palette image
const colorPaletteImage = '/assets/images/dollarcity/color-palette.png'

const DollarCityVisual = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'center',
  }

  const titleStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 400,
    lineHeight: isMobile ? '28px' : '32px',
    letterSpacing: '0',
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    margin: 0,
  }

  const contentWrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '57px',
    alignItems: 'flex-start',
    width: '100%',
    flexShrink: 0,
  }

  const subtitleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 700,
    lineHeight: '1.3',
    letterSpacing: isMobile ? '1px' : '1.2px',
    color: '#370161',
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    margin: 0,
  }

  const colorPaletteContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: isMobile ? '24px' : '48px',
    alignItems: 'flex-start',
    width: '100%',
    flexShrink: 0,
  }

  const primariesContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '87px',
    alignItems: 'flex-start',
    width: isMobile ? '100%' : '724px',
    flexShrink: 0,
  }

  const primariesSecondariesRowStyles = {
    display: 'flex',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    gap: isMobile ? '12px' : '16px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const colorSwatchStyles = (bgColor, width = '89px', height = '174px') => ({
    width: isMobile ? '50px' : width,
    height: isMobile ? '100px' : height,
    backgroundColor: bgColor,
    borderRadius: isMobile ? '25px' : '45px',
    flexShrink: 0,
  })

  const colorLabelStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '8px' : '17px',
    alignItems: 'flex-start',
    flexShrink: 0,
  }

  const colorNameStyles = {
    fontFamily: `'Arial', sans-serif`,
    fontSize: isMobile ? '16px' : '24px',
    fontWeight: 700,
    lineHeight: isMobile ? '20px' : '32px',
    letterSpacing: '0',
    color: '#3f3f3f',
    width: '100%',
    margin: 0,
  }

  const functionContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '4px' : '8px',
    alignItems: 'flex-start',
    width: '100%',
  }

  const functionTitleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '24px',
    fontWeight: 400,
    lineHeight: '1.3',
    letterSpacing: isMobile ? '0.8px' : '1.2px',
    color: '#929292',
    width: '100%',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
  }

  const functionDescStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '12px' : '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.8px',
    color: '#bbbbbb',
    width: '100%',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
  }

  const neutralsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '16px' : '29px',
    alignItems: 'flex-start',
    width: isMobile ? '100%' : '702px',
    flexShrink: 0,
  }

  const neutralsRowStyles = {
    display: 'flex',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    gap: isMobile ? '8px' : '13px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const neutralTitleStyles = {
    fontFamily: `'Arial', sans-serif`,
    fontSize: isMobile ? '18px' : '24px',
    fontWeight: 700,
    lineHeight: isMobile ? '24px' : '32px',
    letterSpacing: '0',
    color: '#929292',
    width: '100%',
    margin: 0,
  }

  const statusContainerStyles = {
    display: isMobile ? 'none' : 'flex',
    flexDirection: 'column',
    gap: '28px',
    alignItems: 'flex-start',
    width: '381px',
    flexShrink: 0,
  }

  const statusRowStyles = {
    display: 'flex',
    gap: isMobile ? '12px' : '28px',
    alignItems: 'flex-start',
    width: '100%',
    flexShrink: 0,
  }

  const statusFunctionStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '24px',
    fontWeight: 400,
    lineHeight: '1.3',
    letterSpacing: isMobile ? '0.8px' : '1.2px',
    color: '#929292',
    width: '100%',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
  }

  const imageContainerStyles = {
    width: isMobile ? '100%' : '642px',
    height: isMobile ? 'auto' : '233px',
    position: 'relative',
    flexShrink: 0,
  }

  const imageStyles = {
    width: '100%',
    height: isMobile ? 'auto' : '100%',
    objectFit: 'cover',
  }

  // Mobile image styles
  const mobileImageContainerStyles = {
    width: '100%',
    position: 'relative',
  }

  const mobileImageStyles = {
    width: '100%',
    height: 'auto',
    display: 'block',
    pointerEvents: 'none',
  }

  return (
    <div style={sectionStyles}>
      <p style={titleStyles}>Visual</p>
      
      <div style={contentWrapperStyles}>
        <p style={subtitleStyles}>Color palette</p>
        
        {/* Mobile: Show color palette image */}
        {isMobile ? (
          <div style={mobileImageContainerStyles}>
            <img
              src={colorPaletteImage}
              alt="Color palette showing primary, secondary, neutral and status colors"
              style={mobileImageStyles}
            />
          </div>
        ) : (
        <div style={colorPaletteContainerStyles}>
          {/* Primaries Section */}
          <div style={primariesContainerStyles}>
            {/* Primaries and Secondaries Row */}
            <div style={primariesSecondariesRowStyles}>
              {/* Green - Primary */}
              <div style={colorSwatchStyles('#005830')} />
              <div style={colorSwatchStyles('#008d4d')} />
              <div style={{...colorLabelStyles, width: '147px'}}>
                <p style={colorNameStyles}>Green</p>
                <div style={functionContainerStyles}>
                  <p style={functionTitleStyles}>Primary</p>
                  <p style={functionDescStyles}>Main actions</p>
                </div>
              </div>

              {/* Yellow - Secondary */}
              <div style={colorSwatchStyles('#ebdb32', '87px', '171px')} />
              <div style={colorSwatchStyles('#f0e465', '87px', '171px')} />
              <div style={{...colorLabelStyles, width: '145px'}}>
                <p style={colorNameStyles}>Yellow</p>
                <div style={functionContainerStyles}>
                  <p style={functionTitleStyles}>Secundary</p>
                  <p style={functionDescStyles}>Support & categories</p>
                </div>
              </div>
            </div>

            {/* Neutrals */}
            <div style={neutralsContainerStyles}>
              <p style={neutralTitleStyles}>Neutral</p>
              <div style={neutralsRowStyles}>
                <div style={colorSwatchStyles('#242424', '89px', '153px')} />
                <div style={colorSwatchStyles('#3f3f3f', '89px', '153px')} />
                <div style={colorSwatchStyles('#929292', '89px', '153px')} />
                <div style={colorSwatchStyles('#bbbbbb', '89px', '153px')} />
                <div style={colorSwatchStyles('#e2e2e2', '89px', '153px')} />
                <div style={colorSwatchStyles('#f5f5f5', '89px', '153px')} />
                <div style={colorSwatchStyles('#f6f6f6', '89px', '153px')} />
              </div>
            </div>
          </div>

          {/* Status Colors */}
          <div style={statusContainerStyles}>
            <p style={neutralTitleStyles}>Status</p>
            
            {/* Warning */}
            <div style={statusRowStyles}>
              <div style={colorSwatchStyles('#c9b803', '89px', '153px')} />
              <div style={colorSwatchStyles('#fef59b', '89px', '153px')} />
              <div style={{...colorLabelStyles, width: '147px'}}>
                <p style={colorNameStyles}>Yellow</p>
                <div>
                  <p style={statusFunctionStyles}>Warning</p>
                </div>
              </div>
            </div>

            {/* Error */}
            <div style={statusRowStyles}>
              <div style={colorSwatchStyles('#b71e0d', '89px', '153px')} />
              <div style={colorSwatchStyles('#f35f4f', '89px', '153px')} />
              <div style={{...colorLabelStyles, width: '147px'}}>
                <p style={colorNameStyles}>Red</p>
                <div>
                  <p style={statusFunctionStyles}>Error</p>
                </div>
              </div>
            </div>

            {/* Information */}
            <div style={statusRowStyles}>
              <div style={colorSwatchStyles('#3a70e2', '89px', '153px')} />
              <div style={colorSwatchStyles('#6b94e9', '89px', '153px')} />
              <div style={{...colorLabelStyles, width: '147px'}}>
                <p style={colorNameStyles}>Blue</p>
                <div>
                  <p style={{...statusFunctionStyles, fontFamily: `'Arial', sans-serif`, lineHeight: '32px'}}>Information</p>
                </div>
              </div>
            </div>

            {/* Success */}
            <div style={statusRowStyles}>
              <div style={colorSwatchStyles('#02b148', '89px', '153px')} />
              <div style={colorSwatchStyles('#86ffb7', '89px', '153px')} />
              <div style={{...colorLabelStyles, width: '147px'}}>
                <p style={colorNameStyles}>green</p>
                <div>
                  <p style={{...statusFunctionStyles, fontFamily: `'Arial', sans-serif`, lineHeight: '32px'}}>Success</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        )}
      </div>
    </div>
  )
}

export default DollarCityVisual
