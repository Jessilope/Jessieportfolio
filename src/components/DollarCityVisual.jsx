import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`
const FONT_ARIAL   = `'Arial', sans-serif`
const FONT_MONT    = `'Montserrat', sans-serif`

const colorPaletteImage    = '/assets/images/dollarcity/color-palette.png'
const visualMockupPreview  = '/assets/images/dollarcity/visual-mockup-preview.png'

// ── Color palette data ───────────────────────────────────────────────────────
const COLORS = [
  { bg: '#005830', label: 'Prim  #155DFC', grow: 3 },
  { bg: '#ebdb32', label: 'Sec #FF9C37',   grow: 2 },
  { bg: '#242424', label: 'Neut#3F3F3F',   grow: 1.5 },
  { bg: '#fef59b', label: '#C9B803',        grow: 1 },
  { bg: '#f35f4f', label: '#A20000',        grow: 1 },
  { bg: '#6b94e9', label: '#073EB4',        grow: 1 },
  { bg: '#86ffb7', label: '#00A22E',        grow: 1 },
]

// ── Type scale data ──────────────────────────────────────────────────────────
const TYPE_SCALE = [
  { size: '48px', label: 'Fonts-size: 48px', regular: { text: 'Header',       font: FONT_ARIAL, weight: 400, lh: '48px',   fs: '48px' }, bold: { text: 'Header bold',  font: FONT_ARIAL, weight: 700, lh: '48px',  fs: '48px' } },
  { size: '36px', label: 'Fonts-size: 36px', regular: { text: 'Title',        font: FONT_ARIAL, weight: 400, lh: 1.5,      fs: '36px' }, bold: { text: 'Title bold',   font: FONT_ARIAL, weight: 700, lh: '38px',  fs: '36px' } },
  { size: '24px', label: 'Fonts-size: 24px', regular: { text: 'Subtitle',     font: FONT_ARIAL, weight: 400, lh: '32px',   fs: '24px' }, bold: { text: 'Subtitle bold',font: FONT_ARIAL, weight: 700, lh: '32px',  fs: '24px' } },
  { size: '16px', label: 'Fonts-size: 16px', regular: { text: 'Body',         font: FONT_ARIAL, weight: 400, lh: '26px',   fs: '16px' }, bold: { text: 'Body bold',    font: FONT_ARIAL, weight: 700, lh: '26px',  fs: '16px' } },
]

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
          fontFamily: FONT_HEADING,
          fontSize: isMobile ? '24px' : '32px',
          fontWeight: 500,
          lineHeight: 1.3,
          letterSpacing: '0',
          color: '#5D5F98',
          textAlign: 'center',
          margin: 0,
          width: '100%',
        }}>Visual</p>
      </AnimatedOnScroll>

      {/* ── Content block ────────────────────────────── */}
      <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%', maxWidth: '901px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', alignItems: 'flex-start', width: '100%' }}>

          {/* "Style guide" subtitle */}
          <p style={{
            fontFamily: FONT_HEADING,
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '1.2px',
            color: '#8a8a8a',
            margin: 0,
          }}>Style guide</p>

          {/* ── Typography panel ── desktop only ──────── */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-start', width: '100%' }}>

              {/* Left: big Aa */}
              <div style={{ flex: '1 0 0', display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0, position: 'relative' }}>
                <p style={{
                  fontFamily: FONT_BODY,
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  letterSpacing: '0.8px',
                  color: '#c8c8c8',
                  margin: 0,
                  fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
                }}>Typography</p>

                {/* Huge Aa */}
                <p style={{
                  fontFamily: FONT_ARIAL,
                  fontSize: '200px',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '10px',
                  color: '#ececec',
                  margin: 0,
                }}>Aa</p>

                {/* "Arial" label — overlaid mid-height */}
                <p style={{
                  fontFamily: FONT_HEADING,
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.3,
                  letterSpacing: '1.2px',
                  color: '#595959',
                  margin: 0,
                  position: 'absolute',
                  top: '169.5px',
                  left: 0,
                  transform: 'translateY(-50%)',
                }}>Arial</p>

                {/* Lorem ipsum */}
                <p style={{
                  fontFamily: FONT_ARIAL,
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  letterSpacing: '0.9px',
                  color: '#363636',
                  margin: 0,
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Right: type scale table */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', width: '538px', flexShrink: 0 }}>
                {TYPE_SCALE.map(({ label, regular, bold }) => (
                  <div key={label} style={{ display: 'flex', gap: '20px', alignItems: 'flex-end', width: '100%' }}>
                    {/* Regular column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: '1 0 0', minWidth: 0 }}>
                      <p style={{ fontFamily: FONT_MONT, fontSize: '16px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.8px', color: '#c8c8c8', margin: 0 }}>{label}</p>
                      <p style={{ fontFamily: regular.font, fontSize: regular.fs, fontWeight: regular.weight, lineHeight: regular.lh, color: '#363636', margin: 0 }}>{regular.text}</p>
                    </div>
                    {/* Bold column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: '1 0 0', minWidth: 0 }}>
                      <p style={{ fontFamily: FONT_MONT, fontSize: '16px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.8px', color: '#c8c8c8', margin: 0 }}>{label}</p>
                      <p style={{ fontFamily: bold.font, fontSize: bold.fs, fontWeight: bold.weight, lineHeight: bold.lh, color: '#363636', margin: 0 }}>{bold.text}</p>
                    </div>
                  </div>
                ))}
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
              {COLORS.map(({ bg, label, grow }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', flex: `${grow} 0 0`, minWidth: 0 }}>
                  <div style={{ width: '100%', height: '76px', backgroundColor: bg, borderRadius: '24px' }} />
                  <p style={{
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
                  }}>{label}</p>
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
