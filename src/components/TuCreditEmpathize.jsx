import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'
import Icons from './Icons'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

// ── Feature cards ────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: 'path',  label: 'Choose the path'   },
  { icon: 'user',  label: 'Start application' },
  { icon: 'face',  label: 'Check identity'    },
  { icon: 'cycle', label: 'Track process'     },
]

const FeatureCard = ({ icon, label, isMobile }) => (
  <div style={{
    flex: '1 0 0',
    height: isMobile ? 'auto' : '166px',
    backgroundColor: '#ffffff',
    border: '2px solid #e8e8ea',
    borderRadius: '16px',
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    minWidth: 0,
    boxSizing: 'border-box',
  }}>
    <Icons icon={icon} state="active" size={36} />
    <p style={{
      fontFamily: FONT_BODY,
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: 1.6,
      letterSpacing: '0.8px',
      color: '#1f1f1f',
      textAlign: 'center',
      margin: 0,
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
    }}>{label}</p>
  </div>
)

const bold = { fontWeight: 700, fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }

const TuCreditEmpathize = () => {
  const { isMobile } = useResponsive()

  return (
    /* Outer cream wrapper — same pattern as DollarCityWireframes */
    <div style={{
      backgroundColor: '#fffefa',
      width: '100%',
      paddingLeft:  isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop:    isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      display: 'flex',
      justifyContent: 'center',
      boxSizing: 'border-box',
    }}>

      {/* Inner purple card with rounded corners */}
      <div style={{
        backgroundColor: '#5d5f98',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '1090px',
        paddingLeft:  isMobile ? '20px' : '64px',
        paddingRight: isMobile ? '20px' : '64px',
        paddingTop:    isMobile ? '28px' : '64px',
        paddingBottom: isMobile ? '28px' : '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '64px',
        boxSizing: 'border-box',
      }}>

        {/* ── Title + body ─────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%', maxWidth: '902px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '24px' : '32px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: 0,
              color: '#ffffff',
              textAlign: 'center',
              width: '100%',
              margin: 0,
            }}>Empathize</p>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#ffffff',
              width: '100%',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
            }}>
              To better understand users interested in mortgage loans, I focused on how people perceive and approach long-term financial decisions. For many users, applying for a mortgage is{' '}
              <span style={bold}>one of the most significant commitments</span>
              {' '}they will ever make,{' '}
              <span style={bold}>often accompanied by fear, confusion, and a lack of financial confidence.</span>
              {' '}Research showed that potential borrowers want to feel informed and in control, but they frequently struggle with complex{' '}
              <span style={bold}>terminology, unclear requirements, and overwhelming information.</span>
              {' '}Many users delay or abandon the process because they feel unprepared or unsure about their eligibility, even before starting an application.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── What do users do? ────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%', maxWidth: '902px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '29px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '18px' : '20px',
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '1px',
              color: '#ffffff',
              margin: 0,
            }}>What do users do?</p>
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '24px',
              alignItems: isMobile ? 'stretch' : 'center',
              width: '100%',
            }}>
              {FEATURES.map(({ icon, label }) => (
                <FeatureCard key={label} icon={icon} label={label} isMobile={isMobile} />
              ))}
            </div>
          </div>
        </AnimatedOnScroll>

      </div>
    </div>
  )
}

export default TuCreditEmpathize
