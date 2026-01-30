import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const TuCreditDesignPrinciples = () => {
  const { isMobile } = useResponsive()

  const imgLine10 = "http://localhost:3845/assets/23926dcbd83e23bcf525dd6265992e6d1a08e6f3.svg"
  const imgLine11 = "http://localhost:3845/assets/140855ac4e9aff4465620809ac0d702104cecaab.svg"
  const imgLine12 = "http://localhost:3845/assets/43ec9691753b63462341129e13c998b822069938.svg"

  const sectionStyles = {
    backgroundColor: '#fffefb',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    width: '100%',
    flexShrink: 0,
  }

  const contentContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '48px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const introContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '12px' : '16px',
    alignItems: 'flex-start',
    width: '100%',
    flexShrink: 0,
  }

  const titleStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 700,
    lineHeight: '1.3',
    letterSpacing: '1.2px',
    color: '#370161',
    width: '100%',
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700",
  }

  const descriptionStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.8px',
    color: colors.semantic.textPrimary,
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const paragraphStyles = {
    margin: 0,
    marginBottom: 0,
  }

  const highlightsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '48px',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: isMobile ? '100%' : '862px',
    flexShrink: 0,
  }

  const highlightBlockStyles = {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
  }

  const lineContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '0',
    position: 'relative',
    flexShrink: 0,
  }

  const lineWrapperStyles = {
    transform: 'rotate(90deg)',
  }

  const textContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    letterSpacing: '0.8px',
    width: isMobile ? '100%' : '744px',
    flexShrink: isMobile ? 1 : 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const highlightTextStyles = {
    color: '#580092',
    lineHeight: '1.6',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const normalTextStyles = {
    color: colors.semantic.textPrimary,
    lineHeight: '1.6',
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  return (
    <div style={sectionStyles}>
      <div style={contentContainerStyles}>
        {/* Intro section */}
        <div style={introContainerStyles}>
          <p style={titleStyles}>Design Principles</p>
          <div style={descriptionStyles}>
            <p style={paragraphStyles}>
              Insights from the benchmark and user research revealed a consistent pattern: users need education before action, guidance before commitment, and reassurance throughout the process. Complex terminology, long forms, and unclear steps created friction and hesitation.
            </p>
            <p style={paragraphStyles}>
              To address these challenges, I translated research findings into a set of design principles that would act as decision-making anchors throughout the project. These principles ensured that every screen, interaction, and piece of content supported user confidence and reduced cognitive load.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div style={highlightsContainerStyles}>
          {/* Clear */}
          <div style={highlightBlockStyles}>
            <div style={{...lineContainerStyles, height: '74px'}}>
              <div style={lineWrapperStyles}>
                <div style={{width: '74px', height: '0', position: 'relative'}}>
                  <div style={{position: 'absolute', inset: '-3px 0 0 0'}}>
                    <img src={imgLine10} alt="" style={{display: 'block', maxWidth: 'none', width: '100%', height: '100%'}} />
                  </div>
                </div>
              </div>
            </div>
            <div style={textContainerStyles}>
              <p style={{margin: 0}}>
                <span style={highlightTextStyles}>
                  Clear<br />
                </span>
                <span style={normalTextStyles}>
                  Information is presented in a simple, structured way, helping users understand complex financial concepts without feeling overwhelmed.
                </span>
              </p>
            </div>
          </div>

          {/* Guided */}
          <div style={highlightBlockStyles}>
            <div style={{...lineContainerStyles, height: '67px'}}>
              <div style={lineWrapperStyles}>
                <div style={{width: '67px', height: '0', position: 'relative'}}>
                  <div style={{position: 'absolute', inset: '-3px 0 0 0'}}>
                    <img src={imgLine11} alt="" style={{display: 'block', maxWidth: 'none', width: '100%', height: '100%'}} />
                  </div>
                </div>
              </div>
            </div>
            <div style={textContainerStyles}>
              <p style={{margin: 0}}>
                <span style={highlightTextStyles}>
                  Guided<br />
                </span>
                <span style={normalTextStyles}>
                  The experience leads users step by step, offering direction and context at every stage instead of exposing users to long forms upfront.
                </span>
              </p>
            </div>
          </div>

          {/* Trustworthy */}
          <div style={highlightBlockStyles}>
            <div style={{...lineContainerStyles, height: '45px'}}>
              <div style={lineWrapperStyles}>
                <div style={{width: '45px', height: '0', position: 'relative'}}>
                  <div style={{position: 'absolute', inset: '-3px 0 0 0'}}>
                    <img src={imgLine12} alt="" style={{display: 'block', maxWidth: 'none', width: '100%', height: '100%'}} />
                  </div>
                </div>
              </div>
            </div>
            <div style={textContainerStyles}>
              <p style={{margin: 0}}>
                <span style={highlightTextStyles}>
                  Trustworthy<br />
                </span>
                <span style={normalTextStyles}>
                  The interface feels professional and transparent, reinforcing credibility and helping users feel secure while exploring mortgage options.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TuCreditDesignPrinciples
