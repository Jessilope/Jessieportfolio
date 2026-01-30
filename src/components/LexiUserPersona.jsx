import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

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
              Based on the research insights, I identified two different types of users who typically shop at this kind of store. From these patterns, I created user personas to synthesize their behaviors, needs, and concerns, helping guide design decisions in the next stages.
            </p>
          </div>

          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={headerStyles}>User personas</p>
          </div>

          {/* Mobile Image */}
          <div style={mobileImageContainerStyles}>
            <img 
              src="http://localhost:3845/assets/06ae4e806b870f6ffd274c1b46bfbe2e4015f40b.png"
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
            Based on the research insights, I identified two different types of users who typically shop at this kind of store. From these patterns, I created user personas to synthesize their behaviors, needs, and concerns, helping guide design decisions in the next stages.
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
              src="http://localhost:3845/assets/6c7f32069e2e2b6a6993b86780d6cce483bd1e92.png"
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
                  <img src="http://localhost:3845/assets/62b688d7d4f9ea89231f02370fe585dbdc58d233.svg" alt="" style={iconStyles} />
                  <p style={infoTextStyles}>Remote professional</p>
                </div>
                <div style={infoItemStyles}>
                  <img src="http://localhost:3845/assets/9bf21cbedaee5741965cd38907f69d9ec083a02a.svg" alt="" style={iconStyles} />
                  <p style={infoTextStyles}>Colombia</p>
                </div>
                <div style={infoItemStyles}>
                  <img src="http://localhost:3845/assets/642e2a0797228c4898dff1dff9790ec70a8ef7dd.svg" alt="" style={iconStyles} />
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
              src="http://localhost:3845/assets/fcf598e39f80c441923677b4234b5f0bb6488c18.png"
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
              src="http://localhost:3845/assets/9c87c0f3a8a911de690b775231c6bb9ba1444fd7.png"
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
              src="http://localhost:3845/assets/f1326acd84b14d7fca1da878a3fa9ec7be74ee69.png"
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
                  <img src="http://localhost:3845/assets/62b688d7d4f9ea89231f02370fe585dbdc58d233.svg" alt="" style={iconStyles} />
                  <p style={infoTextStyles}>Student</p>
                </div>
                <div style={infoItemStyles}>
                  <img src="http://localhost:3845/assets/9bf21cbedaee5741965cd38907f69d9ec083a02a.svg" alt="" style={iconStyles} />
                  <p style={infoTextStyles}>Colombia</p>
                </div>
                <div style={infoItemStyles}>
                  <img src="http://localhost:3845/assets/642e2a0797228c4898dff1dff9790ec70a8ef7dd.svg" alt="" style={iconStyles} />
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
