import { useState } from 'react'

const FlowerDecorationSimple = ({ type = 'yellow', style, width, height }) => {
  const [isHovered, setIsHovered] = useState(false)

  const flowerStyles = {
    position: 'relative',
    width: width || '355px',
    height: height || '355px',
    cursor: 'pointer',
    ...style,
  }

  const imageContainerStyles = {
    width: '100%',
    height: '100%',
    transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: isHovered ? 'rotate(360deg)' : 'rotate(0deg)',
  }

  // Yellow flower type (from node 228-1928)
  if (type === 'yellow') {
    return (
      <div 
        style={flowerStyles} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ ...imageContainerStyles, position: 'relative' }}>
          <img 
            src="http://localhost:3845/assets/1d11323a7347ddf2f7819bf1ae7bbc3c9a0b50c0.svg"
            alt="Flower decoration"
            style={{ width: '100%', height: '100%', display: 'block' }}
          />
          <div style={{
            position: 'absolute',
            inset: '27% 27% 27% 27%',
          }}>
            <img 
              src="http://localhost:3845/assets/0473fef166d5184228a32e4b541b7f8487e79a62.svg"
              alt=""
              style={{ width: '100%', height: '100%', display: 'block' }}
            />
          </div>
        </div>
      </div>
    )
  }

  // Purple flower type (from node 228-1631)
  if (type === 'purple') {
    return (
      <div 
        style={flowerStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ ...imageContainerStyles, position: 'relative' }}>
          <img 
            src="http://localhost:3845/assets/e014a7aafce3ff8daa2e455a44de1292cfebd838.svg"
            alt="Flower decoration"
            style={{ width: '100%', height: '100%' }}
          />
          <div style={{
            position: 'absolute',
            inset: '7.6% 7.6% 8.77% 8.77%',
          }}>
            <img 
              src="http://localhost:3845/assets/7acd02458e91373cefa09b5fd0370d9b93d6df99.svg"
              alt=""
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div style={{
            position: 'absolute',
            inset: '32.49% 34.24% 36.33% 34.57%',
          }}>
            <img 
              src="http://localhost:3845/assets/ee3c5cbc09844b01ad2cb526a8f84341cf2eeb8d.svg"
              alt=""
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default FlowerDecorationSimple
