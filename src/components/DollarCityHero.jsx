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

const TAGS = ['UX-UI Design', 'Figma', 'Gemini']

// "Dollar" + "city" — highlight color #4ad07e (green)
const DollarCityTitle = ({ isMobile }) => {
  const [activeWord, setActiveWord] = useState('dollar')

  useEffect(() => {
    if (!isMobile) return
    const interval = setInterval(() => {
      setActiveWord(prev => (prev === 'dollar' ? 'city' : 'dollar'))
    }, 1800)
    return () => clearInterval(interval)
  }, [isMobile])

  const fontSize      = isMobile ? '48px' : '80px'
  const letterSpacing = isMobile ? '2.4px' : '4px'
  const hlHeight      = isMobile ? '67px' : '112px'
  const dollarWidth   = isMobile ? '156px' : '260px'
  const cityWidth     = isMobile ? '102px' : '170px'
  const strokeWidth   = isMobile ? '1px' : '1.5px'
  const cityActive    = activeWord === 'city'

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
        left: cityActive ? dollarWidth : '0px',
        width: cityActive ? cityWidth : dollarWidth,
        height: hlHeight,
        backgroundColor: '#4ad07e',
        transition: 'left 400ms cubic-bezier(0.4, 0, 0.2, 1), width 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 0,
      }} />
      <p
        style={{
          ...textBase,
          color: cityActive ? 'transparent' : '#313248',
          WebkitTextStroke: cityActive ? `${strokeWidth} #313248` : '0px transparent',
        }}
        onMouseEnter={() => !isMobile && setActiveWord('dollar')}
      >Dollar</p>
      <p
        style={{
          ...textBase,
          color: cityActive ? '#313248' : 'transparent',
          WebkitTextStroke: cityActive ? '0px transparent' : `${strokeWidth} #313248`,
        }}
        onMouseEnter={() => !isMobile && setActiveWord('city')}
      >city</p>
    </div>
  )
}

const DollarCityHero = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: isMobile ? 'auto' : '100vh',
      minHeight: isMobile ? '100svh' : '600px',
      backgroundColor: '#fffefa',
      overflow: 'hidden',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '80px' : '0',
      paddingBottom: isMobile ? '320px' : '0',
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
        width: isMobile ? '100%' : '556px',
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
          <DollarCityTitle isMobile={isMobile} />
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#39424e',
            margin: 0,
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
          }}>
            Fast, simple shopping for everyday essentials.{isMobile ? ' ' : <br />}
            Browse, add, and pay in seconds.
          </p>
        </div>
      </div>
      </div>

      {/* Phone mockups — desktop only */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          left: 'calc(50% + 32px)',
          top: '138px',
          width: '460px',
          height: 'calc(100vh - 138px)',
          zIndex: 1,
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
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
                maxWidth: 'none',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}

      {/* Phone mockup — mobile */}
      {isMobile && (
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '24px',
          width: '260px',
          zIndex: 1,
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
      )}
    </div>
  )
}

export default DollarCityHero
