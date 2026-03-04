import React from 'react'
import { colors } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'
import Icons from './Icons'

const PAIN_POINTS = [
  'Fear making mistakes in front of others',
  'Feel insecure about their language level',
  'Worry that their effort will not be taken seriously',
  'Avoid interaction when the experience feels judgmental or unstructured',
]

const PRIORITIES = [
  'Guided interactions instead of open, unstructured conversations',
  'Low-pressure practice that normalizes mistakes',
  'Clear progress tracking to reinforce a sense of achievement',
  'A calm, friendly tone that reduces tension and builds trust',
]

const ListItem = ({ text, iconName }) => (
  <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    width: '100%',
  }}>
    <Icons icon={iconName} state="active" size={24} style={{ flexShrink: 0 }} />
    <p style={{
      fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.8px',
      color: '#212121',
      margin: 0,
      flex: '1 0 0',
    }}>{text}</p>
  </div>
)

const EmpathizeCard = ({ title, items, iconName, gradientTo, isMobile }) => (
  <div style={{
    flex: isMobile ? 'none' : '1 0 0',
    width: isMobile ? '100%' : undefined,
    height: isMobile ? 'auto' : '399px',
    background: `linear-gradient(to bottom, #fff, ${gradientTo})`,
    border: '1px solid #f9f9f9',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    boxSizing: 'border-box',
  }}>
    <p style={{
      fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.9px',
      color: '#bcbcbc',
      textAlign: 'center',
      margin: 0,
      width: '100%',
    }}>{title}</p>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: '1 0 0',
      gap: isMobile ? '16px' : '0',
    }}>
      {items.map((text, i) => (
        <ListItem key={i} text={text} iconName={iconName} />
      ))}
    </div>
  </div>
)

const LexiEmphatize = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: colors.backgrounds.main,
      width: '100%',
      paddingTop: '32px',
      paddingBottom: '64px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '64px',
      boxSizing: 'border-box',
    }}>

      {/* Header + body */}
      <AnimatedOnScroll animation="fadeIn" duration={700} style={{ width: '100%' }}>
        <div style={{
          width: '100%',
          maxWidth: '902px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}>
          <p style={{
            fontFamily: `'Poppins', sans-serif`,
            fontSize: isMobile ? '24px' : '32px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '0',
            color: '#5D5F98',
            textAlign: 'center',
            margin: 0,
            width: '100%',
          }}>Empathize</p>

          <p style={{
            fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#212121',
            margin: 0,
          }}>
            I focused on understanding how language beginners feel when practicing a new language, especially in digital environments that rely on social interaction. Even when learners enjoy the exchange, anxiety and pressure can limit participation and slow progress. However, studies also show that supportive interaction, real-time feedback, and a sense of accountability help reduce fear and increase motivation.
          </p>
        </div>
      </AnimatedOnScroll>

      {/* Two cards */}
      <AnimatedOnScroll animation="slideUp" delay={100} duration={600} style={{ width: '100%' }}>
        <div style={{
          width: '100%',
          maxWidth: '902px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '29px',
          alignItems: isMobile ? 'stretch' : 'center',
        }}>
          <EmpathizeCard
            title="Many learners want to practice but they"
            items={PAIN_POINTS}
            iconName="warning"
            gradientTo="#fff5f5"
            isMobile={isMobile}
          />
          <EmpathizeCard
            title="This led me to prioritize"
            items={PRIORITIES}
            iconName="success"
            gradientTo="#f2fdee"
            isMobile={isMobile}
          />
        </div>
      </AnimatedOnScroll>

    </section>
  )
}

export default LexiEmphatize
