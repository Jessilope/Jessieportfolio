import { useState, useEffect } from 'react'
import { colors } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { documents } from '../assets'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`

// ── Flip-clock hero title ─────────────────────────────────────────────────────
const FLIP_WORDS = ['Scalable Products', 'Intelligent Systems', 'AI Solutions']

const FlipHeroTitle = ({ isMobile }) => {
  const [wordIdx, setWordIdx]         = useState(0)
  const [text, setText]               = useState('')
  const [isDeleting, setIsDeleting]   = useState(false)
  const [cursorOn, setCursorOn]       = useState(true)

  // Blinking cursor
  useEffect(() => {
    const blink = setInterval(() => setCursorOn(v => !v), 530)
    return () => clearInterval(blink)
  }, [])

  // Typewriter logic
  useEffect(() => {
    const current = FLIP_WORDS[wordIdx]

    if (!isDeleting && text.length < current.length) {
      const t = setTimeout(() => setText(current.slice(0, text.length + 1)), 110)
      return () => clearTimeout(t)
    }
    if (!isDeleting && text.length === current.length) {
      const t = setTimeout(() => setIsDeleting(true), 2200)
      return () => clearTimeout(t)
    }
    if (isDeleting && text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), 65)
      return () => clearTimeout(t)
    }
    if (isDeleting && text.length === 0) {
      setIsDeleting(false)
      setWordIdx(prev => (prev + 1) % FLIP_WORDS.length)
    }
  }, [text, isDeleting, wordIdx])

  const fontSize      = isMobile ? 'clamp(26px, 8vw, 42px)' : '68px'
  const letterSpacing = isMobile ? 'clamp(1px, 0.5vw, 2px)' : '3.4px'
  const strokeWidth   = isMobile ? '1px'  : '2px'
  const textStyle = {
    fontFamily: `'Poppins', sans-serif`,
    fontSize,
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing,
    margin: 0,
    whiteSpace: 'nowrap',
  }

  return (
    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-start', gap: isMobile ? '0px' : '16px', flexWrap: 'nowrap' }}>
      {/* Static first word */}
      <p style={{ ...textStyle, color: '#313248', fontWeight: 800 }}>Building</p>

      {/* Typed word + cursor */}
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <p style={{
          ...textStyle,
          color: 'transparent',
          WebkitTextStroke: `${strokeWidth} #313248`,
          minWidth: '4px',
        }}>
          {text}
        </p>
        <span style={{
          ...textStyle,
          color: '#313248',
          opacity: cursorOn ? 1 : 0,
          userSelect: 'none',
          marginLeft: '3px',
        }}>|</span>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────

const RightArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M13 6L19 12L13 18" stroke="#f8f9fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3V15M12 15L8 11M12 15L16 11" stroke="#5D5F98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17" stroke="#5D5F98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Primary (Let's talk) button with hover blob effect
const TalkButton = ({ children, onClick, isMobile, isTablet }) => {
  const [hovered, setHovered] = useState(false)
  const padding = isMobile ? '12px 16px' : isTablet ? '14px 16px' : '16px 24px'
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding,
        backgroundColor: '#5d5f98',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span style={{
        position: 'absolute',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.25)',
        transform: hovered ? 'scale(4.5)' : 'scale(0)',
        transition: 'transform 0.65s ease',
        pointerEvents: 'none',
      }} />
      <p style={{
        fontFamily: FONT_BODY,
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        color: '#f8f9fa',
        margin: 0,
        whiteSpace: 'nowrap',
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
        position: 'relative',
        zIndex: 1,
      }}>
        {children}
      </p>
      <span style={{ position: 'relative', zIndex: 1, display: 'flex' }}>
        <RightArrowIcon />
      </span>
    </button>
  )
}

