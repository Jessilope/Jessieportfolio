import { useState } from 'react'
import { colors, spacing, typography } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Yellow Flower Component - matches Figma node 228-1928 (5 rounded petals)
const YellowFlower = ({ width = '136px', height = '145px' }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  // Generate 5 petals in a circular pattern
  const numPetals = 5
  const petalRadius = 70
  const centerX = 177.5
  const centerY = 177.5
  const petalDistance = 90
  
  const petals = Array.from({ length: numPetals }).map((_, i) => {
    const angle = (i * 360) / numPetals - 90
    const radian = (angle * Math.PI) / 180
    const x = centerX + petalDistance * Math.cos(radian)
    const y = centerY + petalDistance * Math.sin(radian)
    return { x, y }
  })
  
  return (
    <div 
      style={{ 
        width, 
        height, 
        cursor: 'pointer',
        transition: 'transform 4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: isHovered ? 'rotate(360deg) scale(1.05)' : 'rotate(0deg) scale(1)',
      }}
      onMouseEnter={() => setTimeout(() => setIsHovered(true), 100)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 355 355" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 5 rounded petals */}
        {petals.map((petal, i) => (
          <circle key={i} cx={petal.x} cy={petal.y} r={petalRadius} fill="#FFDF5B"/>
        ))}
        {/* Center circle */}
        <circle cx={centerX} cy={centerY} r="60" fill="#FFF3C2"/>
      </svg>
    </div>
  )
}

// Purple Flower Component - matches Figma node 228-1631 (8 scalloped petals)
const PurpleFlower = ({ width = '130px', height = '130px' }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  // Generate 8 petals in a circular pattern
  const numPetals = 8
  const petalRadius = 55
  const centerX = 177.5
  const centerY = 177.5
  const petalDistance = 80
  
  const petals = Array.from({ length: numPetals }).map((_, i) => {
    const angle = (i * 360) / numPetals - 90
    const radian = (angle * Math.PI) / 180
    const x = centerX + petalDistance * Math.cos(radian)
    const y = centerY + petalDistance * Math.sin(radian)
    return { x, y }
  })
  
  return (
    <div 
      style={{ 
        width, 
        height, 
        cursor: 'pointer',
        transition: 'transform 4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: isHovered ? 'rotate(360deg) scale(1.05)' : 'rotate(0deg) scale(1)',
      }}
      onMouseEnter={() => setTimeout(() => setIsHovered(true), 100)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 355 355" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 8 rounded petals */}
        {petals.map((petal, i) => (
          <circle key={i} cx={petal.x} cy={petal.y} r={petalRadius} fill="#E0C7FF"/>
        ))}
        {/* Center circle */}
        <circle cx={centerX} cy={centerY} r="50" fill="#C192FF"/>
      </svg>
    </div>
  )
}

const ClosingSection = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: colors.backgrounds.main,
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    padding: isMobile ? `${spacing.xxl} 0` : `${spacing.xxl} 0`,
    display: 'flex',
    justifyContent: 'center',
    height: isMobile ? '743px' : 'auto',
    paddingTop: isMobile ? spacing.xxl : spacing.xxl,
  }

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(3, fit-content(100%))' : 'repeat(9, fit-content(100%))',
    gridTemplateRows: isMobile ? 'repeat(5, fit-content(100%))' : 'repeat(3, fit-content(100%))',
    gap: isMobile ? '16px 24px' : '44px 36px',
    position: 'relative',
  }

  // Text container - centered in the section for mobile
  const textContainerStyles = isMobile ? {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.semantic.textHeaders,
    textAlign: 'center',
    width: '129px',
    zIndex: 10,
  } : {
    gridColumn: '5',
    gridRow: '2',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.semantic.textHeaders,
    textAlign: 'center',
    width: '250px',
    alignSelf: 'flex-start',
    justifySelf: 'center',
  }

  const titleStyles = {
    fontFamily: `'${typography.presets.header2.fontFamily}', sans-serif`,
    fontSize: isMobile ? '20px' : typography.presets.header2.fontSize,
    fontWeight: isMobile ? 700 : typography.presets.header2.fontWeight,
    lineHeight: isMobile ? 1.3 : typography.presets.header2.lineHeight,
    letterSpacing: isMobile ? '1px' : typography.presets.header2.letterSpacing,
    margin: 0,
  }

  const subtitleStyles = {
    fontFamily: `'${typography.presets.body.fontFamily}', ${typography.fontFamilies.fallback}`,
    fontSize: isMobile ? '12px' : typography.presets.body.fontSize,
    fontWeight: typography.presets.body.fontWeight,
    lineHeight: typography.presets.body.lineHeight,
    letterSpacing: isMobile ? '0' : typography.presets.body.letterSpacing,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
  }

  const getGridPosition = (col, row) => ({
    gridColumn: col,
    gridRow: row,
  })

  const getFlowerStyle = (width, height) => ({
    width: width,
    height: height,
    justifySelf: 'center',
    alignSelf: 'center',
  })

  // Mobile flower sizes
  const mobileYellowSize = { width: '117px', height: '115px' }
  const mobilePurpleSize = { width: '128px', height: '128px' }

  // Mobile grid: 3 cols, 5 rows - Pattern from Figma
  // Row 1: Yellow, Purple, Yellow
  // Row 2: Purple, Yellow, Purple
  // Row 3: Yellow, [text], Yellow
  // Row 4: Purple, Yellow, Purple
  // Row 5: Yellow, Purple, Yellow
  
  if (isMobile) {
    return (
      <section id="closing" style={sectionStyles}>
        <div style={gridStyles}>
          {/* Row 1 */}
          <div style={{ ...getGridPosition(1, 1), ...getFlowerStyle(mobileYellowSize.width, mobileYellowSize.height) }}>
            <YellowFlower width={mobileYellowSize.width} height={mobileYellowSize.height} />
          </div>
          <div style={{ ...getGridPosition(2, 1), ...getFlowerStyle(mobilePurpleSize.width, mobilePurpleSize.height) }}>
            <PurpleFlower width={mobilePurpleSize.width} height={mobilePurpleSize.height} />
          </div>
          <div style={{ ...getGridPosition(3, 1), ...getFlowerStyle(mobileYellowSize.width, mobileYellowSize.height) }}>
            <YellowFlower width={mobileYellowSize.width} height={mobileYellowSize.height} />
          </div>
          
          {/* Row 2 */}
          <div style={{ ...getGridPosition(1, 2), ...getFlowerStyle(mobilePurpleSize.width, mobilePurpleSize.height) }}>
            <PurpleFlower width={mobilePurpleSize.width} height={mobilePurpleSize.height} />
          </div>
          <div style={{ ...getGridPosition(2, 2), ...getFlowerStyle(mobileYellowSize.width, mobileYellowSize.height) }}>
            <YellowFlower width={mobileYellowSize.width} height={mobileYellowSize.height} />
          </div>
          <div style={{ ...getGridPosition(3, 2), ...getFlowerStyle(mobilePurpleSize.width, mobilePurpleSize.height) }}>
            <PurpleFlower width={mobilePurpleSize.width} height={mobilePurpleSize.height} />
          </div>
          
          {/* Row 3 */}
          <div style={{ ...getGridPosition(1, 3), ...getFlowerStyle(mobileYellowSize.width, mobileYellowSize.height) }}>
            <YellowFlower width={mobileYellowSize.width} height={mobileYellowSize.height} />
          </div>
          {/* Position 2,3 - text is positioned absolutely */}
          <div style={{ ...getGridPosition(3, 3), ...getFlowerStyle(mobileYellowSize.width, mobileYellowSize.height) }}>
            <YellowFlower width={mobileYellowSize.width} height={mobileYellowSize.height} />
          </div>
          
          {/* Row 4 */}
          <div style={{ ...getGridPosition(1, 4), ...getFlowerStyle(mobilePurpleSize.width, mobilePurpleSize.height) }}>
            <PurpleFlower width={mobilePurpleSize.width} height={mobilePurpleSize.height} />
          </div>
          <div style={{ ...getGridPosition(2, 4), ...getFlowerStyle(mobileYellowSize.width, mobileYellowSize.height) }}>
            <YellowFlower width={mobileYellowSize.width} height={mobileYellowSize.height} />
          </div>
          <div style={{ ...getGridPosition(3, 4), ...getFlowerStyle(mobilePurpleSize.width, mobilePurpleSize.height) }}>
            <PurpleFlower width={mobilePurpleSize.width} height={mobilePurpleSize.height} />
          </div>
          
          {/* Row 5 */}
          <div style={{ ...getGridPosition(1, 5), ...getFlowerStyle(mobileYellowSize.width, mobileYellowSize.height) }}>
            <YellowFlower width={mobileYellowSize.width} height={mobileYellowSize.height} />
          </div>
          <div style={{ ...getGridPosition(2, 5), ...getFlowerStyle(mobilePurpleSize.width, mobilePurpleSize.height) }}>
            <PurpleFlower width={mobilePurpleSize.width} height={mobilePurpleSize.height} />
          </div>
          <div style={{ ...getGridPosition(3, 5), ...getFlowerStyle(mobileYellowSize.width, mobileYellowSize.height) }}>
            <YellowFlower width={mobileYellowSize.width} height={mobileYellowSize.height} />
          </div>
        </div>

        {/* Center text - positioned absolutely relative to section */}
        <div style={textContainerStyles}>
          <h2 style={titleStyles}>Design for good :)</h2>
          <p style={subtitleStyles}>Thank you for watching</p>
        </div>
      </section>
    )
  }

  // Desktop layout
  return (
    <section id="closing" style={sectionStyles}>
      <div style={gridStyles}>
        {/* Row 1 - Pattern: Y P Y P Y P Y P Y (9 flowers) */}
        <div style={{ ...getGridPosition(1, 1), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>
        <div style={{ ...getGridPosition(2, 1), ...getFlowerStyle('130px', '130px') }}>
          <PurpleFlower width="130px" height="130px" />
        </div>
        <div style={{ ...getGridPosition(3, 1), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>
        <div style={{ ...getGridPosition(4, 1), ...getFlowerStyle('130px', '130px') }}>
          <PurpleFlower width="130px" height="130px" />
        </div>
        <div style={{ ...getGridPosition(5, 1), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>
        <div style={{ ...getGridPosition(6, 1), ...getFlowerStyle('130px', '130px') }}>
          <PurpleFlower width="130px" height="130px" />
        </div>
        <div style={{ ...getGridPosition(7, 1), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>
        <div style={{ ...getGridPosition(8, 1), ...getFlowerStyle('130px', '130px') }}>
          <PurpleFlower width="130px" height="130px" />
        </div>
        <div style={{ ...getGridPosition(9, 1), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>

        {/* Row 2 - Pattern: P Y P Y [TEXT] Y P Y P (8 flowers + text in center) */}
        <div style={{ ...getGridPosition(1, 2), ...getFlowerStyle('130px', '130px') }}>
          <PurpleFlower width="130px" height="130px" />
        </div>
        <div style={{ ...getGridPosition(2, 2), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>
        <div style={{ ...getGridPosition(3, 2), ...getFlowerStyle('130px', '130px') }}>
          <PurpleFlower width="130px" height="130px" />
        </div>
        <div style={{ ...getGridPosition(4, 2), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>
        {/* Position 5 has the text */}
        <div style={{ ...getGridPosition(6, 2), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>
        <div style={{ ...getGridPosition(7, 2), ...getFlowerStyle('130px', '130px') }}>
          <PurpleFlower width="130px" height="130px" />
        </div>
        <div style={{ ...getGridPosition(8, 2), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>
        <div style={{ ...getGridPosition(9, 2), ...getFlowerStyle('130px', '130px') }}>
          <PurpleFlower width="130px" height="130px" />
        </div>

        {/* Row 3 - Pattern: Y P Y P Y P Y P Y (9 flowers) */}
        <div style={{ ...getGridPosition(1, 3), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>
        <div style={{ ...getGridPosition(2, 3), ...getFlowerStyle('130px', '130px') }}>
          <PurpleFlower width="130px" height="130px" />
        </div>
        <div style={{ ...getGridPosition(3, 3), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>
        <div style={{ ...getGridPosition(4, 3), ...getFlowerStyle('130px', '130px') }}>
          <PurpleFlower width="130px" height="130px" />
        </div>
        <div style={{ ...getGridPosition(5, 3), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>
        <div style={{ ...getGridPosition(6, 3), ...getFlowerStyle('130px', '130px') }}>
          <PurpleFlower width="130px" height="130px" />
        </div>
        <div style={{ ...getGridPosition(7, 3), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>
        <div style={{ ...getGridPosition(8, 3), ...getFlowerStyle('130px', '130px') }}>
          <PurpleFlower width="130px" height="130px" />
        </div>
        <div style={{ ...getGridPosition(9, 3), ...getFlowerStyle('136px', '145px') }}>
          <YellowFlower width="136px" height="145px" />
        </div>

        {/* Center text */}
        <div style={textContainerStyles}>
          <h2 style={titleStyles}>Design for good :)</h2>
          <p style={subtitleStyles}>Thank you for watching</p>
        </div>
      </div>
    </section>
  )
}

export default ClosingSection
