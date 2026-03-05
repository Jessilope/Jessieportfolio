import { colors } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'
import Icons from './Icons'

const features = [
  { icon: 'component', size: 36, label: 'Components UI KIT',  fontSize: '18px', lineHeight: 1.5, letterSpacing: '0.9px' },
  { icon: 'layers',    size: 36, label: 'Organized Layers',   fontSize: '16px', lineHeight: 1.6, letterSpacing: '0.8px' },
  { icon: 'screen',    size: 36, label: 'Modern app screens', fontSize: '16px', lineHeight: 1.6, letterSpacing: '0.8px' },
  { icon: 'customize', size: 36, label: 'Easy to Customize',  fontSize: '18px', lineHeight: 1.5, letterSpacing: '0.9px' },
]

const FeatureCard = ({ icon, size, label, fontSize, lineHeight, letterSpacing, isMobile }) => (
  <div style={{
    flex: isMobile ? 'unset' : '1 0 0',
    width: '100%',
    minWidth: '0',
    height: '166px',
    backgroundColor: '#fff',
    border: '2px solid #f9f9f9',
    borderRadius: '16px',
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    boxSizing: 'border-box',
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      alignItems: 'center',
      width: '100%',
    }}>
      <Icons icon={icon} state="active" size={size} />
      <p style={{
        fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
        fontSize,
        fontWeight: 400,
        lineHeight,
        letterSpacing,
        color: '#1f1f1f',
        textAlign: 'center',
        margin: 0,
        width: '100%',
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
      }}>{label}</p>
    </div>
  </div>
)

const DollarCityOverview = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: colors.backgrounds.main,
      width: '100%',
      paddingTop: '128px',
      paddingBottom: '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '48px',
      boxSizing: 'border-box',
    }}>

      {/* Content overview */}
      <AnimatedOnScroll animation="fadeIn" duration={700} style={{ width: '100%' }}>
        <div style={{
          width: '100%',
          maxWidth: '902px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          margin: '0 auto',
        }}>
          <p style={{
            fontFamily: `'Poppins', sans-serif`,
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '1.2px',
            color: '#8a8a8a',
            margin: 0,
          }}>Project overview</p>

          <p style={{
            fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#212121',
            margin: 0,
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>
            Dollar City app project is a conceptual UX/UI case study focused on translating a fast, low-cost, in-store shopping experience into a simple and efficient mobile flow. The goal was to design an intuitive purchasing experience that allows users to find products quickly, understand prices clearly, and complete a purchase with confidence, without friction or unnecessary steps. This project explores how Object-Oriented UX can be applied to a retail context, organizing the experience around familiar objects such as products, categories, carts, and payment methods. The design prioritizes speed, clarity, and accessibility, aligning with Dollar City's value-driven brand identity.
          </p>
        </div>
      </AnimatedOnScroll>

      {/* Feature cards */}
      <AnimatedOnScroll animation="slideUp" delay={100} duration={600} style={{ width: '100%' }}>
        <div style={{
          width: '100%',
          maxWidth: '902px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          margin: '0 auto',
        }}>
          <p style={{
            fontFamily: `'Poppins', sans-serif`,
            fontSize: isMobile ? '18px' : '20px',
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: '1px',
            color: '#8a8a8a',
            margin: 0,
            flex: '1 0 0',
          }}>Main feature</p>

          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '24px',
            alignItems: 'stretch',
            justifyContent: 'center',
            width: '100%',
          }}>
            {features.map((f) => (
              <FeatureCard key={f.label} {...f} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </AnimatedOnScroll>

    </section>
  )
}

export default DollarCityOverview
