import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const mockup1 = '/assets/images/tucredit/mockup-1.png'
const mockup2 = '/assets/images/tucredit/mockup-2.png'
const mockup3 = '/assets/images/tucredit/mockup-3.png'
const mockup4 = '/assets/images/tucredit/mockup-4.png'

const TuCreditPrototype = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefa',
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
        display: 'flex', flexDirection: 'column', gap: '48px',
        alignItems: 'center', width: '100%', maxWidth: '903px',
      }}>

        {/* ── Title + description ──────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING, fontSize: isMobile ? '24px' : '32px',
              fontWeight: 500, lineHeight: 1.3, color: '#5D5F98',
              textAlign: 'center', margin: 0, width: '100%',
            }}>Prototype</p>
            <p style={{
              fontFamily: FONT_BODY, fontSize: isMobile ? '14px' : '16px',
              fontWeight: 400, lineHeight: 1.6, letterSpacing: '0.8px',
              color: '#212121', margin: 0, width: '100%',
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              The prototype brings the experience together by connecting screens into a clear and guided flow. At this stage, the focus was on demonstrating how users move from understanding mortgage concepts to exploring requirements and evaluating loan options.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── Row 1: mockup2 + mockup1 ─────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '24px',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
          }}>
            {/* mockup2 — 423×587, borderRadius 6px, top crop */}
            <div style={{
              width: isMobile ? '100%' : '423px',
              height: isMobile ? 'auto' : '587px',
              borderRadius: '6px',
              overflow: 'hidden',
              position: 'relative',
              flexShrink: 0,
              ...(isMobile && { aspectRatio: '423 / 587' }),
            }}>
              <img src={mockup2} alt="Prototype screen 1" style={{
                position: 'absolute',
                width: '101.59%', height: '304.31%',
                top: '0', left: '-0.72%',
                maxWidth: 'none', pointerEvents: 'none',
              }} />
            </div>

            {/* mockup1 — 427×510, borderRadius 15px, mid crop */}
            <div style={{
              width: isMobile ? '100%' : '427px',
              height: isMobile ? 'auto' : '510px',
              borderRadius: '15px',
              overflow: 'hidden',
              position: 'relative',
              flexShrink: 0,
              ...(isMobile && { aspectRatio: '427 / 510' }),
            }}>
              <img src={mockup1} alt="Prototype screen 2" style={{
                position: 'absolute',
                width: '100.93%', height: '354.73%',
                top: '-115.77%', left: '-0.57%',
                maxWidth: 'none', pointerEvents: 'none',
              }} />
            </div>
          </div>
        </AnimatedOnScroll>

        {/* ── Row 2: mockup3 + mockup4 ─────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={150} duration={700} style={{ width: '100%' }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '24px',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
          }}>
            {/* mockup3 — 375×547, borderRadius 15px */}
            <div style={{
              width: isMobile ? '100%' : '375px',
              height: isMobile ? 'auto' : '547px',
              borderRadius: '15px',
              overflow: 'hidden',
              position: 'relative',
              flexShrink: 0,
              ...(isMobile && { aspectRatio: '375 / 547' }),
            }}>
              <img src={mockup3} alt="Prototype screen 3" style={{
                position: 'absolute',
                width: '100%', height: '139.67%',
                top: '-5.24%', left: '0',
                maxWidth: 'none', pointerEvents: 'none',
              }} />
            </div>

            {/* mockup4 — 497×519, borderRadius 15px, cover */}
            <div style={{
              width: isMobile ? '100%' : '497px',
              height: isMobile ? 'auto' : '519px',
              borderRadius: '15px',
              overflow: 'hidden',
              position: 'relative',
              flexShrink: 0,
              ...(isMobile && { aspectRatio: '497 / 519' }),
            }}>
              <img src={mockup4} alt="Prototype screen 4" style={{
                position: 'absolute',
                inset: 0, width: '100%', height: '100%',
                objectFit: 'cover',
                maxWidth: 'none', pointerEvents: 'none',
              }} />
            </div>
          </div>
        </AnimatedOnScroll>

      </div>
    </div>
  )
}

export default TuCreditPrototype
