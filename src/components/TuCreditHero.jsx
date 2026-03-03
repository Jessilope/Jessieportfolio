import Navbar from './Navbar'
import useResponsive from '../hooks/useResponsive'

const Ring = ({ style }) => (
  <div style={{
    borderRadius: '50%',
    border: '1.5px solid rgba(255,255,255,0.35)',
    position: 'absolute',
    ...style,
  }} />
)

const TuCreditHero = () => {
  const { isMobile } = useResponsive()

  // Figma: height 892px, gradient from #bd90ff to white
  const heroStyles = {
    position: 'relative',
    width: '100%',
    height: '892px',
    background: 'linear-gradient(to bottom, #bd90ff 0%, #dfc4ff 45%, #ffffff 100%)',
    overflow: 'hidden',
    flexShrink: 0,
  }

  return (
    <div style={heroStyles}>
      <Navbar />

      {/* "Tu credit" large gradient text — Figma: Roboto Medium 300px desktop / 100px mobile */}
      <div style={{
        position: 'absolute',
        left: isMobile ? '24px' : '119px',
        top: isMobile ? '361px' : '204px',
        width: isMobile ? '364px' : '1012px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p style={{
          fontFamily: `'Roboto', sans-serif`,
          fontSize: isMobile ? '100px' : '300px',
          fontWeight: 500,
          lineHeight: '1.7',
          background: isMobile
            ? 'linear-gradient(to right, rgba(164,100,255,0.56) 0%, rgba(84,5,199,0.56) 49%, rgba(52,0,126,0.56) 100%)'
            : 'linear-gradient(to right, rgba(164,100,255,0.5) 0%, rgba(84,5,199,0.5) 49%, rgba(52,0,126,0.5) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          margin: 0,
          whiteSpace: 'nowrap',
          fontVariationSettings: "'wdth' 100",
        }}>Tu credit</p>
      </div>

      {/* Card/tablet mockup — Figma: 542×356px, rotate(16.7deg), shadow */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          left: 'calc(119px + 216.73px)',
          top: 'calc(204px + 179px)',
          width: '622.008px',
          height: '496.749px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ transform: 'rotate(16.7deg)', flexShrink: 0 }}>
            <img
              src="/assets/images/hero/tucredit-hero-mockup.png"
              alt="Tu credit app"
              style={{
                width: '542.642px',
                height: '355.801px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 45px rgba(88,0,146,0.25))',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}

      {/* Mobile: card mockup */}
      {isMobile && (
        <div style={{
          position: 'absolute',
          left: '29.86px',
          top: '415.21px',
          width: '360.434px',
          height: '290.175px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ transform: 'rotate(16.7deg)', flexShrink: 0 }}>
            <img
              src="/assets/images/hero/tucredit-hero-mockup.png"
              alt="Tu credit app"
              style={{
                width: '313.644px',
                height: '208.843px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 45px rgba(88,0,146,0.25))',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}

      {/* Decorative rings */}
      <Ring style={{ width: '524px', height: '518px', left: 'calc(75% - 7px)', top: '-228px' }} />
      <Ring style={{ width: '524px', height: '518px', left: '-80px', top: '-315px' }} />
      <Ring style={{ width: '157px', height: '156px', left: '65px', top: '778px' }} />
      <Ring style={{ width: '59px', height: '58px', left: 'calc(83.33% - 49.67px)', top: '797px' }} />
      <Ring style={{ width: '59px', height: '58px', left: 'calc(100% - 80px)', top: '539px' }} />
    </div>
  )
}

export default TuCreditHero
