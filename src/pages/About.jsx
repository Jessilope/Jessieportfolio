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
    height: isMobile ? '60vh' : '100vh',
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
    width: isMobile ? '180px' : '249px',
    height: isMobile ? '176px' : '243px',
  }

  const flowerStyles = {
    position: 'absolute',
    width: isMobile ? '180px' : '249px',
    height: isMobile ? '176px' : '243px',
    top: '50%',
    left: '50%',
    ...(shouldAnimate && {
      animation: 'flowerEntrance 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
    }),
  }

  const logoTextStyles = {
    fontFamily: `'Barlow Condensed', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    letterSpacing: isMobile ? '10px' : '13px',
    fontWeight: 600,
    lineHeight: isMobile ? '24px' : '32px',
    color: colors.primary['700'],
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: isMobile ? 'translate(-50%, calc(-50% + 60px))' : 'translate(-50%, calc(-50% + 82.5px))',
    zIndex: 1,
    height: isMobile ? '30px' : '39px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: isMobile ? '110px' : '145px',
    ...(shouldAnimate && {
      animation: isMobile ? 'logoEntranceMobile 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'logoEntrance 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
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
            transform: translate(-50%, calc(-50% + 87.5px)) scale(3);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, calc(-50% + 87.5px)) scale(1);
            opacity: 1;
          }
        }
        @keyframes logoEntrance {
          0% {
            transform: translate(-50%, calc(-50% + 82.5px)) scale(3);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, calc(-50% + 82.5px)) scale(1);
            opacity: 1;
          }
        }
        @keyframes logoEntranceMobile {
          0% {
            transform: translate(-50%, calc(-50% + 60px)) scale(3);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, calc(-50% + 60px)) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default About
