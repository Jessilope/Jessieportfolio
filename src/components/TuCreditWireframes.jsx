import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const wireframeSrc = '/assets/images/tucredit/wireframe-all.png'

const TuCreditWireframes = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefb',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '64px' : '118px',
      paddingBottom: isMobile ? '32px' : '48px',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '32px',
        alignItems: 'center', width: '100%', maxWidth: '902px',
      }}>

        {/* ── Header ───────────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING, fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500, lineHeight: 1.3, letterSpacing: '1.2px',
              color: '#8a8a8a', margin: 0,
            }}>Wireframes</p>
            <p style={{
              fontFamily: FONT_BODY, fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300, lineHeight: 1.6, letterSpacing: '0.8px',
              color: '#5b5b5b', margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
            }}>
              I started by mapping out a low-fidelity user flow to visualize the main steps of the mortgage process before designing high-fidelity screens. With the design principles defined, This low-fidelity wireframes establish structure, content hierarchy, and user flow. The focus at this stage was on organizing information in a way that feels clear and guided.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── Wireframe images ─────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start', width: '100%' }}>

            {/* Row 1 — two images side by side */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '16px' : '48px',
              alignItems: isMobile ? 'center' : 'flex-start',
              justifyContent: 'center',
              width: '100%',
            }}>
              {/* Wireframe 1 — top portion */}
              <div style={{
                flex: isMobile ? 'none' : '1 1 0',
                width: isMobile ? '100%' : undefined,
                maxWidth: '421px',
                aspectRatio: '421 / 498',
                borderRadius: isMobile ? '20px' : '34px',
                flexShrink: 0,
                overflow: 'hidden',
                position: 'relative',
                opacity: 0.5,
              }}>
                <img
                  src={wireframeSrc}
                  alt="Wireframe 1"
                  style={{
                    position: 'absolute',
                    width: '100.07%',
                    height: '289.64%',
                    top: '0%',
                    left: '-0.04%',
                    maxWidth: 'none',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Wireframe 2 — mid portion */}
              <div style={{
                flex: isMobile ? 'none' : '1 1 0',
                width: isMobile ? '100%' : undefined,
                maxWidth: '425px',
                aspectRatio: '425 / 502',
                borderRadius: isMobile ? '20px' : '34px',
                flexShrink: 0,
                overflow: 'hidden',
                position: 'relative',
                opacity: 0.5,
              }}>
                <img
                  src={wireframeSrc}
                  alt="Wireframe 2"
                  style={{
                    position: 'absolute',
                    width: '100.07%',
                    height: '289.64%',
                    top: '-107.16%',
                    left: '-1.09%',
                    maxWidth: 'none',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>

            {/* Row 2 — single centered image */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: '100%',
            }}>
              <div style={{
                width: '100%',
                maxWidth: '515px',
                aspectRatio: '515 / 384',
                borderRadius: isMobile ? '25px' : '50px',
                flexShrink: 0,
                overflow: 'hidden',
                position: 'relative',
                opacity: 0.6,
              }}>
                <img
                  src={wireframeSrc}
                  alt="Wireframe 3"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '458.68%',
                    top: '-358.68%',
                    left: '0',
                    maxWidth: 'none',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>

          </div>
        </AnimatedOnScroll>

      </div>
    </div>
  )
}

export default TuCreditWireframes
