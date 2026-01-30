import { colors, typography } from '../tokens'

const HeroSimple = () => {
  const sectionStyles = {
    backgroundColor: colors.backgrounds.main,
    width: '100%',
    minHeight: '832px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: '200px',
    paddingBottom: '100px',
  }

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '1152px',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '64px',
    paddingLeft: '64px',
    paddingRight: '64px',
  }

  const textContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'center',
    textAlign: 'center',
    color: colors.semantic.textHeaders,
    width: '100%',
  }

  const subtitleStyles = {
    fontFamily: `'${typography.presets.subtitle.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: typography.presets.subtitle.fontSize,
    fontWeight: typography.presets.subtitle.fontWeight,
    lineHeight: typography.presets.subtitle.lineHeight,
    letterSpacing: typography.presets.subtitle.letterSpacing,
    margin: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
  }

  const titleStyles = {
    fontFamily: `'${typography.presets.header.fontFamily}', sans-serif`,
    fontSize: typography.presets.header.fontSize,
    fontWeight: typography.presets.header.fontWeight,
    lineHeight: typography.presets.header.lineHeight,
    letterSpacing: typography.presets.header.letterSpacing,
    margin: 0,
  }

  return (
    <section id="landing" style={sectionStyles}>
      <div style={containerStyles}>
        <div style={textContainerStyles}>
          <h2 style={subtitleStyles}>Hi, this is Jessie ML</h2>
          <h1 style={titleStyles}>UX-UI designer in trainee</h1>
        </div>
      </div>
    </section>
  )
}

export default HeroSimple
