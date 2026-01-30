import { colors } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const TripFinderReflection = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    width: '100%',
    flexShrink: 0,
  }

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '48px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const titleContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '0',
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const titleStyles = {
    lineHeight: isMobile ? '28px' : '32px',
    margin: 0,
  }

  const descriptionContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.8px',
    color: colors.semantic.textPrimary,
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const paragraphStyles = {
    margin: 0,
    marginBottom: 0,
  }

  const lastParagraphStyles = {
    margin: 0,
  }

  return (
    <div style={sectionStyles}>
      <div style={containerStyles}>
        <div style={titleContainerStyles}>
          <p style={titleStyles}>Reflection</p>
        </div>
        <div style={descriptionContainerStyles}>
          <p style={paragraphStyles}>
            TripFinder was an opportunity to focus purely on strengthening my UI design skills without the constraints of research or complex flows. By concentrating on visual hierarchy, component consistency, and light and dark mode variations, I was able to refine my eye for detail and improve how interfaces feel as a complete system.
          </p>
          <p style={lastParagraphStyles}>
            This project helped me better understand how visual decisions alone can communicate safety, clarity, and trust—especially in a context like solo travel for women. It also reinforced the importance of consistency and adaptability in interface design, lessons I now apply to more research-driven projects.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TripFinderReflection
