import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

// ── Feature cards ────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: '/assets/images/tucredit/icon-path.svg',  label: 'Choose the path'    },
  { icon: '/assets/images/tucredit/icon-user.svg',  label: 'Start application'  },
  { icon: '/assets/images/tucredit/icon-face.svg',  label: 'Check identity'     },
  { icon: '/assets/images/tucredit/icon-cycle.svg', label: 'Track process'      },
]

const FeatureCard = ({ icon, label, isMobile }) => (
  <div style={{
    flex: '1 0 0',
    height: isMobile ? 'auto' : '166px',
    backgroundColor: '#ffffff',
    border: '2px solid #f9f9f9',
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
    <div style={{ width: '36px', height: '36px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={icon} alt="" style={{ width: '36px', height: '36px', display: 'block' }} />
    </div>
    <p style={{
      fontFamily: FONT_BODY,
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: 1.6,
      letterSpacing: '0.8px',
      color: '#1f1f1f',
      textAlign: 'center',
      margin: 0,
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    }}>{label}</p>
  </div>
)

const TuCreditEmpathize = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '32px' : '64px',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '64px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '902px',
      }}>

        {/* ── Title + body ─────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', width: '100%' }}>
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
            }}>Empathize</p>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#212121',
              width: '100%',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              To better understand users interested in mortgage loans, I focused on how people perceive and approach long-term financial decisions. For many users, applying for a mortgage is one of the most significant commitments they will ever make, often accompanied by fear, confusion, and a lack of financial confidence. Research showed that potential borrowers want to feel informed and in control, but they frequently struggle with complex terminology, unclear requirements, and overwhelming information. Many users delay or abandon the process because they feel unprepared or unsure about their eligibility, even before starting an application.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── What do users do? ────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '29px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '18px' : '20px',
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '1px',
              color: '#8a8a8a',
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
