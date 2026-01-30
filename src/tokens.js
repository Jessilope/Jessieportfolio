import designSystem from '../design-system.json'

export const tokens = designSystem

// Helper function to get nested token values
export const getToken = (path) => {
  return path.split('.').reduce((obj, key) => obj?.[key], tokens)
}

// Convenience exports
export const colors = tokens.colors
export const typography = tokens.typography
export const spacing = tokens.spacing
export const borderRadius = tokens.borderRadius
export const shadows = tokens.shadows
