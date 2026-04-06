import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const componentsImage = '/assets/images/tucredit/components.png'

const TuCreditComponentSet = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefb',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '64px' : '128px',
      paddingBottom: isMobile ? '32px' : '48px',
      width: '100%',
      flexShrink: 0,
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex', flexDirection: 'column', gap: isMobile ? '32px' : '57px',
        alignItems: 'center', width: '100%', maxWidth: '903px',
      }}>

        {/* ── Text content ─────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '1.2px',
              color: '#8a8a8a',
              margin: 0,
              width: '100%',
            }}>Component set</p>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#212121',
              margin: 0,
              width: '100%',
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              The component system was designed to ensure consistency, clarity, and scalability across the TuCredit experience. Each component follows familiar patterns, helping users feel comfortable and oriented as they move through the flow.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── Components image ─────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          <div style={{
            width: '100%',
            aspectRatio: '1402 / 1298',
            position: 'relative',
            flexShrink: 0,
          }}>
            <img
              src={componentsImage}
              alt="Component set examples"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none',
              }}
            />
          </div>
        </AnimatedOnScroll>

      </div>
    </div>
  )
}

export default TuCreditComponentSet
