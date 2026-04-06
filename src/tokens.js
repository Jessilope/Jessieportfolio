// Design tokens — sourced from Figma
// Typography: node 13:14  |  Colors: node 25:278  |  Grids: node 445:727

// ─── Colors ─────────────────────────────────────────────────────────────────

export const colors = {
  // Primary palette (blue-purple)
  primary: {
    100: '#EAEBF2',
    200: '#C1C2D9',
    300: '#ADAECD',
    400: '#989AC0',
    500: '#8485B4',
    600: '#6F71A7',
    700: '#5D5F98', // main brand color
  },

  // Secondary palette
  secondary: {
    100: '#FFFEFA', // page background
    600: '#FFDF5B', // yellow accent (flowers, logo highlight)
  },

  // Neutral palette
  neutral: {
    100: '#FCFCFC',
    300: '#EAEAEA',
    400: '#A4A4A4',
    500: '#595959',
    600: '#3D3D3D',
    700: '#212121',
  },

  // Semantic aliases (used by components)
  semantic: {
    textHeaders: '#5D5F98',      // heading / brand text
    textPrimary: '#212121',      // primary dark text
    textBody: '#3D3D3D',         // body text
    textMuted: '#595959',        // secondary body text
    buttonPrimary: '#5D5F98',    // primary button background
    buttonPrimaryText: '#FFFFFF',
    buttonSecondaryHover: '#6F71A7', // slightly lighter on hover
    buttonSecondaryText: '#5D5F98',  // secondary button text/border
    borderDefault: '#ADAECD',        // default border color (primary/300)
  },

  backgrounds: {
    primary: '#FFFFFF',
    main: '#FFFEFA',             // secondary/100 — main page background
    page: '#FFFEFA',             // alias of main
  },
}

// ─── Spacing ─────────────────────────────────────────────────────────────────

export const spacing = {
  xxs: '4px',
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '40px',
  xxl: '48px',
  xxxl: '64px',
  huge: '96px',
}

// ─── Border radius ────────────────────────────────────────────────────────────

export const borderRadius = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '32px',
  xl: '48px',
  xxl: '100px',
}

// ─── Shadows ──────────────────────────────────────────────────────────────────

export const shadows = {
  card: '0px 4px 16px rgba(0, 0, 0, 0.12)',
  button: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  navbar: '0px 2px 24px rgba(0, 0, 0, 0.08)',
}

// ─── Typography ───────────────────────────────────────────────────────────────

export const typography = {
  fontFamilies: {
    heading: 'Poppins',
    body: 'Kantumruy',
    label: 'Montserrat',
    nav: 'Kantumruy',
    fallback: 'sans-serif',
    fallbackBody: "'Noto Sans', sans-serif",
  },

  presets: {
    // H1 — Poppins SemiBold 48px
    header: {
      fontFamily: 'Poppins',
      fontSize: '48px',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '2.4px',
    },
    // H2 — Poppins Medium 32px
    h2: {
      fontFamily: 'Poppins',
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: '0px',
    },
    // header2 — alias of h2 (used by Hero, ClosingSection)
    header2: {
      fontFamily: 'Poppins',
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: '0px',
    },
    // Subtitle — Poppins Medium 24px
    subtitle: {
      fontFamily: 'Poppins',
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: '1.2px',
    },
    // Subtitle 2 — Poppins Medium 20px
    subtitle2: {
      fontFamily: 'Poppins',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '1px',
    },
    // Body Large — Kantumruy Regular 18px
    bodyLarge: {
      fontFamily: 'Kantumruy',
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.9px',
    },
    // Body — Kantumruy Light 16px
    body: {
      fontFamily: 'Kantumruy',
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: 1.6,
      letterSpacing: '0.8px',
    },
    // Body Bold — Kantumruy Bold 14px
    bodyBold: {
      fontFamily: 'Kantumruy',
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: '0px',
    },
    // Caption — Kantumruy Regular 12px
    caption: {
      fontFamily: 'Kantumruy',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0px',
    },
    // Button — Kantumruy Regular 16px
    button: {
      fontFamily: 'Kantumruy',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0px',
    },
    // Nav link — Kantumruy Regular 16px
    navLink: {
      fontFamily: 'Kantumruy',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.8px',
    },
    // Label / metadata — Montserrat Regular 16px
    label: {
      fontFamily: 'Montserrat',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '28px',
      letterSpacing: '0.8px',
    },
  },
}

// ─── Breakpoints (Figma grid frames) ─────────────────────────────────────────
// Desktop: 1280px  |  Tablet: 834px  |  Mobile: 412px

export const breakpoints = {
  mobile: 768,   // < 768px → mobile
  tablet: 1280,  // 768–1279px → tablet
  desktop: 1280, // ≥ 1280px → desktop
}
