import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const DollarCityTypography = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefb',
    width: '100%',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '10px',
    alignItems: 'flex-start',
    position: 'relative',
  }

  const containerStyles = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    flexWrap: 'wrap',
    gap: isMobile ? '24px' : '0px 48px',
    alignItems: 'flex-start',
    width: '100%',
    color: '#242424',
    flexShrink: 0,
  }

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '24px' : '43px',
    alignItems: 'flex-start',
    flexShrink: 0,
    width: isMobile ? '100%' : 'auto',
  }

  const alphabetStyles = {
    fontFamily: `'Arial', sans-serif`,
    fontSize: isMobile ? '20px' : '48px',
    fontWeight: 700,
    lineHeight: isMobile ? '24px' : '48px',
    letterSpacing: '0',
    margin: 0,
    flexShrink: 0,
    wordBreak: isMobile ? 'break-all' : 'normal',
  }

  const loremStyles = {
    fontFamily: `'Arial', sans-serif`,
    fontSize: isMobile ? '14px' : '24px',
    fontWeight: 400,
    lineHeight: isMobile ? '20px' : '32px',
    letterSpacing: '0',
    width: isMobile ? '100%' : 'min-content',
    minWidth: isMobile ? undefined : '100%',
    margin: 0,
    flexShrink: 0,
  }

  const fontsContainerStyles = {
    display: isMobile ? 'none' : 'flex',
    gap: '44px',
    alignItems: 'center',
    flexShrink: 0,
  }

  const fontNamesColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '53px',
    alignItems: 'center',
    textAlign: 'center',
    width: '172px',
    flexShrink: 0,
  }

  const fontSizesColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '54px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '197px',
    flexShrink: 0,
  }

  const fontWeightContainerStyles = {
    display: 'flex',
    gap: isMobile ? '24px' : '33px',
    alignItems: 'flex-start',
    flexShrink: 0,
  }

  const regularColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    alignItems: 'flex-start',
    width: isMobile ? 'auto' : '77px',
    flexShrink: 0,
  }

  const boldColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: isMobile ? 'auto' : '62px',
    flexShrink: 0,
  }

  return (
    <div style={sectionStyles}>
      <div style={containerStyles}>
        {/* Content - Alphabet and Lorem */}
        <div style={contentStyles}>
          <p style={alphabetStyles}>
            ABCDEFGHIJKLMNÑOPQRSTVWXYZ
          </p>
          <p style={loremStyles}>
            Lorem ipsum dolor sit amet consectetur. Amet odio scelerisque vitae blandit eget maecenas diam. Turpis purus diam egestas pharetra vulputate ipsum massa gravida. Et tristique eu sed dolor facilisi mi duis. Venenatis quam arcu porttitor sit.
          </p>
        </div>

        {/* Fonts */}
        <div style={fontsContainerStyles}>
          {/* Font Names Column */}
          <div style={fontNamesColumnStyles}>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '48px', fontWeight: 700, lineHeight: '48px', width: '100%', margin: 0, flexShrink: 0}}>
              Title
            </p>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '36px', fontWeight: 400, lineHeight: '38px', width: '100%', margin: 0, flexShrink: 0}}>
              subtilte 1
            </p>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '24px', fontWeight: 400, lineHeight: '32px', width: '100%', margin: 0, flexShrink: 0}}>
              Subtitle 2
            </p>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '16px', fontWeight: 400, lineHeight: '26px', width: '100%', margin: 0, flexShrink: 0}}>
              Body 1
            </p>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '16px', fontWeight: 400, lineHeight: '26px', letterSpacing: '0.32px', width: '100%', margin: 0, flexShrink: 0}}>
              Body 2
            </p>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '16px', fontWeight: 400, lineHeight: '26px', width: '100%', margin: 0, flexShrink: 0}}>
              Body
            </p>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '12px', fontWeight: 400, lineHeight: '26px', width: '100%', margin: 0, flexShrink: 0}}>
              Caption
            </p>
          </div>

          {/* Font Sizes Column */}
          <div style={fontSizesColumnStyles}>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '48px', fontWeight: 700, lineHeight: '48px', textAlign: 'center', width: 'min-content', minWidth: '100%', margin: 0, flexShrink: 0}}>
              48 px
            </p>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '36px', fontWeight: 400, lineHeight: '38px', margin: 0, flexShrink: 0}}>
              36 px
            </p>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '24px', fontWeight: 400, lineHeight: '32px', margin: 0, flexShrink: 0}}>
              24 px
            </p>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '18px', fontWeight: 400, lineHeight: '26px', margin: 0, flexShrink: 0}}>
              186px
            </p>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '16px', fontWeight: 400, lineHeight: '26px', margin: 0, flexShrink: 0}}>
              16px
            </p>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '14px', fontWeight: 400, lineHeight: '22px', margin: 0, flexShrink: 0}}>
              14px
            </p>
            <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '12px', fontWeight: 400, lineHeight: '18px', margin: 0, flexShrink: 0}}>
              12 px
            </p>
          </div>
        </div>
      </div>

      {/* Font Weight - OUTSIDE container-typography */}
      <div style={fontWeightContainerStyles}>
        {/* Regular */}
        <div style={regularColumnStyles}>
          <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '48px', fontWeight: 400, lineHeight: '48px', color: '#242424', width: '100%', margin: 0, flexShrink: 0}}>
            Aa
          </p>
          <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '20px', fontWeight: 400, lineHeight: '28px', color: '#929292', width: '100%', margin: 0, flexShrink: 0}}>
            Regular
          </p>
        </div>

        {/* Bold */}
        <div style={boldColumnStyles}>
          <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '48px', fontWeight: 700, lineHeight: '48px', color: '#242424', width: '100%', margin: 0, flexShrink: 0}}>
            Aa
          </p>
          <p style={{fontFamily: `'Arial', sans-serif`, fontSize: '20px', fontWeight: 400, lineHeight: '28px', color: '#929292', textAlign: 'center', width: '100%', margin: 0, flexShrink: 0}}>
            Bold
          </p>
        </div>
      </div>
    </div>
  )
}

export default DollarCityTypography
