import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const OUTCOME_SVG = 'https://www.figma.com/api/mcp/asset/178d10e5-677c-4ecb-9484-cfbe8b8bffbd'

const principles = [
  {
    title: 'Safety through calm visuals',
    desc: 'Soft colors, rounded shapes, and balanced spacing create a comfortable and reassuring experience.',
  },
  {
    title: 'Content comes first',
    desc: 'A minimal interface allows destinations and imagery to stand out without visual distractions.',
  },
  {
    title: 'Clear and consistent structure',
    desc: 'Repeated patterns and simple layouts make navigation feel familiar and effortless.',
  },
]

const StepItem = ({ number, title, desc, isLast, isMobile }) => (
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
            color: '#f9f9f9', textAlign: 'center', userSelect: 'none',
          }}>{number}</span>
        </div>
      </div>
      {/* Connector line */}
      {!isLast && (
        <div style={{ width: '1px', height: '32px', backgroundColor: '#ADAECD', flexShrink: 0 }} />
      )}
    </div>

    {/* Step text */}
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '2px',
      flex: '1 0 0', minWidth: 0, paddingTop: '4px',
    }}>
      <p style={{
        fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
        fontSize: '14px', fontWeight: 700, lineHeight: 1.5,
        color: '#595959', margin: 0,
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
      }}>{title}</p>
      <p style={{
        fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
        fontSize: isMobile ? '14px' : '16px', fontWeight: 300, lineHeight: 1.6,
        letterSpacing: '0.8px', color: '#212121', margin: 0,
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
      }}>{desc}</p>
    </div>
  </div>
)

const TripFinderDesignPrinciples = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '32px' : '64px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="fadeIn" duration={700} style={{ width: '100%' }}>
        <div style={{
          width: '100%',
          maxWidth: '902px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}>
          {/* Section title */}
          <p style={{
            fontFamily: `'Poppins', sans-serif`,
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '1.2px',
            color: '#8d8d99',
            margin: 0,
          }}>Design Principles</p>

          {/* Two-column: stepper + illustration */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '32px' : '48px',
            alignItems: 'flex-start',
            width: '100%',
          }}>
            {/* Stepper list */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              flex: isMobile ? 'unset' : '1 0 0',
              width: isMobile ? '100%' : undefined,
            }}>
              <p style={{
                fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: 1.5,
                letterSpacing: '0.9px',
                color: '#8d8d99',
                margin: 0,
                fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
              }}>Expected outcome</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                {principles.map((p, i) => (
                  <StepItem
                    key={i}
                    number={i + 1}
                    title={p.title}
                    desc={p.desc}
                    isLast={i === principles.length - 1}
                    isMobile={isMobile}
                  />
                ))}
              </div>
            </div>

            {/* Illustration — desktop only */}
            {!isMobile && (
              <div style={{
                width: '387px',
                height: '387px',
                flexShrink: 0,
              }}>
                <img
                  src={OUTCOME_SVG}
                  alt="Design principles illustration"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
              </div>
            )}
          </div>
        </div>
      </AnimatedOnScroll>
    </section>
  )
}

export default TripFinderDesignPrinciples
