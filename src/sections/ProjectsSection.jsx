import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from '../components/AnimatedOnScroll'
import { colors } from '../tokens'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`

// Arrow right icon
const ArrowRight = () => (
  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5H12M8 1L12 5L8 9" stroke="#5D5F98" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Arrow icon chip: plain 24px default → 32px #c1c2d9 circle on hover
const CardArrow = ({ active }) => (
  <div style={{
    width: active ? '32px' : '24px',
    height: active ? '32px' : '24px',
    borderRadius: '32px',
    backgroundColor: active ? '#c1c2d9' : 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease',
  }}>
    <ArrowRight />
  </div>
)

// ─── Project data ──────────────────────────────────────────────────────────────
// Positions taken directly from Figma. All cards: 533×379 desktop, 364×319 mobile.
// Mockups use 2-level structure: outer(positioning) → inner(rotation+clip) → img
const PROJECTS = [
  {
    id: 'lexi',
    title: 'Lexi',
    subtitle: 'IA language learning app',
    route: '/lexi',
    cardType: 'phones',
    mockups: [
      { src: '/assets/images/lexi/mockup%201.png',
        outerL: 40.91, outerT: 136.52, outerW: 105.96, outerH: 219.96,
        w: 96.77, h: 216, rotation: 2.46 },
      { src: '/assets/images/lexi/mockup%202.png',
        outerL: 148.5, outerT: 138.5, outerW: 110.9, outerH: 229.34,
        w: 98, h: 224, rotation: -3.34 },
      { src: '/assets/images/lexi/mockup%203.png',
        outerL: 260.32, outerT: 124.91, outerW: 111.22, outerH: 229.17,
        w: 98.87, h: 224, rotation: 3.2 },
      { src: '/assets/images/lexi/mockup%204.png',
        outerL: 372.5, outerT: 124.5, outerW: 123.86, outerH: 240.74,
        w: 102, h: 232, rotation: -5.52 },
    ],
    mobileMockups: [
      { src: '/assets/images/lexi/mockup%201.png',
        outerL: 19.91, outerT: 133.23, outerW: 76.91, outerH: 159.66,
        w: 70.24, h: 156.79, rotation: 2.46 },
      { src: '/assets/images/lexi/mockup%202.png',
        outerL: 98, outerT: 134.9, outerW: 80.59, outerH: 166.23,
        w: 71.24, h: 162.35, rotation: -3.34 },
      { src: '/assets/images/lexi/mockup%203.png',
        outerL: 179.17, outerT: 124.8, outerW: 80.73, outerH: 166.35,
        w: 71.76, h: 162.59, rotation: 3.2 },
      { src: '/assets/images/lexi/mockup%204.png',
        outerL: 260.46, outerT: 124.5, outerW: 90.04, outerH: 174.37,
        w: 74.21, h: 168.01, rotation: -5.52 },
    ],
  },
  {
    id: 'tucredit',
    title: 'Tu credit',
    subtitle: 'Mortgage loans',
    route: '/tucredit',
    cardType: 'wide',
    // Single wide rotated image that scales on hover
    composite: {
      src: '/assets/images/tucredit/card-composite.png',
      rotation: 16.7,
      imgW: '158.02%', imgH: '150.63%', imgL: '-28.52%', imgT: '-25.23%',
      // Desktop outer container
      outerL: 99.72, outerT: 114.59, outerW: 383.52, outerH: 306.28,
      defaultW: 334.58, defaultH: 219.38,
      hoverW:   387.02, hoverH:   253.77,
      // Mobile outer container
      mOuterL: 50.58, mOuterT: 94.59, mOuterW: 280.97, mOuterH: 224.39,
      mDefaultW: 245.12, mDefaultH: 160.72,
      mHoverW:   280.65, mHoverH:   184.02,
    },
  },
  {
    id: 'tripfinder',
    title: 'Tripfinder',
    subtitle: 'Booking trips mobile app',
    route: '/tripfinder',
    cardType: 'phones',
    mockups: [
      { src: '/assets/images/tripfinder/card-4.png',
        outerL: 24.5,   outerT: 148.02, outerW: 129,    outerH: 222.96,
        w: 96.55, h: 210.2, rotation: 9.23 },
      { src: '/assets/images/tripfinder/card-3.png',
        outerL: 151.5,  outerT: 135.6,  outerW: 107,    outerH: 212.8,
        w: 96.56, h: 208.17, rotation: -2.91 },
      { src: '/assets/images/tripfinder/card-2.png',
        outerL: 258.5,  outerT: 153.5,  outerW: 119.62, outerH: 212.56,
        w: 94, h: 202, rotation: 7.52 },
      { src: '/assets/images/tripfinder/card-1.png',
        outerL: 381.32, outerT: 144.46, outerW: 111.18, outerH: 206.89,
        w: 92.59, h: 198.95, rotation: -5.48 },
    ],
    mobileMockups: [
      { src: '/assets/images/tripfinder/card-4.png',
        outerL: 14.5,   outerT: 141.51, outerW: 92.57, outerH: 159.99,
        w: 69.28, h: 150.83, rotation: 9.23 },
      { src: '/assets/images/tripfinder/card-3.png',
        outerL: 105.63, outerT: 132.6,  outerW: 76.78, outerH: 152.7,
        w: 69.29, h: 149.37, rotation: -2.91 },
      { src: '/assets/images/tripfinder/card-2.png',
        outerL: 182.38, outerT: 145.44, outerW: 85.77, outerH: 152.72,
        w: 67.35, h: 145.16, rotation: 7.52 },
      { src: '/assets/images/tripfinder/card-1.png',
        outerL: 270.54, outerT: 138.96, outerW: 79.78, outerH: 148.45,
        w: 66.44, h: 142.76, rotation: -5.48 },
    ],
  },
  {
    id: 'dollarcity',
    title: 'Dollarcity',
    subtitle: 'Shopping mobile app',
    route: '/dollarcity',
    cardType: 'phonecrop',
    mockups: [
      { src: '/assets/images/dollarcity/card-1.png',
        outerL: 71.5,   outerT: 125.5,  outerW: 161.28, outerH: 231.77,
        w: 134, h: 216, rotation: 7.57,
        imgW: '348.03%', imgH: '163.72%', imgL: '-124.02%', imgT: '-26.55%' },
      { src: '/assets/images/dollarcity/card-2.png',
        outerL: 232.5,  outerT: 142.5,  outerW: 116.42, outerH: 229.9,
        w: 108, h: 226, rotation: -2.15,
        imgW: '316.28%', imgH: '119.01%', imgL: '-107.43%', imgT: '-4.55%' },
      { src: '/assets/images/dollarcity/card-3.png',
        outerL: 351.5,  outerT: 119.5,  outerW: 136.71, outerH: 237.68,
        w: 119, h: 229, rotation: 4.53,
        imgW: '382.8%',  imgH: '160.41%', imgL: '-141.4%',  imgT: '-24.88%' },
    ],
    mobileMockups: [
      { src: '/assets/images/dollarcity/card-1.png',
        outerL: 31.5,   outerT: 123.82, outerW: 116.07, outerH: 166.79,
        w: 96.43, h: 155.45, rotation: 7.57,
        imgW: '348.03%', imgH: '163.72%', imgL: '-124.02%', imgT: '-26.55%' },
      { src: '/assets/images/dollarcity/card-2.png',
        outerL: 147.36, outerT: 136.05, outerW: 83.78,  outerH: 165.45,
        w: 77.72, h: 162.64, rotation: -2.15,
        imgW: '316.28%', imgH: '119.01%', imgL: '-107.43%', imgT: '-4.55%' },
      { src: '/assets/images/dollarcity/card-3.png',
        outerL: 233,    outerT: 119.5,  outerW: 98.38,  outerH: 171.05,
        w: 85.64, h: 164.8, rotation: 4.53,
        imgW: '382.8%',  imgH: '160.41%', imgL: '-141.4%',  imgT: '-24.88%' },
    ],
  },
]

// ─── Phone mockup renderer (Lexi, Tripfinder, Dollarcity) ─────────────────────
const PhoneMockups = ({ mockups, isHovered }) =>
  mockups.map((m, i) => (
    <div key={i} style={{
      position: 'absolute',
      left: `${m.outerL}px`,
      top: `${m.outerT}px`,
      width: `${m.outerW}px`,
      height: `${m.outerH}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      pointerEvents: 'none',
    }}>
      <div style={{
        width: `${m.w}px`,
        height: `${m.h}px`,
        borderRadius: '4px',
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0,
        transform: `rotate(${isHovered ? 0 : m.rotation}deg)`,
        transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        {m.imgW ? (
          <img src={m.src} alt="" style={{
            position: 'absolute',
            width: m.imgW,
            height: m.imgH,
            left: m.imgL,
            top: m.imgT,
            maxWidth: 'none',
            pointerEvents: 'none',
          }} />
        ) : (
          <img src={m.src} alt="" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            pointerEvents: 'none',
          }} />
        )}
      </div>
    </div>
  ))

