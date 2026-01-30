import { useState } from 'react'
import useResponsive from '../hooks/useResponsive'

const ContentTableFilter = ({ text, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  const filterStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }

  const textStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isHovered ? '18px' : '16px',
    fontWeight: 400,
    lineHeight: isHovered ? 1.5 : 1.6,
    letterSpacing: '0',
    color: isActive ? '#580092' : (isHovered ? 'rgba(55, 1, 97, 0.5)' : 'rgba(55, 1, 97, 0.14)'),
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    transition: 'color 0.3s ease',
  }

  return (
    <div
      style={filterStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p style={textStyles}>{text}</p>
    </div>
  )
}

const ContentTable = ({ activeSection, onSectionClick }) => {
  const { isMobile } = useResponsive()

  // Hide on mobile
  if (isMobile) {
    return null
  }

  const containerStyles = {
    position: 'fixed',
    top: '297px',
    right: '48px',
    display: 'flex',
    flexDirection: 'column',
    gap: '9px',
    alignItems: 'flex-end',
    padding: '12px',
    width: '137px',
    zIndex: 1000,
  }

  const sections = [
    'Overview',
    'Empathize',
    'Define',
    'Ideate',
    'Visual',
    'Prototype',
    'Reflection'
  ]

  return (
    <div style={containerStyles}>
      {sections.map((section) => (
        <ContentTableFilter
          key={section}
          text={section}
          isActive={activeSection === section}
          onClick={() => onSectionClick(section)}
        />
      ))}
    </div>
  )
}

export default ContentTable
