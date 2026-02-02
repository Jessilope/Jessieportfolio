import { useState, useEffect } from 'react'
import { colors, spacing, typography } from '../tokens'
import useResponsive from '../hooks/useResponsive'
import LexiHero from '../components/LexiHero'
import LexiOverview from '../components/LexiOverview'
import LexiEmphatize from '../components/LexiEmphatize'
import LexiDataCollection from '../components/LexiDataCollection'
import LexiDataCollectionResearch from '../components/LexiDataCollectionResearch'
import LexiEmpathyMap from '../components/LexiEmpathyMap'
import LexiUserJourneyMap from '../components/LexiUserJourneyMap'
import LexiDefine from '../components/LexiDefine'
import LexiUserPersona from '../components/LexiUserPersona'
import LexiIdeate from '../components/LexiIdeate'
import LexiDesignPrinciples from '../components/LexiDesignPrinciples'
import LexiWireframes from '../components/LexiWireframes'
import LexiVisual from '../components/LexiVisual'
import LexiTypography from '../components/LexiTypography'
import LexiComponents from '../components/LexiComponents'
import LexiPrototype from '../components/LexiPrototype'
import ContentTable from '../components/ContentTable'
import Footer from '../components/Footer'

const Lexi = () => {
  const { isMobile } = useResponsive()
  const [activeSection, setActiveSection] = useState('Overview')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'empathize', 'define', 'ideate', 'visual', 'prototype', 'reflection']
      const scrollPosition = window.scrollY + 300

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1))
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionClick = (section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  const pageStyles = {
    backgroundColor: colors.backgrounds.main,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  }

  const sectionStyles = {
    backgroundColor: colors.backgrounds.main,
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }

  const headerStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: '32px',
    fontWeight: 400,
    lineHeight: '32px',
    letterSpacing: '0',
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    margin: 0,
  }

  const subheaderStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '1.2px',
    color: '#370161',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    margin: 0,
  }

  const bodyTextStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
  }

  return (
    <div style={pageStyles}>
      <LexiHero />
      
      {/* Content Table - Fixed */}
      <ContentTable activeSection={activeSection} onSectionClick={handleSectionClick} />
      
      {/* Overview Section */}
      <div id="overview">
        <LexiOverview />
      </div>

      {/* Empathize Section */}
      <div id="empathize">
        <LexiEmphatize />
      </div>

      {/* Data Collection Section */}
      <div id="data-collection">
        <LexiDataCollection />
      </div>

      {/* Empathy Map Section (part of Emphatize) */}
      <LexiEmpathyMap />

      {/* Data Collection Research Section */}
      <LexiDataCollectionResearch />

      {/* User Journey Map Section */}
      <LexiUserJourneyMap />

      {/* Define Section */}
      <div id="define">
        <LexiDefine />
      </div>

      {/* User Persona Section */}
      <LexiUserPersona />

      {/* Ideate Section */}
      <div id="ideate">
        <LexiIdeate />
      </div>

      {/* Design Principles Section */}
      <div id="design-principles">
        <LexiDesignPrinciples />
      </div>

      {/* Wireframes Section */}
      <LexiWireframes />

      {/* Visual Section */}
      <div id="visual">
        <LexiVisual />
      </div>

      {/* Typography Section */}
      <LexiTypography />

      {/* Components Section */}
      <LexiComponents />

      {/* Prototype Section */}
      <div id="prototype">
        <LexiPrototype />
      </div>

      {/* Reflection Section */}
      <div id="reflection" style={{
        ...sectionStyles,
        backgroundColor: '#fffefb',
        paddingLeft: isMobile ? '24px' : '64px',
        paddingRight: isMobile ? '24px' : '218px',
        width: '100%',
        maxWidth: isMobile ? '100%' : '1281px',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.xxl,
          width: '100%',
        }}>
          <h2 style={{ ...headerStyles, fontSize: isMobile ? '24px' : '32px' }}>Reflection</h2>
          <p style={{ ...bodyTextStyles, width: '100%', fontSize: isMobile ? '14px' : '16px' }}>
            Designing Lexi was a deeply intentional process that reinforced the value of staying connected to the user's emotional experience throughout each design decision. By starting with empathy, defining clear goals, and building structured workflows, I created a product that feels supportive, modern, and confidence-driven—helping beginners transform their relationship with language learning.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Lexi
