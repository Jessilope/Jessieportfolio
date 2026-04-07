import AnimatedOnScroll from './AnimatedOnScroll'
import useResponsive from '../hooks/useResponsive'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

// Left border accent for each highlight item
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
      fontWeight: 300,
      lineHeight: 1.6,
      letterSpacing: '0.8px',
      color: '#22282f',
      margin: 0,
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    }}>{text}</p>
  </div>
)

const QuadrantLabel = ({ label }) => (
  <p style={{
    fontFamily: FONT_BODY,
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.9px',
    color: '#5d5f98',
    margin: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }}>{label}</p>
)

const Quadrant = ({ label, items }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    flex: '1 0 0',
    minWidth: 0,
  }}>
    <QuadrantLabel label={label} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', width: '100%' }}>
      {items.map((text, i) => <Highlight key={i} text={text} />)}
    </div>
  </div>
)

const SAYS = [
  `"I just want to learn English, not look for a date."`,
  `"Many users there just want to flirt."`,
  `"I'm interested in tools that help me stay consistent and improve fluency."`,
  `"I learn better when I have space to focus."`,
]

const THINKS = [
  `"If I stay consistent, I'll improve casually."`,
  `"I want my learning environment to feel clear and intentional."`,
  `"The tools I use should align with how I like to learn."`,
  `"I need a consistent, distraction-free way to learn."`,
]

const FEELS = [
  'Curious and excited to explore new ways of learning.',
  'Comfortable when learning spaces feel safe and focused.',
  'Motivated when she sees her progress.',
  'Frustrated, determined.',
]

const DOES = [
  'Studies during flexible times like evenings or breaks.',
  'Reflects on what is working and adjusts her methods.',
  'Sets personal language goals.',
  "Notices she's not learning much with current methods.",
]

const LexiEmpathyMap = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '48px',
      boxSizing: 'border-box',
    }}>

      {/* Header */}
      <AnimatedOnScroll animation="fadeIn" duration={700} style={{ width: '100%', maxWidth: '903px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
          <p style={{
            fontFamily: FONT_POPPINS,
            fontSize: '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: 0,
            color: '#8d8d99',
            margin: 0,
          }}>Empathy map</p>
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#22282f',
            margin: 0,
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>
            After analyzing the collected data, I synthesized the key patterns and behaviors into an empathy map. This allowed me to translate research findings into a human perspective, capturing what users say, think, feel, and do when learning a new language. The empathy map helped clarify emotional pain points and learning motivations, creating a solid foundation for the next design decisions.
          </p>
        </div>
      </AnimatedOnScroll>

      {/* Empathy map body: quadrants + persona */}
      <AnimatedOnScroll animation="slideUp" delay={100} duration={600} style={{ width: '100%', maxWidth: '902px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: isMobile ? 'column' : 'row',
        }}>

          {/* Left: 4 quadrants in 2 rows × 2 cols — image on mobile */}
          {isMobile ? (
            <img
              src="/assets/images/lexi/empathy map.png"
              alt="Empathy map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '8px',
              }}
            />
          ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '45px',
            width: '697px',
            flexShrink: 0,
            minWidth: 0,
          }}>
            {/* Row 1: Says + Thinks */}
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', width: '100%' }}>
              <Quadrant label="Says" items={SAYS} />
              <Quadrant label="Thinks" items={THINKS} />
            </div>
            {/* Row 2: Feels + Does */}
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', width: '100%' }}>
              <Quadrant label="Feels" items={FEELS} />
              <Quadrant label="Does" items={DOES} />
            </div>
          </div>
          )}

          {/* Right: Persona card — hidden on mobile */}
          {!isMobile && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '27px',
            width: isMobile ? '100%' : '205px',
            flexShrink: 0,
          }}>
            {/* Persona image */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '289px',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '8px 7px',
              boxSizing: 'border-box',
            }}>
              <img
                alt="Jenna Rodriguez"
                src="/assets/images/lexi/persona-jenna.jpg"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '8px',
                background: 'linear-gradient(to bottom, rgba(102,102,102,0.2) 12%, rgba(0,0,0,0.2) 71%)',
              }} />
              {/* Name + age */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                width: '210px',
              }}>
                <p style={{
                  fontFamily: FONT_POPPINS,
                  fontSize: '20px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: '1px',
                  color: '#fffefa',
                  margin: 0,
                }}>Jenna Rodriguez</p>
                <p style={{
                  fontFamily: FONT_BODY,
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  letterSpacing: '0.8px',
                  color: '#ffffff',
                  margin: 0,
                  fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
                }}>26 years old</p>
              </div>
            </div>

            {/* Persona description */}
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#8d8d99',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              Jenna is a curious and committed language learner. She learns independently from home and is always exploring new ways to make her learning experience more intentional. She values having tools that adapt to her rhythm and goals.
            </p>
          </div>
          )}

        </div>
      </AnimatedOnScroll>

    </section>
  )
}

export default LexiEmpathyMap
