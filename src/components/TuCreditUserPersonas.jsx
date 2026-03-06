import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

// ── Inline SVG icons (same style as DollarCityUserPersona / LexiUserPersona) ──
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

const PersonaPhoto = ({ src, name, age }) => (
  <div style={{ position: 'relative', width: '226px', height: '270px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
    <img src={src} alt={name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(102,102,102,0.2) 11.76%, rgba(0,0,0,0.2) 71.15%)' }} />
    <div style={{ position: 'absolute', bottom: '8px', left: '7px', right: '7px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <p style={{ fontFamily: FONT_HEADING, fontSize: '20px', fontWeight: 500, lineHeight: 1.2, letterSpacing: '1px', color: '#fffefa', margin: 0, width: '100%' }}>{name}</p>
      <p style={{ fontFamily: FONT_BODY, fontSize: '16px', fontWeight: 400, lineHeight: 1.6, letterSpacing: '0.8px', color: '#ffffff', margin: 0, fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{age}</p>
    </div>
  </div>
)

const PersonaInfo = ({ job, location, family }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '226px', flexShrink: 0 }}>
    {[{ Icon: BriefcaseIcon, text: job }, { Icon: LocationIcon, text: location }, { Icon: FamilyIcon, text: family }].map(({ Icon, text }) => (
      <div key={text} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Icon />
        <p style={{ fontFamily: FONT_BODY, fontSize: '16px', fontWeight: 400, lineHeight: 1.6, letterSpacing: '0.8px', color: '#212121', margin: 0, fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{text}</p>
      </div>
    ))}
  </div>
)

const InfoCard = ({ Icon, title, items }) => (
  <div style={{ flex: '1 0 0', backgroundColor: '#eaebf2', borderRadius: '16px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0, boxSizing: 'border-box' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Icon />
        <p style={{ fontFamily: FONT_HEADING, fontSize: '20px', fontWeight: 500, lineHeight: 1.2, letterSpacing: '1px', color: '#595959', margin: 0, flex: '1 0 0', minWidth: 0 }}>{title}</p>
      </div>
      <ul style={{ margin: 0, paddingLeft: '24px' }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontFamily: FONT_BODY, fontSize: '16px', fontWeight: 400, lineHeight: 1.6, letterSpacing: '0.8px', color: '#212121', fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
)

// ── Persona data ─────────────────────────────────────────────────────────────
const PERSONAS = [
  {
    id: 'jenna',
    name: 'Pablo Lopez', age: '26 years old',
    src: '/assets/images/tucredit/persona-jenna.png',
    job: 'Retired', location: 'Colombia', family: 'Married with children',
    photoLeft: true,
    needs: [
      'Clear understanding of the entire mortgage process with detailed explanations at each stage',
      'Opportunity to improve his credit score through the process with clear guidance',
      'Realistic mortgage calculator that shows accurate monthly payments based on his income',
      'Transparent breakdown of all fees, requirements, and documentation needed upfront',
    ],
    pains: [
      'Confusing banking jargon and technical terms without clear explanations',
      'Uncertainty about approval likelihood before investing time in the full application',
      'Feeling that his effort is not taken seriously',
      'Pressure to make quick decisions without adequate time to understand implications',
    ],
  },
  {
    id: 'laura',
    name: 'Laura Ramirez', age: '30 years old',
    src: '/assets/images/tucredit/persona-laura.png',
    job: 'Remote professional', location: 'Colombia', family: 'Unmarried with children',
    photoLeft: false,
    needs: [
      '100% digital process that can be completed entirely online without branch visits',
      'Intuitive mortgage calculator with instant results and ability to save scenarios',
      'Realistic mortgage calculator that shows accurate monthly payments based on his income',
      'Clear comparison tools with filters to find best loan options for her situation',
    ],
    pains: [
      'Complicated document upload processes with unclear file requirements and formats',
      'Having to visit physical bank branches during business hours (conflicts with work)',
      'Feeling that her effort is not taken seriously',
      'Lack of proactive communication - has to constantly follow up for updates',
    ],
  },
]

// ── Main component ───────────────────────────────────────────────────────────
const TuCreditUserPersonas = () => {
  const { isMobile } = useResponsive()

  return (
    <div style={{
      backgroundColor: '#fffefb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '64px' : '128px',
      paddingBottom: isMobile ? '32px' : '48px',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', width: '100%', maxWidth: '902px' }}>

        {/* ── Header ───────────────────────────────── */}
        <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            <p style={{ fontFamily: FONT_HEADING, fontSize: isMobile ? '20px' : '24px', fontWeight: 500, lineHeight: 1.3, letterSpacing: '1.2px', color: '#8a8a8a', margin: 0 }}>User personas</p>
            <p style={{ fontFamily: FONT_BODY, fontSize: isMobile ? '14px' : '16px', fontWeight: 400, lineHeight: 1.6, letterSpacing: '0.8px', color: '#5b5b5b', margin: 0, fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
              I created user personas to represent the main user types interacting with the mortgage experience. These personas helped keep real user needs, motivations, and concerns at the center of the design process.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* ── Personas ─────────────────────────────── */}
        {PERSONAS.map((p, idx) => (
          <AnimatedOnScroll key={p.id} animation="fadeIn" delay={idx * 100} duration={700} style={{ width: '100%' }}>
            {isMobile ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
                <PersonaPhoto src={p.src} name={p.name} age={p.age} />
                <PersonaInfo job={p.job} location={p.location} family={p.family} />
                <InfoCard Icon={TargetIcon} title="Needs and expectations" items={p.needs} />
                <InfoCard Icon={ThumbsDownIcon} title="Painpoints and Frustations" items={p.pains} />
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', width: '100%' }}>
                {p.photoLeft ? (
                  <>
                    {/* Photo + info on left */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', flexShrink: 0 }}>
                      <PersonaPhoto src={p.src} name={p.name} age={p.age} />
                      <PersonaInfo job={p.job} location={p.location} family={p.family} />
                    </div>
                    <InfoCard Icon={TargetIcon} title="Needs and expectations" items={p.needs} />
                    <InfoCard Icon={ThumbsDownIcon} title="Painpoints and Frustations" items={p.pains} />
                  </>
                ) : (
                  <>
                    <InfoCard Icon={TargetIcon} title="Needs and expectations" items={p.needs} />
                    <InfoCard Icon={ThumbsDownIcon} title="Painpoints and Frustations" items={p.pains} />
                    {/* Photo + info on right */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', flexShrink: 0 }}>
                      <PersonaPhoto src={p.src} name={p.name} age={p.age} />
                      <PersonaInfo job={p.job} location={p.location} family={p.family} />
                    </div>
                  </>
                )}
              </div>
            )}
          </AnimatedOnScroll>
        ))}

      </div>
    </div>
  )
}

export default TuCreditUserPersonas
