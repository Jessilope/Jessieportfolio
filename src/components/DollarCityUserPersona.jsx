import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const DollarCityUserPersona = () => {
  const { isMobile } = useResponsive()

  const imgDany = "http://localhost:3845/assets/440406e09dd8ae0e7fdfc2802ef76575d3c9a736.png"
  const imgJuan = "http://localhost:3845/assets/658f17468d2831b1a85d10aaf50b1e47859e1d34.png"
  const imgMarketShopping = "http://localhost:3845/assets/766962047dda9b82a0c89fcf768ac465ec416086.png"
  const imgOnlineShopping = "http://localhost:3845/assets/744ed60bf42f9ae2e189292d5f3c50bb8a20dc2d.png"
  const imgIconWork = "http://localhost:3845/assets/62b688d7d4f9ea89231f02370fe585dbdc58d233.svg"
  const imgIconLocation = "http://localhost:3845/assets/9bf21cbedaee5741965cd38907f69d9ec083a02a.svg"
  const imgIconFamily = "http://localhost:3845/assets/642e2a0797228c4898dff1dff9790ec70a8ef7dd.svg"
  // Consolidated image for mobile
  const imgUserPersonasMobile = "http://localhost:3845/assets/a56f7aedf3058e9c27ecb0163761998108a8537f.png"

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '112px',
    paddingTop: isMobile ? '64px' : '112px',
    paddingBottom: isMobile ? '48px' : '112px',
    display: 'flex',
    alignItems: 'center',
  }

  const containerStyles = {
    backgroundColor: '#fffefb',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '48px',
    alignItems: isMobile ? 'center' : 'flex-start',
    paddingTop: isMobile ? '48px' : '48px',
    paddingBottom: isMobile ? '48px' : '48px',
    width: isMobile ? '100%' : '1033px',
  }

  const introTextStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '16px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: isMobile ? '0.8px' : '0',
    color: isMobile ? '#000000' : colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    width: '100%',
    margin: 0,
  }

  const titleStyles = {
    fontFamily: isMobile ? `'Kantumruy', 'Noto Sans', sans-serif` : `'Kanit', sans-serif`,
    fontSize: isMobile ? '20px' : '32px',
    fontWeight: isMobile ? 700 : 400,
    lineHeight: isMobile ? 1.3 : '32px',
    letterSpacing: isMobile ? '1px' : '0',
    color: '#370161',
    textAlign: 'center',
    margin: 0,
    fontVariationSettings: isMobile ? "'CTGR' 0, 'wdth' 100, 'wght' 700" : undefined,
  }

  // Mobile image styles
  const mobileImageContainerStyles = {
    width: '100%',
    aspectRatio: '1372 / 1356',
    position: 'relative',
  }

  const mobileImageStyles = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
  }

  const personaCardStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '24px' : '12px',
    alignItems: isMobile ? 'flex-start' : 'center',
    width: '100%',
  }

  const imageColumnStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'row' : 'column',
    gap: isMobile ? '16px' : '32px',
    alignItems: 'center',
    padding: '4px',
  }

  const avatarStyles = {
    width: isMobile ? '100px' : '172px',
    height: isMobile ? '100px' : '178px',
    borderRadius: '89px',
    objectFit: 'cover',
  }

  const personalInfoStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '12px' : '24px',
    alignItems: 'flex-start',
    width: '100%',
  }

  const nameStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '20px' : '32px',
    fontWeight: 400,
    lineHeight: isMobile ? '24px' : '32px',
    color: colors.neutral['700'],
    width: isMobile ? '100%' : '216px',
    margin: 0,
  }

  const ageStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0',
    color: '#c8c8c8',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    width: isMobile ? '100%' : '108px',
    margin: 0,
  }

  const infoItemStyles = {
    display: 'flex',
    gap: isMobile ? '10px' : '15px',
    alignItems: 'center',
  }

  const iconStyles = {
    width: isMobile ? '24px' : '32.696px',
    height: isMobile ? '24px' : '32px',
  }

  const painPointsColumnStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    flex: '1 0 0',
    gap: isMobile ? '24px' : '24px',
    alignItems: 'flex-start',
    color: colors.neutral['700'],
    width: '100%',
  }

  const columnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-start',
    flex: '1 0 0',
  }

  const subtitleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '18px' : '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '0',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    width: '100%',
    margin: 0,
  }

  const listStyles = {
    margin: 0,
    paddingLeft: isMobile ? '20px' : '24px',
    listStyleType: 'disc',
    width: '100%',
  }

  const listItemStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const illustrationColumnStyles = {
    display: isMobile ? 'none' : 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    width: '280px',
  }

  const illustrationTextStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: '48px',
    fontWeight: 400,
    lineHeight: 1.4,
    letterSpacing: '2.4px',
    textAlign: 'center',
    width: '100%',
    margin: 0,
  }

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        {/* Intro Text */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <p style={introTextStyles}>
            Based on the research insights, I identified two different types of users who typically shop at this kind of store. From these patterns, I created user personas to synthesize their behaviors, needs, and concerns, helping guide design decisions in the next stages.
          </p>
        </div>

        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={titleStyles}>User personas</p>
        </div>

        {/* Mobile: Consolidated Image */}
        {isMobile ? (
          <div style={mobileImageContainerStyles}>
            <img
              src={imgUserPersonasMobile}
              alt="User personas - Dany Delgado and Juan Morales"
              style={mobileImageStyles}
            />
          </div>
        ) : (
        <>
        {/* First Persona Card - Dany Delgado */}
        <div style={personaCardStyles}>
          {/* Image Column */}
          <div style={imageColumnStyles}>
            <img src={imgDany} alt="Dany Delgado" style={avatarStyles} />
            
            <div style={personalInfoStyles}>
              {/* Name and Age */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', alignItems: 'flex-start', justifyContent: 'center' }}>
                <p style={nameStyles}>Dany Delgado</p>
                <p style={ageStyles}>35 years old</p>
              </div>

              {/* Info Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start', width: '100%' }}>
                <div style={infoItemStyles}>
                  <img src={imgIconWork} alt="" style={iconStyles} />
                  <p style={{ ...listItemStyles, margin: 0 }}>Employee</p>
                </div>
                <div style={infoItemStyles}>
                  <img src={imgIconLocation} alt="" style={iconStyles} />
                  <p style={{ ...listItemStyles, margin: 0 }}>Colombia</p>
                </div>
                <div style={infoItemStyles}>
                  <img src={imgIconFamily} alt="" style={iconStyles} />
                  <p style={{ ...listItemStyles, margin: 0, flex: '1 0 0' }}>Unmarried with children</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points and Needs */}
          <div style={painPointsColumnStyles}>
            {/* Pain Points */}
            <div style={columnStyles}>
              <p style={subtitleStyles}>Pain Points / Frustrations</p>
              <ul style={listStyles}>
                <li style={listItemStyles}>Suffering a scam</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>Lack of own credit/debit cards</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>Insecurity when making online payments</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>That the product is not as shown on the website</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>No easy and efficient customer service</li>
              </ul>
            </div>

            {/* Needs & Expectations */}
            <div style={columnStyles}>
              <p style={subtitleStyles}>Needs & Expectations</p>
              <ul style={listStyles}>
                <li style={listItemStyles}>Do not travel to the store.</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>Get a better experience</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>Worry less</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>Optimize time spent shopping online.</li>
              </ul>
            </div>
          </div>

          {/* Illustration */}
          <div style={illustrationColumnStyles}>
            <p style={{ ...illustrationTextStyles, color: '#2cb7a5' }}>Shopping at market</p>
            <img src={imgMarketShopping} alt="Shopping at market" style={{ width: '173px', height: '193px', objectFit: 'contain' }} />
          </div>
        </div>

        {/* Second Persona Card - Juan Morales */}
        <div style={personaCardStyles}>
          {/* Illustration */}
          <div style={{ ...illustrationColumnStyles, width: '220px' }}>
            <img src={imgOnlineShopping} alt="Shopping online" style={{ width: '161px', height: '203px', objectFit: 'contain' }} />
            <p style={{ ...illustrationTextStyles, color: '#f18181' }}>shopping online</p>
          </div>

          {/* Pain Points and Needs */}
          <div style={painPointsColumnStyles}>
            {/* Pain Points */}
            <div style={columnStyles}>
              <p style={subtitleStyles}>Pain Points / Frustrations</p>
              <ul style={listStyles}>
                <li style={listItemStyles}>That the product is not as shown on the website</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>Lack of own credit/debit cards.</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>No easy and efficient customer service.</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>There is no a near store to buy</li>
              </ul>
            </div>

            {/* Needs & Expectations */}
            <div style={columnStyles}>
              <p style={subtitleStyles}>Needs & Expectations</p>
              <ul style={listStyles}>
                <li style={listItemStyles}>Feel secure when shopping online.</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>Optimize time shopping online.</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>To be able to compare prices and have control of expenses.</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>Access to easy and efficient customer service.</li>
              </ul>
              <ul style={listStyles}>
                <li style={listItemStyles}>Easier shopping for household items.</li>
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div style={imageColumnStyles}>
            <img src={imgJuan} alt="Juan Morales" style={avatarStyles} />
            
            <div style={personalInfoStyles}>
              {/* Name and Age */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', alignItems: 'flex-start', justifyContent: 'center' }}>
                <p style={nameStyles}>Juan Morales</p>
                <p style={ageStyles}>24 years old</p>
              </div>

              {/* Info Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start', width: '100%' }}>
                <div style={infoItemStyles}>
                  <img src={imgIconWork} alt="" style={iconStyles} />
                  <p style={{ ...listItemStyles, margin: 0 }}>Student</p>
                </div>
                <div style={infoItemStyles}>
                  <img src={imgIconLocation} alt="" style={iconStyles} />
                  <p style={{ ...listItemStyles, margin: 0 }}>Colombia</p>
                </div>
                <div style={infoItemStyles}>
                  <img src={imgIconFamily} alt="" style={iconStyles} />
                  <p style={{ ...listItemStyles, margin: 0 }}>Single</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
        )}
      </div>
    </section>
  )
}

export default DollarCityUserPersona
