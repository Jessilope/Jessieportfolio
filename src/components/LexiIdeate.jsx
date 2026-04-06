import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

const STEPS = [
  { n: 1, label: 'Simulate',   desc: 'Simulate natural conversations without social pressure', last: false },
  { n: 2, label: 'Feedback',   desc: 'Provide real-time, supportive feedback',                   last: false },
  { n: 3, label: 'Adaptive',   desc: "Adapt to the user's level, interests, and daily routine",  last: false },
  { n: 4, label: 'Motivating', desc: 'Reinforce motivation through progress and consistency',     last: true  },
]

const StepIndicator = ({ n, showLine }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'center', flexShrink: 0 }}>
    {/* Outer ring (32×32) + inner filled circle (24×24 centered) */}
    <div style={{
      position: 'relative',
      width: '32px', height: '32px',
      borderRadius: '50%',
      border: '1px solid #ADAECD',
      flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Inner filled purple circle */}
      <div style={{
        width: '24px', height: '24px',
        borderRadius: '50%',
        backgroundColor: '#5d5f98',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{
          fontFamily: `'Lato', sans-serif`, fontSize: '16px', fontWeight: 600,
          color: '#f9f9f9', lineHeight: '24px', textAlign: 'center',
        }}>{n}</span>
      </div>
    </div>
    {/* Connector line */}
    {showLine && (
      <div style={{ width: '1px', height: '32px', backgroundColor: '#ADAECD', flexShrink: 0 }} />
    )}
  </div>
)

const Outcome = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '465px', flexShrink: 0 }}>
    <p style={{
      fontFamily: FONT_BODY, fontSize: '18px', fontWeight: 400,
      lineHeight: 1.5, letterSpacing: '0.9px', color: '#8a8a8a',
      margin: 0, fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    }}>Expected outcome</p>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {STEPS.map(({ n, label, desc, last }) => (
        <div key={n} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <StepIndicator n={n} showLine={!last} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: '1 0 0', minWidth: 0, paddingTop: '4px' }}>
            <p style={{
              fontFamily: FONT_BODY, fontSize: '14px', fontWeight: 700,
              lineHeight: 1.5, color: '#595959', margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
            }}>{label}</p>
            <p style={{
              fontFamily: FONT_BODY, fontSize: '16px', fontWeight: 300,
              lineHeight: 1.6, letterSpacing: '0.8px', color: '#212121',
              margin: 0, fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
            }}>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const LexiIdeate = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: '128px',
      paddingBottom: isMobile ? '32px' : '64px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      boxSizing: 'border-box',
    }}>

      {/* Title */}
      <AnimatedOnScroll animation="fadeIn" duration={600} style={{ width: '100%' }}>
        <p style={{
          fontFamily: FONT_POPPINS, fontSize: isMobile ? '24px' : '32px', fontWeight: 500,
          lineHeight: 1.3, letterSpacing: '0', color: '#5d5f98',
          textAlign: 'center', margin: 0,
        }}>Ideate</p>
      </AnimatedOnScroll>

      {/* Main content: text + outcome stepper + mockup */}
      <AnimatedOnScroll animation="slideUp" delay={100} duration={600} style={{ width: '100%', maxWidth: '896px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', alignItems: 'center', width: '100%' }}>

          {/* Body text + outcome + mockup */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_BODY, fontSize: isMobile ? '14px' : '16px', fontWeight: 300,
              lineHeight: 1.6, letterSpacing: '0.8px', color: '#212121',
              margin: 0, fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
            }}>
              With a clear problem statement and "How Might" questions defined, I explored multiple solution ideas focused on helping users practice consistently while feeling safe and supported. The ideation phase centered on transforming user needs into actionable features, using AI as a guide rather than a replacement for human learning.
            </p>

            {/* Outcome stepper + mockup side by side */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '32px',
              flexDirection: isMobile ? 'column' : 'row',
              width: '100%',
            }}>
              <Outcome />

              {/* Mockup image — hidden on mobile */}
              {!isMobile && (
              <div style={{
                width: '384px',
                height: '401px',
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden',
                opacity: 0.7,
              }}>
                <img
                  alt="App mockup"
                  src="/assets/images/lexi/ideate-mockup.png"
                  style={{
                    position: 'absolute',
                    top: '-40.79%',
                    left: 0,
                    width: '100%',
                    height: '223.36%',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                  }}
                />
              </div>
              )}
            </div>
          </div>

          {/* Information Architecture */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '33px', alignItems: 'center', width: '100%' }}>
            <p style={{
              fontFamily: FONT_POPPINS, fontSize: isMobile ? '20px' : '24px', fontWeight: 500,
              lineHeight: 1.3, letterSpacing: '1.2px', color: '#8a8a8a',
              margin: 0, width: '100%',
            }}>Information Architecture</p>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1444 / 1152' }}>
              <img
                alt="Information Architecture"
                src="/assets/images/lexi/information-architecture.png"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>
      </AnimatedOnScroll>

    </section>
  )
}

export default LexiIdeate
