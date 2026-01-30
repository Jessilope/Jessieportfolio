import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Image paths
const researchImages = {
  doc1: '/assets/images/lexi/research-1.png',
  doc2: '/assets/images/lexi/research-2.png',
  doc3: '/assets/images/lexi/research-3.png',
  doc4: '/assets/images/lexi/research-4.png',
  doc5: '/assets/images/lexi/research-5.png',
  doc6: '/assets/images/lexi/research-6.png',
  doc7: '/assets/images/lexi/research-7.png',
  doc8: '/assets/images/lexi/research-8.png',
}

const LexiDataCollectionResearch = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: colors.backgrounds.main,
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '48px' : '112px',
    alignItems: 'center',
    width: '100%',
  }

  const textSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '16px' : '24px',
    alignItems: 'flex-start',
    width: '100%',
  }

  const titleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '1.2px',
    color: '#370161',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
    margin: 0,
    width: '100%',
  }

  const bodyTextStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
  }

  const boldTextStyles = {
    fontWeight: 700,
  }

  const imagesColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : spacing.xxl,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }

  const imageStyles = {
    width: isMobile ? '100%' : '70%',
    border: isMobile ? '4px solid white' : '8px solid white',
    borderRadius: '4px',
    boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.2), 0px 0px 2px 0px rgba(0,0,0,0.08), 0px 2px 6px 0px rgba(0,0,0,0.1)',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        {/* Text Section */}
        <div style={textSectionStyles}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
              <p style={titleStyles}>Data collection</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <div style={bodyTextStyles}>
              <p style={{ margin: '0 0 0 0' }}>
                The research phase focused on analyzing real user experiences with language exchange apps. I reviewed open-source data from App Store and Google Play{' '}
                <span style={boldTextStyles}>Data</span>
                <br />
                The study examined two Japanese male mathematics majors and three Chinese students in an eTandem program. The Japanese participants had varying TOEIC scores (195 – beginner; 540 – lower-intermediate) but shared high anxiety and low perceived competence before the program. Questionnaires measured their Use of the Second Language (UTSE) and other psychological factors. Results showed that interest and enjoyment (average: 4.14) were higher than perceived competence, with moderate levels of pressure/tension. Even with limited prior experience, learners valued the exchange and adapted to the technology used.
                <br /><br />
              </p>
              <p style={{ margin: '0 0 0 0' }}>
                <span style={boldTextStyles}>Psychology</span>
                <br />
                Participation in eTandem helped learners overcome initial anxiety, build resilience, and persist despite technical or preparation challenges. Interaction with native speakers provided instant corrective feedback, improved vocabulary, and fostered awareness of natural phrasing and grammar use. The experience also reinforced the role of motivation having a partner counting on them encouraged consistent engagement and reduced fear of making mistakes.
                <br /><br />
              </p>
              <p style={{ margin: '0 0 0 0' }}>
                <span style={boldTextStyles}>Public Opinion</span>
                <br />
                Learners described the exchange as enjoyable and worthwhile, even when they did not feel fully competent. They appreciated real-time corrections, the chance to practice authentic communication, and the personal connections formed. While perceived competence did not drastically increase, the sense of achievement and sustained participation underscored the value of the program in boosting confidence and motivation. comments and benchmarked platforms such as HelloTalk and Tandem. Recurring feedback revealed user discomfort related to unwanted flirting, lack of seriousness, and feeling unsafe while practicing a language. These insights helped validate the problem and informed key design decisions for creating a more respectful and guided learning experience with Lexi.
              </p>
            </div>
          </div>
        </div>

        {/* First Group of Images (4 images) */}
        <div style={imagesColumnStyles}>
          <img 
            src={researchImages.doc1}
            alt="Research document 1"
            style={imageStyles}
          />
          <img 
            src={researchImages.doc2}
            alt="Research document 2"
            style={imageStyles}
          />
          <img 
            src={researchImages.doc3}
            alt="Research document 3"
            style={imageStyles}
          />
          <img 
            src={researchImages.doc4}
            alt="Research document 4"
            style={imageStyles}
          />
        </div>

        {/* Second Group of Images (4 images) */}
        <div style={imagesColumnStyles}>
          <img 
            src={researchImages.doc5}
            alt="Research document 5"
            style={imageStyles}
          />
          <img 
            src={researchImages.doc6}
            alt="Research document 6"
            style={imageStyles}
          />
          <img 
            src={researchImages.doc7}
            alt="Research document 7"
            style={imageStyles}
          />
          <img 
            src={researchImages.doc8}
            alt="Research document 8"
            style={imageStyles}
          />
        </div>
      </div>
    </section>
  )
}

export default LexiDataCollectionResearch
