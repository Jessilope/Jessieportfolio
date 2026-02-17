import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const DollarCityDefine = () => {
  const { isMobile } = useResponsive()

  const imgLine7 = "http://localhost:3845/assets/e0eb98abebd9a3d0cfbc4677c7877cfd6062a3a0.svg"
  const imgLine8 = "http://localhost:3845/assets/6b05ad72df0718be5d06facb9a44bbcfdb3ac193.svg"
  const imgLine9 = "http://localhost:3845/assets/35c05f089c6f0deeb20a13707cc26ed564fd4ee2.svg"

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '112px',
    paddingBottom: isMobile ? '64px' : '112px',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'flex-start',
    width: isMobile ? '100%' : '1033px',
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

  const highlightsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '32px',
    alignItems: 'center',
    width: '100%',
  }

  const highlightItemStyles = {
    display: 'flex',
    gap: isMobile ? '12px' : '9px',
    alignItems: isMobile ? 'flex-start' : 'center',
  }

  const lineContainerStyles = {
    width: '3px',
    backgroundColor: '#370161',
    flexShrink: 0,
    alignSelf: 'stretch',
    minHeight: isMobile ? '60px' : undefined,
    borderRadius: '1.5px',
  }

  const highlightTextStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    width: isMobile ? '100%' : '747px',
    flexShrink: isMobile ? 1 : 0,
    margin: 0,
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
          <p style={titleStyles}>Define</p>
        </div>

        {/* Introductory Text */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
          <div style={textStyles}>
            <p style={{ margin: '0', lineHeight: 1.6 }}>
              Using insights from user research and the user journey map, I synthesized the findings into clear, actionable problems. The analysis revealed that the main challenges were not related to product availability, but to trust, clarity, and speed throughout the shopping experience. Emotional drops in the journey highlighted moments where users felt frustrated, insecure, or unsupported.
            </p>
            <p style={{ margin: '0', lineHeight: 1.6 }}>
              From this, three core problems were defined:
            </p>
          </div>
        </div>

        {/* Highlights Container */}
        <div style={highlightsContainerStyles}>
          {/* Highlight 1 */}
          <div style={highlightItemStyles}>
            <div style={lineContainerStyles}></div>
            <p style={highlightTextStyles}>
              Users lose confidence when information is unclear or hard to find, especially before and during the purchase process.
            </p>
          </div>

          {/* Highlight 2 */}
          <div style={{ ...highlightItemStyles, gap: isMobile ? '12px' : '11px' }}>
            <div style={lineContainerStyles}></div>
            <p style={highlightTextStyles}>
              Slow or ineffective customer service negatively impacts the overall experience and reduces the likelihood of returning.
            </p>
          </div>

          {/* Highlight 3 */}
          <div style={{ ...highlightItemStyles, gap: isMobile ? '12px' : '8px' }}>
            <div style={lineContainerStyles}></div>
            <p style={{ ...highlightTextStyles, width: isMobile ? '100%' : '753px' }}>
              Many users feel insecure about buying online, particularly when it comes to payments and support.
            </p>
          </div>
        </div>

        {/* Final Problem Statement */}
        <div style={{ ...textStyles, display: 'flex', flexDirection: 'column' }}>
          <p style={{ 
            margin: '0', 
            lineHeight: 1.6,
            fontWeight: 700,
            color: '#370161',
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700"
          }}>
            How might I design a Dollar City mobile experience that feels fast, clear, and trustworthy, reducing friction and increasing user confidence in online purchases?
          </p>
        </div>
      </div>
    </section>
  )
}

export default DollarCityDefine