// ─── Wide composite mockup renderer (TuCredit) ────────────────────────────────
const WideMockup = ({ c, isHovered, isMobile }) => {
  const outerL = isMobile ? c.mOuterL : c.outerL
  const outerT = isMobile ? c.mOuterT : c.outerT
  const outerW = isMobile ? c.mOuterW : c.outerW
  const outerH = isMobile ? c.mOuterH : c.outerH
  const innerW = isHovered
    ? (isMobile ? c.mHoverW : c.hoverW)
    : (isMobile ? c.mDefaultW : c.defaultW)
  const innerH = isHovered
    ? (isMobile ? c.mHoverH : c.hoverH)
    : (isMobile ? c.mDefaultH : c.defaultH)

  return (
    <div style={{
      position: 'absolute',
      left: `${outerL}px`,
      top: `${outerT}px`,
      width: `${outerW}px`,
      height: `${outerH}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      pointerEvents: 'none',
    }}>
      <div style={{
        width: `${innerW}px`,
        height: `${innerH}px`,
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0,
        transform: `rotate(${c.rotation}deg)`,
        transition: 'width 0.45s cubic-bezier(0.4, 0, 0.2, 1), height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <img src={c.src} alt="" style={{
          position: 'absolute',
          width: c.imgW,
          height: c.imgH,
          left: c.imgL,
          top: c.imgT,
          maxWidth: 'none',
          pointerEvents: 'none',
        }} />
      </div>
    </div>
  )
}

// ─── Card component ────────────────────────────────────────────────────────────
const ProjectCard = ({ project, isMobile }) => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)

  const mockups = isMobile
    ? (project.mobileMockups || project.mockups)
    : project.mockups

  return (
    <div
      style={{
        width: isMobile ? '100%' : '533px',
        height: isMobile ? '319px' : '379px',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        border: '0.5px solid #cdd1d7',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        boxSizing: 'border-box',
        boxShadow: isHovered ? '0px 0px 12px 0px rgba(0,0,0,0.1)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
      onClick={() => navigate(project.route)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '24px',
        pointerEvents: 'none',
        width: '100%',
        boxSizing: 'border-box',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <p style={{
            fontFamily: `'Poppins', sans-serif`,
            fontSize: isMobile ? '24px' : '32px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: isMobile ? '1.2px' : '0',
            color: '#39424e',
            margin: 0,
            flex: '1 0 0',
            minWidth: 0,
          }}>
            {project.title}
          </p>
          <CardArrow active={isHovered} />
        </div>
        <p style={{
          fontFamily: FONT_BODY,
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: '0.9px',
          color: '#4f5d6d',
          margin: 0,
          fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
        }}>
          {project.subtitle}
        </p>
      </div>

      {/* Mockup images */}
      {project.cardType === 'wide' ? (
        <WideMockup c={project.composite} isHovered={isHovered} isMobile={isMobile} />
      ) : (
        <PhoneMockups mockups={mockups} isHovered={isHovered} />
      )}
    </div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────────
const ProjectsSection = () => {
  const { isMobile } = useResponsive()

  return (
    <section id="projects" style={{
      backgroundColor: '#fffefa',
      width: '100%',
      padding: isMobile ? '64px 24px 112px' : '64px 96px',
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '32px' : '72px',
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="fadeIn" duration={700}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '1090px',
          margin: '0 auto',
          width: '100%',
        }}>
          <h2 style={{
            fontFamily: `'Poppins', sans-serif`,
            fontSize: isMobile ? '32px' : '48px',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: isMobile ? '1.6px' : '2.4px',
            color: '#39424e',
            margin: 0,
          }}>
            Selected Projects
          </h2>
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0.9px',
            color: '#495564',
            margin: 0,
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>
            These personal projects were created as an opportunity to apply user-centered design principles, accessibility, and clarity across different contexts.
          </p>
        </div>
      </AnimatedOnScroll>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        columnGap: isMobile ? '0' : '24px',
        rowGap: isMobile ? '16px' : '48px',
        maxWidth: '1090px',
        margin: '0 auto',
        width: '100%',
      }}>
        {PROJECTS.map((project, index) => (
          <AnimatedOnScroll
            key={project.id}
            animation="slideUp"
            delay={index * 80}
            duration={600}
            threshold={0.1}
          >
            <ProjectCard project={project} isMobile={isMobile} />
          </AnimatedOnScroll>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
