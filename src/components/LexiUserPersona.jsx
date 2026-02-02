import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Image paths
const personaImages = {
  persona1: '/assets/images/lexi/persona-1.png',
  persona2: '/assets/images/lexi/persona-2.png',
  digitalNomad: '/assets/images/lexi/digital-nomad-working.png',
  teamBrainstorming: '/assets/images/lexi/team-brainstorming.png',
  mobilePersonas: '/assets/images/lexi/user-personas-mobile.png',
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

const LexiUserPersona = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '64px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: '48px',
    display: 'flex',
    alignItems: 'center',
  }

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '48px' : spacing.xxl, // 48px
    alignItems: 'center',
    width: '100%',
    flex: 1,
    padding: isMobile ? '48px 0' : `${spacing.xxl} 0`,
  }

  const introTextStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    width: '100%',
  }

  const headerStyles = {
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
    position: 'relative',
    width: '100%',
    aspectRatio: '1308 / 1590',
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
    gap: '12px',
    alignItems: 'center',
    width: '100%',
  }

  const imageColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    alignItems: 'center',
    padding: '4px',
    flexShrink: 0,
  }

  const profileImageStyles = {
    width: '194px',
    height: '290px',
    borderRadius: '296px',
    objectFit: 'cover',
  }

  const personalInfoStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start',
    width: '100%',
  }

  const nameStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: '32px',
    fontWeight: 400,
    lineHeight: '32px',
    color: colors.neutral['700'],
    margin: 0,
    width: '216px',
  }

  const ageStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: '#c8c8c8',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
  }

  const infoItemStyles = {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  }

  const iconStyles = {
    width: '32.696px',
    height: '32px',
    flexShrink: 0,
  }

  const infoTextStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
  }

  const painPointsColumnStyles = {
    display: 'flex',
    flex: '1 0 0',
    gap: '24px',
    alignItems: 'flex-start',
    minHeight: '1px',
    minWidth: '1px',
  }

  const contentColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-start',
    flex: '1 0 0',
    minHeight: '1px',
    minWidth: '1px',
  }

  const sectionTitleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '1.2px',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    margin: 0,
    width: '100%',
  }

  const listItemStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    marginLeft: '24px',
  }

  const themeColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
    width: '280px',
    flexShrink: 0,
  }

  const themeTextStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: '48px',
    fontWeight: 400,
    lineHeight: 1.4,
    letterSpacing: '2.4px',
    textAlign: 'center',
    margin: 0,
    width: '100%',
  }

  const themeImageStyles = {
    width: '100%',
    height: '265px',
    objectFit: 'cover',
  }

  // Mobile version - shows a single image
  if (isMobile) {
    return (
      <section style={sectionStyles}>
        <div style={containerStyles}>
          {/* Intro Text */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <p style={introTextStyles}>
              Based on the insights gathered during the design exploration, I identified the main user profiles who would interact with LEXI. These patterns helped me define user personas that represent their goals, expectations, and challenges, guiding design decisions throughout the process.
            </p>
          </div>

          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={headerStyles}>User personas</p>
          </div>

          {/* Mobile Image */}
          <div style={mobileImageContainerStyles}>
            <img 
              src={personaImages.mobilePersonas}
              alt="User Personas - Amanda Rodriguez and Daniel Garcia"
              style={mobileImageStyles}
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        {/* Intro Text */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <p style={introTextStyles}>
            Based on the insights gathered during the design exploration, I identified the main user profiles who would interact with LEXI. These patterns helped me define user personas that represent their goals, expectations, and challenges, guiding design decisions throughout the process.
          </p>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={headerStyles}>User personas</p>
        </div>

        {/* Persona 1: Amanda Rodriguez */}
        <div style={personaCardStyles}>
          {/* Image Column */}
          <div style={imageColumnStyles}>
            <img 
              src={personaImages.persona1}
              alt="Amanda Rodriguez"
              style={profileImageStyles}
            />
            <div style={personalInfoStyles}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <p style={nameStyles}>Amanda Rodriguez</p>
                <p style={ageStyles}>26 years old</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                <div style={infoItemStyles}>
                  <JobIcon />
                  <p style={infoTextStyles}>Remote professional</p>
                </div>
                <div style={infoItemStyles}>
                  <LocationIcon />
                  <p style={infoTextStyles}>Colombia</p>
                </div>
                <div style={infoItemStyles}>
                  <FamilyIcon />
                  <p style={infoTextStyles}>Unmarried with children</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points & Needs */}
          <div style={painPointsColumnStyles}>
            <div style={contentColumnStyles}>
              <p style={sectionTitleStyles}>Pain Points / Frustrations</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', width: '100%' }}>
                <li style={listItemStyles}>• Unwanted flirting in language exchange apps</li>
                <li style={listItemStyles}>• Lack of structure in conversations</li>
                <li style={listItemStyles}>• Feeling that her effort is not taken seriously</li>
                <li style={listItemStyles}>• Difficulty staying consistent with current tools</li>
              </ul>
            </div>
            <div style={contentColumnStyles}>
              <p style={sectionTitleStyles}>Needs & Expectations</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', width: '100%' }}>
                <li style={listItemStyles}>• Do not travel to an institue</li>
                <li style={listItemStyles}>• Get a better experience</li>
                <li style={listItemStyles}>• Practice English consistently</li>
                <li style={listItemStyles}>• Learn in a calm, focused environment</li>
                <li style={listItemStyles}>• Optimize time spent</li>
                <li style={listItemStyles}>• Track progress over time</li>
              </ul>
            </div>
          </div>

          {/* Theme Column */}
          <div style={themeColumnStyles}>
            <p style={{ ...themeTextStyles, color: '#2cb7a5' }}>Consistent Learning</p>
            <img 
              src={personaImages.digitalNomad}
              alt="Consistent Learning"
              style={themeImageStyles}
            />
          </div>
        </div>

        {/* Persona 2: Daniel Garcia */}
        <div style={personaCardStyles}>
          {/* Theme Column */}
          <div style={{ ...themeColumnStyles, width: '266px' }}>
            <img 
              src={personaImages.teamBrainstorming}
              alt="Confidence Building"
              style={{ width: '100%', height: '220px', objectFit: 'cover' }}
            />
            <p style={{ ...themeTextStyles, color: '#f18181' }}>confidence building</p>
          </div>

          {/* Pain Points & Needs */}
          <div style={painPointsColumnStyles}>
            <div style={contentColumnStyles}>
              <p style={sectionTitleStyles}>Pain Points / Frustrations</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', width: '100%' }}>
                <li style={listItemStyles}>• Anxiety when speaking with others</li>
                <li style={listItemStyles}>• Fear of being judged for mistakes</li>
                <li style={listItemStyles}>• Overwhelming or unstructured platforms</li>
                <li style={listItemStyles}>• Slow progress despite effort</li>
              </ul>
            </div>
            <div style={contentColumnStyles}>
              <p style={sectionTitleStyles}>Needs & Expectations</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', width: '100%' }}>
                <li style={listItemStyles}>• A safe, low-pressure learning environment</li>
                <li style={listItemStyles}>• AI-guided conversations at his level</li>
                <li style={listItemStyles}>• Encouraging, corrective feedback</li>
                <li style={listItemStyles}>• Small wins that reinforce motivation</li>
                <li style={listItemStyles}>• Improve vocabulary and basic pronunciation</li>
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div style={imageColumnStyles}>
            <img 
              src={personaImages.persona2}
              alt="Daniel Garcia"
              style={{ width: '172px', height: '303px', borderRadius: '89px', objectFit: 'cover' }}
            />
            <div style={personalInfoStyles}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <p style={nameStyles}>Daniel Garcia</p>
                <p style={ageStyles}>24 years old</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                <div style={infoItemStyles}>
                  <JobIcon />
                  <p style={infoTextStyles}>Student</p>
                </div>
                <div style={infoItemStyles}>
                  <LocationIcon />
                  <p style={infoTextStyles}>Colombia</p>
                </div>
                <div style={infoItemStyles}>
                  <FamilyIcon />
                  <p style={infoTextStyles}>Single</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LexiUserPersona