// Secondary (Download CV) button with hover blob effect
const DownloadButton = ({ href, isMobile, isTablet }) => {
  const [hovered, setHovered] = useState(false)
  const padding = isMobile ? '12px 16px' : isTablet ? '14px 16px' : '16px 24px'
  return (
    <a href={href} download style={{ textDecoration: 'none' }}>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding,
          backgroundColor: '#eaebf2',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <span style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'rgba(93,95,152,0.15)',
          transform: hovered ? 'scale(4.5)' : 'scale(0)',
          transition: 'transform 0.65s ease',
          pointerEvents: 'none',
        }} />
        <p style={{
          fontFamily: FONT_BODY,
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '24px',
          color: '#5d5f98',
          margin: 0,
          whiteSpace: 'nowrap',
          fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          position: 'relative',
          zIndex: 1,
        }}>
          Download CV
        </p>
        <span style={{ position: 'relative', zIndex: 1, display: 'flex' }}>
          <DownloadIcon />
        </span>
      </button>
    </a>
  )
}

const Hero = () => {
  const { isMobile, isTablet } = useResponsive()

  const headingAnim = useScrollAnimation({ threshold: 0.2 })
  const bodyAnim    = useScrollAnimation({ threshold: 0.2 })
  const btnsAnim    = useScrollAnimation({ threshold: 0.2 })

  return (
    <section
      id="landing"
      style={{
        backgroundColor: colors.backgrounds.main,
        width: '100%',
        height: '100vh',
        minHeight: isMobile ? '560px' : '560px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
        paddingTop:    isMobile ? '86px'  : '112px',
        paddingLeft:   isMobile ? '24px'  : '96px',
        paddingRight:  isMobile ? '24px'  : '96px',
        paddingBottom: '0',
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        alignItems: 'flex-start',
        paddingTop: '24px',
        paddingBottom: '24px',
        width: '100%',
        maxWidth: '1090px',
        margin: '0 auto',
      }}>
        {/* Heading + body */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'flex-start',
          width: '100%',
        }}>
          {/* Heading */}
          <div
            ref={headingAnim.ref}
            style={{
              opacity: headingAnim.isVisible ? 1 : 0,
              transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <FlipHeroTitle isMobile={isMobile} />
          </div>

          {/* Body */}
          <div
            ref={bodyAnim.ref}
            style={{
              opacity: bodyAnim.isVisible ? 1 : 0,
              transform: bodyAnim.isVisible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1) 150ms, transform 700ms cubic-bezier(0.4, 0, 0.2, 1) 150ms',
            }}
          >
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '16px' : '18px',
              fontWeight: 300,
              lineHeight: 1.5,
              letterSpacing: '0.9px',
              color: '#495564',
              margin: 0,
              width: isMobile ? '100%' : '715px',
              maxWidth: '100%',
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              I create user-centered solutions combining creativity and strategic thinking to craft intuitive and impactful digital experiences.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          ref={btnsAnim.ref}
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            flexWrap: 'wrap',
            opacity: btnsAnim.isVisible ? 1 : 0,
            transform: btnsAnim.isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1) 300ms, transform 700ms cubic-bezier(0.4, 0, 0.2, 1) 300ms',
          }}
        >
          <TalkButton isMobile={isMobile} isTablet={isTablet} onClick={() => {
            window.location.href = 'mailto:ale.mogollon06@gmail.com'
          }}>
            Let´s talk
          </TalkButton>
          <DownloadButton href={documents.cv} isMobile={isMobile} isTablet={isTablet} />
        </div>
      </div>

      {/* Scroll-down arrow */}
      <style>{`
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0);    }
          50%       { transform: translateY(10px); }
        }
      `}</style>
      <div style={{
        position: 'absolute',
        bottom: isMobile ? '28px' : '36px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        animation: 'bounceDown 1.8s ease-in-out infinite',
        opacity: 0.55,
        cursor: 'pointer',
      }}>
        <svg width={isMobile ? '28' : '32'} height={isMobile ? '28' : '32'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="#5d5f98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg width={isMobile ? '28' : '32'} height={isMobile ? '28' : '32'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="#5d5f98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
