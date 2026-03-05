import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const oouxTableImage = '/assets/images/dollarcity/ooux-table.png'

// ── Card data ────────────────────────────────────────────────────────────────
const CARDS = [
  {
    icon: '/assets/images/dollarcity/ooux-icon-search.svg',
    iconBg: '#ad46ff',
    title: 'Dollarcity products',
    sections: [
      { label: 'Actions',         items: ['Explore', 'Search'] },
      { label: 'Content',         items: ['Name of the product', 'Puntuation'] },
      { label: 'Metadata',        items: ['Description'] },
      { label: 'Related objects', items: ['Images, videos'] },
    ],
  },
  {
    icon: '/assets/images/dollarcity/ooux-icon-cart.svg',
    iconBg: '#2b7fff',
    title: 'Cart',
    sections: [
      { label: 'Actions',         items: ['View details', 'Add to cart', 'Remove from cart', 'Number of products'] },
      { label: 'Content',         items: ['Price', 'Puntuation'] },
      { label: 'Metadata',        items: ['Details', 'Reviews'] },
      { label: 'Related objects', items: ['Product'] },
    ],
  },
  {
    icon: '/assets/images/dollarcity/ooux-icon-home.svg',
    iconBg: '#00c950',
    title: 'Home',
    sections: [
      { label: 'Actions',         items: ['Click sign in', 'Click log in'] },
      { label: 'Content',         items: ['Profile'] },
      { label: 'Metadata',        items: ['User information', 'Email address', 'Password'] },
      { label: 'Related objects', items: ['Landing page'] },
    ],
  },
  {
    icon: '/assets/images/dollarcity/ooux-icon-creditcard.svg',
    iconBg: '#ff6900',
    title: 'Purchase',
    sections: [
      { label: 'Actions',         items: ['Enter payment method details', 'Fill in address details'] },
      { label: 'Content',         items: ['Payment options'] },
      { label: 'Metadata',        items: ['Personal and secure information'] },
      { label: 'Related objects', items: ['Connect with bank'] },
    ],
  },
  {
    icon: '/assets/images/dollarcity/ooux-icon-check.svg',
    iconBg: '#f6339a',
    title: 'Confirmation',
    sections: [
      { label: 'Actions',         items: ['Complete purchase', 'Select payment method'] },
      { label: 'Content',         items: ['Confirmation popup'] },
      { label: 'Metadata',        items: ['Confirmation message'] },
      { label: 'Related objects', items: ['Confirmation popup'] },
    ],
  },
  {
    icon: '/assets/images/dollarcity/ooux-icon-package.svg',
    iconBg: '#00bba7',
    title: 'Order',
    sections: [
      { label: 'Actions',         items: ['Select address', 'Pickup in store'] },
      { label: 'Content',         items: ['Address details'] },
      { label: 'Metadata',        items: ['Information where order is received', 'Leave address and personal details'] },
      { label: 'Related objects', items: ['Security'] },
    ],
  },
]

// ── OOUXCard ─────────────────────────────────────────────────────────────────
const OOUXCard = ({ icon, iconBg, title, sections }) => (
  <div style={{
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.25)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    paddingBottom: '24px',
    flex: '1 1 0',
    minWidth: 0,
  }}>
    {/* header */}
    <div style={{ display: 'flex', gap: '9px', alignItems: 'center', padding: '16px 24px' }}>
      <div style={{
        width: '40px', height: '40px', borderRadius: '10px',
        backgroundColor: iconBg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <img src={icon} alt="" style={{ width: '20px', height: '20px', display: 'block' }} />
      </div>
      <p style={{
        fontFamily: FONT_HEADING,
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: '1px',
        color: '#212121',
        margin: 0,
        flex: '1 0 0',
      }}>{title}</p>
    </div>

    {/* sections */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0 24px' }}>
      {sections.map(({ label, items }) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          <p style={{
            fontFamily: FONT_BODY,
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: 1.5,
            color: '#8a8a8a',
            fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
            margin: 0,
          }}>{label}</p>
          <ul style={{ margin: 0, paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {items.map((item) => (
              <li key={item} style={{
                fontFamily: FONT_BODY,
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.6,
                letterSpacing: '0.8px',
                color: '#212121',
                fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
              }}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)

// ── Main component ────────────────────────────────────────────────────────────
const DollarCityOOUX = () => {
  const { isMobile } = useResponsive()

  return (
    <section style={{
      backgroundColor: '#fffefb',
      width: '100%',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      paddingTop: isMobile ? '64px' : '128px',
      paddingBottom: '48px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      boxSizing: 'border-box',
    }}>

      {/* ── Title + body ──────────────────────────────── */}
      <AnimatedOnScroll animation="fadeIn" delay={0} duration={700} style={{ width: '100%', maxWidth: '902px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
          <p style={{
            fontFamily: FONT_HEADING,
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '1.2px',
            color: '#8a8a8a',
            margin: 0,
          }}>OOUX</p>
          <p style={{
            fontFamily: `'Inter', sans-serif`,
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: '-0.176px',
            color: '#212121',
            margin: 0,
          }}>
            I defined the information architecture using an Object-Oriented UX (OOUX) approach. By identifying core objects such as products, categories, cart, and payment methods, I organized the experience around elements users already understand.
          </p>
        </div>
      </AnimatedOnScroll>

      {/* ── Cards grid (desktop) / image (mobile) ─────── */}
      {isMobile ? (
        <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
          <img
            src={oouxTableImage}
            alt="OOUX table"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </AnimatedOnScroll>
      ) : (
        <div style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Row 1 */}
          <AnimatedOnScroll animation="fadeIn" delay={100} duration={700} style={{ width: '100%' }}>
            <div style={{ display: 'flex', gap: '22px', alignItems: 'flex-start', width: '100%' }}>
              {CARDS.slice(0, 3).map((card) => (
                <OOUXCard key={card.title} {...card} />
              ))}
            </div>
          </AnimatedOnScroll>
          {/* Row 2 */}
          <AnimatedOnScroll animation="fadeIn" delay={200} duration={700} style={{ width: '100%' }}>
            <div style={{ display: 'flex', gap: '22px', alignItems: 'flex-start', width: '100%' }}>
              {CARDS.slice(3).map((card) => (
                <OOUXCard key={card.title} {...card} />
              ))}
            </div>
          </AnimatedOnScroll>
        </div>
      )}

    </section>
  )
}

export default DollarCityOOUX
