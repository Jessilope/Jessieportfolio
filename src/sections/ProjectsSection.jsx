import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from '../components/AnimatedOnScroll'
import { colors, borderRadius, typography } from '../tokens'
import Icons from '../components/Icons'

// ─── Project data ─────────────────────────────────────────────────────────────
// Gradients, shadows and mockup positions taken directly from Figma node 1580:2590
const PROJECTS = [
  {
    id: 'lexi',
    title: 'Lexi',
    subtitle: 'IA language learning app',
    route: '/lexi',
    gradient: 'linear-gradient(180deg, rgba(0,79,255,0) 0%, rgba(21,93,252,0.14) 100%)',
    hoverShadow: '0 0 25px rgba(21,93,252,0.25)',
    // 4 flat screenshots → rotated -30deg (lean left) via CSS
    // Positions are the top-left of each phone div BEFORE rotation,
    // calculated so the visual center matches the Figma layout
    mockups: [
      { src: '/assets/images/lexi/mockup%201.png', left: 67,  top: 139, w: 87, h: 194, rotation: -30 },
      { src: '/assets/images/lexi/mockup%202.png', left: 234, top: 161, w: 89, h: 202, rotation: -30 },
      { src: '/assets/images/lexi/mockup%203.png', left: 365, top: 152, w: 85, h: 192, rotation: -30 },
      { src: '/assets/images/lexi/mockup%204.png', left: 462, top: 81,  w: 92, h: 209, rotation: -30 },
    ],
  },
  {
    id: 'tucredit',
    title: 'Tu credit',
    subtitle: 'Mortgage loans',
    route: '/tucredit',
    gradient: 'linear-gradient(180deg, rgba(164,100,255,0.14) 0%, rgba(224,199,255,0.14) 100%)',
    hoverShadow: '0 0 25px rgba(88,0,146,0.25)',
    // card-mockup 2 (narrow mobile) behind, card-mockup 1 (wide web) on top-right
    mockups: [
      { src: '/assets/images/tucredit/card-mockup%202.png', left: 172, top: 121, w: 122, h: 178, rotation: 0 },
      { src: '/assets/images/tucredit/card-mockup%201.png', left: 306, top: 85,  w: 253, h: 164, rotation: 0 },
    ],
  },
  {
    id: 'tripfinder',
    title: 'Tripfinder',
    subtitle: 'Booking trips mobile app',
    route: '/tripfinder',
    gradient: 'linear-gradient(180deg, rgba(224,199,255,0.14) 0%, rgba(129,37,244,0.14) 100%)',
    hoverShadow: '0 0 25px rgba(88,0,146,0.25)',
    // 4 flat screenshots, all rotate(+30deg) — leaning right
    // Positions are center-based (left = centerX - w/2, top = centerY - h/2)
    // Ordered back-to-front so muckup 1 (rightmost) renders on top
    mockups: [
      { src: '/assets/images/tripfinder/card-mockup%204.png', left: 72,  top: 121, w: 78, h: 167, rotation: 30 },
      { src: '/assets/images/tripfinder/card-mockup%203.png', left: 204, top: 108, w: 77, h: 167, rotation: 30 },
      { src: '/assets/images/tripfinder/card-mockup%202.png', left: 334, top: 115, w: 74, h: 159, rotation: 30 },
      { src: '/assets/images/tripfinder/card-mockup%201.png', left: 449, top: 98,  w: 74, h: 159, rotation: 30 },
    ],
  },
  {
    id: 'dollarcity',
    title: 'Dollarcity',
    subtitle: 'Shopping mobile app',
    route: '/dollarcity',
    gradient: 'linear-gradient(180deg, rgba(1,119,65,0.14) 0%, rgba(0,88,48,0) 100%)',
    hoverShadow: '0 0 25px rgba(1,119,65,0.25)',
    // Phones in correct Figma order: categories list | home | product detail
    mockups: [
      { src: '/assets/images/dollarcity/mockup-2.png', left: 171, top: 110, w: 96,  h: 155, rotation: 0, fit: 'contain' },
      { src: '/assets/images/dollarcity/mockup-3.png', left: 283, top: 63,  w: 88,  h: 184, rotation: 0, fit: 'contain' },
      { src: '/assets/images/dollarcity/mockup-1.png', left: 387, top: 92,  w: 90,  h: 173, rotation: 0, fit: 'contain' },
    ],
  },
]

