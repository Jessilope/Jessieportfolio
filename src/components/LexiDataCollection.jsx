import React, { useState, useEffect, useRef } from 'react'
import { colors } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const REVIEWS = [
  {
    title: 'Injusta',
    stars: 2,
    date: '6 de abril',
    source: 'Faunalond',
    text: 'Tengo pruebas de que fui acosada y amenazada en la app; pero antes de poder reportar al usuario, la aplicación cerró mi cuenta y ahora no puedo crear una nueva. Lo triste es que quisiera poder seguir usando la aplicación por sus beneficios (en tanto a practicar idiomas se refiere).',
  },
  {
    title: 'App de citas disfrazada',
    stars: 1,
    date: '6 de abril',
    source: 'Faunalond',
    text: 'Literal es un app disfrazada que realmente es tinder, todos los hombres te escriben con otras intenciones y si quieres hablar con mujeres te toca pagar subscripción, le doy 1 estrella porque no le puedo dar 0.',
  },
  {
    title: 'Mas o menos',
    stars: 3,
    date: 'Hace 4 años',
    source: 'UNICORNIO ZOMBIE',
    text: 'La idea de la app es buena pero los usuarios están allí con otras intenciones, perdí el interés rápidamente al ver que solo me hablaban hombres buscando de todo menos un intercambio de idiomas. Decepcionada completamente, no la recomiendo.',
  },
  {
    title: 'Es un tinder disfrazado',
    stars: 4,
    date: '6 de abril',
    source: 'Faunalond',
    text: 'La aplicación es genial, me gustó, tiene muchas herramientas, sin embargo, hay muchas personas que escriben con otro tipo de intenciones, y personalmente eso me quita el interés en querer entablar conversaciones en la plataforma.',
  },
]

const StarIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M8 1.5l1.545 3.13 3.455.502-2.5 2.436.59 3.44L8 9.27l-3.09 1.737.59-3.44L3 5.132l3.455-.502L8 1.5z" fill={filled ? '#FFB800' : '#D9D9D9'} />
  </svg>
)

const Stars = ({ count }) => (
  <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
    {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} filled={i <= count} />)}
  </div>
)

const ReviewCard = ({ review, isMobile }) => (
  <div style={{
    width: '100%',
    backgroundColor: 'white',
    border: '0.5px solid #cdd1d7',
    borderRadius: '8px',
    padding: '16px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  }}>
    <p style={{
      fontFamily: FONT_BODY,
      fontSize: isMobile ? '14px' : '18px',
      fontWeight: 700,
      lineHeight: 1.5,
      color: '#000000',
      margin: 0,
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    }}>{review.title}</p>

    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Stars count={review.stars} />
      <p style={{
        fontFamily: FONT_BODY,
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: '0.624px',
        color: '#7f8d9f',
        margin: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
      }}>{review.date} · {review.source}</p>
    </div>

    <p style={{
      fontFamily: FONT_BODY,
      fontSize: isMobile ? '13px' : '18px',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: isMobile ? '0.65px' : '0.9px',
      color: '#4f5d6d',
      margin: 0,
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    }}>{review.text}</p>
  </div>
)

const ReviewCarousel = ({ reviews, isMobile }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [exitingIndex, setExitingIndex] = useState(null)
  const activeRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const current = activeRef.current
      setExitingIndex(current)
      const next = (current + 1) % reviews.length
      activeRef.current = next
      setActiveIndex(next)
      setTimeout(() => setExitingIndex(null), 600)
    }, 4000)
    return () => clearInterval(interval)
  }, [reviews.length])

  return (
    <div style={{
      width: isMobile ? '100%' : '451px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}>
      {/* Card area */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '280px' : '340px',
        overflow: 'hidden',
      }}>
        {reviews.map((review, i) => {
          const isActive = i === activeIndex
          const isExiting = i === exitingIndex

          let opacity = 0
          let transform = 'translateX(40px) scale(0.97)'

          if (isActive) {
            opacity = 1
            transform = 'translateX(0) scale(1)'
          } else if (isExiting) {
            opacity = 0
            transform = 'translateX(-40px) scale(0.97)'
          }

          return (
            <div key={i} style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              opacity,
              transform,
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
              pointerEvents: isActive ? 'auto' : 'none',
            }}>
              <ReviewCard review={review} isMobile={isMobile} />
            </div>
          )
        })}
      </div>

      {/* Dot indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '6px',
        alignItems: 'center',
      }}>
        {reviews.map((_, i) => (
          <div key={i} style={{
            width: i === activeIndex ? '22px' : '10px',
            height: '10px',
            borderRadius: '5px',
            backgroundColor: i === activeIndex ? '#5d5f98' : '#cdd1d7',
            transition: 'width 0.4s ease-in-out, background-color 0.4s ease-in-out',
          }} />
        ))}
      </div>
    </div>
  )
}

const LexiDataCollection = () => {
  const { isMobile } = useResponsive()

  return (
    <section id="data-collection" style={{
      backgroundColor: colors.backgrounds.main,
      width: '100%',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      boxSizing: 'border-box',
    }}>

      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '24px',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '950px',
        margin: '0 auto',
        padding: '24px',
        borderRadius: '16px',
        boxSizing: 'border-box',
      }}>

        {/* Left — title + description (staggered entrance) */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          width: isMobile ? '100%' : '429px',
          flexShrink: 0,
        }}>
          <AnimatedOnScroll animation="slideUp" duration={600} delay={0}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '1.2px',
              color: '#8a8a8a',
              margin: 0,
            }}>Data collection</p>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="slideUp" duration={600} delay={180}>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#39424e',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              The research phase focused on analyzing real user experiences with language exchange apps. I reviewed open-source data from App Store and Google Play comments and benchmarked platforms such as HelloTalk and Tandem.
            </p>
          </AnimatedOnScroll>
        </div>

        {/* Right — auto-rotating carousel */}
        <AnimatedOnScroll animation="slideLeft" duration={700} delay={300} style={{ flexShrink: 0, width: isMobile ? '100%' : 'auto' }}>
          <ReviewCarousel reviews={REVIEWS} isMobile={isMobile} />
        </AnimatedOnScroll>

      </div>

    </section>
  )
}

export default LexiDataCollection
