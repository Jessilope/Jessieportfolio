import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

// Highlight block: vertical line + text (same pattern as DollarCityDefine/LexiDefine)
const Highlight = ({ label, text }) => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
    {/* Vertical line */}
    <div style={{
      width: '3px',
      alignSelf: 'stretch',
      backgroundColor: '#ADAECD',
      borderRadius: '2px',
      flexShrink: 0,
    }} />
    {/* Text */}
    <div style={{
      fontFamily: FONT_BODY,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.8px',
      color: '#5b5b5b',
      flex: '1 0 0',
      minWidth: 0,
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    }}>
      {label && (
        <p style={{ color: '#5D5F98', margin: 0 }}>{label}</p>
      )}
      <p style={{ margin: 0 }}>{text}</p>
    </div>
  </div>
)

const TuCreditDefine = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '64px' : '128px',
      paddingBottom: isMobile ? '32px' : '48px',
      width: '100%',
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

        {/* ── Title ────────────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <p style={{
            fontFamily: FONT_HEADING,
            fontSize: isMobile ? '24px' : '32px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: 0,
            color: '#5D5F98',
            textAlign: 'center',
            width: '100%',
            margin: 0,
          }}>Define</p>
        </AnimatedOnScroll>

        {/* ── Intro paragraph ──────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={50} duration={700} style={{ width: '100%' }}>
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#5b5b5b',
            margin: 0,
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>
            Based on the research and benchmark analysis, it became clear that applying for a mortgage loan is often overwhelming for users. While banks provide extensive information, it is frequently presented using complex language, long forms, and fragmented flows that make it difficult for users to understand where to start and what is required of them.
          </p>
        </AnimatedOnScroll>

        {/* ── Highlight blocks ─────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>

            <Highlight
              label={null}
              text="Users need a mortgage experience that helps them learn, prepare, and evaluate their options before committing to an application."
            />

            <Highlight
              label="Point of View (POV)"
              text="A first-time home buyer needs a clear and educational mortgage experience because they want to understand loan options, requirements, and financial implications before making a high-impact decision."
            />

            <Highlight
              label="How Might We (HMW)"
              text="How might we design a mortgage loan experience that educates users, simplifies complex financial information, and helps them evaluate their eligibility and options with confidence?"
            />

          </div>
        </AnimatedOnScroll>

      </div>
    </div>
  )
}

export default TuCreditDefine
