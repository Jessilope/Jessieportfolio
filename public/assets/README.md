# Assets Folder Structure

This folder contains all static assets for the portfolio project.

## Folder Structure

```
/assets
├── /images
│   ├── profile-photo.png     # About section profile photo
│   └── /lexi                 # Lexi project images
│       ├── visual.png
│       ├── persona1-photo.png
│       ├── persona2-photo.png
│       ├── persona3-photo.png
│       ├── components.png
│       ├── journey-map.png
│       ├── ideate.png
│       ├── typography.png
│       ├── wireframe1.png
│       ├── wireframe2.png
│       ├── prototype1.png
│       ├── prototype2.png
│       ├── empathy-map.png
│       ├── mockup.png
│       └── research[1-8].png
├── /icons
│   ├── location.svg
│   ├── job.svg
│   └── education.svg
└── /documents
    └── cv.pdf                # Resume/CV document
```

## How to Add Images

### From Figma:
1. Select the image/frame in Figma
2. Right-click → "Export" or use Ctrl+Shift+E
3. Export as PNG (for photos) or SVG (for icons)
4. Save to the appropriate folder above

### Naming Convention:
- Use lowercase with hyphens: `my-image-name.png`
- Be descriptive: `persona1-photo.png` not `img1.png`
- Include project prefix for project-specific images

## Updating Image Paths

All image paths are centralized in `/src/assets.js`. 

To add a new image:
1. Add the image file to the appropriate folder
2. Add the path to `/src/assets.js`
3. Import and use in your component:

```jsx
import { lexiImages } from '../assets'

// In your component:
<img src={lexiImages.mockup} alt="Lexi Mockup" />
```

## GitHub Deployment

These paths are relative and will work correctly when deployed to GitHub Pages.
Make sure all referenced images exist before deploying.
