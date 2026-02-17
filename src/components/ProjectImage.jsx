import { useState } from 'react'
import { borderRadius } from '../tokens'

const ProjectImage = ({ name, backgroundColor, route, navigate, isMobile = false }) => {
  const [state, setState] = useState('Default')

  const getImageStyles = () => {
    const baseStyles = {
      backgroundColor: backgroundColor,
      borderRadius: borderRadius.m,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      flexShrink: 0,
      position: 'relative',
      cursor: route ? 'pointer' : 'default',
      transition: isMobile ? 'transform 0.3s ease-out, box-shadow 0.3s ease-out' : 'all 0.3s ease',
    }

    // Mobile sizes - responsive width with aspect ratio
    if (isMobile) {
      const isPressed = state === 'Click'
      return {
        ...baseStyles,
        width: '100%',
        maxWidth: '382px',
        aspectRatio: '350 / 200',
        height: 'auto',
        transform: isPressed ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isPressed ? '2px 4px 8px 0px rgba(0, 0, 0, 0.15)' : 'none',
      }
    }

    // Desktop - Size changes based on state - Figma specs
    if (state === 'Default') {
      return {
        ...baseStyles,
        width: '520px',
        height: '318px',
      }
    } else if (state === 'Hover') {
      return {
        ...baseStyles,
        width: '556px',
        height: '340px',
        boxShadow: name === 'Tu credit' 
          ? '2px 4px 4px 0px rgba(0, 0, 0, 0.06)' 
          : '2px 2px 4px 2px rgba(13, 13, 13, 0.15)',
      }
    } else if (state === 'Click') {
      return {
        ...baseStyles,
        width: '520px',
        height: '318px',
        boxShadow: name === 'Tu credit'
          ? '2px 2px 4px 2px rgba(0, 0, 0, 0.15)'
          : name === 'Lexi'
          ? '2px 2px 4px 2px rgba(13, 13, 13, 0.15)'
          : '2px 2px 4px 0px rgba(0, 0, 0, 0.25)',
      }
    }
  }

  const handleMouseEnter = () => {
    if (!isMobile) setState('Hover')
  }

  const handleMouseLeave = () => {
    setState('Default')
  }

  const handleMouseDown = () => {
    setState('Click')
  }

  const handleMouseUp = () => {
    if (!isMobile) {
      setState('Hover')
    } else {
      // Keep pressed state briefly for mobile animation
      setTimeout(() => setState('Default'), 150)
    }
  }

  const handleClick = () => {
    if (route && navigate) {
      if (isMobile) {
        // Delay navigation to allow animation to complete
        setTimeout(() => {
          navigate(route)
          window.scrollTo(0, 0)
        }, 200)
      } else {
        navigate(route)
        window.scrollTo(0, 0)
      }
    }
  }

  // Touch events for mobile
  const handleTouchStart = () => {
    if (isMobile) setState('Click')
  }

  const handleTouchEnd = () => {
    if (isMobile) {
      setTimeout(() => setState('Default'), 150)
    }
  }

  const getTextStyles = () => {
    if (name === 'Lexi') {
      return {
        fontFamily: `'Madimi One', sans-serif`,
        fontSize: isMobile ? '44px' : '56px',
        lineHeight: '61.6px',
        letterSpacing: '12px',
        color: '#FFFFFF',
        textAlign: 'center',
        fontStyle: 'normal',
        margin: 0,
        paddingLeft: isMobile ? '12px' : '0', // Compensate for letter-spacing to visually center in mobile
      }
    } else if (name === 'Dollar City') {
      return {
        fontFamily: `'Archivo Black', sans-serif`,
        fontSize: isMobile ? '32px' : '48px',
        lineHeight: '90px',
        color: '#EBDB32',
        fontStyle: 'normal',
        margin: 0,
      }
    } else if (name === 'Tu credit') {
      return {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: isMobile ? '44px' : '64px',
        fontWeight: 500,
        lineHeight: 1.7,
        background: 'linear-gradient(to right, #a464ff 0%, #5405c7 49%, #34007e 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontVariationSettings: "'wdth' 100",
        margin: 0,
      }
    } else if (name === 'Tripfinder') {
      return {
        fontFamily: `'Righteous', sans-serif`,
        fontSize: isMobile ? '44px' : '54px',
        lineHeight: 1.2,
        letterSpacing: isMobile ? '0.44px' : '0.54px',
        color: '#FFFFFF',
        textAlign: 'center',
        fontStyle: 'normal',
        margin: 0,
      }
    }
  }

  const getContainerStyles = () => {
    if (name === 'Lexi') {
      return {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexShrink: 0,
        width: isMobile ? '100%' : '191px',
      }
    } else if (name === 'Tu credit') {
      return {
        display: 'flex',
        height: '99px',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexShrink: 0,
        width: '251px',
      }
    } else if (name === 'Tripfinder') {
      return {
        height: '104px',
        position: 'relative',
        flexShrink: 0,
        width: '257px',
      }
    }
    return {}
  }

  return (
    <div
      style={getImageStyles()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      {name === 'Lexi' && (
        <div style={getContainerStyles()}>
          <p style={getTextStyles()}>LEXI</p>
        </div>
      )}
      
      {name === 'Dollar City' && (
        <p style={getTextStyles()}>DOLLAR CITY</p>
      )}
      
      {name === 'Tu credit' && (
        <div style={getContainerStyles()}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', flexShrink: 0 }}>
            <p style={getTextStyles()}>Tu credit</p>
          </div>
        </div>
      )}
      
      {name === 'Tripfinder' && (
        <div style={getContainerStyles()}>
          <div style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            lineHeight: 0,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            height: '65px',
            width: '285px',
            textAlign: 'center',
            fontStyle: 'normal',
          }}>
            <p style={getTextStyles()}>Tripfinder</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectImage
