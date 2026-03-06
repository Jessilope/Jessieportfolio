import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const TuCreditDataCollection = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '48px' : '112px',
      paddingBottom: isMobile ? '32px' : '64px',
      width: '100%',
      boxSizing: 'border-box',
      gap: '32px',
    }}>

      {/* ── Subtitle ─────────────────────────────── */}
      <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%', maxWidth: '950px' }}>
        <p style={{
          fontFamily: FONT_HEADING,
          fontSize: isMobile ? '18px' : '20px',
          fontWeight: 500,
          lineHeight: 1.2,
          letterSpacing: '1px',
          color: '#8a8a8a',
          margin: 0,
        }}>Data collection and Benchmark Findings</p>
      </AnimatedOnScroll>

      {/* ── Purple card ──────────────────────────── */}
      <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%', maxWidth: '950px' }}>
        <div style={{
          backgroundColor: '#5D5F98',
          borderRadius: '24px',
          padding: '24px',
          width: '100%',
          height: isMobile ? 'auto' : '329px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            fontFamily: FONT_BODY,
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#eaebf2',
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>
            <p style={{ margin: 0 }}>
              As part of the research phase, I analyzed mortgage loan flows from multiple banks to identify common patterns and expectations across digital credit experiences. The benchmark revealed a high level of consistency in how banks structure and communicate mortgage information.
            </p>
            <p style={{ margin: 0 }}>&nbsp;</p>
            <p style={{ margin: 0 }}>Most platforms include:</p>
            <ul style={{ listStyle: 'disc', marginLeft: '24px', marginTop: 0, marginBottom: 0, paddingLeft: 0 }}>
              <li style={{ marginLeft: '24px', marginBottom: 0 }}>
                <span>General information about mortgage loans and bank benefits</span>
              </li>
              <li style={{ marginLeft: '24px', marginBottom: 0 }}>
                <span>Clear CTAs such as Apply for a loan, Loan simulator, and Credit information</span>
              </li>
              <li style={{ marginLeft: '24px' }}>
                <span>FAQ sections to help users understand complex financial topics</span>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedOnScroll>

    </div>
  )
}

export default TuCreditDataCollection
