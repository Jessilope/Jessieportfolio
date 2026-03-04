import React from 'react'
import { colors } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'
import Icons from './Icons'

const features = [
  { icon: 'component', size: 36, label: 'Components UI KIT', fontSize: '18px', lineHeight: 1.5, letterSpacing: '0.9px' },
  { icon: 'layers',    size: 36, label: 'Organized Layers',  fontSize: '16px', lineHeight: 1.6, letterSpacing: '0.8px' },
  { icon: 'screen',    size: 36, label: 'Modern app screens', fontSize: '16px', lineHeight: 1.6, letterSpacing: '0.8px' },
]

const FeatureCard = ({ icon, size, label, fontSize, lineHeight, letterSpacing, isMobile }) => (
  <div style={{
    flex: isMobile ? 'unset' : '1 0 0',
    width: '100%',
    minWidth: '0',
    height: '166px',
    backgroundColor: '#fff',
    border: '2px solid #f9f9f9',
    borderRadius: '16px',
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    boxSizing: 'border-box',
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      alignItems: 'center',
      width: '100%',
    }}>
      <Icons icon={icon} state="active" size={size} />
      <p style={{
        fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
        fontSize,
        fontWeight: 400,
        lineHeight,
        letterSpacing,
        color: '#1f1f1f',
        textAlign: 'center',
        margin: 0,
        width: '100%',
      }}>{label}</p>
    </div>
  </div>
)

const LexiOverview = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: colors.backgrounds.main,
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

      {/* Content overview */}
      <AnimatedOnScroll animation="fadeIn" duration={700} style={{ width: '100%' }}>
        <div style={{
          width: '100%',
          maxWidth: '902px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}>
          <p style={{
            fontFamily: `'Poppins', sans-serif`,
            fontSize: '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '1.2px',
            color: '#c8c8c8',
            margin: 0,
          }}>
            Project overview
          </p>
          <p style={{
            fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#212121',
            margin: 0,
          }}>
            The app LEXI provides a structured and supportive environment where users can practice without fear of judgment, making language learning feel approachable rather than intimidating. Through the integration of Lexi AI, users receive personalized guidance, adaptive conversations, and meaningful practice tailored to their level and interests. As a result, learners feel more secure, more motivated, and more willing to communicate transforming language practice into a consistent, natural habit instead of a stressful experience.
          </p>
        </div>
      </AnimatedOnScroll>

      {/* Main features */}
      <AnimatedOnScroll animation="slideUp" delay={100} duration={600} style={{ width: '100%' }}>
        <div style={{
          width: '100%',
          maxWidth: '902px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
            <p style={{
              fontFamily: `'Poppins', sans-serif`,
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '1px',
              color: '#c8c8c8',
              margin: 0,
              flex: '1 0 0',
            }}>
              Main feature
            </p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '24px',
            alignItems: 'stretch',
            justifyContent: 'center',
            width: '100%',
          }}>
            {features.map((f) => (
              <FeatureCard key={f.label} {...f} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </AnimatedOnScroll>

    </section>
  )
}

export default LexiOverview
