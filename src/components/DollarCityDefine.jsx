import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

const HIGHLIGHTS = [
  'Users lose confidence when information is unclear or hard to find, especially before and during the purchase process.',
  'Slow or ineffective customer service negatively impacts the overall experience and reduces the likelihood of returning.',
  'Many users feel insecure about buying online, particularly when it comes to payments and support.',
]

const DollarCityDefine = () => {
  const { isMobile } = useResponsive()

  return (
    <section id="define" style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: isMobile ? '64px' : '112px',
      paddingBottom: isMobile ? '48px' : '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        alignItems: 'center',
        width: '100%',
        maxWidth: '902px',
      }}>

        {/* Title */}
        <AnimatedOnScroll animation="fadeIn" duration={700} style={{ width: '100%' }}>
          <p style={{
            fontFamily: FONT_POPPINS,
            fontSize: isMobile ? '24px' : '32px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: 0,
            color: '#5D5F98',
            textAlign: 'center',
            margin: 0,
            width: '100%',
          }}>Define</p>
        </AnimatedOnScroll>

        {/* Body text */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          <div style={{
            fontFamily: FONT_BODY,
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#212121',
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            width: '100%',
          }}>
            <p style={{ margin: 0 }}>
              Using insights from user research and the user journey map, I synthesized the findings into clear, actionable problems. The analysis revealed that the main challenges were not related to product availability, but to trust, clarity, and speed throughout the shopping experience. Emotional drops in the journey highlighted moments where users felt frustrated, insecure, or unsupported.{' '}
            </p>
            <p style={{ margin: 0 }}>From this, three core problems were defined:</p>
          </div>
        </AnimatedOnScroll>

        {/* Highlight items */}
        <AnimatedOnScroll animation="slideUp" delay={150} duration={600} style={{ width: '100%' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            alignItems: 'center',
            width: '100%',
          }}>
            {HIGHLIGHTS.map((text, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
                width: '100%',
              }}>
                {/* Left border accent */}
                <div style={{
                  width: '3px',
                  alignSelf: 'stretch',
                  backgroundColor: '#ADAECD',
                  borderRadius: '2px',
                  flexShrink: 0,
                }} />
                <p style={{
                  fontFamily: FONT_BODY,
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  letterSpacing: '0.8px',
                  color: '#212121',
                  fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
                  margin: 0,
                  flex: '1 0 0',
                }}>{text}</p>
              </div>
            ))}
          </div>
        </AnimatedOnScroll>

        {/* HMW statement removed */}

      </div>
    </section>
  )
}

export default DollarCityDefine
