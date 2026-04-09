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

const TAGS = ['UX-UI design', 'Figma', 'Framer', 'Relume', 'ChatGpt']

// "Tu" + "credit" — highlight color #f59c42 (orange)
const TuCreditTitle = ({ isMobile }) => {
  const [activeWord, setActiveWord] = useState('tu')

  useEffect(() => {
    if (!isMobile) return
    const interval = setInterval(() => {
      setActiveWord(prev => (prev === 'tu' ? 'credit' : 'tu'))
    }, 1800)
    return () => clearInterval(interval)
  }, [isMobile])

  const fontSize       = isMobile ? '48px' : '80px'
  const letterSpacing  = isMobile ? '2.4px' : '4px'
  const hlHeight       = isMobile ? '67px' : '112px'
  const tuWidth        = isMobile ? '62px' : '103px'
  const creditWidth    = isMobile ? '192px' : '320px'
  const strokeWidth    = isMobile ? '1px' : '1.5px'
  const creditActive   = activeWord === 'credit'

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
        left: creditActive ? tuWidth : '0px',
        width: creditActive ? creditWidth : tuWidth,
        height: hlHeight,
        backgroundColor: '#cda6ff',
        transition: 'left 400ms cubic-bezier(0.4, 0, 0.2, 1), width 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 0,
      }} />
      <p
        style={{
          ...textBase,
          color: creditActive ? 'transparent' : '#313248',
          WebkitTextStroke: creditActive ? `${strokeWidth} #313248` : '0px transparent',
        }}
        onMouseEnter={() => !isMobile && setActiveWord('tu')}
      >Tu</p>
      <p
        style={{
          ...textBase,
          color: creditActive ? '#313248' : 'transparent',
          WebkitTextStroke: creditActive ? '0px transparent' : `${strokeWidth} #313248`,
        }}
        onMouseEnter={() => !isMobile && setActiveWord('credit')}
      >credit</p>
    </div>
  )
}

const TuCreditHero = () => {
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
        width: isMobile ? '100%' : '474px',
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
          <TuCreditTitle isMobile={isMobile} />
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
            Clear, simple access to credit solutions.{isMobile ? ' ' : <br />}
            Apply, track, and manage your finances.
          </p>
        </div>
      </div>
      </div>

      {/* Desktop screenshots — desktop */}
      {!isMobile && (
        <>
          {/* Home4 1 — behind, left */}
          <div style={{
            position: 'absolute',
            left: 'calc(50% + 2px)',
            top: '241px',
            width: '289px',
            height: '402px',
            borderRadius: '6px',
            overflow: 'hidden',
            zIndex: 1,
            pointerEvents: 'none',
            boxShadow: 'none',
          }}>
            <img
              src="/assets/images/tucredit/Home4 1.png"
              alt="TuCredit home"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }}
            />
          </div>

          {/* Requisitos 1 — front, right */}
          <div style={{
            position: 'absolute',
            left: 'calc(66.67% - 37.31px)',
            top: '291px',
            width: '303px',
            height: '443px',
            borderRadius: '15px',
            overflow: 'hidden',
            zIndex: 2,
            pointerEvents: 'none',
            boxShadow: 'none',
          }}>
            <img
              src="/assets/images/tucredit/Requisitos 1.png"
              alt="TuCredit requisitos"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }}
            />
          </div>
        </>
      )}

      {/* Screenshots — mobile */}
      {isMobile && (
        <>
          {/* Home4 1 — behind, left (~60% of desktop size) */}
          <div style={{
            position: 'absolute',
            left: '52px',
            top: '530px',
            width: '175px',
            height: '242px',
            borderRadius: '6px',
            overflow: 'hidden',
            zIndex: 1,
            pointerEvents: 'none',
            boxShadow: 'none',
          }}>
            <img
              src="/assets/images/tucredit/Home4 1.png"
              alt="TuCredit home"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }}
            />
          </div>
          {/* Requisitos 1 — front, right (~60% of desktop size) */}
          <div style={{
            position: 'absolute',
            left: '159px',
            top: '555px',
            width: '180px',
            height: '263px',
            borderRadius: '8px',
            overflow: 'hidden',
            zIndex: 2,
            pointerEvents: 'none',
            boxShadow: 'none',
          }}>
            <img
              src="/assets/images/tucredit/Requisitos 1.png"
              alt="TuCredit requisitos"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default TuCreditHero
