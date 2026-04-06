import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

const VIDEO_1 = '/assets/images/lexi/videos/video-portotype.mp4'
const VIDEO_2 = '/assets/images/lexi/videos/Video-prototype-navegación.mp4'

// Phone frame dimensions
const PHONE_W = 244
const PHONE_H = 504

const PhoneMockup = ({ src, phoneScale, animDelay = 250 }) => {
  const pw = PHONE_W * phoneScale
  const ph = PHONE_H * phoneScale
  const radius = 36 * phoneScale

  return (
    <AnimatedOnScroll animation="fadeIn" duration={800} delay={animDelay} style={{ flexShrink: 0 }}>
      <div style={{
        width: `${pw}px`,
        height: `${ph}px`,
        borderRadius: `${radius}px`,
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </AnimatedOnScroll>
  )
}

const TextContent = ({ isMobile, titleDelay = 0, bodyDelay = 180 }) => (
  <div style={{
    flex: '1 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    minWidth: 0,
  }}>
    <AnimatedOnScroll animation="slideUp" duration={600} delay={titleDelay}>
      <p style={{
        fontFamily: FONT_POPPINS,
        fontSize: isMobile ? '32px' : '48px',
        fontWeight: 600,
        lineHeight: 1.4,
        letterSpacing: '2.4px',
        color: '#5d5f98',
        textAlign: 'center',
        margin: 0,
      }}>Prototype</p>
    </AnimatedOnScroll>

    <AnimatedOnScroll animation="slideUp" duration={600} delay={bodyDelay}>
      <p style={{
        fontFamily: FONT_BODY,
        fontSize: isMobile ? '14px' : '16px',
        fontWeight: 300,
        lineHeight: 1.6,
        letterSpacing: '0.8px',
        color: '#22282f',
        margin: 0,
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
      }}>
        With the structure, visual direction, and design principles in place, I transformed the wireframes into a high-fidelity, interactive prototype. The prototype focuses on validating the end-to-end flow, allowing users to navigate through key actions such as browsing, viewing details, and completing the core experience. Interactions and transitions were designed to feel natural and predictable, reinforcing clarity and user confidence.
      </p>
    </AnimatedOnScroll>
  </div>
)

const LexiPrototype = () => {
  const { isMobile } = useResponsive()
  const phoneScale = isMobile ? 0.75 : 1

  const rowStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: isMobile ? '40px' : '56px',
    width: '100%',
    maxWidth: '897px',
  }

  return (
    <section id="prototype" style={{
      backgroundColor: '#fffefa',
      width: '100%',
      paddingTop: '128px',
      paddingBottom: '64px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      boxSizing: 'border-box',
    }}>

      {/* Row 1 — text left, phone right */}
      <div style={rowStyle}>
        <TextContent isMobile={isMobile} titleDelay={0} bodyDelay={180} />
        <PhoneMockup src={VIDEO_1} phoneScale={phoneScale} animDelay={250} />
      </div>

      {/* Row 2 — phone left, text right */}
      <div style={rowStyle}>
        <PhoneMockup src={VIDEO_2} phoneScale={phoneScale} animDelay={150} />
        <TextContent isMobile={isMobile} titleDelay={100} bodyDelay={280} />
      </div>

    </section>
  )
}

export default LexiPrototype
