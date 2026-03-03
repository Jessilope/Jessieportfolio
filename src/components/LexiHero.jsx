import Navbar from './Navbar'
import useResponsive from '../hooks/useResponsive'

// Decorative ring shapes matching Figma "Subtract" blob-ring elements
// Recreated as CSS circle outlines (stroke only, no fill)
const Ring = ({ style }) => (
  <div style={{
    borderRadius: '50%',
    border: '1.5px solid rgba(255,255,255,0.35)',
    position: 'absolute',
    ...style,
  }} />
)

const LexiHero = () => {
  const { isMobile } = useResponsive()

  // Figma: height 892px, gradient from #155dfc to white, centered
  const heroStyles = {
    position: 'relative',
    width: '100%',
    height: '892px',
    background: 'linear-gradient(to bottom, #155dfc 0%, #b3c9ff 60%, #ffffff 100%)',
    overflow: 'hidden',
    flexShrink: 0,
  }

  const mobileHeroStyles = {
    position: 'relative',
    width: '100%',
    height: '892px',
    background: 'linear-gradient(to bottom, #155dfc 0%, #b3c9ff 65%, #ffffff 100%)',
    overflow: 'hidden',
    flexShrink: 0,
  }

  return (
    <div style={isMobile ? mobileHeroStyles : heroStyles}>
      <Navbar />

      {/* Giant "LEXI" background text — Figma: Madimi One 400px, rgba(21,93,252,0.26) */}
      <div style={{
        position: 'absolute',
        left: isMobile ? '50%' : 'calc(8.33% + 55.33px)',
        top: '293px',
        transform: isMobile ? 'translateX(-50%)' : 'none',
        width: isMobile ? '412px' : '956px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <p style={{
          fontFamily: `'Madimi One', sans-serif`,
          fontSize: isMobile ? '150px' : '400px',
          fontWeight: 400,
          lineHeight: '61.6px',
          letterSpacing: '12px',
          color: 'rgba(21,93,252,0.26)',
          textAlign: 'center',
          margin: 0,
          whiteSpace: 'nowrap',
        }}>LEXI</p>
      </div>

      {/* Phone mockup — Figma: 392×588px, rotate(12.83deg), shadow */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          left: 'calc(8.33% + 55.33px + 197.6px)',
          top: 'calc(293px + 33px)',
          width: '512.792px',
          height: '660.371px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ transform: 'rotate(12.83deg)', flexShrink: 0 }}>
            <img
              src="/assets/images/hero/lexi-hero-mockup.png"
              alt="Lexi app"
              style={{
                width: '392px',
                height: '588px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 45px rgba(21,93,252,0.25))',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}

      {/* Mobile: phone mockup positioned bottom-center */}
      {isMobile && (
        <div style={{
          position: 'absolute',
          left: '8px',
          top: '435px',
          width: '403.024px',
          height: '519.012px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ transform: 'rotate(12.83deg)', flexShrink: 0 }}>
            <div style={{
              width: '308.088px',
              height: '462.132px',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 0 45px rgba(21,93,252,0.25)',
              position: 'relative',
            }}>
              <img
                src="/assets/images/hero/lexi-hero-mockup.png"
                alt="Lexi app"
                style={{ position: 'absolute', width: '100.08%', height: '100%', left: '-0.04%', top: 0, objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Decorative rings — exact Figma positions (relative to the 892px hero section) */}
      {/* Top-left large */}
      <Ring style={{ width: '413px', height: '403px', left: '-54px', top: '-260px' }} />
      {/* Left medium */}
      <Ring style={{ width: '277px', height: '270px', left: '-265px', top: '216.97px' }} />
      {/* Bottom-left small */}
      <Ring style={{ width: '124px', height: '121px', left: '20px', top: '778px' }} />
      {/* Right small */}
      <Ring style={{ width: '46px', height: '45px', left: 'calc(91.67% + 18.67px)', top: '642px' }} />
      {/* Bottom-right tiny */}
      <Ring style={{ width: '46px', height: '45px', left: 'calc(75% - 38px)', top: '833px' }} />
      {/* Top-right large */}
      <Ring style={{ width: '413px', height: '403px', left: 'calc(75% + 58px)', top: '-139px' }} />
    </div>
  )
}

export default LexiHero
