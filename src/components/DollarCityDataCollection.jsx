import { useState, useRef } from 'react'
import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

// Cards ordered back→front (index 0 = furthest back)
const CARD_IMAGES = [
  '/assets/images/dollarcity/data collection/data collection 2.png',
  '/assets/images/dollarcity/data collection/data collection 3.png',
  '/assets/images/dollarcity/data collection/data collection 4.png',
  '/assets/images/dollarcity/data collection/data collection 5.png',
]

// Figma node 1811-2250: stacked review cards
// Width + horizontal position from Figma; height auto so full image shows
const W = 529
const CX = W / 2

// left = cx - w/2 from Figma; top staggered back→front, offset to center in container
const SLOTS = [
  { left: Math.round(CX + 80.5 - 368 / 2), top: 50,  w: 368 },  // back
  { left: Math.round(CX + 32   - 397 / 2), top: 75,  w: 397 },
  { left: Math.round(CX - 22.5 - 420 / 2), top: 100, w: 420 },
  { left: Math.round(CX - 61   - 407 / 2), top: 125, w: 407 },  // front
]

const EASING = 'cubic-bezier(0.42, 0, 0.58, 1)'
const DURATION = 600

const ReviewCardStack = () => {
  const [deck, setDeck] = useState([0, 1, 2, 3])
  const [exitingCard, setExitingCard] = useState(null)
  const lockedRef = useRef(false)

  const handleClick = () => {
    if (lockedRef.current) return
    lockedRef.current = true
    const frontCard = deck[0]
    setExitingCard(frontCard)
    setTimeout(() => {
      setExitingCard(null)
      setDeck(prev => { const [front, ...rest] = prev; return [...rest, front] })
      setTimeout(() => { lockedRef.current = false }, DURATION + 50)
    }, 200)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'relative',
        width: `${W}px`,
        height: '360px',
        flexShrink: 0,
        cursor: 'pointer',
      }}
    >
      {[...deck].reverse().map((imgIdx) => {
        const deckPos = deck.indexOf(imgIdx)
        // deck[0]=front → slot[3] (frontmost), deck[3]=back → slot[0]
        const slotIdx = deckPos
        const slot = SLOTS[slotIdx]
        const zIdx = deckPos * 2
        const isExiting = exitingCard === imgIdx
        const isBack = deckPos === deck.length - 1

        let transform = 'none'
        let opacity = 1
        let transition = `all ${DURATION}ms ${EASING}`

        if (isExiting) {
          transform = 'scale(0.92) translateY(6px)'
          opacity = 0
          transition = 'transform 0.2s cubic-bezier(0.4,0,1,1), opacity 0.2s ease'
        } else if (isBack) {
          transition = 'none'
        }

        return (
          <div
            key={imgIdx}
            style={{
              position: 'absolute',
              left: `${slot.left}px`,
              top: `${slot.top}px`,
              width: `${slot.w}px`,
              height: 'auto',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#fff',
              boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.12)',
              zIndex: zIdx,
              transform,
              opacity,
              transition,
            }}
          >
            <img
              src={CARD_IMAGES[imgIdx]}
              alt={`Data collection ${imgIdx + 1}`}
              style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none' }}
            />
          </div>
        )
      })}
    </div>
  )
}

const DollarCityDataCollection = () => {
  const { isMobile } = useResponsive()

  const FONT_POPPINS = `'Poppins', sans-serif`
  const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`

  return (
    <section style={{
      backgroundColor: '#fffefa',
      width: '100%',
      paddingTop: '128px',
      paddingBottom: '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '48px',
      boxSizing: 'border-box',
    }}>

      {/* Title */}
      <AnimatedOnScroll animation="fadeIn" duration={700} style={{ width: '100%' }}>
        <div style={{ width: '100%', maxWidth: '950px', margin: '0 auto' }}>
          <p style={{
            fontFamily: FONT_POPPINS,
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '1.2px',
            color: '#8a8a8a',
            margin: 0,
          }}>Data collection</p>
        </div>
      </AnimatedOnScroll>

      {/* Content card: text left + stacked images right */}
      <AnimatedOnScroll animation="slideUp" delay={100} duration={600} style={{ width: '100%' }}>
        <div style={{
          width: '100%',
          maxWidth: '950px',
          margin: '0 auto',
          backgroundColor: '#5d5f98',
          borderRadius: '24px',
          padding: isMobile ? '24px' : '48px 24px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'stretch',
          gap: isMobile ? '24px' : '0',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}>

          {/* Text */}
          <div style={{
            flex: '1 0 0',
            minWidth: 0,
            padding: isMobile ? '0' : '24px 24px 24px 0',
            display: isMobile ? 'block' : 'flex',
            alignItems: 'center',
          }}>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#fff',
              margin: 0,
            }}>
              The research phase focused on understanding real user experiences in Colombia. I analyzed open-source information, such as user reviews and comments on Google, to identify recurring patterns in how customers perceive Dollar City, especially regarding service quality and trust.
            </p>
          </div>

          {/* Stacked cards */}
          {isMobile ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '8px',
              width: '100%',
              flexShrink: 0,
            }}>
              {CARD_IMAGES.map((src, i) => (
                <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: '#fff' }}>
                  <img src={src} alt={`Data collection ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ alignSelf: 'stretch', display: 'flex', alignItems: 'center', flexShrink: 0, marginBottom: 0 }}>
              <ReviewCardStack />
            </div>
          )}

        </div>
      </AnimatedOnScroll>

    </section>
  )
}

export default DollarCityDataCollection
