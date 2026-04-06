import useResponsive from '../hooks/useResponsive'
import AnimatedOnScroll from './AnimatedOnScroll'

const FONT_BODY = `'Kantumruy', 'Noto Sans', sans-serif`
const FONT_POPPINS = `'Poppins', sans-serif`

const LexiDataCollectionResearch = () => {
  const { isMobile } = useResponsive()

  const bodyStyle = {
    fontFamily: FONT_BODY,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 300,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: '#212121',
    margin: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const subheadStyle = {
    fontFamily: FONT_POPPINS,
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '1px',
    color: '#8a8a8a',
    margin: '0 0 16px 0',
  }

  return (
    <section style={{
      backgroundColor: '#fffefa',
      width: '100%',
      paddingTop: isMobile ? '64px' : '128px',
      paddingBottom: isMobile ? '32px' : '48px',
      paddingLeft: isMobile ? '24px' : '96px',
      paddingRight: isMobile ? '24px' : '96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <AnimatedOnScroll animation="slideUp" duration={600} style={{ width: '100%', maxWidth: '902px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>

          {/* Section title */}
          <p style={{
            fontFamily: FONT_POPPINS,
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '1.2px',
            color: '#8a8a8a',
            margin: 0,
          }}>Findings</p>

          {/* Body content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

            {/* Intro paragraph */}
            <p style={bodyStyle}>
              The research phase focused on analyzing real user experiences with language exchange apps. I reviewed open-source data from App Store and Google Play data where I could find some research, in order to understand students behavior when learning a second language.{' '}
              The study examined two Japanese male mathematics majors and three Chinese students in an eTandem program. The Japanese participants had varying TOEIC scores (195 – beginner; 540 – lower-intermediate) but shared high anxiety and low perceived competence before the program. Questionnaires measured their Use of the Second Language (UTSE) and other psychological factors. Results showed that interest and enjoyment (average: 4.14) were higher than perceived competence, with moderate levels of pressure/tension. Even with limited prior experience, learners valued the exchange and adapted to the technology used.
            </p>

            <br />

            {/* Psychology */}
            <p style={subheadStyle}>Psychology</p>
            <p style={bodyStyle}>
              Participation in eTandem helped learners overcome initial anxiety, build resilience, and persist despite technical or preparation challenges. Interaction with native speakers provided instant corrective feedback, improved vocabulary, and fostered awareness of natural phrasing and grammar use. The experience also reinforced the role of motivation having a partner counting on them encouraged consistent engagement and reduced fear of making mistakes.
            </p>

            <br />

            {/* Public Opinion */}
            <p style={{ ...subheadStyle, color: '#8a8a8a' }}>Public Opinion</p>
            <p style={bodyStyle}>
              Learners described the exchange as enjoyable and worthwhile, even when they did not feel fully competent. They appreciated real-time corrections, the chance to practice authentic communication, and the personal connections formed. While perceived competence did not drastically increase, the sense of achievement and sustained participation underscored the value of the program in boosting confidence and motivation. comments and benchmarked platforms such as HelloTalk and Tandem. Recurring feedback revealed user discomfort related to unwanted flirting, lack of seriousness, and feeling unsafe while practicing a language. These insights helped validate the problem and informed key design decisions for creating a more respectful and guided learning experience with Lexi.
            </p>

          </div>
        </div>
      </AnimatedOnScroll>
    </section>
  )
}

export default LexiDataCollectionResearch
