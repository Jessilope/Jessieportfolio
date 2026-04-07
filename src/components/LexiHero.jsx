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

const TAGS = ['UX-UI design', 'Figma', 'ChatGPT', 'Figma Make']

// Desktop highlight widths from Figma: Lexi=184px, App=213px
// Mobile highlight widths from Figma:  Lexi=100px, App=118px
const LexiTitle = ({ isMobile }) => {
  const [activeWord, setActiveWord] = useState('lexi')

  // On mobile there's no hover — auto-cycle the highlight instead
  useEffect(() => {
    if (!isMobile) return
    const interval = setInterval(() => {
      setActiveWord(prev => (prev === 'lexi' ? 'app' : 'lexi'))
    }, 1800)
    return () => clearInterval(interval)
  }, [isMobile])

  const fontSize      = isMobile ? '48px' : '88px'
  const letterSpacing = isMobile ? '2.4px' : '4.4px'
  const hlHeight      = isMobile ? '67px' : '122px'
  const lexiWidth     = isMobile ? '100px' : '184px'
  const appWidth      = isMobile ? '118px' : '213px'
  const strokeWidth   = isMobile ? '1px' : '1.5px'

  const appActive = activeWord === 'app'

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
      {/* sliding highlight block */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: appActive ? lexiWidth : '0px',
        width: appActive ? appWidth : lexiWidth,
        height: hlHeight,
        backgroundColor: '#668aff',
        transition: 'left 400ms cubic-bezier(0.4, 0, 0.2, 1), width 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 0,
      }} />
      <p
        style={{
          ...textBase,
          color: appActive ? 'transparent' : '#313248',
          WebkitTextStroke: appActive ? `${strokeWidth} #313248` : '0px transparent',
        }}
        onMouseEnter={() => setActiveWord('lexi')}
      >Lexi</p>
      <p
        style={{
          ...textBase,
          color: appActive ? '#313248' : 'transparent',
          WebkitTextStroke: appActive ? '0px transparent' : `${strokeWidth} #313248`,
        }}
        onMouseEnter={() => setActiveWord('app')}
      > App</p>
    </div>
  )
}

const LexiHero = () => {
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
        width: isMobile ? '100%' : '625px',
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
          <LexiTitle isMobile={isMobile} />
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#39424e',
            margin: 0,
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>
            Smart language learning, powered by AI.{isMobile ? ' ' : <br />}
            {' '}Practice real conversations anytime, anywhere.
          </p>
        </div>
      </div>
      </div>

      {/* Phone mockup — desktop */}
      {!isMobile && (
        <div style={{
          position: 'absolute',
          left: 'calc(41.67% + 3.01px)',
          top: '155.82px',
          width: '657.917px',
          height: '847.262px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}>
          <div style={{ transform: 'rotate(12.83deg)', flexShrink: 0 }}>
            <div style={{
              width: '502.939px',
              height: '754.409px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <img
                src="/assets/images/hero/lexi-hero-mockup.png"
                alt="Lexi app"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-0.04%',
                  width: '100.08%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '-60px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          zIndex: 1,
        }}>
          <div style={{ transform: 'rotate(12.83deg)', flexShrink: 0 }}>
            <img
              src="/assets/images/hero/lexi-hero-mockup.png"
              alt="Lexi app"
              style={{
                width: '270px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default LexiHero
