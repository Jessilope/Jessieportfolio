import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const informationArchitectureImage = '/assets/images/tucredit/information-architecture.png'

const TuCreditIdeate = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '32px' : '64px',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '64px',
        alignItems: 'center',
        width: '100%',
        maxWidth: '900px',
      }}>

        {/* ── Title + body ─────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '24px' : '32px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: 0,
              color: '#5D5F98',
              textAlign: 'center',
              width: '100%',
              margin: 0,
            }}>Ideate</p>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#212121',
              width: '100%',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              At this stage, the challenge was clear: people don't avoid mortgage loans because of lack of interest, but because the process feels complex, intimidating, and unclear. Ideation focused on rethinking the experience as a guided journey.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── Information Architecture image ───────── */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '33px', alignItems: 'center', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '18px' : '20px',
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '1px',
              color: '#8a8a8a',
              width: isMobile ? '100%' : '902px',
              margin: 0,
            }}>Information Architecture</p>
            <div style={{
              aspectRatio: '2032 / 768',
              position: 'relative',
              width: '100%',
              flexShrink: 0,
            }}>
              <img
                src={informationArchitectureImage}
                alt="Information Architecture diagram"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.7,
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </AnimatedOnScroll>

      </div>
    </div>
  )
}

export default TuCreditIdeate
