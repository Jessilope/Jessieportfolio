import { colors } from '../tokens'

const FlowerDecoration = ({ variant = 1, style }) => {
  const flowerStyles = {
    position: 'relative',
    width: '355px',
    height: '355px',
    ...style,
  }

  // Flower 1 (Yellow) - From Figma flower 1
  if (variant === 1) {
    return (
      <div style={flowerStyles}>
        <svg
          width="355"
          height="355"
          viewBox="0 0 355 355"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          {/* Outer layer - 8 circles in #FFF7D6 */}
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlowerOuter1 20s linear infinite'
          }}>
            <circle cx="86.1548" cy="92.3831" r="59.1667" fill="#FFF7D6" />
            <circle cx="177.5" cy="59.1667" r="59.1667" fill="#FFF7D6" />
            <circle cx="177.5" cy="295.833" r="59.1667" fill="#FFF7D6" />
            <circle cx="264.693" cy="92.3831" r="59.1667" fill="#FFF7D6" />
            <circle cx="295.833" cy="177.5" r="59.1667" fill="#FFF7D6" />
            <circle cx="264.693" cy="262.617" r="59.1667" fill="#FFF7D6" />
            <circle cx="96.535" cy="262.617" r="59.1667" fill="#FFF7D6" />
            <circle cx="59.1667" cy="177.5" r="59.1667" fill="#FFF7D6" />
          </g>
          
          {/* Middle layer - 8 circles + center in #FFEB99 */}
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlowerMiddle1 15s linear infinite reverse'
          }}>
            <circle cx="109.344" cy="109.344" r="49.3056" fill="#FFEB99" />
            <circle cx="177.5" cy="88.0556" r="49.3056" fill="#FFEB99" />
            <circle cx="245.656" cy="109.344" r="49.3056" fill="#FFEB99" />
            <circle cx="266.944" cy="177.5" r="49.3056" fill="#FFEB99" />
            <circle cx="245.656" cy="245.656" r="49.3056" fill="#FFEB99" />
            <circle cx="177.5" cy="266.944" r="49.3056" fill="#FFEB99" />
            <circle cx="109.344" cy="245.656" r="49.3056" fill="#FFEB99" />
            <circle cx="88.0556" cy="177.5" r="49.3056" fill="#FFEB99" />
            <circle cx="177.5" cy="177.5" r="81.5962" fill="#FFEB99" />
          </g>
          
          {/* Inner layer - 8 circles + center in #FFF3C2 */}
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlowerInner1 10s linear infinite'
          }}>
            <circle cx="133.796" cy="133.796" r="33.5624" fill="#FFF3C2" />
            <circle cx="177.5" cy="118.333" r="33.5624" fill="#FFF3C2" />
            <circle cx="221.204" cy="133.796" r="33.5624" fill="#FFF3C2" />
            <circle cx="236.667" cy="177.5" r="33.5624" fill="#FFF3C2" />
            <circle cx="221.204" cy="221.204" r="33.5624" fill="#FFF3C2" />
            <circle cx="177.5" cy="236.667" r="33.5624" fill="#FFF3C2" />
            <circle cx="133.796" cy="221.204" r="33.5624" fill="#FFF3C2" />
            <circle cx="118.333" cy="177.5" r="33.5624" fill="#FFF3C2" />
            <circle cx="177.5" cy="177.5" r="55.3485" fill="#FFF3C2" />
          </g>
        </svg>
        
        <style>{`
          @keyframes rotateFlowerOuter1 {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rotateFlowerMiddle1 {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes rotateFlowerInner1 {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  // Flower 2 (Purple/Pink)
  if (variant === 2) {
    return (
      <div style={flowerStyles}>
        <svg
          width="355"
          height="355"
          viewBox="0 0 355 355"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          {/* Outer layer */}
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlowerOuter2 18s linear infinite'
          }}>
            <circle cx="86.1548" cy="92.3831" r="59.1667" fill={colors.primary['100']} />
            <circle cx="177.5" cy="59.1667" r="59.1667" fill={colors.primary['100']} />
            <circle cx="177.5" cy="295.833" r="59.1667" fill={colors.primary['100']} />
            <circle cx="264.693" cy="92.3831" r="59.1667" fill={colors.primary['100']} />
            <circle cx="295.833" cy="177.5" r="59.1667" fill={colors.primary['100']} />
            <circle cx="264.693" cy="262.617" r="59.1667" fill={colors.primary['100']} />
            <circle cx="96.535" cy="262.617" r="59.1667" fill={colors.primary['100']} />
            <circle cx="59.1667" cy="177.5" r="59.1667" fill={colors.primary['100']} />
          </g>
          
          {/* Middle layer */}
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlowerMiddle2 14s linear infinite reverse'
          }}>
            <circle cx="109.344" cy="109.344" r="49.3056" fill={colors.primary['200']} />
            <circle cx="177.5" cy="88.0556" r="49.3056" fill={colors.primary['200']} />
            <circle cx="245.656" cy="109.344" r="49.3056" fill={colors.primary['200']} />
            <circle cx="266.944" cy="177.5" r="49.3056" fill={colors.primary['200']} />
            <circle cx="245.656" cy="245.656" r="49.3056" fill={colors.primary['200']} />
            <circle cx="177.5" cy="266.944" r="49.3056" fill={colors.primary['200']} />
            <circle cx="109.344" cy="245.656" r="49.3056" fill={colors.primary['200']} />
            <circle cx="88.0556" cy="177.5" r="49.3056" fill={colors.primary['200']} />
            <circle cx="177.5" cy="177.5" r="81.5962" fill={colors.primary['200']} />
          </g>
          
          {/* Inner layer */}
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlowerInner2 12s linear infinite'
          }}>
            <circle cx="133.796" cy="133.796" r="33.5624" fill={colors.primary['300']} />
            <circle cx="177.5" cy="118.333" r="33.5624" fill={colors.primary['300']} />
            <circle cx="221.204" cy="133.796" r="33.5624" fill={colors.primary['300']} />
            <circle cx="236.667" cy="177.5" r="33.5624" fill={colors.primary['300']} />
            <circle cx="221.204" cy="221.204" r="33.5624" fill={colors.primary['300']} />
            <circle cx="177.5" cy="236.667" r="33.5624" fill={colors.primary['300']} />
            <circle cx="133.796" cy="221.204" r="33.5624" fill={colors.primary['300']} />
            <circle cx="118.333" cy="177.5" r="33.5624" fill={colors.primary['300']} />
            <circle cx="177.5" cy="177.5" r="55.3485" fill={colors.primary['300']} />
          </g>
        </svg>
        
        <style>{`
          @keyframes rotateFlowerOuter2 {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rotateFlowerMiddle2 {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes rotateFlowerInner2 {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  // Flower 3 (Pink/Purple)
  if (variant === 3) {
    return (
      <div style={flowerStyles}>
        <svg
          width="355"
          height="355"
          viewBox="0 0 355 355"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          {/* Outer layer */}
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlowerOuter3 22s linear infinite'
          }}>
            <circle cx="86.1548" cy="92.3831" r="59.1667" fill={colors.primary['100']} />
            <circle cx="177.5" cy="59.1667" r="59.1667" fill={colors.primary['100']} />
            <circle cx="177.5" cy="295.833" r="59.1667" fill={colors.primary['100']} />
            <circle cx="264.693" cy="92.3831" r="59.1667" fill={colors.primary['100']} />
            <circle cx="295.833" cy="177.5" r="59.1667" fill={colors.primary['100']} />
            <circle cx="264.693" cy="262.617" r="59.1667" fill={colors.primary['100']} />
            <circle cx="96.535" cy="262.617" r="59.1667" fill={colors.primary['100']} />
            <circle cx="59.1667" cy="177.5" r="59.1667" fill={colors.primary['100']} />
          </g>
          
          {/* Middle layer */}
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlowerMiddle3 16s linear infinite reverse'
          }}>
            <circle cx="109.344" cy="109.344" r="49.3056" fill={colors.primary['200']} />
            <circle cx="177.5" cy="88.0556" r="49.3056" fill={colors.primary['200']} />
            <circle cx="245.656" cy="109.344" r="49.3056" fill={colors.primary['200']} />
            <circle cx="266.944" cy="177.5" r="49.3056" fill={colors.primary['200']} />
            <circle cx="245.656" cy="245.656" r="49.3056" fill={colors.primary['200']} />
            <circle cx="177.5" cy="266.944" r="49.3056" fill={colors.primary['200']} />
            <circle cx="109.344" cy="245.656" r="49.3056" fill={colors.primary['200']} />
            <circle cx="88.0556" cy="177.5" r="49.3056" fill={colors.primary['200']} />
            <circle cx="177.5" cy="177.5" r="81.5962" fill={colors.primary['200']} />
          </g>
          
          {/* Inner layer */}
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlowerInner3 13s linear infinite'
          }}>
            <circle cx="133.796" cy="133.796" r="33.5624" fill={colors.backgrounds.primary} />
            <circle cx="177.5" cy="118.333" r="33.5624" fill={colors.backgrounds.primary} />
            <circle cx="221.204" cy="133.796" r="33.5624" fill={colors.backgrounds.primary} />
            <circle cx="236.667" cy="177.5" r="33.5624" fill={colors.backgrounds.primary} />
            <circle cx="221.204" cy="221.204" r="33.5624" fill={colors.backgrounds.primary} />
            <circle cx="177.5" cy="236.667" r="33.5624" fill={colors.backgrounds.primary} />
            <circle cx="133.796" cy="221.204" r="33.5624" fill={colors.backgrounds.primary} />
            <circle cx="118.333" cy="177.5" r="33.5624" fill={colors.backgrounds.primary} />
            <circle cx="177.5" cy="177.5" r="55.3485" fill={colors.backgrounds.primary} />
          </g>
        </svg>
        
        <style>{`
          @keyframes rotateFlowerOuter3 {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rotateFlowerMiddle3 {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes rotateFlowerInner3 {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  return null
}

export default FlowerDecoration
