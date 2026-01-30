import { spacing } from '../tokens'

// Image path
const mockupImage = '/assets/images/lexi/mockup.png'

const LexiMockup = () => {
  const sectionStyles = {
    backgroundColor: '#fffefa',
    width: '100%',
    paddingLeft: '64px',
    paddingRight: '64px',
    paddingTop: '112px',
    paddingBottom: '48px',
    display: 'flex',
    alignItems: 'center',
  }

  const imageContainerStyles = {
    aspectRatio: '1936 / 1480',
    flex: '1 0 0',
    minHeight: '1px',
    minWidth: '1px',
    position: 'relative',
  }

  const imageStyles = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }

  return (
    <section style={sectionStyles}>
      <div style={imageContainerStyles}>
        <img 
          src={mockupImage}
          alt="Lexi app mockup with all screens"
          style={imageStyles}
        />
      </div>
    </section>
  )
}

export default LexiMockup
