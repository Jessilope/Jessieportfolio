import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

// Figma absolute positions within a 900px-wide container (height = 661.63px)
const FRAMES = [
  { src: '/assets/images/lexi/wireframes/wireframe-1.png', left: 0,      top: 0,     w: 173.65, h: 661.63 },
  { src: '/assets/images/lexi/wireframes/wireframe-2.png', left: 184.11, top: 53.63, w: 161.90, h: 370.19 },
  { src: '/assets/images/lexi/wireframes/wireframe-3.png', left: 364.86, top: 0,     w: 161.80, h: 589.28 },
  { src: '/assets/images/lexi/wireframes/wireframe-4.png', left: 547.49, top: 53.68, w: 161.84, h: 352.55 },
  { src: '/assets/images/lexi/wireframes/wireframe-5.png', left: 725.19, top: 26.72, w: 174.81, h: 357.48 },
]

const CANVAS_W = 900
const CANVAS_H = 661.63

const LexiWireframes = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: isMobile ? '64px' : '64px',
      paddingBottom: isMobile ? '32px' : '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="slideUp" duration={600} style={{ width: '100%', maxWidth: '900px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%' }}>

          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_POPPINS,
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
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#212121',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              With the information architecture and core interactions defined, I translated the main concepts into low-fidelity wireframes to validate structure, user flow, and content hierarchy. This step helped ensure clarity and consistency across the experience before moving into visual design.
            </p>
          </div>

          {/* Wireframes: responsive scalable canvas */}
          <div style={{ width: '100%', position: 'relative' }}>
            {/* Aspect-ratio box that scales with parent width */}
            <div style={{ paddingBottom: `${(CANVAS_H / CANVAS_W) * 100}%`, position: 'relative', width: '100%' }}>
              {FRAMES.map(({ src, left, top, w, h }, i) => (
                <img
                  key={i}
                  alt={`Wireframe ${i + 1}`}
                  src={src}
                  style={{
                    position: 'absolute',
                    left: `${(left / CANVAS_W) * 100}%`,
                    top: `${(top / CANVAS_H) * 100}%`,
                    width: `${(w / CANVAS_W) * 100}%`,
                    height: `${(h / CANVAS_H) * 100}%`,
                    objectFit: 'cover',
                    pointerEvents: 'none',
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </AnimatedOnScroll>
    </section>
  )
}

export default LexiWireframes
