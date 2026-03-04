import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`
const FONT_KARLA = `'Karla', sans-serif`
const FONT_MONTSERRAT = `'Montserrat', sans-serif`

// Typography scale rows
const TYPE_ROWS = [
  { label: 'Fonts-size: 48px', name: 'HEADER',           font: FONT_KARLA,       size: '48px', weight: 400, lineHeight: 1.1 },
  { label: 'Fonts-size: 32px', name: 'HEADER 1',         font: FONT_KARLA,       size: '32px', weight: 400, lineHeight: '36px' },
  { label: 'Fonts-size: 28 px',name: 'HEADER 2',         font: FONT_KARLA,       size: '28px', weight: 400, lineHeight: 1.5 },
  { label: 'Fonts-size: 24 px',name: 'Subtitle',         font: FONT_KARLA,       size: '24px', weight: 400, lineHeight: 1.1 },
  { label: 'Fonts-size: 16 px',name: 'Body',             font: FONT_MONTSERRAT,  size: '16px', weight: 400, lineHeight: '28px' },
  { label: 'Fonts-size: 14 px',name: 'Body medium bold 2',font: FONT_MONTSERRAT, size: '14px', weight: 500, lineHeight: '20px' },
  { label: 'Fonts-size: 12 px',name: 'Captions / Labels',font: FONT_MONTSERRAT,  size: '12px', weight: 400, lineHeight: '16px' },
  { label: 'Fonts-size: 16 px',name: 'Buttons',          font: FONT_MONTSERRAT,  size: '16px', weight: 400, lineHeight: '24px' },
]

// Color palette swatches
const COLORS = [
  { bg: '#155dfc', label: 'Prim  #155DFC', width: '231px' },
  { bg: '#ff9c37', label: 'Sec #FF9C37',   width: '161px' },
  { bg: '#3f3f3f', label: 'Neut#3F3F3F',  width: '132px' },
  { bg: '#fef59b', label: '#C9B803',       width: null },
  { bg: '#ffcdcd', label: '#A20000',       width: null },
  { bg: '#d3e0fd', label: '#073EB4',       width: null },
  { bg: '#cdffdb', label: '#00A22E',       width: null },
]

const labelStyle = {
  fontFamily: FONT_BODY,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: '0.8px',
  color: '#c8c8c8',
  margin: 0,
  textAlign: 'center',
  fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
}

const LexiVisual = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefa',
      width: '100%',
      paddingTop: '128px',
      paddingBottom: '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>

      {/* Title */}
      <AnimatedOnScroll animation="fadeIn" duration={600} style={{ width: '100%', maxWidth: '901px' }}>
        <p style={{
          fontFamily: FONT_POPPINS,
          fontSize: isMobile ? '24px' : '32px',
          fontWeight: 500,
          lineHeight: 1.3,
          color: '#5d5f98',
          textAlign: 'center',
          margin: 0,
        }}>Visual</p>
      </AnimatedOnScroll>

      {/* Main content: Style guide */}
      <AnimatedOnScroll animation="slideUp" delay={100} duration={600} style={{ width: '100%', maxWidth: '901px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', width: '100%' }}>

          {/* Header: title + body */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_POPPINS,
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '1.2px',
              color: '#8a8a8a',
              margin: 0,
            }}>Style guide</p>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#212121',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              The visual design system for Lexi emphasizes a modern, clean aesthetic that supports confidence and reduces cognitive load. Colors, typography, and components were carefully selected to create a supportive learning environment.
            </p>
          </div>

          {/* Typography + scale side by side */}
          <div style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'flex-start',
            width: '100%',
            flexDirection: isMobile ? 'column' : 'row',
          }}>
            {/* Left: Karla specimen */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              flex: '1 0 0',
              minWidth: 0,
              position: 'relative',
            }}>
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

              {/* Big "Aa" */}
              <p style={{
                fontFamily: FONT_KARLA,
                fontSize: '200px',
                fontWeight: 600,
                lineHeight: 1.4,
                letterSpacing: '10px',
                color: '#ececec',
                margin: 0,
              }}>Aa</p>

              {/* "Karla" label — absolutely positioned over the Aa */}
              <p style={{
                fontFamily: FONT_POPPINS,
                fontSize: '24px',
                fontWeight: 500,
                lineHeight: 1.3,
                letterSpacing: '1.2px',
                color: '#595959',
                margin: '-200px 0 0 0',
              }}>Karla</p>

              {/* Sample text */}
              <p style={{
                fontFamily: FONT_KARLA,
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
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
              flex: '1 0 0',
              minWidth: 0,
            }}>
              {TYPE_ROWS.map(({ label, name, font, size, weight, lineHeight }) => (
                <div key={name} style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', width: '100%' }}>
                  {/* Label + name */}
                  <div style={{ flex: '1 0 0', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <p style={{
                      fontFamily: FONT_MONTSERRAT,
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '28px',
                      letterSpacing: '0.8px',
                      color: '#8c8c8c',
                      margin: 0,
                    }}>{label}</p>
                    <p style={{
                      fontFamily: font,
                      fontSize: size,
                      fontWeight: weight,
                      lineHeight,
                      color: '#363636',
                      margin: 0,
                    }}>{name}</p>
                  </div>
                  {/* Example */}
                  <div style={{ flex: '1 0 0', minWidth: 0 }}>
                    <p style={{
                      fontFamily: font,
                      fontSize: size,
                      fontWeight: weight,
                      lineHeight,
                      color: '#363636',
                      margin: 0,
                    }}>Hello there</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Color palette row */}
          <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-start', width: '100%', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
            {COLORS.map(({ bg, label, width }) => (
              <div key={label} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                alignItems: 'center',
                flex: width ? '0 0 auto' : '1 0 0',
                width: isMobile ? 'auto' : (width || undefined),
                minWidth: 0,
              }}>
                <div style={{
                  width: '100%',
                  height: '76px',
                  backgroundColor: bg,
                  borderRadius: '24px',
                  flexShrink: 0,
                }} />
                <p style={{ ...labelStyle, whiteSpace: 'nowrap', fontSize: '13px' }}>{label}</p>
              </div>
            ))}
          </div>

        </div>
      </AnimatedOnScroll>
    </section>
  )
}

export default LexiVisual
