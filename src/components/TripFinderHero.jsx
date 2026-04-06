import Navbar from './Navbar'
import useResponsive from '../hooks/useResponsive'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`

const Tag = ({ children }) => (
  <div style={{
    backgroundColor: 'white',
    border: '0.5px solid #cdd1d7',
    borderRadius: '4px',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }}>
    <span style={{
      fontFamily: FONT_BODY,
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.624px',
      color: '#7f8d9f',
      whiteSpace: 'nowrap',
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    }}>{children}</span>
  </div>
)

const TAGS = ['UX-UI Design', 'Figma', 'ChatGPT', 'Design Kit']

const TripFinderHero = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '892px',
      backgroundColor: '#fffefa',
      overflow: 'hidden',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingBottom: isMobile ? '199px' : '0',
      boxSizing: 'border-box',
    }}>
      <Navbar />

      {/* Text content block — maxWidth wrapper mirrors navbar centering */}
      <div style={{
        width: '100%',
        maxWidth: isMobile ? 'none' : '1090px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        width: isMobile ? '100%' : '620px',
        boxSizing: 'border-box',
      }}>
        {/* Tools and tech */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '0.624px',
            color: '#66778c',
            margin: 0,
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>TOOLS AND TECH</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {TAGS.map(tag => <Tag key={tag}>{tag}</Tag>)}
          </div>
        </div>

        {/* Title + subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          <p style={{
            fontFamily: `'Poppins', sans-serif`,
            fontSize: isMobile ? '48px' : '88px',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: isMobile ? '2.4px' : '4.4px',
            color: '#39424e',
            margin: 0,
          }}>Tripfinder</p>
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#39424e',
            margin: 0,
            width: isMobile ? '100%' : '466px',
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
          }}>
            A modern travel app for discovering and booking unique vacation rentals around the world.
          </p>
        </div>
      </div>
      </div>

      {/* Phone mockup back (dark) — desktop only */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          left: 'calc(63% + 10px)',
          top: '133px',
          width: '290px',
          height: '626px',
          borderRadius: '22px',
          boxShadow: '0px 0px 24px 4px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          zIndex: 1,
        }}>
          <img
            src="/assets/images/tripfinder/card-mockup 2.png"
            alt="Tripfinder app"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '22px',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}

      {/* Phone mockup front (white) — desktop only */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          left: 'calc(53% + 5px)',
          top: '262px',
          width: '278px',
          height: '600px',
          borderRadius: '16px',
          boxShadow: '0px 0px 24px 4px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          zIndex: 2,
        }}>
          <img
            src="/assets/images/tripfinder/card-mockup 3.png"
            alt="Tripfinder app detail"
            style={{
              position: 'absolute',
              width: '101.49%',
              height: '102.05%',
              left: '-1.29%',
              top: '-0.9%',
              maxWidth: 'none',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}

      {/* Phone mockup — mobile */}
      {isMobile && (
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '-20px',
          width: '240px',
          height: '260px',
          borderRadius: '16px',
          overflow: 'hidden',
          zIndex: 1,
          pointerEvents: 'none',
        }}>
          <img
            src="/assets/images/tripfinder/card-mockup 3.png"
            alt="Tripfinder app"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '16px',
            }}
          />
        </div>
      )}
    </div>
  )
}

export default TripFinderHero
