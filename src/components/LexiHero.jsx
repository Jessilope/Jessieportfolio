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
        left: 0,
        right: 0,
        top: isMobile ? '520px' : '420px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <p style={{
          fontFamily: `'Madimi One', sans-serif`,
          fontSize: isMobile ? '200px' : '400px',
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
          left: '50%',
          transform: 'translateX(-50%)',
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

      {/* Mobile: phone mockup — bigger, centered at bottom, clipped by section overflow:hidden */}
      {isMobile && (
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '-60px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
          <div style={{ transform: 'rotate(12.83deg)', flexShrink: 0 }}>
            <img
              src="/assets/images/hero/lexi-hero-mockup.png"
              alt="Lexi app"
              style={{
                width: '320px',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 45px rgba(21,93,252,0.25))',
                display: 'block',
              }}
            />
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
