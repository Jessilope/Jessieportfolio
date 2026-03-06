import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const mockup1 = '/assets/images/dollarcity/prototype-1.png'
const mockup2 = '/assets/images/dollarcity/prototype-2.png'
const mockup3 = '/assets/images/dollarcity/prototype-3.png'

const DollarCityPrototype = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefa',
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
        width: '100%',
        maxWidth: '903px',
      }}>

        {/* ── Title + body ─────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '24px' : '70px',
            alignItems: 'center',
            width: '100%',
          }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '24px' : '32px',
              fontWeight: 500,
              lineHeight: 1.3,
              color: '#5D5F98',
              textAlign: 'center',
              width: '100%',
              margin: 0,
            }}>Prototype</p>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#212121',
              width: '100%',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              With the structure, visual direction, and design principles in place, I transformed the wireframes into a high-fidelity, interactive prototype. The prototype focuses on validating the end-to-end shopping flow, allowing users to navigate through key actions such as browsing categories, viewing product details, adding items to the cart, and completing the checkout process. Interactions and transitions were designed to feel natural and predictable, reinforcing clarity and user confidence
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── Mockup images ────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          {isMobile ? (
            /* Mobile: stack images vertically, full width */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', width: '100%' }}>
              <img src={mockup1} alt="Prototype mockup 1" style={{ width: '100%', maxWidth: '280px', height: 'auto', display: 'block' }} />
              <img src={mockup2} alt="Prototype mockup 2" style={{ width: '100%', maxWidth: '280px', height: 'auto', display: 'block' }} />
              <img src={mockup3} alt="Prototype mockup 3" style={{ width: '100%', maxWidth: '280px', height: 'auto', display: 'block' }} />
            </div>
          ) : (
            /* Desktop: exact Figma crop layout */
            <div style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              width: '100%',
              height: '757px',
            }}>

              {/* Mockup 1 — 264×530, cropped */}
              <div style={{ width: '264px', height: '530px', position: 'relative', flexShrink: 0 }}>
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                  <img
                    src={mockup1}
                    alt="Prototype mockup 1"
                    style={{
                      position: 'absolute',
                      width: '407.08%',
                      height: '152.21%',
                      top: '-20.78%',
                      left: '-153.18%',
                      maxWidth: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Mockup 2 — 345×700, cropped (tallest, center) */}
              <div style={{ width: '345px', height: '700px', position: 'relative', flexShrink: 0 }}>
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                  <img
                    src={mockup2}
                    alt="Prototype mockup 2"
                    style={{
                      position: 'absolute',
                      width: '300%',
                      height: '111.13%',
                      top: '0',
                      left: '-100%',
                      maxWidth: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Mockup 3 — 253×486, cropped */}
              <div style={{ width: '253px', height: '486px', position: 'relative', flexShrink: 0 }}>
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                  <img
                    src={mockup3}
                    alt="Prototype mockup 3"
                    style={{
                      position: 'absolute',
                      width: '403.8%',
                      height: '157.26%',
                      top: '-23.4%',
                      left: '-153.23%',
                      maxWidth: 'none',
                    }}
                  />
                </div>
              </div>

            </div>
          )}
        </AnimatedOnScroll>

      </div>
    </div>
  )
}

export default DollarCityPrototype
