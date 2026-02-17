import { colors, spacing, borderRadius, typography } from '../tokens'
import { useNavigate } from 'react-router-dom'
import Tag from './Tag'
import ProjectImage from './ProjectImage'
import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const ProjectCard = ({ title, tags, backgroundColor, name, route, index = 0 }) => {
  const navigate = useNavigate()
  const { isMobile } = useResponsive()

  const cardContainerStyles = {
    display: 'flex',
    gap: isMobile ? '0' : '51px',
    alignItems: isMobile ? 'center' : 'flex-start',
    justifyContent: 'center',
    marginBottom: isMobile ? spacing.l : spacing.xxl,
    flexDirection: isMobile ? 'column' : 'row',
  }

  const imageContainerStyles = {
    width: isMobile ? '100%' : '556px',
    height: isMobile ? 'auto' : '340px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    position: 'relative',
  }

  const textContainerStyles = {
    display: isMobile ? 'none' : 'flex',
    flexDirection: 'column',
    gap: '21px',
    width: '431px',
    alignItems: 'flex-start',
  }

  const titleStyles = {
    fontFamily: `'${typography.presets.subtitle.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: typography.presets.subtitle.fontSize, // 24px
    fontWeight: typography.presets.subtitle.fontWeight, // 700
    lineHeight: typography.presets.subtitle.lineHeight, // 1.3
    letterSpacing: typography.presets.subtitle.letterSpacing, // 1.2px
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    margin: 0,
  }

  const tagsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '21px',
    alignItems: 'flex-start',
  }

  return (
    <AnimatedOnScroll 
      animation="slideUp" 
      delay={index * 100} 
      duration={700}
      threshold={0.15}
    >
      <div style={cardContainerStyles}>
        <AnimatedOnScroll 
          animation="scaleIn" 
          delay={index * 100 + 100}
          duration={600}
        >
          <div style={imageContainerStyles}>
            <ProjectImage 
              name={name}
              backgroundColor={backgroundColor}
              route={route}
              navigate={navigate}
              isMobile={isMobile}
            />
          </div>
        </AnimatedOnScroll>
        
        <AnimatedOnScroll 
          animation="fadeIn" 
          delay={index * 100 + 200}
          duration={600}
        >
          <div style={textContainerStyles}>
            <h3 style={titleStyles}>{title}</h3>
            
            <div style={tagsContainerStyles}>
              {tags.map((tag, tagIndex) => (
                <AnimatedOnScroll
                  key={tagIndex}
                  animation="slideLeft"
                  delay={index * 100 + 300 + (tagIndex * 50)}
                  duration={500}
                >
                  <Tag>{tag}</Tag>
                </AnimatedOnScroll>
              ))}
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </AnimatedOnScroll>
  )
}

export default ProjectCard
