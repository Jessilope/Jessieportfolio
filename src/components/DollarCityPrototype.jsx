import { useEffect, useRef } from 'react'
import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const VIDEO_1 = '/assets/images/dollarcity/videos/Video-Prototype-dollarcity.mp4'
const VIDEO_3 = '/assets/images/dollarcity/videos/Video-responsive-design.mp4'

const PHONE_W = 244
const PHONE_H = 504

// ── Phone mockup — video variant (same pattern as LexiPrototype) ──────────────
const PhoneMockupVideo = ({ src, phoneScale, animDelay = 200 }) => {
  const pw      = PHONE_W * phoneScale
  const ph      = PHONE_H * phoneScale
  const radius  = 36 * phoneScale
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

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
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    </AnimatedOnScroll>
  )
}

// ── Wide video block — full-width, no phone frame ────────────────────────────
const WideVideo = ({ src, animDelay = 100 }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <AnimatedOnScroll animation="fadeIn" duration={800} delay={animDelay} style={{ width: '100%' }}>
      <div style={{
        width: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
      }}>
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </AnimatedOnScroll>
  )
}

// ── Row text block ────────────────────────────────────────────────────────────
const RowText = ({ subtitle, body, isMobile, titleDelay = 0, bodyDelay = 150 }) => (
  <div style={{
    flex: '1 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    minWidth: 0,
  }}>
    <AnimatedOnScroll animation="slideUp" duration={600} delay={titleDelay}>
      <p style={{
        fontFamily: FONT_HEADING,
        fontSize: isMobile ? '20px' : '24px',
        fontWeight: 500,
        lineHeight: 1.3,
        letterSpacing: '1.2px',
        color: '#8a8a8a',
        margin: 0,
      }}>{subtitle}</p>
    </AnimatedOnScroll>

    <AnimatedOnScroll animation="slideUp" duration={600} delay={bodyDelay}>
      <p style={{
        fontFamily: FONT_BODY,
        fontSize: isMobile ? '14px' : '16px',
        fontWeight: 300,
        lineHeight: 1.6,
        letterSpacing: '0.8px',
        color: '#212121',
        margin: 0,
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
      }}>{body}</p>
    </AnimatedOnScroll>
  </div>
)

// ── Main component ────────────────────────────────────────────────────────────
const DollarCityPrototype = () => {
  const { isMobile } = useResponsive()
  const phoneScale = isMobile ? 0.75 : 1

  const rowStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '32px' : '56px',
    width: '100%',
    maxWidth: '897px',
  }

  return (
    <div style={{
      backgroundColor: '#fffefa',
      width: '100%',
      paddingTop:    isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      paddingLeft:   isMobile ? '24px' : '96px',
      paddingRight:  isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      boxSizing: 'border-box',
    }}>

      {/* ── Header block ─────────────────────────────────────────────────── */}
      <AnimatedOnScroll animation="slideUp" duration={600} delay={0} style={{ width: '100%', maxWidth: '897px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
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
            margin: 0,
            width: '100%',
          }}>Prototype</p>

          <p style={{
            fontFamily: FONT_BODY,
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#212121',
            margin: 0,
            width: '100%',
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>
            With the structure, visual direction, and design principles in place, I transformed the wireframes into a high-fidelity, interactive prototype. The prototype focuses on validating the end-to-end shopping flow, allowing users to navigate through key actions such as browsing categories, viewing product details, adding items to the cart, and completing the checkout process. Interactions and transitions were designed to feel natural and predictable, reinforcing clarity and user confidence.
          </p>
        </div>
      </AnimatedOnScroll>

      {/* ── Row 1 — text left · phone right ──────────────────────────────── */}
      <div style={rowStyle}>
        <RowText
          subtitle="Product Discovery"
          body="An intuitive home screen that guides users through Dollar City's catalogue. Categories and featured products are surfaced clearly, making it easy to explore and find items at a glance."
          isMobile={isMobile}
          titleDelay={80}
          bodyDelay={200}
        />
        <PhoneMockupVideo src={VIDEO_1} phoneScale={phoneScale} animDelay={150} />
      </div>


      {/* ── Row 3 — text only ────────────────────────────────────────────── */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '32px',
        width: '100%',
        maxWidth: '897px',
      }}>
        <RowText
          subtitle="Responsive design"
          body="A responsive system crafted to master Figma tools like local variables and design tokens. With simple drag-and-drop, layouts adapt seamlessly across breakpoints."
          isMobile={isMobile}
          titleDelay={80}
          bodyDelay={200}
        />
        <WideVideo src={VIDEO_3} animDelay={150} />
      </div>

    </div>
  )
}

export default DollarCityPrototype
