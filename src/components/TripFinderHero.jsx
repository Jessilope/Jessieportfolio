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

const TripFinderHero = () => {
  const { isMobile } = useResponsive()

  // Figma: desktop #a964ff → white, mobile #8125f4 → white
  const heroStyles = {
    position: 'relative',
    width: '100%',
    height: '892px',
    background: isMobile
      ? 'linear-gradient(to bottom, #8125f4 0%, #c490ff 55%, #ffffff 100%)'
      : 'linear-gradient(to bottom, #a964ff 0%, #cfa0ff 50%, #ffffff 100%)',
    overflow: 'hidden',
    flexShrink: 0,
  }

  return (
    <div style={heroStyles}>
      <Navbar />

      {/* "Tripfinder" background text — Figma: Righteous 300px desktop / 100px mobile */}
      <div style={{
        position: 'absolute',
        left: isMobile ? '50%' : '482px',
        top: isMobile ? 'calc(394px + 52px)' : 'calc(394px + 52px)',
        transform: isMobile ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)',
        width: isMobile ? '494px' : '257px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: `'Righteous', sans-serif`,
          fontSize: isMobile ? '100px' : '300px',
          fontWeight: 400,
          lineHeight: '1.2',
          letterSpacing: isMobile ? '1px' : '3px',
          color: 'rgba(255,255,255,0.51)',
          margin: 0,
          whiteSpace: 'nowrap',
          textAlign: 'center',
        }}>Tripfinder</p>
      </div>

      {/* Decorative rings — positions from Figma */}
      {/* Large rings top */}
      <Ring style={{ width: '574px', height: '519px', left: '914px', top: '-282px' }} />
      <Ring style={{ width: '541px', height: '489px', left: '-97.59px', top: '-179px' }} />
      {/* Small bottom rings */}
      <Ring style={{ width: '173px', height: '154px', left: '58.38px', top: '737px' }} />
      <Ring style={{ width: '59px', height: '50px', left: '1018px', top: '774px' }} />
      <Ring style={{ width: '59px', height: '50px', left: '1201px', top: '553px' }} />
    </div>
  )
}

export default TripFinderHero
