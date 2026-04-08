import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY    = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_HEADING = `'Poppins', sans-serif`

const REVIEWS = [
  {
    title: 'Jose Garcia',
    stars: 1,
    date: 'Hace 2 semanas',
    text: 'La atención en la caja es terrible, en horas pico y cuentan con 2 cajeros. Siempre se forma fila.',
  },
  {
    title: 'Caro Rod',
    stars: 2,
    date: 'Hace 2 semanas',
    text: 'El día de ayer tuve que ingresar a mirar si vendían algo que necesitaba, entré normal con mi morral y en un pasillo me cogió un vigilante y me dijo que dejara la maleta en un locker, pero vi más personas con maletas entonces no entiendo por qué unos sí y otros no, adicionalmente el vigilante fue bastante grosero que me sentí muy mal y ofendida.\nPor favor capacitar al personal para que la atención al cliente mejore.',
  },
  {
    title: 'Ciro Hernando León',
    stars: 3,
    date: 'Hace 2 semanas',
    text: 'Está lleno regularmente y pocos cajeros.',
  },
  {
    title: 'Patricia Caicedo Cruz',
    stars: 1,
    date: 'Hace 2 semanas',
    text: 'Los empleados atienden muy mal, uno pregunta algo y ni te miran, únicamente responden "está en el pasillo y si no lo es es porque no hay" y esto no solo me ha pasado una vez, prácticamente siempre que pregunto por algo me atienden así.',
  },
]

const StarIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M8 1.5l1.545 3.13 3.455.502-2.5 2.436.59 3.44L8 9.27l-3.09 1.737.59-3.44L3 5.132l3.455-.502L8 1.5z" fill={filled ? '#FFB800' : '#D9D9D9'} />
  </svg>
)

const Stars = ({ count }) => (
  <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
    {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} filled={i <= count} />)}
  </div>
)

const ReviewCard = ({ review }) => (
  <div style={{
    width: '100%',
    flexShrink: 0,
    backgroundColor: 'white',
    border: '0.5px solid #cdd1d7',
    borderRadius: '8px',
    padding: '16px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  }}>
    <p style={{
      fontFamily: FONT_BODY,
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: 1.5,
      color: '#000000',
      margin: 0,
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    }}>{review.title}</p>

    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Stars count={review.stars} />
      <p style={{
        fontFamily: FONT_BODY,
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: '0.624px',
        color: '#7f8d9f',
        margin: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
      }}>{review.date}</p>
    </div>

    <p style={{
      fontFamily: FONT_BODY,
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.9px',
      color: '#4f5d6d',
      margin: 0,
      whiteSpace: 'pre-line',
      fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    }}>{review.text}</p>
  </div>
)

const DollarCityDataCollection = () => {
  const { isMobile } = useResponsive()

  return (
    <section id="data-collection" style={{
      backgroundColor: '#fffefa',
      width: '100%',
      paddingTop: isMobile ? '48px' : '64px',
      paddingBottom: isMobile ? '48px' : '64px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      boxSizing: 'border-box',
    }}>

      <AnimatedOnScroll animation="fadeIn" duration={700} style={{ width: '100%' }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '24px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '950px',
          margin: '0 auto',
          padding: '24px',
          borderRadius: '16px',
          boxSizing: 'border-box',
        }}>

          {/* Left — title + description */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            width: isMobile ? '100%' : '431px',
            flexShrink: 0,
          }}>
            <p style={{
              fontFamily: FONT_HEADING,
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '1.2px',
              color: '#8a8a8a',
              margin: 0,
            }}>Data collection</p>

            <p style={{
              fontFamily: FONT_BODY,
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.8px',
              color: '#39424e',
              margin: 0,
              fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
            }}>
              The research phase focused on understanding real user experiences in Colombia. I analyzed open-source information, such as user reviews and comments on Google, to identify recurring patterns in how customers perceive Dollar City, especially regarding service quality and trust.
            </p>
          </div>

          {/* Right — scrollable review list */}
          <div style={{
            width: isMobile ? '100%' : '451px',
            height: isMobile ? '320px' : '371px',
            overflowX: 'hidden',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '33px',
            flexShrink: 0,
          }}>
            {REVIEWS.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>

        </div>
      </AnimatedOnScroll>

    </section>
  )
}

export default DollarCityDataCollection
