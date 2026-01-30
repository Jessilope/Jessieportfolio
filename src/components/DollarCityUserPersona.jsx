import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Image paths
const personaImages = {
  persona1: '/assets/images/dollarcity/persona-1.png',
  persona2: '/assets/images/dollarcity/persona-2.png',
  womanShopping: '/assets/images/dollarcity/woman-shopping.png',
  successfulPayment: '/assets/images/dollarcity/successful-payment.png',
  mobilePersonas: '/assets/images/dollarcity/user-personas-mobile.png',
}

// Icon components
const JobIcon = () => (
  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.167 9.33333H5.83366C4.36091 9.33333 3.16699 10.5273 3.16699 12V25.3333C3.16699 26.8061 4.36091 28 5.83366 28H27.167C28.6398 28 29.8337 26.8061 29.8337 25.3333V12C29.8337 10.5273 28.6398 9.33333 27.167 9.33333Z" stroke="#370161" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.833 28V6.66667C21.833 5.95942 21.5521 5.28115 21.0521 4.78105C20.552 4.28095 19.8737 4 19.1664 4H13.833C13.1258 4 12.4475 4.28095 11.9474 4.78105C11.4473 5.28115 11.1664 5.95942 11.1664 6.66667V28" stroke="#370161" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.5 13.3333C28.5 22.6667 16.5 30.6667 16.5 30.6667C16.5 30.6667 4.5 22.6667 4.5 13.3333C4.5 10.1507 5.76428 7.09849 8.01472 4.84805C10.2652 2.59762 13.3174 1.33333 16.5 1.33333C19.6826 1.33333 22.7348 2.59762 24.9853 4.84805C27.2357 7.09849 28.5 10.1507 28.5 13.3333Z" stroke="#370161" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 17.3333C18.7091 17.3333 20.5 15.5425 20.5 13.3333C20.5 11.1242 18.7091 9.33333 16.5 9.33333C14.2909 9.33333 12.5 11.1242 12.5 13.3333C12.5 15.5425 14.2909 17.3333 16.5 17.3333Z" stroke="#370161" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FamilyIcon = () => (
  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.167 28V25.3333C23.167 23.9188 22.6052 22.5623 21.6051 21.5621C20.6049 20.5619 19.2483 20 17.8337 20H7.16699C5.75237 20 4.39585 20.5619 3.39566 21.5621C2.39546 22.5623 1.83366 23.9188 1.83366 25.3333V28" stroke="#370161" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5003 14.6667C15.4458 14.6667 17.8337 12.2789 17.8337 9.33333C17.8337 6.38781 15.4458 4 12.5003 4C9.5548 4 7.16699 6.38781 7.16699 9.33333C7.16699 12.2789 9.5548 14.6667 12.5003 14.6667Z" stroke="#370161" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M31.167 28V25.3333C31.1661 24.1517 30.7701 23.0037 30.0431 22.0698C29.3162 21.1358 28.2992 20.4688 27.152 20.176" stroke="#370161" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.4854 4.17603C23.6356 4.46698 24.6558 5.13398 25.3849 6.0693C26.114 7.00462 26.5107 8.15514 26.5107 9.33936C26.5107 10.5236 26.114 11.6741 25.3849 12.6094C24.6558 13.5448 23.6356 14.2117 22.4854 14.5027" stroke="#370161" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DollarCityUserPersona = () => {
  const { isMobile } = useResponsive()

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
    position: 'relative',
  }

  const mobileImageStyles = {
    width: '100%',
    height: 'auto',
    display: 'block',
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
              src={personaImages.mobilePersonas}
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
            <img src={personaImages.persona1} alt="Dany Delgado" style={avatarStyles} />
            
            <div style={personalInfoStyles}>
              {/* Name and Age */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', alignItems: 'flex-start', justifyContent: 'center' }}>
                <p style={nameStyles}>Dany Delgado</p>
                <p style={ageStyles}>35 years old</p>
              </div>

              {/* Info Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start', width: '100%' }}>
                <div style={infoItemStyles}>
                  <JobIcon />
                  <p style={{ ...listItemStyles, margin: 0 }}>Employee</p>
                </div>
                <div style={infoItemStyles}>
                  <LocationIcon />
                  <p style={{ ...listItemStyles, margin: 0 }}>Colombia</p>
                </div>
                <div style={infoItemStyles}>
                  <FamilyIcon />
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
            <img src={personaImages.womanShopping} alt="Shopping at market" style={{ width: '173px', height: '193px', objectFit: 'contain' }} />
          </div>
        </div>

        {/* Second Persona Card - Juan Morales */}
        <div style={personaCardStyles}>
          {/* Illustration */}
          <div style={{ ...illustrationColumnStyles, width: '220px' }}>
            <img src={personaImages.successfulPayment} alt="Shopping online" style={{ width: '161px', height: '203px', objectFit: 'contain' }} />
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
            <img src={personaImages.persona2} alt="Juan Morales" style={avatarStyles} />
            
            <div style={personalInfoStyles}>
              {/* Name and Age */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', alignItems: 'flex-start', justifyContent: 'center' }}>
                <p style={nameStyles}>Juan Morales</p>
                <p style={ageStyles}>24 years old</p>
              </div>

              {/* Info Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start', width: '100%' }}>
                <div style={infoItemStyles}>
                  <JobIcon />
                  <p style={{ ...listItemStyles, margin: 0 }}>Student</p>
                </div>
                <div style={infoItemStyles}>
                  <LocationIcon />
                  <p style={{ ...listItemStyles, margin: 0 }}>Colombia</p>
                </div>
                <div style={infoItemStyles}>
                  <FamilyIcon />
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
