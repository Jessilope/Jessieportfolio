import useResponsive from '../hooks/useResponsive'

// Color palette image for mobile
const colorPaletteImage = '/assets/images/tripfinder/color-palette.png'

const TripFinderColorPalette = () => {
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
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const colorPaletteContainerStyles = {
    display: 'flex',
    gap: '57px',
    alignItems: 'flex-start',
    lineHeight: '0',
    flexShrink: 0,
  }

  const primaryColorContainerStyles = {
    display: 'inline-grid',
    gridTemplateColumns: 'max-content',
    gridTemplateRows: 'max-content',
    alignItems: 'start',
    justifyItems: 'start',
    position: 'relative',
    flexShrink: 0,
  }

  const primaryColorSwatchStyles = {
    backgroundColor: '#650ad7',
    width: '430.4px',
    height: '397px',
    borderRadius: '30px',
    gridColumn: '1',
    gridRow: '1',
    marginLeft: '0',
    marginTop: '0',
  }

  const primaryColorTextStyles = {
    fontFamily: `'Saira', sans-serif`,
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '1.5',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    gridColumn: '1',
    gridRow: '1',
    alignSelf: 'end',
    justifySelf: 'center',
    marginBottom: '20px',
    fontVariationSettings: "'wdth' 100",
  }

  const secondaryColorsContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '27px 25px',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    width: '637px',
    flexShrink: 0,
  }

  const secondaryColorContainerStyles = {
    display: 'inline-grid',
    gridTemplateColumns: 'max-content',
    gridTemplateRows: 'max-content',
    alignItems: 'start',
    justifyItems: 'start',
    position: 'relative',
    flexShrink: 0,
  }

  const secondaryColorSwatchStyles = (bgColor) => ({
    backgroundColor: bgColor,
    width: '306px',
    height: '248px',
    borderRadius: '30px',
    gridColumn: '1',
    gridRow: '1',
  })

  const secondaryColorTextStyles = (color, marginTopValue = '203px') => ({
    fontFamily: `'Saira', sans-serif`,
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '1.5',
    textAlign: 'center',
    color: color,
    position: 'relative',
    gridColumn: '1',
    gridRow: '1',
    alignSelf: 'end',
    justifySelf: 'center',
    marginBottom: '20px',
    fontVariationSettings: "'wdth' 100",
  })

  return (
    <div style={sectionStyles}>
      <div style={contentContainerStyles}>
        {/* Text content */}
        <div style={textContainerStyles}>
          <p style={titleStyles}>Color palette</p>
          <p style={descriptionStyles}>
            The color palette was designed to communicate confidence, calm, and approachability. Soft yet expressive tones create a sense of reliability while keeping the interface fresh and modern. Balanced with neutral shades, the palette ensures clarity and readability, allowing content to stand out while maintaining a cohesive and adaptable experience across both light and dark modes.
          </p>
        </div>

        {/* Color swatches */}
        {isMobile ? (
          /* Mobile: Show image from Figma */
          <img
            src={colorPaletteImage}
            alt="Color palette - Primary #650AD7, Secondary #9F760B, #282020, #FFFFFF"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              pointerEvents: 'none',
            }}
          />
        ) : (
          /* Desktop: Show color boxes */
          <div style={colorPaletteContainerStyles}>
            {/* Primary color - Large purple */}
            <div style={primaryColorContainerStyles}>
              <div style={primaryColorSwatchStyles} />
              <p style={primaryColorTextStyles}>#650AD7</p>
            </div>

            {/* Secondary colors */}
            <div style={secondaryColorsContainerStyles}>
              {/* Gold */}
              <div style={secondaryColorContainerStyles}>
                <div style={secondaryColorSwatchStyles('#9f760b')} />
                <p style={secondaryColorTextStyles('white')}>#9F760B</p>
              </div>

              {/* Dark brown/black */}
              <div style={secondaryColorContainerStyles}>
                <div style={secondaryColorSwatchStyles('#282020')} />
                <p style={secondaryColorTextStyles('white')}>#282020</p>
              </div>

              {/* White */}
              <div style={secondaryColorContainerStyles}>
                <div style={secondaryColorSwatchStyles('white')} />
                <p style={secondaryColorTextStyles('#929292')}>#FFFFFF</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TripFinderColorPalette
