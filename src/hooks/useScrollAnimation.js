import { useEffect, useRef, useState } from 'react'

/**
 * Hook for smooth scroll animations
 * Returns a ref to attach to the element and an isVisible state
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Percentage of element visible before triggering (0-1)
 * @param {string} options.rootMargin - Margin around viewport
 * @param {boolean} options.triggerOnce - If true, animation triggers only once
 * @returns {Object} { ref, isVisible }
 */
const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options

  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          
          // If triggerOnce, disconnect after first trigger
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

export default useScrollAnimation
