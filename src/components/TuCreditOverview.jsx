import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'
import Icons from './Icons'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

// ── Feature card data ────────────────────────────────────────────────────────
const FEATURES = [
  { icon: 'component', label: 'Components UI KIT' },
  { icon: 'layers',    label: 'Organized Layers'  },
  { icon: 'screen',    label: 'Modern app screens' },
  { icon: 'customize', label: 'Easy to Customize'  },
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
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    }}>{label}</p>
  </div>
)

const TuCreditOverview = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '64px' : '112px',
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

        {/* ── Project overview title + body ────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '1.2px',
              color: '#c8c8c8',
              margin: 0,
              whiteSpace: isMobile ? 'normal' : 'nowrap',
            }}>Project overview</p>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#212121',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              This project focuses on designing a digital mortgage experience that simplifies a complex and high commitment financial decision. Mortgage loans often generate confusion and mistrust due to technical language and information overload. The goal was to reduce that friction by prioritizing clarity, transparency, and structured guidance. The experience breaks down complex information into clear, manageable steps helping users understand their options, assess affordability, and move forward with confidence.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── Main features ───────────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '18px' : '20px',
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '1px',
              color: '#c8c8c8',
              margin: 0,
            }}>Main features</p>
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '24px',
              alignItems: isMobile ? 'stretch' : 'center',
              width: '100%',
            }}>
              {FEATURES.map(({ icon, label }) => (
                <FeatureCard key={icon} icon={icon} label={label} isMobile={isMobile} />
              ))}
            </div>
          </div>
        </AnimatedOnScroll>

      </div>
    </div>
  )
}

export default TuCreditOverview
