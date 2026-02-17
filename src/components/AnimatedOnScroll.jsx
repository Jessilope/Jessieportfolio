import useScrollAnimation from '../hooks/useScrollAnimation'

/**
 * Animated wrapper component for scroll-triggered animations
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.animation - Animation type: 'fadeIn', 'slideUp', 'slideLeft', 'slideRight', 'scaleIn'
 * @param {number} props.delay - Animation delay in ms (default: 0)
 * @param {number} props.duration - Animation duration in ms (default: 600)
 * @param {number} props.threshold - Intersection threshold (default: 0.1)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 */
const AnimatedOnScroll = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = '',
  style = {},
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce: true })

  // Animation presets
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, transform: 'translateY(40px)' },
      animate: { opacity: 1, transform: 'translateY(0)' },
    },
    slideDown: {
      initial: { opacity: 0, transform: 'translateY(-40px)' },
      animate: { opacity: 1, transform: 'translateY(0)' },
    },
    slideLeft: {
      initial: { opacity: 0, transform: 'translateX(40px)' },
      animate: { opacity: 1, transform: 'translateX(0)' },
    },
    slideRight: {
      initial: { opacity: 0, transform: 'translateX(-40px)' },
      animate: { opacity: 1, transform: 'translateX(0)' },
    },
    scaleIn: {
      initial: { opacity: 0, transform: 'scale(0.9)' },
      animate: { opacity: 1, transform: 'scale(1)' },
    },
  }

  const selectedAnimation = animations[animation] || animations.fadeIn
  const currentState = isVisible ? selectedAnimation.animate : selectedAnimation.initial

  const animatedStyle = {
    ...currentState,
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    willChange: 'opacity, transform',
    ...style,
  }

  return (
    <div ref={ref} className={className} style={animatedStyle}>
      {children}
    </div>
  )
}

export default AnimatedOnScroll
