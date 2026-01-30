import { colors, spacing, borderRadius, typography } from '../tokens'

const Tag = ({ children }) => {
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${spacing.xxs} ${spacing.xs}`,
    border: `1px solid ${colors.semantic.borderDefault}`,
    borderRadius: borderRadius.s,
    fontFamily: `'${typography.presets.caption.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: typography.presets.caption.fontSize, // 12px
    fontWeight: typography.presets.caption.fontWeight, // 400
    lineHeight: typography.presets.caption.lineHeight, // 1.6
    letterSpacing: typography.presets.caption.letterSpacing, // 0
    color: colors.semantic.buttonSecondaryText,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  return (
    <div style={styles}>
      {children}
    </div>
  )
}

export default Tag
