import { useState, useEffect } from 'react'
import { colors, spacing } from '../tokens'
import TuCreditHero from '../components/TuCreditHero'
import TuCreditOverview from '../components/TuCreditOverview'
import TuCreditEmpathize from '../components/TuCreditEmpathize'
import TuCreditDataCollection from '../components/TuCreditDataCollection'
import TuCreditDefine from '../components/TuCreditDefine'
import TuCreditUserPersonas from '../components/TuCreditUserPersonas'
import TuCreditIdeate from '../components/TuCreditIdeate'
import TuCreditDesignPrinciples from '../components/TuCreditDesignPrinciples'
import TuCreditWireframes from '../components/TuCreditWireframes'
import TuCreditVisual from '../components/TuCreditVisual'
import TuCreditColorPalette from '../components/TuCreditColorPalette'
import TuCreditComponentSet from '../components/TuCreditComponentSet'
import TuCreditPrototype from '../components/TuCreditPrototype'
import TuCreditReflection from '../components/TuCreditReflection'
import ContentTable from '../components/ContentTable'
import Footer from '../components/Footer'

const TuCredit = () => {
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

  return (
    <div style={pageStyles}>
      {/* Hero Section */}
      <TuCreditHero />
      
      {/* Content Table - Fixed */}
      <ContentTable activeSection={activeSection} onSectionClick={handleSectionClick} />
      
      {/* Overview Section */}
      <div id="overview">
        <TuCreditOverview />
      </div>

      {/* Empathize Section */}
      <div id="empathize">
        <TuCreditEmpathize />
        <TuCreditDataCollection />
      </div>

      {/* Define Section */}
      <div id="define">
        <TuCreditDefine />
        <TuCreditUserPersonas />
      </div>

      {/* Ideate Section */}
      <div id="ideate">
        <TuCreditIdeate />
        <TuCreditDesignPrinciples />
        <TuCreditWireframes />
      </div>

      {/* Visual Section */}
      <div id="visual">
        <TuCreditVisual />
        <TuCreditColorPalette />
        <TuCreditComponentSet />
      </div>

      {/* Prototype Section */}
      <div id="prototype">
        <TuCreditPrototype />
      </div>

      {/* Reflection Section */}
      <div id="reflection">
        <TuCreditReflection />
      </div>

      <Footer />
    </div>
  )
}

export default TuCredit
