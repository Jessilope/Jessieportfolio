import { useState, useEffect } from 'react'
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

const TAGS = ['UI Design', 'Figma', 'ChatGPT', 'Design Kit']

// "Trip" + "finder" — highlight color #ffdf5b (yellow)
const TripFinderTitle = ({ isMobile }) => {
  const [activeWord, setActiveWord] = useState('trip')

  useEffect(() => {
    if (!isMobile) return
    const interval = setInterval(() => {
      setActiveWord(prev => (prev === 'trip' ? 'finder' : 'trip'))
    }, 1800)
    return () => clearInterval(interval)
  }, [isMobile])

  const fontSize       = isMobile ? '48px' : '88px'
  const letterSpacing  = isMobile ? '2.4px' : '4.4px'
  const hlHeight       = isMobile ? '67px' : '123px'
  const tripWidth      = isMobile ? '100px' : '184px'
  const finderWidth    = isMobile ? '155px' : '285px'
  const strokeWidth    = isMobile ? '1px' : '1.5px'
  const finderActive   = activeWord === 'finder'

  const textBase = {
    fontFamily: `'Poppins', sans-serif`,
    fontSize,
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing,
    margin: 0,
    position: 'relative',
    zIndex: 1,
    transition: 'color 300ms ease',
    whiteSpace: 'nowrap',
    cursor: 'default',
  }

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: finderActive ? tripWidth : '0px',
        width: finderActive ? finderWidth : tripWidth,
        height: hlHeight,
        backgroundColor: '#ffdf5b',
        transition: 'left 400ms cubic-bezier(0.4, 0, 0.2, 1), width 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 0,
      }} />
      <p
        style={{
          ...textBase,
          color: finderActive ? 'transparent' : '#313248',
          WebkitTextStroke: finderActive ? `${strokeWidth} #313248` : '0px transparent',
        }}
        onMouseEnter={() => !isMobile && setActiveWord('trip')}
      >Trip</p>
      <p
        style={{
          ...textBase,
          color: finderActive ? '#313248' : 'transparent',
          WebkitTextStroke: finderActive ? '0px transparent' : `${strokeWidth} #313248`,
        }}
        onMouseEnter={() => !isMobile && setActiveWord('finder')}
      >finder</p>
    </div>
  )
}

const TripFinderHero = () => {
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
        width: isMobile ? '100%' : '620px',
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
          <TripFinderTitle isMobile={isMobile} />
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#39424e',
            margin: 0,
            width: isMobile ? '100%' : '466px',
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
          }}>
            A modern travel app for discovering and booking unique vacation rentals around the world.
          </p>
        </div>
      </div>
      </div>

      {/* Phone mockup back (dark) — desktop only */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          left: 'calc(63% + 10px)',
          top: '133px',
          width: '290px',
          height: '626px',
          borderRadius: '22px',
          boxShadow: '0px 0px 24px 4px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          zIndex: 1,
        }}>
          <img
            src="/assets/images/tripfinder/card-mockup 2.png"
            alt="Tripfinder app"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '22px',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}

      {/* Phone mockup front (white) — desktop only */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          left: 'calc(53% + 5px)',
          top: '262px',
          width: '278px',
          height: '600px',
          borderRadius: '16px',
          boxShadow: '0px 0px 24px 4px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          zIndex: 2,
        }}>
          <img
            src="/assets/images/tripfinder/card-mockup 3.png"
            alt="Tripfinder app detail"
            style={{
              position: 'absolute',
              width: '101.49%',
              height: '102.05%',
              left: '-1.29%',
              top: '-0.9%',
              maxWidth: 'none',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}

      {/* Phone mockups — mobile (~45% of desktop) */}
      {isMobile && (
        <>
          {/* Back phone (dark) — right, higher */}
          <div style={{
            position: 'absolute',
            left: '184px',
            top: '520px',
            width: '130px',
            height: '282px',
            borderRadius: '10px',
            boxShadow: '0px 0px 24px 4px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            zIndex: 1,
            pointerEvents: 'none',
          }}>
            <img
              src="/assets/images/tripfinder/card-mockup 2.png"
              alt="Tripfinder app"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          {/* Front phone (white) — left, lower */}
          <div style={{
            position: 'absolute',
            left: '76px',
            top: '558px',
            width: '125px',
            height: '270px',
            borderRadius: '8px',
            boxShadow: '0px 0px 24px 4px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            zIndex: 2,
            pointerEvents: 'none',
          }}>
            <img
              src="/assets/images/tripfinder/card-mockup 3.png"
              alt="Tripfinder app detail"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default TripFinderHero
