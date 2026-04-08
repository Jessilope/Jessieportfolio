import useResponsive from '../hooks/useResponsive'

const DollarCityReflection = () => {
  const { isMobile } = useResponsive()

  return (
    <div id="reflection" style={{
      backgroundColor: '#fffefa',
      width: '100%',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        alignItems: 'center',
        width: '100%',
        maxWidth: '903px',
      }}>
        <p style={{
          fontFamily: `'Poppins', sans-serif`,
          fontSize: isMobile ? '24px' : '32px',
          fontWeight: 500,
          lineHeight: 1.3,
          letterSpacing: '0',
          color: '#5D5F98',
          textAlign: 'center',
          margin: 0,
          width: '100%',
        }}>Reflection</p>

        <div style={{
          fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
          fontSize: isMobile ? '14px' : '16px',
          fontWeight: 300,
          lineHeight: 1.6,
          letterSpacing: '0.8px',
          color: '#212121',
          fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
          width: '100%',
        }}>
          <p style={{ margin: 0 }}>
            This Dollar City project was carried out for educational purposes. I'm happy with the progress I made and hope you enjoy reviewing it. Every stage was a learning experience where I challenged myself to grow and improve.
          </p>
          <p style={{ margin: 0 }}>
            Through this personal project, I gained deeper exposure to the full process behind designing an app. I learned that design is not just about putting elements together, but about analyzing target users—their needs, behaviors, and expectations. I also realized that there are multiple types of users, each expecting different things from a product.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DollarCityReflection
