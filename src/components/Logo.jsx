import { spacing } from '../tokens'

// ===========================================
// ICON IMAGES
// ===========================================
const iconImages = {
  figma: '/assets/icons/figma.png',
  framer: '/assets/icons/framer.png',
  miro: '/assets/icons/miro.png',
  notion: '/assets/icons/notions.png',
}

// ===========================================
// DESKTOP IMAGE COMPONENTS
// ===========================================

// Notion Desktop - Icon image
const NotionDesktopIcon = () => (
  <img src={iconImages.notion} alt="Notion" style={{ width: '36px', height: '36px', objectFit: 'contain', display: 'block' }} />
)

// Miro Desktop - Icon image
const MiroDesktopIcon = () => (
  <img src={iconImages.miro} alt="Miro" style={{ width: '36px', height: '36px', objectFit: 'contain', display: 'block' }} />
)

// Figma Desktop - Icon image
const FigmaDesktopIcon = () => (
  <img src={iconImages.figma} alt="Figma" style={{ width: '24px', height: '36px', objectFit: 'contain', display: 'block' }} />
)

// Webflow Desktop - W icon (keeping SVG as no PNG provided)
const WebflowDesktopIcon = () => (
  <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    <path d="M28.5 4s-4.7 12.8-5 13.6c0-1.4-4-13.6-4-13.6-3 0-6 2-7 5 0 0-4 8.6-4.4 9.6 0-.4 0-14.6 0-14.6H0v24h8.1s4.4-10 4.8-11c0 1.2 4.1 11 4.1 11h8s7-16 7.4-17c0 0 0 17 0 17h7.6V4H28.5z" fill="#4353FF"/>
  </svg>
)

// Framer Desktop - Icon image
const FramerDesktopIcon = () => (
  <img src={iconImages.framer} alt="Framer" style={{ width: '22px', height: '33px', objectFit: 'contain', display: 'block' }} />
)

// ===========================================
// MOBILE IMAGE COMPONENTS (icons only, 32x32)
// ===========================================

// Notion Mobile - Small icon
const NotionMobileIcon = () => (
  <img src={iconImages.notion} alt="Notion" style={{ width: '24px', height: '27px', objectFit: 'contain' }} />
)

// Miro Mobile - Icon
const MiroMobileIcon = () => (
  <img src={iconImages.miro} alt="Miro" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
)

// Figma Mobile - Icon
const FigmaMobileIcon = () => (
  <img src={iconImages.figma} alt="Figma" style={{ width: '21px', height: '32px', objectFit: 'contain' }} />
)

// Webflow Mobile - Blue W icon (keeping SVG as no PNG provided)
const WebflowMobileIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.8 8s-3.76 10.24-4 10.88c0-1.12-3.2-10.88-3.2-10.88-2.4 0-4.8 1.6-5.6 4 0 0-3.2 6.88-3.52 7.68 0-.32 0-11.68 0-11.68H0v19.2h6.48s3.52-8 3.84-8.8c0 .96 3.28 8.8 3.28 8.8h6.4s5.6-12.8 5.92-13.6c0 0 0 13.6 0 13.6H32V8h-9.2z" fill="#4353FF"/>
  </svg>
)

// Framer Mobile - Icon
const FramerMobileIcon = () => (
  <img src={iconImages.framer} alt="Framer" style={{ width: '22px', height: '33px', objectFit: 'contain' }} />
)

// ===========================================
// MAIN LOGO COMPONENT
// ===========================================

const Logo = ({ logo = 'notion', size = 'Desktop' }) => {
  const textStyles = {
    fontFamily: `'Katibeh', sans-serif`,
    fontSize: '36px',
    lineHeight: 1,
    fontStyle: 'normal',
    color: '#2a2a2a',
    margin: 0,
    transform: 'translateY(4px)',
  }

  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: spacing.xxs,
    position: 'relative',
    flexShrink: 0,
  }

  // Desktop versions with icons and text labels
  if (size === 'Desktop') {
    if (logo === 'notion') {
      return (
        <div style={{ ...containerStyles, gap: '10px' }}>
          <NotionDesktopIcon />
          <p style={textStyles}>Notion</p>
        </div>
      )
    }

    if (logo === 'miro') {
      return (
        <div style={{ ...containerStyles, gap: '7px' }}>
          <MiroDesktopIcon />
          <p style={textStyles}>miro</p>
        </div>
      )
    }

    if (logo === 'figma') {
      return (
        <div style={{ ...containerStyles, gap: '11px' }}>
          <FigmaDesktopIcon />
          <p style={textStyles}>Figma</p>
        </div>
      )
    }

    if (logo === 'webflow') {
      return (
        <div style={{ ...containerStyles, gap: '14px' }}>
          <WebflowDesktopIcon />
          <p style={textStyles}>webflow</p>
        </div>
      )
    }

    if (logo === 'framer') {
      return (
        <div style={{ ...containerStyles, gap: '11px' }}>
          <FramerDesktopIcon />
          <p style={textStyles}>Framer</p>
        </div>
      )
    }
  }

  // Mobile versions (icon only)
  if (size === 'mobile') {
    if (logo === 'notion') {
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'clip',
          position: 'relative',
          flexShrink: 0,
          width: '32px',
          height: '32px',
        }}>
          <NotionMobileIcon />
        </div>
      )
    }

    if (logo === 'miro') {
      return (
        <div style={{
          display: 'flex',
          gap: '7px',
          alignItems: 'center',
          overflow: 'clip',
          position: 'relative',
          flexShrink: 0,
          width: '32px',
          height: '32px',
        }}>
          <MiroMobileIcon />
        </div>
      )
    }

    if (logo === 'figma') {
      return (
        <div style={{
          display: 'flex',
          height: '32px',
          alignItems: 'center',
          position: 'relative',
          flexShrink: 0,
          width: '21.333px',
        }}>
          <FigmaMobileIcon />
        </div>
      )
    }

    if (logo === 'webflow') {
      return (
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          position: 'relative',
          flexShrink: 0,
          width: '32px',
          height: '32px',
        }}>
          <WebflowMobileIcon />
        </div>
      )
    }

    if (logo === 'framer') {
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '4px',
          position: 'relative',
          flexShrink: 0,
          width: '32px',
          height: '32px',
        }}>
          <FramerMobileIcon />
        </div>
      )
    }
  }

  // Default fallback
  return null
}

export default Logo
