import { colors, spacing, typography } from '../tokens'
import { useNavigate } from 'react-router-dom'
import SocialIcon from '../components/SocialIcon'
import CtaIcon from '../components/CtaIcon'
import useResponsive from '../hooks/useResponsive'
import { aboutImages, documents } from '../assets'

const AboutMeSection = () => {
  const { isMobile } = useResponsive()
  const navigate = useNavigate()

  const handleCheckMyWork = () => {
    navigate('/')
    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const handleDownloadResume = () => {
    window.open(documents.cv, '_blank')
  }

  const handleHaveFun = () => {
    navigate('/')
    setTimeout(() => {
      const closingSection = document.getElementById('closing')
      if (closingSection) {
        closingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }
  const sectionStyles = {
    backgroundColor: '#FFFEFA',
    width: '100%',
    paddingTop: isMobile ? '64px' : '120px',
    paddingBottom: isMobile ? '64px' : '64px',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '96px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
  }

  const contentStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  }

  const topSectionStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'flex-start' : 'flex-start',
    gap: isMobile ? '0' : '0',
  }

  const textContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '16px',
    width: isMobile ? '100%' : '750px',
    flexShrink: 0,
  }

  const titleStyles = {
    fontFamily: isMobile ? `'Kanit', sans-serif` : `'${typography.presets.header.fontFamily}', sans-serif`,
    fontSize: isMobile ? '32px' : typography.presets.header.fontSize, // 48px
    fontWeight: isMobile ? 400 : typography.presets.header.fontWeight, // 400
    lineHeight: isMobile ? '32px' : typography.presets.header.lineHeight, // 1.4
    letterSpacing: isMobile ? '0' : typography.presets.header.letterSpacing, // 2.4px
    color: colors.primary['700'],
    margin: 0,
    width: '100%',
    textAlign: 'left',
  }

  const descriptionStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.8px',
    color: '#1b0022',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    width: '100%',
    textAlign: 'left',
  }

  const imageColumnStyles = {
    display: isMobile ? 'none' : 'flex',
    flexDirection: 'column',
    gap: '41px',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }

  const profileImageContainerStyles = {
    width: '370px',
    height: '365px',
    borderRadius: '192px',
    overflow: 'hidden',
    position: 'relative',
  }

  const profileImageStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    objectFit: 'cover',
  }

  const socialIconsContainerStyles = {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    justifyContent: isMobile ? 'flex-start' : 'center',
  }

  const linksContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start',
    width: '100%',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        {/* Top section - horizontal layout with text and image */}
        <div style={topSectionStyles}>
          {/* Left: Text content */}
          <div style={textContentStyles}>
            <h2 style={titleStyles}>Hey, this is Jessie</h2>
            <div style={descriptionStyles}>
              <p style={{ margin: '0 0 1em 0' }}>
                I am a junior designer in training with a strong passion for the tech world and its intersection with design. I'm eager to continue growing in this field, exploring new challenges, and never stop learning.
              </p>
              <p style={{ margin: 0 }}>
                I enjoy understanding how people interact with digital products and translating those insights into clear, intuitive experiences, always aiming to improve both usability and visual clarity.
              </p>
            </div>
          </div>

          {/* Right: Image and social icons - Desktop only */}
          {!isMobile && (
            <div style={imageColumnStyles}>
              <div style={profileImageContainerStyles}>
                <img 
                  src={aboutImages.profilePhoto}
                  alt="Jessie ML"
                  style={profileImageStyles}
                />
              </div>
              <div style={socialIconsContainerStyles}>
                <SocialIcon type="behance" />
                <SocialIcon type="linkedin" />
                <SocialIcon type="instagram" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom section - links */}
        <div style={linksContainerStyles}>
          <CtaIcon text="Check my work" onClick={handleCheckMyWork} />
          <CtaIcon text="Download my Resume" onClick={handleDownloadResume} />
          <CtaIcon text="Have some fun!" onClick={handleHaveFun} />
        </div>

        {/* Social icons - Mobile only */}
        {isMobile && (
          <div style={socialIconsContainerStyles}>
            <SocialIcon type="behance" />
            <SocialIcon type="linkedin" />
            <SocialIcon type="instagram" />
          </div>
        )}
      </div>
    </section>
  )
}

export default AboutMeSection
