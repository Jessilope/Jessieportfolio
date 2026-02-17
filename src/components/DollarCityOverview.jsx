import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const DollarCityOverview = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefa',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '112px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    alignItems: 'center',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'flex-start',
    width: isMobile ? '100%' : '1033px',
    flexShrink: 0,
  }

  const titleStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 400,
    lineHeight: isMobile ? '28px' : '32px',
    letterSpacing: '0',
    color: '#580092',
    textAlign: 'center',
    width: '100%',
    margin: 0,
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
        <p style={titleStyles}>E-comerce simple and efficient mobile flow</p>

        {/* First 3 Paragraphs grouped together */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
          <div style={textStyles}>
            <p style={{ margin: '0', lineHeight: 1.6 }}>
              The Dollar City app project was a conceptual UX/UI case study focused on translating a fast, low-cost, in-store shopping experience into a simple and efficient mobile flow.
            </p>
            <p style={{ margin: '0', lineHeight: 1.6 }}>
              The goal was to design an intuitive purchasing experience that allows users to find products quickly, understand prices clearly, and complete a purchase with confidence, without friction or unnecessary steps.
            </p>
            <p style={{ margin: '0', lineHeight: 1.6 }}>
              This project explores how Object-Oriented UX can be applied to a retail context, organizing the experience around familiar objects such as products, categories, carts, and payment methods. The design prioritizes speed, clarity, and accessibility, aligning with Dollar City's value-driven brand identity.
            </p>
            <p style={{ margin: '0', lineHeight: 1.6 }}>&nbsp;</p>
          </div>
        </div>

        {/* List Section */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
          <div style={textStyles}>
            <p style={{ margin: '0 0 0 0', lineHeight: 1.6 }}>
              The final outcome is a mobile app flow composed of six core screens:
            </p>
            <ul style={listStyles}>
              <li style={listItemStyles}>
                <span style={{ lineHeight: 1.6 }}>Home</span>
              </li>
              <li style={listItemStyles}>
                <span style={{ lineHeight: 1.6 }}>Categories</span>
              </li>
              <li style={listItemStyles}>
                <span style={{ lineHeight: 1.6 }}>Product List</span>
              </li>
              <li style={listItemStyles}>
                <span style={{ lineHeight: 1.6 }}>Product Detail</span>
              </li>
              <li style={listItemStyles}>
                <span style={{ lineHeight: 1.6 }}>Cart</span>
              </li>
              <li style={listItemStyles}>
                <span style={{ lineHeight: 1.6 }}>Payment Method</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DollarCityOverview
