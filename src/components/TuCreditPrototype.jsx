import { useEffect, useRef } from 'react'
import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const VIDEO_HOME      = '/assets/images/tucredit/videos/Home-prototype.mp4'
const VIDEO_TABS      = '/assets/images/tucredit/videos/navegation-tabs.mp4'
const VIDEO_OVERLAYS  = '/assets/images/tucredit/videos/Overlays.mp4'

// ── Video player ──────────────────────────────────────────────────────────────

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

const SectionText = ({ subtitle, body, isMobile }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
    <AnimatedOnScroll animation="slideUp" duration={600} delay={80}>
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
    <AnimatedOnScroll animation="slideUp" duration={600} delay={200}>
      <div style={{
        fontFamily: FONT_BODY,
        fontSize: isMobile ? '14px' : '16px',
        fontWeight: 300,
        lineHeight: 1.6,
        letterSpacing: '0.8px',
        color: '#313248',
        margin: 0,
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
      }}>{body}</div>
    </AnimatedOnScroll>
  </div>
)

const TuCreditPrototype = () => {
  const { isMobile } = useResponsive()

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
    width: '100%',
    maxWidth: '903px',
  }

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
      gap: isMobile ? '48px' : '64px',
    }}>

      {/* ── Title + description ────────────────────────────────── */}
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
            The prototype brings the experience together by connecting screens into a clear and guided flow. At this stage, the focus was on demonstrating how users move from understanding mortgage concepts to exploring requirements and evaluating loan options.
          </p>
        </div>
      </AnimatedOnScroll>

      {/* ── Section 1: Home overview ───────────────────────────── */}
      <div style={sectionStyle}>
        <SectionText
          subtitle="Home overview"
          body="A clear overview of the home experience, designed for simplicity and focus. Key elements are structured to guide users effortlessly through the platform."
          isMobile={isMobile}
        />
        <VideoPlayer src={VIDEO_HOME} animDelay={150} />
      </div>

      {/* ── Section 2: Tabs & Navegation ──────────────────────── */}
      <div style={sectionStyle}>
        <SectionText
          subtitle="Tabs & Navegation"
          body="Connected tabs create a smooth and intuitive navigation flow. Each section is easily accessible, enhancing usability and continuity."
          isMobile={isMobile}
        />
        <VideoPlayer src={VIDEO_TABS} animDelay={150} />
      </div>

      {/* ── Section 3: Overlays & Pop-ups ─────────────────────── */}
      <div style={sectionStyle}>
        <SectionText
          subtitle="Overlays & Pop-ups"
          body="They enhance interaction while keeping the interface clean and focused. Dynamic overlays provide additional context without disrupting the experience."
          isMobile={isMobile}
        />
        <VideoPlayer src={VIDEO_OVERLAYS} animDelay={150} />
      </div>

    </div>
  )
}

export default TuCreditPrototype
