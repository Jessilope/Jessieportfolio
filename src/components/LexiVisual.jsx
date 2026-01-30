import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Mobile image path
const colorPaletteImage = '/assets/images/lexi/color-palette.png'

const LexiVisual = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '64px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xxl, // 48px
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

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '57px',
    alignItems: 'flex-start',
    width: '100%',
  }

  const headerContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : spacing.xxl, // 48px
    alignItems: 'flex-start',
    width: '100%',
  }

  const subtitleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: isMobile ? '1px' : '1.2px',
    color: '#370161',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    margin: 0,
    width: '100%',
  }

  const introTextStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    width: '100%',
  }

  // Mobile image for color palette
  const mobileColorPaletteImageStyles = {
    width: '100%',
    position: 'relative',
  }

  const mobileImageStyles = {
    width: '100%',
    height: 'auto',
    display: 'block',
    pointerEvents: 'none',
  }

  const colorPaletteContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0px 48px',
    alignItems: 'flex-start',
    width: '100%',
  }

  const primariesColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '87px',
    alignItems: 'flex-start',
    width: '724px',
    flexShrink: 0,
  }

  const primariesRowStyles = {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    width: '100%',
  }

  const colorCircleStyles = {
    width: '89px',
    height: '174px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 0,
  }

  const colorCircleDivStyles = (bgColor) => ({
    backgroundColor: bgColor,
    flex: '1 0 0',
    minHeight: '1px',
    minWidth: '1px',
    borderRadius: '45px',
    width: '100%',
  })

  const colorCircleSmallStyles = {
    width: '87px',
    height: '171px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 0,
  }

  const colorCircleSmallDivStyles = (bgColor) => ({
    backgroundColor: bgColor,
    flex: '1 0 0',
    minHeight: '1px',
    minWidth: '1px',
    borderRadius: '45px',
    width: '100%',
  })

  const colorContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '17px',
    alignItems: 'flex-start',
    width: '147px',
    flexShrink: 0,
  }

  const colorNameStyles = {
    fontFamily: `'Arial', sans-serif`,
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '32px',
    color: '#3f3f3f',
    margin: 0,
    width: '100%',
  }

  const colorFunctionStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'flex-start',
    width: '100%',
  }

  const colorTypeStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: 1.3,
    letterSpacing: '1.2px',
    color: '#929292',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    width: '100%',
  }

  const colorDescStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: '#bbb',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    width: '100%',
  }

  const neutralsSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '29px',
    alignItems: 'flex-start',
    width: '702px',
    flexShrink: 0,
  }

  const sectionTitleStyles = {
    fontFamily: `'Arial', sans-serif`,
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '32px',
    color: '#929292',
    margin: 0,
    width: '100%',
  }

  const neutralsRowStyles = {
    display: 'flex',
    gap: '13px',
    alignItems: 'center',
    width: '100%',
  }

  const neutralCircleStyles = {
    width: '89px',
    height: '153px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 0,
  }

  const neutralCircleDivStyles = (bgColor) => ({
    backgroundColor: bgColor,
    flex: '1 0 0',
    minHeight: '1px',
    minWidth: '1px',
    borderRadius: '45px',
    width: '100%',
  })

  const statusColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
    alignItems: 'flex-start',
    width: '381px',
    flexShrink: 0,
  }

  const statusRowStyles = {
    display: 'flex',
    gap: '28px',
    alignItems: 'flex-start',
    width: '100%',
  }

  const statusCircleStyles = {
    width: '89px',
    height: '153px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 0,
  }

  const statusContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '17px',
    alignItems: 'flex-start',
    width: '147px',
    flexShrink: 0,
  }

  const statusFunctionStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  }

  const imageContainerStyles = {
    width: '835px',
    height: '264px',
    position: 'relative',
    flexShrink: 0,
  }

  const imageStyles = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }

  return (
    <section style={sectionStyles}>
      {/* Title */}
      <div>
        <p style={titleStyles}>Visual</p>
      </div>

      {/* Content */}
      <div style={contentStyles}>
        {/* Header with title and intro text */}
        <div style={headerContentStyles}>
          <p style={subtitleStyles}>Color palette</p>
          <p style={introTextStyles}>
            The visual design system for Lexi emphasizes a modern, clean aesthetic that supports confidence and reduces cognitive load. Colors, typography, and components were carefully selected to create a supportive learning environment.
          </p>
        </div>

        {/* Mobile: Show consolidated image */}
        {isMobile ? (
          <div style={mobileColorPaletteImageStyles}>
            <img
              src={colorPaletteImage}
              alt="Color palette showing primary, secondary, neutral and status colors"
              style={mobileImageStyles}
            />
          </div>
        ) : (
        /* Desktop: Color Palette Grid */
        <div style={colorPaletteContainerStyles}>
          {/* Primaries Column */}
          <div style={primariesColumnStyles}>
            {/* Primaries and Secondaries Row */}
            <div style={primariesRowStyles}>
              {/* Blue Primary */}
              <div style={colorCircleStyles}>
                <div style={colorCircleDivStyles('#0d4ad1')} />
              </div>
              <div style={colorCircleStyles}>
                <div style={colorCircleDivStyles('#155dfc')} />
              </div>
              <div style={colorContentStyles}>
                <p style={colorNameStyles}>Blue</p>
                <div style={colorFunctionStyles}>
                  <p style={colorTypeStyles}>Primary</p>
                  <p style={colorDescStyles}>Main actions</p>
                </div>
              </div>

              {/* Orange Secondary */}
              <div style={colorCircleSmallStyles}>
                <div style={colorCircleSmallDivStyles('#f28312')} />
              </div>
              <div style={colorCircleSmallStyles}>
                <div style={colorCircleSmallDivStyles('#ff9c37')} />
              </div>
              <div style={{ ...colorContentStyles, width: '145px' }}>
                <p style={colorNameStyles}>Orange</p>
                <div style={colorFunctionStyles}>
                  <p style={colorTypeStyles}>Secundary</p>
                  <p style={colorDescStyles}>Support & streaks</p>
                </div>
              </div>
            </div>

            {/* Neutrals Section */}
            <div style={neutralsSectionStyles}>
              <p style={sectionTitleStyles}>Neutral</p>
              <div style={neutralsRowStyles}>
                <div style={neutralCircleStyles}>
                  <div style={neutralCircleDivStyles('#242424')} />
                </div>
                <div style={neutralCircleStyles}>
                  <div style={neutralCircleDivStyles('#3f3f3f')} />
                </div>
                <div style={neutralCircleStyles}>
                  <div style={neutralCircleDivStyles('#929292')} />
                </div>
                <div style={neutralCircleStyles}>
                  <div style={neutralCircleDivStyles('#bbb')} />
                </div>
                <div style={neutralCircleStyles}>
                  <div style={neutralCircleDivStyles('#e2e2e2')} />
                </div>
                <div style={neutralCircleStyles}>
                  <div style={neutralCircleDivStyles('#f5f5f5')} />
                </div>
                <div style={neutralCircleStyles}>
                  <div style={neutralCircleDivStyles('#f6f6f6')} />
                </div>
              </div>
            </div>
          </div>

          {/* Status Column */}
          <div style={statusColumnStyles}>
            <p style={sectionTitleStyles}>Status</p>

            {/* Yellow Warning */}
            <div style={statusRowStyles}>
              <div style={statusCircleStyles}>
                <div style={neutralCircleDivStyles('#c9b803')} />
              </div>
              <div style={statusCircleStyles}>
                <div style={neutralCircleDivStyles('#fef59b')} />
              </div>
              <div style={statusContentStyles}>
                <p style={colorNameStyles}>Yellow</p>
                <div style={statusFunctionStyles}>
                  <p style={colorTypeStyles}>Warning</p>
                </div>
              </div>
            </div>

            {/* Red Error */}
            <div style={statusRowStyles}>
              <div style={statusCircleStyles}>
                <div style={neutralCircleDivStyles('#a20000')} />
              </div>
              <div style={statusCircleStyles}>
                <div style={neutralCircleDivStyles('#ffcdcd')} />
              </div>
              <div style={statusContentStyles}>
                <p style={colorNameStyles}>Red</p>
                <div style={statusFunctionStyles}>
                  <p style={colorTypeStyles}>Error</p>
                </div>
              </div>
            </div>

            {/* Blue Information */}
            <div style={statusRowStyles}>
              <div style={statusCircleStyles}>
                <div style={neutralCircleDivStyles('#073eb4')} />
              </div>
              <div style={statusCircleStyles}>
                <div style={neutralCircleDivStyles('#d3e0fd')} />
              </div>
              <div style={statusContentStyles}>
                <p style={colorNameStyles}>Blue</p>
                <div style={statusFunctionStyles}>
                  <p style={{ ...sectionTitleStyles, fontWeight: 400 }}>Information</p>
                </div>
              </div>
            </div>

            {/* Green Success */}
            <div style={statusRowStyles}>
              <div style={statusCircleStyles}>
                <div style={neutralCircleDivStyles('#00a22e')} />
              </div>
              <div style={statusCircleStyles}>
                <div style={neutralCircleDivStyles('#cdffdb')} />
              </div>
              <div style={statusContentStyles}>
                <p style={colorNameStyles}>green</p>
                <div style={statusFunctionStyles}>
                  <p style={{ ...sectionTitleStyles, fontWeight: 400 }}>Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}

export default LexiVisual
