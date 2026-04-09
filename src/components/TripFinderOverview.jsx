import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const TripFinderOverview = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefa',
      width: '100%',
      paddingTop: isMobile ? '48px' : '128px',
      paddingBottom: isMobile ? '32px' : '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="fadeIn" duration={700} style={{ width: '100%' }}>
        <div style={{
          width: '100%',
          maxWidth: '902px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          margin: '0 auto',
        }}>
          <p style={{
            fontFamily: `'Poppins', sans-serif`,
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '1.2px',
            color: '#8d8d99',
            margin: 0,
          }}>Project Overview</p>

          <div style={{
            fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#22282f',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
          }}>
            <p style={{ margin: 0 }}>
              TripFinder is a UI-focused project designed to improve my visual and interface design skills. The concept targets women who travel alone, with the goal of creating an experience that feels safe, calm, and inspiring.
            </p>
            <p style={{ margin: 0 }}>
              For this project, I intentionally focused on UI design rather than research, allowing me to explore layout, visual hierarchy, color, and component consistency without constraints.
            </p>
          </div>
        </div>
      </AnimatedOnScroll>
    </section>
  )
}

export default TripFinderOverview
