import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const wireframesImage = '/assets/images/dollarcity/wireframes.png'

// ── Wireframe image data from Figma (node 1829:4972)
// Each entry: { src, outerW, outerH, ml, mt, rotate, skewX, imgW, imgH }
// All values in px, matching Figma exactly
const FRAMES = [
  // wireframe 1 — leftmost top
  { src: '/assets/images/dollarcity/wireframe-1.png', outerW: 287.489, outerH: 409.454, ml: 0,       mt: 0,       rotate: 19.93,  skewX: -0.02, imgW: 170.114, imgH: 373.891 },
  // wireframe 2 — second top
  { src: '/assets/images/dollarcity/wireframe-2.png', outerW: 280.737, outerH: 388.838, ml: 283.16,  mt: 0.02,    rotate: 19.93,  skewX: -0.02, imgW: 171.003, imgH: 351.638 },
  // wireframe 3 — third top
  { src: '/assets/images/dollarcity/wireframe-3.png', outerW: 279.927, outerH: 388.356, ml: 527.46,  mt: 0.37,    rotate: 20.12,  skewX: -0.01, imgW: 169.232, imgH: 351.618 },
  // wireframe 4 — leftmost bottom
  { src: '/assets/images/dollarcity/wireframe-4.png', outerW: 250.541, outerH: 346.38,  ml: 90.13,   mt: 316.57,  rotate: 19.98,  skewX: -0.02, imgW: 152.626, imgH: 313.108 },
  // wireframe 5 — middle bottom
  { src: '/assets/images/dollarcity/wireframe-5.png', outerW: 250.339, outerH: 347.608, ml: 378.35,  mt: 335.32,  rotate: 19.98,  skewX: -0.02, imgW: 151.826, imgH: 314.707 },
  // wireframe 6 — rightmost bottom
  { src: '/assets/images/dollarcity/wireframe-6.png', outerW: 277.902, outerH: 412.898, ml: 623.1,   mt: 246.6,   rotate: 19.98,  skewX: -0.46, imgW: 152.64,  imgH: 384.974 },
]

// Total bounding box: rightmost frame ends at 623.1 + 277.902 ≈ 901px wide
// Tallest stack: mt 335.32 + outerH 347.608 ≈ 683px tall
const GRID_W = 901
const GRID_H = 683

const DollarCityWireframes = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '64px' : '112px',
      paddingBottom: isMobile ? '32px' : '48px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        alignItems: 'center',
        width: '100%',
        maxWidth: '901px',
      }}>

        {/* ── Title + body ──────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '1.2px',
              color: '#8a8a8a',
              margin: 0,
            }}>Wireframes</p>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#212121',
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
              margin: 0,
            }}>
              With the information architecture defined and the OOUX method in place, I translated ideas into low-fidelity wireframes to validate structure, flow, and hierarchy before focusing on visual details.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── Wireframes grid ──────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          {isMobile ? (
            <img
              src={wireframesImage}
              alt="Wireframes"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          ) : (
            /* Inline-grid that stacks all frames on row-1 / col-1,
               each positioned via marginLeft + marginTop to replicate Figma */
            <div style={{
              display: 'inline-grid',
              gridTemplateColumns: 'max-content',
              gridTemplateRows: 'max-content',
              width: `${GRID_W}px`,
              height: `${GRID_H}px`,
              position: 'relative',
            }}>
              {FRAMES.map(({ src, outerW, outerH, ml, mt, rotate, skewX, imgW, imgH }, i) => (
                <div
                  key={i}
                  style={{
                    gridColumn: 1,
                    gridRow: 1,
                    width: `${outerW}px`,
                    height: `${outerH}px`,
                    marginLeft: `${ml}px`,
                    marginTop: `${mt}px`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ transform: `rotate(${rotate}deg) skewX(${skewX}deg)` }}>
                    <div style={{ width: `${imgW}px`, height: `${imgH}px`, position: 'relative' }}>
                      <img
                        src={src}
                        alt={`Wireframe ${i + 1}`}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: 0.3,
                          pointerEvents: 'none',
                          maxWidth: 'none',
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </AnimatedOnScroll>

      </div>
    </div>
  )
}

export default DollarCityWireframes
