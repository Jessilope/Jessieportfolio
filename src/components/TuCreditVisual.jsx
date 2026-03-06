import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`
const FONT_SAIRA   = `'Saira', sans-serif`

// ── Color palette ────────────────────────────────────────────────────────────
const COLORS = [
  { bg: '#9427ff', label: 'Prim  #9427FF' },
  { bg: '#6bd2a7', label: 'Sec #6BD2A7'   },
  { bg: '#eddbfe', label: 'Sec #EDDBFE'   },
  { bg: '#303030', label: 'Neut #303030'  },
  { bg: '#ffffff', label: 'Neut #FFFFFF', border: '1px solid #e0e0e0' },
]

// ── Type scale items (single vertical list) ───────────────────────────────────
const TYPE_ITEMS = [
  // Headings
  { label: 'Font size: 64 /  4 rem  / line hight 120% ', text: 'HEADING 1',   size: '64px', weight: 600, lh: '1.2'  },
  { label: 'Font size: 48 /  3 rem  / line hight 120% ', text: 'HEADING 2',   size: '48px', weight: 500, lh: '1.2'  },
  // Subheadings
  { label: 'Font size: 40 /  2.5 rem  / line hight 120% ', text: 'SUBHEADING 1', size: '40px', weight: 500, lh: '1.3' },
  { label: 'Font size: 32  /  2 rem  / line hight 120% ',  text: 'SUBHEADING 2 ', size: '32px', weight: 500, lh: '1.5' },
  // Bodies
  { label: 'Font size: 24 /  1.5 rem  / line hight 150% ', text: 'Body normal', size: '24px', weight: 400, lh: '1.5', labelSize: '24px' },
  { label: 'Font size: 24 bold /  1.5 rem  / line hight 150% ', text: 'Body  bold', size: '24px', weight: 500, lh: '1.4', labelSize: '24px' },
  // Caption
  { label: 'Font size: 16/  1 rem / line hight 150% ', text: 'CAPTION', size: '16px', weight: 500, lh: '1.5', labelSize: '24px' },
]

const TuCreditVisual = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefb',
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      alignItems: 'center',
      paddingTop: isMobile ? '48px' : '128px',
      paddingBottom: '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      width: '100%',
      flexShrink: 0,
      boxSizing: 'border-box',
    }}>

      {/* ── "Visual" title ───────────────────────────── */}
      <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%', maxWidth: '901px' }}>
        <p style={{
          fontFamily: FONT_HEADING,
          fontSize: isMobile ? '24px' : '32px',
          fontWeight: 500,
          lineHeight: 1.3,
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

          {/* ── Typography panel — desktop only ──────── */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-start', width: '100%' }}>

              {/* Left: big Aa display */}
              <div style={{ flex: '1 0 0', display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0, position: 'relative' }}>
                <p style={{
                  fontFamily: FONT_BODY, fontSize: '16px', fontWeight: 400,
                  lineHeight: 1.6, letterSpacing: '0.8px', color: '#c8c8c8',
                  margin: 0, fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
                  width: '289px',
                }}>Typography</p>

                {/* Huge Aa */}
                <p style={{
                  fontFamily: FONT_SAIRA, fontSize: '200px', fontWeight: 700,
                  lineHeight: 1.2, letterSpacing: '10px', color: '#ececec',
                  margin: 0, fontVariationSettings: "'wdth' 100",
                }}>Aa</p>

                {/* "Saira" label — overlaid mid-height */}
                <p style={{
                  fontFamily: FONT_HEADING, fontSize: '24px', fontWeight: 500,
                  lineHeight: 1.3, letterSpacing: '1.2px', color: '#595959',
                  margin: 0, position: 'absolute', top: '169.5px', left: 0,
                  transform: 'translateY(-50%)', width: '289px',
                }}>Saira</p>

                {/* Lorem ipsum */}
                <p style={{
                  fontFamily: FONT_SAIRA, fontSize: '18px', fontWeight: 400,
                  lineHeight: 1.5, letterSpacing: '0.9px', color: '#363636',
                  margin: 0, fontVariationSettings: "'wdth' 100",
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Right: type scale — single vertical list, width 529px */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '529px', flexShrink: 0 }}>
                {TYPE_ITEMS.map((item, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start', width: '100%' }}>
                    <p style={{
                      fontFamily: FONT_SAIRA, fontSize: item.labelSize || '24px', fontWeight: 400,
                      lineHeight: 1.5, color: '#929292', width: '100%',
                      margin: 0, fontVariationSettings: "'wdth' 100", whiteSpace: 'pre-wrap',
                    }}>{item.label}</p>
                    <p style={{
                      fontFamily: FONT_SAIRA, fontSize: item.size, fontWeight: item.weight,
                      lineHeight: item.lh, color: '#303030', width: '100%',
                      margin: 0, fontVariationSettings: "'wdth' 100",
                    }}>{item.text}</p>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ── Color palette ─────────────────────────── */}
          <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
            {COLORS.map(({ bg, label, border }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', flex: '1 0 0', minWidth: 0 }}>
                <div style={{ width: '100%', height: '76px', backgroundColor: bg, borderRadius: '24px', border: border || 'none' }} />
                <p style={{
                  fontFamily: FONT_BODY, fontSize: '14px', fontWeight: 400,
                  lineHeight: 1.6, letterSpacing: '0.8px', color: '#c8c8c8',
                  textAlign: 'center', whiteSpace: 'nowrap', margin: 0,
                  fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
                }}>{label}</p>
              </div>
            ))}
          </div>

        </div>
      </AnimatedOnScroll>

    </div>
  )
}

export default TuCreditVisual
