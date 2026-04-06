import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const TuCreditReflection = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '64px' : '128px',
      paddingBottom: isMobile ? '32px' : '48px',
      width: '100%',
      flexShrink: 0,
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%', maxWidth: '903px' }}>
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '48px',
          alignItems: 'center', width: '100%',
        }}>
          <p style={{
            fontFamily: FONT_HEADING,
            fontSize: isMobile ? '24px' : '32px',
            fontWeight: 500,
            lineHeight: 1.3,
            color: '#5D5F98',
            textAlign: 'center',
            margin: 0,
            width: '100%',
          }}>Reflection</p>
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#212121',
            margin: 0,
            width: '100%',
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>
            This project allowed me to explore the complexity behind designing financial products and reinforced the importance of clarity and trust in user experience. Working on TuCredit helped me understand that users don't just need functional tools, but guidance, education, and reassurance when making high-impact decisions
          </p>
        </div>
      </AnimatedOnScroll>
    </div>
  )
}

export default TuCreditReflection
