import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Color palette image for mobile
const colorPaletteImage = '/assets/images/tucredit/color-palette.png'

const TuCreditColorPalette = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
    alignItems: 'center',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '48px' : '128px',
    paddingBottom: isMobile ? '48px' : '48px',
    width: '100%',
    flexShrink: 0,
    boxSizing: 'border-box',
  }

  const contentContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '57px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const textContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '48px',
    alignItems: 'flex-start',
    width: '100%',
    flexShrink: 0,
  }

  const titleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '1.3',
    letterSpacing: '1.2px',
    color: '#370161',
    width: '100%',
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
  }

  const descriptionStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.8px',
    color: 'black',
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const paragraphStyles = {
    margin: 0,
    marginBottom: 0,
  }

  const colorsContainerStyles = {
    display: 'flex',
    gap: '57px',
    alignItems: 'flex-start',
    flexShrink: 0,
  }

  const primaryColorBoxStyles = {
    position: 'relative',
    display: 'inline-grid',
    gridTemplateColumns: 'max-content',
    gridTemplateRows: 'max-content',
    alignItems: 'start',
    justifyItems: 'start',
    flexShrink: 0,
  }

  const secondaryColorsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 306px)',
    gridTemplateRows: 'repeat(2, 248px)',
    gap: '27px 25px',
    rowGap: '27px',
    columnGap: '25px',
    alignContent: 'flex-start',
    flexShrink: 0,
  }

  const colorBoxStyles = {
    position: 'relative',
    display: 'inline-grid',
    gridTemplateColumns: 'max-content',
    gridTemplateRows: 'max-content',
    alignItems: 'start',
    justifyItems: 'start',
    flexShrink: 0,
  }

  return (
    <div style={sectionStyles}>
      <div style={contentContainerStyles}>
        {/* Text content */}
        <div style={textContainerStyles}>
          <p style={titleStyles}>Color palette</p>
          <div style={descriptionStyles}>
            <p style={paragraphStyles}>
              The color palette was selected based on the emotional values the product needed to communicate in a financial context. The primary color conveys reliability and confidence, reinforcing the idea of trust throughout the experience.
            </p>
          </div>
        </div>

        {/* Color palette */}
        {isMobile ? (
          /* Mobile: Show color palette image */
          <img
            src={colorPaletteImage}
            alt="Color palette - Primary #9427FF, Secondary #6BD2A7, #303030, #EDDBFE, #FFFFFF"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              pointerEvents: 'none',
            }}
          />
        ) : (
        /* Desktop: Show color boxes */
        <div style={colorsContainerStyles}>
          {/* Primary color - Large */}
          <div style={primaryColorBoxStyles}>
            <div style={{
              gridColumn: 1,
              gridRow: 1,
              backgroundColor: '#9427ff',
              width: '430.4px',
              height: '397px',
              borderRadius: '30px',
              marginLeft: 0,
              marginTop: 0,
            }} />
            <p style={{
              gridColumn: 1,
              gridRow: 1,
              fontFamily: `'Saira', sans-serif`,
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '1.5',
              color: 'white',
              textAlign: 'center',
              width: '156px',
              margin: 0,
              marginLeft: '339px',
              marginTop: '363.3px',
              transform: 'translateX(-50%)',
              fontVariationSettings: "'wdth' 100",
            }}>
              #9427FF
            </p>
          </div>

          {/* Secondary colors grid */}
          <div style={secondaryColorsGridStyles}>
            {/* Color 1 - Green */}
            <div style={colorBoxStyles}>
              <div style={{
                gridColumn: 1,
                gridRow: 1,
                backgroundColor: '#6bd2a7',
                width: '306px',
                height: '248px',
                borderRadius: '30px',
                marginLeft: 0,
                marginTop: 0,
              }} />
              <p style={{
                gridColumn: 1,
                gridRow: 1,
                fontFamily: `'Saira', sans-serif`,
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: '1.5',
                color: 'white',
                textAlign: 'center',
                margin: 0,
                marginLeft: '226.5px',
                marginTop: '203px',
                transform: 'translateX(-50%)',
                fontVariationSettings: "'wdth' 100",
              }}>
                #6BD2A7
              </p>
            </div>

            {/* Color 2 - Dark gray */}
            <div style={colorBoxStyles}>
              <div style={{
                gridColumn: 1,
                gridRow: 1,
                backgroundColor: '#303030',
                width: '306px',
                height: '248px',
                borderRadius: '30px',
                marginLeft: 0,
                marginTop: 0,
              }} />
              <p style={{
                gridColumn: 1,
                gridRow: 1,
                fontFamily: `'Saira', sans-serif`,
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: '1.5',
                color: 'white',
                textAlign: 'center',
                margin: 0,
                marginLeft: '231.5px',
                marginTop: '203px',
                transform: 'translateX(-50%)',
                fontVariationSettings: "'wdth' 100",
              }}>
                #303030
              </p>
            </div>

            {/* Color 3 - Light purple */}
            <div style={colorBoxStyles}>
              <div style={colorBoxStyles}>
                <div style={{
                  gridColumn: 1,
                  gridRow: 1,
                  backgroundColor: '#eddbfe',
                  width: '306px',
                  height: '248px',
                  borderRadius: '30px',
                  marginLeft: 0,
                  marginTop: 0,
                }} />
                <p style={{
                  gridColumn: 1,
                  gridRow: 1,
                  fontFamily: `'Saira', sans-serif`,
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  color: '#929292',
                  textAlign: 'center',
                  margin: 0,
                  marginLeft: '226.5px',
                  marginTop: '204px',
                  transform: 'translateX(-50%)',
                  fontVariationSettings: "'wdth' 100",
                }}>
                  #EDDBFE
                </p>
              </div>
            </div>

            {/* Color 4 - White */}
            <div style={colorBoxStyles}>
              <div style={{
                gridColumn: 1,
                gridRow: 1,
                backgroundColor: 'white',
                width: '306px',
                height: '248px',
                borderRadius: '30px',
                marginLeft: 0,
                marginTop: 0,
              }} />
              <p style={{
                gridColumn: 1,
                gridRow: 1,
                fontFamily: `'Saira', sans-serif`,
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: '1.5',
                color: '#929292',
                textAlign: 'center',
                margin: 0,
                marginLeft: '231.5px',
                marginTop: '204px',
                transform: 'translateX(-50%)',
                fontVariationSettings: "'wdth' 100",
              }}              >
                #FFFFFF
              </p>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default TuCreditColorPalette
