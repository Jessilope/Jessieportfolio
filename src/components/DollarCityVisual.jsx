import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`
const FONT_ARIAL   = `'Arial', sans-serif`
const FONT_MONT    = `'Montserrat', sans-serif`

const colorPaletteImage   = '/assets/images/dollarcity/color-palette.png'
const visualMockupPreview = '/assets/images/dollarcity/visual-mockup-preview.png'

// ── Color palette — exact Figma widths ──────────────────────────────────────
// Primary: 231px, Secondary: 161px, Neutral: 132px, then 4 status chips flex
const COLORS_FIXED = [
  { bg: '#005830', label: 'Prim  #155DFC', width: '231px' },
  { bg: '#ebdb32', label: 'Sec #FF9C37',   width: '161px' },
  { bg: '#242424', label: 'Neut#3F3F3F',   width: '132px' },
]
const COLORS_FLEX = [
  { bg: '#fef59b', label: '#C9B803'  },
  { bg: '#f35f4f', label: '#A20000'  },
  { bg: '#6b94e9', label: '#073EB4'  },
  { bg: '#86ffb7', label: '#00A22E'  },
]

const labelStyle = {
  fontFamily: FONT_BODY,
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: '0.8px',
  color: '#c8c8c8',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  margin: 0,
  fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
}

const DollarCityVisual = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '64px' : '128px',
      paddingBottom: isMobile ? '32px' : '48px',
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>

      {/* ── "Visual" title ───────────────────────────── */}
      <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%', maxWidth: '901px' }}>
        <p style={{
          fontFamily: FONT_HEADING, fontSize: isMobile ? '24px' : '32px',
          fontWeight: 500, lineHeight: 1.3, color: '#5D5F98',
          textAlign: 'center', margin: 0, width: '100%',
        }}>Visual</p>
      </AnimatedOnScroll>

      {/* ── Content block ────────────────────────────── */}
      <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%', maxWidth: '901px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', alignItems: 'flex-start', width: '100%' }}>

          {/* "Style guide" subtitle */}
          <p style={{
            fontFamily: FONT_HEADING, fontSize: isMobile ? '20px' : '24px',
            fontWeight: 500, lineHeight: 1.3, letterSpacing: '1.2px',
            color: '#8a8a8a', margin: 0,
          }}>Style guide</p>

          {/* ── Typography panel — desktop only ──────── */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-start', width: '100%' }}>

              {/* Left: big Aa */}
              <div style={{ flex: '1 0 0', display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0, position: 'relative' }}>
                <p style={{
                  fontFamily: FONT_BODY, fontSize: '16px', fontWeight: 400,
                  lineHeight: 1.6, letterSpacing: '0.8px', color: '#c8c8c8',
                  margin: 0, width: '289px',
                  fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
                }}>Typography</p>
                <p style={{
                  fontFamily: FONT_ARIAL, fontSize: '200px', fontWeight: 700,
                  lineHeight: 1.2, letterSpacing: '10px', color: '#ececec', margin: 0,
                }}>Aa</p>
                {/* "Arial" overlaid */}
                <p style={{
                  fontFamily: FONT_HEADING, fontSize: '24px', fontWeight: 500,
                  lineHeight: 1.3, letterSpacing: '1.2px', color: '#595959',
                  margin: 0, position: 'absolute', top: '169.5px', left: 0,
                  transform: 'translateY(-50%)', width: '289px',
                }}>Arial</p>
                <p style={{
                  fontFamily: FONT_ARIAL, fontSize: '18px', fontWeight: 400,
                  lineHeight: 1.5, letterSpacing: '0.9px', color: '#363636', margin: 0,
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Right: type scale — exact Figma structure */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', width: '538px', flexShrink: 0 }}>

                {/* Headers row — gap 52px, fixed widths */}
                <div style={{ display: 'flex', gap: '52px', alignItems: 'center', width: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '201px', flexShrink: 0 }}>
                    <p style={{ fontFamily: FONT_MONT, fontSize: '16px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.8px', color: '#c8c8c8', margin: 0, width: '100%' }}>Fonts-size: 48px</p>
                    <p style={{ fontFamily: FONT_ARIAL, fontSize: '48px', fontWeight: 400, lineHeight: '48px', color: '#363636', margin: 0, width: '100%' }}>Header</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: '1 0 0', minWidth: 0 }}>
                    <p style={{ fontFamily: FONT_MONT, fontSize: '16px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.8px', color: '#c8c8c8', margin: 0, width: '100%' }}>Fonts-size: 48px</p>
                    <p style={{ fontFamily: FONT_ARIAL, fontSize: '48px', fontWeight: 700, lineHeight: '48px', color: '#363636', margin: 0, width: '100%' }}>Header bold</p>
                  </div>
                </div>

                {/* Titles row — gap 20px */}
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', width: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '233px', flexShrink: 0 }}>
                    <p style={{ fontFamily: FONT_MONT, fontSize: '16px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.8px', color: '#c8c8c8', margin: 0, width: '100%' }}>Fonts-size: 36px</p>
                    <p style={{ fontFamily: FONT_ARIAL, fontSize: '36px', fontWeight: 400, lineHeight: 1.5, color: '#363636', margin: 0, width: '100%' }}>Title</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: '1 0 0', minWidth: 0, alignSelf: 'stretch', justifyContent: 'flex-end' }}>
                    <p style={{ fontFamily: FONT_MONT, fontSize: '16px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.8px', color: '#c8c8c8', margin: 0, width: '100%' }}>Fonts-size: 36px</p>
                    <p style={{ fontFamily: FONT_ARIAL, fontSize: '36px', fontWeight: 700, lineHeight: '38px', color: '#363636', margin: 0, width: '100%' }}>Title bold</p>
                  </div>
                </div>

                {/* Subtitles row — gap 32px */}
                <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', width: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '228px', flexShrink: 0 }}>
                    <p style={{ fontFamily: FONT_MONT, fontSize: '16px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.8px', color: '#c8c8c8', margin: 0, width: '100%' }}>Fonts-size: 24px</p>
                    <p style={{ fontFamily: FONT_ARIAL, fontSize: '24px', fontWeight: 400, lineHeight: '32px', color: '#363636', margin: 0, width: '100%' }}>Subtitle</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: '1 0 0', minWidth: 0 }}>
                    <p style={{ fontFamily: FONT_MONT, fontSize: '16px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.8px', color: '#c8c8c8', margin: 0, width: '100%' }}>Fonts-size: 24px</p>
                    <p style={{ fontFamily: FONT_ARIAL, fontSize: '24px', fontWeight: 700, lineHeight: '32px', color: '#363636', margin: 0, width: '100%' }}>Subtitle bold</p>
                  </div>
                </div>

                {/* Bodies row — gap 33px */}
                <div style={{ display: 'flex', gap: '33px', alignItems: 'flex-start', width: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '233px', flexShrink: 0 }}>
                    <p style={{ fontFamily: FONT_MONT, fontSize: '16px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.8px', color: '#c8c8c8', margin: 0, width: '100%' }}>Fonts-size: 16px</p>
                    <p style={{ fontFamily: FONT_ARIAL, fontSize: '16px', fontWeight: 400, lineHeight: '26px', color: '#363636', margin: 0, width: '100%' }}>Body</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: '1 0 0', minWidth: 0 }}>
                    <p style={{ fontFamily: FONT_MONT, fontSize: '16px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.8px', color: '#c8c8c8', margin: 0, width: '100%' }}>Fonts-size: 16px</p>
                    <p style={{ fontFamily: FONT_ARIAL, fontSize: '16px', fontWeight: 700, lineHeight: '26px', color: '#363636', margin: 0, width: '100%' }}>Body bold</p>
                  </div>
                </div>

                {/* Caption */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                  <p style={{ fontFamily: FONT_MONT, fontSize: '16px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.8px', color: '#c8c8c8', margin: 0 }}>Fonts-size: 12px</p>
                  <p style={{ fontFamily: FONT_ARIAL, fontSize: '12px', fontWeight: 400, lineHeight: '26px', color: '#363636', margin: 0 }}>Caption</p>
                </div>
              </div>
            </div>
          )}

          {/* ── Color palette ─────────────────────────── */}
          {isMobile ? (
            <img src={colorPaletteImage} alt="Color palette" style={{ width: '100%', height: 'auto', display: 'block' }} />
          ) : (
            <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-start', width: '100%' }}>
              {/* Fixed-width primary, secondary, neutral */}
              {COLORS_FIXED.map(({ bg, label, width }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', width, flexShrink: 0 }}>
                  <div style={{ width: '100%', height: '76px', backgroundColor: bg, borderRadius: '24px' }} />
                  <p style={labelStyle}>{label}</p>
                </div>
              ))}
              {/* Flex status chips */}
              {COLORS_FLEX.map(({ bg, label }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', flex: '1 0 0', minWidth: 0 }}>
                  <div style={{ width: '75px', height: '76px', backgroundColor: bg, borderRadius: '24px' }} />
                  <p style={{ ...labelStyle, textAlign: 'left' }}>{label}</p>
                </div>
              ))}
            </div>
          )}

          {/* ── Mockup preview image ──────────────────── */}
          {!isMobile && (
            <div style={{ width: '443px', height: '160px', position: 'relative', flexShrink: 0 }}>
              <img
                src={visualMockupPreview}
                alt="Visual mockup preview"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
              />
            </div>
          )}

        </div>
      </AnimatedOnScroll>

    </div>
  )
}

export default DollarCityVisual
