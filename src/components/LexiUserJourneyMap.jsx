import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

const PHASES = [
  { label: 'Awareness', bg: '#a7f3d0' },
  { label: 'Explore',   bg: '#86efac' },
  { label: 'First trial', bg: '#fcd34d' },
  { label: 'Re-evaluation', bg: '#fca5a5' },
]

const ROWS = [
  {
    key: 'scenario',
    label: 'Scenario',
    cells: [
      'motivated to learn a new language. Wants to improve her skills but needs flexible learning options.',
      'Explores different options including language academies and mobile apps. Looking for something that fits her lifestyle.',
      'Downloads a language exchange app with hope. Sets up her profile, defines her language level and goals, ready to connect with others.',
      'Tries alternative apps looking for a better experience. Initially hopeful but encounters new frustrations with content quality.',
    ],
  },
  {
    key: 'actions',
    label: 'Actions',
    cells: [
      'Searches online for language learning methods. Reads reviews and asks friends for recommendations.',
      'Researches language academies, checks schedules, and browses app stores for language learning applications.',
      'Signs up for language exchange app, completes onboarding, starts connecting with other users for practice.',
      'Downloads different learning apps. Practices regularly but notices patterns in the exercises and methodology.',
    ],
  },
  {
    key: 'emotions',
    label: 'Emotions',
    cells: ['🤔', '😟', '😤', '😔'],
    isEmoji: true,
  },
  {
    key: 'painpoints',
    label: 'Pain-points',
    cells: [
      'Not sure which method or platform will work best for her schedule and learning style.',
      "Academies don't match her schedule. Too many app options make her feel overwhelmed and unsure where to start.",
      "Many users don't take learning seriously. Men start flirting with her instead of focusing on language practice.",
      'Content feels very repetitive and methodical. Feels stuck in her learning process without real progress.',
    ],
  },
]

const ROW_HEIGHT = 96

const labelCellStyle = {
  backgroundColor: '#ecfdf5',
  borderRadius: '16px',
  width: '110px',
  flexShrink: 0,
  height: `${ROW_HEIGHT}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
}

const labelTextStyle = {
  fontFamily: FONT_BODY,
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 1.5,
  color: '#747474',
  textAlign: 'center',
  margin: 0,
  fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
}

const contentCellStyle = {
  flex: '1 0 0',
  minWidth: 0,
  height: `${ROW_HEIGHT}px`,
  backgroundColor: '#f9f9f9',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
}

const cellTextStyle = {
  fontFamily: FONT_BODY,
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: 1.6,
  color: '#364153',
  margin: 0,
  fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
}

const LexiUserJourneyMap = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      boxSizing: 'border-box',
    }}>

      {/* Title */}
      <AnimatedOnScroll animation="fadeIn" duration={600} style={{ width: '100%', maxWidth: '1088px', paddingLeft: isMobile ? 0 : '93px' }}>
        <p style={{
          fontFamily: FONT_POPPINS,
          fontSize: isMobile ? '20px' : '24px',
          fontWeight: 500,
          lineHeight: 1.3,
          letterSpacing: '1.2px',
          color: '#8a8a8a',
          margin: 0,
        }}>User Journey Map</p>
      </AnimatedOnScroll>

      {/* Journey map table — image on mobile, full table on desktop */}
      {isMobile ? (
        <AnimatedOnScroll animation="slideUp" delay={100} duration={600} style={{ width: '100%' }}>
          <img
            src="/assets/images/lexi/uder-journeymap.png"
            alt="User Journey Map"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '8px',
            }}
          />
        </AnimatedOnScroll>
      ) : (
      <AnimatedOnScroll animation="slideUp" delay={100} duration={600} style={{ width: '100%', maxWidth: '1088px', overflowX: isMobile ? 'auto' : 'visible' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', minWidth: isMobile ? '700px' : 'auto' }}>

          {/* Phase headers row */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', paddingLeft: '122px' }}>
            {PHASES.map(phase => (
              <div key={phase.label} style={{
                flex: '1 0 0',
                backgroundColor: phase.bg,
                borderRadius: '16px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <p style={{
                  fontFamily: FONT_BODY,
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  letterSpacing: '0.8px',
                  color: '#000',
                  textAlign: 'center',
                  margin: 0,
                  fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
                }}>{phase.label}</p>
              </div>
            ))}
          </div>

          {/* Data rows */}
          {ROWS.map(row => (
            <div key={row.key} style={{ display: 'flex', gap: '12px', alignItems: 'center', width: '100%' }}>
              {/* Label cell */}
              <div style={labelCellStyle}>
                <p style={labelTextStyle}>{row.label}</p>
              </div>

              {/* Data cells */}
              {row.cells.map((cell, i) => (
                <div key={i} style={{
                  ...contentCellStyle,
                  backgroundColor: row.isEmoji ? 'rgba(255,255,255,0.1)' : '#f9f9f9',
                }}>
                  {row.isEmoji
                    ? <span style={{ fontSize: '36px', lineHeight: 1 }}>{cell}</span>
                    : <p style={cellTextStyle}>{cell}</p>
                  }
                </div>
              ))}
            </div>
          ))}

        </div>
      </AnimatedOnScroll>
      )}

    </section>
  )
}

export default LexiUserJourneyMap
