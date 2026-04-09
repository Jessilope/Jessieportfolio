import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const componentsImage = 'https://www.figma.com/api/mcp/asset/311d0b94-99ee-482c-8fc3-8d917632193c'

const TripFinderComponentSet = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '32px' : '64px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="fadeIn" duration={700} style={{ width: '100%' }}>
        <div style={{
          width: '100%',
          maxWidth: '903px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '57px',
          alignItems: 'center',
        }}>

          {/* Text block */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'flex-start',
            width: '100%',
          }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '1.2px',
              color: '#8d8d99',
              margin: 0,
            }}>Component set</p>

            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#22282f',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
            }}>
              A consistent component set was created to maintain visual harmony across the interface and support scalability. Core elements such as buttons, cards, navigation bars, and input fields were designed with flexibility in mind, allowing them to adapt seamlessly to both light and dark modes.
            </p>
          </div>

          {/* Components image */}
          <div style={{
            width: isMobile ? '100%' : '880px',
            height: isMobile ? 'auto' : '792px',
            flexShrink: 0,
            position: 'relative',
          }}>
            <img
              src={componentsImage}
              alt="Component set examples"
              style={{
                width: '100%',
                height: isMobile ? 'auto' : '100%',
                objectFit: 'cover',
                display: 'block',
                pointerEvents: 'none',
              }}
            />
          </div>

        </div>
      </AnimatedOnScroll>
    </section>
  )
}

export default TripFinderComponentSet
