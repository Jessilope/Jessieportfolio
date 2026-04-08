import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

// ── Image assets ────────────────────────────────────────────────────────────
const IMG_ANA    = '/assets/images/dollarcity/persona-ana.png'
const IMG_DAVID  = '/assets/images/dollarcity/persona-david.png'
const IMG_MOBILE = '/assets/images/dollarcity/user-personas-mobile.png'

// ── Inline SVG icons (same as LexiUserPersona) ──────────────────────────────
const BriefcaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M27.167 9.333H5.834C4.361 9.333 3.167 10.527 3.167 12v13.333C3.167 26.806 4.361 28 5.834 28h21.333C28.64 28 29.834 26.806 29.834 25.333V12c0-1.473-1.194-2.667-2.667-2.667z" stroke="#5D5F98" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.833 28V6.667C21.833 5.96 21.552 5.281 21.052 4.781 20.552 4.281 19.874 4 19.167 4h-5.333c-.708 0-1.386.281-1.886.781-.5.5-.781 1.178-.781 1.886V28" stroke="#5D5F98" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M28.5 13.333C28.5 22.667 16.5 30.667 16.5 30.667S4.5 22.667 4.5 13.333a12 12 0 0124 0z" stroke="#5D5F98" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 17.333a4 4 0 100-8 4 4 0 000 8z" stroke="#5D5F98" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FamilyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M23.167 28v-2.667A5.333 5.333 0 0017.834 20H7.167A5.333 5.333 0 001.834 25.333V28" stroke="#5D5F98" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 14.667a5.333 5.333 0 100-10.667 5.333 5.333 0 000 10.667z" stroke="#5D5F98" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M31.167 28v-2.667a5.333 5.333 0 00-4.015-5.157M22.485 4.176a5.334 5.334 0 010 10.327" stroke="#5D5F98" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" stroke="#5D5F98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="6" stroke="#5D5F98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" stroke="#5D5F98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ThumbsDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M17 2H19.67C20.236 2 20.779 2.211 21.186 2.586 21.593 2.961 21.833 3.469 21.833 4v7c0 .531-.24 1.039-.647 1.414A2.175 2.175 0 0119.67 13H17m-6 3v3c0 .796.316 1.559.879 2.121A3 3 0 0014 22l3-7V2H5.72a2 2 0 00-1.994 1.78l-.813 8A2 2 0 004.906 14H10c.266 0 .529.053.776.157.247.104.473.257.663.452.19.195.341.428.443.684.102.256.155.53.118.807z" stroke="#5D5F98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── Sub-components ───────────────────────────────────────────────────────────

