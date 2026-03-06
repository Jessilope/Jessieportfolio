import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const mockupImage = '/assets/images/dollarcity/mockup-4.png'

const DollarCityMockup = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefa',
      width: '100%',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '64px' : '112px',
      paddingBottom: isMobile ? '32px' : '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="fadeIn" delay={0} duration={700}>
        {isMobile ? (
          /* Mobile: simple full-width image */
          <img
            src={mockupImage}
            alt="Dollar City app mockup"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        ) : (
          /* Desktop: exact Figma crop — 902×919 container */
          <div style={{ width: '902px', height: '919px', position: 'relative', flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
              <img
                src={mockupImage}
                alt="Dollar City app mockup"
                style={{
                  position: 'absolute',
                  width: '77.27%',
                  height: '93.25%',
                  top: '3.38%',
                  left: '11.36%',
                  maxWidth: 'none',
                }}
              />
            </div>
          </div>
        )}
      </AnimatedOnScroll>
    </div>
  )
}

export default DollarCityMockup
