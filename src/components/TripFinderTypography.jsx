import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`
const FONT_ROBOTO  = `'Roboto', sans-serif`
const FONT_MONT    = `'Montserrat', sans-serif`

const COLORS = [
  { bg: '#650ad7', label: 'Prim  #650AD7' },
  { bg: '#9f760b', label: 'Sec  #9F760B'  },
  { bg: '#282020', label: 'Neut #282020'  },
  { bg: '#fff',    label: '#FFFFFF', border: true  },
]

const HEADERS = [
  { label: 'Fonts-size: 40px', text: 'Header',   size: '40px', weight: 700 },
  { label: 'Fonts-size: 34px', text: 'Header 1', size: '34px', weight: 700 },
  { label: 'Fonts-size: 28px', text: 'Header 2', size: '28px', weight: 400 },
  { label: 'Fonts-size: 24px', text: 'Title',    size: '24px', weight: 400, opacity: 0.5 },
]

const BODIES = [
  { label: 'Fonts-size: 18px', text: 'Body M',        size: '18px' },
  { label: 'Fonts-size: 16px', text: 'Body S',        size: '16px' },
  { label: 'Fonts-size: 12px', text: 'Body XS',       size: '12px' },
  { label: 'Fonts-size: 14px', text: 'Button texts',  size: '14px' },
]

const labelStyle = {
  fontFamily: FONT_MONT,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '28px',
  letterSpacing: '0.8px',
  color: '#8c8c8c',
  margin: 0,
  width: '100%',
  textAlign: 'center',
}

const TripFinderTypography = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '24px' : '48px',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>

      {/* "Visual" section title */}
      <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%', maxWidth: '901px' }}>
        <p style={{
          fontFamily: FONT_HEADING,
          fontSize: isMobile ? '24px' : '32px',
          fontWeight: 500,
          lineHeight: 1.3,
          color: '#5D5F98',
          textAlign: 'center',
          margin: 0,
        }}>Visual</p>
      </AnimatedOnScroll>

      {/* Content block */}
      <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%', maxWidth: '901px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? '32px' : '64px',
          alignItems: 'flex-start',
          width: '100%',
        }}>

          {/* "Style guide" subtitle */}
          <p style={{
            fontFamily: FONT_HEADING,
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '1.2px',
            color: '#8d8d99',
            margin: 0,
          }}>Style guide</p>

          {/* Typography panel — desktop only */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', width: '100%' }}>

              {/* Left: big Aa specimen */}
              <div style={{ width: '445px', flexShrink: 0, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <p style={{
                  fontFamily: FONT_BODY, fontSize: '16px', fontWeight: 300,
                  lineHeight: 1.6, letterSpacing: '0.8px', color: '#d1d1d8',
                  margin: 0, width: '289px',
                  fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
                }}>Typography</p>
                <p style={{
                  fontFamily: FONT_ROBOTO, fontSize: '200px', fontWeight: 600,
                  lineHeight: 1.4, letterSpacing: '10px', color: '#ececec', margin: 0,
                }}>Aa</p>
                {/* Font name overlaid */}
                <p style={{
                  fontFamily: FONT_HEADING, fontSize: '24px', fontWeight: 500,
                  lineHeight: 1.3, letterSpacing: '1.2px', color: '#48495e',
                  margin: 0, position: 'absolute', top: '169.5px', left: 0,
                  transform: 'translateY(-50%)', width: '289px',
                }}>Roboto</p>
                <p style={{
                  fontFamily: FONT_ROBOTO, fontSize: '18px', fontWeight: 400,
                  lineHeight: 1.5, letterSpacing: '0.9px', color: '#363636', margin: 0,
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Right: type scale — headers + bodies */}
              <div style={{ display: 'flex', gap: '24px', flex: '1 0 0', minWidth: 0, alignItems: 'flex-start' }}>
                {/* Headers column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '1 0 0', minWidth: 0 }}>
                  {HEADERS.map(({ label, text, size, weight, opacity }) => (
                    <div key={text} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                      <p style={labelStyle}>{label}</p>
                      <p style={{
                        fontFamily: FONT_ROBOTO, fontSize: size, fontWeight: weight,
                        lineHeight: 1.2, color: '#040404', margin: 0,
                        opacity: opacity || 1,
                      }}>{text}</p>
                    </div>
                  ))}
                </div>
                {/* Bodies column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: '1 0 0', minWidth: 0 }}>
                  {BODIES.map(({ label, text, size }) => (
                    <div key={text} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                      <p style={labelStyle}>{label}</p>
                      <p style={{
                        fontFamily: FONT_ROBOTO, fontSize: size, fontWeight: 400,
                        lineHeight: 1.5, color: '#040404', margin: 0,
                      }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Color palette — all breakpoints */}
          <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-start', width: '100%' }}>
            {COLORS.map(({ bg, label, border }) => (
              <div key={label} style={{
                display: 'flex', flexDirection: 'column', gap: '8px',
                alignItems: 'center', flex: '1 0 0', minWidth: 0,
              }}>
                <div style={{
                  width: '100%',
                  height: isMobile ? '48px' : '76px',
                  backgroundColor: bg,
                  borderRadius: '24px',
                  border: border ? '1px solid #e8e8ea' : 'none',
                }} />
                <p style={{
                  fontFamily: FONT_BODY, fontSize: '14px', fontWeight: 300,
                  lineHeight: 1.6, letterSpacing: '0.8px', color: '#d1d1d8',
                  textAlign: 'center', whiteSpace: 'nowrap', margin: 0,
                  fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
                }}>{label}</p>
              </div>
            ))}
          </div>

        </div>
      </AnimatedOnScroll>
    </div>
  )
}

export default TripFinderTypography
