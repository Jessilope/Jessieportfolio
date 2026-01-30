import { useState, useEffect } from 'react'
import { colors, spacing } from '../tokens'
import DollarCityHero from '../components/DollarCityHero'
import DollarCityOverview from '../components/DollarCityOverview'
import DollarCityEmpathize from '../components/DollarCityEmpathize'
import DollarCityDataCollection from '../components/DollarCityDataCollection'
import DollarCityUserJourneyMap from '../components/DollarCityUserJourneyMap'
import DollarCityDefine from '../components/DollarCityDefine'
import DollarCityProblemSolution from '../components/DollarCityProblemSolution'
import DollarCityUserPersona from '../components/DollarCityUserPersona'
import DollarCityIdeate from '../components/DollarCityIdeate'
import DollarCityOOUX from '../components/DollarCityOOUX'
import DollarCityDesignPrinciples from '../components/DollarCityDesignPrinciples'
import DollarCityWireframes from '../components/DollarCityWireframes'
import DollarCityVisual from '../components/DollarCityVisual'
import DollarCityTypography from '../components/DollarCityTypography'
import DollarCityComponents from '../components/DollarCityComponents'
import DollarCityPrototype from '../components/DollarCityPrototype'
import DollarCityReflection from '../components/DollarCityReflection'
import DollarCityMockup from '../components/DollarCityMockup'
import ContentTable from '../components/ContentTable'
import Footer from '../components/Footer'

const DollarCity = () => {
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
    paddingLeft: '96px',
    paddingRight: '64px',
    paddingTop: '128px',
    paddingBottom: '48px',
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
      {/* Hero Section */}
      <DollarCityHero />
      
      {/* Content Table - Fixed */}
      <ContentTable activeSection={activeSection} onSectionClick={handleSectionClick} />
      
      {/* Overview Section */}
      <div id="overview">
        <DollarCityOverview />
      </div>

      {/* Empathize Section */}
      <div id="empathize">
        <DollarCityEmpathize />
      </div>

      {/* Data Collection Section */}
      <div id="data-collection">
        <DollarCityDataCollection />
      </div>

      {/* User Journey Map Section */}
      <div id="user-journey-map">
        <DollarCityUserJourneyMap />
      </div>

      {/* Define Section */}
      <div id="define">
        <DollarCityDefine />
      </div>

      {/* Problem and Solution Section */}
      <div id="problem-solution">
        <DollarCityProblemSolution />
      </div>

      {/* User Persona Section */}
      <div id="user-persona">
        <DollarCityUserPersona />
      </div>

      {/* Ideate Section */}
      <div id="ideate">
        <DollarCityIdeate />
      </div>

      {/* OOUX Section */}
      <div id="ooux">
        <DollarCityOOUX />
      </div>

      {/* Design Principles Section */}
      <div id="design-principles">
        <DollarCityDesignPrinciples />
      </div>

      {/* Wireframes Section */}
      <div id="wireframes">
        <DollarCityWireframes />
      </div>

      {/* Visual Section */}
      <div id="visual">
        <DollarCityVisual />
      </div>

      {/* Typography Section */}
      <div id="typography">
        <DollarCityTypography />
      </div>

      {/* Components Section */}
      <div id="components">
        <DollarCityComponents />
      </div>

      {/* Prototype Section */}
      <div id="prototype">
        <DollarCityPrototype />
      </div>

      {/* Mockup Section */}
      <div id="mockup">
        <DollarCityMockup />
      </div>

      {/* Reflection Section */}
      <div id="reflection">
        <DollarCityReflection />
      </div>

      <Footer />
    </div>
  )
}

export default DollarCity
