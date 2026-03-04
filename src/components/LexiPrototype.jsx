import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

const LexiPrototype = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefa',
      width: '100%',
      paddingTop: '128px',
      paddingBottom: '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="slideUp" duration={600} style={{ width: '100%', maxWidth: '897px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', width: '100%' }}>

          {/* Title + body */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '70px', alignItems: 'center', width: '100%' }}>
            <p style={{
              fontFamily: FONT_POPPINS,
              fontSize: isMobile ? '24px' : '32px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '0',
              color: '#5d5f98',
              textAlign: 'center',
              margin: 0,
              width: '100%',
            }}>Prototype</p>

            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#212121',
              margin: 0,
              width: '100%',
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              With the structure, visual direction, and design principles in place, I transformed the wireframes into a high-fidelity, interactive prototype. The prototype focuses on validating the end-to-end shopping flow, allowing users to navigate through key actions such as browsing categories, viewing product details, adding items to the cart, and completing the checkout process. Interactions and transitions were designed to feel natural and predictable, reinforcing clarity and user confidence
            </p>
          </div>

          {/* Mockup 1 — onboarding screens (aspect 915×584) */}
          <div style={{
            width: '100%',
            aspectRatio: '915 / 584',
            position: 'relative',
            flexShrink: 0,
          }}>
            <img
              alt="Lexi onboarding screens"
              src="/assets/images/lexi/prototype-mockup-1.png"
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

          {/* Mockup 2 — app screens (aspect 897×683) */}
          <div style={{
            width: '100%',
            aspectRatio: '897 / 683',
            position: 'relative',
            flexShrink: 0,
          }}>
            <img
              alt="Lexi app screens"
              src="/assets/images/lexi/prototype-mockup-2.png"
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

        </div>
      </AnimatedOnScroll>
    </section>
  )
}

export default LexiPrototype
