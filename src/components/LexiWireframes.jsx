import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

// Figma order: 1, 5, 4, 2, 3 — with Figma pixel widths for proportional flex scaling
const FRAMES = [
  { src: '/assets/images/lexi/wireframes/wireframe-1.png', w: 173.65,  h: 661.63  },
  { src: '/assets/images/lexi/wireframes/wireframe-5.png', w: 174.814, h: 357.477 },
  { src: '/assets/images/lexi/wireframes/wireframe-4.png', w: 161.839, h: 352.551 },
  { src: '/assets/images/lexi/wireframes/wireframe-2.png', w: 161.895, h: 370.193 },
  { src: '/assets/images/lexi/wireframes/wireframe-3.png', w: 161.802, h: 589.28  },
]

// Mobile: same order, aspect ratios from Figma mobile spec
const FRAMES_MOBILE = [
  { src: '/assets/images/lexi/wireframes/wireframe-1.png', w: 62, h: 238 },
  { src: '/assets/images/lexi/wireframes/wireframe-5.png', w: 63, h: 129 },
  { src: '/assets/images/lexi/wireframes/wireframe-4.png', w: 58, h: 127 },
  { src: '/assets/images/lexi/wireframes/wireframe-2.png', w: 58, h: 134 },
  { src: '/assets/images/lexi/wireframes/wireframe-3.png', w: 58, h: 212 },
]

const LexiWireframes = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>

      {/* Purple card */}
      <AnimatedOnScroll animation="slideUp" duration={600} style={{ width: '100%' }}>
        <div style={{
          backgroundColor: '#5d5f98',
          borderRadius: '12px',
          width: '100%',
          paddingTop: '64px',
          paddingBottom: '64px',
          paddingLeft: isMobile ? '24px' : '64px',
          paddingRight: isMobile ? '24px' : '64px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          boxSizing: 'border-box',
        }}>

          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '900px' }}>
            <p style={{
              fontFamily: FONT_POPPINS,
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '1.2px',
              color: '#e8e8ea',
              margin: 0,
            }}>Wireframes </p>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#f8f9fa',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              With the information architecture and core interactions defined, I translated the main concepts into low-fidelity wireframes to validate structure, user flow, and content hierarchy. This step helped ensure clarity and consistency across the experience before moving into visual design.
            </p>
          </div>

          {/* Wireframes */}
          {isMobile ? (
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '6px',
              width: '100%',
            }}>
              {FRAMES_MOBILE.map(({ src, w, h }, i) => (
                <div key={i} style={{
                  flex: `${w} 1 0`,
                  minWidth: 0,
                  aspectRatio: `${w}/${h}`,
                  overflow: 'hidden',
                  borderRadius: '3px',
                }}>
                  <img
                    src={src}
                    alt={`Wireframe ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', pointerEvents: 'none' }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start',
              width: '100%',
              maxWidth: '900px',
            }}>
              {FRAMES.map(({ src, w }, i) => (
                <img
                  key={i}
                  alt={`Wireframe ${i + 1}`}
                  src={src}
                  style={{
                    flex: `${w} 1 0`,
                    minWidth: 0,
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                    borderRadius: '6px',
                  }}
                />
              ))}
            </div>
          )}

        </div>
      </AnimatedOnScroll>
    </section>
  )
}

export default LexiWireframes

