import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const DollarCityEmpathize = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefa',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '64px',
    display: 'flex',
    alignItems: 'center',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: isMobile ? '100%' : '1033px',
    flexShrink: 0,
  }

  const titleStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 400,
    lineHeight: isMobile ? '28px' : '32px',
    letterSpacing: '0',
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }

  const bodyContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : spacing.l, // 32px
    alignItems: 'flex-start',
    width: '100%',
    flexShrink: 0,
  }

  const textStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    width: '100%',
  }

  const listStyles = {
    margin: 0,
    paddingLeft: isMobile ? '20px' : '24px',
    listStyleType: 'disc',
  }

  const listItemStyles = {
    marginBottom: 0,
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        {/* Title */}
        <div style={titleStyles}>
          <p style={{ margin: 0, lineHeight: '32px' }}>Empathize</p>
        </div>

        {/* Body */}
        <div style={bodyContainerStyles}>
          {/* First text block */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <div style={textStyles}>
              <p style={{ margin: '0', lineHeight: 1.6 }}>
                I focused on understanding how people behave when shopping for low-cost, everyday products and what they expect from a digital experience.
              </p>
              <p style={{ margin: '0', lineHeight: 1.6 }}>
                Dollar City customers usually shop with a clear intention. They are not looking to explore endlessly; they want to:
              </p>
            </div>
          </div>

          {/* First list */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <span style={{ lineHeight: 1.6 }}>Find products quickly</span>
              </li>
              <li style={listItemStyles}>
                <span style={{ lineHeight: 1.6 }}>See clear prices upfront</span>
              </li>
              <li style={listItemStyles}>
                <span style={{ lineHeight: 1.6 }}>Avoid confusion or unnecessary steps</span>
              </li>
              <li style={listItemStyles}>
                <span style={{ lineHeight: 1.6 }}>Feel confident that they are making the right choice</span>
              </li>
            </ul>
          </div>

          {/* Second text block */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <div style={textStyles}>
              <p style={{ margin: '0', lineHeight: 1.6 }}>
                Many users associate Dollar City with speed and practicality, so any digital experience that feels slow or complex would create frustration. This insight shaped the emotional goal of the app:
                <br />
                make users feel in control, efficient, and reassured throughout the journey.
              </p>
              <p style={{ margin: '0', lineHeight: 1.6 }}>
                By putting myself in the user's position, I prioritized:
              </p>
            </div>
          </div>

          {/* Second list */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <div style={textStyles}>
              <ul style={listStyles}>
                <li style={listItemStyles}>
                  <span style={{ lineHeight: 1.6 }}>Familiar patterns instead of innovation for innovation's sake</span>
                </li>
                <li style={listItemStyles}>
                  <span style={{ lineHeight: 1.6 }}>Clear visual hierarchy to reduce cognitive load</span>
                </li>
                <li style={listItemStyles}>
                  <span style={{ lineHeight: 1.6 }}>Simple language and predictable interactions</span>
                </li>
              </ul>
              <p style={{ margin: '0', lineHeight: 1.6 }}>
                Empathy guided the design toward an experience that feels straightforward, honest, and easy, just like shopping at Dollar City in person.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DollarCityEmpathize
