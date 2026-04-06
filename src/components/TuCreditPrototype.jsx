import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const mockup1 = '/assets/images/tucredit/mockup-1.png'
const mockup2 = '/assets/images/tucredit/mockup-2.png'
const mockup3 = '/assets/images/tucredit/mockup-3.png'
const mockup4 = '/assets/images/tucredit/mockup-4.png'

// Stripe items — from Figma node 2821:6615
// Each item: { src, w, h, radius, img: {w,h,l,t} | null (= object-fit:cover) }
const STRIPE_DATA = [
  { src: mockup2, w: 423, h: 587, radius: 6,
    img: { w: '101.59%', h: '304.31%', l: '-0.72%', t: '0' } },
  { src: mockup1, w: 427, h: 510, radius: 15,
    img: { w: '100.93%', h: '354.73%', l: '-0.57%', t: '-115.77%' } },
  { src: mockup3, w: 375, h: 547, radius: 15,
    img: { w: '100%', h: '139.67%', l: '0', t: '-5.24%' } },
  { src: mockup4, w: 497, h: 519, radius: 15,
    img: null },
]

// Keyframe styles injected once
const KEYFRAMES = `
  @keyframes stripeLeft {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes stripeRight {
    from { transform: translateX(-50%); }
    to   { transform: translateX(0); }
  }
`

// Duplicated items for seamless infinite loop
const StripeTrack = ({ reverse = false, scale = 1 }) => {
  const items = [...STRIPE_DATA, ...STRIPE_DATA]
  const anim = reverse
    ? `stripeRight 32s linear infinite`
    : `stripeLeft 28s linear infinite`

  return (
    <div style={{ overflow: 'hidden', width: '100%', flexShrink: 0 }}>
      <div style={{
        display: 'flex',
        gap: `${24 * scale}px`,
        animation: anim,
        width: 'fit-content',
        willChange: 'transform',
      }}>
        {items.map((m, i) => (
          <div key={i} style={{
            width: `${m.w * scale}px`,
            height: `${m.h * scale}px`,
            borderRadius: `${m.radius}px`,
            overflow: 'hidden',
            position: 'relative',
            flexShrink: 0,
          }}>
            {m.img ? (
              <img src={m.src} alt="" style={{
                position: 'absolute',
                width: m.img.w,
                height: m.img.h,
                left: m.img.l,
                top: m.img.t,
                maxWidth: 'none',
                pointerEvents: 'none',
                display: 'block',
              }} />
            ) : (
              <img src={m.src} alt="" style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                maxWidth: 'none',
                pointerEvents: 'none',
                display: 'block',
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const TuCreditPrototype = () => {
  const { isMobile } = useResponsive()
  const scale = isMobile ? 0.45 : 1

  return (
    <div id="prototype" style={{
      backgroundColor: '#fffefa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '64px' : '128px',
      paddingBottom: isMobile ? '32px' : '64px',
      width: '100%',
      flexShrink: 0,
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>
      <style>{KEYFRAMES}</style>

      <div style={{
        display: 'flex', flexDirection: 'column', gap: isMobile ? '32px' : '48px',
        alignItems: 'center', width: '100%', maxWidth: '903px',
      }}>

        {/* Title + description */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING, fontSize: isMobile ? '24px' : '32px',
              fontWeight: 500, lineHeight: 1.3, color: '#5D5F98',
              textAlign: 'center', margin: 0, width: '100%',
            }}>Prototype</p>
            <p style={{
              fontFamily: FONT_BODY, fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300, lineHeight: 1.6, letterSpacing: '0.8px',
              color: '#212121', margin: 0, width: '100%',
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
            }}>
              The prototype brings the experience together by connecting screens into a clear and guided flow. At this stage, the focus was on demonstrating how users move from understanding mortgage concepts to exploring requirements and evaluating loan options.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* Stripe — scrolls left */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          <StripeTrack reverse={false} scale={scale} />
        </AnimatedOnScroll>

      </div>
    </div>
  )
}

export default TuCreditPrototype
