import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

const Highlight = ({ label, text }) => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
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
    }}>
      <span style={{
        fontFamily: FONT_BODY,
        fontWeight: 700,
        color: '#595959',
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
      }}>{label}:</span>
      {' '}
      {text}
    </p>
  </div>
)

const LexiDesignPrinciples = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: isMobile ? '64px' : '64px',
      paddingBottom: isMobile ? '32px' : '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="slideUp" duration={600} style={{ width: '100%', maxWidth: '902px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%' }}>

          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_POPPINS,
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '1.2px',
              color: '#8a8a8a',
              margin: 0,
            }}>Design Principles</p>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#212121',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              After defining the problem and user needs, I moved into establishing the core design principles that would guide the product from the very beginning. These principles served as a foundation for shaping the structure, interactions, and visual direction of the app before moving into wireframes.
            </p>
          </div>

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            <Highlight
              label="Modern"
              text="The interface adopts contemporary design patterns and a clean visual language that feels current and familiar, aligning with how users interact with AI-powered learning products today."
            />
            <Highlight
              label="Human & Supportive"
              text="The experience feels natural and encouraging, using friendly language, guided interactions, and AI assistance to reduce anxiety and help users practice with confidence."
            />
            <Highlight
              label="Guided & Clear"
              text="Interactions are designed to gently guide users through each step, making it easy to start conversations, follow learning paths, and understand what to do next without confusion."
            />
          </div>

        </div>
      </AnimatedOnScroll>
    </section>
  )
}

export default LexiDesignPrinciples
