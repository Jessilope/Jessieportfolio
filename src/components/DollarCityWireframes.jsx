import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const ROW1 = [
  '/assets/images/dollarcity/wireframe-1.png',
  '/assets/images/dollarcity/wireframe-2.png',
  '/assets/images/dollarcity/wireframe-3.png',
  '/assets/images/dollarcity/wireframe-4.png',
]
const ROW2 = [
  '/assets/images/dollarcity/wireframe-5.png',
  '/assets/images/dollarcity/wireframe-6.png',
  '/assets/images/dollarcity/wireframe-7.png',
  '/assets/images/dollarcity/wireframe-8.png',
]
const ALL = [...ROW1, ...ROW2]

const DollarCityWireframes = () => {
  const { isMobile, isTablet } = useResponsive()

  return (
    /* Outer section — cream background, standard padding */
    <div style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingLeft:  isMobile ? '24px' : isTablet ? '48px' : '96px',
      paddingRight: isMobile ? '24px' : isTablet ? '48px' : '96px',
      paddingTop:    isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>

      {/* Inner purple card */}
      <div style={{
        backgroundColor: '#5d5f98',
        borderRadius: isMobile ? '10px' : '12px',
        width: '100%',
        maxWidth: '1090px',
        paddingLeft:  isMobile ? '20px' : isTablet ? '40px' : '64px',
        paddingRight: isMobile ? '20px' : isTablet ? '40px' : '64px',
        paddingTop:    isMobile ? '28px' : isTablet ? '40px' : '64px',
        paddingBottom: isMobile ? '28px' : isTablet ? '40px' : '64px',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '20px' : '48px',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
      }}>

        {/* Title + body */}
        <AnimatedOnScroll animation="fadeIn" duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '12px' : '16px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '22px' : '32px',
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: isMobile ? '1px' : '2px',
              color: '#ffffff',
              margin: 0,
            }}>Wireframes</p>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '13px' : '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#e8e8ea',
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
              margin: 0,
            }}>
              With the information architecture defined and the OOUX method in place, I translated ideas into low-fidelity wireframes to validate structure, flow, and hierarchy before focusing on visual details.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* Wireframe images */}
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          {isMobile ? (
            /* Mobile: 2 rows of 4, images fill the available width */
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              width: '100%',
            }}>
              {[ROW1, ROW2].map((row, ri) => (
                <div key={ri} style={{
                  display: 'flex',
                  gap: '8px',
                  width: '100%',
                  alignItems: 'flex-start',
                }}>
                  {row.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Wireframe ${ri * 4 + i + 1}`}
                      style={{
                        flex: '1 1 0',
                        minWidth: 0,
                        width: '23%',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '6px',
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            /* Tablet / Desktop: 2 rows of 4 */
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isTablet ? '20px' : '35px',
              width: '100%',
              alignItems: 'center',
            }}>
              {[ROW1, ROW2].map((row, ri) => (
                <div key={ri} style={{
                  display: 'flex',
                  gap: isTablet ? '16px' : '35px',
                  alignItems: 'flex-start',
                  width: '100%',
                  justifyContent: 'center',
                }}>
                  {row.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Wireframe ${ri * 4 + i + 1}`}
                      style={{
                        flex: '1 1 0',
                        minWidth: 0,
                        maxWidth: '183px',
                        height: 'auto',
                        display: 'block',
                        borderRadius: '6px',
                        objectFit: 'cover',
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </AnimatedOnScroll>

      </div>
    </div>
  )
}

export default DollarCityWireframes
