import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

const Highlight = ({ text }) => (
  <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    width: '100%',
  }}>
    <div style={{
      width: '3px',
      borderRadius: '2px',
      backgroundColor: '#ADAECD',
      alignSelf: 'stretch',
      flexShrink: 0,
      minHeight: '20px',
    }} />
    <p style={{
      fontFamily: FONT_BODY,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.8px',
      color: '#212121',
      margin: 0,
      flex: '1 0 0',
      minWidth: 0,
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    }}>{text}</p>
  </div>
)

const LexiDefine = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: isMobile ? '64px' : '112px',
      paddingBottom: isMobile ? '32px' : '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="slideUp" duration={600} style={{ width: '100%', maxWidth: '902px' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: isMobile ? '32px' : '32px',
          alignItems: 'center',
          width: '100%',
        }}>

          {/* Title */}
          <p style={{
            fontFamily: FONT_POPPINS,
            fontSize: isMobile ? '24px' : '32px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '0',
            color: '#5d5f98',
            textAlign: 'center',
            margin: 0,
            whiteSpace: 'nowrap',
          }}>Define</p>

          {/* Body text */}
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#212121',
            margin: 0,
            width: '100%',
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>
            Based on the insights gathered during the empathy phase, I defined a clear point of view to focus the problem on a specific user and need. And the final outcome hoped by learners
          </p>

          {/* Highlights */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            alignItems: 'center',
            width: '100%',
          }}>
            <Highlight text="Jenna is a self-motivated language learner who needs an engaging, professional, and flexible tool because she values consistent learning and is looking for an experience where her goals are taken seriously." />
            <Highlight text="How might we create a natural learning experience that helps Amanda practice English consistently while feeling guided, as if she were learning with a native speaker?" />
          </div>

        </div>
      </AnimatedOnScroll>
    </section>
  )
}

export default LexiDefine
