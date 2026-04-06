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

const TAGS = ['UX-UI design', 'Figma', 'Framer', 'Relume', 'ChatGpt']

const TuCreditHero = () => {
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
        width: isMobile ? '100%' : '474px',
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
            fontSize: isMobile ? '48px' : '80px',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: isMobile ? '2.4px' : '4px',
            color: '#39424e',
            margin: 0,
          }}>Tucredit</p>
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
            Clear, simple access to credit solutions.{isMobile ? ' ' : <br />}
            Apply, track, and manage your finances.
          </p>
        </div>
      </div>
      </div>

      {/* Desktop screenshots — desktop */}
      {!isMobile && (
        <>
          {/* Home4 1 — behind, left */}
          <div style={{
            position: 'absolute',
            left: 'calc(50% + 2px)',
            top: '241px',
            width: '289px',
            height: '402px',
            borderRadius: '6px',
            overflow: 'hidden',
            zIndex: 1,
            pointerEvents: 'none',
            boxShadow: 'none',
          }}>
            <img
              src="/assets/images/tucredit/Home4 1.png"
              alt="TuCredit home"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }}
            />
          </div>

          {/* Requisitos 1 — front, right */}
          <div style={{
            position: 'absolute',
            left: 'calc(66.67% - 37.31px)',
            top: '291px',
            width: '303px',
            height: '443px',
            borderRadius: '15px',
            overflow: 'hidden',
            zIndex: 2,
            pointerEvents: 'none',
            boxShadow: 'none',
          }}>
            <img
              src="/assets/images/tucredit/Requisitos 1.png"
              alt="TuCredit requisitos"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }}
            />
          </div>
        </>
      )}

      {/* Desktop screenshots — mobile */}
      {isMobile && (
        <>
          <div style={{
            position: 'absolute',
            left: '22%',
            bottom: '60px',
            width: '140px',
            height: '195px',
            borderRadius: '6px',
            overflow: 'hidden',
            zIndex: 1,
            pointerEvents: 'none',
            boxShadow: 'none',
          }}>
            <img
              src="/assets/images/tucredit/Home4 1.png"
              alt="TuCredit home"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }}
            />
          </div>
          <div style={{
            position: 'absolute',
            left: '50%',
            bottom: '35px',
            width: '130px',
            height: '190px',
            borderRadius: '10px',
            overflow: 'hidden',
            zIndex: 2,
            pointerEvents: 'none',
            boxShadow: 'none',
          }}>
            <img
              src="/assets/images/tucredit/Requisitos 1.png"
              alt="TuCredit requisitos"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default TuCreditHero
