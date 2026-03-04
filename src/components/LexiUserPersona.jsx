import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`
const CARD_BG = '#eaebf2'

// ── Inline SVG icons (brand purple #5D5F98) ─────────────────────────────────
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

// ── Persona photo card ──────────────────────────────────────────────────────
const PersonaPhoto = ({ src, name, age, job, location, family }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: '8px',
  }}>
    {/* Photo */}
    <div style={{
      position: 'relative',
      width: '226px',
      height: '270px',
      borderRadius: '8px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '8px 7px',
      boxSizing: 'border-box',
    }}>
      <img alt={name} src={src} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', borderRadius: '8px',
      }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '8px',
        background: 'linear-gradient(to bottom, rgba(102,102,102,0.2) 12%, rgba(0,0,0,0.2) 71%)',
      }} />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
        <p style={{ fontFamily: FONT_POPPINS, fontSize: '20px', fontWeight: 500, lineHeight: 1.2, letterSpacing: '1px', color: '#fffefa', margin: 0 }}>{name}</p>
        <p style={{ fontFamily: FONT_BODY, fontSize: '16px', fontWeight: 400, lineHeight: 1.6, letterSpacing: '0.8px', color: '#c8c8c8', margin: 0 }}>{age}</p>
      </div>
    </div>

    {/* Info rows */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
      {[
        { Icon: BriefcaseIcon, label: job },
        { Icon: LocationIcon, label: location },
        { Icon: FamilyIcon, label: family },
      ].map(({ Icon, label }) => (
        <div key={label} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <Icon />
          <p style={{ fontFamily: FONT_BODY, fontSize: '16px', fontWeight: 400, lineHeight: 1.6, letterSpacing: '0.8px', color: '#212121', margin: 0, fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{label}</p>
        </div>
      ))}
    </div>
  </div>
)

// ── Info box (needs / painpoints) ──────────────────────────────────────────
const InfoBox = ({ iconType, title, items }) => {
  const Icon = iconType === 'target' ? TargetIcon : ThumbsDownIcon
  return (
  <div style={{
    backgroundColor: CARD_BG,
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flex: '1 0 0',
    minWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: '1 0 0', minWidth: 0 }}>
      {/* Header */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Icon />
        <p style={{ fontFamily: FONT_POPPINS, fontSize: '20px', fontWeight: 500, lineHeight: 1.2, letterSpacing: '1px', color: '#595959', margin: 0, flex: '1 0 0', minWidth: 0 }}>{title}</p>
      </div>
      {/* Items */}
      {items.map((item, i) => (
        <ul key={i} style={{ margin: 0, padding: 0 }}>
          <li style={{
            listStyle: 'disc',
            marginLeft: '24px',
            fontFamily: FONT_BODY,
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1.6,
            letterSpacing: '0.8px',
            color: '#212121',
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
          }}>{item}</li>
        </ul>
      ))}
    </div>
  </div>
  )
}

// ── Persona row ─────────────────────────────────────────────────────────────
const PersonaRow = ({ photoLeft, photo, name, age, job, location, family, needsItems, painItems }) => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', width: '100%' }}>
    {photoLeft && <PersonaPhoto src={photo} name={name} age={age} job={job} location={location} family={family} />}
    <InfoBox iconType="target" title="Needs and expectations" items={needsItems} />
    <InfoBox iconType="thumbsdown" title="Painpoints and Frustations" items={painItems} />
    {!photoLeft && <PersonaPhoto src={photo} name={name} age={age} job={job} location={location} family={family} />}
  </div>
)

// ── Main component ──────────────────────────────────────────────────────────
const LexiUserPersona = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingTop: isMobile ? '64px' : '64px',
      paddingBottom: '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      justifyContent: 'center',
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="slideUp" duration={600} style={{ width: '100%', maxWidth: '902px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', width: '100%' }}>

          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
            <p style={{
              fontFamily: FONT_POPPINS, fontSize: isMobile ? '20px' : '24px', fontWeight: 500,
              lineHeight: 1.3, letterSpacing: '1.2px', color: '#8a8a8a', margin: 0,
            }}>User personas</p>
            <p style={{
              fontFamily: FONT_BODY, fontSize: isMobile ? '14px' : '16px', fontWeight: 400,
              lineHeight: 1.6, letterSpacing: '0.8px', color: '#212121', margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              So, I identified two different types of language learners based on their goals, motivation levels, and learning habits. From these insights, I created user personas to synthesize their behaviors, frustrations, and expectations.
            </p>
          </div>

          {/* Persona 1 — Jenna Rodriguez (photo left) */}
          <PersonaRow
            photoLeft
            photo="/assets/images/lexi/persona-jenna-2.jpg"
            name="Jenna Rodriguez"
            age="26 years old"
            job="Remote professional"
            location="Colombia"
            family="Unmarried with children"
            needsItems={[
              'Do not travel to an institue',
              'Get a better experience',
              'Practice English consistently',
              'Learn in a calm, focused environment',
              'Optimize time spent',
              'Track progress over time',
            ]}
            painItems={[
              'Unwanted flirting in language exchange apps',
              'Lack of structure in conversations',
              'Feeling that her effort is not taken seriously',
              'Difficulty staying consistent with current tools',
            ]}
          />

          {/* Persona 2 — Juan Morales (photo right) */}
          <PersonaRow
            photoLeft={false}
            photo="/assets/images/lexi/persona-juan.jpg"
            name="Juan Morales"
            age="26 years old"
            job="Remote professional"
            location="Colombia"
            family="Unmarried with children"
            needsItems={[
              'Anxiety when speaking with others',
              'Fear of being judged for mistakes',
              'Overwhelming or unstructured platforms',
              'Slow progress despite effort',
            ]}
            painItems={[
              'A safe, low-pressure learning environment',
              'AI-guided conversations at his level',
              'Encouraging, corrective feedback',
              'Small wins that reinforce motivation',
            ]}
          />

        </div>
      </AnimatedOnScroll>
    </section>
  )
}

export default LexiUserPersona
