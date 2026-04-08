import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const defineIllustration = '/assets/images/tucredit/define-illustration.svg'

const B = ({ children }) => (
  <strong style={{ fontWeight: 700, fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
    {children}
  </strong>
)

const Highlight = ({ label, children }) => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', width: '100%' }}>
    <div style={{
      width: '3px',
      borderRadius: '2px',
      backgroundColor: '#ffffff',
      alignSelf: 'stretch',
      flexShrink: 0,
      minHeight: '20px',
    }} />
    <div style={{
      flex: '1 0 0',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
    }}>
      {label && (
        <p style={{
          fontFamily: FONT_BODY,
          fontSize: '16px',
          fontWeight: 700,
          lineHeight: 1.6,
          letterSpacing: '0.8px',
          color: '#ffffff',
          margin: 0,
          fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
        }}>{label}</p>
      )}
      <p style={{
        fontFamily: FONT_BODY,
        fontSize: '16px',
        fontWeight: 300,
        lineHeight: 1.6,
        letterSpacing: '0.8px',
        color: '#ffffff',
        margin: 0,
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
      }}>{children}</p>
    </div>
  </div>
)

const TuCreditDefine = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#6f71a7',
      borderRadius: '12px',
      width: '100%',
      paddingTop:    isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      paddingLeft:   isMobile ? '24px' : '0',
      paddingRight:  isMobile ? '24px' : '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="slideUp" duration={600} style={{ width: '968px' }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '40px' : '77px',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

          {/* ── Left: text content ─────────────────── */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            width: isMobile ? '100%' : '484px',
            flexShrink: 0,
          }}>
            <p style={{
              fontFamily: FONT_HEADING,
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
              Based on the research and benchmark analysis, it became clear that applying for a mortgage loan is often{' '}
              <B>overwhelming for users.</B>
              {' '}While banks provide extensive information, it is frequently presented using{' '}
              <B>complex language, long forms, and fragmented</B>
              {' '}flows that make it difficult for users to understand where to start and what is required of them.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>

              <Highlight>
                Users need a mortgage experience that helps them{' '}
                <B>learn, prepare, and evaluate</B>
                {' '}their options before committing to an application.
              </Highlight>

              <Highlight label="Point of View (POV)">
                A first-time home buyer needs a{' '}
                <B>clear and educational</B>
                {' '}mortgage experience because they want to understand loan options, requirements, and financial implications before making a high-impact decision.
              </Highlight>

              <Highlight label="How Might We (HMW)">
                How might we design a mortgage loan experience that{' '}
                <B>educates users, simplifies complex financial information,</B>
                {' '}and helps them evaluate their eligibility and options with confidence?
              </Highlight>

            </div>
          </div>

          {/* ── Right: illustration ────────────────── */}
          {!isMobile && (
            <img
              src={defineIllustration}
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

export default TuCreditDefine
