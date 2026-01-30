// Component based on Figma node 228-1631 - Flower with petal shapes
// Uses SVG images from Figma for the correct flower petal design

const FlowerFromFigma = ({ state = 1, style }) => {
  // SVG asset URLs from Figma
  const imgStateFlower1Desktop = "http://localhost:3845/assets/e014a7aafce3ff8daa2e455a44de1292cfebd838.svg"
  const imgGroup1 = "http://localhost:3845/assets/7acd02458e91373cefa09b5fd0370d9b93d6df99.svg"
  const imgGroup4 = "http://localhost:3845/assets/ee3c5cbc09844b01ad2cb526a8f84341cf2eeb8d.svg"
  const imgGroup3 = "http://localhost:3845/assets/71c5d7b48f72b1140c1e5a7ed27952fcb38b821f.svg"
  const imgGroup2 = "http://localhost:3845/assets/98bfcc8dff10dcabdeeec492d2948281de03df78.svg"
  const imgGroup5 = "http://localhost:3845/assets/2ef108381187e677cd0c53010cb3cb089c01cd13.svg"
  const imgGroup8 = "http://localhost:3845/assets/36ba8da805cb788c25515f98a29a31df9798055c.svg"
  const imgGroup9 = "http://localhost:3845/assets/5549f642ff0a77ce8d8d14d7ad3edf8c573ece8a.svg"
  const imgGroup10 = "http://localhost:3845/assets/cbbeaa68596a9d45132b9f97a693c8a667c3187a.svg"

  // Get dimensions from style or use default 355px
  const width = style?.width || '355px'
  const height = style?.height || '355px'

  const containerStyles = {
    position: 'relative',
    width: width,
    height: height,
  }

  // Flower 1 (state=1) - Yellow flower - node 228:1632
  if (state === 1) {
    return (
      <div style={containerStyles}>
        <img 
          alt="" 
          style={{ 
            display: 'block', 
            maxWidth: 'none', 
            width: '100%', 
            height: '100%' 
          }} 
          src={imgStateFlower1Desktop} 
        />
        <div style={{
          position: 'absolute',
          top: '7.6%',
          right: '7.6%',
          bottom: '8.77%',
          left: '8.77%',
        }}>
          <img 
            alt="" 
            style={{ 
              display: 'block', 
              maxWidth: 'none', 
              width: '100%', 
              height: '100%' 
            }} 
            src={imgGroup1} 
          />
        </div>
        <div style={{
          position: 'absolute',
          top: '32.49%',
          right: '34.24%',
          bottom: '36.33%',
          left: '34.57%',
        }}>
          <img 
            alt="" 
            style={{ 
              display: 'block', 
              maxWidth: 'none', 
              width: '100%', 
              height: '100%' 
            }} 
            src={imgGroup4} 
          />
        </div>
      </div>
    )
  }

  // Flower 2 (state=2) - Purple flower with rotation - node 228:1663
  if (state === 2) {
    return (
      <div style={containerStyles}>
        {/* Outer layer */}
        <div style={{
          position: 'absolute',
          display: 'flex',
          top: '-11.23%',
          right: '-11.23%',
          bottom: '-11.23%',
          left: '-11.23%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            flexShrink: 0,
            height: '355.845px',
            transform: 'rotate(-14.74deg)',
            width: '355.932px',
          }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img 
                alt="" 
                style={{ 
                  display: 'block', 
                  maxWidth: 'none', 
                  width: '100%', 
                  height: '100%' 
                }} 
                src={imgGroup3} 
              />
            </div>
          </div>
        </div>
        
        {/* Middle layer */}
        <div style={{
          position: 'absolute',
          display: 'flex',
          top: '5.43%',
          right: '5.43%',
          bottom: '6.6%',
          left: '6.6%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            flexShrink: 0,
            height: '296.952px',
            transform: 'rotate(3.04deg)',
            width: '296.954px',
          }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img 
                alt="" 
                style={{ 
                  display: 'block', 
                  maxWidth: 'none', 
                  width: '100%', 
                  height: '100%' 
                }} 
                src={imgGroup2} 
              />
            </div>
          </div>
        </div>
        
        {/* Inner layer */}
        <div style={{
          position: 'absolute',
          display: 'flex',
          top: '29.32%',
          right: '31.14%',
          bottom: '33.23%',
          left: '31.39%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            flexShrink: 0,
            height: '111.404px',
            transform: 'rotate(-12.54deg)',
            width: '111.475px',
          }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img 
                alt="" 
                style={{ 
                  display: 'block', 
                  maxWidth: 'none', 
                  width: '100%', 
                  height: '100%' 
                }} 
                src={imgGroup5} 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Flower 3 (state=3) - Purple flower with different rotation - node 228:1694
  if (state === 3) {
    return (
      <div style={containerStyles}>
        {/* Outer layer */}
        <div style={{
          position: 'absolute',
          display: 'flex',
          top: '-20.69%',
          right: '-20.69%',
          bottom: '-20.69%',
          left: '-20.69%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            flexShrink: 0,
            height: '355px',
            transform: 'rotate(136.31deg)',
            width: '355.001px',
          }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img 
                alt="" 
                style={{ 
                  display: 'block', 
                  maxWidth: 'none', 
                  width: '100%', 
                  height: '100%' 
                }} 
                src={imgGroup8} 
              />
            </div>
          </div>
        </div>
        
        {/* Middle layer */}
        <div style={{
          position: 'absolute',
          display: 'flex',
          top: '-7.82%',
          right: '-7.83%',
          bottom: '-6.66%',
          left: '-6.66%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            flexShrink: 0,
            height: '297.184px',
            transform: 'rotate(30.23deg)',
            width: '297.199px',
          }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img 
                alt="" 
                style={{ 
                  display: 'block', 
                  maxWidth: 'none', 
                  width: '100%', 
                  height: '100%' 
                }} 
                src={imgGroup9} 
              />
            </div>
          </div>
        </div>
        
        {/* Inner layer */}
        <div style={{
          position: 'absolute',
          display: 'flex',
          top: '27.02%',
          right: '28.92%',
          bottom: '30.98%',
          left: '29.07%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            flexShrink: 0,
            height: '111.256px',
            transform: 'rotate(-26.34deg)',
            width: '111.293px',
          }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img 
                alt="" 
                style={{ 
                  display: 'block', 
                  maxWidth: 'none', 
                  width: '100%', 
                  height: '100%' 
                }} 
                src={imgGroup10} 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default FlowerFromFigma
