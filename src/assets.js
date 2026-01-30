/**
 * CENTRALIZED ASSET PATHS
 * ========================
 * All image and document paths are managed here.
 * 
 * INSTRUCTIONS FOR GITHUB DEPLOYMENT:
 * 1. Export images from Figma and save them in /public/assets/images/
 * 2. Update the paths below with the actual filenames
 * 3. All paths are relative to the /public folder
 * 
 * FOLDER STRUCTURE:
 * /public
 *   /assets
 *     /images      - All PNG, JPG images
 *     /icons       - SVG icons (if not inline)
 *     /documents   - PDFs and other documents
 */

// ===========================================
// DOCUMENTS
// ===========================================
export const documents = {
  cv: '/assets/documents/cv.pdf',
}

// ===========================================
// ABOUT SECTION
// ===========================================
export const aboutImages = {
  profilePhoto: '/assets/icons/me.png',
}

// ===========================================
// LEXI PROJECT IMAGES
// ===========================================
export const lexiImages = {
  // Visual
  visual: '/assets/images/lexi/visual.png',
  
  // User Personas
  persona1Photo: '/assets/images/lexi/persona1-photo.png',
  persona1Desc: '/assets/images/lexi/persona1-desc.png',
  persona2Photo: '/assets/images/lexi/persona2-photo.png',
  persona2Desc: '/assets/images/lexi/persona2-desc.png',
  persona3Photo: '/assets/images/lexi/persona3-photo.png',
  persona3Desc: '/assets/images/lexi/persona3-desc.png',
  
  // Components
  components: '/assets/images/lexi/components.png',
  
  // User Journey Map
  journeyMap: '/assets/images/lexi/journey-map.png',
  
  // Ideate
  ideate: '/assets/images/lexi/ideate.png',
  
  // Typography
  typography: '/assets/images/lexi/typography.png',
  
  // Wireframes
  wireframe1: '/assets/images/lexi/wireframe1.png',
  wireframe2: '/assets/images/lexi/wireframe2.png',
  wireframeFull: '/assets/images/lexi/wireframe-full.png',
  
  // Prototype
  prototype1: '/assets/images/lexi/prototype1.png',
  prototype2: '/assets/images/lexi/prototype2.png',
  
  // Empathy Map
  empathyMap: '/assets/images/lexi/empathy-map.png',
  
  // Data Collection Research
  research1: '/assets/images/lexi/research1.png',
  research2: '/assets/images/lexi/research2.png',
  research3: '/assets/images/lexi/research3.png',
  research4: '/assets/images/lexi/research4.png',
  research5: '/assets/images/lexi/research5.png',
  research6: '/assets/images/lexi/research6.png',
  research7: '/assets/images/lexi/research7.png',
  research8: '/assets/images/lexi/research8.png',
  
  // Data Collection
  dataCollection1: '/assets/images/lexi/data-collection1.png',
  dataCollection2: '/assets/images/lexi/data-collection2.png',
  dataCollection3: '/assets/images/lexi/data-collection3.png',
  dataCollection4: '/assets/images/lexi/data-collection4.png',
  dataCollection5: '/assets/images/lexi/data-collection5.png',
  
  // Mockup
  mockup: '/assets/images/lexi/mockup.png',
}

// ===========================================
// ICONS (for user personas, etc.)
// ===========================================
export const icons = {
  location: '/assets/icons/location.svg',
  job: '/assets/icons/job.svg',
  education: '/assets/icons/education.svg',
}

// ===========================================
// FLOWER DECORATIONS (inline SVGs recommended)
// ===========================================
// Note: Flower decorations are better as inline SVGs
// in the components for animation support

// ===========================================
// PLACEHOLDER - Use this when image is missing
// ===========================================
export const placeholder = '/assets/images/placeholder.png'
