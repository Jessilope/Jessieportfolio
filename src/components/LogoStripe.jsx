import { spacing } from '../tokens'
import Logo from './Logo'

const LogoStripe = ({ size = 'Desktop', state = 'Default' }) => {
  const isMobile = size === 'mobile'
  
  const stripeStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: `${spacing.xs} ${spacing.m}`, // 8px 24px
    position: 'relative',
    width: isMobile ? '100%' : '1280px',
    maxWidth: '100%',
    overflow: 'hidden',
    marginTop: isMobile ? '0' : '64px',
    // Justify based on state
    justifyContent: state === 'active' ? 'flex-end' : 'flex-start',
  }

  const logoContainerStyles = {
    display: 'flex',
    gap: isMobile ? '64px' : '96px',
    alignItems: 'center',
    position: 'relative',
    flexShrink: 0,
    animation: 'scroll 30s linear infinite',
  }

  const logoOrder = ['notion', 'miro', 'figma', 'webflow', 'framer']
  
  // Duplicate the logos multiple times to create seamless infinite scroll
  const logos = [...logoOrder, ...logoOrder, ...logoOrder, ...logoOrder]

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
      <div style={stripeStyles}>
        <div style={logoContainerStyles}>
          {logos.map((logo, index) => (
            <Logo key={index} logo={logo} size={size} />
          ))}
        </div>
      </div>
    </>
  )
}

export default LogoStripe
