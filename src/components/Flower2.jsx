import { colors } from '../tokens'

// Flower 2 group from Figma (node-id=228-1631)
const Flower2 = ({ variant = 1, style }) => {
  const flowerStyles = {
    position: 'relative',
    width: '355px',
    height: '355px',
    ...style,
  }

  // Flower 1 from Flower 2 group
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
          {/* Outer layer - 8 circles */}
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlower2V1Outer 20s linear infinite'
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
          
          {/* Middle layer - 8 circles + center */}
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlower2V1Middle 15s linear infinite reverse'
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
          
          {/* Inner layer - 8 circles + center */}
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlower2V1Inner 10s linear infinite'
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
          @keyframes rotateFlower2V1Outer {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rotateFlower2V1Middle {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes rotateFlower2V1Inner {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  // Flower 2 from Flower 2 group
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
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlower2V2Outer 18s linear infinite'
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
          
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlower2V2Middle 14s linear infinite reverse'
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
          
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlower2V2Inner 12s linear infinite'
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
          @keyframes rotateFlower2V2Outer {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rotateFlower2V2Middle {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes rotateFlower2V2Inner {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  // Flower 3 from Flower 2 group
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
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlower2V3Outer 22s linear infinite'
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
          
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlower2V3Middle 16s linear infinite reverse'
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
          
          <g style={{
            transformOrigin: '177.5px 177.5px',
            animation: 'rotateFlower2V3Inner 13s linear infinite'
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
          @keyframes rotateFlower2V3Outer {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rotateFlower2V3Middle {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes rotateFlower2V3Inner {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  return null
}

export default Flower2
