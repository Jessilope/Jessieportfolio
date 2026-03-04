import React, { useState, useRef } from 'react'
import { colors } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const ALL_IMAGES = [
  '/assets/images/lexi/data-collection/state 1/Data collection 1.png',
  '/assets/images/lexi/data-collection/state 1/Data collection 2.png',
  '/assets/images/lexi/data-collection/state 1/Data collection 3.png',
  '/assets/images/lexi/data-collection/state 1/Data collection 4.png',
  '/assets/images/lexi/data-collection/state 1/Data collection 5.png',
]

// All cards share the same bottom edge (front card bottom = top + height)
const FRONT = { top: 64, left: 18, width: 410, height: 342 }
const bottomEdge = FRONT.top + FRONT.height  // 406
// Center X of front card — back cards align horizontally to it
const frontCx = FRONT.left + FRONT.width / 2  // 223

const makeSlot = (width, height, rotate) => ({
  top:  bottomEdge - height,
  left: Math.round(frontCx - width / 2),
  width,
  height,
  rotate,
})

const SLOTS = [
  { ...FRONT, rotate: 0 },       // front
  makeSlot(370, 308, 10),        // slot 1
  makeSlot(330, 275, 19),        // slot 2
  makeSlot(295, 246, 28),        // slot 3
  makeSlot(262, 219, 37),        // slot 4 — furthest back
]

// Smart Animate ease-in-out (Figma default)
const EASING = 'cubic-bezier(0.42, 0, 0.58, 1)'
const DURATION = 600

const CardStack = ({ scale = 1 }) => {
  const [deck, setDeck] = useState([0, 1, 2, 3, 4])
  // exitingCard: imgIdx that is currently in its exit micro-animation before deck rotates
  const [exitingCard, setExitingCard] = useState(null)
  const lockedRef = useRef(false)

  const W = 620
  const H = 470

  const handleClick = () => {
    if (lockedRef.current) return
    lockedRef.current = true

    const frontCard = deck[0]

    // Phase 1: exit animation on front card (scale down + fade out, 200ms)
    setExitingCard(frontCard)

    setTimeout(() => {
      // Phase 2: rotate deck — back card teleports behind, rest animate smoothly
      setExitingCard(null)
      setDeck(prev => {
        const [front, ...rest] = prev
        return [...rest, front]
      })
      // Unlock after transition finishes
      setTimeout(() => { lockedRef.current = false }, DURATION + 50)
    }, 200)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'relative',
        width: `${W * scale}px`,
        height: `${H * scale}px`,
        flex: 1,
        cursor: 'pointer',
      }}
    >
      {[...deck].reverse().map((imgIdx) => {
        const deckPos = deck.indexOf(imgIdx)
        const slot = SLOTS[deckPos]
        const zIdx = 10 - deckPos * 2
        const isExiting = exitingCard === imgIdx
        // The card at the very back just teleported there — no transition
        const isBack = deckPos === deck.length - 1

        let transform = `rotate(${slot.rotate}deg)`
        let opacity = 1
        let transition = `all ${DURATION}ms ${EASING}`
        let currentZIdx = zIdx

        if (isExiting) {
          // Shrink and fade the front card out before the deck rotates
          transform = `rotate(${slot.rotate}deg) scale(0.9) translateY(8px)`
          opacity = 0
          transition = 'transform 0.2s cubic-bezier(0.4, 0, 1, 1), opacity 0.2s ease'
          currentZIdx = 20
        } else if (isBack) {
          // Instantly snaps behind — no visible fly-through
          transition = 'none'
        }

        return (
          <div
            key={imgIdx}
            style={{
              position: 'absolute',
              top: `${slot.top * scale}px`,
              left: `${slot.left * scale}px`,
              width: `${slot.width * scale}px`,
              height: `${slot.height * scale}px`,
              transform,
              transformOrigin: 'bottom center',
              opacity,
              borderRadius: `${16 * scale}px`,
              overflow: 'hidden',
              background: 'transparent',
              boxShadow: 'none',
              zIndex: currentZIdx,
              transition,
            }}
          >
            <img
              alt=""
              src={ALL_IMAGES[imgIdx]}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'fill',
                pointerEvents: 'none',
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

const LexiDataCollection = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: colors.backgrounds.main,
      width: '100%',
      paddingTop: '128px',
      paddingBottom: '64px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      boxSizing: 'border-box',
    }}>

      <AnimatedOnScroll animation="fadeIn" duration={700} style={{ width: '100%' }}>
        <div style={{ width: '100%', maxWidth: '950px' }}>
          <p style={{
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '1.2px',
            color: '#c8c8c8',
            margin: 0,
          }}>Data collection</p>
        </div>
      </AnimatedOnScroll>

      <AnimatedOnScroll animation="slideUp" delay={100} duration={600} style={{ width: '100%' }}>
        <div style={{
          width: '100%',
          maxWidth: '950px',
          backgroundColor: '#5d5f98',
          borderRadius: '24px',
          padding: '24px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isMobile ? '32px' : '0',
          boxSizing: 'border-box',
          overflow: 'hidden',
          minHeight: `${470 + 48}px`,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
              fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#eaebf2',
              margin: 0,
            }}>
              The research phase focused on analyzing real user experiences with language exchange apps. I reviewed open-source data from App Store and Google Play comments and benchmarked platforms such as HelloTalk and Tandem.
            </p>
          </div>

          <CardStack scale={isMobile ? 0.55 : 1} />
        </div>
      </AnimatedOnScroll>

    </section>
  )
}

export default LexiDataCollection