// ─── Card component ────────────────────────────────────────────────────────────
const ProjectCard = ({ project, isMobile }) => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)

  // Desktop: 533×260  Mobile: full-width × 178
  const cardStyles = {
    width: isMobile ? '100%' : '533px',
    height: isMobile ? '178px' : '260px',
    borderRadius: borderRadius.m || '16px',
    background: project.gradient,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    boxSizing: 'border-box',
    boxShadow: isHovered ? project.hoverShadow : 'none',
    transition: 'box-shadow 0.3s ease',
  }

  const contentStyles = {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '4px' : '8px',
    padding: isMobile ? '16px 24px' : '24px',
    pointerEvents: 'none',
  }

  const titleRowStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  }

  // Default: primary/300 (#ADAECD)  Hover: primary/700 (#5D5F98)
  const accentColor = isHovered ? colors.primary[700] : colors.primary[300]

  const titleStyles = {
    fontFamily: `'Poppins', sans-serif`,
    fontSize: '32px',
    fontWeight: 500,
    lineHeight: 1.3,
    letterSpacing: 0,
    color: accentColor,
    margin: 0,
    transition: 'color 0.3s ease',
  }

  const subtitleStyles = {
    fontFamily: `'${typography.presets.body.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.9px',
    color: colors.neutral[500],   // #595959 — from Figma var(--neutral/500)
    margin: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  // Scale mockup positions for mobile
  const scale = isMobile ? (178 / 260) : 1

  return (
    <div
      style={cardStyles}
      onClick={() => navigate(project.route)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Text content */}
      <div style={contentStyles}>
        <div style={titleRowStyles}>
          <p style={titleStyles}>{project.title}</p>
          <Icons
            icon="right-arrow"
            state={isHovered ? 'active' : 'Default'}
            size={24}
            style={{ color: accentColor, transition: 'color 0.3s ease', flexShrink: 0 }}
          />
        </div>
        <p style={subtitleStyles}>{project.subtitle}</p>
      </div>

      {/* Mockup images — absolutely positioned, clipped by overflow:hidden */}
      {project.mockups.map((m, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${m.left * scale}px`,
            top: `${m.top * scale}px`,
            width: `${m.w * scale}px`,
            height: `${m.h * scale}px`,
            borderRadius: '4px',
            overflow: 'hidden',
            transform: `${m.rotation !== 0 ? `rotate(${m.rotation}deg) ` : ''}scale(${isHovered ? 1.06 : 1})`,
            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <img
            src={m.src}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: m.fit || 'cover',
              display: 'block',
            }}
          />
        </div>
      ))}
    </div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────────
const ProjectsSection = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefa',
    width: '100%',
    padding: isMobile ? '64px 24px 112px' : '64px 96px',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '72px',
    boxSizing: 'border-box',
  }

  const headerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '1090px',
    margin: '0 auto',
    width: '100%',
  }

  const sectionTitleStyles = {
    fontFamily: `'Poppins', sans-serif`,
    fontSize: '48px',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '2.4px',
    color: colors.primary[700],
    margin: 0,
  }

  const sectionDescStyles = {
    fontFamily: `'${typography.presets.body.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.9px',
    color: colors.neutral[500],
    margin: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  // Fixed 533px cards, 24px gap, centered. maxWidth limits to 533×2+24=1090px.
  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    columnGap: isMobile ? '0' : '24px',
    rowGap: isMobile ? '16px' : '48px',
    maxWidth: '1090px',
    margin: '0 auto',
    width: '100%',
  }

  return (
    <section id="projects" style={sectionStyles}>
      {/* Section header */}
      <AnimatedOnScroll animation="fadeIn" duration={700}>
        <div style={headerStyles}>
          <h2 style={sectionTitleStyles}>Personal Projects</h2>
          <p style={sectionDescStyles}>
            These personal projects were created as an opportunity to apply user-centered design principles, accessibility, and clarity across different contexts.
          </p>
        </div>
      </AnimatedOnScroll>

      {/* Cards grid */}
      <div style={gridStyles}>
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
