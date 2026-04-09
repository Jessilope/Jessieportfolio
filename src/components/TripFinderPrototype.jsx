import { useEffect, useRef } from 'react'
import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const VIDEO_1 = '/assets/images/tripfinder/videos/Home-prototype .mp4'
const VIDEO_2 = '/assets/images/tripfinder/videos/Dark-light-prototype.mp4'

const PHONE_W = 244
const PHONE_H = 504

// ── Phone mockup (Lexi-style) ─────────────────────────────────────────────────

const PhoneMockup = ({ src, scale, animDelay = 200 }) => {
  const pw     = PHONE_W * scale
  const ph     = PHONE_H * scale
  const radius = (36 / 244) * pw
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
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

// ── Full-width video player (TuCredit-style) ──────────────────────────────────

const VideoPlayer = ({ src, animDelay = 200 }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
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
        backgroundColor: '#e8e8ea',
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

// ── Section text ──────────────────────────────────────────────────────────────

const SectionText = ({ subtitle, body, isMobile, titleDelay = 80, bodyDelay = 200 }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
    <AnimatedOnScroll animation="slideUp" duration={600} delay={titleDelay}>
      <p style={{
        fontFamily: FONT_HEADING,
        fontSize: isMobile ? '20px' : '24px',
        fontWeight: 500,
        lineHeight: 1.3,
        letterSpacing: '1.2px',
        color: '#8d8d99',
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
        color: '#313248',
        margin: 0,
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
      }}>{body}</p>
    </AnimatedOnScroll>
  </div>
)

// ── Main component ────────────────────────────────────────────────────────────

const TripFinderPrototype = () => {
  const { isMobile } = useResponsive()
  const scale = isMobile ? 0.75 : 1

  const rowStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '32px' : '56px',
    width: '100%',
    maxWidth: '903px',
  }

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
    width: '100%',
    maxWidth: '903px',
  }

  return (
    <section style={{
      backgroundColor: '#fffefa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '64px' : '128px',
      paddingBottom: isMobile ? '32px' : '64px',
      width: '100%',
      boxSizing: 'border-box',
      gap: isMobile ? '48px' : '64px',
    }}>

      {/* Title + description */}
      <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%', maxWidth: '903px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', width: '100%' }}>
          <p style={{
            fontFamily: FONT_HEADING, fontSize: isMobile ? '24px' : '32px',
            fontWeight: 500, lineHeight: 1.3, color: '#5D5F98',
            textAlign: 'center', margin: 0, width: '100%',
          }}>Prototype</p>
          <p style={{
            fontFamily: FONT_BODY, fontSize: isMobile ? '14px' : '16px',
            fontWeight: 300, lineHeight: 1.6, letterSpacing: '0.8px',
            color: '#313248', margin: 0, width: '100%',
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>
            The prototype connects the key screens to demonstrate navigation, transitions, and visual consistency across the experience. At this stage, the focus was on how components behave together, how users move between sections, and how light and dark modes adapt across the interface.
          </p>
        </div>
      </AnimatedOnScroll>

      {/* Row 1: Home Overview — text left + phone right (Lexi-style) */}
      <div style={rowStyle}>
        <SectionText
          subtitle="Home Overview"
          body="A home experience tailored to women who travel with confidence and curiosity. Tripfinder adapts to your vibe—forest, city, beach—creating a personalized journey."
          isMobile={isMobile}
          titleDelay={80}
          bodyDelay={200}
        />
        <PhoneMockup src={VIDEO_1} scale={scale} animDelay={150} />
      </div>

      {/* Section 2: Dark & Light Mode — full-width (TuCredit-style) */}
      <div style={sectionStyle}>
        <SectionText
          subtitle="Dark & Light Mode"
          body="Responsive behavior built for flexibility across every screen. The interface adapts seamlessly between dark and light themes, offering a comfortable experience in any environment."
          isMobile={isMobile}
        />
        <VideoPlayer src={VIDEO_2} animDelay={150} />
      </div>

    </section>
  )
}

export default TripFinderPrototype
