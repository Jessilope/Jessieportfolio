import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

// Phase header colors from Figma
const PHASES = [
  { label: 'Discovery',           bg: '#a7f3d0' },
  { label: 'Explore',             bg: '#86efac' },
  { label: 'Shopping Experience', bg: '#fcd34d' },
  { label: 'Re-evaluation',       bg: '#fca5a5' },
]

const ROWS = [
  {
    label: 'Scenario',
    cells: [
      'User searches for information about Dollar City. Discovers the store and becomes interested in the affordable products offered.',
      'Wants to find the nearest store location. Uses Google Maps to search for nearby locations.',
      'Decides to go shopping for needed products. Finds the items but must wait in line to pay.',
      'Completes purchase but experiences poor customer service during the process.',
    ],
  },
  {
    label: 'Actions',
    cells: [
      'Searches for information online about Dollar City. Reviews available products and prices. Feels motivated by the deals.',
      "Opens Google Maps and searches for 'Dollar City near me'. Checks addresses and store hours of nearby locations.",
      'Visits the physical store. Selects necessary products. Waits in the checkout line to pay.',
      'Interacts with checkout staff. Completes payment and receives products.',
    ],
  },
  {
    label: 'Emotions',
    emojis: ['🤔', '😟', '😤', '😔'],
  },
  {
    label: 'Pain-points',
    cells: [
      'Limited online information about product availability at specific store locations.',
      'No nearby store location. Must travel farther than expected.',
      'Long checkout lines. Excessive wait time at register. Insufficient staff.',
      'Poor customer service. Unfriendly or poorly trained staff. Negative final experience.',
    ],
  },
]

const labelCell = (label) => (
  <div style={{
    backgroundColor: '#ecfdf5',
    borderRadius: '16px',
    width: '110px',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 8px',
    alignSelf: 'stretch',
  }}>
    <p style={{
      fontFamily: FONT_BODY,
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: 1.5,
      color: '#747474',
      textAlign: 'center',
      margin: 0,
    }}>{label}</p>
  </div>
)

const contentCell = (text) => (
  <div style={{
    flex: '1 0 0',
    minWidth: 0,
    backgroundColor: '#f9f9f9',
    borderRadius: '16px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  }}>
    <p style={{
      fontFamily: FONT_BODY,
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#364153',
      margin: 0,
      flex: '1 0 0',
    }}>{text}</p>
  </div>
)

const emojiCell = (emoji) => (
  <div style={{
    flex: '1 0 0',
    minWidth: 0,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '16px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <span style={{ fontSize: '36px', lineHeight: 1 }}>{emoji}</span>
  </div>
)

const DollarCityUserJourneyMap = () => {
  const { isMobile } = useResponsive()

  return (
    <section id="user-journey-map" style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: '128px',
      paddingBottom: '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      boxSizing: 'border-box',
    }}>

      {/* Title + body */}
      <AnimatedOnScroll animation="fadeIn" duration={700} style={{ width: '100%' }}>
        <div style={{
          width: '100%',
          maxWidth: '1088px',
          margin: '0 auto',
          paddingLeft: isMobile ? 0 : '122px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}>
          <p style={{
            fontFamily: FONT_POPPINS,
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '1.2px',
            color: '#8a8a8a',
            margin: 0,
          }}>User Journey Map</p>
        </div>
      </AnimatedOnScroll>

      {/* Journey map table — desktop only, image fallback on mobile */}
      <AnimatedOnScroll animation="slideUp" delay={100} duration={600} style={{ width: '100%' }}>
        {isMobile ? (
          <img
            src="/assets/images/dollarcity/user-journey-map.png"
            alt="User Journey Map"
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
          />
        ) : (
          <div style={{
            width: '100%',
            maxWidth: '1088px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}>

            {/* Phase headers row */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', paddingLeft: '122px', boxSizing: 'border-box' }}>
              {PHASES.map((phase) => (
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
                    fontWeight: 400,
                    lineHeight: 1.6,
                    letterSpacing: '0.8px',
                    color: '#000',
                    textAlign: 'center',
                    margin: 0,
                    flex: '1 0 0',
                  }}>{phase.label}</p>
                </div>
              ))}
            </div>

            {/* Data rows */}
            {ROWS.map((row) => (
              <div key={row.label} style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'stretch',
                minHeight: row.emojis ? 'auto' : '96px',
              }}>
                {labelCell(row.label)}
                {row.emojis
                  ? row.emojis.map((emoji, i) => emojiCell(emoji))
                  : row.cells.map((text, i) => contentCell(text))
                }
              </div>
            ))}

          </div>
        )}
      </AnimatedOnScroll>

    </section>
  )
}

export default DollarCityUserJourneyMap
