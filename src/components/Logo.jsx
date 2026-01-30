import { spacing } from '../tokens'

const Logo = ({ logo = 'notion', size = 'Desktop' }) => {
  // SVG URLs from Figma localhost server
  const svgUrls = {
    framer: "http://localhost:3845/assets/e9a62d05f34c5597ed3df4adb5a18f78ff372dfd.svg",
    webflow: "http://localhost:3845/assets/ded4fc680a6c91cca09829c744e786b4bb23a530.svg",
    webflowLogo: "http://localhost:3845/assets/a0f58a83c763f946ae0746a38a78d2cab586b770.svg",
    figma: "http://localhost:3845/assets/718ca4ba48021d613f1ec3329f097ac58243acdc.svg",
    figmaDesktop: "http://localhost:3845/assets/e62edb526a0cb9b6f0b829441cceba9950c6222d.svg",
    miroVector1: "http://localhost:3845/assets/bf9d527e5a0b6d9a9dc51900845687b65109863e.svg",
    miroVector2: "http://localhost:3845/assets/c8d6f211522fc9a3b21ea3f1dfba82287a8fa8b3.svg",
    miroVector1Desktop: "http://localhost:3845/assets/212d8fb1b0208891fdface5fa34d66a37fcdc576.svg",
    miroVector2Desktop: "http://localhost:3845/assets/7a358f904f471bdb41ad2146a6929af0bce915be.svg",
    miroVector3Desktop: "http://localhost:3845/assets/7a7066c451cbff167ece1c2517e0bb6b8a51f64e.svg",
    notionVector1: "http://localhost:3845/assets/57b1aecc3e7d673ebc14cb3210efcdeea1c1e296.svg",
    notionVector2: "http://localhost:3845/assets/e32d6a38d099de9cb8ecf2f2562b5701c42392f6.svg",
    notionGroup: "http://localhost:3845/assets/7e8a65f1b0369dc159975dd3a76c45dc6ad7342c.svg",
    webflowIcon: "http://localhost:3845/assets/7df432310509187258d0881f90ab6a7bef40272c.svg"
  }

  const textStyles = {
    fontFamily: `'Katibeh', sans-serif`,
    fontSize: '36px',
    lineHeight: 1.1,
    fontStyle: 'normal',
    color: '#2a2a2a',
    margin: 0,
  }

  // Desktop versions with text labels
  if (size === 'Desktop') {
    if (logo === 'notion') {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'flex-start',
          overflow: 'clip',
          padding: spacing.xxs,
          position: 'relative',
          flexShrink: 0,
        }}>
          <div style={{ height: '36.936px', position: 'relative', flexShrink: 0, width: '107px' }}>
            <img alt="Notion" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.notionVector1} />
          </div>
          <div style={{ 
            position: 'absolute', 
            inset: '0 66.78% 0.17% 0' 
          }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.notionVector2} />
          </div>
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
          padding: spacing.xxs,
          position: 'relative',
          flexShrink: 0,
        }}>
          <div style={{ height: '36.809px', position: 'relative', flexShrink: 0, width: '36.895px' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.miroVector1Desktop} />
          </div>
          <div style={{ height: '20.13px', position: 'relative', flexShrink: 0, width: '57.187px' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.miroVector2Desktop} />
          </div>
          <div style={{
            position: 'absolute',
            inset: '19.94% 64.79% 19.8% 7.71%',
          }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.miroVector3Desktop} />
          </div>
        </div>
      )
    }

    if (logo === 'figma') {
      return (
        <div style={{
          display: 'flex',
          gap: '11px',
          alignItems: 'center',
          padding: spacing.xxs,
          position: 'relative',
          flexShrink: 0,
        }}>
          <div style={{ height: '36px', position: 'relative', flexShrink: 0, width: '24px' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.figmaDesktop} />
          </div>
          <p style={{ ...textStyles, height: '22px', width: '80px' }}>
            Figma
          </p>
        </div>
      )
    }

    if (logo === 'webflow') {
      return (
        <div style={{
          display: 'flex',
          gap: '14px',
          alignItems: 'center',
          padding: spacing.xxs,
          position: 'relative',
          flexShrink: 0,
        }}>
          <div style={{ height: '32px', position: 'relative', flexShrink: 0, width: '40px' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.webflowIcon} />
          </div>
          <div style={{ height: '25.951px', position: 'relative', flexShrink: 0, width: '103px' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.webflowLogo} />
          </div>
        </div>
      )
    }

    if (logo === 'framer') {
      return (
        <div style={{
          display: 'flex',
          gap: '11px',
          alignItems: 'center',
          padding: spacing.xxs,
          position: 'relative',
          flexShrink: 0,
        }}>
          <div style={{ height: '33px', position: 'relative', flexShrink: 0, width: '22px' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.framer} />
          </div>
          <p style={{ ...textStyles, height: '23px', width: '93px' }}>
            Framer
          </p>
        </div>
      )
    }
  }

  // Mobile versions (icon only)
  if (size === 'mobile') {
    if (logo === 'notion') {
      return (
        <div style={{
          overflow: 'clip',
          position: 'relative',
          flexShrink: 0,
          width: '32px',
          height: '32px',
        }}>
          <div style={{
            position: 'absolute',
            inset: '8.53% 12.5% 6.75% 12.5%',
          }}>
            <img alt="Notion" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.notionGroup} />
          </div>
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
          <div style={{ flex: '1 0 0', height: '100%', minHeight: '1px', minWidth: '1px', position: 'relative' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.miroVector1} />
          </div>
          <div style={{
            position: 'absolute',
            inset: '9px 6.28px 7px 6.72px',
          }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.miroVector2} />
          </div>
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
          <div style={{ flex: '1 0 0', height: '100%', minHeight: '1px', minWidth: '1px', position: 'relative' }}>
            <img alt="Figma" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.figma} />
          </div>
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
          <div style={{ flex: '1 0 0', height: '100%', minHeight: '1px', minWidth: '1px', position: 'relative' }}>
            <img alt="Webflow" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.webflow} />
          </div>
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
          <div style={{ height: '33px', position: 'relative', flexShrink: 0, width: '22px' }}>
            <img alt="Framer" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={svgUrls.framer} />
          </div>
        </div>
      )
    }
  }

  // Default fallback
  return null
}

export default Logo
