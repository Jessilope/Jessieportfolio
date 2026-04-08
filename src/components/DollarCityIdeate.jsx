import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const informationArchitectureImage = '/assets/images/dollarcity/information-architecture.png'

const DollarCityIdeate = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        alignItems: 'center',
        width: '100%',
        maxWidth: '900px',
      }}>

        {/* ── Header block ──────────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', width: '100%' }}>
            {/* Title */}
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '24px' : '32px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '0',
              color: '#5D5F98',
              textAlign: 'center',
              width: '100%',
              margin: 0,
            }}>Ideate</p>

            {/* Body text */}
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#212121',
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
              margin: 0,
              width: '100%',
            }}>
              Special attention was given to features that reinforce trust, such as visible stock availability, simple payment options, and clear feedback at every step. Rather than adding complexity, the ideation phase focused on removing unnecessary steps and aligning the digital experience with how users already shop in physical Dollar City stores.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── Information Architecture ──────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '33px', alignItems: 'center', width: '100%' }}>
            {/* Subtitle */}
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '1.2px',
              color: '#8a8a8a',
              margin: 0,
              width: '100%',
            }}>Information Architecture</p>

            {/* Diagram — aspect ratio 1152:875 */}
            <div style={{ width: '100%', aspectRatio: '1152 / 875', position: 'relative', overflow: 'hidden' }}>
              <img
                src={informationArchitectureImage}
                alt="Information Architecture Diagram"
                style={{ position: 'absolute', width: '100%', height: '100.48%', top: '-0.47%', left: 0, objectFit: 'contain' }}
              />
            </div>
          </div>
        </AnimatedOnScroll>

      </div>
    </section>
  )
}

export default DollarCityIdeate
