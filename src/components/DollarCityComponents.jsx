import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const componentsImage = '/assets/images/dollarcity/components.png'

const DollarCityComponents = () => {
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
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '903px',
      }}>

        {/* ── Title + body ─────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '1.2px',
              color: '#8a8a8a',
              margin: 0,
            }}>Component set</p>
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
              When defining the visual style, I kept in mind that Dollarcity app had to be modern, organic and intuitive. To create an interface that stays in the background and lets the products take the lead. Dollar City shoppers focus on value and clarity, so the design needed to feel simple, familiar, and unobtrusive.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── Components image ─────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          <div style={{
            width: isMobile ? '100%' : '771px',
            height: isMobile ? 'auto' : '601px',
            position: 'relative',
            margin: '0 auto',
          }}>
            <img
              src={componentsImage}
              alt="Dollar City app components"
              style={{
                position: isMobile ? 'relative' : 'absolute',
                inset: isMobile ? undefined : 0,
                width: '100%',
                height: isMobile ? 'auto' : '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </AnimatedOnScroll>

      </div>
    </div>
  )
}

export default DollarCityComponents
