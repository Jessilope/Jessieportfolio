import Navbar from './Navbar'
import useResponsive from '../hooks/useResponsive'

const Ring = ({ style, color = 'rgba(255,255,255,0.25)' }) => (
  <div style={{
    borderRadius: '50%',
    border: `1.5px solid ${color}`,
    position: 'absolute',
    ...style,
  }} />
)

const DollarCityHero = () => {
  const { isMobile } = useResponsive()

  // Figma: height 892px, gradient from #087831 to white
  const heroStyles = {
    position: 'relative',
    width: '100%',
    height: '892px',
    background: 'linear-gradient(to bottom, #087831 0%, #6ec98a 55%, #ffffff 100%)',
    overflow: 'hidden',
    flexShrink: 0,
  }

  return (
    <div style={heroStyles}>
      <Navbar />

      {/* "DOLLAR CITY" background text — Figma: Archivo Black, 200px desktop / 75px mobile */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: isMobile ? '233px' : '245px',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: isMobile ? '663px' : '1544px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: `'Archivo Black', sans-serif`,
          fontSize: isMobile ? '75px' : '200px',
          fontWeight: 400,
          lineHeight: '90px',
          color: 'rgba(235,219,50,0.66)',
          textAlign: 'center',
          margin: 0,
          whiteSpace: 'nowrap',
        }}>DOLLAR CITY</p>
      </div>

      {/* Phone mockup — Figma: 410×669px centered */}
      <div style={{
        position: 'absolute',
        left: isMobile ? '53px' : '338px',
        top: isMobile ? '203px' : '2px',
        width: isMobile ? '259px' : '410px',
        height: isMobile ? '421px' : '669px',
        borderRadius: isMobile ? '24px' : '32px',
        overflow: 'hidden',
        boxShadow: '0 0 46px rgba(0,183,66,0.25)',
      }}>
        <img
          src="/assets/images/hero/dollarcity-hero-mockup.png"
          alt="Dollarcity app"
          style={{
            position: 'absolute',
            width: '100%',
            height: '144.79%',
            left: '0',
            top: '-19.01%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Decorative rings */}
      <Ring style={{ width: '524px', height: '518px', left: '-58px', top: '-293px' }} />
      <Ring style={{ width: '524px', height: '518px', left: 'calc(75% + 1px)', top: '-259px' }} />
      <Ring style={{ width: '157px', height: '156px', left: '39px', top: '778px' }} />
      <Ring style={{ width: '59px', height: '58px', left: 'calc(66.67% + 37.67px)', top: '813px' }} />
      <Ring style={{ width: '59px', height: '58px', left: 'calc(91.67% + 5.67px)', top: '576px' }} />
    </div>
  )
}

export default DollarCityHero
