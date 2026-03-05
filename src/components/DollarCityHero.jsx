import Navbar from './Navbar'
import useResponsive from '../hooks/useResponsive'

const Ring = ({ style }) => (
  <div style={{
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style,
  }}>
    <div style={{
      transform: 'rotate(19.63deg)',
      borderRadius: '50%',
      border: '1.5px solid rgba(255,255,255,0.25)',
      width: '79%',
      height: '79%',
      flexShrink: 0,
    }} />
  </div>
)

const DollarCityHero = () => {
  const { isMobile } = useResponsive()

  const heroStyles = {
    position: 'relative',
    width: '100%',
    height: isMobile ? '700px' : '892px',
    background: 'linear-gradient(to bottom, #087831 0%, #6ec98a 55%, #ffffff 100%)',
    overflow: 'hidden',
    flexShrink: 0,
  }

  return (
    <div style={heroStyles}>
      <Navbar />

      {/* Rings */}
      <Ring style={{ width: '524px', height: '518px', left: '-58px', top: '-293px' }} />
      <Ring style={{ width: '524px', height: '518px', left: 'calc(75% + 1px)', top: '-259px' }} />
      <Ring style={{ width: '59px',  height: '58px',  left: 'calc(91.67% + 5.67px)', top: '576px' }} />
      <Ring style={{ width: '157px', height: '156px', left: '39px', top: '778px' }} />
      <Ring style={{ width: '59px',  height: '58px',  left: 'calc(66.67% + 37.67px)', top: '813px' }} />

      {/* Content container — matches Figma: left:96px top:203px width:1088px */}
      <div style={{
        position: 'absolute',
        left: isMobile ? '0' : '96px',
        top: isMobile ? '120px' : '203px',
        width: isMobile ? '100%' : '1088px',
        height: isMobile ? 'auto' : '669px',
      }}>
      </div>

      {/* "DOLLAR CITY" background text — absolute to hero */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: isMobile ? '233px' : '448px',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        textAlign: 'center',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <p style={{
          fontFamily: `'Archivo Black', sans-serif`,
          fontSize: isMobile ? '75px' : '200px',
          fontWeight: 400,
          lineHeight: 1,
          color: 'rgba(235,219,50,0.66)',
          textAlign: 'center',
          margin: 0,
          whiteSpace: 'nowrap',
        }}>DOLLAR CITY</p>
      </div>

      {/* Phone mockup — bottom center of hero, no background */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: isMobile ? '-40px' : '-180px',
        width: isMobile ? '260px' : '410px',
        zIndex: 2,
        pointerEvents: 'none',
      }}>
        <img
          src="/assets/images/hero/dollarcity-hero-mockup.png"
          alt="Dollarcity app"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
            filter: 'drop-shadow(0px 0px 46px rgba(0,183,66,0.25))',
          }}
        />
      </div>

    </div>
  )
}

export default DollarCityHero
