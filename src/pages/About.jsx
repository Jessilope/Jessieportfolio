import { useState, useEffect } from 'react'
import { colors } from '../tokens'
import Navbar from '../components/Navbar'
import FlowerDecoration from '../components/FlowerDecoration'
import AboutMeSection from '../sections/AboutMeSection'
import Footer from '../components/Footer'
import useResponsive from '../hooks/useResponsive'

const About = () => {
  const { isMobile } = useResponsive()
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    // Trigger animation after component mounts
    setShouldAnimate(true)
  }, [])
  const pageStyles = {
    backgroundColor: '#FFFEFA',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  }

  const contentStyles = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  }

  const logoContainerStyles = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: isMobile ? '256px' : '249px',
    height: isMobile ? '256px' : '243px',
    marginTop: isMobile ? '190px' : '0', // Position below center on mobile as per Figma
  }

  const flowerStyles = {
    position: 'absolute',
    width: isMobile ? '256px' : '249px',
    height: isMobile ? '256px' : '243px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    ...(shouldAnimate && {
      animation: 'flowerEntrance 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
    }),
  }

  const logoTextStyles = {
    fontFamily: `'Barlow Condensed', sans-serif`,
    fontSize: isMobile ? '32px' : '32px',
    letterSpacing: isMobile ? '13px' : '13px',
    fontWeight: 600,
    lineHeight: isMobile ? '32px' : '32px',
    color: colors.primary['700'],
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingLeft: isMobile ? '13px' : '13px', // Compensate for letter-spacing
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...(shouldAnimate && {
      animation: 'logoEntrance 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
    }),
  }

  return (
    <div style={pageStyles}>
      <Navbar />
      <div style={contentStyles}>
        <div style={logoContainerStyles}>
          <FlowerDecoration variant={1} style={flowerStyles} />
          <p style={logoTextStyles}>JESSIE</p>
        </div>
      </div>
      <AboutMeSection />
      <Footer />
      
      <style>{`
        @keyframes flowerEntrance {
          0% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
        @keyframes logoEntrance {
          0% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default About
