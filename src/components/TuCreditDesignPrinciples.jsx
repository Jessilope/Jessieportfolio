import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const STEPS = [
  {
    num: 1,
    title: 'Clear',
    desc: 'Information is presented in a simple, structured way, helping users understand complex financial concepts without feeling overwhelmed.',
    hasLine: true,
  },
  {
    num: 2,
    title: 'Guided',
    desc: 'The experience leads users step by step, offering direction and context at every stage instead of exposing users to long forms upfront.',
    hasLine: true,
  },
  {
    num: 3,
    title: 'Trustworthy',
    desc: 'The interface feels professional and transparent, reinforcing credibility and helping users feel secure while exploring mortgage options.',
    hasLine: false,
  },
]

const StepperItem = ({ num, title, desc, hasLine }) => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', width: '100%' }}>
    {/* Indicator + connector line */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', flexShrink: 0 }}>
      {/* Outer ring */}
      <div style={{
        width: '32px', height: '32px', borderRadius: '50%',
        border: '1px solid #ADAECD',
        flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Inner filled circle */}
        <div style={{
          width: '24px', height: '24px', borderRadius: '50%',
          backgroundColor: '#5D5F98',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: `'Lato', sans-serif`,
            fontSize: '16px', fontWeight: 600, lineHeight: '24px',
            color: '#f9f9f9', textAlign: 'center',
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
        fontFamily: FONT_BODY, fontSize: '14px', fontWeight: 700, lineHeight: 1.5,
        color: '#595959', fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700", margin: 0,
      }}>{title}</p>
      <p style={{
        fontFamily: FONT_BODY, fontSize: '16px', fontWeight: 300, lineHeight: 1.6,
        letterSpacing: '0.8px', color: '#212121',
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300", margin: 0,
      }}>{desc}</p>
    </div>
  </div>
)

const TuCreditDesignPrinciples = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefb',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '64px' : '128px',
      paddingBottom: isMobile ? '32px' : '48px',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '48px',
        alignItems: 'center', width: '100%', maxWidth: '902px',
      }}>

        {/* ── Header ───────────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING, fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500, lineHeight: 1.3, letterSpacing: '1.2px',
              color: '#8a8a8a', margin: 0,
            }}>Design Principles</p>
            <p style={{
              fontFamily: FONT_BODY, fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300, lineHeight: 1.6, letterSpacing: '0.8px',
              color: '#212121', margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
            }}>
              To address these challenges, I translated research findings into a set of design principles that would act as decision-making anchors throughout the project.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── Stepper + Illustration ───────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '48px',
            alignItems: 'center',
            width: '100%',
          }}>
            {/* Left: stepper */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: isMobile ? '100%' : '465px', flexShrink: 0 }}>
              <p style={{
                fontFamily: FONT_BODY, fontSize: '18px', fontWeight: 400, lineHeight: 1.5,
                letterSpacing: '0.9px', color: '#8a8a8a', textAlign: 'center',
                whiteSpace: 'nowrap', margin: 0, marginBottom: '16px',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
              }}>Expected outcome</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                {STEPS.map((step) => (
                  <StepperItem key={step.num} {...step} />
                ))}
              </div>
            </div>

            {/* Right: illustration */}
            {!isMobile && (
              <img
                src="/assets/images/tucredit/design-principles-illustration.svg"
                alt="Design principles illustration"
                style={{ width: '387px', height: '387px', objectFit: 'contain', flexShrink: 0, display: 'block' }}
              />
            )}
          </div>
        </AnimatedOnScroll>

      </div>
    </div>
  )
}

export default TuCreditDesignPrinciples
