import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

const B = ({ children }) => <strong style={{ fontWeight: 700 }}>{children}</strong>

const Highlight = ({ children, barOpacity = 0.9 }) => (
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
      fontSize: '18px',
      fontWeight: 300,
      lineHeight: 1.5,
      letterSpacing: '0.9px',
      color: '#ffffff',
      margin: 0,
      flex: '1 0 0',
      minWidth: 0,
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
    }}>{children}</p>
  </div>
)

const LexiDefine = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
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
              fontSize: '18px',
              fontWeight: 300,
              lineHeight: 1.5,
              letterSpacing: '0.9px',
              color: '#ffffff',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
            }}>
              Based on the insights gathered during the <B>empathy phase</B>, I defined a clear point of view to focus the problem on <B>a specific user and need.</B> And the <B>final outcome</B> hoped by learners
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
              <Highlight barOpacity={0.9}>
                Jenna is <B>a self-motivated language learner</B> who needs an engaging, professional, and flexible tool because she values <B>consistent learning</B> and is looking for an experience where her goals are <B>taken seriously.</B>
              </Highlight>
              <Highlight barOpacity={0.5}>
                How might we create a <B>natural learning experience</B> that helps Amanda practice English consistently while <B>feeling guided</B>, as if she were learning with a native speaker?
              </Highlight>
            </div>
          </div>

          {/* Right: illustration */}
          {!isMobile && (
            <img
              src="/assets/images/lexi/define-illustration.svg"
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

export default LexiDefine
