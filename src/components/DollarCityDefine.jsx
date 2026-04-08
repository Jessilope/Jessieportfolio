import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

const B = ({ children }) => <strong style={{ fontWeight: 700 }}>{children}</strong>

const Highlight = ({ children }) => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', width: '100%' }}>
    <div style={{
      width: '3px',
      borderRadius: '2px',
      backgroundColor: '#ffffff',
      alignSelf: 'stretch',
      flexShrink: 0,
      minHeight: '20px',
    }} />
    <p style={{
      fontFamily: FONT_BODY,
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: 1.6,
      letterSpacing: '0.8px',
      color: '#ffffff',
      margin: 0,
      flex: '1 0 0',
      minWidth: 0,
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
    }}>{children}</p>
  </div>
)

const DollarCityDefine = () => {
  const { isMobile } = useResponsive()

  return (
    <section id="define" style={{
      backgroundColor: '#6f71a7',
      borderRadius: '12px',
      width: '100%',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      paddingLeft: isMobile ? '24px' : '190px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="slideUp" duration={600} style={{ width: '100%' }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '40px' : '77px',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

          {/* Left: text content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            width: isMobile ? '100%' : '484px',
            flexShrink: 0,
          }}>
            <p style={{
              fontFamily: FONT_POPPINS,
              fontSize: isMobile ? '32px' : '40px',
              fontWeight: 600,
              lineHeight: 1.4,
              letterSpacing: '2px',
              color: '#ffffff',
              margin: 0,
            }}>Define</p>

            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#ffffff',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
            }}>
              Using insights from user research and the user journey map, I synthesized the findings into clear, actionable problems. The analysis revealed that the <B>main challenges were not related to product availability, but to trust, clarity, and speed throughout the shopping experience.</B> Emotional drops in the journey highlighted moments where users felt frustrated, insecure, or unsupported. From this, three core problems were defined:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
              <Highlight>Users <B>lose confidence</B> when information is unclear or hard to find, especially before and during the purchase process.</Highlight>
              <Highlight>Slow or ineffective <B>customer service</B> negatively impacts the overall experience and reduces the likelihood of returning.</Highlight>
              <Highlight>Many users feel insecure about <B>buying online,</B> particularly when it comes to payments and support.</Highlight>
            </div>
          </div>

          {/* Right: illustration */}
          {!isMobile && (
            <img
              src="/assets/images/dollarcity/define-illustration.svg"
              alt="Define illustration"
              style={{
                width: '375px',
                height: '375px',
                objectFit: 'contain',
                flexShrink: 0,
                display: 'block',
              }}
            />
          )}

        </div>
      </AnimatedOnScroll>
    </section>
  )
}

export default DollarCityDefine
