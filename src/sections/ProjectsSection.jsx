import { colors, spacing, typography } from '../tokens'
import ProjectsGrid from '../components/ProjectsGrid'
import useResponsive from '../hooks/useResponsive'

const ProjectsSection = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: colors.backgrounds.main,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xxl,
    alignItems: 'center',
    width: '100%',
    paddingTop: isMobile ? '68px' : '128px',
    paddingBottom: isMobile ? '112px' : '0',
  }

  const containerStyles = {
    backgroundColor: colors.backgrounds.main,
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? spacing.xxl : '128px',
    padding: isMobile ? `0 24px` : `${spacing.xxl} 136px ${spacing.xxl} 116px`,
    width: '100%',
  }

  const headerContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '48px',
    alignItems: 'flex-start',
    width: '100%',
  }

  const headerStyles = {
    fontFamily: `'${typography.presets.header.fontFamily}', sans-serif`,
    fontSize: isMobile ? '24px' : typography.presets.header.fontSize, // 24px mobile / 48px desktop
    fontWeight: isMobile ? 700 : typography.presets.header.fontWeight, // 700 mobile / 400 desktop
    lineHeight: isMobile ? 1.3 : typography.presets.header.lineHeight, // 1.3 mobile / 1.4 desktop
    letterSpacing: isMobile ? '1.2px' : typography.presets.header.letterSpacing, // 1.2px mobile / 2.4px desktop
    color: colors.semantic.textHeaders,
    margin: 0,
  }

  const descriptionStyles = {
    fontFamily: `'${typography.presets.body.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: typography.presets.body.fontSize, // 16px
    fontWeight: typography.presets.body.fontWeight, // 400
    lineHeight: typography.presets.body.lineHeight, // 1.6
    letterSpacing: typography.presets.body.letterSpacing, // 0.8px
    color: colors.semantic.textPrimary,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
  }

  const projects = [
    {
      title: 'Lexi',
      name: 'Lexi',
      tags: ['UI junior designer', 'Component system', 'UX-UI design'],
      backgroundColor: '#155DFC',
      route: '/lexi',
    },
    {
      title: 'Dollar City',
      name: 'Dollar City',
      tags: ['UX-UI design', 'UI junior designer', 'Component system', 'Prototyping'],
      backgroundColor: '#005830',
      route: '/dollarcity',
    },
    {
      title: 'Tu credit',
      name: 'Tu credit',
      tags: ['UX-UI design', 'Information architecture', 'UI flows', 'Journey mapping'],
      backgroundColor: colors.backgrounds.primary,
      route: '/tucredit',
    },
    {
      title: 'Tripfinder',
      name: 'Tripfinder',
      tags: ['UI junior designer', 'Component system', 'UI flows', 'Accessible design (dark and light mood)'],
      backgroundColor: '#8125F4',
      route: '/tripfinder',
    }
  ]

  return (
    <section id="projects" style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerContainerStyles}>
          <h2 style={headerStyles}>Personal Projects</h2>
          <p style={descriptionStyles}>
            These personal projects were created as an opportunity to apply user-centered design principles, 
            accessibility, and clarity across different contexts. Throughout each project, I focused on 
            understanding users, their needs, and behaviors, and translating those insights into simple, 
            intuitive, and functional experiences. Each project reflects my approach to building accessible, 
            coherent designs that support decision-making through thoughtful structure and visual clarity.
          </p>
        </div>

        <ProjectsGrid projects={projects} />
      </div>
    </section>
  )
}

export default ProjectsSection
