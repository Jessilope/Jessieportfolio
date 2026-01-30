import { useState, useEffect } from 'react'

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
}

const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1280,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call on mount

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowSize.width < BREAKPOINTS.mobile
  const isTablet = windowSize.width >= BREAKPOINTS.mobile && windowSize.width < BREAKPOINTS.tablet
  const isDesktop = windowSize.width >= BREAKPOINTS.tablet

  return {
    windowSize,
    isMobile,
    isTablet,
    isDesktop,
    breakpoints: BREAKPOINTS,
  }
}

export default useResponsive
