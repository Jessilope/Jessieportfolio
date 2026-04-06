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

const TAGS = ['UX-UI design', 'Figma', 'ChatGPT', 'Figma Make']

const LexiHero = () => {
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
        width: isMobile ? '100%' : '625px',
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
          }}>Lexi App</p>
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#39424e',
            margin: 0,
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>
            Smart language learning, powered by AI.{isMobile ? ' ' : <br />}
            {' '}Practice real conversations anytime, anywhere.
          </p>
        </div>
      </div>
      </div>

      {/* Phone mockup — desktop */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          left: 'calc(41.67% + 3.01px)',
          top: '155.82px',
          width: '657.917px',
          height: '847.262px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}>
          <div style={{ transform: 'rotate(12.83deg)', flexShrink: 0 }}>
            <div style={{
              width: '502.939px',
              height: '754.409px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <img
                src="/assets/images/hero/lexi-hero-mockup.png"
                alt="Lexi app"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-0.04%',
                  width: '100.08%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '-60px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          zIndex: 1,
        }}>
          <div style={{ transform: 'rotate(12.83deg)', flexShrink: 0 }}>
            <img
              src="/assets/images/hero/lexi-hero-mockup.png"
              alt="Lexi app"
              style={{
                width: '320px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default LexiHero
