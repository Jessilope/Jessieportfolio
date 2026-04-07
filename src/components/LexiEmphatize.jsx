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
      fontWeight: 300,
      lineHeight: 1.6,
      letterSpacing: '0.8px',
      color: '#22282f',
      margin: 0,
      flex: '1 0 0',
    }}>{text}</p>
  </div>
)

const EmpathizeCard = ({ title, items, iconName, isMobile }) => (
  <div style={{
    flex: isMobile ? 'none' : '1 0 0',
    width: isMobile ? '100%' : undefined,
    height: isMobile ? 'auto' : '399px',
    backgroundColor: '#ffffff',
    border: '1px solid #e8e8ea',
    borderRadius: '16px',
    padding: '32px 24px 16px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.25)',
  }}>
    <p style={{
      fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.9px',
      color: '#22282f',
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
      backgroundColor: '#5d5f98',
      borderRadius: '12px',
      width: '100%',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
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
            fontSize: isMobile ? '32px' : '40px',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '2px',
            color: '#f8f9fa',
            textAlign: 'center',
            margin: 0,
            width: '100%',
          }}>Empathize</p>

          <p style={{
            fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#f8f9fa',
            margin: 0,
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>
            I focused on understanding how <strong style={{ fontWeight: 700 }}>language beginners</strong> feel when practicing a new language, especially in digital environments that rely on social interaction. Even when learners enjoy the exchange, <strong style={{ fontWeight: 700 }}>anxiety and pressure</strong> can limit participation and slow progress. However, studies also show that <strong style={{ fontWeight: 700 }}>supportive interaction, real-time feedback, and a sense of accountability</strong> help reduce fear and increase motivation.
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
          gap: '24px',
          alignItems: isMobile ? 'stretch' : 'center',
        }}>
          <EmpathizeCard
            title="Many learners want to practice but they"
            items={PAIN_POINTS}
            iconName="warning"
            isMobile={isMobile}
          />
          <EmpathizeCard
            title="This led me to prioritize"
            items={PRIORITIES}
            iconName="success"
            isMobile={isMobile}
          />
        </div>
      </AnimatedOnScroll>

    </section>
  )
}

export default LexiEmphatize
