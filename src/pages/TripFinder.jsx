import { useState, useEffect } from 'react'
import { colors } from '../tokens'
import TripFinderHero from '../components/TripFinderHero'
import TripFinderOverview from '../components/TripFinderOverview'
import TripFinderDesignPrinciples from '../components/TripFinderDesignPrinciples'
import TripFinderTypography from '../components/TripFinderTypography'
import TripFinderColorPalette from '../components/TripFinderColorPalette'
import TripFinderComponentSet from '../components/TripFinderComponentSet'
import TripFinderPrototype from '../components/TripFinderPrototype'
import TripFinderReflection from '../components/TripFinderReflection'
import ContentTable from '../components/ContentTable'
import Footer from '../components/Footer'

const TripFinder = () => {
  const [activeSection, setActiveSection] = useState('Overview')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'design-principles', 'visual', 'prototype', 'reflection']
      const scrollPosition = window.scrollY + 300

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' '))
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionClick = (section) => {
    const sectionId = section.toLowerCase().replace(' ', '-')
    const element = document.getElementById(sectionId)
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
      <TripFinderHero />
      
      {/* Content Table - Fixed */}
      <ContentTable activeSection={activeSection} onSectionClick={handleSectionClick} />
      
      {/* Overview Section */}
      <div id="overview">
        <TripFinderOverview />
      </div>

      {/* Design Principles Section */}
      <div id="design-principles">
        <TripFinderDesignPrinciples />
      </div>

      {/* Visual Section */}
      <div id="visual">
        <TripFinderTypography />
        <TripFinderColorPalette />
        <TripFinderComponentSet />
      </div>

      {/* Prototype Section */}
      <div id="prototype">
        <TripFinderPrototype />
      </div>

      {/* Reflection Section */}
      <div id="reflection">
        <TripFinderReflection />
      </div>

      <Footer />
    </div>
  )
}

export default TripFinder
