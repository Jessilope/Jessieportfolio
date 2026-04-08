import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const MOCKUP_IMG = '/assets/images/dollarcity/mockup-categories.png'

// ── Stepper step data ────────────────────────────────────────────────────────
const STEPS = [
  {
    num: 1,
    title: 'Modern',
    desc: 'Interface that feels current and familiar, aligning with how users interact with digital products today.',
    hasLine: true,
  },
  {
    num: 2,
    title: 'Organic',
    desc: 'Human and natural, using clear language and fluid interactions',
    hasLine: true,
  },
  {
    num: 3,
    title: 'Intuitive',
    desc: 'Be immediately understandable, allowing users to navigate, browse, and complete actions',
    hasLine: false,
  },
]

// ── StepperItem — matches LexiIdeate exactly ─────────────────────────────────
const StepperItem = ({ num, title, desc, hasLine }) => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', width: '100%' }}>
    {/* Indicator + connector line */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', flexShrink: 0 }}>
      {/* Outer ring */}
      <div style={{
        position: 'relative',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        border: '1px solid #ADAECD',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Inner filled circle */}
        <div style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: '#5D5F98',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: `'Lato', sans-serif`,
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '24px',
            color: '#f9f9f9',
            textAlign: 'center',
          }}>{num}</span>
        </div>
      </div>
      {/* Connector line */}
      {hasLine && (
        <div style={{ width: '1px', height: '32px', backgroundColor: '#ADAECD', flexShrink: 0 }} />
      )}
    </div>

    {/* Text */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: '1 0 0', minWidth: 0, paddingTop: '4px' }}>
      <p style={{
        fontFamily: FONT_BODY,
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: 1.5,
        color: '#595959',
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
        margin: 0,
      }}>{title}</p>
      <p style={{
        fontFamily: FONT_BODY,
        fontSize: '16px',
        fontWeight: 300,
        lineHeight: 1.6,
        letterSpacing: '0.8px',
        color: '#212121',
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
        margin: 0,
      }}>{desc}</p>
    </div>
  </div>
)

// ── Main component ────────────────────────────────────────────────────────────
const DollarCityDesignPrinciples = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '48px',
      boxSizing: 'border-box',
    }}>

      {/* ── Title + body ─────────────────────────────── */}
      <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%', maxWidth: '902px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
          <p style={{
            fontFamily: FONT_HEADING,
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '1.2px',
            color: '#8a8a8a',
            margin: 0,
          }}>Design Principles</p>
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#212121',
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
            margin: 0,
          }}>
            Once the structure and flow were validated through low-fidelity wireframes, I focused on defining a visual system that reinforced clarity, trust, and accessibility.
          </p>
        </div>
      </AnimatedOnScroll>

      {/* ── Stepper + mockup ─────────────────────────── */}
      <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%', maxWidth: '902px' }}>
        <div style={{
          display: 'flex',
          alignItems: isMobile ? 'flex-start' : 'flex-start',
          justifyContent: 'space-between',
          gap: isMobile ? '32px' : '0',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%',
        }}>
          {/* Left: Expected outcome + stepper */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: isMobile ? '100%' : '465px', flexShrink: 0 }}>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: '0.9px',
              color: '#8a8a8a',
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
              margin: 0,
            }}>Expected outcome</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {STEPS.map((step) => (
                <StepperItem key={step.num} {...step} />
              ))}
            </div>
          </div>

          {/* Right: Mockup image */}
          {!isMobile && (
            <div style={{
              width: '269px',
              height: '307px',
              position: 'relative',
              flexShrink: 0,
              overflow: 'hidden',
              opacity: 0.9,
            }}>
              <img
                src={MOCKUP_IMG}
                alt="Dollar City app mockup"
                style={{
                  position: 'absolute',
                  width: '403.8%',
                  height: '265.34%',
                  left: '-153.23%',
                  top: '-39.61%',
                  maxWidth: 'none',
                  pointerEvents: 'none',
                }}
              />
            </div>
          )}
        </div>
      </AnimatedOnScroll>

    </section>
  )
}

export default DollarCityDesignPrinciples
