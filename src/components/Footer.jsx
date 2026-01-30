import { colors, spacing, typography } from '../tokens'
import SocialIcon from './SocialIcon'
import useResponsive from '../hooks/useResponsive'

const Footer = () => {
  const { isMobile } = useResponsive()

  const footerStyles = {
    backgroundColor: colors.backgrounds.main,
    padding: isMobile ? spacing.m : spacing.xxl,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }

  const containerStyles = {
    width: isMobile ? '100%' : '1128px',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'space-between',
    gap: isMobile ? spacing.l : '0',
  }

  const brandContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xs,
    alignItems: isMobile ? 'center' : 'flex-start',
  }

  const brandNameStyles = {
    fontFamily: `'${typography.presets.subtitle2.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: typography.presets.subtitle2.fontSize, // 20px
    fontWeight: typography.presets.subtitle2.fontWeight, // 700
    lineHeight: typography.presets.subtitle2.lineHeight, // 1.3
    letterSpacing: typography.presets.subtitle2.letterSpacing, // 1px
    color: colors.semantic.textHeaders,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    textAlign: isMobile ? 'center' : 'left',
  }

  const brandSubtitleStyles = {
    fontFamily: `'${typography.presets.caption.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: typography.presets.caption.fontSize, // 12px
    fontWeight: typography.presets.caption.fontWeight, // 400
    lineHeight: typography.presets.caption.lineHeight, // 1.6
    letterSpacing: typography.presets.caption.letterSpacing, // 0
    color: colors.semantic.textHeaders,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    textAlign: isMobile ? 'center' : 'left',
  }

  const copyrightStyles = {
    fontFamily: `'${typography.presets.body.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: isMobile ? '12px' : typography.presets.body.fontSize, // 12px mobile / 16px desktop
    fontWeight: typography.presets.body.fontWeight, // 400
    lineHeight: typography.presets.body.lineHeight, // 1.6
    letterSpacing: isMobile ? '0' : '0.8px',
    color: colors.semantic.textHeaders,
    padding: spacing.xs,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    textAlign: 'center',
  }

  const iconsContainerStyles = {
    display: 'flex',
    gap: '34px',
    alignItems: 'center',
    padding: spacing.xs,
  }

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={brandContainerStyles}>
          <div style={brandNameStyles}>Jessie ML</div>
          <div style={brandSubtitleStyles}>UX-UI designer in trainee</div>
        </div>

        <div style={copyrightStyles}>
          ©2026 Jessica Alejandra Mogollon Lopez
        </div>

        <div style={iconsContainerStyles}>
          <SocialIcon type="behance" />
          <SocialIcon type="linkedin" />
          <SocialIcon type="instagram" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
