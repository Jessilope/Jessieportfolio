import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Image paths
const prototypeImages = {
  onboarding: '/assets/images/lexi/prototype-onboarding.png',
  screens: '/assets/images/lexi/prototype-screens.png',
}

const LexiPrototype = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefa',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '64px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '70px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const titleStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 400,
    lineHeight: isMobile ? '28px' : '32px',
    letterSpacing: '0',
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    margin: 0,
  }

  const textStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    width: '100%',
    flexShrink: 0,
  }

  const imageContainerStyles = {
    width: isMobile ? '100%' : '915px',
    height: isMobile ? 'auto' : '584px',
    aspectRatio: isMobile ? '915 / 584' : undefined,
    position: 'relative',
    flexShrink: 0,
  }

  const secondImageContainerStyles = {
    width: isMobile ? '100%' : '897px',
    height: isMobile ? 'auto' : '683px',
    aspectRatio: isMobile ? '897 / 683' : undefined,
    position: 'relative',
    flexShrink: 0,
  }

  const imageStyles = {
    position: isMobile ? 'relative' : 'absolute',
    inset: isMobile ? undefined : 0,
    width: '100%',
    height: isMobile ? 'auto' : '100%',
    objectFit: 'contain',
  }

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        {/* Content Section */}
        <div style={contentStyles}>
          {/* Title */}
          <div>
            <p style={titleStyles}>Prototype</p>
          </div>

          {/* Description Text */}
          <p style={textStyles}>
            With the structure, visual direction, and design principles in place, I transformed the wireframes into a high-fidelity, interactive prototype. The prototype focuses on validating the end-to-end shopping flow, allowing users to navigate through key actions such as browsing categories, viewing product details, adding items to the cart, and completing the checkout process. Interactions and transitions were designed to feel natural and predictable, reinforcing clarity and user confidence
          </p>
        </div>

        {/* Prototype Image 1 - 3 screens (Splash, Onboarding, Language selection) */}
        <div style={imageContainerStyles}>
          <img 
            src={prototypeImages.onboarding}
            alt="Lexi onboarding screens"
            style={imageStyles}
          />
        </div>

        {/* Prototype Image 2 - 4 screens (Home and Calendar views) */}
        <div style={secondImageContainerStyles}>
          <img 
            src={prototypeImages.screens}
            alt="Lexi app screens"
            style={imageStyles}
          />
        </div>
      </div>
    </section>
  )
}

export default LexiPrototype
