import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'
import Icons from './Icons'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`

const problems = [
  'There are not enough cashiers available.',
  'Feel insecure about online payments',
  'Items placed in the wrong price section.',
  'May be poor customer service',
]

const priorities = [
  'Make customer feel confident that they are making the right choice',
  'Avoid confusion or unnecessary steps',
  'See clear prices upfront',
  'Find products quickly',
]

const ListItem = ({ text, iconName }) => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', width: '100%' }}>
    <Icons icon={iconName} state="active" size={24} style={{ flexShrink: 0 }} />
    <p style={{
      fontFamily: FONT_BODY,
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: 1.6,
      letterSpacing: '0.8px',
      color: '#22282f',
      margin: 0,
      flex: '1 0 0',
    }}>{text}</p>
  </div>
)

const EmpathizeCard = ({ title, items, iconName, isMobile }) => (
  <div style={{
    flex: isMobile ? 'none' : '1 0 0',
    width: isMobile ? '100%' : undefined,
    height: isMobile ? 'auto' : '399px',
    backgroundColor: '#ffffff',
    border: '1px solid #cdd1d7',
    borderRadius: '16px',
    padding: '32px 24px 16px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    boxSizing: 'border-box',
  }}>
    <p style={{
      fontFamily: FONT_BODY,
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.9px',
      color: '#22282f',
      textAlign: 'center',
      margin: 0,
      width: '100%',
    }}>{title}</p>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: '1 0 0',
      gap: isMobile ? '16px' : '0',
    }}>
      {items.map((text, i) => (
        <ListItem key={i} text={text} iconName={iconName} />
      ))}
    </div>
  </div>
)

const DollarCityEmpathize = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefa',
      width: '100%',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: '128px',
      paddingBottom: '48px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '48px',
      boxSizing: 'border-box',
    }}>

      {/* Title + body */}
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
            fontSize: isMobile ? '24px' : '32px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '0',
            color: '#5D5F98',
            textAlign: 'center',
            margin: 0,
          }}>Empathize</p>
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#22282f',
            margin: 0,
          }}>
            I focused on understanding how people behave when shopping for low-cost, everyday products and what they expect from a digital experience. Dollar City customers usually shop with a clear intention. They are not looking to explore endlessly.
          </p>
        </div>
      </AnimatedOnScroll>

      {/* Two cards */}
      <AnimatedOnScroll animation="slideUp" delay={100} duration={600} style={{ width: '100%' }}>
        <div style={{
          width: '100%',
          maxWidth: '902px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '29px',
          alignItems: isMobile ? 'stretch' : 'center',
          margin: '0 auto',
        }}>
          <EmpathizeCard
            title="Many customers want to buy but"
            items={problems}
            iconName="warning"
            isMobile={isMobile}
          />
          <EmpathizeCard
            title="This led me to prioritize"
            items={priorities}
            iconName="success"
            isMobile={isMobile}
          />
        </div>
      </AnimatedOnScroll>

    </section>
  )
}

export default DollarCityEmpathize