/** Photo card: image with gradient overlay, name + age at bottom */
const PersonaPhoto = ({ src, name, age }) => (
  <div style={{
    position: 'relative',
    width: '226px',
    height: '270px',
    borderRadius: '8px',
    overflow: 'hidden',
    flexShrink: 0,
  }}>
    <img
      src={src}
      alt={name}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
    />
    {/* gradient overlay */}
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(102,102,102,0.2) 11.76%, rgba(0,0,0,0.2) 71.15%)',
    }} />
    {/* name + age */}
    <div style={{
      position: 'absolute',
      bottom: '8px',
      left: '7px',
      right: '7px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    }}>
      <p style={{
        fontFamily: FONT_HEADING,
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: '1px',
        color: '#fffefa',
        margin: 0,
      }}>{name}</p>
      <p style={{
        fontFamily: FONT_BODY,
        fontSize: '16px',
        fontWeight: 300,
        lineHeight: 1.6,
        letterSpacing: '0.8px',
        color: '#c8c8c8',
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
        margin: 0,
      }}>{age}</p>
    </div>
  </div>
)

/** Personal info column below photo (job, location, family) */
const PersonaInfo = ({ job, location, family }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', paddingTop: '8px' }}>
    {[
      { Icon: BriefcaseIcon, text: job },
      { Icon: LocationIcon,  text: location },
      { Icon: FamilyIcon,    text: family },
    ].map(({ Icon, text }) => (
      <div key={text} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Icon />
        <p style={{
          fontFamily: FONT_BODY,
          fontSize: '16px',
          fontWeight: 300,
          lineHeight: 1.6,
          letterSpacing: '0.8px',
          color: '#212121',
          fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
          margin: 0,
        }}>{text}</p>
      </div>
    ))}
  </div>
)

/** Info card (Painpoints or Needs) */
const InfoCard = ({ iconType, title, items }) => {
  const Icon = iconType === 'target' ? TargetIcon : ThumbsDownIcon
  return (
    <div style={{
      backgroundColor: '#eaebf2',
      flex: '1 0 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      borderRadius: '16px',
      minWidth: 0,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
        {/* header */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Icon />
          <p style={{
            fontFamily: FONT_HEADING,
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: '1px',
            color: '#595959',
            margin: 0,
            flex: '1 0 0',
          }}>{title}</p>
        </div>
        {/* list */}
        <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {items.map((item) => (
            <li key={item} style={{
              fontFamily: FONT_BODY,
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#212121',
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
            }}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ── Persona data ─────────────────────────────────────────────────────────────
const PERSONAS = [
  {
    photo: IMG_ANA,
    name: 'Ana Bermudez',
    age: '35 years old',
    job: 'Employee',
    location: 'Colombia',
    family: 'Unmarried with children',
    // image on LEFT, cards on RIGHT
    imageOnLeft: true,
    painpoints: [
      'Suffering a scam',
      'Lack of own credit/debit cards',
      'Insecurity when making online payments',
      'Learn in a calm, focused environment',
      'No easy and efficient customer service',
    ],
    needs: [
      'Do not travel to the store.',
      'Get a better experience',
      'Worry less',
      'Optimize time spent shopping online.',
    ],
  },
  {
    photo: IMG_DAVID,
    name: 'David Holmes',
    age: '24 years old',
    job: 'Student',
    location: 'Colombia',
    family: 'Single',
    // cards on LEFT, image on RIGHT
    imageOnLeft: false,
    painpoints: [
      'That the product is not as shown on the website',
      'Lack of own credit/debit cards.',
      'No easy and efficient customer service.',
      'No a near store to buy',
    ],
    needs: [
      'Feel secure when shopping online.',
      'Optimize time shopping online.',
      'To be able to compare prices and have control of expenses.',
      'Access to easy and efficient customer service.',
      'Easier shopping for household items.',
    ],
  },
]

// ── Main component ────────────────────────────────────────────────────────────
const DollarCityUserPersona = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: isMobile ? '48px' : '112px',
      paddingBottom: isMobile ? '48px' : '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '24px' : '48px',
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: '902px',
        margin: '0 auto',
      }}>
        {/* ── Title block ─────────────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '1.2px',
              color: isMobile ? '#8d8d99' : '#8a8a8a',
              margin: 0,
            }}>User personas</p>
            <p style={{
              fontFamily: FONT_BODY,
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#212121',
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 300",
              margin: 0,
            }}>
              Based on the research insights, I identified two different types of users who typically shop at this kind of store. From these patterns, I created user personas to synthesize their behaviors, needs, and concerns, helping guide design decisions in the next stages.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── Mobile: single image ─────────────────────────── */}
        {isMobile ? (
          <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
            <img
              src={IMG_MOBILE}
              alt="User personas"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
            />
          </AnimatedOnScroll>
        ) : (
          <>
            {PERSONAS.map((p, i) => (
              <AnimatedOnScroll key={p.name} animation="fadeIn" delay={i * 100} duration={700} style={{ width: '100%' }}>
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  width: '100%',
                }}>
                  {p.imageOnLeft ? (
                    <>
                      {/* Photo + info */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexShrink: 0 }}>
                        <PersonaPhoto src={p.photo} name={p.name} age={p.age} />
                        <PersonaInfo job={p.job} location={p.location} family={p.family} />
                      </div>
                      {/* Painpoints card */}
                      <InfoCard iconType="target" title="Painpoints and Frustations" items={p.painpoints} />
                      {/* Needs card */}
                      <InfoCard iconType="thumbsdown" title="Needs and expectations" items={p.needs} />
                    </>
                  ) : (
                    <>
                      {/* Needs card */}
                      <InfoCard iconType="target" title="Needs and expectations" items={p.needs} />
                      {/* Painpoints card */}
                      <InfoCard iconType="thumbsdown" title="Painpoints and Frustations" items={p.painpoints} />
                      {/* Photo + info */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexShrink: 0 }}>
                        <PersonaPhoto src={p.photo} name={p.name} age={p.age} />
                        <PersonaInfo job={p.job} location={p.location} family={p.family} />
                      </div>
                    </>
                  )}
                </div>
              </AnimatedOnScroll>
            ))}
          </>
        )}
      </div>
    </section>
  )
}

export default DollarCityUserPersona
