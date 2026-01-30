import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const TuCreditDefine = () => {
  const { isMobile } = useResponsive()

  const imgLine7 = "http://localhost:3845/assets/e11e696efa9330f294f5fdeb0c49009b8e4214ac.svg"
  const imgLine8 = "http://localhost:3845/assets/6c53c15cd99ed1ef1f723f72edb1f7525db1fe2f.svg"

  const sectionStyles = {
    backgroundColor: '#fffefb',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '218px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    width: '100%',
    flexShrink: 0,
  }

  const contentStyles = {
    display: 'flex',
    flex: isMobile ? '1 1 auto' : '1 0 0',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '48px',
    alignItems: 'center',
    minHeight: '1px',
    minWidth: isMobile ? '0' : '1px',
    position: 'relative',
    width: isMobile ? '100%' : 'auto',
  }

  const titleStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 400,
    lineHeight: isMobile ? '28px' : '32px',
    letterSpacing: '0',
    color: '#370161',
    textAlign: 'center',
    width: '100%',
    minWidth: '100%',
    margin: 0,
    flexShrink: 0,
  }

  const introParagraphStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.8px',
    color: '#5b5b5b',
    width: '100%',
    minWidth: '100%',
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const paragraphStyles = {
    margin: 0,
    marginBottom: 0,
  }

  const contentBlockStyles = {
    display: 'flex',
    gap: '9px',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: '1.6',
    letterSpacing: '0.8px',
    color: '#5b5b5b',
    width: isMobile ? '100%' : '747px',
    flexShrink: isMobile ? 1 : 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const highlightTextStyles = {
    color: '#580092',
  }

  const spanStyles = {
    lineHeight: '1.6',
  }

  return (
    <div style={sectionStyles}>
      <div style={contentStyles}>
        {/* Title */}
        <div style={titleStyles}>
          <p style={paragraphStyles}>Define</p>
        </div>

        {/* Intro paragraph */}
        <div style={introParagraphStyles}>
          <p style={paragraphStyles}>
            Based on the research and benchmark analysis, it became clear that applying for a mortgage loan is often overwhelming for users. While banks provide extensive information, it is frequently presented using complex language, long forms, and fragmented flows that make it difficult for users to understand where to start and what is required of them.
          </p>
          <p style={paragraphStyles}>&nbsp;</p>
          <p style={paragraphStyles}>Point of View (POV)</p>
          <p style={paragraphStyles}>
            A first-time home buyer needs a clear and educational mortgage experience because they want to understand loan options, requirements, and financial implications before making a high-impact decision.
          </p>
          <p style={paragraphStyles}>How Might We (HMW)</p>
          <p style={paragraphStyles}>
            How might we design a mortgage loan experience that educates users, simplifies complex financial information, and helps them evaluate their eligibility and options with confidence?
          </p>
          <p style={paragraphStyles}>
            This problem definition guided the design toward an experience focused on education, transparency, and step-by-step guidance, ensuring users feel supported rather than pressured throughout the journey.
          </p>
        </div>

        {/* First content block with line - Users need */}
        <div style={contentBlockStyles}>
          <div style={{...lineContainerStyles, height: '83px'}}>
            <div style={lineWrapperStyles}>
              <div style={{width: '83px', height: '0', position: 'relative'}}>
                <div style={{position: 'absolute', inset: '-3px 0 0 0'}}>
                  <img src={imgLine7} alt="" style={{display: 'block', maxWidth: 'none', width: '100%', height: '100%'}} />
                </div>
              </div>
            </div>
          </div>
          <div style={textContainerStyles}>
            <p style={paragraphStyles}>
              <span style={{...spanStyles, ...highlightTextStyles}}>Users need</span>
              <span style={spanStyles}> </span>
            </p>
            <p style={{...paragraphStyles, lineHeight: '1.6'}}>
              a mortgage experience that helps them learn, prepare, and evaluate their options before committing to an application. Many are not ready to apply immediately; instead, they seek clarity around credit types, requirements, and affordability in order to feel confident and informed.
            </p>
          </div>
        </div>

        {/* Second content block - POV */}
        <div style={contentBlockStyles}>
          <div style={{...lineContainerStyles, height: '83px'}}>
            <div style={lineWrapperStyles}>
              <div style={{width: '83px', height: '0', position: 'relative'}}>
                <div style={{position: 'absolute', inset: '-3px 0 0 0'}}>
                  <img src={imgLine7} alt="" style={{display: 'block', maxWidth: 'none', width: '100%', height: '100%'}} />
                </div>
              </div>
            </div>
          </div>
          <div style={{...textContainerStyles, lineHeight: '1.6'}}>
            <p style={{...paragraphStyles, ...highlightTextStyles}}>Point of View (POV)</p>
            <p style={paragraphStyles}>
              A first-time home buyer needs a clear and educational mortgage experience because they want to understand loan options, requirements, and financial implications before making a high-impact decision.
            </p>
          </div>
        </div>

        {/* Third content block - HMW */}
        <div style={contentBlockStyles}>
          <div style={{...lineContainerStyles, height: '148px'}}>
            <div style={lineWrapperStyles}>
              <div style={{width: '148px', height: '0', position: 'relative'}}>
                <div style={{position: 'absolute', inset: '-3px 0 0 0'}}>
                  <img src={imgLine8} alt="" style={{display: 'block', maxWidth: 'none', width: '100%', height: '100%'}} />
                </div>
              </div>
            </div>
          </div>
          <div style={{...textContainerStyles, lineHeight: '1.6'}}>
            <p style={{...paragraphStyles, ...highlightTextStyles}}>How Might We (HMW)</p>
            <p style={paragraphStyles}>
              How might we design a mortgage loan experience that educates users, simplifies complex financial information, and helps them evaluate their eligibility and options with confidence? This problem definition guided the design toward an experience focused on education, transparency, and step-by-step guidance, ensuring users feel supported rather than pressured throughout the journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TuCreditDefine
