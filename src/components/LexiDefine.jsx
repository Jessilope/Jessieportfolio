import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const LexiDefine = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '64px',
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
    gap: isMobile ? '32px' : spacing.xxl, // 48px
    alignItems: 'center',
    width: '100%',
  }

  const headerStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 400,
    lineHeight: isMobile ? '28px' : '32px',
    letterSpacing: '0',
    color: '#370161',
    textAlign: 'center',
    margin: 0,
  }

  const bodyTextStyles = {
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

  const highlightContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '32px',
    alignItems: 'center',
    width: '100%',
  }

  const highlightItemStyles = {
    display: 'flex',
    gap: '9px',
    alignItems: isMobile ? 'flex-start' : 'center',
    width: '100%',
  }

  const lineContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '0',
    flexShrink: 0,
  }

  const highlightTextStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.8px',
    color: colors.neutral['700'],
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
    margin: 0,
    width: isMobile ? '100%' : '747px',
    flexShrink: isMobile ? 1 : 0,
  }

  const highlightLabelStyles = {
    color: '#580092',
  }

  return (
    <section style={sectionStyles}>
      <div style={contentStyles}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
          <p style={headerStyles}>Define</p>
        </div>
        
        <p style={bodyTextStyles}>
          Based on the insights gathered during the empathy phase, I defined a clear point of view to focus the problem on a specific user and need. This helped translate research findings into an actionable design challenge aligned with both functional and emotional goals.
        </p>

        <div style={highlightContainerStyles}>
          {/* Point of View */}
          <div style={highlightItemStyles}>
            <div style={{ 
              width: '3px',
              minHeight: isMobile ? '100px' : '81px',
              height: isMobile ? 'auto' : '81px',
              backgroundColor: '#580092',
              flexShrink: 0,
              alignSelf: 'stretch',
            }} />
            <p style={highlightTextStyles}>
              <span style={highlightLabelStyles}>Point of View</span>
              <br />
              Amanda is a self-motivated language learner who needs an engaging, professional, and flexible tool because she values consistent learning and is looking for an experience where her goals are taken seriously.
            </p>
          </div>

          {/* How Might We */}
          <div style={{ ...highlightItemStyles, gap: '11px' }}>
            <div style={{ 
              width: '3px',
              minHeight: isMobile ? '80px' : '56px',
              height: isMobile ? 'auto' : '56px',
              backgroundColor: '#580092',
              flexShrink: 0,
              alignSelf: 'stretch',
            }} />
            <p style={highlightTextStyles}>
              <span style={highlightLabelStyles}>How Might We</span>
              <br />
              How might we create a natural learning experience that helps Amanda practice English consistently while feeling guided, as if she were learning with a native speaker?
            </p>
          </div>
        </div>

        <p style={bodyTextStyles}>
          This problem statement guided all design decisions, ensuring the app addresses real emotional and functional barriers faced by learners, while staying aligned with Lexi's goal of providing a supportive, intentional, and confidence-building learning environment.
        </p>
      </div>
    </section>
  )
}

export default LexiDefine
