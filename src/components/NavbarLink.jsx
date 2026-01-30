import { useState } from 'react'

const NavbarLink = ({ text = 'Home', showLine = false, onClick }) => {
  const [state, setState] = useState('Default')

  const linkStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
    position: 'relative',
    flexShrink: 0,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  }

  const textStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    lineHeight: 1.6,
    position: 'relative',
    flexShrink: 0,
    color: '#1B0022',
    fontSize: '16px',
    textAlign: 'left',
    letterSpacing: '0.8px',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
  }

  const underlineStyles = {
    height: '0',
    position: 'relative',
    flexShrink: 0,
    width: '100%',
  }

  const underlineInnerStyles = {
    position: 'absolute',
    inset: '-2px 0 0 0',
    height: '2px',
    backgroundColor: '#FFCD00',
    width: '100%',
  }

  const handleMouseEnter = () => {
    setState('hover')
  }

  const handleMouseLeave = () => {
    setState('Default')
  }

  const handleClick = () => {
    setState('click')
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      style={linkStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <p style={textStyles}>{text}</p>
      {(state === 'hover' || state === 'click') && showLine && (
        <div style={underlineStyles}>
          <div style={underlineInnerStyles} />
        </div>
      )}
    </button>
  )
}

export default NavbarLink
