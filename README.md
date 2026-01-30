# Portfolio

A modern portfolio website built with React and Vite, following a design system approach.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Design System

This project uses a centralized design system defined in `design-system.json`. All components consume tokens from this file, ensuring consistency across the entire application.

### Design Tokens

- **Colors**: Primary, secondary, neutral, and semantic color tokens
- **Typography**: Font families, sizes, weights, line heights, and letter spacing
- **Spacing**: Consistent spacing scale from xxs to xxl
- **Border Radius**: Standardized border radius values
- **Shadows**: Predefined shadow styles
- **Breakpoints**: Responsive design breakpoints

## Project Structure

```
/src
  /components     - Reusable UI components
  /sections       - Page sections
  tokens.js       - Design system token exports
  App.jsx         - Main application component
  main.jsx        - Application entry point
  index.css       - Global styles
```

## Components

- **PrimaryButton** - Primary action button
- **SecondaryButton** - Secondary action button
- **Tag** - Label/tag component
- **Navbar** - Navigation bar with logo and CTA buttons
- **Footer** - Footer with branding and social links
- **ProjectCard** - Project showcase card
- **SocialIcon** - Social media icon component
- **FlowerDecoration** - Decorative flower element
- **LogoStripe** - Horizontal logo carousel

## Sections

- **HeroSection** - Landing hero with title and decorations
- **ProjectsSection** - Portfolio project showcase
- **ClosingSection** - Closing message with decorative elements

## Technologies

- React 18
- Vite 5
- Design System JSON
