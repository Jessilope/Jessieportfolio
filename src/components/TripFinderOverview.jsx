import { colors } from '../tokens'
import useResponsive from '../hooks/useResponsive'

const TripFinderOverview = () => {
  const { isMobile } = useResponsive()

  const sectionStyles = {
    backgroundColor: '#fffefa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: isMobile ? '24px' : '96px',
    paddingRight: isMobile ? '24px' : '64px',
    paddingTop: isMobile ? '64px' : '128px',
    paddingBottom: isMobile ? '32px' : '48px',
    width: '100%',
    flexShrink: 0,
  }

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '32px' : '48px',
    alignItems: 'flex-start',
    width: isMobile ? '100%' : '1126px',
    flexShrink: 0,
  }

  const titleStyles = {
    fontFamily: `'Kanit', sans-serif`,
    fontSize: isMobile ? '24px' : '32px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: isMobile ? '28px' : '32px',
    textAlign: 'center',
    color: '#370161',
    width: '100%',
    margin: 0,
    flexShrink: 0,
  }

  const textBlockStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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

  const lastParagraphStyles = {
    margin: 0,
  }

  const listContainerStyles = {
    fontFamily: `'Kantumruy', 'Noto Sans', sans-serif`,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 400,
    lineHeight: '0',
    letterSpacing: '0.8px',
    color: colors.semantic.textPrimary,
    width: '100%',
    flexShrink: 0,
    fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400",
  }

  const listParagraphStyles = {
    lineHeight: '1.6',
    margin: 0,
    marginBottom: 0,
  }

  const listStyles = {
    listStyleType: 'disc',
    marginBottom: 0,
    paddingLeft: '24px',
  }

  const listItemStyles = {
    marginBottom: 0,
    marginLeft: '24px',
  }

  const listItemSpanStyles = {
    lineHeight: '1.6',
  }

  return (
    <div style={sectionStyles}>
      <div style={containerStyles}>
        {/* Title */}
        <p style={titleStyles}>
          TripFinder: A Visual Concept for Women Who Travel Alone
        </p>

        {/* First text block */}
        <div style={textBlockStyles}>
          <p style={paragraphStyles}>
            TripFinder is a UI-focused project designed to improve my visual and interface design skills. The concept targets women who travel alone, with the goal of creating an experience that feels safe, calm, and inspiring.
          </p>
          <p style={paragraphStyles}>
            For this project, I intentionally focused on UI design rather than research, allowing me to explore layout, visual hierarchy, color, and component consistency without constraints. The objective was to strengthen my ability to translate a concept into a polished interface and experiment with visual decisions that support trust and comfort.
          </p>
          <p style={lastParagraphStyles}>
            TripFinder represents a design exercise centered on aesthetics, usability patterns, and visual storytelling, helping me grow as a designer while exploring a meaningful travel-focused concept.
          </p>
        </div>

        {/* Second text block */}
        <div style={textBlockStyles}>
          <p style={paragraphStyles}>
            The final outcome is a mortgage loan experience that prioritizes clarity, trust, and user confidence. By breaking down complex financial information into manageable steps, the design helps users understand their options, assess affordability, and move forward in the process with greater certainty. The solution transforms a traditionally intimidating process into a guided and transparent journey, supporting informed decision-making and building trust from the first interaction.
          </p>
          <p style={lastParagraphStyles}>&nbsp;</p>
        </div>

        {/* Screens Designed list */}
        <div style={listContainerStyles}>
          <p style={listParagraphStyles}>Screens Designed</p>
          <p style={listParagraphStyles}>
            The TripFinder UI includes a set of key screens that cover the core user flow and showcase visual consistency across the app:
          </p>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Onboarding / Authentication<br />
                Entry screen with sign up and log in actions, setting the tone for a calm and welcoming experience.
              </span>
            </li>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Home<br />
                Destination discovery with search, category filters, featured stays, and visual cards to encourage exploration.
              </span>
            </li>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Details<br />
                Accommodation detail screen with imagery, key information, highlights, pricing, and a clear call to action.
              </span>
            </li>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Favorites<br />
                Saved destinations organized in lists, allowing users to easily revisit and plan future trips.
              </span>
            </li>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Map View<br />
                Interactive map displaying available locations, helping users understand geography and proximity.
              </span>
            </li>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Profile & Settings<br />
                User profile with personal information, saved data, and access to account settings.
              </span>
            </li>
            <li style={listItemStyles}>
              <span style={listItemSpanStyles}>
                Notifications<br />
                Updates related to trips, offers, and relevant travel information.
              </span>
            </li>
          </ul>
          <p style={{ ...listParagraphStyles, lineHeight: '1.6' }}>
            These screens were designed to focus on clarity, visual hierarchy, and ease of navigation, reinforcing a sense of trust and comfort throughout the experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TripFinderOverview
