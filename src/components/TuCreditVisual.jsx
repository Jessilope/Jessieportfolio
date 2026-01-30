import { colors, spacing } from '../tokens'
import useResponsive from '../hooks/useResponsive'

// Mobile fonts image
const fontsImage = '/assets/images/tucredit/fonts.png'

const TuCreditVisual = () => {
  const { isMobile } = useResponsive()

  const imgLine7 = "http://localhost:3845/assets/394f81462ca09b8978882920d1ff27427f2f81b3.svg"

  const sectionStyles = {
    backgroundColor: '#fffefb',
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    alignItems: 'center',
    paddingTop: isMobile ? '48px' : '128px',
    paddingBottom: isMobile ? '48px' : '48px',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '96px',
    width: '100%',
    flexShrink: 0,
    boxSizing: 'border-box',
  }

  const titleStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: `'Kanit', sans-serif`,
    fontSize: '32px',
    fontWeight: 400,
    lineHeight: '32px',
    letterSpacing: '0',
    color: '#370161',
    textAlign: 'center',
    width: isMobile ? '100%' : '1121px',
    height: '32px',
    margin: 0,
    flexShrink: 0,
  }

  const fontsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    alignItems: 'flex-start',
    width: '100%',
    flexShrink: 0,
  }

  const fontsSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '47px',
    alignItems: 'flex-start',
    width: '100%',
    flexShrink: 0,
  }

  const aaDisplayStyles = {
    fontFamily: `'Saira', sans-serif`,
    fontSize: '94px',
    fontWeight: 600,
    lineHeight: '1.2',
    color: '#5b5b5b',
    textAlign: 'center',
    margin: 0,
    flexShrink: 0,
    fontVariationSettings: "'wdth' 100",
  }

  const dividerStyles = {
    width: '100%',
    height: '0',
    position: 'relative',
    flexShrink: 0,
  }

  const dividerImageStyles = {
    position: 'absolute',
    inset: '-1px 0 0 0',
    display: 'block',
    maxWidth: 'none',
    width: '100%',
    height: '100%',
  }

  const rowStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexShrink: 0,
  }

  return (
    <div style={sectionStyles}>
      {/* Title */}
      <div style={titleStyles}>
        <p style={{margin: 0}}>Visual</p>
      </div>

      {isMobile ? (
        /* Mobile: Show fonts image */
        <img
          src={fontsImage}
          alt="Typography - Font sizes and styles"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            pointerEvents: 'none',
          }}
        />
      ) : (
      /* Desktop: Fonts Container */
      <div style={fontsContainerStyles}>
        {/* Font Display */}
        <div style={fontsSectionStyles}>
          <p style={aaDisplayStyles}>Aa123</p>

          {/* Saira Medium */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '17px', alignItems: 'flex-start', width: '543px', lineHeight: '1.5', flexShrink: 0}}>
            <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '32px', fontWeight: 500, color: '#5b5b5b', width: '100%', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abecdefghijqklmnopqrstuvwxyz<br />
              1234567890!@#$%^&*()_+
            </p>
            <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '24px', fontWeight: 400, color: '#929292', width: '100%', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              Saira Medium
            </p>
          </div>

          {/* Saira Regular */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '53px', alignItems: 'flex-start', width: '414px', lineHeight: '1.5', fontSize: '24px', flexShrink: 0}}>
            <p style={{fontFamily: `'Saira', sans-serif`, fontWeight: 400, color: '#5b5b5b', width: '100%', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abecdefghijqklmnopqrstuvwxyz<br />
              1234567890!@#$%^&*()_+
            </p>
            <p style={{fontFamily: `'Saira', sans-serif`, fontWeight: 400, color: '#929292', width: '100%', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              Saira Regular
            </p>
          </div>
        </div>

        {/* Divider 1 */}
        <div style={dividerStyles}>
          <div style={{position: 'absolute', inset: '-1px 0 0 0'}}>
            <img src={imgLine7} alt="" style={dividerImageStyles} />
          </div>
        </div>

        {/* Headings */}
        <div style={rowStyles}>
          {/* Heading 1 */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start', width: '426px', flexShrink: 0}}>
            <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '24px', fontWeight: 400, lineHeight: '1.5', color: '#929292', textAlign: 'center', width: '100%', height: '44px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              Font size: 64 /  4 rem  / line hight 120%
            </p>
            <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '64px', fontWeight: 600, lineHeight: '1.2', color: '#303030', width: '100%', height: '93px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              HEADING 1
            </p>
          </div>

          {/* Heading 2 */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '45px', alignItems: 'flex-start', width: '426px', flexShrink: 0}}>
            <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '24px', fontWeight: 400, lineHeight: '1.5', color: '#929292', textAlign: 'center', width: '100%', height: '44px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              Font size: 48 /  3 rem  / line hight 120%
            </p>
            <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '48px', fontWeight: 500, lineHeight: '1.39', color: '#303030', width: '100%', height: '70px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              HEADING 2
            </p>
          </div>
        </div>

        {/* Divider 2 */}
        <div style={dividerStyles}>
          <div style={{position: 'absolute', inset: '-1px 0 0 0'}}>
            <img src={imgLine7} alt="" style={dividerImageStyles} />
          </div>
        </div>

        {/* Subheadings */}
        <div style={rowStyles}>
          {/* Subheading 1 */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '33px', alignItems: 'flex-start', width: '446px', flexShrink: 0}}>
            <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '24px', fontWeight: 400, lineHeight: '1.5', color: '#929292', textAlign: 'center', width: '100%', height: '44px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              Font size: 40 /  2.5 rem  / line hight 120%
            </p>
            <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '40px', fontWeight: 500, lineHeight: '1.3', color: '#303030', width: '100%', height: '62px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              SUBHEADING 1
            </p>
          </div>

          {/* Subheading 2 */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '34px', alignItems: 'flex-start', lineHeight: '1.5', width: '429px', flexShrink: 0}}>
            <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '24px', fontWeight: 400, color: '#929292', textAlign: 'center', width: '100%', height: '42px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              Font size: 32  /  2 rem  / line hight 120%
            </p>
            <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '32px', fontWeight: 500, color: '#303030', width: '100%', height: '56px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              SUBHEADING 2 DESKTOP
            </p>
          </div>
        </div>

        {/* Divider 3 */}
        <div style={dividerStyles}>
          <div style={{position: 'absolute', inset: '-1px 0 0 0'}}>
            <img src={imgLine7} alt="" style={dividerImageStyles} />
          </div>
        </div>

        {/* Bodies */}
        <div style={{...rowStyles, fontSize: '24px'}}>
          {/* Body normal */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '23px', alignItems: 'flex-start', lineHeight: '1.5', width: '443px', flexShrink: 0}}>
            <p style={{fontFamily: `'Saira', sans-serif`, fontWeight: 400, color: '#929292', textAlign: 'center', width: '100%', height: '43px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              Font size: 24 /  1.5 rem  / line hight 150%
            </p>
            <p style={{fontFamily: `'Saira', sans-serif`, fontWeight: 400, color: '#303030', width: '100%', height: '43px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              Body normal
            </p>
          </div>

          {/* Body bold */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '44px', alignItems: 'flex-start', width: '493px', flexShrink: 0}}>
            <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '24px', fontWeight: 400, lineHeight: '1.5', color: '#929292', textAlign: 'center', width: '100%', height: '41px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              Font size: 24 bold /  1.5 rem  / line hight 150%
            </p>
            <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '24px', fontWeight: 500, lineHeight: '1.4', color: '#303030', width: '100%', height: '40px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
              Body  bold
            </p>
          </div>
        </div>

        {/* Divider 4 */}
        <div style={dividerStyles}>
          <div style={{position: 'absolute', inset: '-1px 0 0 0'}}>
            <img src={imgLine7} alt="" style={dividerImageStyles} />
          </div>
        </div>

        {/* Caption */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '22px', alignItems: 'flex-start', lineHeight: '1.5', width: '402px', flexShrink: 0}}>
          <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '24px', fontWeight: 400, color: '#929292', textAlign: 'center', width: '100%', height: '44px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
            Font size: 16/  1 rem / line hight 150%
          </p>
          <p style={{fontFamily: `'Saira', sans-serif`, fontSize: '16px', fontWeight: 500, color: '#303030', width: '100%', height: '29px', margin: 0, flexShrink: 0, fontVariationSettings: "'wdth' 100"}}>
            CAPTION
          </p>
        </div>
      </div>
      )}
    </div>
  )
}

export default TuCreditVisual
